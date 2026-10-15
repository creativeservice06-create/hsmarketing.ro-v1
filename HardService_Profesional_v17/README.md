# Hard Service — proiect Next.js v16

Website Next.js pentru Hard Service, cu homepage, pagini individuale de servicii, portofoliu, prețuri, formular de contact, sitemap, robots.txt și date structurate.

## Noutatea v16: animație principală reală, nu fotografie

Prima ilustrație este alcătuită din **elemente SVG distincte**, inserate inline în pagină prin `components/JourneyFlow.tsx`. Nu folosește imaginea de referință ca fundal.

- Telefon cu o căutare demonstrativă: **„servicii promovare”**.
- Card de reclamă, card cu statistici *pur ilustrative*, logo-uri, pașii „Reclamă online → Vizită pe site → Cerere de contact → Mai mulți clienți” și grafic cu traseu animat.
- Animații CSS independente pentru anunț, cardul de rezultate, bare, săgeți și grafic. Sunt dezactivate dacă vizitatorul preferă mișcare redusă.
- Ilustrația este un SVG cu `viewBox`, astfel încât să își păstreze proporțiile pe desktop și mobil, fără ca elementele să crească disproporționat.
- Sunt prezente insignele furnizate de utilizator pentru Google Premier Partner și Meta Business Partner, fără domeniu afișat în banda de jos.

Fișiere relevante: `components/JourneyFlow.tsx` (SVG inline folosit în pagină), `public/hero/animated-search.svg` (sursa grafică editabilă), secțiunea **V16** de la sfârșitul `app/globals.css` (animații). Componenta și fișierul SVG trebuie menținute sincronizate la modificări.

Previzualizare izolată, cu animații: `preview/hero-v16.html` (se servește printr-un server local, de exemplu `python -m http.server` din rădăcina proiectului).

**Important:** procentele din ilustrație sunt date fictive folosite numai pentru demonstrarea grafică; nu reprezintă rezultatele Hard Service și nu trebuie prezentate ca studiu de caz. Insignele Google/Meta se pot afișa public numai dacă firma are statutul și drepturile aferente și respectă politicile fiecărei platforme.

## Încărcare în GitHub și Vercel

1. Deschide arhiva ZIP și încarcă **fișierele din interior** în rădăcina repository-ului (`package.json`, `app/`, `components/`, `lib/`, `public/`).
2. În Vercel, dacă `package.json` se găsește la rădăcina repo-ului, setează `Root Directory` la `./` sau lasă-l necompletat.
3. Framework preset: **Next.js**. Build command: `npm run build`.
4. Adaugă în Vercel variabilele necesare formularului, conform `.env.example` și implementării din `app/api/contact/route.ts`.
5. Publică mai întâi un deployment Preview și verifică tot site-ul pe mobil, formularul și paginile SEO înainte de a comuta domeniul live.

Dacă ai încărcat proiectul într-un subfolder, `Root Directory` trebuie să fie exact calea acelui subfolder, nu `./`.

## Portofoliu și SEO

Portofoliul include domeniile selectate anterior, cu siglele MedDev și Fire Stop furnizate de utilizator. Pentru unele domenii se folosesc faviconurile lor publice, care pot diferi de logo-ul oficial mare.

Există șapte pagini dedicate serviciilor, deși homepage-ul prezintă șase grupe de servicii (site-uri și magazine online sunt grupate). După publicare, verifică în Google Search Console indexarea, sitemap-ul, canonical-urile, datele structurate, performanța Core Web Vitals și evenimentele GA4/GTM. **Nicio implementare SEO nu garantează poziții în Google.**

## Limitări de testare în mediul de generare

Au fost verificate sintaxa TypeScript/TSX, parsarea CSS, structura SVG și integritatea ZIP. Au fost randate imagini de control ale ilustrației la 716 px și 360 px. **Nu a fost confirmat un build complet Next.js pe Vercel**; se recomandă un deployment Preview înainte de publicare.
