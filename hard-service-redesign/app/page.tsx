import type {Metadata} from 'next';
import Link from 'next/link';
import {ArrowRight, ArrowUpRight, CheckCircle2, Phone} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BrandMark from '@/components/BrandMark';
import JourneyFlow from '@/components/JourneyFlow';
import {SITE} from '@/lib/site';

export const metadata:Metadata={
  title:'Obține mai mulți clienți prin promovare online | Hard Service',
  description:'Google Ads, Facebook & Instagram Ads, TikTok Ads și creare site-uri. Strategii clare, rezultate măsurabile și administrare continuă.',
  alternates:{canonical:'/'},
};

const homeServices=[
  {name:'Google Ads',brands:['google'] as const,href:'/google-ads/',desc:'Campanii eficiente în Google Search și Display.',price:'De la 200 lei / săptămână'},
  {name:'Facebook & Instagram Ads',brands:['meta','facebook','instagram'] as const,href:'/facebook-instagram-ads/',desc:'Lead-uri, vânzări și notorietate de brand.',price:'De la 200 lei / săptămână'},
  {name:'TikTok Ads',brands:['tiktok'] as const,href:'/tiktok-ads/',desc:'Creștere rapidă printre clienții potriviți.',price:'De la 200 lei / săptămână'},
  {name:'Creare site-uri',brands:['web'] as const,href:'/creare-site/',desc:'Site-uri moderne, rapide și optimizate pentru vânzări.',price:'De la 800 lei'},
  {name:'Magazine online',brands:['shop'] as const,href:'/magazin-online/',desc:'Magazine complete, ușor de administrat.',price:'De la 1.200 lei'},
  {name:'SEO tehnic / Tracking',brands:['analytics'] as const,href:'/seo-tehnic/',desc:'Optimizare tehnică și monitorizare avansată.',price:'De la 200 lei / săptămână'},
];

const projectExamples=[
  {
    name:'Magazin online decorațiuni',
    cat:'Google Ads',
    img:'/mockup/proj1.png',
    metrics:[{value:'+320%',label:'Creștere vânzări'},{value:'-45%',label:'Cost pe conversie'}],
  },
  {
    name:'Firmă servicii construcții',
    cat:'Meta Ads',
    img:'/mockup/proj2.png',
    metrics:[{value:'+180%',label:'Solicitări noi'},{value:'-38%',label:'Cost pe lead'}],
  },
  {
    name:'Cabinet stomatologic',
    cat:'Google Ads + Meta Ads',
    img:'/mockup/proj3.png',
    metrics:[{value:'+220%',label:'Programări online'},{value:'-52%',label:'Cost pe programare'}],
  },
];

const faqItems=[
  {question:'Ce include abonamentul de administrare?',answer:'Include activitățile din pachetul ales, adaptate la nevoile proiectului tău și volumul de lucru stabilit la început.'},
  {question:'Bugetul de reclame este inclus în preț?',answer:'Nu. Bugetul Google, Meta sau TikTok se plătește separat către platformele publicitare.'},
  {question:'În cât timp apar primele rezultate?',answer:'Depinde de domeniu, concurență și buget. Campaniile pot aduce trafic rapid, însă optimizarea pentru rezultate constante necesită date și ajustări.'},
  {question:'Pentru ce tipuri de afaceri sunt potrivite aceste servicii?',answer:'Pentru firme care au nevoie de vizibilitate, lead-uri, apeluri, programări sau vânzări online, în funcție de obiective și nișă.'},
  {question:'Pot să renunț la colaborare?',answer:'Condițiile de colaborare se stabilesc de la început. Înainte de oprire, recomandăm evaluarea campaniilor și a rezultatelor obținute.'},
  {question:'Cum primesc rapoartele?',answer:'Rapoartele se trimit periodic și pot include date despre trafic, lead-uri, conversii și acțiunile de optimizare realizate.'},
];

const packages=[
  {name:'START',price:'200',intro:'Campanii Google sau Facebook',items:['Campanii Google sau Facebook','Administrare continuă','Raportare săptămânală'],featured:false},
  {name:'SILVER',price:'350',intro:'Cel mai popular',items:['Google + Facebook + Instagram','Optimizare continuă','Raportare detaliată'],featured:true},
  {name:'PROFESIONAL',price:'400',intro:'Campanii multi-platformă',items:['Campanii multi-platformă','Tracking avansat și optimizări','Consultanță strategică'],featured:false},
];

