# Hard Service — Website Next.js v7

Versiune actualizată a website-ului de promovare online: homepage, șapte pagini de servicii, portofoliu derulabil cu 11 domenii, prețuri, FAQ, formular și footer.

## Publicare GitHub + Vercel

1. Creează un branch nou sau păstrează un backup al codului actual.
2. Dezarchivează ZIP-ul și încarcă **fișierele din interior** în rădăcina repository-ului (`app/`, `components/`, `lib/`, `public/`, `package.json`). Nu încărca ZIP-ul ca fișier în repository.
3. În Vercel setează Root Directory `./` dacă `package.json` apare în rădăcina GitHub. Dacă ai încărcat întreg folderul sub numele `HardService_Profesional_v7`, setează Root Directory `HardService_Profesional_v7`.
4. Framework Preset: Next.js. Install: `npm install`; Build: `npm run build`.
5. Configurează SMTP și verifică formularul de contact înainte de publicare; vezi `.env.example`.
6. Publică întâi pe un Preview Deployment. Testează meniul, caruselul, logo-urile, toate paginile de servicii și formularul, atât pe mobil, cât și pe desktop.
7. Înainte să muți domeniul live, verifică păstrarea GTM, GA4, CookieYes/Consent Mode și setările SEO ale site-ului existent.

## Media și logouri

- **TikTok**: `public/brands/tiktok-official-user.png`, decupat strict din imaginea furnizată de beneficiar, cu transparența păstrată. Folosit consecvent prin `components/BrandMark.tsx`.
- **Insigne parteneriate**: cele două fișiere SVG originale furnizate, `public/badges/meta-business-partner.svg` și `public/badges/google-premier-partner-2026.svg`, sunt afișate **doar sub animația principală și în footer**. Confirmă statutul și drepturile de afișare pentru ambele; pentru Google, regulile cer fragmentul oficial pentru afișarea insignei pe website: https://support.google.com/google-ads/answer/9028798
- Google Ads, Meta, Facebook și Instagram folosesc fișiere de logo prin URL extern Wikimedia Commons. Disponibilitatea și cerințele de brand trebuie verificate în browser; în caz de probleme, înlocuiește URL-urile din `components/BrandMark.tsx` cu active aprobate local.
- **Portofoliu**: caruselul include cele 11 domenii unice solicitate (MedDev o singură dată). Fiecare încearcă să afișeze faviconul site-ului (`https://domeniu/favicon.ico`), apoi imaginea furnizată de serviciul Google favicon; când ambele lipsesc, folosește monograma. **Acestea sunt identificatori publici ai site-urilor, nu garantat logo-urile de brand la rezoluție mare**. Pentru sigle de rezoluție mare, proprietarii pot furniza imaginile originale și acestea pot fi puse local în `public/portfolio/`.
- O previzualizare vizuală *statică*, fără funcțiile complete Next.js, este inclusă în `preview/index.html`.

## Conținut și SEO

- 7 pagini individuale de servicii cu informații specifice, beneficii, pași, explicații despre măsurare, FAQ, date structurate Service/BreadcrumbList/FAQPage, metadate și legături interne.
- Fără rezultate sau statistici inventate.
- Adresa internă de email nu este afișată public; formularul păstrează câmpul în care **vizitatorul** își introduce propria adresă, necesară contactării.
- Portofoliul este o listă furnizată de beneficiar. Descrierile sunt orientate spre obiectivul fiecărui website; nu atribuie rezultate numerice sau o anumită cantitate de muncă fără dovezi.

## Validare și limite

Fișierele TypeScript/TSX au fost verificate sintactic. În acest mediu nu a fost disponibilă instalarea npm din registry, deci build-ul Next.js complet pe Vercel rămâne de verificat. Logo-urile externe și faviconurile depind de site-urile sursă și de disponibilitatea lor.
