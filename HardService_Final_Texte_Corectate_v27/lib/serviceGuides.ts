/**
 * Informații practice, diferite pentru fiecare serviciu. Texte orientate către
 * decizii reale ale clienților; fără studii de caz sau rezultate inventate.
 */
export type ServiceGuide = {
  focusTitle: string;
  focusIntro: string;
  pillars: {title:string; text:string; points:string[]}[];
  exampleTitle: string;
  example: string;
  prerequisites: string[];
  caveatTitle: string;
  caveat: string;
  questions: {question:string;answer:string}[];
};

export const SERVICE_GUIDES:Record<string,ServiceGuide> = {
  'google-ads': {
    focusTitle:'Administrare Google Ads: de la intenția de căutare la o solicitare relevantă',
    focusIntro:'Nu toate căutările au aceeași valoare. O persoană care scrie „servicii deratizare firmă București” poate fi mai aproape de o achiziție decât cineva care caută o definiție sau un tutorial. Structurăm campaniile în jurul serviciilor efectiv oferite, al zonelor acoperite și al acțiunii dorite: apel, formular ori comandă.',
    pillars:[
      {title:'Cuvinte-cheie, tipuri de potrivire și termeni negativi',text:'Pentru campaniile Search alegem cuvinte-cheie după intenție și le grupăm astfel încât anunțul să corespundă serviciului. Monitorizăm termenii de căutare disponibili în cont și identificăm expresii informative, locuri neacoperite sau servicii pe care firma nu le oferă. Negativele se adaugă justificat, fără a bloca accidental clienți relevanți.',points:['Grupuri pentru servicii și localități relevante','Termeni de căutare analizați periodic','Excluderi pentru trafic nepotrivit']},
      {title:'Anunțuri și pagini de destinație care comunică aceeași ofertă',text:'Un anunț bun trebuie să fie susținut de o pagină care prezintă clar disponibilitatea, zona de intervenție, beneficiile și modalitatea de contact. Verificăm dacă butoanele de apel și formularele funcționează pe mobil și dacă vizitatorul ajunge la serviciul promis, nu pe o pagină generală.',points:['Titluri și descrieri adaptate căutării','Link-uri, număr de telefon și formular vizibile','Mesaj coerent între reclamă și website']},
      {title:'Buget, licitare și interpretarea conversiilor',text:'Alegerea între Maximizarea numărului de click-uri, Maximizarea conversiilor sau alte strategii se face după obiectivul și datele contului. Costul pe conversie raportat nu trebuie confundat automat cu profitul sau cu un client câștigat. Când datele permit, discutăm calitatea lead-urilor și optimizăm pe cereri care contează.',points:['Strategie de licitare aleasă în context','Verificări ale evenimentelor de conversie','Recomandări documentate privind bugetul']}
    ],
    exampleTitle:'Exemplu de structură pentru o firmă cu mai multe servicii',
    example:'Dacă o firmă oferă curățenie, dezinsecție și deratizare, separăm intențiile și formulăm anunțuri diferite pentru fiecare categorie. Fiecare reclamă conduce către pagina corespunzătoare. Ulterior putem compara solicitările și costurile pe servicii, fără să tragem concluzii doar din numărul total de click-uri. Exemplul explică abordarea, nu reprezintă un rezultat obținut pentru un client anume.',
    prerequisites:['Acces în contul Google Ads, cu permisiunile potrivite','Lista serviciilor, localităților și eventualelor excluderi','Bugetul media disponibil și obiectivul principal','Pagină de destinație funcțională și metodă de contact'],
    caveatTitle:'Ce nu garantează o campanie Google Ads',
    caveat:'Afișarea într-o anumită poziție, un cost fix pe lead și numărul de clienți obținuți nu pot fi garantate. Rezultatele depind de concurență, sezon, ofertă, experiența website-ului și calitatea urmăririi conversiilor. Bugetul de publicitate se plătește separat de administrare.',
    questions:[
      {question:'Google Search sau Performance Max: cu ce începem?',answer:'Dacă există căutări clare pentru servicii, Search poate oferi control mai direct asupra termenilor și mesajelor. Performance Max poate fi potrivit în alte contexte, inclusiv e-commerce, când avem resurse, obiective și date utile. Alegerea se face în urma analizei, nu automat.'},
      {question:'Ce înseamnă „lead” în rapoarte?',answer:'Poate însemna un formular trimis, un click pe telefon sau altă acțiune configurată drept conversie. Un click pe telefon nu confirmă că apelul a fost preluat. Stabilim de la început definiția indicatorilor și, unde avem date, analizăm și calitatea solicitărilor.'},
      {question:'Oferiți și optimizări ale paginilor către care trimiteți reclamele?',answer:'Da, putem analiza titlurile, structura, apelurile la acțiune, viteza percepută, formularele și elementele de încredere ale paginilor de destinație. Volumul modificărilor este stabilit în ofertă.'},
    ],
  },
  'facebook-instagram-ads': {
    focusTitle:'Promovare Facebook și Instagram: reclame, formulare și materiale adaptate publicului',
    focusIntro:'În Meta Ads, oamenii descoperă oferta în timp ce urmăresc conținut, nu neapărat când caută un serviciu. De aceea contează creativul: fotografia, primele secunde ale clipului, mesajul și oferta. Alegem obiectivul campaniei în funcție de tipul afacerii și discutăm de la început dacă dorim cereri direct în Meta sau vizite către website.',
    pillars:[
      {title:'Lead Ads sau formular pe website?',text:'Formularele instant simplifică solicitarea deoarece utilizatorul rămâne în Facebook sau Instagram. Formularele de pe site oferă mai mult spațiu pentru prezentarea serviciului. Comparăm experiența și calitatea lead-urilor, nu doar costul fiecărui formular; în unele cazuri, o întrebare suplimentară poate filtra solicitările neclare.',points:['Alegerea traseului de conversie','Întrebări de calificare potrivite','Testarea efectivă a formularului']},
      {title:'Mesaje și materiale creative care nu promit mai mult decât oferi',text:'Lucrăm cu beneficii concrete, situații de utilizare și explicații vizuale. Un carusel poate prezenta mai multe servicii; un clip scurt poate arăta procesul. Recomandăm variații de titluri și texte, apoi analizăm semnalele de oboseală a reclamelor fără a schimba toate variabilele simultan.',points:['Texte principale, titluri și descrieri','Direcții pentru imagini, carusel și video','Testarea mesajelor pe obiective clare']},
      {title:'Pixel, audiențe și limitele atribuirii',text:'Pentru conversiile de pe website verificăm configurarea Meta Pixel și, când este relevant, opțiunile de măsurare server-side. Remarketingul și audiențele se implementează în acord cu consimțământul și cerințele aplicabile. Raportările din Meta și GA4 pot diferi deoarece folosesc metode de atribuire distincte.',points:['Verificarea evenimentelor și a permisiunilor de acces','Audiențe potrivite volumului și obiectivului','Rapoarte explicate, nu doar capturi de ecran']}
    ],
    exampleTitle:'Exemplu: campanie pentru înscrieri la un curs',
    example:'Putem pregăti un carusel cu informații despre curs, o reclamă video care explică beneficiile și un formular cu întrebări despre perioada dorită. Analizăm cererile primite și ajustăm mesajele dacă interesul exprimat nu corespunde ofertei. Este un scenariu orientativ, nu o promisiune privind numărul înscrierilor.',
    prerequisites:['Acces corespunzător la pagină, Business Portfolio și contul de reclame','Serviciul promovat, publicul vizat și zonele deservite','Materiale vizuale aprobate sau informații pentru realizarea lor','Buget media și o modalitate clară de preluare a cererilor'],
    caveatTitle:'Costul per formular nu este același lucru cu un client nou',
    caveat:'Numărul de formulare poate crește fără o creștere proporțională a vânzărilor. Calitatea ofertei, timpul de răspuns și întrebările din formular influențează rezultatul. Nu promitem un număr fix de clienți; îmbunătățim mesajele și setările pornind de la ce putem verifica.',
    questions:[
      {question:'Facebook Ads și Instagram Ads se pot administra în aceeași campanie?',answer:'Da, Meta Ads Manager permite campanii cu plasamente pe ambele platforme. Alegem plasamentele în funcție de obiectiv, format, public și performanța observată, fără să presupunem că orice material funcționează la fel în toate locurile.'},
      {question:'Puteți promova doar pe Instagram?',answer:'Da, dacă obiectivul, materialele și setările permit. Totuși, vom discuta dacă restrângerea plasamentelor este utilă pentru costuri și volumul de rezultate, în loc să o aplicăm automat.'},
      {question:'Cât de des schimbăm reclamele?',answer:'Nu există un interval universal. Urmărim răspunsul publicului, frecvența, costurile și calitatea solicitărilor. Materialele noi sunt recomandate atunci când datele indică nevoia de testare sau când oferta se modifică.'},
    ],
  },
  'tiktok-ads': {
    focusTitle:'TikTok Ads pentru firme: formatul video contează la fel de mult ca bugetul',
    focusIntro:'O reclamă TikTok trebuie să transmită rapid ce problemă rezolvă produsul sau serviciul și ce ar trebui să facă utilizatorul în continuare. Construim campaniile în jurul mesajului, al materialelor video și al unei pagini de destinație potrivite. Nu tratăm vizionările drept echivalentul vânzărilor.',
    pillars:[
      {title:'Structura unui material care merită testat',text:'Primele secunde pot prezenta o problemă, o demonstrație, o transformare sau un rezultat observabil al serviciului. Urmează o explicație clară și un apel la acțiune. Recomandăm cadre scurte, subtitrări lizibile și o variantă de montaj potrivită vizionării pe telefon.',points:['Introducere vizuală clară','Demonstrație sau explicație concretă','Apel la acțiune potrivit paginii']},
      {title:'Testare creativă și administrarea campaniei',text:'Putem porni de la clipuri existente, adaptate formatului, sau de la un scenariu nou. Urmărim în timp comportamentul de vizionare, costurile, frecvența și acțiunile importante. În loc să modificăm toate setările deodată, separăm testele creative de schimbările de audiență sau buget.',points:['Plan de materiale pentru testare','Monitorizarea reclamelor și audiențelor','Recomandări noi pe baza rezultatelor']},
      {title:'Din clip către landing page și conversie',text:'Mesajul din clip trebuie să continue pe pagina de destinație. Verificăm dacă oferta, prețul, disponibilitatea sau formularul pot fi găsite ușor. Pentru raportare evaluăm ce evenimente pot fi măsurate prin TikTok Pixel sau alte integrări compatibile, respectând setările de consimțământ.',points:['Concordanță între video și ofertă','Pagină mobilă ușor de utilizat','Evenimente configurate și testate']}
    ],
    exampleTitle:'Exemplu de reclame pentru un serviciu vizual',
    example:'O firmă care oferă curățare profesională poate testa un scurt clip înainte/după, o demonstrație a echipamentelor și un video cu întrebări frecvente. Fiecare variantă păstrează un îndemn clar la ofertă. Comparăm apoi datele disponibile și cererile, fără a presupune că videoclipul cu cele mai multe vizualizări aduce automat cele mai multe contracte.',
    prerequisites:['Cont TikTok Ads și informații despre produs ori serviciu','Clipuri disponibile sau posibilitatea pregătirii unor materiale','Buget media, zone și public vizat','Pagina de contact sau procesul de comandă funcțional pe mobil'],
    caveatTitle:'TikTok nu este obligatoriu pentru orice afacere',
    caveat:'Dacă oferta este greu de demonstrat vizual, publicul este restrâns sau nu există resurse pentru conținut video, putem recomanda testarea altui canal înainte. Costurile și conversiile diferă de la un domeniu la altul; nu există un număr garantat de comenzi.',
    questions:[
      {question:'Puteți lucra dacă avem doar fotografii și nu avem clipuri?',answer:'Putem propune o abordare pornind de la materialele existente, dar trebuie evaluat dacă ele pot susține o reclamă video bună. De multe ori sunt utile cadre noi sau o demonstrație scurtă; discutăm separat producția și editarea materialelor.'},
      {question:'Ce urmărim în afară de vizualizări?',answer:'În funcție de obiectiv, analizăm accesările paginii, click-urile, solicitările și vânzările înregistrate. Vizionările pot ajuta la evaluarea creativului, dar nu înlocuiesc verificarea acțiunilor relevante pentru firmă.'},
      {question:'Este necesar TikTok Pixel?',answer:'Pentru campanii care urmăresc acțiuni pe website, o implementare adecvată a pixelului sau a altor metode de măsurare poate fi utilă. Stabilim ce date pot fi colectate legal și verificăm dacă evenimentele sunt raportate corect.'},
    ],
  },
  'creare-site': {
    focusTitle:'Creare site profesional: structură, conținut, mobil și conversii',
    focusIntro:'Un site bun nu înseamnă doar o pagină frumoasă. Vizitatorul trebuie să afle rapid ce oferă firma, pentru cine este serviciul, cum poate solicita o ofertă și de ce să aibă încredere. În paralel, motoarele de căutare au nevoie de pagini accesibile, titluri descriptive și o arhitectură inteligibilă. Planificăm aceste elemente înainte de design.',
    pillars:[
      {title:'Paginile și meniurile pornesc de la ce caută clientul',text:'Pentru o firmă cu mai multe servicii, o singură pagină generală poate fi insuficientă. Analizăm dacă sunt necesare pagini dedicate, cum trebuie organizate în meniu și ce legături interne ajută navigarea. Fiecare pagină importantă trebuie să explice beneficiile, procesul, aria deservită și modul de contact.',points:['Arhitectură și pagini de servicii','Titluri H1/H2 descriptive, fără umplutură','Link-uri interne către informații conexe']},
      {title:'Experiență mobilă, accesibilitate și viteză',text:'Verificăm dimensiunile textelor, contrastele, meniul, butoanele, formularele și felul în care se încarcă imaginile. Designul trebuie să rămână lizibil pe ecrane mici. Performanța depinde și de hosting, elementele terțe și media folosită; propunem priorități în funcție de proiect.',points:['Aspect responsive verificat','Formulare și butoane de apel testate','Imagini și resurse gestionate responsabil']},
      {title:'Pregătire pentru indexare și publicitate',text:'Definim titlurile și descrierile, canonical, sitemap și link-urile interne. Dacă pagina va primi trafic din Google Ads sau Meta Ads, verificăm concordanța dintre anunț și ofertă, precum și posibilitatea de a măsura formularul. Nu promitem clasare automată după lansare.',points:['Metadata și structură SEO de bază','Sitemap, indexabilitate și canonical','GA4 / GTM la cerere și verificări de conversie']}
    ],
    exampleTitle:'Exemplu: website pentru o firmă cu cinci servicii',
    example:'Putem realiza o pagină principală care prezintă compania și cinci pagini individuale, fiecare cu explicații, zone de lucru, întrebări frecvente și formular. Acest model le oferă vizitatorilor informații mai specifice și creează puncte de intrare pentru căutări diferite. Numărul efectiv de pagini este stabilit după analiza ofertei.',
    prerequisites:['Lista serviciilor și informațiile despre firmă','Logo, fotografii și materiale pentru care există drept de utilizare','Datele de contact și obiectivele formularelor','Acces la domeniu, hosting sau platforma existentă'],
    caveatTitle:'Ce intră în ofertă și ce se stabilește separat',
    caveat:'Domeniul, găzduirea, licențele, traducerile, redactarea suplimentară și integrările complexe se discută explicit. O pagină publicată poate avea nevoie ulterior de actualizări, conținut nou și întreținere. Nu există o garanție de poziționare în Google numai prin realizarea site-ului.',
    questions:[
      {question:'Este mai bine un site cu o singură pagină sau pagini separate?',answer:'Depinde de câte servicii ai și cât de diferite sunt căutările clienților. Pentru oferte multiple, paginile dedicate pot explica mai clar fiecare serviciu și pot fi legate între ele. Un landing page separat poate fi util pentru o campanie punctuală.'},
      {question:'Puteți moderniza un site existent?',answer:'Da. Începem cu o evaluare a structurii, conținutului și tehnologiei existente. Putem recomanda intervenții punctuale ori un redesign, având grijă la URL-uri, redirecționări și paginile care primesc deja trafic din Google.'},
      {question:'Voi putea modifica ulterior textele și imaginile?',answer:'Alegem soluția tehnică în funcție de nevoile de administrare. Dacă este necesar un panou de editare, stabilim acest lucru înainte de implementare și explicăm ce elemente pot fi schimbate fără intervenție tehnică.'},
    ],
  },
  'magazin-online': {
    focusTitle:'Magazin online: catalog, proces de comandă și date pentru promovare',
    focusIntro:'Un magazin online trebuie să ajute oamenii să aleagă produsul potrivit și să finalizeze comanda fără confuzie. Structura catalogului, filtrele, informațiile despre livrare și retur, experiența pe telefon și checkout-ul sunt parte din proiect, alături de design. Pregătim și baza tehnică pentru măsurarea achizițiilor și pentru eventuale campanii de produse.',
    pillars:[
      {title:'Categorii, produse, variații și informații utile',text:'Înainte de dezvoltare clarificăm cum sunt grupate produsele, ce variații există, ce atribute contează și ce filtre au sens. Paginile trebuie să prezinte denumiri clare, fotografii, prețuri și informații relevante pentru cumpărător. Evităm categorii inutile sau pagini duplicate create automat.',points:['Ierarhie logică pentru categorii','Variații și atribute corect organizate','Conținut util în paginile produselor']},
      {title:'Coș, checkout, livrare și plată',text:'Testăm traseul de la produs la finalizarea comenzii pe mobil și desktop. Verificăm dacă taxele, metodele de livrare și pașii de completare sunt explicați clar. Integrarea cu furnizorii de plată sau curierat depinde de platformă și de disponibilitatea serviciilor respective.',points:['Comenzi de test de la început la final','Validarea câmpurilor și mesajelor de eroare','Configurarea metodelor de plată și livrare agreate']},
      {title:'SEO pentru produse și măsurarea achizițiilor',text:'Analizăm indexarea categoriilor, URL-urile produselor și paginile filtrate. Dacă proiectul o cere, pregătim date de produs și feed-uri pentru platformele de publicitate. Evenimentele precum adăugarea în coș, începerea checkout-ului și achiziția sunt testate pentru a limita raportările greșite.',points:['Sitemap și canonical pentru paginile importante','Date de produs și feed-uri când sunt necesare','Evenimente e-commerce testate']}
    ],
    exampleTitle:'Exemplu: magazin cu produse și mărimi diferite',
    example:'Pentru un catalog vestimentar, fiecare produs poate avea variante de culoare și mărime. Stabilim dacă acestea apar pe aceeași pagină, cum se actualizează stocurile și ce filtre sunt utile. Testăm apoi o comandă completă, inclusiv mesajele primite de cumpărător. Soluția finală depinde de platformă și de modul de lucru al firmei.',
    prerequisites:['Catalogul și informațiile despre produse','Regulile de preț, stoc, livrare și retur furnizate de comerciant','Preferința de platformă și integrările necesare','Datele firmei și datele de acces tehnic necesare'],
    caveatTitle:'Funcționalitățile suplimentare se stabilesc înainte',
    caveat:'Importul unui catalog mare, integrarea cu ERP, sincronizările de stoc, modulele premium și mentenanța extinsă pot schimba costul. Textele legale, politica de retur și condițiile comerciale trebuie validate de comerciant și, unde este necesar, de consultanți specializați.',
    questions:[
      {question:'Se poate conecta magazinul la Google Shopping?',answer:'În funcție de platformă și produse, putem pregăti datele și fluxurile tehnice necesare. Publicarea reclamelor poate necesita configurarea și aprobarea conturilor relevante, verificarea politicilor și informații corecte despre produse și livrare.'},
      {question:'Pot fi importate produse dintr-un fișier Excel sau CSV?',answer:'De regulă există soluții de import, însă trebuie văzut formatul datelor, fotografiile, variațiile și modul de actualizare. Evaluăm fișierul înainte de a estima volumul real de lucru.'},
      {question:'Cum măsurăm vânzările generate de reclame?',answer:'Configurăm evenimente de achiziție și, când platforma permite, transmitem datele necesare către instrumentele de analiză și publicitate, conform cerințelor de consimțământ. Verificăm apoi diferențele între comenzile reale și raportarea platformelor.'},
    ],
  },
  'tracking-conversii': {
    focusTitle:'Tracking conversii cu GA4 și GTM: ce măsurăm și ce înseamnă datele',
    focusIntro:'Un eveniment în Google Analytics 4 nu este automat o vânzare. Pentru ca rapoartele să aibă sens, definim acțiunile importante: formular trimis cu succes, click pe telefon, comandă confirmată ori altă etapă utilă. Evaluăm instalarea Google Tag Manager și fluxurile prin care informația ajunge în instrumentele folosite.',
    pillars:[
      {title:'Plan de măsurare înainte de implementare',text:'Stabilim numele evenimentelor, condițiile de declanșare și modul în care vor fi interpretate. Pentru un formular, este preferabil să măsurăm confirmarea trimiterii, nu simpla apăsare a butonului, dacă tehnologia permite. Pentru telefon distingem click-ul de apelul efectiv preluat.',points:['Definirea evenimentelor importante','Separarea acțiunilor de interes de cele informative','Documentarea semnificației fiecărui indicator']},
      {title:'GTM, GA4 și conversiile din platformele publicitare',text:'Verificăm tag-urile existente, dublările și declanșările nedorite. Putem configura evenimente GA4 și integra semnalele utile în Google Ads, Meta sau TikTok, în funcție de infrastructura proiectului. Folosim testarea în modul de previzualizare și verificăm ce ajunge efectiv în rapoarte.',points:['Audit și controlul duplicărilor','Testarea tag-urilor și evenimentelor','Conectări corecte între instrumente']},
      {title:'Consimțământ, atribuire și limitele rapoartelor',text:'Respectăm soluția de gestionare a consimțământului și discutăm configurarea Consent Mode atunci când este relevantă. Blocarea cookie-urilor, browserele, ferestrele de atribuire și diferențele dintre platforme pot duce la cifre distincte. Raportarea trebuie interpretată în context, nu comparată ca și cum toate instrumentele ar măsura identic.',points:['Verificări ale consimțământului','Explicarea atribuirii și a limitelor datelor','Recomandări pentru rapoarte consecvente']}
    ],
    exampleTitle:'Exemplu: un formular și un buton de apel',
    example:'Pe o pagină de servicii putem defini un eveniment când formularul este trimis cu succes și un altul când cineva apasă numărul de telefon. În raport prezentăm separat cele două acțiuni. Dacă firma dorește numărarea apelurilor efective, discutăm o soluție suplimentară, nu prezentăm click-urile drept apeluri confirmate.',
    prerequisites:['Acces în GA4, GTM și platformele conectate, după caz','Lista obiectivelor și a formularelor relevante','Acces tehnic la website sau la persoana care îl administrează','Informații despre bannerul de consimțământ existent'],
    caveatTitle:'Măsurarea perfectă nu este posibilă în orice condiții',
    caveat:'Unele evenimente nu pot fi observate din cauza setărilor de confidențialitate, a blocării scripturilor sau a lipsei unor integrări. Scopul nostru este o configurare coerentă și verificabilă, nu promisiunea că fiecare interacțiune va apărea identic în toate conturile.',
    questions:[
      {question:'Este suficient să instalez codul GA4 în website?',answer:'Nu întotdeauna. Pentru o raportare utilă, trebuie să existe evenimente definite și verificate, setări potrivite pentru consimțământ și o interpretare corectă a acțiunilor. Instalarea codului de bază este doar primul pas.'},
      {question:'Cum evităm dublarea conversiilor?',answer:'Verificăm dacă aceeași acțiune este trimisă din mai multe locuri și analizăm modul de import în platformele de publicitate. Uneori este necesar să alegem o singură conversie principală pentru licitare și să păstrăm alte evenimente numai pentru observație.'},
      {question:'De ce diferă conversiile din Google Ads față de GA4?',answer:'Cele două platforme pot folosi metode și ferestre de atribuire diferite. Pot exista și întârzieri de procesare ori evenimente atribuite diferit. Comparăm configurațiile și explicăm diferențele înainte de a recomanda modificări.'},
    ],
  },
  'seo-tehnic': {
    focusTitle:'Audit SEO tehnic: indexare, structură, performanță și link-uri interne',
    focusIntro:'SEO tehnic urmărește să elimine obstacolele care împiedică explorarea și înțelegerea paginilor. Un site poate avea un design bun, dar să indice URL-uri canonice greșite, să blocheze pagini în robots.txt sau să folosească redirecturi incomplete. Începem cu paginile importante pentru afacere și separăm problemele critice de recomandările cu impact incert.',
    pillars:[
      {title:'Indexare și URL-uri canonice',text:'Analizăm Google Search Console, sitemap, robots.txt, directivele noindex, canonical și redirecționările. Nu toate paginile trebuie indexate: unele variante de filtrare sau pagini tehnice pot fi excluse în mod intenționat. Important este ca paginile pe care firma vrea să le promoveze organic să fie accesibile și semnalizate coerent.',points:['Paginile importante accesibile crawlerelor','Canonical și redirecturi consecvente','Sitemap cu URL-uri utile și valide']},
      {title:'Structura conținutului și legăturile dintre servicii',text:'Verificăm titlurile paginilor, H1, H2, descrierile, textul din link-uri și navigarea. O pagină despre un serviciu trebuie să răspundă întrebărilor reale ale clienților, nu doar să repete cuvântul-cheie. Legăm paginile conexe acolo unde relația este utilă, astfel încât utilizatorii și motoarele de căutare să înțeleagă structura site-ului.',points:['Titluri clare și diferențiate între pagini','Link-uri interne descriptive','Conținut specific serviciilor, fără repetiție artificială']},
      {title:'Experiența mobilă și diagnosticarea performanței',text:'Evaluăm erorile care afectează afișarea pe mobil, elementele care provoacă deplasări de layout și resursele care încetinesc încărcarea. Când există date disponibile, folosim instrumente precum PageSpeed Insights și Search Console ca punct de pornire, fără a confunda scorul unui test cu poziția garantată în Google.',points:['Verificări pe ecrane mobile','Imagini, scripturi și resurse optimizabile','Prioritizarea corecțiilor după efectul asupra paginilor importante']}
    ],
    exampleTitle:'Exemplu: pagini noi de servicii care nu apar în Google',
    example:'Verificăm dacă paginile sunt publice, răspund corect, au canonical către ele însele și sunt incluse în sitemap și în navigarea site-ului. Examinăm apoi datele din Search Console și calitatea informațiilor din pagini. Indexarea și poziționarea finală sunt decise de Google; corecțiile tehnice nu înlocuiesc conținutul relevant.',
    prerequisites:['Acces la website și platforma tehnică','Acces în Google Search Console, când există','Lista paginilor și serviciilor prioritare','Istoricul modificărilor importante, dacă este disponibil'],
    caveatTitle:'Ce poate și ce nu poate rezolva SEO tehnic',
    caveat:'Un audit identifică și prioritizează probleme, dar nu garantează poziții sau trafic. Creșterea organică depinde și de calitatea ofertei, de informațiile publicate, de concurență și de autoritatea site-ului. Recomandăm implementări pe care le putem explica și reverifica.',
    questions:[
      {question:'Este suficient să trimit sitemap.xml în Search Console?',answer:'Nu. Sitemap-ul ajută descoperirea URL-urilor, dar nu garantează indexarea. Paginile trebuie să fie accesibile, să aibă canonical și directive coerente, conținut util și legături interne care le susțin.'},
      {question:'Ce facem cu paginile vechi după un redesign?',answer:'Stabilim ce URL-uri se păstrează și unde este necesară redirecționarea 301 către pagini relevante. Verificăm canonical, sitemap și legăturile interne pentru a evita erorile și pierderea inutilă a accesului la conținutul existent.'},
      {question:'Merită creată o pagină separată pentru fiecare serviciu?',answer:'Dacă serviciile răspund unor nevoi și căutări distincte, da, paginile dedicate pot oferi explicații mai complete. Fiecare pagină trebuie să aibă informații originale și utile; nu recomandăm zeci de pagini aproape identice doar pentru a repeta localități sau cuvinte-cheie.'},
    ],
  },
};
