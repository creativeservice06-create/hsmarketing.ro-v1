import type {Metadata} from 'next';
import Link from 'next/link';
import {notFound} from 'next/navigation';
import {ArrowRight, CheckCircle2, ChevronRight, Phone, Search} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BrandMark from '@/components/BrandMark';
import ContactForm from '@/components/ContactForm';
import {SERVICES,SITE} from '@/lib/site';
import {SERVICE_DETAILS} from '@/lib/serviceDetails';

export function generateStaticParams(){return SERVICES.map(s=>({slug:s.slug}));}
export const dynamicParams=false;
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{
 const {slug}=await params;const s=SERVICES.find(v=>v.slug===slug);
 if(!s)return {};
 return {title:s.title,description:s.short,alternates:{canonical:`/${slug}/`},openGraph:{title:s.title,description:s.description,url:`${SITE.url}/${slug}/`}};
}

export default async function ServicePage({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params;const s=SERVICES.find(v=>v.slug===slug);if(!s)notFound();
  const extra=SERVICE_DETAILS[slug];
  const structured={'@context':'https://schema.org','@type':'Service','@id':`${SITE.url}/${slug}/#service`,name:s.name,serviceType:s.name,description:s.description,url:`${SITE.url}/${slug}/`,provider:{'@id':`${SITE.url}/#organization`},areaServed:{'@type':'Country',name:'România'}};
  const breadcrumbs={'@context':'https://schema.org','@type':'BreadcrumbList',itemListElement:[{'@type':'ListItem',position:1,name:'Acasă',item:SITE.url},{'@type':'ListItem',position:2,name:s.name,item:`${SITE.url}/${slug}/`}]};
  const faqStructured={'@context':'https://schema.org','@type':'FAQPage',mainEntity:s.faq.map(q=>({'@type':'Question',name:q.question,acceptedAnswer:{'@type':'Answer',text:q.answer}}))};
  return <><Header/><main className="service-page"><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(structured)}}/><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(breadcrumbs)}}/><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(faqStructured)}}/>
    <section className="service-hero service-hero-v7"><div className="container"><nav aria-label="breadcrumb" className="breadcrumbs"><Link href="/">Acasă</Link><ChevronRight size={14}/><Link href="/#servicii">Servicii</Link><ChevronRight size={14}/><span>{s.name}</span></nav><div className="service-hero-layout"><div><div className="eyebrow">{s.eyebrow}</div><h1>{s.title}</h1><p className="hero-lead">{s.description}</p><div className="hero-buttons"><Link className="btn btn-blue" href="#solicita-oferta">Cere o ofertă <ArrowRight size={18}/></Link><Link className="btn btn-outline" href="/#preturi">Vezi pachetele</Link></div><p className="service-note">{s.priceNote}</p></div><div className="service-hero-visual"><BrandMark kind={s.brand} size={s.brand==='tiktok'?118:88}/><h2>{s.name}</h2><p>{s.short}</p><div className="service-small-status"><CheckCircle2 size={17}/> Administrare și optimizare, în funcție de obiective</div></div></div></div></section>
    <section className="section"><div className="container service-content-grid"><div><div className="kicker">CE INCLUDE</div><h2>Lucrăm pe ceea ce contează pentru afacerea ta.</h2><p>Fiecare proiect începe cu o discuție despre nevoile reale, buget și obiective.</p><div className="service-point-list">{s.points.map(point=><div key={point}><CheckCircle2 size={20}/><span>{point}</span></div>)}</div></div><div className="deliverables"><h3>Etapele colaborării</h3>{s.deliverables.map((point,i)=><div key={point}><span>{String(i+1).padStart(2,'0')}</span><p>{point}</p></div>)}<Link href="#solicita-oferta" className="text-link">Discută proiectul tău <ArrowRight size={17}/></Link></div></div></section>
    {extra&&<>
     <section className="section service-editorial-v7"><div className="container service-v7-editorial-head">
      <div><div className="section-eyebrow">ABORDAREA NOASTRĂ</div><h2>{extra.proposition}</h2></div>
      <p>{extra.intro}</p>
     </div><div className="container service-outcomes-v7">{extra.outcomes.map((item,i)=><article key={item.title}><span>{String(i+1).padStart(2,'0')}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div></section>
     <section className="section service-strategy-v7"><div className="container"><div className="section-eyebrow">CE FACEM, CONCRET</div><h2>Un proces explicat de la început până la optimizare.</h2><div className="service-strategy-v7-grid">{extra.strategy.map((item,i)=><article key={item.title}><div className="service-strategy-v7-number">ETAPA {String(i+1).padStart(2,'0')}</div><h3>{item.title}</h3><p>{item.text}</p></article>)}</div></div></section>
     <section className="section service-fit-v7"><div className="container service-fit-v7-layout"><div><div className="section-eyebrow">PENTRU CINE ESTE POTRIVIT</div><h2>Serviciul potrivit începe cu obiective realiste.</h2><p>{extra.audience}</p></div><aside><span>RAPORTARE ȘI SUPORT</span><h3>Ce vei putea urmări</h3><p>{extra.report}</p><Link href="#solicita-oferta" className="text-link">Discută-ne obiectivele <ArrowRight size={17}/></Link></aside></div></section>
     <section className="section related-services-v7"><div className="container"><div className="section-eyebrow">SERVICII COMPLEMENTARE</div><h2>O strategie bună conectează mai multe componente.</h2><div className="related-services-v7-grid">{extra.related.map(rel=>{const rs=SERVICES.find(v=>v.slug===rel);return rs?<Link key={rs.slug} href={`/${rs.slug}/`}><BrandMark kind={rs.brand} size={rs.brand==='tiktok'?54:38}/><strong>{rs.name}</strong><ArrowRight size={18}/></Link>:null})}</div></div></section>
    </>}
    <section className="section section-faq"><div className="container service-faq"><div className="kicker">INFORMAȚII UTILE</div><h2>Întrebări despre {s.name}</h2><div className="faq-accordion">{s.faq.map((q,i)=><details open={i===0} key={q.question}><summary>{q.question}<span className="faq-chevron">+</span></summary><p>{q.answer}</p></details>)}</div></div></section>
    <section id="solicita-oferta" className="contact-section"><div className="container contact-grid"><div className="contact-copy"><div className="kicker">HAI SĂ VORBIM</div><h2>Ai nevoie de {s.name.toLowerCase()}?</h2><p>Spune-ne despre afacerea ta și îți propunem o variantă potrivită. Fără rezultate promise artificial.</p><a className="contact-phone-link" href={SITE.phoneHref}><Phone size={23}/><span><small>Ne poți suna direct</small><strong>{SITE.phone}</strong></span></a></div><div className="contact-card"><h3>Cere o ofertă</h3><p>Vom reveni cu un răspuns după ce analizăm solicitarea.</p><ContactForm initialService={s.name}/></div></div></section>
  </main><Footer/></>
}
