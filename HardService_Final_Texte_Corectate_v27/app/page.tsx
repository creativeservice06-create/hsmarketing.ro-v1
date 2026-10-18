import type {Metadata} from 'next';
import Link from 'next/link';
import {ArrowRight,ArrowUpRight,BarChart3,Check,CheckCircle2,ChevronRight,ClipboardList,FileSearch,Globe2,MousePointer2,Phone,SearchCheck,Settings2,ShieldCheck,TrendingDown,UsersRound,Wallet,Workflow} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PartnerBadges from '@/components/PartnerBadges';
import BrandMark from '@/components/BrandMark';
import ContactForm from '@/components/ContactForm';
import ProjectLogoGrid from '@/components/ProjectLogoGrid';
import TrustMetrics from '@/components/TrustMetrics';
import {SITE,PACKAGES,FAQ} from '@/lib/site';

export const metadata:Metadata={
  title:{absolute:'Administrare Google Ads, Meta Ads și TikTok Ads | Hard Service'},
  description:'Administrare Google Ads, Facebook și Instagram Ads și TikTok Ads pentru firme. Creare site, magazin online, tracking conversii, optimizare și rapoarte clare.',
  alternates:{canonical:'/'}
};

const problems=[
  {icon:MousePointer2,title:'Ai click-uri, dar prea puține cereri',text:'Reclamele aduc vizite, însă prea puțini oameni sună sau completează formularul. Verificăm căutările, mesajele și pagina pe care ajunge fiecare vizitator.',link:'google-ads'},
  {icon:UsersRound,title:'Bugetul atrage publicul nepotrivit',text:'Poți plăti pentru click-uri fără legătură cu oferta ta. Ajustăm audiențele, plasările și reclamele pentru a atrage persoane cu interes real.',link:'facebook-instagram-ads'},
  {icon:BarChart3,title:'Nu știi care click-uri aduc rezultate',text:'Rapoartele arată click-uri și conversii, dar nu întotdeauna explică ce interacțiuni duc la solicitări reale. Verificăm GA4, GTM și evenimentele importante.',link:'tracking-conversii'},
  {icon:Globe2,title:'Vizitatorii pleacă de pe site după click',text:'O pagină neclară sau un formular greu de completat poate irosi traficul plătit. Îmbunătățim prezentarea, viteza și drumul către contact.',link:'creare-site'},
];
const cards=[
  {label:'Google Ads',tag:'SEARCH · PPC',summary:'Administrăm reclame pentru persoane care caută deja produsele sau serviciile tale. Optimizăm termenii de căutare, bugetul și conversiile măsurate.',link:'google-ads',brand:'google' as const,features:'Cuvinte-cheie · Anunțuri · Conversii'},
  {label:'Meta Ads',tag:'FACEBOOK · INSTAGRAM',summary:'Pregătim campanii Facebook și Instagram pentru contacte și vânzări, cu audiențe potrivite, materiale testate și raportare.',link:'facebook-instagram-ads',brand:'meta' as const,features:'Lead Ads · Creativ · Remarketing'},
  {label:'TikTok Ads',tag:'VIDEO ADS',summary:'Construim campanii video, testăm mesaje și formate creative și verificăm dacă platforma aduce vizite și acțiuni relevante.',link:'tiktok-ads',brand:'tiktok' as const,features:'Video · Testare · Optimizare'},
  {label:'Site-uri și magazine online',tag:'WEBSITE · E-COMMERCE',summary:'Realizăm site-uri, pagini de servicii și magazine online cu o ofertă clară, formulare funcționale și experiență bună pe mobil.',link:'creare-site',brand:'web' as const,features:'Site · Landing page · Magazin'},
  {label:'GA4 & GTM',tag:'MĂSURARE',summary:'Configurăm și testăm evenimente pentru formulare, apeluri și comenzi. Separăm interacțiunile măsurate de rezultatele reale ale firmei.',link:'tracking-conversii',brand:'analytics' as const,features:'Evenimente · Tracking · Rapoarte'},
  {label:'SEO tehnic',tag:'INDEXARE · STRUCTURĂ',summary:'Verificăm indexarea, sitemap-ul, URL-urile canonice, link-urile interne și performanța tehnică pentru o bază SEO mai solidă.',link:'seo-tehnic',brand:'seo' as const,features:'Search Console · Canonical · Viteză'},
];
const process=[
  {n:'01',title:'Înțelegem afacerea',text:'Oferta, clienții potriviți, competiția și bugetul disponibil. Stabilim obiectivul pe care îl putem măsura.'},
  {n:'02',title:'Construim și conectăm',text:'Campanii, pagini și evenimente de conversie. Fiecare reclamă trebuie să ducă la o pagină relevantă.'},
  {n:'03',title:'Verificăm conversiile',text:'Testăm formularele, apelurile și evenimentele importante înainte să evaluăm eficiența campaniilor.'},
  {n:'04',title:'Optimizăm și raportăm',text:'Ajustăm reclamele, audiențele și paginile pe baza datelor și discutăm calitatea solicitărilor.'},
];
export default function Home(){return <><Header/><main id="top">
  <section className="hs24-hero" aria-labelledby="hero-title"><div className="container hs24-hero-inner">
    <div className="hs24-hero-copy">
      <div className="hs24-eyebrow"><span className="hs24-eyebrow-dot"/> AGENȚIE DE PROMOVARE ONLINE · ROMÂNIA</div>
      <h1 id="hero-title">Mai mult decât click-uri, atragem clienții potriviți pentru afacerea ta. <span>Google Ads, Meta Ads și TikTok Ads.</span></h1>
      <p className="hs24-lead">Administrăm reclame în Google, Facebook, Instagram și TikTok pentru firme și magazine online. Construim paginile pe care ajung clienții, configurăm conversiile și explicăm transparent ce îmbunătățim.</p>
      <div className="hs24-hero-actions"><Link href="/contact/#formular" className="hs-btn hs-btn-primary">Cere ofertă <ArrowUpRight size={20}/></Link><Link href="/#proiecte" className="hs-btn hs-btn-outline">Vezi portofoliul <ArrowRight size={18}/></Link></div>
      <div className="hs24-hero-details"><span><CheckCircle2 size={18}/> Administrare campanii și website</span><span><CheckCircle2 size={18}/> Tracking, rapoarte și suport</span><span><CheckCircle2 size={18}/> Abonamente de la 200 lei / săptămână</span></div>
    </div>
    <TrustMetrics/>
  </div></section>

  <section id="probleme" className="hs-section hs-problem-section"><div className="container">
    <div className="hs-section-heading hs-heading-row"><div><span className="hs-overline">CÂND ESTE NEVOIE DE NOI</span><h2>Când click-urile nu se transformă în clienți.</h2></div><p>Nu este suficient să atragi vizitatori pe site. Identificăm unde se pierd oportunitățile și ce merită schimbat pentru cereri de ofertă mai relevante.</p></div>
    <div className="hs-problem-grid">{problems.map((item,i)=>{const Icon=item.icon;return <Link className="hs-problem-card" href={`/${item.link}/`} key={item.title}><span className="hs-card-index">0{i+1} / 04</span><Icon size={27} strokeWidth={1.8}/><h3>{item.title}</h3><p>{item.text}</p><span className="hs-inline-link">Cum ajutăm <ArrowUpRight size={17}/></span></Link>})}</div>
  </div></section>

  <section className="hs-section hs-audience-section"><div className="container hs-audience-grid">
    <div className="hs-audience-copy"><span className="hs-overline">PENTRU CINE LUCRĂM</span><h2>Strategia diferă după felul în care vin clienții.</h2><p>Pentru o firmă de servicii contează apelurile și ofertele cerute. Pentru un magazin online contează comenzile, costurile și experiența de cumpărare.</p></div>
    <Link href="/google-ads/" className="hs-audience-card"><span className="hs-audience-symbol"><Phone size={25}/></span><strong>Firme de servicii și B2B</strong><p>Campanii pe căutări relevante, pagini dedicate și cereri de ofertă pe care le poți urmări.</p><span>Vezi promovarea Google Ads <ArrowUpRight size={17}/></span></Link>
    <Link href="/magazin-online/" className="hs-audience-card"><span className="hs-audience-symbol"><Wallet size={25}/></span><strong>Magazine online</strong><p>Pagini de produse, feed-uri de produse, checkout și măsurarea comenzilor pentru campanii de vânzare.</p><span>Vezi serviciile e-commerce <ArrowUpRight size={17}/></span></Link>
  </div></section>

  <section id="servicii" className="hs-section hs-services-section"><div className="container">
    <div className="hs-section-heading hs-heading-row"><div><span className="hs-overline">SERVICII HARD SERVICE</span><h2>Serviciile pe care le conectăm într-o singură strategie.</h2></div><p>Lucrăm pe canalele potrivite afacerii tale. Descoperă ce configurăm, ce optimizăm și ce date folosim pentru a evalua fiecare serviciu.</p></div>
    <div className="hs-services-grid">{cards.map((card,i)=><Link href={`/${card.link}/`} className="hs-service-card" key={card.link}><div className="hs-service-top"><span className="hs-card-index">0{i+1} / 06</span><BrandMark kind={card.brand} size={card.brand==='google'?56:card.brand==='tiktok'?55:46}/></div><span className="hs-service-tag">{card.tag}</span><h3>{card.label}</h3><p>{card.summary}</p><div className="hs-service-bottom"><small>{card.features}</small><ArrowUpRight size={20}/></div></Link>)}</div>
    <div className="hs-service-footnote hs25-service-note">
      <span className="hs25-note-icon"><CheckCircle2 size={21}/></span>
      <div><strong>Servicii conectate, rezultate mai ușor de urmărit.</strong><p>Nu administrăm doar reclame: putem îmbunătăți și website-ul, formularele și măsurarea conversiilor. Primești un plan adaptat afacerii și explicații clare despre ce lucrăm.</p></div>
      <Link href="/contact/#formular" className="hs25-note-cta">Discută proiectul <ArrowUpRight size={19}/></Link>
    </div>
  </div></section>

  <section className="hs-section hs-clarity-section" aria-labelledby="hs-clarity-title"><div className="container hs-clarity-grid">
    <div className="hs-clarity-intro"><span className="hs-overline">CE ÎNSEAMNĂ OPTIMIZARE</span><h2 id="hs-clarity-title">Nu raportăm doar click-uri. Explicăm ce putem îmbunătăți.</h2><p>Campaniile au nevoie de atenție și după lansare. Verificăm atât reclamele, cât și pagina pe care ajunge vizitatorul și modul în care este înregistrată solicitarea.</p><Link href="/contact/" className="hs-text-link">Discută despre proiect <ArrowUpRight size={18}/></Link></div>
    <div className="hs-clarity-list"><article><span>01</span><div><h3>Buget și căutări relevante</h3><p>Analizăm unde se consumă bugetul, ce termeni activează anunțurile și ce putem exclude sau ajusta.</p></div></article><article><span>02</span><div><h3>Reclame și experiența pe site</h3><p>Testăm mesaje și verificăm dacă oferta, formularul și butoanele de contact sunt ușor de înțeles.</p></div></article><article><span>03</span><div><h3>Date explicate, nu doar exportate</h3><p>Urmărim evenimentele măsurabile și discutăm separat calitatea cererilor și rezultatele confirmate de firmă.</p></div></article></div>
  </div></section>

  <section className="hs-section hs-work-section" id="mod-de-lucru"><div className="container">
    <div className="hs-section-heading"><span className="hs-overline">UN PROCES SIMPLU</span><h2>De la primul apel la o strategie care se poate măsura.</h2><p>Fără un tablou complicat de indicatori. Începem cu obiectivul, implementăm ce este necesar și revenim cu explicații utile.</p></div>
    <div className="hs-process-grid">{process.map(p=><article className="hs-process-card" key={p.n}><span>{p.n}</span><h3>{p.title}</h3><p>{p.text}</p></article>)}</div>
    <div className="hs-work-statement"><ShieldCheck size={22}/><span>Conturile, paginile și datele tale rămân sub controlul firmei tale. Stabilim de la început accesurile și responsabilitățile.</span></div>
  </div></section>

  <section className="hs-section hs-portfolio-section" id="proiecte"><div className="container"><div className="hs-section-heading hs-section-heading-v23"><span className="hs-overline">PORTOFOLIU REAL</span><h2>Proiectele noastre, în domenii diferite.</h2><p>De la servicii și educație până la domenii tehnice. Logo-urile duc către website-urile proiectelor din portofoliu.</p></div><ProjectLogoGrid/></div></section>

  <section className="hs-section hs-pricing-section" id="preturi"><div className="container"><div className="hs-section-heading hs-section-heading-v23"><span className="hs-overline">PREȚURI TRANSPARENTE</span><h2>Administrare transparentă. Fără costuri ascunse.</h2><p>Prețurile sunt săptămânale și se referă la administrare, optimizare și suport. Bugetul reclamelor se achită separat, direct platformei.</p></div>
  <div className="hs-pricing-grid hs-pricing-grid-v23">{PACKAGES.map(pkg=><article className={`hs-price-card hs-price-card-v23 ${pkg.featured?'is-featured':''}`} key={pkg.name}>
    <div className="hs-price-v23-head"><h3>{pkg.name}</h3>{pkg.featured&&<span className="hs-recommended">RECOMANDAT</span>}</div>
    <div className="hs-price-v23-cost"><span className="hs-price-amount">{pkg.price} <small>lei</small></span><span className="hs-price-period">/ săptămână</span></div>
    <p className="hs-price-v23-intro">{pkg.intro}</p>
    <div className="hs-price-v23-contents"><span>CE INCLUDE</span><ul>{pkg.items.map(item=><li key={item}><CheckCircle2 size={17}/><span>{item}</span></li>)}</ul></div>
    <Link href="/contact/" className={`hs-btn ${pkg.featured?'hs-btn-primary':'hs-btn-outline'}`}>Cere o ofertă <ArrowRight size={17}/></Link>
  </article>)}</div>
  <article className="hs-custom-package-v23"><div><span className="hs-custom-eyebrow">PACHET PERSONALIZAT</span><h3>Ai mai multe cerințe?<br/>Configurăm un pachet adaptat.</h3><p>Potrivit pentru mai multe platforme, magazine online, implementări tehnice sau proiecte cu volum mare de lucru.</p></div><div className="hs-custom-package-details"><strong>Preț în funcție de cerințe</strong><ul><li><CheckCircle2 size={17}/> Plan adaptat obiectivelor</li><li><CheckCircle2 size={17}/> Website, Ads și tracking în același proiect</li><li><CheckCircle2 size={17}/> Livrabile și costuri stabilite înainte</li></ul><Link href="/contact/" className="hs-btn hs-btn-primary">Solicită ofertă personalizată <ArrowUpRight size={17}/></Link></div></article>
  <p className="hs-pricing-note">Oferta finală precizează activitățile incluse și eventualele implementări suplimentare. Rezultatele depind de domeniu, ofertă și buget.</p>
  </div></section>

  <section className="hs-section hs-faq-section" id="faq"><div className="container hs-faq-grid"><div><span className="hs-overline">ÎNTREBĂRI FRECVENTE</span><h2>Ce e bine să știi înainte să începem?</h2><p>Răspunsuri despre costuri, bugetul platformelor, măsurare și colaborare.</p><Link href="/contact/" className="hs-text-link">Ai altă întrebare? Scrie-ne <ArrowUpRight size={18}/></Link></div><div className="hs-faq-items">{FAQ.map((item,i)=><details key={item.question}><summary><span className="hs-faq-num">{String(i+1).padStart(2,'0')}</span>{item.question}<span className="hs-faq-plus">+</span></summary><p>{item.answer}</p></details>)}</div></div></section>

  <section className="hs-contact-section" id="contact"><div className="container hs-contact-grid"><div className="hs-contact-lead"><span className="hs-overline">URMĂTORUL PAS</span><h2>Spune-ne ce vrei să promovezi. Îți propunem un plan.</h2><p>Ne poți contacta pentru un canal publicitar, un website nou sau o strategie completă. Nu trebuie să știi deja ce platformă este potrivită.</p><div className="hs-contact-points"><span><SearchCheck size={19}/> Discutăm oferta și obiectivele</span><span><ClipboardList size={19}/> Verificăm ce există deja</span><span><Settings2 size={19}/> Stabilim următoarele implementări</span></div><a className="hs-contact-phone" href={SITE.phoneHref}><Phone size={19}/> {SITE.phone}</a></div><div className="hs-contact-form-wrap"><div className="hs-form-heading"><span>FORMULAR DE OFERTĂ</span><h3>Descrie proiectul</h3><p>Te contactăm pentru clarificarea cerințelor și a bugetului.</p></div><ContactForm/></div></div></section>
</main><Footer/></>}
