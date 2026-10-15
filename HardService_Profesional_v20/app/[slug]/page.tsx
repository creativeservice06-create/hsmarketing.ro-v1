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
import {SERVICE_GUIDES} from '@/lib/serviceGuides';

const SERVICE_SEO:Record<string,{title:string;description:string}>= {
  "google-ads": {
    "title": "Administrare Google Ads și campanii PPC",
    "description": "Administrare Google Ads: campanii Search, optimizare cuvinte cheie, anunțuri și conversii. Promovare pentru firme cu raportare și suport."
  },
  "facebook-instagram-ads": {
    "title": "Promovare Facebook și Instagram Ads | Meta Ads",
    "description": "Campanii Facebook și Instagram Ads: formulare de lead-uri, audiențe, remarketing, Meta Pixel, reclame și optimizare continuă."
  },
  "tiktok-ads": {
    "title": "Administrare TikTok Ads pentru firme",
    "description": "Promovare TikTok Ads pentru firme: strategie video, configurarea campaniilor, TikTok Pixel, optimizare și raportare."
  },
  "creare-site": {
    "title": "Creare site de prezentare și landing page",
    "description": "Creare site-uri profesionale și landing page-uri responsive, cu structură SEO, formulare și pagini optimizate pentru conversii."
  },
  "magazin-online": {
    "title": "Creare magazin online și dezvoltare e-commerce",
    "description": "Dezvoltare magazine online cu pagini de produse, checkout, integrare tracking și pregătire pentru Google Ads și Meta Ads."
  },
  "tracking-conversii": {
    "title": "Tracking conversii GA4 și Google Tag Manager",
    "description": "Configurare Google Analytics 4, Google Tag Manager și conversii pentru formulare, clicuri telefonice și comenzi e-commerce."
  },
  "seo-tehnic": {
    "title": "SEO tehnic: audit, indexare și optimizare site",
    "description": "Servicii SEO tehnic: audit de indexare, sitemap, robots.txt, canonical, structură, performanță și verificare Google Search Console."
  }
};

export function generateStaticParams(){return SERVICES.map(s=>({slug:s.slug}));}
export const dynamicParams=false;
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{
 const {slug}=await params;const s=SERVICES.find(v=>v.slug===slug);
 if(!s)return {};
 const seo=SERVICE_SEO[slug]||{title:s.name,description:s.description};
 return {title:{absolute:`${seo.title} | Hard Service`},description:seo.description,alternates:{canonical:`/${slug}/`},openGraph:{title:`${seo.title} | Hard Service`,description:seo.description,url:`${SITE.url}/${slug}/`,images:[{url:'/og-hard-service.png',width:1200,height:630,alt:`Hard Service — ${s.name}`}]},twitter:{card:'summary_large_image',title:`${seo.title} | Hard Service`,description:seo.description,images:['/og-hard-service.png']}};
}

