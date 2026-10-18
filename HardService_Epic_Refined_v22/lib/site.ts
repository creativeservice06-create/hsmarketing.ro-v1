export const SITE = {
  name: 'Hard Service Marketing',
  legalName: 'HARD SERVICE SRL',
  url: (process.env.NEXT_PUBLIC_SITE_URL || 'https://www.hardservicesrl.ro').replace(/\/$/, ''),
  phone: '0740 231 358',
  phoneHref: 'tel:+40740231358',
  email: 'chirilasadrian@yahoo.com',
  cui: '5451133',
  founded: '17.03.1994',
};

export type Service = {
  slug: string;
  name: string;
  eyebrow: string;
  title: string;
  short: string;
  description: string;
  points: string[];
  deliverables: string[];
  faq: { question: string; answer: string }[];
  priceNote: string;
  brand: 'google' | 'meta' | 'tiktok' | 'web' | 'shop' | 'analytics' | 'seo';
};

export const SERVICES: Service[] = [
  {
    slug: 'google-ads', name: 'Google Ads', eyebrow: 'RECLAME ÎN GOOGLE',
    title: 'Administrare Google Ads pentru firme: campanii PPC și optimizare',
    short: 'Campanii Search și alte formate alese după obiective, optimizate pentru contacte și vânzări.',
    description: 'Ajutăm firmele să ajungă la persoane care caută activ produsele sau serviciile lor. Construim și optimizăm campanii, pagini de destinație și măsurarea solicitărilor.',
    points: ['Campanii Search, Performance Max sau alte formate potrivite', 'Cuvinte cheie și termeni de căutare verificați', 'Monitorizarea bugetului și optimizare continuă', 'Măsurarea formularelor, apelurilor și comenzilor'],
    deliverables: ['Analiza obiectivelor și a serviciilor promovate', 'Structura campaniilor și a anunțurilor', 'Configurare / verificare conversii', 'Optimizare și raportare periodică'],
    priceNote: 'Administrarea poate porni de la 200 lei / săptămână în pachetul START; bugetul publicitar se plătește separat.',
    brand: 'google',
    faq: [
      {question: 'Bugetul Google Ads este inclus în abonament?', answer: 'Nu. Tariful Hard Service este pentru administrare, iar bugetul reclamelor se plătește direct platformei Google.'},
      {question: 'Cât durează până apar primele rezultate?', answer: 'Depinde de domeniu, concurență și buget. Campaniile pot genera trafic rapid, însă optimizarea pe solicitări relevante necesită date și ajustări.'},
      {question: 'Pot începe cu un buget mic?', answer: 'Da, discutăm un buget de test realist pentru serviciul promovat, fără a garanta un număr fix de contacte.'},
    ],
  },
  {
    slug: 'facebook-instagram-ads', name: 'Facebook & Instagram Ads', eyebrow: 'META ADS',
    title: 'Promovare Facebook și Instagram Ads pentru firme și magazine',
    short: 'Lead Ads, trafic și campanii de vânzare, cu vizuale potrivite publicului tău.',
    description: 'Administrăm reclame Facebook și Instagram orientate către vizibilitate, solicitări sau vânzări, în funcție de tipul afacerii.',
    points: ['Campanii Lead Ads, trafic și conversii', 'Texte, variante de reclame și testare', 'Audiențe și remarketing unde este relevant', 'Meta Pixel și evenimente de conversie'],
    deliverables: ['Strategie de campanie', 'Setări și administrare reclame', 'Testarea variantelor de mesaje', 'Raportare și optimizare'],
    priceNote: 'Disponibil în pachetele de administrare; bugetul Meta este separat de tariful Hard Service.',
    brand: 'meta',
    faq: [
      {question: 'Aveți nevoie de acces la pagina de Facebook?', answer: 'Da, pentru administrare sunt necesare permisiuni corespunzătoare în Meta Business Suite.'},
      {question: 'Se poate promova fără website?', answer: 'Pentru unele obiective putem utiliza formularele instant din Meta, însă un website sau landing page poate fi util.'},
    ],
  },
  {
    slug: 'tiktok-ads', name: 'TikTok Ads', eyebrow: 'PROMOVARE VIDEO',
    title: 'Promovare TikTok Ads: reclame video pentru firme',
    short: 'Campanii video și testarea mesajelor pentru publicul relevant.',
    description: 'Construim campanii TikTok conectate cu oferta ta, paginile de destinație și măsurarea acțiunilor importante.',
    points: ['Strategie și structură de campanii', 'Recomandări pentru materiale video', 'Targetare și optimizare', 'TikTok Pixel și conversii'],
    deliverables: ['Plan de promovare', 'Configurare reclame', 'Implementare tracking dacă este cazul', 'Raportare campanie'],
    priceNote: 'Prețul se stabilește în funcție de numărul de campanii și volumul de lucru.',
    brand: 'tiktok',
    faq: [{question:'Trebuie să apar personal în videoclipuri?', answer:'Nu neapărat. Putem planifica reclame folosind demonstrații de produs, materiale video existente sau alte formate potrivite.'}],
  },
  {
    slug: 'creare-site', name: 'Creare site-uri', eyebrow: 'WEBSITE & LANDING PAGES',
    title: 'Creare site de prezentare și landing page profesional',
    short: 'Site-uri responsive, clare și rapide, care prezintă bine oferta firmei.',
    description: 'Creăm și optimizăm website-uri de prezentare și landing page-uri pentru firme care vor un proces de contact simplu.',
    points: ['Structură clară și design responsive', 'Butoane de apel și formulare', 'SEO tehnic de bază', 'Integrare măsurare conversii'],
    deliverables: ['Analiză și structură pagini', 'Design și implementare', 'Formular și accesibilitate', 'Verificare tehnică înainte de lansare'],
    priceNote: 'Proiectele de creare site primesc ofertă individuală; nu sunt incluse automat în toate abonamentele.',
    brand: 'web',
    faq: [{question:'Este inclus domeniul și hostingul?',answer:'Discutăm separat domeniul, găzduirea și celelalte costuri externe, înainte de începerea proiectului.'}],
  },
  {
    slug: 'magazin-online', name: 'Magazine online', eyebrow: 'E-COMMERCE',
    title: 'Creare magazin online cu pagini optimizate pentru vânzări',
    short: 'Catalog, coș și checkout, conectate cu tracking-ul campaniilor.',
    description: 'Dezvoltăm magazine online cu o structură ușor de utilizat și elemente utile pentru Google Ads, Meta Ads și măsurarea comenzilor.',
    points: ['Pagini de produse și categorii', 'Coș, checkout și organizarea catalogului', 'Integrare tracking e-commerce', 'Bază tehnică pentru campanii de produse'],
    deliverables: ['Arhitectură magazin', 'Implementarea funcționalităților', 'Verificarea procesului de comandă', 'Integrare cu instrumentele solicitate'],
    priceNote: 'Ofertă personalizată în funcție de numărul produselor și integrări.',
    brand: 'shop',
    faq: [{question:'Pot promova magazinul pe Google și Meta?',answer:'Da, după configurarea și validarea componentelor necesare, inclusiv catalogul și măsurarea evenimentelor relevante.'}],
  },
  {
    slug: 'tracking-conversii', name: 'Tracking conversii', eyebrow: 'ANALYTICS & GTM',
    title: 'Configurare GA4, GTM și tracking conversii pentru site-uri',
    short: 'GA4, Google Tag Manager și evenimente măsurate corect.',
    description: 'Verificăm și implementăm măsurarea acțiunilor importante, astfel încât să poți lua decizii pe baza datelor.',
    points: ['GA4 și Google Tag Manager', 'Evenimente și conversii pentru formulare', 'Tracking clicuri pe telefon', 'Măsurarea comenzilor pentru e-commerce'],
    deliverables: ['Audit al implementării existente', 'Plan de măsurare', 'Configurare evenimente', 'Testare și documentare'],
    priceNote: 'Prețul depinde de complexitate și de instrumentele deja folosite.',
    brand: 'analytics',
    faq: [{question:'Clicul pe butonul de apel este același lucru cu un apel efectiv?',answer:'Nu. Clicul este un eveniment distinct; apelurile efective necesită soluții de măsurare suplimentare, acolo unde sunt disponibile.'}],
  },
  {
    slug: 'seo-tehnic', name: 'SEO tehnic', eyebrow: 'SEO & STRUCTURĂ',
    title: 'Optimizare SEO tehnic: indexare, structură și performanță web',
    short: 'Indexare, structură, performanță și elemente tehnice esențiale.',
    description: 'Corectăm problemele de structură și indexare și verificăm semnalele tehnice ale website-ului.',
    points: ['Indexare și crawl', 'Canonical, sitemap și robots', 'Structură semantică și linkuri interne', 'Performanță și experiență pe mobil'],
    deliverables: ['Audit tehnic', 'Listă de priorități', 'Implementări agreate', 'Verificare Search Console'],
    priceNote: 'SEO tehnic se ofertează în funcție de numărul paginilor și complexitate.',
    brand: 'seo',
    faq: [{question:'Garantează SEO tehnic prima pagină în Google?',answer:'Nu. SEO tehnic este o parte din proces; clasarea depinde și de relevanță, concurență, conținut și alte semnale.'}],
  },
];

