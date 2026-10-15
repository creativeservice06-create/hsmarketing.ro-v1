# Hard Service — website complet, versiunea 20

Proiect Next.js pentru servicii de promovare online și website: homepage, șapte pagini SEO de servicii, portofoliu, tarife, FAQ, formular de contact și pagini legale.

## Ce este nou în această versiune

- **Logo Google Ads exact ca fișierul furnizat**, fără redesenare: `public/brands/google-ads-original-user.webp` (copie identică a fișierului încărcat). Este folosit în `components/BrandMark.tsx` și `components/JourneyFlow.tsx`; astfel se vede unitar în homepage, carduri, pagina Google Ads și linkurile către servicii complementare.
- **Animație mai fluidă**: logo-urile și cardurile se mișcă lent și independent, fără să fie repoziționate; telefonul rămâne stabil, textul „servicii promovare” apare progresiv, barele cresc și linia graficului se trasează, apoi se estompează înainte de reluare. Preferința de accesibilitate `prefers-reduced-motion` oprește animațiile.
- **Pagini individuale mult mai documentate**: informații concrete și distincte în `lib/serviceGuides.ts` pentru Google Ads, Meta Ads, TikTok Ads, creare site, magazin online, tracking și SEO tehnic. Fiecare conține criterii de alegere, 3 zone explicative, exemplu practic, cerințe inițiale, limite și 3 FAQ noi.
- **SEO tehnic**: titlu și descriere unice pe pagină, H1 distinct, headinguri H2/H3 relevante, legături interne, sitemap, robots.txt, canonical, BreadcrumbList, Service JSON-LD, FAQ bazat pe întrebări vizibile și imagine Open Graph (`public/og-hard-service.png`).
- **Domeniu configurabil**: `NEXT_PUBLIC_SITE_URL` definește URL-urile canonice, sitemapul și datele structurate. Dacă folosești alt domeniu decât `hardservicesrl.ro`, trebuie să configurezi acest URL înainte de deploy.

## Cum publici în GitHub și Vercel

1. Dezarhivează ZIP-ul și încarcă **fișierele din interior** direct în repository. Trebuie să vezi `package.json`, `app/`, `components/`, `lib/`, `public/` direct la primul nivel.
2. În Vercel → **Settings → Build and Deployment → Root Directory**, setează `./` **numai când** `package.json` este la rădăcină. Dacă îl încarci într-un folder, selectează exact acel folder.
3. Framework Preset: **Next.js**. Build Command: `npm run build`.
4. În Vercel → **Settings → Environment Variables**, setează `NEXT_PUBLIC_SITE_URL` la domeniul final, inclusiv `https://`, fără `/` la final. Redeploy după schimbare.
5. Pentru formular setează `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, `CONTACT_TO` conform `.env.example`. Nu comite parole în GitHub.
6. Instalează `npm install`, apoi `npm run build` local dacă ai Node.js, sau verifică `Build Logs` după Deploy Preview. Publică pe domeniul final doar după verificare.

## Verificare SEO după lansare

- Verifică pagina de contact și fiecare pagină SEO în browser, cu adrese canonice corespunzătoare domeniului final.
- Verifică `https://DOMENIU/robots.txt` și `https://DOMENIU/sitemap.xml`.
- În Google Search Console, inspectează paginile de servicii și urmărește indexarea, interogările și paginile care primesc impresii.
- Testează formularul, apelurile telefonice și evenimentele GA4/GTM; configurarea evenimentelor de conversie nu este verificată prin simpla existență a paginilor.
- Evită promisiunile de locuri în Google și conținutul repetitiv. Pentru rezultate organice contează relevanța reală a informațiilor, accesibilitatea și calitatea paginilor.
- Google limitează afișarea rezultatelor FAQ extinse la anumite tipuri de site-uri; markupul `FAQPage` nu garantează un rezultat special în Google.

## Identitate, parteneriate și portofoliu

Siglele Google Ads / Meta / TikTok sunt mărci ale titularilor. Fișierul Google Ads este exact cel încărcat de utilizator. Badge-urile Google Premier Partner și Meta Business Partner sunt cele furnizate anterior; înainte de publicare verifică dreptul de folosire și eventualul snippet oficial.

**Procentele din animație sunt pur illustrative**, nu performanțe măsurate ale Hard Service. Nu sunt prezentate rezultate comerciale inventate ca studii de caz.

Logo-urile din portofoliu care nu au fost furnizate local folosesc faviconuri publice ale domeniilor și pot arăta diferit față de siglele principale.

## Fișiere principale

- `components/JourneyFlow.tsx` — scenă SVG animată
- `components/BrandMark.tsx` — logo-uri de servicii
- `lib/serviceGuides.ts` — noul conținut SEO, diferit pe fiecare pagină
- `lib/serviceDetails.ts` — strategie, beneficii și raportare
- `app/[slug]/page.tsx` — template comun de pagină și SEO metadata
- `app/globals.css` — design, responsive și animații
- `preview/hero-v20.html` — previzualizare animată, independentă de Next.js

## Stadiul testării

Au fost verificate parsarea TypeScript și CSS, structura fișierelor, previzualizarea SVG în Chromium la desktop și mobil și integritatea ZIP. Build-ul complet Next.js nu a putut fi realizat aici deoarece pachetele npm nu sunt disponibile offline; trebuie confirmat în Vercel Preview înainte de publicare.
