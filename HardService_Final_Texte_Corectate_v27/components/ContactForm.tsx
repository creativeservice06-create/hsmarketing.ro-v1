'use client';
import {FormEvent, useState} from 'react';
import Link from 'next/link';
import {ArrowRight, Loader2, CheckCircle2, AlertCircle} from 'lucide-react';
import {SERVICES, SITE} from '@/lib/site';

export default function ContactForm({initialService=''}:{initialService?:string}){
  const [busy,setBusy]=useState(false);
  const [result,setResult]=useState<{ok:boolean;message:string}|null>(null);
  async function send(e:FormEvent<HTMLFormElement>){
    e.preventDefault(); if(busy)return;
    const form=e.currentTarget;
    const data=Object.fromEntries(new FormData(form).entries());
    if(data.consent!=='on')return setResult({ok:false,message:'Te rugăm să accepți prelucrarea datelor pentru a trimite solicitarea.'});
    setBusy(true);setResult(null);
    try{
      const resp=await fetch('/api/contact',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(data)});
      const json=await resp.json().catch(()=>({}));
      if(!resp.ok)throw new Error(json.error||'Solicitarea nu a putut fi trimisă.');
      setResult({ok:true,message:'Solicitarea a fost trimisă. Îți vom răspunde în cel mai scurt timp posibil.'});form.reset();
    }catch(err){setResult({ok:false,message:err instanceof Error?err.message:'Eroare de trimitere. Poți suna direct.'});}
    finally{setBusy(false);}
  }
  return <form className="contact-form" onSubmit={send} noValidate={false}>
    <div className="form-grid"><label>Nume <input name="nume" required maxLength={100} autoComplete="family-name" placeholder="Nume"/></label><label>Prenume <input name="prenume" required maxLength={100} autoComplete="given-name" placeholder="Prenume"/></label></div>
    <div className="form-grid"><label>Adresă de email <input name="email" required type="email" maxLength={200} autoComplete="email" placeholder="email@firma.ro"/></label><label>Telefon <input name="telefon" required type="tel" maxLength={50} autoComplete="tel" placeholder="07xx xxx xxx"/></label></div>
    <label>Serviciul dorit <select name="serviciu" defaultValue={initialService}><option value="">Alege un serviciu (opțional)</option>{SERVICES.map(s=><option value={s.name} key={s.slug}>{s.name}</option>)}<option value="Mai multe servicii">Mai multe servicii</option></select></label>
    <label>Cu ce te putem ajuta? <textarea name="mesaj" required minLength={10} maxLength={5000} rows={4} placeholder="Spune-ne pe scurt ce tip de afacere ai și ce vrei să obții..."/></label>
    <div className="honeypot" aria-hidden="true"><label>Website <input name="website" tabIndex={-1} autoComplete="off"/></label></div>
    <label className="form-consent"><input type="checkbox" name="consent" required/><span>Am citit <Link href="/politica-confidentialitate/" target="_blank">Politica de confidențialitate</Link> și sunt de acord să fiu contactat(ă) în legătură cu solicitarea mea.</span></label>
    <button className="hs-btn hs-btn-primary form-submit" type="submit" disabled={busy}>{busy?<><Loader2 className="spin" size={18}/> Se trimite...</>:<>Trimite solicitarea <ArrowRight size={18}/></>}</button>
    {result&&<div role="status" className={`form-result ${result.ok?'form-ok':'form-error'}`}>{result.ok?<CheckCircle2 size={19}/>:<AlertCircle size={19}/>}<span>{result.message} {!result.ok&&<a href={SITE.phoneHref}>Sună: {SITE.phone}</a>}</span></div>}
  </form>
}
