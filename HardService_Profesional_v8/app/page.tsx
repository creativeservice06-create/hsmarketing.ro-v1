import type {Metadata} from 'next';
import Link from 'next/link';
import {ArrowRight, CheckCircle2, Phone, ShieldCheck, Gauge, Settings2, BarChart3, FileSpreadsheet, Wrench, Search, MousePointerClick, TrendingUp, Headphones, Lightbulb, ClipboardCheck, ChevronRight} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BrandMark from '@/components/BrandMark';
import JourneyFlow from '@/components/JourneyFlow';
import ContactForm from '@/components/ContactForm';
import ProjectLogoGrid from '@/components/ProjectLogoGrid';
import {SITE, PACKAGES, FAQ} from '@/lib/site';

export const metadata:Metadata={
  title:'Agenție Google Ads, Meta Ads și TikTok Ads | Creare site-uri | Hard Service',
  description:'Agenție de promovare online pentru firme: Google Ads, Facebook și Instagram Ads, TikTok Ads, creare site-uri și magazine online, SEO și tracking. Cere ofertă Hard Service.',
  alternates:{canonical:'/'},
};

const services=[
 {name:'Administrare Google Ads',slug:'google-ads',logos:['google'] as const,desc:'Promovăm firma în Google exact când oamenii caută produse sau servicii precum ale tale. Structurăm campaniile după intenție, ofertă și buget.',bullets:['campanii Search și Performance Max, unde se potrivesc','cuvinte cheie, anunțuri și termeni negativi','conversii pentru contacte și comenzi','optimizări și rapoarte explicate clar']},
 {name:'Facebook & Instagram Ads',slug:'facebook-instagram-ads',logos:['meta','facebook','instagram'] as const,desc:'Creăm reclame Meta care prezintă convingător oferta și atrag cereri de ofertă, mesaje sau vânzări prin Facebook și Instagram.',bullets:['campanii de lead-uri, trafic și vânzări','audiențe, mesaje și variante creative','Meta Pixel, evenimente și remarketing','testare, optimizare și strategie']},
 {name:'Promovare TikTok Ads',slug:'tiktok-ads',logos:['tiktok'] as const,desc:'Folosim reclame video pentru a prezenta produsele sau serviciile într-un format care atrage atenția și încurajează următorul pas.',bullets:['strategie pentru reclame video','recomandări de creativuri și mesaje','configurare Pixel și campanii','raportare și îmbunătățiri periodice']},
 {name:'Creare site-uri & magazine online',slug:'creare-site',moreSlug:'magazin-online',logos:['web','shop'] as const,desc:'Construim site-uri de prezentare, landing page-uri și magazine online clare, rapide și adaptate telefonului, pregătite pentru promovare.',bullets:['design responsive și navigare simplă','pagini de servicii, produse și formulare','coș, checkout și integrări e-commerce','structură SEO și tracking conversii']},
 {name:'Google Analytics & Tracking',slug:'tracking-conversii',logos:['analytics'] as const,desc:'Măsurăm ce fac vizitatorii după clic: formulare, apeluri inițiate, achiziții și alte acțiuni relevante pentru obiectivele firmei.',bullets:['Google Analytics 4 și Tag Manager','evenimente pentru contacte și comenzi','conversii importate în platforme Ads','verificare date și recomandări']},
 {name:'Optimizare SEO tehnic',slug:'seo-tehnic',logos:['seo'] as const,desc:'Corectăm elemente tehnice și de structură care influențează înțelegerea și indexarea site-ului în motoarele de căutare.',bullets:['Search Console, sitemap și robots.txt','meta titluri, canonical și structură semantică','linkuri interne și pagini de servicii','verificare mobile, viteză și erori']},
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
     <h1>Promovare Google Ads, Meta Ads și TikTok Ads pentru <span>afaceri care vor mai multe solicitări.</span></h1>
     <p className="hero-lead">Administrăm reclame în Google, Facebook, Instagram și TikTok, construim site-uri și magazine online și optimizăm conversiile. Strategie, implementare, suport și raportare într-un singur loc.</p>
     <div className="hero-bullets">
      <span><CheckCircle2 size={16}/> prețuri transparente</span>
      <span><CheckCircle2 size={16}/> administrare și optimizare</span>
      <span><CheckCircle2 size={16}/> rapoarte și strategii noi</span>
     </div>
     <div className="hero-buttons"><Link href="/contact/" className="btn btn-blue">Solicită o ofertă <ArrowRight size={17}/></Link><Link href="#preturi" className="btn btn-outline">Vezi prețurile</Link></div>
     <div className="hero-v5-bottom">
      <p className="hero-price-note">Abonamente de la <strong>200 lei / săptămână</strong> · bugetul publicitar se stabilește separat.</p>
     </div>
    </div>
    <JourneyFlow/>
   </div>
  </section>

  <section id="servicii" className="section section-services-v5">
   <div className="container">
    <div className="section-header"><div><div className="section-eyebrow">SERVICII DE MARKETING ONLINE</div><h2>Promovare online, creare website și optimizare pentru conversii</h2><p>De la primele căutări pe Google până la contactarea firmei, conectăm reclamele cu un website bine construit și o măsurare corectă a rezultatelor.</p></div></div>
    <div className="service-grid service-grid-v5">{services.map(service=><article key={service.slug} className="service-card service-card-v5 service-card-v8">
      <div className="service-v5-top">
        <div className="service-icon service-icon-group large">{service.logos.map(k=><BrandMark key={k} kind={k} size={k==='tiktok'?68:k==='meta'?49:44}/>)}</div>
        <h3>{service.name}</h3>
      </div>
      <p>{service.desc}</p>
      <ul className="service-v5-list">{service.bullets.map(item=><li key={item}><CheckCircle2 size={16}/>{item}</li>)}</ul>
      <div className="service-v8-actions"><Link href={`/${service.slug}/`} className="service-more">Vezi detalii <ArrowRight size={16}/></Link>{'moreSlug' in service && service.moreSlug && <Link className="service-v8-second" href={`/${service.moreSlug}/`}>Magazine online <ChevronRight size={15}/></Link>}</div>
    </article>)}</div>
   </div>
  </section>

  <section className="section section-method-v8" id="metoda">
   <div className="container method-v8-layout">
    <div className="method-v8-intro">
      <div className="section-eyebrow">MODUL NOSTRU DE LUCRU</div>
      <h2>De la prima analiză până la optimizarea fiecărui rezultat.</h2>
      <p>O campanie performantă nu înseamnă doar reclame activate. Pornim de la oferta ta, construim un traseu clar până la contact și verificăm ce putem îmbunătăți pe parcurs.</p>
      <div className="method-v8-promise"><Lightbulb size={22}/><span>Primești explicații clare, recomandări aplicate și o strategie care poate evolua odată cu afacerea.</span></div>
      <Link href="/contact/" className="method-v8-cta">Discutăm despre firma ta <ArrowRight size={17}/></Link>
    </div>
    <div className="method-v8-steps">
      <article><span className="method-v8-number">01</span><div className="method-v8-copy"><div className="method-v8-icon"><Search size={21}/></div><h3>Analizăm afacerea și cererea</h3><p>Stabilim obiectivul, serviciile prioritare, publicul și bugetul realist pentru promovare.</p></div></article>
      <article><span className="method-v8-number">02</span><div className="method-v8-copy"><div className="method-v8-icon"><MousePointerClick size={21}/></div><h3>Lansăm campaniile și pregătim site-ul</h3><p>Construim reclamele, paginile de destinație și măsurarea contactelor sau comenzilor.</p></div></article>
      <article><span className="method-v8-number">03</span><div className="method-v8-copy"><div className="method-v8-icon"><TrendingUp size={21}/></div><h3>Optimizăm, raportăm și propunem idei noi</h3><p>Analizăm termenii, audiențele și rezultatele, apoi stabilim următoarele îmbunătățiri.</p></div></article>
    </div>
   </div>
  </section>

  <section id="proiecte" className="section projects-v8-section">
   <div className="container">
    <div className="section-header"><div><div className="section-eyebrow">PORTOFOLIU WEBSITE-URI</div><h2>Website-uri realizate pentru afaceri din domenii diferite</h2><p>O selecție de proiecte web: servicii locale, educație, medicină, magazine și platforme de prezentare. Apasă pe un logo pentru a deschide website-ul.</p></div></div>
    <ProjectLogoGrid/>
   </div>
  </section>

  <section className="section section-improvements-v5">
    <div className="container">
      <div className="section-header"><div><div className="section-eyebrow">ÎMBUNĂTĂȚIRI</div><h2>Îmbunătățiri care ajută promovarea să funcționeze mai bine</h2><p>Ne uităm și la zona de website, la claritatea ofertei, la tracking și la modul în care vizitatorul ajunge mai ușor la acțiunea dorită.</p></div></div>
      <div className="improvements-grid-v5">{improvementPoints.map((item)=>{const Icon=item.icon;return <article key={item.title} className="improvement-card-v5"><span className="improvement-icon"><Icon size={23}/></span><h3>{item.title}</h3><p>{item.text}</p></article>})}</div>
    </div>
  </section>

  <section className="section section-v4-value"><div className="container v4-value-grid">
    <div><div className="section-eyebrow">AVANTAJUL HARD SERVICE</div><h2>Un sistem complet: campanii, website, conținut și măsurare.</h2><p>Multe afaceri pierd oportunități pentru că reclama, pagina și contactul nu lucrează împreună. De aceea combinăm promovarea cu optimizări reale în site, urmărirea conversiilor și recomandări clare pentru pașii următori.</p><Link href="/contact/" className="text-link">Discută proiectul tău <ArrowRight size={17}/></Link></div>
    <div className="v4-value-points">
     <div><ShieldCheck size={23}/><span><strong>Prețuri clare</strong><small>Ai de la început un punct de plecare și știi ce se discută.</small></span></div>
     <div><Gauge size={23}/><span><strong>Măsurarea rezultatelor</strong><small>Urmărim evenimentele utile pentru a înțelege mai bine performanța.</small></span></div>
     <div><Settings2 size={23}/><span><strong>Optimizări pe parcurs</strong><small>Propunem îmbunătățiri de site, campanie și mesaje, nu lăsăm promovarea pe pilot automat.</small></span></div>
    </div>
  </div></section>

  <section className="section strategy-v7-section" id="despre"><div className="container strategy-v7-layout">
    <div><div className="section-eyebrow">DE CE CONTEAZĂ IMPLEMENTAREA</div><h2>Un site frumos trebuie să fie și util pentru promovare.</h2><p>Un potențial client vrea să știe rapid ce oferi, unde lucrezi, cât de simplu te poate contacta și de ce să aleagă serviciul tău. Construim paginile pornind de la aceste întrebări și de la comportamentul publicului venit din campanii.</p><p>Urmărim claritatea mesajului, structura pe mobil, relevanța titlurilor, viteza percepută și elementele care susțin acțiunea. Apoi conectăm aceste pagini cu datele utile din Google Ads, Meta Ads sau TikTok Ads.</p></div>
    <div className="strategy-v7-panel"><h3>Ce verificăm într-un proiect</h3><ul><li><CheckCircle2 size={19}/> Mesajul dintre reclamă și landing page</li><li><CheckCircle2 size={19}/> Butoane și formulare ușor de utilizat</li><li><CheckCircle2 size={19}/> Navigarea și lizibilitatea pe mobil</li><li><CheckCircle2 size={19}/> Conversiile care contează pentru firmă</li><li><CheckCircle2 size={19}/> Oportunități de testare și îmbunătățire</li></ul><Link href="/contact/" className="btn btn-blue">Discută proiectul <ArrowRight size={16}/></Link></div>
  </div></section>

  <section className="section pricing-v4-section" id="preturi"><div className="container"><div className="section-header"><div><div className="section-eyebrow">PREȚURI</div><h2>Abonamente transparente</h2><p>Costul final depinde de volumul de lucru și numărul campaniilor. Bugetul publicitar se plătește separat.</p></div></div><div className="pricing-v4-grid">{PACKAGES.map(pkg=><article className={`price-card pricing-v4-card ${pkg.featured?'price-featured':''}`} key={pkg.name}>
    {pkg.featured&&<div className="price-badge">Recomandat</div>}<h3>{pkg.name}</h3><div className="price-amount">{pkg.price} <span>lei</span></div><span className="per-week">/ săptămână</span><p className="price-intro">{pkg.intro}</p><ul>{pkg.items.map(item=><li key={item}><CheckCircle2 size={16}/>{item}</li>)}</ul><Link className={`btn ${pkg.featured?'btn-blue':'btn-outline'}`} href="/contact/">Solicită ofertă <ArrowRight size={15}/></Link>
  </article>)}<article className="price-card pricing-v4-card"><h3>PERSONALIZAT</h3><div className="price-amount custom-price">La ofertă</div><span className="per-week">Pentru proiecte complexe</span><p className="price-intro">Website, magazin, reclame și implementări adaptate.</p><ul><li><CheckCircle2 size={16}/>Strategie și implementare</li><li><CheckCircle2 size={16}/>Google, Meta și TikTok</li><li><CheckCircle2 size={16}/>Mentenanță și suport</li></ul><Link className="btn btn-outline" href="/contact/">Cere propunere <ArrowRight size={15}/></Link></article></div><p className="pricing-v4-note">Abonamentul acoperă administrarea și suportul stabilit; pentru volume mari sau cerințe speciale se poate face ofertă separată.</p></div></section>

  <section className="section faq-v8-section" id="faq"><div className="container faq-v8-layout">
    <div className="faq-v8-intro"><div className="section-eyebrow">ÎNTREBĂRI FRECVENTE</div><h2>Întrebări despre prețuri, campanii și colaborare</h2><p>Ai nevoie să știi cum funcționează administrarea reclamelor, ce buget trebuie sau în cât timp pot apărea primele contacte? Am răspuns la întrebările primite cel mai des.</p><div className="faq-v8-help"><Headphones size={23}/><span><strong>Vrei să discutăm situația firmei tale?</strong><small>Îți explicăm ce variantă se potrivește obiectivelor și bugetului.</small><Link href="/contact/">Solicită o discuție <ArrowRight size={15}/></Link></span></div></div>
    <div className="faq-v8-list">{FAQ.map((item,i)=><details key={item.question}><summary><span className="faq-v8-index">{String(i+1).padStart(2,'0')}</span><span>{item.question}</span><span className="faq-v8-plus" aria-hidden="true">+</span></summary><p>{item.answer}</p></details>)}</div>
  </div></section>

  <section className="section contact-v8-section" id="contact"><div className="container contact-v8-layout">
    <div className="contact-v8-intro"><div className="section-eyebrow">SOLICITĂ O OFERTĂ</div><h2>Spune-ne ce vrei să promovezi. Îți propunem un punct de plecare clar.</h2><p>Indiferent că ai nevoie de Google Ads, Meta Ads, TikTok Ads sau un site nou, descrie pe scurt afacerea și obiectivul. Analizăm solicitarea și revenim pentru stabilirea detaliilor.</p>
     <div className="contact-v8-benefits"><div><ClipboardCheck size={21}/><span><strong>Discutăm obiectivul</strong><small>Ce vrei să vinzi și ce tip de solicitări cauți.</small></span></div><div><Lightbulb size={21}/><span><strong>Recomandăm o direcție</strong><small>Canale, pagini și măsurare potrivite proiectului.</small></span></div><div><ShieldCheck size={21}/><span><strong>Știi de la început costurile</strong><small>Abonament separat de bugetul publicitar.</small></span></div></div>
     <a className="contact-v8-phone" href={SITE.phoneHref}><Phone size={19}/> Preferi să vorbești direct? <strong>{SITE.phone}</strong></a>
    </div>
    <div className="contact-v8-form"><div className="contact-v8-formhead"><span>FORMULAR CONTACT</span><h3>Cere o ofertă personalizată</h3><p>Completează câteva informații pentru a înțelege de ce ai nevoie.</p></div><ContactForm /></div>
  </div></section>
 </main>
 <Footer/>
 </>;}