export default function Home(){
  return <>
    <Header/>
    <main id="top">
      <section className="hero-section hero-clean">
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-dot"/> PROMOVARE ONLINE PENTRU AFACERI CARE CRESC</div>
            <h1>Obține mai mulți clienți <span>prin promovare online</span></h1>
            <p className="hero-lead">Google Ads, Facebook &amp; Instagram Ads, TikTok Ads și creare site-uri, cu strategii clare, rezultate măsurabile și administrare continuă.</p>
            <div className="hero-buttons">
              <Link className="btn btn-blue" href="/contact">Solicită o analiză gratuită <ArrowRight size={18}/></Link>
              <Link className="btn btn-outline" href="#preturi">Vezi pachetele și prețurile</Link>
            </div>
            <div className="hero-trust hero-trust-simple">
              <span><CheckCircle2 size={17}/> Prețuri transparente</span>
              <span><CheckCircle2 size={17}/> Raportare clară</span>
              <span><CheckCircle2 size={17}/> Suport direct</span>
              <span><CheckCircle2 size={17}/> Colaborare flexibilă</span>
            </div>
          </div>
          <JourneyFlow/>
        </div>
      </section>


      <section id="servicii" className="section section-services compact-section">
        <div className="container">
          <div className="section-header">
            <div>
              <h2>Serviciile noastre</h2>
              <p>Soluții complete de marketing online pentru creșterea afacerii tale.</p>
            </div>
            <Link className="text-link" href="/#servicii">Vezi toate serviciile <ArrowUpRight size={17}/></Link>
          </div>
          <div className="service-grid service-grid-six">
            {homeServices.map(item=><Link href={item.href} className="service-card service-card-priced" key={item.name}>
              <div className="service-icon service-icon-group">{item.brands.map((brand)=> <BrandMark key={brand} kind={brand} size={brand==='meta'?36:32}/> )}</div>
              <h3>{item.name}</h3>
              <p>{item.desc}</p>
              <strong className="service-price-inline">{item.price}</strong>
              <span className="service-more">Află mai multe <ArrowRight size={15}/></span>
            </Link>)}
          </div>
        </div>
      </section>

      <section id="proiecte" className="section section-projects compact-section">
        <div className="container">
          <div className="section-header">
            <div>
              <h2>Proiecte recente</h2>
              <p>Exemple de proiecte prezentate în stil profesional. Imaginile se pot înlocui ulterior cu capturi aprobate din proiectele tale.</p>
            </div>
            <Link className="text-link" href="/#proiecte">Vezi toate proiectele <ArrowUpRight size={17}/></Link>
          </div>
          <div className="projects-grid projects-grid-tight">
            {projectExamples.map(item=><article className="project-card project-card-performance" key={item.name}>
              <div className="project-image project-image-cropped"><img src={item.img} alt={item.name} loading="lazy" width="320" height="205"/></div>
              <div className="project-info">
                <span className="project-tag">{item.cat}</span>
                <h3>{item.name}</h3>
                <div className="project-metrics">
                  {item.metrics.map(metric=><div key={metric.label} className="project-metric"><strong>{metric.value}</strong><span>{metric.label}</span></div>)}
                </div>
                <Link href="/contact" className="project-card-link">Vezi studiul de caz <ArrowRight size={15}/></Link>
              </div>
            </article>)}
          </div>
        </div>
      </section>

      <section className="section section-work-price compact-section">
        <div className="container work-price-grid work-price-grid-demo">
          <div id="cum-lucram" className="work-panel">
            <h2>Cum lucrăm</h2>
            <p>Un proces simplu și transparent, de la analiză la rezultate.</p>
            <div className="work-steps work-steps-compact">
              <div><span className="step-nr">1</span><div><h3>Analiză și strategie</h3><p>Analizăm afacerea ta, obiectivele și concurența.</p></div></div>
              <div><span className="step-nr">2</span><div><h3>Implementare</h3><p>Creăm campaniile, site-ul sau tracking-ul necesar.</p></div></div>
              <div><span className="step-nr">3</span><div><h3>Optimizare</h3><p>Monitorizăm rezultatele și optimizăm continuu pentru mai mulți clienți.</p></div></div>
            </div>
          </div>

          <div id="preturi" className="pricing-panel pricing-panel-demo">
            <div className="section-header pricing-heading">
              <div>
                <h2>Prețuri</h2>
                <p>Abonamente lunare, cu prețuri clare și administrare continuă.</p>
              </div>
              <Link className="text-link" href="/#preturi">Vezi toate pachetele <ArrowUpRight size={17}/></Link>
            </div>
            <div className="pricing-grid pricing-grid-compact">
              {packages.map(p=><div key={p.name} className={`price-card ${p.featured?'price-featured':''}`}>
                {p.featured&&<div className="price-badge">Cel mai popular</div>}
                <h3>{p.name}</h3>
                <div className="price-amount">{p.price} <span>lei</span></div>
                <span className="per-week">/ săptămână</span>
                <p className="price-intro">{p.intro}</p>
                <ul>{p.items.map(i=><li key={i}><CheckCircle2 size={15}/>{i}</li>)}</ul>
                <Link className={`btn ${p.featured?'btn-blue':'btn-outline'}`} href="/contact">Solicită ofertă <ArrowRight size={16}/></Link>
              </div>)}
            </div>
          </div>
        </div>
      </section>

      <section id="intrebari" className="section section-faq compact-section">
        <div className="container faq-layout faq-layout-wide">
          <div className="faq-intro">
            <h2>Întrebări frecvente</h2>
            <p>Răspunsuri la cele mai comune întrebări.</p>
          </div>
          <div className="faq-accordion faq-accordion-two">
            {faqItems.map((item,i)=><details key={item.question} open={i===0}>
              <summary>{item.question}<span className="faq-chevron">+</span></summary>
              <p>{item.answer}</p>
            </details>)}
          </div>
        </div>
      </section>

      <section className="section home-cta-band" id="contact">
        <div className="container home-cta-band-inner">
          <div className="home-cta-copy">
            <span className="home-cta-kicker">HAI SĂ DISCUTĂM</span>
            <h2>Vrei mai mulți clienți pentru afacerea ta?</h2>
            <p>Solicită o analiză gratuită și îți arătăm cum te putem ajuta să obții rezultate reale.</p>
            <div className="home-cta-actions">
              <Link className="btn btn-blue" href="/contact">Contactează-ne acum <ArrowRight size={17}/></Link>
              <a className="cta-phone-inline" href={SITE.phoneHref}><Phone size={17}/>{SITE.phone}</a>
            </div>
          </div>
          <div className="home-cta-figure" aria-hidden="true">
            <img src="/mockup/contact_woman.png" alt="Consultant Hard Service" width="310" height="382"/>
          </div>
        </div>
      </section>
    </main>
    <Footer/>
    <a className="floating-call" href={SITE.phoneHref} aria-label={`Sună Hard Service la ${SITE.phone}`}><Phone size={22}/></a>
  </>;
}