export default async function ServicePage({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params;const s=SERVICES.find(v=>v.slug===slug);if(!s)notFound();
  const extra=SERVICE_DETAILS[slug];
  const guide=SERVICE_GUIDES[slug];
  const faqs=[...s.faq,...(guide?.questions||[])];
  const structured={'@context':'https://schema.org','@type':'Service','@id':`${SITE.url}/${slug}/#service`,name:s.name,serviceType:s.name,description:s.description,url:`${SITE.url}/${slug}/`,provider:{'@id':`${SITE.url}/#organization`},areaServed:{'@type':'Country',name:'România'}};
  const breadcrumbs={'@context':'https://schema.org','@type':'BreadcrumbList',itemListElement:[{'@type':'ListItem',position:1,name:'Acasă',item:SITE.url},{'@type':'ListItem',position:2,name:'Servicii',item:`${SITE.url}/#servicii`},{'@type':'ListItem',position:3,name:s.name,item:`${SITE.url}/${slug}/`}]};
  const faqStructured={'@context':'https://schema.org','@type':'FAQPage',mainEntity:faqs.map(q=>({'@type':'Question',name:q.question,acceptedAnswer:{'@type':'Answer',text:q.answer}}))};
  return <><Header/><main className="service-page"><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(structured)}}/><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(breadcrumbs)}}/><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(faqStructured)}}/>
    <section className="service-hero service-hero-v7"><div className="container"><nav aria-label="breadcrumb" className="breadcrumbs"><Link href="/">Acasă</Link><ChevronRight size={14}/><Link href="/#servicii">Servicii</Link><ChevronRight size={14}/><span>{s.name}</span></nav><div className="service-hero-layout"><div><div className="eyebrow">{s.eyebrow}</div><h1>{s.title}</h1><p className="hero-lead">{s.description}</p><div className="hero-buttons"><Link className="btn btn-blue" href="#solicita-oferta">Cere o ofertă <ArrowRight size={18}/></Link><Link className="btn btn-outline" href="/#preturi">Vezi pachetele</Link></div><p className="service-note">{s.priceNote}</p></div><div className="service-hero-visual"><BrandMark kind={s.brand} size={s.brand==='tiktok'?118:s.brand==='google'?110:88}/><h2>{s.name}</h2><p>{s.short}</p><div className="service-small-status"><CheckCircle2 size={17}/> Administrare și optimizare, în funcție de obiective</div></div></div></div></section>
    <section className="section"><div className="container service-content-grid"><div><div className="kicker">CE INCLUDE</div><h2>Lucrăm pe ceea ce contează pentru afacerea ta.</h2><p>Fiecare proiect începe cu o discuție despre nevoile reale, buget și obiective.</p><div className="service-point-list">{s.points.map(point=><div key={point}><CheckCircle2 size={20}/><span>{point}</span></div>)}</div></div><div className="deliverables"><h3>Etapele colaborării</h3>{s.deliverables.map((point,i)=><div key={point}><span>{String(i+1).padStart(2,'0')}</span><p>{point}</p></div>)}<Link href="#solicita-oferta" className="text-link">Discută proiectul tău <ArrowRight size={17}/></Link></div></div></section>
    {extra&&<>
     <section className="section service-editorial-v7"><div className="container service-v7-editorial-head">
      <div><div className="section-eyebrow">ABORDAREA NOASTRĂ</div><h2>{extra.proposition}</h2></div>
      <p>{extra.intro}</p>
     </div><div className="container service-outcomes-v7">{extra.outcomes.map((item,i)=><article key={item.title}><span>{String(i+1).padStart(2,'0')}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div></section>
     <section className="section service-strategy-v7"><div className="container"><div className="section-eyebrow">CE FACEM, CONCRET</div><h2>Un proces explicat de la început până la optimizare.</h2><div className="service-strategy-v7-grid">{extra.strategy.map((item,i)=><article key={item.title}><div className="service-strategy-v7-number">ETAPA {String(i+1).padStart(2,'0')}</div><h3>{item.title}</h3><p>{item.text}</p></article>)}</div></div></section>
     <section className="section service-fit-v7"><div className="container service-fit-v7-layout"><div><div className="section-eyebrow">PENTRU CINE ESTE POTRIVIT</div><h2>Serviciul potrivit începe cu obiective realiste.</h2><p>{extra.audience}</p></div><aside><span>RAPORTARE ȘI SUPORT</span><h3>Ce vei putea urmări</h3><p>{extra.report}</p><Link href="#solicita-oferta" className="text-link">Discută-ne obiectivele <ArrowRight size={17}/></Link></aside></div></section>
     <section className="section related-services-v7"><div className="container"><div className="section-eyebrow">SERVICII COMPLEMENTARE</div><h2>O strategie bună conectează mai multe componente.</h2><div className="related-services-v7-grid">{extra.related.map(rel=>{const rs=SERVICES.find(v=>v.slug===rel);return rs?<Link key={rs.slug} href={`/${rs.slug}/`}><BrandMark kind={rs.brand} size={rs.brand==='tiktok'?54:rs.brand==='google'?48:38}/><strong>{rs.name}</strong><ArrowRight size={18}/></Link>:null})}</div></div></section>
    </>}

    {guide&&<>
      <nav className="service-guide-nav container" aria-label="Navigare în pagină">
        <a href="#detalii-serviciu">În detaliu</a>
        <a href="#exemplu-practic">Exemplu și pregătire</a>
        <a href="#intrebari">Întrebări frecvente</a>
      </nav>
      <section className="section service-guide-v20" id="detalii-serviciu">
        <div className="container">
          <div className="service-guide-v20-intro">
            <span className="section-eyebrow">INFORMAȚII PRACTICE PENTRU {s.name.toUpperCase()}</span>
            <h2>{guide.focusTitle}</h2>
            <p>{guide.focusIntro}</p>
          </div>
          <div className="service-guide-v20-grid">
            {guide.pillars.map((module,i)=><article key={module.title} className="service-guide-v20-card">
              <div className="service-guide-v20-index">{String(i+1).padStart(2,'0')} / 03</div>
              <h3>{module.title}</h3>
              <p>{module.text}</p>
              <ul>{module.points.map(point=><li key={point}><CheckCircle2 size={17} aria-hidden="true"/><span>{point}</span></li>)}</ul>
            </article>)}
          </div>
        </div>
      </section>
      <section className="section service-practice-v20" id="exemplu-practic">
        <div className="container service-practice-v20-grid">
          <article className="service-practice-v20-example">
            <span className="section-eyebrow">EXEMPLU EXPLICAT</span>
            <h2>{guide.exampleTitle}</h2>
            <p>{guide.example}</p>
          </article>
          <article className="service-practice-v20-checklist">
            <span className="section-eyebrow">CE PREGĂTIM ÎNAINTE DE ÎNCEPERE</span>
            <h3>Informații și accesuri necesare</h3>
            <ul>{guide.prerequisites.map(item=><li key={item}><CheckCircle2 size={18} aria-hidden="true"/><span>{item}</span></li>)}</ul>
          </article>
        </div>
      </section>
      <section className="section service-limits-v20">
        <div className="container service-limits-v20-layout">
          <div><span className="section-eyebrow">TRANSPARENȚĂ ȘI AȘTEPTĂRI</span><h2>{guide.caveatTitle}</h2></div>
          <p>{guide.caveat}</p>
        </div>
      </section>
    </>}
    <section className="section service-v8-faq" id="intrebari"><div className="container service-v8-faq-layout"><div className="service-v8-faq-copy"><div className="section-eyebrow">ÎNTREBĂRI FRECVENTE</div><h2>Ce trebuie să știi despre {s.name}?</h2><p>Am adunat câteva explicații despre buget, implementare și rezultate, pentru ca decizia de promovare să pornească de la așteptări corecte.</p><Link className="text-link" href="#solicita-oferta">Cere o ofertă pentru {s.name} <ArrowRight size={17}/></Link></div><div className="service-v8-faq-items">{faqs.map((q,i)=><details key={q.question}><summary><span className="faq-v8-index">{String(i+1).padStart(2,'0')}</span><span>{q.question}</span><span className="faq-v8-plus" aria-hidden="true">+</span></summary><p>{q.answer}</p></details>)}</div></div></section>
    <section id="solicita-oferta" className="section contact-v8-section service-v8-contact"><div className="container contact-v8-layout"><div className="contact-v8-intro"><div className="section-eyebrow">CONTACT HARD SERVICE</div><h2>Vrei să începem cu {s.name}?</h2><p>Spune-ne ce tip de afacere ai, ce servicii vrei să promovezi și ce așteptări ai. Analizăm solicitarea și discutăm o propunere realistă.</p><div className="contact-v8-benefits"><div><CheckCircle2 size={20}/><span><strong>Discutăm obiectivul</strong><small>Clarificăm ce solicitări urmărești și cui te adresezi.</small></span></div><div><CheckCircle2 size={20}/><span><strong>Stabilim direcția</strong><small>Recomandăm pașii potriviți pentru campanii și website.</small></span></div><div><CheckCircle2 size={20}/><span><strong>Explicăm costurile</strong><small>Tariful de administrare și bugetul Ads sunt separate.</small></span></div></div><a className="contact-v8-phone" href={SITE.phoneHref}><Phone size={19}/> Ne poți suna direct: <strong>{SITE.phone}</strong></a></div><div className="contact-v8-form"><div className="contact-v8-formhead"><span>FORMULAR OFERTĂ</span><h3>Spune-ne despre proiect</h3><p>Vom reveni după analizarea informațiilor transmise.</p></div><ContactForm initialService={s.name}/></div></div></section>
  </main><Footer/></>
}
