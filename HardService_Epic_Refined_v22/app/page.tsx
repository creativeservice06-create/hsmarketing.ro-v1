import type {Metadata} from 'next';
import Link from 'next/link';
import {ArrowRight,ArrowUpRight,BarChart3,Check,CheckCircle2,ChevronRight,ClipboardList,FileSearch,Globe2,MousePointer2,Phone,SearchCheck,Settings2,ShieldCheck,TrendingDown,UsersRound,Wallet,Workflow} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PartnerBadges from '@/components/PartnerBadges';
import BrandMark from '@/components/BrandMark';
import ContactForm from '@/components/ContactForm';
import ProjectLogoGrid from '@/components/ProjectLogoGrid';
import {SITE,PACKAGES,FAQ} from '@/lib/site';

export const metadata:Metadata={
  title:{absolute:'Administrare Google Ads, Meta Ads și Creare Site | Hard Service'},
  description:'Agenție de promovare online: administrare Google Ads, Facebook și Instagram Ads, TikTok Ads, creare site-uri și tracking conversii. Strategie, optimizare și rapoarte clare.',
  alternates:{canonical:'/'}
};

const problems=[
  {icon:TrendingDown,title:'Plătești pentru clicuri, nu pentru solicitări',text:'Bugetul se consumă, dar puține vizite se transformă în apeluri sau formulare. Verificăm intenția de căutare și traseul până la contact.',link:'google-ads'},
  {icon:UsersRound,title:'Vin cereri, dar nu sunt relevante',text:'Ajustăm mesajele, audiențele și întrebările din formulare, ca să separăm mai bine interesul real de interacțiunile fără rezultat.',link:'facebook-instagram-ads'},
  {icon:BarChart3,title:'Datele nu explică ce funcționează',text:'Verificăm GA4, GTM și conversiile din platforme. Un clic pe telefon nu este același lucru cu un client câștigat.',link:'tracking-conversii'},
  {icon:Globe2,title:'Website-ul nu convinge',text:'Clarificăm oferta, paginile de servicii, butoanele și formularele. Optimizarea reclamelor începe și cu pagina pe care ajunge vizitatorul.',link:'creare-site'},
];
const cards=[
  {label:'Google Ads',tag:'SEARCH · PPC',summary:'Administrăm reclame pentru persoane care caută deja produsele sau serviciile tale. Optimizăm termenii de căutare, bugetul și conversiile măsurate.',link:'google-ads',brand:'google' as const,features:'Cuvinte cheie · Anunțuri · Conversii'},
  {label:'Meta Ads',tag:'FACEBOOK · INSTAGRAM',summary:'Pregătim campanii Facebook și Instagram pentru contacte și vânzări, cu audiențe potrivite, materiale testate și raportare.',link:'facebook-instagram-ads',brand:'meta' as const,features:'Lead Ads · Creativ · Remarketing'},
  {label:'TikTok Ads',tag:'VIDEO ADS',summary:'Construim campanii video, testăm mesaje și formate creative și verificăm dacă platforma aduce vizite și acțiuni relevante.',link:'tiktok-ads',brand:'tiktok' as const,features:'Video · Testare · Optimizare'},
  {label:'Site-uri & magazine',tag:'WEBSITE · E-COMMERCE',summary:'Realizăm site-uri, pagini de servicii și magazine online cu o ofertă clară, formulare funcționale și experiență bună pe mobil.',link:'creare-site',brand:'web' as const,features:'Site · Landing page · Magazin'},
  {label:'GA4 & GTM',tag:'MĂSURARE',summary:'Configurăm și testăm evenimente pentru formulare, apeluri și comenzi. Separăm interacțiunile măsurate de rezultatele reale ale firmei.',link:'tracking-conversii',brand:'analytics' as const,features:'Evenimente · Tracking · Rapoarte'},
  {label:'SEO tehnic',tag:'INDEXARE · STRUCTURĂ',summary:'Verificăm indexarea, sitemap-ul, canonical-urile, linkurile interne și performanța tehnică pentru o bază SEO mai solidă.',link:'seo-tehnic',brand:'seo' as const,features:'Search Console · Canonical · Viteză'},
];
const process=[
  {n:'01',title:'Înțelegem afacerea',text:'Oferta, clienții potriviți, competiția și bugetul disponibil. Stabilim obiectivul pe care îl putem măsura.'},
  {n:'02',title:'Construim și conectăm',text:'Campanii, pagini și evenimente de conversie. Fiecare reclamă trebuie să ducă la o pagină relevantă.'},
  {n:'03',title:'Optimizăm pe baza datelor',text:'Verificăm costuri, termeni, materiale și calitatea solicitărilor. Comunicăm clar schimbările făcute.'},
];
export default function Home(){return <><Header/><main id="top">
  <section className="hs-hero" aria-labelledby="hero-title"><div className="container hs-hero-inner">
    <div className="hs-hero-main">
      <div className="hs-kicker"><span className="hs-kicker-dot"/> MARKETING ONLINE PENTRU FIRME DIN ROMÂNIA</div>
      <h1 id="hero-title">Administrare Google Ads, Facebook Ads și TikTok Ads <em>pentru firme.</em></h1>
      <p>Promovăm serviciile și produsele tale în Google, Facebook, Instagram și TikTok. <strong>Creăm site-uri și magazine online</strong>, îmbunătățim paginile de destinație și măsurăm formularele, apelurile și comenzile prin GA4 și GTM.</p>
      <div className="hs-hero-actions"><Link href="/contact/" className="hs-btn hs-btn-primary">Solicită o ofertă <ArrowUpRight size={18}/></Link><Link href="/#servicii" className="hs-btn hs-btn-outline">Vezi serviciile <ArrowRight size={17}/></Link></div>
      <div className="hs-hero-note"><CheckCircle2 size={17}/> Abonamente de la 200 lei / săptămână. Bugetul de reclamă este separat.</div>
    </div>
    <aside className="hs-hero-aside hs-hero-aside-v22" aria-label="Parteneriate și experiență Hard Service">
      <div className="hs-hero-partner-top">
        <span className="hs-aside-caption">PARTENERIATE ȘI PLATFORME</span>
        <PartnerBadges/>
      </div>
      <div className="hs-hero-editorial">
        <span className="hs-editorial-overline">MARKETING GÂNDIT CA UN ANSAMBLU</span>
        <h2>Reclame relevante. Pagini clare. Decizii bazate pe date.</h2>
        <p>Nu tratăm reclamele, website-ul și tracking-ul ca proiecte fără legătură. Le organizăm în jurul obiectivului firmei tale: contacte utile sau vânzări.</p>
        <div className="hs-editorial-bottom"><span>Google Ads · Meta Ads · TikTok Ads</span><span>Website · GA4 · GTM</span></div>
      </div>
    </aside>
  </div></section>

  <section id="probleme" className="hs-section hs-problem-section"><div className="container">
    <div className="hs-section-heading hs-heading-row"><div><span className="hs-overline">SITUAȚII PE CARE LE ÎNTÂLNIM</span><h2>Unde se blochează, de obicei, promovarea?</h2></div><p>Nu pornim de la ideea că ai nevoie de toate platformele. Verificăm mai întâi ce te împiedică să obții contacte relevante.</p></div>
    <div className="hs-problem-grid">{problems.map((item,i)=>{const Icon=item.icon;return <Link className="hs-problem-card" href={`/${item.link}/`} key={item.title}><span className="hs-card-index">0{i+1} / 04</span><Icon size={27} strokeWidth={1.8}/><h3>{item.title}</h3><p>{item.text}</p><span className="hs-inline-link">Cum ajutăm <ArrowUpRight size={17}/></span></Link>})}</div>
  </div></section>

  <section className="hs-section hs-audience-section"><div className="container hs-audience-grid">
    <div className="hs-audience-copy"><span className="hs-overline">PENTRU CINE LUCRĂM</span><h2>Strategia diferă după felul în care vin clienții.</h2><p>Pentru o firmă de servicii contează apelurile și ofertele cerute. Pentru un magazin online contează comenzile, costurile și experiența de cumpărare.</p></div>
    <Link href="/google-ads/" className="hs-audience-card"><span className="hs-audience-symbol"><Phone size={25}/></span><strong>Firme de servicii și B2B</strong><p>Campanii pe căutări relevante, pagini dedicate și cereri de ofertă pe care le poți urmări.</p><span>Vezi promovarea Google Ads <ArrowUpRight size={17}/></span></Link>
    <Link href="/magazin-online/" className="hs-audience-card"><span className="hs-audience-symbol"><Wallet size={25}/></span><strong>Magazine online</strong><p>Pagini de produse, feed-uri, checkout și măsurare a comenzilor pentru campanii de vânzare.</p><span>Vezi serviciile e-commerce <ArrowUpRight size={17}/></span></Link>
  </div></section>

  <section id="servicii" className="hs-section hs-services-section"><div className="container">
    <div className="hs-section-heading hs-heading-row"><div><span className="hs-overline">SERVICII HARD SERVICE</span><h2>Promovare online, site și tracking. Conectate.</h2></div><p>Lucrăm pe canalele potrivite afacerii tale. Descoperă ce configurăm, ce optimizăm și ce date folosim pentru a evalua fiecare serviciu.</p></div>
    <div className="hs-services-grid">{cards.map((card,i)=><Link href={`/${card.link}/`} className="hs-service-card" key={card.link}><div className="hs-service-top"><span className="hs-card-index">0{i+1} / 06</span><BrandMark kind={card.brand} size={card.brand==='google'?56:card.brand==='tiktok'?55:46}/></div><span className="hs-service-tag">{card.tag}</span><h3>{card.label}</h3><p>{card.summary}</p><div className="hs-service-bottom"><small>{card.features}</small><ArrowUpRight size={20}/></div></Link>)}</div>
    <div className="hs-service-footnote"><Check size={17}/><span>Website-uri și magazine online sunt prezentate împreună aici; <Link href="/creare-site/">crearea site-urilor</Link> și <Link href="/magazin-online/">magazinele online</Link> au pagini SEO distincte.</span></div>
  </div></section>

  <section className="hs-section hs-clarity-section" aria-labelledby="hs-clarity-title"><div className="container hs-clarity-grid">
    <div className="hs-clarity-intro"><span className="hs-overline">CE ÎNSEAMNĂ OPTIMIZARE</span><h2 id="hs-clarity-title">Nu raportăm doar clicuri. Explicăm ce putem îmbunătăți.</h2><p>Campaniile au nevoie de atenție și după lansare. Verificăm atât reclamele, cât și pagina pe care ajunge vizitatorul și modul în care este înregistrată solicitarea.</p><Link href="/contact/" className="hs-text-link">Discută despre proiect <ArrowUpRight size={18}/></Link></div>
    <div className="hs-clarity-list"><article><span>01</span><div><h3>Buget și căutări relevante</h3><p>Analizăm unde se consumă bugetul, ce termeni activează anunțurile și ce putem exclude sau ajusta.</p></div></article><article><span>02</span><div><h3>Reclame și experiență în site</h3><p>Testăm mesaje și verificăm dacă oferta, formularul și butoanele de contact sunt ușor de înțeles.</p></div></article><article><span>03</span><div><h3>Date explicate, nu doar exportate</h3><p>Urmărim evenimentele măsurabile și discutăm separat calitatea cererilor și rezultatele confirmate de firmă.</p></div></article></div>
  </div></section>

  <section className="hs-section hs-work-section" id="mod-de-lucru"><div className="container">
    <div className="hs-section-heading"><span className="hs-overline">UN PROCES SIMPLU</span><h2>Știi ce facem și de ce facem.</h2><p>Fără un tablou complicat de indicatori. Începem cu obiectivul, implementăm ce este necesar și revenim cu explicații utile.</p></div>
    <div className="hs-process-grid">{process.map(p=><article className="hs-process-card" key={p.n}><span>{p.n}</span><h3>{p.title}</h3><p>{p.text}</p></article>)}</div>
    <div className="hs-work-statement"><ShieldCheck size={22}/><span>Conturile, paginile și datele tale rămân sub controlul firmei tale. Stabilim de la început accesurile și responsabilitățile.</span></div>
  </div></section>

  <section className="hs-section hs-portfolio-section" id="proiecte"><div className="container"><div className="hs-section-heading hs-heading-row"><div><span className="hs-overline">PORTOFOLIU REAL</span><h2>Proiecte web din domenii diferite.</h2></div><p>O selecție din website-urile realizate sau dezvoltate în proiectele noastre. Poți deschide fiecare site direct din logo.</p></div><ProjectLogoGrid/></div></section>

  <section className="hs-section hs-pricing-section" id="preturi"><div className="container"><div className="hs-section-heading hs-heading-row"><div><span className="hs-overline">PREȚURI TRANSPARENTE</span><h2>Un punct de plecare clar.</h2></div><p>Tariful acoperă administrarea și suportul descris. Bugetul pentru reclame se plătește separat, direct platformei.</p></div>
  <div className="hs-pricing-grid">{PACKAGES.map(pkg=><article className={`hs-price-card ${pkg.featured?'is-featured':''}`} key={pkg.name}>{pkg.featured&&<span className="hs-recommended">Cel mai ales</span>}<h3>{pkg.name}</h3><div className="hs-price-amount">{pkg.price} <small>lei</small></div><span className="hs-price-period">/ săptămână</span><p>{pkg.intro}</p><ul>{pkg.items.map(i=><li key={i}><CheckCircle2 size={17}/>{i}</li>)}</ul><Link href="/contact/" className={`hs-btn ${pkg.featured?'hs-btn-primary':'hs-btn-outline'}`}>Cere ofertă <ArrowRight size={17}/></Link></article>)}<article className="hs-price-card"><h3>PERSONALIZAT</h3><div className="hs-price-custom">După cerințe</div><span className="hs-price-period">pentru proiecte complexe</span><p>Mai multe platforme, magazin online, implementări sau suport extins.</p><ul><li><CheckCircle2 size={17}/>Obiective și volum de lucru stabilite clar</li><li><CheckCircle2 size={17}/>Website, campanii și tracking după nevoie</li><li><CheckCircle2 size={17}/>Plan de implementare și raportare</li><li><CheckCircle2 size={17}/>Ofertă adaptată proiectului</li></ul><Link href="/contact/" className="hs-btn hs-btn-outline">Discută proiectul <ArrowRight size={17}/></Link></article></div><p className="hs-pricing-note">Prețurile sunt orientative pentru abonamentele afișate. Serviciile și volumul incluse se confirmă într-o propunere scrisă.</p></div></section>

  <section className="hs-section hs-faq-section" id="faq"><div className="container hs-faq-grid"><div><span className="hs-overline">ÎNTREBĂRI FRECVENTE</span><h2>Ce e bine să știi înainte să începem?</h2><p>Răspunsuri despre costuri, bugetul platformelor, măsurare și colaborare.</p><Link href="/contact/" className="hs-text-link">Ai altă întrebare? Scrie-ne <ArrowUpRight size={18}/></Link></div><div className="hs-faq-items">{FAQ.map((item,i)=><details key={item.question}><summary><span className="hs-faq-num">{String(i+1).padStart(2,'0')}</span>{item.question}<span className="hs-faq-plus">+</span></summary><p>{item.answer}</p></details>)}</div></div></section>

  <section className="hs-contact-section" id="contact"><div className="container hs-contact-grid"><div className="hs-contact-lead"><span className="hs-overline">URMĂTORUL PAS</span><h2>Spune-ne ce vrei să obții. Îți propunem o direcție.</h2><p>Ne poți contacta pentru un canal publicitar, un website nou sau o strategie completă. Nu trebuie să știi deja ce platformă este potrivită.</p><div className="hs-contact-points"><span><SearchCheck size={19}/> Discutăm oferta și obiectivele</span><span><ClipboardList size={19}/> Verificăm ce există deja</span><span><Settings2 size={19}/> Stabilim următoarele implementări</span></div><a className="hs-contact-phone" href={SITE.phoneHref}><Phone size={19}/> {SITE.phone}</a></div><div className="hs-contact-form-wrap"><div className="hs-form-heading"><span>FORMULAR DE OFERTĂ</span><h3>Descrie proiectul</h3><p>Te contactăm pentru clarificarea cerințelor și a bugetului.</p></div><ContactForm/></div></div></section>
</main><Footer/></>}
