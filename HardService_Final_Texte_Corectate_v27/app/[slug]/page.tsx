import type {Metadata} from 'next';
import Link from 'next/link';
import {notFound} from 'next/navigation';
import {ArrowRight,ArrowUpRight,CheckCircle2,ChevronRight,Phone,ShieldCheck} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PartnerBadges from '@/components/PartnerBadges';
import BrandMark from '@/components/BrandMark';
import ContactForm from '@/components/ContactForm';
import {SERVICES,SITE} from '@/lib/site';
import {SERVICE_DETAILS} from '@/lib/serviceDetails';
import {SERVICE_GUIDES} from '@/lib/serviceGuides';
import {SERVICE_PLAYBOOK} from '@/lib/servicePlaybook';

const SEO:Record<string,{title:string;description:string}>= {
  'google-ads':{title:'Administrare Google Ads și campanii PPC',description:'Administrare Google Ads pentru firme: campanii Search, cuvinte-cheie, măsurarea conversiilor, optimizarea bugetului și raportare. Cere o ofertă Hard Service.'},
  'facebook-instagram-ads':{title:'Promovare Facebook și Instagram Ads',description:'Administrare Meta Ads: reclame pe Facebook și Instagram, Lead Ads, testare creativă, Pixel, remarketing și raportare pentru firme.'},
  'tiktok-ads':{title:'Administrare TikTok Ads pentru firme',description:'Promovare TikTok Ads prin reclame video, configurarea campaniilor, TikTok Pixel, testare de materiale și optimizare în funcție de rezultate.'},
  'creare-site':{title:'Creare site de prezentare și landing page',description:'Creare site-uri profesionale responsive, pagini de servicii, landing page-uri, SEO tehnic de bază, formulare și tracking conversii.'},
  'magazin-online':{title:'Creare magazin online și e-commerce',description:'Creare magazine online: categorii, pagini de produs, coș, checkout, integrări, SEO tehnic și urmărirea comenzilor prin analytics.'},
  'tracking-conversii':{title:'Configurare GA4, GTM și tracking conversii',description:'Tracking conversii cu Google Analytics 4 și Tag Manager: formulare, click-uri pe numărul de telefon, evenimente e-commerce, testare și raportare.'},
  'seo-tehnic':{title:'Servicii SEO tehnic: audit și indexare',description:'Audit SEO tehnic: sitemap, indexare Google, canonical, link-uri interne, titluri SEO, structură semantică și performanță pe mobil.'},
};

export function generateStaticParams(){return SERVICES.map(s=>({slug:s.slug}));}
export const dynamicParams=false;
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{
  const {slug}=await params;const s=SERVICES.find(v=>v.slug===slug);if(!s)return {};
  const info=SEO[slug]||{title:s.name,description:s.description};
  return {title:{absolute:`${info.title} | Hard Service`},description:info.description,alternates:{canonical:`/${slug}/`},openGraph:{title:`${info.title} | Hard Service`,description:info.description,url:`${SITE.url}/${slug}/`,images:[{url:'/og-hard-service.png',width:1200,height:630,alt:`Hard Service — ${s.name}`}]},twitter:{card:'summary_large_image',images:['/og-hard-service.png']}};
}

