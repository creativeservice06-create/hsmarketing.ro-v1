/** Conținut editorial specific fiecărui serviciu: ce se întâmplă în practică și cum citim datele. */
export type ServicePlaybook = {
  heading: string;
  intro: string;
  decisions: {title: string; explanation: string}[];
  indicators: {name: string; meaning: string}[];
  expectation: string;
};

export const SERVICE_PLAYBOOK: Record<string, ServicePlaybook> = {
  'google-ads': {
    heading: 'Ce optimizăm într-un cont Google Ads, dincolo de lansare?',
    intro: 'Structura inițială este doar punctul de plecare. Deciziile ulterioare pornesc din termenii reali de căutare, relevanța anunțurilor și solicitările urmărite pe site.',
    decisions: [
      {title:'Cuvinte cheie și căutări',explanation:'Separăm expresiile cu intenție comercială de căutările informaționale. Verificăm rapoartele de termeni și adăugăm excluderi pentru accesări nepotrivite.'},
      {title:'Anunțuri și pagini',explanation:'Corelăm mesajele reclamelor cu serviciul promovat, zona deservită și pagina de destinație. Ajustăm titluri, texte și butoane de contact.'},
      {title:'Buget și conversii',explanation:'Analizăm costurile, distribuția bugetului și acțiunile măsurate. Nu tratăm un simplu clic pe telefon ca pe un contract încheiat.'},
    ],
    indicators: [
      {name:'Termeni de căutare',meaning:'Ce au căutat persoanele care au văzut sau accesat reclama.'},
      {name:'Cost pe conversie măsurată',meaning:'Raportul dintre bugetul consumat și acțiunile urmărite; necesită evenimente configurate corect.'},
      {name:'Calitatea solicitărilor',meaning:'Feedback-ul primit de la firmă despre apeluri, formulare și clienți reali.'},
    ],
    expectation:'Performance Max, Search, Shopping sau alte formate se aleg după obiective și datele disponibile. Nu activăm automat toate tipurile de campanii și nu garantăm un cost fix per client.',
  },
  'facebook-instagram-ads': {
    heading: 'Cum construim reclame Facebook și Instagram care merită testate?',
    intro: 'Meta Ads poate genera interes înainte ca cineva să caute activ un serviciu. Contează oferta, materialele vizuale și modul în care filtrăm sau verificăm cererile.',
    decisions: [
      {title:'Obiectiv și traseu de contact',explanation:'Decidem între formulare instant, accesări ale site-ului sau campanii de vânzări după tipul afacerii și datele pe care le putem măsura.'},
      {title:'Materiale și mesaje',explanation:'Pregătim variante de text și recomandări de imagini ori video pentru Feed, Stories sau Reels. Testăm o idee clară, nu schimbăm totul simultan.'},
      {title:'Audiențe și verificări',explanation:'Revizuim relevanța publicului, frecvența reclamelor și feedback-ul despre cereri. Folosim remarketing doar când există date și permisiuni potrivite.'},
    ],
    indicators: [
      {name:'Cost pe formular',meaning:'Bugetul raportat la formularele trimise în Meta sau pe site.'},
      {name:'Cereri calificate',meaning:'Solicitările care corespund ofertei, zonei și condițiilor tale, confirmate de echipa firmei.'},
      {name:'Performanța materialelor',meaning:'Diferențele dintre mesajele și formatele publicitare testate.'},
    ],
    expectation:'Meta Pixel și Conversion API pot necesita implementări și configurări suplimentare. Cifrele din platformă nu reprezintă automat vânzări sau lead-uri validate.',
  },
  'tiktok-ads': {
    heading: 'Ce contează într-o campanie TikTok Ads bine pregătită?',
    intro: 'Reclamele video trebuie să explice rapid ce oferi. Testarea materialelor și a paginii de destinație este adesea mai importantă decât simpla alegere a unei audiențe.',
    decisions: [
      {title:'Alegerea mesajului video',explanation:'Definim primul cadru, demonstrația produsului sau a serviciului și îndemnul la acțiune. Recomandăm variante pe care publicul le poate înțelege fără context.'},
      {title:'Structura campaniei',explanation:'Organizăm testele după buget, obiectiv și materialele disponibile. Nu recomandăm TikTok pentru orice firmă, dacă oferta nu se potrivește platformei.'},
      {title:'Vizita și evenimentul urmărit',explanation:'Verificăm că pagina se încarcă rapid pe mobil și că formularul, comanda sau altă conversie poate fi măsurată în condițiile tehnice existente.'},
    ],
    indicators: [
      {name:'Răspuns la video',meaning:'Vizionări relevante și interacțiuni utile, interpretate în contextul obiectivului.'},
      {name:'Vizite și acțiuni',meaning:'Trafic către pagina de destinație și evenimentele urmărite corect.'},
      {name:'Diferențe între materiale',meaning:'Ce concepte video au performat mai bine în aceeași perioadă de test.'},
    ],
    expectation:'Realizarea efectivă a materialelor video și drepturile de utilizare se stabilesc în oferta de colaborare. Numărul de vizionări nu garantează clienți.',
  },
  'creare-site': {
    heading: 'Cum pregătim un website util și pentru vizitatori, și pentru promovare?',
    intro: 'Un site de prezentare nu înseamnă doar culori și animații. Informația trebuie organizată astfel încât clientul să găsească serviciul, să înțeleagă oferta și să poată cere detalii.',
    decisions: [
      {title:'Structură și conținut',explanation:'Stabilim paginile importante, ordinea informațiilor și legăturile interne. Folosim titluri care descriu efectiv serviciul, nu formule fără sens.'},
      {title:'Experiență pe mobil',explanation:'Testăm meniul, lizibilitatea, butoanele de apel și formularele pe dimensiuni diferite. Evităm elementele vizuale care îngreunează încărcarea sau contactul.'},
      {title:'Pregătirea pentru lansare',explanation:'Verificăm metadatele, indexabilitatea, versiunea HTTPS și elementele de măsurare agreate înainte de publicare.'},
    ],
    indicators: [
      {name:'Formulare funcționale',meaning:'Cererile de contact ajung la destinația configurată și pot fi verificate.'},
      {name:'Pagini accesibile',meaning:'Navigație corectă pe mobil și desktop, fără elemente esențiale blocate.'},
      {name:'Vizibilitate tehnică',meaning:'Sitemap, canonical, indexare și performanță urmărite după publicare.'},
    ],
    expectation:'Domeniul, hostingul, textele, fotografiile profesionale, integrările speciale și mentenanța sunt clarificate înainte de ofertare. Designul singur nu garantează poziții Google.',
  },
  'magazin-online': {
    heading: 'Ce verificăm ca un magazin online să poată primi și măsura comenzi?',
    intro: 'Un magazin funcțional trebuie să lege catalogul de navigație, coș, checkout și evenimentele de cumpărare. Prioritizăm experiența cumpărătorului și corectitudinea datelor.',
    decisions: [
      {title:'Produse și categorii',explanation:'Definim filtre, categorii și informațiile care ajută cumpărătorul: preț, disponibilitate, livrare, fotografii și opțiuni relevante.'},
      {title:'Fluxul comenzii',explanation:'Testăm adăugarea în coș, metodele de livrare și plată, mesaje de eroare și confirmarea comenzii pe mobil și desktop.'},
      {title:'Date pentru campanii',explanation:'Pregătim, după caz, feeduri de produse și evenimente e-commerce, apoi verificăm că valorile de comandă sunt transmise fără duplicări.'},
    ],
    indicators: [
      {name:'Finalizarea comenzilor',meaning:'Verificarea tehnică a comenzilor confirmate și a problemelor din checkout.'},
      {name:'Evenimentul purchase',meaning:'Cumpărările urmărite și valoarea lor, doar dacă integrarea este configurată și testată.'},
      {name:'Catalogul de produse',meaning:'Corectitudinea informațiilor transmise către integrări și platformele de promovare.'},
    ],
    expectation:'Numărul de produse, metodele de plată, ERP-ul, curierii, aplicațiile și abonamentele externe influențează oferta. Integrările sunt definite înainte de implementare.',
  },
  'tracking-conversii': {
    heading: 'Cum deosebim un eveniment înregistrat de un rezultat real?',
    intro: 'Planul de măsurare stabilește exact ce numim conversie: formular trimis, apăsare pe numărul de telefon sau comandă confirmată. Fiecare acțiune are o semnificație diferită.',
    decisions: [
      {title:'Audit al tagurilor',explanation:'Inventariem GA4, Google Tag Manager, evenimentele existente și eventualele dublări. Verificăm ce poate fi măsurat cu soluția tehnică actuală.'},
      {title:'Plan de evenimente',explanation:'Definim nume și condiții pentru form_submit, contact_phone, begin_checkout, purchase și alte acțiuni relevante, fără să numim toate clicurile vânzări.'},
      {title:'Testare și consimțământ',explanation:'Validăm evenimentele cu instrumentele de diagnostic și verificăm implementarea consimțământului acolo unde este necesară.'},
    ],
    indicators: [
      {name:'Evenimente corecte',meaning:'Acțiunile declanșate numai la îndeplinirea condițiilor stabilite.'},
      {name:'Duplicări și erori',meaning:'Identificarea și corectarea declanșărilor multiple sau lipsă.'},
      {name:'Import în platforme',meaning:'Datele disponibile pentru optimizarea Google Ads ori altor campanii după configurare.'},
    ],
    expectation:'Măsurarea este afectată de consimțământ, browser, blocarea cookie-urilor și limitările fiecărei platforme. Clicul pe telefon nu dovedește că apelul a fost preluat.',
  },
  'seo-tehnic': {
    heading: 'Ce verificăm într-un audit SEO tehnic orientat spre rezolvare?',
    intro: 'Analizăm dacă motoarele de căutare pot descoperi și interpreta corect paginile importante. Prioritizăm erorile care afectează accesarea, indexarea și experiența utilizatorilor.',
    decisions: [
      {title:'Crawl și indexare',explanation:'Verificăm paginile excluse, redirectările, codurile HTTP, regulile robots și sitemap-urile, folosind Search Console și inspecțiile necesare.'},
      {title:'Semnale și structură',explanation:'Revizuim titlurile unice, canonical-urile, breadcrumbs, linkurile interne și structura paginilor de servicii.'},
      {title:'Priorități de implementare',explanation:'Separăm problemele critice de recomandările secundare, apoi retestăm corecțiile și urmărim rezultatele în timp.'},
    ],
    indicators: [
      {name:'Indexare și acoperire',meaning:'Paginile eligibile și motivele pentru care unele sunt excluse din Google.'},
      {name:'Impresii și clicuri organice',meaning:'Tendințe din Search Console, interpretate pe pagină și pe căutare.'},
      {name:'Experiență și erori',meaning:'Probleme tehnice descoperite și remedieri validate după intervenție.'},
    ],
    expectation:'SEO tehnic este una dintre componentele vizibilității organice. Nu garantează un anumit loc în Google și nu înlocuiește automat strategia editorială, conținutul ori autoritatea domeniului.',
  },
};
