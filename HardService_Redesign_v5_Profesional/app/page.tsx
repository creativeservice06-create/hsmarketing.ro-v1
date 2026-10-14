import type {Metadata} from 'next';
import Link from 'next/link';
import {ArrowRight, CheckCircle2, Phone, ShieldCheck, Gauge, Target, Search, TrendingUp, Settings2, Send, Globe2, BarChart3, FileSpreadsheet, Wrench} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BrandMark from '@/components/BrandMark';
import JourneyFlow from '@/components/JourneyFlow';
import ContactForm from '@/components/ContactForm';
import GooglePartnerBadge from '@/components/GooglePartnerBadge';
import {SITE, PACKAGES, FAQ} from '@/lib/site';

export const metadata:Metadata={
  title:'Promovare online cu prețuri clare | Google Ads, Meta Ads, TikTok Ads & Web | Hard Service',
  description:'Administrare Google Ads, Meta Ads și TikTok Ads, creare site-uri, tracking conversii și suport continuu. Prețuri de la 200 lei/săptămână.',
  alternates:{canonical:'/'},
};

const services=[
 {name:'Google Ads',slug:'google-ads',logos:['google'] as const,desc:'Campanii orientate spre căutări relevante, apeluri, formulare și vânzări.',bullets:['structură și anunțuri','cuvinte cheie și optimizare','suport în strategie și raportare']},
 {name:'Meta Ads',slug:'facebook-instagram-ads',logos:['meta','facebook','instagram'] as const,desc:'Promovare pe Facebook și Instagram pentru lead-uri, notorietate și vânzări.',bullets:['campanii și audiențe','mesaje și reclame','rapoarte și recomandări']},
 {name:'TikTok Ads',slug:'tiktok-ads',logos:['tiktok'] as const,desc:'Campanii video și testare de formate potrivite pentru publicul relevant.',bullets:['strategie de campanii','recomandări creative','monitorizare și optimizare']},
 {name:'Creare site-uri',slug:'creare-site',logos:['web'] as const,desc:'Website-uri și landing page-uri care prezintă clar oferta și susțin conversiile.',bullets:['structură clară','design responsive','formulare și CTA-uri']},
 {name:'Tracking conversii',slug:'tracking-conversii',logos:['analytics'] as const,desc:'GA4, GTM și evenimente pentru apeluri, formulare și alte acțiuni importante.',bullets:['măsurare corectă','evenimente și conversii','suport în interpretarea datelor']},
 {name:'SEO tehnic',slug:'seo-tehnic',logos:['seo'] as const,desc:'Indexare, structură, linkuri interne și îmbunătățiri tehnice de bază.',bullets:['sitemap și robots','viteză și structură','optimizări utile pentru site']},
];

const projects=[
  {name:'ServiciiNonStop.ro',domain:'serviciinonstop.ro',url:'https://www.serviciinonstop.ro/',category:'Website · Google Ads',
    picture:'https://image.thum.io/get/noanimate/width/1100/crop/740/https://www.serviciinonstop.ro/',
    description:'Platformă cu multe categorii și pagini dedicate serviciilor. Am lucrat la organizarea conținutului, actualizări de website și susținerea promovării online pentru servicii specializate.',
    detail:'Pagini de servicii · Actualizări website · Susținere promovare'},
  {name:'CarnetBarca.ro',domain:'carnetbarca.ro',url:'https://carnetbarca.ro/',category:'Website · Meta Ads',
    picture:'https://image.thum.io/get/noanimate/width/1100/crop/740/https://carnetbarca.ro/',
    description:'Proiect pentru cursuri și certificări de navigație. Am lucrat la prezentarea ofertelor, materiale vizuale și elemente necesare pentru campaniile de promovare.',
    detail:'Prezentare ofertă · Materiale promo · Website WordPress'},
  {name:'Ignifugare.eu',domain:'ignifugare.eu',url:'https://www.ignifugare.eu/',category:'Google Ads · Tracking',
    picture:'https://image.thum.io/get/noanimate/width/1100/crop/740/https://www.ignifugare.eu/',
    description:'Website pentru servicii de ignifugare și PSI. Am lucrat la promovarea serviciilor, optimizări ale prezentării și măsurarea interacțiunilor relevante prin GA4 și Google Ads.',
    detail:'Promovare servicii · Conversii GA4 · Implementări Ads'},
];

