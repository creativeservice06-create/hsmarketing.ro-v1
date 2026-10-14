# Hard Service — Next.js v8

## Instalare GitHub/Vercel

Încarcă **fișierele din interiorul arhivei** direct în rădăcina repository-ului: `app/`, `components/`, `lib/`, `public/`, `package.json`, `next.config.mjs`, `tsconfig.json`. În Vercel, `Root Directory` = `./` dacă acestea sunt în rădăcină. Dacă păstrezi un folder exterior, setează numele lui ca Root Directory.

- `npm install`
- `npm run build`
- `npm start`

## Ce conține v8

- Ilustrație originală cu smartphone și căutare Google demonstrativă în `components/JourneyFlow.tsx`. Nu reprezintă rezultate live sau exemple ale unor clienți reali.
- Șase carduri pe homepage: Google Ads, Meta Ads, TikTok Ads, site+magazine online (cu legături către ambele pagini), analytics/tracking, SEO. Cele șapte pagini SEO individuale se păstrează.
- Portfolio în format grilă cu unsprezece site-uri distincte, în `components/ProjectLogoGrid.tsx`; fiecare tile folosește faviconul public al site-ului și, dacă nu este disponibil, o alternativă tipografică. Pentru sigla principală de calitate mare, furnizează imaginea oficială sau adaug-o local.
- Flux vizual renovat, modul de lucru, FAQ și formular separate, text mărit și responsive.
- Insignele SVG **furnizate de utilizator** în `public/badges/` sunt afișate sub demonstrație și în footer, nu suplimentar în header.
- Imaginea TikTok furnizată de utilizator rămâne în `public/brands/tiktok-official-user.png`.
- Adresa de email a firmei nu este afișată pe site; formularul conține un câmp pentru emailul persoanei care solicită oferta.

## Sigle, branduri și statut

Respectă politicile titularilor mărcilor. Verifică dreptul companiei de a afișa badge-urile Meta Business Partner și Google Premier Partner 2026. Pe website, Google solicită fragmentul HTML oficial corespunzător statutului firmei; simpla încărcare a unei insigne SVG nu înlocuiește această cerință. Nu publica badge-uri care nu reprezintă statutul actual al firmei.

Logo-urile Google Ads, Meta, Facebook, Instagram se încarcă de pe Wikimedia Commons prin URL. Disponibilitatea și regulile de utilizare ale acelor fișiere externe trebuie verificate. Logo-ul TikTok este local. Identitățile proiectelor sunt faviconurile domeniilor, nu garantat siglele principale.

## Formular și GDPR

Configurează SMTP în Vercel cu variabilele din `.env.example` și testează trimiterea reală înainte de lansare. Verifică politicile GDPR, consimțământul pentru tracking și setările de cookies după deploy.

## Previzualizare

`preview/index.html` este o **previzualizare ilustrativă**, nu un build Next.js. Formularul din previzualizare nu trimite mesaje. Verifică deployment-ul Vercel Preview înainte de producție.