export const PACKAGES = [
  {name:'START', price:'200', intro:'Pentru prezență online și primele campanii', featured:false, items:['Administrare Google Ads sau Facebook Ads','Configurare structură campanie și audiențe','Optimizare săptămânală și monitorizare','Raport lunar cu explicații clare','Suport pentru mici ajustări de pagină sau mesaj']},
  {name:'SILVER', price:'350', intro:'Pentru firme care vor mai multe contacte', featured:true, items:['Administrare Google Ads și / sau Facebook Ads','Actualizări și mentenanță site','Tracking conversii și verificări în GA4 / GTM','Optimizare landing page și formulare','Recomandări lunare pentru campanii și conținut']},
  {name:'PROFESIONAL', price:'400', intro:'Pentru administrare extinsă și suport continuu', featured:false, items:['Administrare Google Ads + Facebook Ads','Modificări și optimizare site','Tracking avansat și verificare conversii','Strategie, suport telefonic și idei noi','Pregătire rapoarte și priorități de lucru']},
];

export const FAQ = [
  {question:'Ce include abonamentul de administrare?',answer:'Include activitățile enumerate în pachetul selectat. La început stabilim exact numărul de campanii și volumul de lucru.'},
  {question:'Bugetul de reclame este inclus în preț?',answer:'Nu. Tariful afișat este pentru administrare; bugetul Google, Meta sau TikTok se achită separat platformelor.'},
  {question:'În cât timp apar primele rezultate?',answer:'Depinde de domeniu, concurență, buget și ofertă. Unele campanii aduc trafic imediat, însă obținerea și optimizarea solicitărilor necesită timp și date.'},
  {question:'Pot să încep doar cu un singur serviciu?',answer:'Da. Poți începe cu administrare Google Ads, Facebook Ads sau alt serviciu, în funcție de obiective și pachet.'},
  {question:'Se poate modifica pachetul ulterior?',answer:'Da. Modificările se discută înainte și se stabilesc în funcție de volumul de lucru.'},
  {question:'Cum măsurați rezultatele?',answer:'Configurăm, unde este posibil, evenimente pentru formulare, clicuri pe telefon și comenzi, apoi analizăm performanța în platformele relevante.'},
  {question:'Este obligatoriu să am deja un site?',answer:'Nu. Putem discuta realizarea unui website sau a unei pagini de destinație înainte de a începe promovarea.'},
];