const detailedBlocks=[
  {title:'Promovare în Google Ads',icon:Search,logo:'google' as const,items:['analiză și structură de campanii','optimizarea termenilor de căutare și a mesajelor','măsurarea lead-urilor și susținere în deciziile de buget']},
  {title:'Promovare în Meta Ads',icon:Target,logo:'meta' as const,items:['campanii pentru Facebook și Instagram','recomandări pentru texte și vizuale','rapoarte, audiențe și optimizări periodice']},
  {title:'Promovare în TikTok Ads',icon:TrendingUp,logo:'tiktok' as const,items:['strategie pe formate video','recomandări pentru materiale noi','testare și adaptare în funcție de răspunsul pieței']},
  {title:'Website, tracking și suport',icon:Globe2,logo:'web' as const,items:['îmbunătățiri de structură și UX','GA4, GTM și monitorizarea conversiilor','raportare clară și recomandări de pași următori']},
];

const improvementPoints=[
  {icon:Wrench,title:'Îmbunătățiri ale site-ului',text:'Lucrăm la structură, texte, butoane de contact, formulare și pagini de destinație, astfel încât vizitatorul să înțeleagă mai repede oferta și să poată acționa mai ușor.'},
  {icon:BarChart3,title:'Strategie și raportare',text:'Nu ne limităm la pornirea campaniilor. Ajustăm direcția după date, îți explicăm ce se întâmplă și propunem idei noi pentru următoarele etape de promovare.'},
  {icon:FileSpreadsheet,title:'Suport continuu',text:'Primești ajutor pentru campanii, website și tracking în același loc, astfel încât să nu fie nevoie să coordonezi furnizori diferiți pentru fiecare activitate.'},
];

