import type {Metadata} from 'next';
import Link from 'next/link';
import {ArrowRight, CheckCircle2, Phone, ShieldCheck, Gauge, Target, Search, TrendingUp, Settings2, Send} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BrandMark from '@/components/BrandMark';
import JourneyFlow from '@/components/JourneyFlow';
import ContactForm from '@/components/ContactForm';
import {SITE, PACKAGES, FAQ} from '@/lib/site';

export const metadata:Metadata={
  title:'Promovare online cu prețuri clare | Google Ads, Meta Ads & Web | Hard Service',
  description:'Administrare Google Ads, Facebook, Instagram și TikTok Ads, site-uri și tracking conversii. Prețuri de la 200 lei/săptămână. Vezi proiecte și solicită o ofertă.',
  alternates:{canonical:'/'},
};

const services=[
 {name:'Google Ads',slug:'google-ads',logos:['google'] as const,text:'Campanii Search și alte formate potrivite afacerii tale.'},
 {name:'Facebook & Instagram Ads',slug:'facebook-instagram-ads',logos:['meta','facebook','instagram'] as const,text:'Campanii pentru solicitări, vizibilitate și vânzări.'},
 {name:'TikTok Ads',slug:'tiktok-ads',logos:['tiktok'] as const,text:'Promovare video și optimizare pentru acțiuni relevante.'},
 {name:'Creare site-uri',slug:'creare-site',logos:['web'] as const,text:'Website-uri de prezentare și landing page-uri responsive.'},
 {name:'Magazine online',slug:'magazin-online',logos:['shop'] as const,text:'Catalog, checkout și integrare cu promovarea online.'},
 {name:'Tracking conversii',slug:'tracking-conversii',logos:['analytics'] as const,text:'GA4, GTM și evenimente pentru contacte sau comenzi.'},
 {name:'SEO tehnic',slug:'seo-tehnic',logos:['seo'] as const,text:'Indexare, structură, performanță și linkuri interne.'},
];

const projects=[
  {name:'ServiciiNonStop.ro',domain:'serviciinonstop.ro',url:'https://www.serviciinonstop.ro/',category:'Website · Google Ads',
    picture:'https://image.thum.io/get/noanimate/width/1100/crop/740/https://www.serviciinonstop.ro/',
    description:'Website cu multe categorii de servicii și pagini dedicate. Am lucrat la organizarea prezentării serviciilor, actualizări de pagini și promovarea online pentru servicii specializate.',
    detail:'Pagini de servicii · Actualizări website · Campanii Google Ads'},
  {name:'CarnetBarca.ro',domain:'carnetbarca.ro',url:'https://carnetbarca.ro/',category:'Website · Meta Ads',
    picture:'https://image.thum.io/get/noanimate/width/1100/crop/740/https://carnetbarca.ro/',
    description:'Proiect dedicat cursurilor de navigație și înscrierilor. Am lucrat la prezentarea ofertelor, materialele de promovare și implementări necesare campaniilor online.',
    detail:'Oferte de cursuri · Promovare Meta · Website WordPress'},
  {name:'Ignifugare.eu',domain:'ignifugare.eu',url:'https://www.ignifugare.eu/',category:'Google Ads · Tracking',
    picture:'https://image.thum.io/get/noanimate/width/1100/crop/740/https://www.ignifugare.eu/',
    description:'Website pentru servicii de ignifugare și protecție la incendiu. Am lucrat la promovarea serviciilor și la măsurarea interacțiunilor de contact prin GA4 și Google Ads.',
    detail:'Servicii specializate · Promovare · Tracking apeluri'},
];

const businessTypes=[
 {icon:Phone,title:'Servicii locale',text:'Promovare pe căutări relevante și pagini care încurajează apelurile sau cererile de ofertă.'},
 {icon:Target,title:'Companii B2B',text:'Campanii și pagini pentru persoane care caută furnizori, consultanță sau soluții pentru firmă.'},
 {icon:TrendingUp,title:'Magazine online',text:'Promovare de produse și măsurarea comenzilor, de la clic până la checkout.'},
];

