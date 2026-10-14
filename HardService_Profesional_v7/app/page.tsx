import type {Metadata} from 'next';
import Link from 'next/link';
import {ArrowRight, CheckCircle2, Phone, ShieldCheck, Gauge, Settings2, BarChart3, FileSpreadsheet, Wrench} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BrandMark from '@/components/BrandMark';
import JourneyFlow from '@/components/JourneyFlow';
import ContactForm from '@/components/ContactForm';
import ProjectCarousel from '@/components/ProjectCarousel';
import {SITE, PACKAGES, FAQ} from '@/lib/site';

export const metadata:Metadata={
  title:'Promovare online cu prețuri clare | Google Ads, Meta Ads, TikTok Ads & Web | Hard Service',
  description:'Administrare Google Ads, Meta Ads și TikTok Ads, creare site-uri, tracking conversii și suport continuu. Prețuri de la 200 lei/săptămână.',
  alternates:{canonical:'/'},
};

const services=[
 {name:'Google Ads',slug:'google-ads',logos:['google'] as const,desc:'Promovare în Google Search, Performance Max și alte formate relevante. Construim campanii în jurul căutărilor reale, urmărind apelurile, formularele și vânzările.',bullets:['analiză cuvinte cheie și termeni negativi','anunțuri, extensii și structuri relevante','gestionarea bugetului și optimizarea conversiilor','raportare periodică și direcții noi de testare']},
 {name:'Facebook & Instagram Ads',slug:'facebook-instagram-ads',logos:['meta','facebook','instagram'] as const,desc:'Campanii Meta pentru formular, trafic sau vânzare. Alegem mesajele și audiențele potrivite și analizăm constant răspunsul publicului.',bullets:['campanii Lead Ads, trafic și conversii','testare texte, imagini și audiențe','remarketing și Meta Pixel, unde este relevant','rapoarte și propuneri pentru campaniile următoare']},
 {name:'TikTok Ads',slug:'tiktok-ads',logos:['tiktok'] as const,desc:'Reclame video pentru afacerile care vor să ajungă la un public nou. Punem accent pe ofertă, format creativ și parcursul către contact sau comandă.',bullets:['strategie și organizarea campaniilor video','recomandări concrete pentru materiale creative','targetare, buget și optimizarea reclamelor','TikTok Pixel și interpretarea performanței']},
 {name:'Creare site & landing page',slug:'creare-site',logos:['web'] as const,desc:'Site-uri de prezentare responsive și pagini dedicate campaniilor. Organizăm informațiile astfel încât oferta să fie ușor de înțeles și de contactat.',bullets:['design adaptat identității firmei','structură intuitivă și pagini de servicii','formulare, butoane de apel și mobile-first','viteză, SEO on-page și măsurarea contactelor']},
 {name:'Magazine online',slug:'magazin-online',logos:['shop'] as const,desc:'Magazine online cu produse bine organizate, coș și checkout clar. Pregătim baza pentru promovare, măsurarea comenzilor și dezvoltarea catalogului.',bullets:['categorii, pagini de produs și navigare','coș, checkout și integrarea plăților','tracking pentru achiziții și evenimente','suport pentru Google Shopping și remarketing']},
 {name:'Tracking & conversii',slug:'tracking-conversii',logos:['analytics'] as const,desc:'Configurăm Google Analytics 4, Google Tag Manager și evenimente utile pentru decizii: interacțiuni de contact, formulare și achiziții.',bullets:['GA4, GTM și auditul evenimentelor','conversii pentru campaniile publicitare','verificarea fluxului și a datelor','raportare și recomandări bazate pe măsurare']},
 {name:'SEO tehnic',slug:'seo-tehnic',logos:['seo'] as const,desc:'Îmbunătățim structura tehnică a website-ului pentru indexare și navigare. Rezolvăm problemele care împiedică motoarele de căutare să înțeleagă paginile.',bullets:['Search Console, sitemap și robots.txt','canonical, meta date și structură semantică','linkuri interne și experiență mobile','verificări de viteză și recomandări prioritizate']},
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
      <p className="hero-price-note">Abonamente de la <strong>200 lei / săptămână</strong> · bugetul publicitar se stabilește separat.</p>
     </div>
    </div>
    <JourneyFlow/>
   </div>
  </section>

  <section id="servicii" className="section section-services-v5">
   <div className="container">
    <div className="section-header"><div><div className="section-eyebrow">SERVICII</div><h2>Servicii prezentate clar, cu informații utile pentru decizia clientului</h2><p>Explicăm ce facem în Google Ads, Meta Ads, TikTok Ads, website-uri și tracking, astfel încât oferta să fie ușor de înțeles și să inspire mai multă încredere.</p></div></div>
    <div className="service-grid service-grid-v5">{services.map(service=><Link key={service.slug} href={`/${service.slug}/`} className="service-card service-card-v5">
      <div className="service-v5-top">
        <div className="service-icon service-icon-group large">{service.logos.map(k=><BrandMark key={k} kind={k} size={k==='tiktok'?62:k==='meta'?48:42}/>)}</div>
        <h3>{service.name}</h3>
      </div>
      <p>{service.desc}</p>
      <ul className="service-v5-list">{service.bullets.map(item=><li key={item}><CheckCircle2 size={15}/>{item}</li>)}</ul>
      <span className="service-more">Vezi detalii despre serviciu <ArrowRight size={15}/></span>
    </Link>)}</div>
   </div>
  </section>

  <section className="section section-method-v7" id="metoda">
   <div className="container"><div className="section-header"><div className="section-eyebrow">MODUL NOSTRU DE LUCRU</div><h2>Decizii argumentate, nu campanii lăsate pe pilot automat.</h2><p>Din experiența proiectelor pentru servicii locale, cursuri și magazine, știm că reclama singură nu rezolvă totul. Contează ce vede vizitatorul, cum intră în contact și ce putem măsura.</p></div>
    <div className="method-v7-grid">
     <article><span>01 / ANALIZĂ</span><h3>Înțelegem cererea</h3><p>Discutăm oferta, zonele sau publicul vizat, concurența și obiectivul real: apel, cerere de ofertă, înscriere ori comandă. Începem cu o direcție realistă și priorități clare.</p></article>
     <article><span>02 / IMPLEMENTARE</span><h3>Construim parcursul</h3><p>Corelăm campaniile cu paginile de destinație, butoanele de contact și tracking-ul. Recomandăm modificări concrete ale conținutului atunci când mesajul reclamei nu este susținut de website.</p></article>
     <article><span>03 / EVOLUȚIE</span><h3>Optimizăm și explicăm</h3><p>Verificăm termenii de căutare, audiențele, costurile și acțiunile măsurate. Primești rapoarte inteligibile și recomandări pentru următoarele teste, nu doar tabele cu clicuri.</p></article>
    </div>
   </div>
  </section>

  <section id="proiecte" className="section projects-v7-section">
   <div className="container"><div className="section-header"><div><div className="section-eyebrow">PORTOFOLIU</div><h2>Website-uri pentru domenii diferite. Aceeași atenție la detalii.</h2><p>De la proiecte pentru educație și servicii locale până la echipamente medicale, e-commerce și marketing. Explorează cele 11 website-uri și intră direct pe fiecare.</p></div></div>
   <ProjectCarousel/>
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

  <section className="section faq-v4-section" id="faq"><div className="container v4-faq-grid"><div><div className="section-eyebrow">ÎNTREBĂRI FRECVENTE</div><h2>Întrebări utile înainte de a începe colaborarea</h2><p>Găsești mai jos răspunsuri clare despre abonamente, bugete, rezultate, website și modul în care lucrăm pe termen scurt și lung.</p></div><div className="faq-group">{FAQ.map(item=><details key={item.question}><summary>{item.question}</summary><p>{item.answer}</p></details>)}</div></div></section>

  <section className="section contact-v4-section" id="contact"><div className="container contact-v4-grid"><div><div className="section-eyebrow">CONTACT</div><h2>Spune-ne ce serviciu vrei să promovezi</h2><p>Poți începe cu un singur serviciu sau cu o soluție completă: campanii, website, tracking și optimizare continuă. Îți răspundem prin formular și stabilim o direcție clară pentru proiect.</p><div className="contact-v4-points"><span><Phone size={16}/>{SITE.phone}</span></div></div><div className="contact-v4-form"><ContactForm /></div></div></section>
 </main>
 <Footer/>
 </>;}
