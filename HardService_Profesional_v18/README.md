# Hard Service — proiect complet Next.js v18

Proiectul conține homepage, pagini individuale SEO pentru servicii, portofoliu, prețuri, FAQ, formular, sitemap și robots.txt.

## Noutatea v18 — animația principală

Animația din `components/JourneyFlow.tsx` este un **SVG construit din elemente distincte**, nu fotografia-model introdusă ca fundal. Păstrează compoziția de referință: telefon, căutarea **„servicii promovare”**, card de reclamă, card de rezultate orientative, grafic și două insigne de parteneriat. Au fost scoase banda „De la reclamă la contact” și schema de patru pași.

Elementele au animații CSS discrete și independente, configurate în blocul **Hero v18** de la sfârșitul `app/globals.css`. Pentru dispozitivele cu preferința `prefers-reduced-motion: reduce`, animațiile se dezactivează.

Fișierele de imagine folosite în această compoziție sunt:
- `public/brands/google-ads-logo.svg` — marcaj vectorial local cu aspectul Google Ads
- `public/brands/meta-infinity-original.png` — simbolul Meta decupat din badge-ul furnizat
- `public/brands/tiktok-official-user.png` — logo-ul TikTok furnizat de utilizator, cu fundal transparent
- `public/badges/google-premier-partner-2026.svg` — insigna Google furnizată
- `public/badges/meta-business-partner.svg` — insigna Meta furnizată

**Atenție:** procentele și graficul din scenă sunt **numai demonstrative**, nu rezultate comerciale reale. Badge-urile se publică doar dacă firma are statutul aferent și drept de utilizare conform politicilor Google și Meta.

## Instalare în GitHub și Vercel

1. Dezarhivează și încarcă **fișierele din interiorul ZIP** în rădăcina repository-ului. `package.json` trebuie să fie alături de `app/`, `components/`, `lib/`, `public/`.
2. În Vercel, setează `Root Directory` la `./` numai dacă `package.json` se găsește acolo. Dacă ai încărcat într-un subfolder, selectează subfolderul real.
3. Framework: **Next.js**. Build command: `npm run build`.
4. Configurează variabilele formularului (`.env.example` și `app/api/contact/route.ts`).
5. Testează întâi un **Preview Deployment**, apoi domeniul live.

## Verificări și limitări

- Scena a fost redată și inspectată la viewport-uri de **1440 px**, **390 px** și **320 px**; nu a produs derulare orizontală.
- Au fost verificate **21 fișiere TypeScript/TSX** din punctul de vedere al sintaxei, plus parsarea CSS.
- Aceste verificări **nu înlocuiesc un build complet Next.js**. Instalarea dependențelor/build-ul real pe Vercel rămân de verificat.
- Nu se poate garanta clasarea SEO. După publicare, verifică indexarea și evenimentele de conversie.

## Previzualizare

`preview/hero-v18.html` este o previzualizare autonomă a noii scene animate. Nu are nevoie de Next.js pentru a fi deschisă.