export default function Home(){return <>
 <Header/>
 <main id="top">
  <section className="hero-section hero-v4">
   <div className="container hero-grid hero-v4-grid">
    <div className="hero-copy">
     <div className="eyebrow"><span className="eyebrow-dot"/> PROMOVARE ONLINE PENTRU FIRME</div>
     <h1>Promovare online pentru firme care vor <span>mai multe solicitări.</span></h1>
     <p className="hero-lead">Administrăm Google Ads, Facebook &amp; Instagram Ads și TikTok Ads. Dezvoltăm website-uri și măsurăm conversiile, într-un sistem coerent de promovare.</p>
     <div className="hero-buttons"><Link href="/contact/" className="btn btn-blue">Solicită o ofertă <ArrowRight size={17}/></Link><Link href="#preturi" className="btn btn-outline">Vezi prețurile</Link></div>
     <div className="hero-trust"><span><CheckCircle2 size={17}/> Tarife transparente</span><span><CheckCircle2 size={17}/> Administrare continuă</span><span><CheckCircle2 size={17}/> Suport direct</span></div>
     <p className="hero-price-note">Abonamente de la <strong>200 lei / săptămână</strong> · bugetul reclamelor separat.</p>
    </div>
    <JourneyFlow/>
   </div>
  </section>
  <section id="servicii" className="section compact-section">
   <div className="container"><div className="section-header"><div><div className="section-eyebrow">SERVICII</div><h2>Tot ce ai nevoie pentru promovarea afacerii</h2><p>Campanii, website și tracking coordonate împreună.</p></div></div>
   <div className="service-grid service-grid-v4">{services.map(service=><Link key={service.slug} href={`/${service.slug}/`} className="service-card service-card-v4">
    <div className="service-icon service-icon-group">{service.logos.map(k=><BrandMark key={k} kind={k} size={k==='meta'?35:33}/>)}</div><h3>{service.name}</h3><p>{service.text}</p><span className="service-more">Vezi serviciul <ArrowRight size={15}/></span>
   </Link>)}</div></div>
  </section>
  <section id="proiecte" className="section projects-v4-section">
   <div className="container"><div className="section-header"><div><div className="section-eyebrow">PORTOFOLIU</div><h2>Proiecte la care am lucrat</h2><p>Exemple reale de website-uri, promovare și implementări tehnice.</p></div></div>
   <div className="projects-v4-grid">{projects.map(pr=><article className="project-v4-card" key={pr.domain}>
    <a href={pr.url} className="project-v4-image" target="_blank" rel="noopener noreferrer" aria-label={`Deschide website-ul ${pr.name}`}>
      <img src={pr.picture} alt={`Captură actualizată automat a website-ului ${pr.domain}`} width="1100" height="680" loading="lazy" decoding="async" />
      <span className="project-v4-site">{pr.domain}</span>
    </a>
    <div className="project-v4-content"><span className="project-tag">{pr.category}</span><h3>{pr.name}</h3><p>{pr.description}</p><div className="project-v4-detail">{pr.detail}</div><a href={pr.url} target="_blank" rel="noopener noreferrer" className="project-card-link">Vezi website-ul <ArrowRight size={16}/></a></div>
   </article>)}</div>
   <p className="project-v4-caption">Imaginile sunt capturi ale website-urilor publice, furnizate dinamic de un serviciu extern. Nu prezentăm rezultate numerice neverificate.</p>
   </div>
  </section>
  <section id="despre" className="section section-v4-value"><div className="container v4-value-grid">
    <div><div className="section-eyebrow">AVANTAJUL HARD SERVICE</div><h2>Nu ai nevoie de firme diferite pentru fiecare etapă.</h2><p>Reclamele, website-ul, tracking-ul și optimizarea trebuie să funcționeze împreună. Lucrăm la toate aceste componente, astfel încât să fie mai ușor să urmărești investiția și solicitările.</p><Link href="/contact/" className="text-link">Discută proiectul tău <ArrowRight size={17}/></Link></div>
    <div className="v4-value-points">
     <div><ShieldCheck size={23}/><span><strong>Prețuri clare</strong><small>Știi tariful de administrare de la început.</small></span></div>
     <div><Gauge size={23}/><span><strong>Măsurarea rezultatelor</strong><small>Urmărim formulare, clicuri pe telefon și comenzi, unde este posibil.</small></span></div>
     <div><Settings2 size={23}/><span><strong>Website și campanii împreună</strong><small>Facem optimizări și pe pagina pe care ajung vizitatorii.</small></span></div>
    </div>
  </div></section>
  <section className="section section-business-types"><div className="container"><div className="section-header"><div><div className="section-eyebrow">PENTRU CINE LUCRĂM</div><h2>Promovare potrivită modelului tău de afacere</h2><p>Alegem canalele după obiectiv, nu aplicăm aceeași strategie tuturor.</p></div></div><div className="business-types-grid">{businessTypes.map(Item=>{const Icon=Item.icon;return <article key={Item.title}><Icon size={25}/><h3>{Item.title}</h3><p>{Item.text}</p></article>})}</div></div></section>
  <section className="section pricing-v4-section" id="preturi"><div className="container"><div className="section-header"><div><div className="section-eyebrow">PREȚURI</div><h2>Abonamente transparente</h2><p>Costul final depinde de volumul de lucru și numărul campaniilor. Bugetul publicitar se plătește separat.</p></div></div><div className="pricing-v4-grid">{PACKAGES.map(pkg=><article className={`price-card pricing-v4-card ${pkg.featured?'price-featured':''}`} key={pkg.name}>
    {pkg.featured&&<div className="price-badge">Recomandat</div>}<h3>{pkg.name}</h3><div className="price-amount">{pkg.price} <span>lei</span></div><span className="per-week">/ săptămână</span><p className="price-intro">{pkg.intro}</p><ul>{pkg.items.map(item=><li key={item}><CheckCircle2 size={16}/>{item}</li>)}</ul><Link className={`btn ${pkg.featured?'btn-blue':'btn-outline'}`} href="/contact/">Solicită ofertă <ArrowRight size={15}/></Link>
  </article>)}<article className="price-card pricing-v4-card"><h3>PERSONALIZAT</h3><div className="price-amount custom-price">La ofertă</div><span className="per-week">Pentru proiecte complexe</span><p className="price-intro">Website, magazin, reclame și automatizări adaptate.</p><ul><li><CheckCircle2 size={16}/>Strategie și implementare</li><li><CheckCircle2 size={16}/>Google, Meta și TikTok</li><li><CheckCircle2 size={16}/>Mentenanță și suport</li></ul><Link className="btn btn-outline" href="/contact/">Cere propunere <ArrowRight size={15}/></Link></article></div></div></section>
  <section className="section compact-section work-v4-section" id="cum-lucram"><div className="container"><div className="section-header"><div><div className="section-eyebrow">PROCESUL NOSTRU</div><h2>Colaborare în trei pași</h2><p>Un proces simplu, fără explicații tehnice inutile.</p></div></div><div className="work-v4-grid"><div><b>01</b><h3>Analiză</h3><p>Înțelegem serviciile, concurența și obiectivele tale.</p></div><div><b>02</b><h3>Implementare</h3><p>Pregătim campaniile, site-ul și tracking-ul necesar.</p></div><div><b>03</b><h3>Optimizare</h3><p>Analizăm solicitările și ajustăm campaniile periodic.</p></div></div></div></section>
  <section id="intrebari" className="section faq-v4-section"><div className="container v4-faq-grid"><div><div className="section-eyebrow">ÎNTREBĂRI FRECVENTE</div><h2>Tot ce trebuie să știi înainte de colaborare</h2><p>Răspunsuri clare despre administrare, costuri și rezultate.</p></div><div className="faq-accordion">{FAQ.map((faq,i)=><details key={faq.question} open={i===0}><summary>{faq.question}<span className="faq-chevron">+</span></summary><p>{faq.answer}</p></details>)}</div></div></section>
  <section className="section contact-v4-section" id="contact"><div className="container contact-v4-grid"><div><div className="section-eyebrow">CONTACT</div><h2>Spune-ne ce vrei să promovezi.</h2><p>Trimite câteva informații despre firma ta și îți răspundem cu pașii recomandați și o propunere de colaborare.</p><a className="contact-v4-phone" href={SITE.phoneHref}><Phone size={21}/>{SITE.phone}</a><div className="v4-company-data"><strong>{SITE.legalName}</strong><span>CUI: {SITE.cui} · Înființată la {SITE.founded}</span></div></div><div className="contact-v4-form"><h3>Solicită o ofertă</h3><ContactForm/></div></div></section>
 </main>
 <Footer/>
 <a className="floating-call" href={SITE.phoneHref} aria-label={`Sună Hard Service la ${SITE.phone}`}><Phone size={22}/></a>
 </>}