export default function Home(){return <>
 <Header/>
 <main id="top">
  <section className="hero-section hero-v5">
   <div className="container hero-grid hero-v5-grid">
    <div className="hero-copy hero-v5-copy">
     <div className="eyebrow"><span className="eyebrow-dot"/> PROMOVARE ONLINE PENTRU FIRME</div>
     <h1>Campanii, website și tracking, într-un sistem <span>mai clar și mai profesionist.</span></h1>
     <p className="hero-lead">Hard Service oferă administrare Google Ads, Meta Ads și TikTok Ads, creare site-uri și suport continuu pentru îmbunătățirea strategiei, a raportării și a experienței din website.</p>
     <div className="hero-bullets">
      <span><CheckCircle2 size={16}/> prețuri transparente</span>
      <span><CheckCircle2 size={16}/> administrare și optimizare</span>
      <span><CheckCircle2 size={16}/> rapoarte și strategii noi</span>
     </div>
     <div className="hero-buttons"><Link href="/contact/" className="btn btn-blue">Solicită o ofertă <ArrowRight size={17}/></Link><Link href="#preturi" className="btn btn-outline">Vezi prețurile</Link></div>
     <div className="hero-v5-bottom">
      <p className="hero-price-note">Abonamente de la <strong>200 lei / săptămână</strong> · bugetul publicitar separat.</p>
      <GooglePartnerBadge />
     </div>
    </div>
    <JourneyFlow/>
   </div>
  </section>

  <section id="servicii" className="section section-services-v5">
   <div className="container">
    <div className="section-header"><div><div className="section-eyebrow">SERVICII</div><h2>Servicii explicate clar, cu suport și optimizare continuă</h2><p>Fiecare serviciu include nu doar implementare, ci și suport în strategii noi, ajustări și raportare periodică.</p></div></div>
    <div className="service-grid service-grid-v5">{services.map(service=><Link key={service.slug} href={`/${service.slug}/`} className="service-card service-card-v5">
      <div className="service-v5-top">
        <div className="service-icon service-icon-group large">{service.logos.map(k=><BrandMark key={k} kind={k} size={k==='meta'?38:34}/>)}</div>
        <h3>{service.name}</h3>
      </div>
      <p>{service.desc}</p>
      <ul className="service-v5-list">{service.bullets.map(item=><li key={item}><CheckCircle2 size={15}/>{item}</li>)}</ul>
      <span className="service-more">Vezi detalii despre serviciu <ArrowRight size={15}/></span>
    </Link>)}</div>
   </div>
  </section>

  <section className="section section-platforms-v5">
    <div className="container">
      <div className="section-header"><div><div className="section-eyebrow">CUM LUCRĂM</div><h2>Mai mult decât lansarea unor reclame</h2><p>Promovarea este completată de optimizări în site, recomandări de strategie și monitorizarea rezultatelor.</p></div></div>
      <div className="platform-grid-v5">{detailedBlocks.map((block)=>{const Icon=block.icon;return <article key={block.title} className="platform-card-v5">
        <div className="platform-card-top">
          <div className="platform-logo-wrap"><BrandMark kind={block.logo} size={block.logo==='meta'?38:34}/></div>
          <div className="platform-title-wrap"><span className="platform-icon"><Icon size={18}/></span><h3>{block.title}</h3></div>
        </div>
        <ul>{block.items.map(item=><li key={item}><CheckCircle2 size={15}/>{item}</li>)}</ul>
      </article>})}</div>
    </div>
  </section>

  <section id="proiecte" className="section projects-v4-section">
   <div className="container"><div className="section-header"><div><div className="section-eyebrow">PROIECTE REALIZATE</div><h2>Proiecte reale din portofoliul Hard Service</h2><p>Website-uri și implementări susținute prin promovare, organizare mai bună a conținutului și elemente utile pentru conversii.</p></div></div>
   <div className="projects-v4-grid">{projects.map(pr=><article className="project-v4-card" key={pr.domain}>
    <a href={pr.url} className="project-v4-image" target="_blank" rel="noopener noreferrer" aria-label={`Deschide website-ul ${pr.name}`}>
      <img src={pr.picture} alt={`Captură a website-ului ${pr.domain}`} width="1100" height="680" loading="lazy" decoding="async" />
      <span className="project-v4-site">{pr.domain}</span>
    </a>
    <div className="project-v4-content"><span className="project-tag">{pr.category}</span><h3>{pr.name}</h3><p>{pr.description}</p><div className="project-v4-detail">{pr.detail}</div><a href={pr.url} target="_blank" rel="noopener noreferrer" className="project-card-link">Vezi website-ul <ArrowRight size={16}/></a></div>
   </article>)}</div>
   </div>
  </section>

  <section className="section section-improvements-v5">
    <div className="container">
      <div className="section-header"><div><div className="section-eyebrow">ÎMBUNĂTĂȚIRI</div><h2>Ce susținem în afară de promovare</h2><p>Pe lângă campaniile în Google, Meta și TikTok, lucrăm și la componentele care le ajută să funcționeze mai bine.</p></div></div>
      <div className="improvements-grid-v5">{improvementPoints.map((item)=>{const Icon=item.icon;return <article key={item.title} className="improvement-card-v5"><span className="improvement-icon"><Icon size={23}/></span><h3>{item.title}</h3><p>{item.text}</p></article>})}</div>
    </div>
  </section>

  <section className="section section-v4-value"><div className="container v4-value-grid">
    <div><div className="section-eyebrow">AVANTAJUL HARD SERVICE</div><h2>Campanii, website, tracking și suport într-un singur loc.</h2><p>Pentru multe firme, problema nu este doar lipsa reclamelor, ci lipsa unei legături bune între reclamă, pagină și conversie. De aceea integrăm mai multe componente într-un sistem unitar: promovare, pagini, măsurare, rapoarte și recomandări de optimizare.</p><Link href="/contact/" className="text-link">Discută proiectul tău <ArrowRight size={17}/></Link></div>
    <div className="v4-value-points">
     <div><ShieldCheck size={23}/><span><strong>Prețuri clare</strong><small>Ai de la început un punct de plecare și știi ce se discută.</small></span></div>
     <div><Gauge size={23}/><span><strong>Măsurarea rezultatelor</strong><small>Urmărim evenimentele utile pentru a înțelege mai bine performanța.</small></span></div>
     <div><Settings2 size={23}/><span><strong>Optimizări pe parcurs</strong><small>Propunem îmbunătățiri de site, campanie și mesaje, nu lăsăm promovarea pe pilot automat.</small></span></div>
    </div>
  </div></section>

  <section className="section pricing-v4-section" id="preturi"><div className="container"><div className="section-header"><div><div className="section-eyebrow">PREȚURI</div><h2>Abonamente transparente</h2><p>Costul final depinde de volumul de lucru și numărul campaniilor. Bugetul publicitar se plătește separat.</p></div></div><div className="pricing-v4-grid">{PACKAGES.map(pkg=><article className={`price-card pricing-v4-card ${pkg.featured?'price-featured':''}`} key={pkg.name}>
    {pkg.featured&&<div className="price-badge">Recomandat</div>}<h3>{pkg.name}</h3><div className="price-amount">{pkg.price} <span>lei</span></div><span className="per-week">/ săptămână</span><p className="price-intro">{pkg.intro}</p><ul>{pkg.items.map(item=><li key={item}><CheckCircle2 size={16}/>{item}</li>)}</ul><Link className={`btn ${pkg.featured?'btn-blue':'btn-outline'}`} href="/contact/">Solicită ofertă <ArrowRight size={15}/></Link>
  </article>)}<article className="price-card pricing-v4-card"><h3>PERSONALIZAT</h3><div className="price-amount custom-price">La ofertă</div><span className="per-week">Pentru proiecte complexe</span><p className="price-intro">Website, magazin, reclame și implementări adaptate.</p><ul><li><CheckCircle2 size={16}/>Strategie și implementare</li><li><CheckCircle2 size={16}/>Google, Meta și TikTok</li><li><CheckCircle2 size={16}/>Mentenanță și suport</li></ul><Link className="btn btn-outline" href="/contact/">Cere propunere <ArrowRight size={15}/></Link></article></div><p className="pricing-v4-note">Abonamentul acoperă administrarea și suportul stabilit; pentru volume mari sau cerințe speciale se poate face ofertă separată.</p></div></section>

  <section className="section faq-v4-section" id="faq"><div className="container v4-faq-grid"><div><div className="section-eyebrow">ÎNTREBĂRI FRECVENTE</div><h2>Răspunsuri rapide înainte de colaborare</h2><p>Am integrat cele mai importante întrebări despre abonamente, buget, rezultate și modul de lucru.</p></div><div className="faq-group">{FAQ.map(item=><details key={item.question}><summary>{item.question}</summary><p>{item.answer}</p></details>)}</div></div></section>

  <section className="section contact-v4-section" id="contact"><div className="container contact-v4-grid"><div><div className="section-eyebrow">CONTACT</div><h2>Spune-ne ce serviciu vrei să promovezi</h2><p>Poți începe cu un singur serviciu sau cu o soluție completă: campanii, website, tracking și optimizare continuă. Îți răspundem cu o propunere clară.</p><div className="contact-v4-points"><span><Phone size={16}/>{SITE.phone}</span><span><Send size={16}/>{SITE.email}</span></div></div><div className="contact-v4-form"><ContactForm /></div></div></section>
 </main>
 <Footer/>
 </>;}
