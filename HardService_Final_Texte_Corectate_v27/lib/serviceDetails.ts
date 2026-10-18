export type Detail = {
  proposition:string;
  intro:string;
  outcomes:{title:string;text:string}[];
  strategy:{title:string;text:string}[];
  audience:string;
  report:string;
  related:string[];
};

export const SERVICE_DETAILS:Record<string,Detail>={
  'google-ads':{
    proposition:'Fii prezent atunci când oamenii caută exact ceea ce vinzi.',
    intro:'O campanie Google Ads eficientă pornește de la intenția de căutare, nu de la un număr mare de cuvinte-cheie. Identificăm serviciile cu potențial comercial, construim grupuri și anunțuri relevante și analizăm traseul de la căutare până la formular, apel sau comandă. Nu promitem un cost fix pentru fiecare client nou: concurența, bugetul și pagina de destinație influențează rezultatele.',
    outcomes:[
      {title:'Căutări cu intenție',text:'Campanii Search organizate pe servicii, localități și tipuri de solicitări. Urmărim expresiile care atrag clienți, dar și termenii care consumă buget inutil.'},
      {title:'Controlul investiției',text:'Analizăm licitațiile, bugetele, dispozitivele și programul de afișare. Facem ajustări pe baza datelor disponibile, fără schimbări haotice în fiecare zi.'},
      {title:'Conversii și date',text:'Configurăm și verificăm evenimente utile, precum trimiterea formularelor sau click-urile pe telefon; acolo unde este posibil, conectăm conversiile relevante la Google Ads.'},
    ],
    strategy:[
      {title:'Pornim de la ofertă',text:'Clarificăm serviciile de promovat, zonele deservite, diferențiatorii și bugetul inițial. Selectăm campaniile potrivite, fără să forțăm folosirea tuturor formatelor.'},
      {title:'Construim anunțuri relevante',text:'Pregătim titluri, descrieri și extensii, testăm variante și le corelăm cu conținutul paginii către care trimitem traficul.'},
      {title:'Învățăm din rezultatele reale',text:'Analizăm termenii căutați, costurile, conversiile și calitatea solicitărilor, apoi propunem schimbări documentate și noi direcții de test.'},
    ],
    audience:'Servicii locale, companii B2B, cursuri și afaceri care au cerere activă în Google. Pentru magazine online evaluăm separat Shopping și Performance Max.',
    report:'Rapoarte despre trafic și costuri, termeni de căutare, conversii urmărite, observații și acțiuni recomandate pentru următoarea perioadă.',
    related:['tracking-conversii','creare-site','seo-tehnic'],
  },
  'facebook-instagram-ads':{
    proposition:'Ajungi la publicul potrivit cu mesaje și materiale care explică oferta.',
    intro:'Meta Ads permite promovarea pe Facebook și Instagram prin reclame care apar în fluxurile și plasamentele utilizatorilor. Pentru firme, avantajul este posibilitatea de a testa mesaje, imagini și audiențe, nu doar de a afișa un anunț. Alegem obiectivul după nevoia reală: formular, trafic către website, vizibilitate sau vânzare.',
    outcomes:[
      {title:'Lead-uri prin formulare',text:'Când este potrivit, folosim formularele instant din Meta și lucrăm la întrebările care pot clarifica interesul persoanei înainte de contact.'},
      {title:'Materiale adaptate publicului',text:'Dezvoltăm texte și direcții creative pentru serviciul promovat. Testăm mesaje diferite, beneficii și formate fără să tratăm fiecare public identic.'},
      {title:'Măsurare și remarketing',text:'Verificăm Pixel-ul Meta și evenimentele relevante, cu respectarea cerințelor de consimțământ. Audiențele de remarketing sunt folosite unde există bază legală și volum suficient.'},
    ],
    strategy:[
      {title:'Definim obiectivul',text:'Stabilim dacă este mai potrivită o campanie pentru lead-uri, trafic sau vânzări și analizăm tipul de persoană pe care vrei să o atragi.'},
      {title:'Testăm creativul',text:'Construim variante de text și vizual, urmărind claritatea ofertei și acțiunea dorită. O reclamă trebuie să promită exact ceea ce oferă pagina.'},
      {title:'Optimizăm după calitate',text:'Costul pe formular este doar un indicator. Discutăm calitatea cererilor și ajustăm campaniile în funcție de datele reale disponibile.'},
    ],
    audience:'Cursuri, servicii, branduri locale și magazine care pot explica atractiv oferta prin imagini, video sau exemple de utilizare.',
    report:'Buget utilizat, mesaje și reclame testate, solicitări sau vânzări măsurate, observații privind audiențele și recomandări pentru următoarele materiale.',
    related:['creare-site','tracking-conversii','tiktok-ads'],
  },
  'tiktok-ads':{
    proposition:'Promovare video adaptată ritmului și comportamentului publicului TikTok.',
    intro:'Pe TikTok, reclama trebuie să intre natural în experiența de consum video. Pornim de la oferta reală a firmei, stabilim mesaje scurte și propunem formate care pot fi filmate sau realizate din materiale existente. Administrăm campaniile și urmărim dacă vizualizările se transformă în acțiuni relevante.',
    outcomes:[
      {title:'Concept potrivit platformei',text:'Propunem scenarii scurte, demonstrații, argumente de cumpărare sau prezentări de servicii, fără a impune apariția proprietarului în fața camerei.'},
      {title:'Campanii și audiențe',text:'Selectăm obiectivele, organizăm reclamele și analizăm frecvența, răspunsul publicului și eventualele semne de oboseală creativă.'},
      {title:'Acțiuni măsurabile',text:'Conectăm reclamele la un landing page relevant și, unde este cazul, configurăm TikTok Pixel pentru evenimente de contact și vânzare.'},
    ],
    strategy:[
      {title:'Oferta într-un mesaj simplu',text:'Identificăm de ce ar fi interesat utilizatorul în primele secunde și ce întrebare trebuie să lămurească reclama.'},
      {title:'Variante și teste',text:'Recomandăm mai multe introduceri, cadre sau îndemnuri la acțiune și evităm să ne bazăm pe un singur videoclip.'},
      {title:'Rafinăm distribuția',text:'Urmărim costuri, vizionări relevante și conversii disponibile, apoi testăm optimizări ale creativului și audiențelor.'},
    ],
    audience:'Branduri, cursuri, servicii și magazine cu produse sau beneficii care pot fi prezentate vizual într-un format scurt.',
    report:'Reclame și concepte testate, performanță pe materiale, costuri, conversii disponibile și recomandări de conținut pentru perioada următoare.',
    related:['facebook-instagram-ads','tracking-conversii','creare-site'],
  },
  'creare-site':{
    proposition:'Un website clar, rapid și pregătit pentru contact și promovare.',
    intro:'Website-ul este locul în care o reclamă trebuie să își continue promisiunea. Construim pagini de prezentare și landing page-uri care explică serviciul pe înțelesul clientului: ce oferi, cui te adresezi, cum lucrezi și cum poți fi contactat. Ne concentrăm pe structură, versiunea mobilă și elementele utile pentru SEO și conversii.',
    outcomes:[
      {title:'Arhitectură utilă',text:'Planificăm paginile, meniurile și traseele de navigare, astfel încât utilizatorul să găsească rapid informațiile importante.'},
      {title:'Design responsive',text:'Construim interfețe care rămân lizibile pe telefon și desktop, cu titluri corect ierarhizate, imagini potrivite și elemente de contact vizibile.'},
      {title:'Bază pentru promovare',text:'Pregătim paginile pentru campanii și pentru integrarea instrumentelor de analytics și conversii; verificăm metadatele esențiale și viteza percepută.'},
    ],
    strategy:[
      {title:'Structură pornită din obiective',text:'Definim paginile necesare, conținutul prioritar și acțiunile urmărite: apeluri, formulare sau comenzi.'},
      {title:'Design și implementare',text:'Construim și adaptăm componentele, verificăm navigarea și cerem feedback pe conținutul prezentat.'},
      {title:'Lansare și întreținere',text:'Testăm formularele, link-urile, afișarea pe mobil și indexabilitatea, apoi putem asigura ajustări și suport ulterior.'},
    ],
    audience:'Firme care își lansează prezența online, își modernizează site-ul sau au nevoie de pagini separate pentru campaniile publicitare.',
    report:'Listă de pagini și funcționalități livrate, verificări tehnice, elemente SEO implementate și recomandări pentru extinderea conținutului.',
    related:['google-ads','tracking-conversii','seo-tehnic'],
  },
  'magazin-online':{
    proposition:'Un magazin în care cumpărătorul găsește produsul și finalizează mai ușor comanda.',
    intro:'Un magazin online are nevoie de mai mult decât imagini și un coș de cumpărături. Organizăm catalogul, prezentarea produselor, navigarea și pașii de checkout astfel încât experiența să fie clară. Pregătim și elementele necesare pentru publicitate și măsurarea comenzilor.',
    outcomes:[
      {title:'Catalog bine organizat',text:'Categorii și pagini de produse coerente, informații esențiale ușor de găsit și filtre utile, dacă sunt potrivite pentru dimensiunea catalogului.'},
      {title:'Comandă simplificată',text:'Analizăm coșul, formularele de checkout, metodele de plată și livrare pentru a reduce confuzia în momentul cumpărării.'},
      {title:'Date pentru campanii',text:'Pregătim evenimentele e-commerce și integrările necesare pentru Google, Meta sau TikTok, în funcție de platformă și de cerințele proiectului.'},
    ],
    strategy:[
      {title:'Stabilim structura magazinului',text:'Pornim de la tipul produselor, categorii, atribute, variații și modul de livrare și plată.'},
      {title:'Implementăm fluxul de cumpărare',text:'Construim paginile, verificăm experiența pe mobil și testăm procesul de comandă de la început la confirmare.'},
      {title:'Pregătim extinderea',text:'Discutăm catalogul, feed-urile de produse, remarketingul și modificările necesare pe măsură ce oferta crește.'},
    ],
    audience:'Magazine noi, afaceri care trec din offline în online și comercianți care au nevoie să modernizeze o experiență de cumpărare existentă.',
    report:'Verificări de checkout, configurări implementate, evenimente de cumpărare testate și pași de îmbunătățire pentru catalog și promovare.',
    related:['tracking-conversii','google-ads','facebook-instagram-ads'],
  },
  'tracking-conversii':{
    proposition:'Înțelege ce se întâmplă după click, nu doar câți oameni au văzut reclama.',
    intro:'Datele bine configurate ajută la diferențierea între vizitatori și acțiuni valoroase. Instalăm sau verificăm Google Analytics 4 și Google Tag Manager și stabilim ce evenimente merită urmărite. Pentru campanii putem configura conversii relevante, testate în condiții reale, respectând soluția de consimțământ a website-ului.',
    outcomes:[
      {title:'Plan de măsurare',text:'Definim ce înseamnă o solicitare utilă pentru firmă: formular trimis, click pe telefon, achiziție sau altă acțiune specifică.'},
      {title:'Implementări testate',text:'Verificăm declanșarea evenimentelor și transmiterea lor către instrumentele necesare, reducând riscul de raportare dublă.'},
      {title:'Interpretare corectă',text:'Explicăm limitele măsurării și diferența dintre un click pe numărul de telefon și un apel efectiv realizat.'},
    ],
    strategy:[
      {title:'Audităm instalarea',text:'Verificăm tag-urile, evenimentele, conturile și modul în care este gestionat consimțământul.'},
      {title:'Configurăm conversiile',text:'Implementăm și testăm evenimentele, denumirile și legăturile cu platformele de publicitate.'},
      {title:'Documentăm rezultatul',text:'Pregătim o listă clară cu evenimentele active și semnificația lor, astfel încât rapoartele să poată fi folosite la optimizare.'},
    ],
    audience:'Firme care investesc în reclame, website-uri cu formulare și magazine online care au nevoie de o măsurare consecventă a conversiilor.',
    report:'Evenimente configurate, verificări, potențiale limite de atribuire și recomandări de îmbunătățire a calității datelor.',
    related:['google-ads','facebook-instagram-ads','tiktok-ads'],
  },
  'seo-tehnic':{
    proposition:'Ajutăm motoarele de căutare să exploreze și să înțeleagă mai bine paginile.',
    intro:'SEO tehnic înseamnă o fundație solidă pentru conținutul și serviciile prezentate. Verificăm indexarea, structura URL-urilor, metadatele, link-urile interne și experiența pe mobil. Corectăm blocajele identificate și prioritizăm modificările care au sens pentru site-ul respectiv, fără să promitem prima poziție în Google.',
    outcomes:[
      {title:'Indexare și structură',text:'Analizăm Google Search Console, sitemap XML, robots.txt, canonical și paginile care ar trebui sau nu ar trebui indexate.'},
      {title:'SEO on-page',text:'Verificăm titlurile, descrierile, ierarhia headingurilor, alt-urile importante și legăturile interne dintre pagini.'},
      {title:'Experiență și performanță',text:'Căutăm probleme care afectează mobilul, viteza percepută sau navigarea, apoi propunem corecții în ordinea impactului.'},
    ],
    strategy:[
      {title:'Evaluăm starea actuală',text:'Analizăm paginile principale, semnalele disponibile și eventualele erori de indexare.'},
      {title:'Stabilim prioritățile',text:'Separăm problemele critice de optimizările utile și discutăm ce se poate implementa realist.'},
      {title:'Reverificăm',text:'După modificări, verificăm funcționalitatea, accesul roboților și datele disponibile în Search Console.'},
    ],
    audience:'Website-uri de prezentare, firme cu mai multe pagini de servicii și magazine online care vor o bază tehnică mai curată pentru căutarea organică.',
    report:'Constatări tehnice, intervenții efectuate, pagini afectate și pașii recomandați pentru conținutul și dezvoltarea ulterioară.',
    related:['creare-site','tracking-conversii','google-ads'],
  },
};
