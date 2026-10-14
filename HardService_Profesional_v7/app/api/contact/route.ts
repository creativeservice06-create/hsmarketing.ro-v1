import {NextResponse} from 'next/server';
import nodemailer from 'nodemailer';
import {createHash} from 'crypto';
import {SITE} from '@/lib/site';

export const runtime='nodejs';
const recent=new Map<string,number>();
const MAX_AGE=90_000;
function clean(x:unknown,n=5000){return String(x??'').trim().slice(0,n)}
function escapeHtml(s:string){return s.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]??c));}
export async function POST(req:Request){
  let key='';
  try{
    const data=await req.json();
    if(clean(data.website))return NextResponse.json({ok:true}); // honeypot
    if(data.consent!=='on')return NextResponse.json({error:'Trebuie să accepți politica de confidențialitate.'},{status:400});
    const nume=clean(data.nume,100),prenume=clean(data.prenume,100),email=clean(data.email,200),telefon=clean(data.telefon,50),mesaj=clean(data.mesaj,5000),serviciu=clean(data.serviciu,140);
    if(!nume||!prenume||!email||!telefon||mesaj.length<10)return NextResponse.json({error:'Completează toate câmpurile și un mesaj de minimum 10 caractere.'},{status:400});
    if(!/^\S+@\S+\.\S+$/.test(email))return NextResponse.json({error:'Emailul nu este valid.'},{status:400});
    key=createHash('sha256').update([email.toLowerCase(),telefon,mesaj].join('|')).digest('hex');
    const now=Date.now();for(const [k,t] of recent){if(now-t>MAX_AGE)recent.delete(k)}
    if(recent.has(key))return NextResponse.json({ok:true,deduplicated:true});
    recent.set(key,now);
    const host=process.env.SMTP_HOST||'smtp.mail.yahoo.com';
    const port=Number(process.env.SMTP_PORT||465);
    const user=process.env.SMTP_USER||'';
    const pass=process.env.SMTP_PASS||'';
    const to=process.env.CONTACT_TO||SITE.email;
    if(!user||!pass){recent.delete(key);return NextResponse.json({error:'Formularul nu are încă setările SMTP. Sună-ne direct sau scrie-ne pe email.'},{status:503})}
    const transporter=nodemailer.createTransport({host,port,secure:port===465,auth:{user,pass},connectionTimeout:20_000,tls:{minVersion:'TLSv1.2'}});
    await transporter.sendMail({from:`"Hard Service Website" <${user}>`,to,replyTo:email,subject:`Solicitare Hard Service — ${nume} ${prenume}`,
      text:`Solicitare de pe hardservicesrl.ro\nNume: ${nume} ${prenume}\nEmail: ${email}\nTelefon: ${telefon}\nServiciu: ${serviciu||'Neselectat'}\n\n${mesaj}`,
      html:`<div style="font-family:Arial,sans-serif;color:#17243a;max-width:620px"><h2>Solicitare nouă Hard Service</h2><p><b>Nume:</b> ${escapeHtml(nume)} ${escapeHtml(prenume)}</p><p><b>Email:</b> ${escapeHtml(email)}</p><p><b>Telefon:</b> ${escapeHtml(telefon)}</p><p><b>Serviciu:</b> ${escapeHtml(serviciu||'Neselectat')}</p><p><b>Mesaj:</b></p><div style="padding:16px;background:#f2f7ff;border-radius:10px;white-space:pre-wrap">${escapeHtml(mesaj)}</div></div>`});
    return NextResponse.json({ok:true});
  }catch(err){if(key)recent.delete(key);console.error('Contact send error:',err instanceof Error?err.message:String(err));return NextResponse.json({error:'Trimiterea nu a reușit. Încearcă din nou sau sună-ne.'},{status:500});}
}