export default async function ServicePage({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params;const s=SERVICES.find(v=>v.slug===slug);if(!s)notFound();
  const extra=SERVICE_DETAILS[slug],guide=SERVICE_GUIDES[slug],playbook=SERVICE_PLAYBOOK[slug];
  const questions=[...s.faq,...(guide?.questions||[])].slice(0,7);
  const schemas=[
    {'@context':'https://schema.org','@type':'WebPage','@id':`${SITE.url}/${slug}/#webpage`,url:`${SITE.url}/${slug}/`,name:s.title,description:s.description,inLanguage:'ro-RO',isPartOf:{'@id':`${SITE.url}/#website`},about:{'@id':`${SITE.url}/${slug}/#service`}},
    {'@context':'https://schema.org','@type':'Service','@id':`${SITE.url}/${slug}/#service`,serviceType:s.name,name:s.title,description:s.description,url:`${SITE.url}/${slug}/`,provider:{'@id':`${SITE.url}/#organization`},areaServed:{'@type':'Country',name:'România'}},
    {'@context':'https://schema.org','@type':'BreadcrumbList',itemListElement:[{'@type':'ListItem',position:1,name:'Acasă',item:SITE.url},{'@type':'ListItem',position:2,name:s.name,item:`${SITE.url}/${slug}/`}]},
    {'@context':'https://schema.org','@type':'FAQPage',mainEntity:questions.map(q=>({'@type':'Question',name:q.question,acceptedAnswer:{'@type':'Answer',text:q.answer}}))},
  ];
  return <><Header/><main className="hs-service-page">
    {schemas.map((schema,i)=><script key={i} type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/>)}
    <section className="hs-service-hero"><div className="container">
      <nav className="hs-breadcrumbs" aria-label="Fir de navigare"><Link href="/">Acasă</Link><ChevronRight size={15}/><Link href="/#servicii">Servicii</Link><ChevronRight size={15}/><span>{s.name}</span></nav>
      <div className="hs-service-hero-grid"><div className="hs-service-intro"><span className="hs-overline">{s.eyebrow}</span><h1>{s.title}</h1><p>{s.description}</p><div className="hs-service-cta"><Link href="#cerere-oferta" className="hs-btn hs-btn-primary">Cere o ofertă <ArrowUpRight size={18}/></Link><Link href="#ce-facem" className="hs-btn hs-btn-outline">Ce include serviciul <ArrowRight size={17}/></Link></div><span className="hs-service-note">{s.priceNote}</span></div>
      <aside className="hs-service-hero-panel"><div className="hs-service-hero-mark"><BrandMark kind={s.brand} size={s.brand==='google'?88:s.brand==='tiktok'?86:75}/></div><div className="hs-aside-caption">CE PRIMEȘTI</div><h2>{s.name}</h2><p>{s.short}</p><ul>{s.deliverables.slice(0,3).map(i=><li key={i}><CheckCircle2 size={17}/>{i}</li>)}</ul></aside></div>
      <div className="hs-service-partners"><PartnerBadges small/><span>Promovare, website și tracking într-o colaborare clară. Îți explicăm implementările, costurile și datele măsurate.</span></div>
    </div></section>

    {extra&&<>
      <section className="hs-section hs-service-outcomes"><div className="container"><div className="hs-section-heading hs-heading-row"><div><span className="hs-overline">CE URMĂRIM</span><h2>{extra.proposition}</h2></div><p>{extra.intro}</p></div><div className="hs-outcomes-grid">{extra.outcomes.map((item,i)=><article key={item.title}><span className="hs-card-index">0{i+1} / 03</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div></div></section>
      <section className="hs-section hs-service-steps" id="ce-facem"><div className="container"><div className="hs-section-heading"><span className="hs-overline">MODUL DE LUCRU</span><h2>Cum lucrăm pentru {s.name}</h2><p>De la analiza inițială și configurare până la verificări, optimizări și raportare: explicăm etapele și deciziile importante.</p></div><div className="hs-process-grid">{extra.strategy.map((item,i)=><article className="hs-process-card" key={item.title}><span>0{i+1}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div></div></section>
    </>}

    {guide&&<section className="hs-section hs-service-details"><div className="container"><div className="hs-section-heading hs-heading-row"><div><span className="hs-overline">DETALII CARE CONTEAZĂ</span><h2>{guide.focusTitle}</h2></div><p>{guide.focusIntro}</p></div><div className="hs-guide-grid">{guide.pillars.map((item,i)=><article key={item.title}><span className="hs-card-index">0{i+1} / 03</span><h3>{item.title}</h3><p>{item.text}</p><ul>{item.points.slice(0,2).map(point=><li key={point}><CheckCircle2 size={17}/>{point}</li>)}</ul></article>)}</div></div></section>}

    {extra&&<section className="hs-section hs-service-fit"><div className="container hs-service-fit-grid"><div><span className="hs-overline">PENTRU CINE</span><h2>Pentru cine este potrivit {s.name}?</h2><p>{extra.audience}</p></div><div><span className="hs-overline">RAPORTARE</span><h2>Ce raportăm și cum evaluăm activitatea</h2><p>{extra.report}</p></div></div></section>}

    {guide&&<section className="hs-section hs-service-practical"><div className="container hs-practical-grid"><article><span className="hs-overline">EXEMPLU PRACTIC</span><h2>{guide.exampleTitle}</h2><p>{guide.example}</p></article><article><span className="hs-overline">ÎNAINTE SĂ ÎNCEPEM</span><h2>De ce avem nevoie</h2><ul>{guide.prerequisites.slice(0,4).map(item=><li key={item}><CheckCircle2 size={18}/>{item}</li>)}</ul></article></div><div className="container hs-transparency"><ShieldCheck size={21}/><p><strong>{guide.caveatTitle}.</strong> {guide.caveat}</p></div></section>}

    {playbook&&<section className="hs-section hs-service-playbook" aria-labelledby="service-playbook-title"><div className="container">
      <div className="hs-section-heading hs-heading-row"><div><span className="hs-overline">ÎN PRACTICĂ</span><h2 id="service-playbook-title">{playbook.heading}</h2></div><p>{playbook.intro}</p></div>
      <div className="hs-playbook-layout"><div className="hs-playbook-actions"><h3>Ce verificăm și ajustăm</h3>{playbook.decisions.map((item,i)=><article key={item.title}><span>{String(i+1).padStart(2,'0')}</span><div><h4>{item.title}</h4><p>{item.explanation}</p></div></article>)}</div>
      <aside className="hs-playbook-measure"><span className="hs-overline">CUM EVALUĂM</span><h3>Indicatori explicați pe înțelesul tău</h3><dl>{playbook.indicators.map(item=><div key={item.name}><dt>{item.name}</dt><dd>{item.meaning}</dd></div>)}</dl></aside></div>
      <p className="hs-playbook-disclaimer"><ShieldCheck size={21}/><span><strong>Ce este important de știut:</strong> {playbook.expectation}</span></p>
    </div></section>}

    <section className="hs-section hs-faq-section hs-service-faq" id="intrebari"><div className="container hs-faq-grid"><div><span className="hs-overline">ÎNTREBĂRI FRECVENTE</span><h2>Ce trebuie să știi despre {s.name}?</h2><p>Răspunsuri clare despre implementare, buget și limitele de măsurare.</p><Link href="#cerere-oferta" className="hs-text-link">Întreabă-ne direct <ArrowUpRight size={18}/></Link></div><div className="hs-faq-items">{questions.map((q,i)=><details key={q.question}><summary><span className="hs-faq-num">{String(i+1).padStart(2,'0')}</span>{q.question}<span className="hs-faq-plus">+</span></summary><p>{q.answer}</p></details>)}</div></div></section>

    {extra&&<section className="hs-section hs-related-section"><div className="container"><div className="hs-section-heading"><span className="hs-overline">SERVICII COMPLEMENTARE</span><h2>Ce poate funcționa împreună cu {s.name}?</h2></div><div className="hs-related-grid">{extra.related.map(link=>{const v=SERVICES.find(p=>p.slug===link);return v?<Link key={v.slug} href={`/${v.slug}/`}><BrandMark kind={v.brand} size={v.brand==='google'?48:44}/><strong>{v.name}</strong><ArrowUpRight size={20}/></Link>:null})}</div></div></section>}

    <section className="hs-contact-section" id="cerere-oferta"><div className="container hs-contact-grid"><div className="hs-contact-lead"><span className="hs-overline">SOLICITĂ O OFERTĂ</span><h2>Vrei să discutăm despre {s.name}?</h2><p>Spune-ne ce servicii sau produse vrei să promovezi, ce există deja și care sunt obiectivele firmei tale. Revenim pentru stabilirea detaliilor și a costurilor.</p><div className="hs-contact-points"><span><CheckCircle2 size={19}/> Evaluăm proiectul</span><span><CheckCircle2 size={19}/> Recomandăm direcția potrivită</span><span><CheckCircle2 size={19}/> Separăm abonamentul de bugetul Ads</span></div><a className="hs-contact-phone" href={SITE.phoneHref}><Phone size={19}/>{SITE.phone}</a></div><div className="hs-contact-form-wrap"><div className="hs-form-heading"><span>FORMULAR DE OFERTĂ</span><h3>Spune-ne despre proiect</h3><p>Completează datele și o scurtă descriere.</p></div><ContactForm initialService={s.name}/></div></div></section>
  </main><Footer/></>;
}
