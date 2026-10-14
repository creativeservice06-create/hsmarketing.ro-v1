# Hard Service — Website profesional Next.js v10

## Instalare GitHub / Vercel

Arhiva ZIP este pregătită cu fișierele Next.js direct în rădăcina arhivei. Încarcă **conținutul arhivei** (nu arhiva ca fișier) direct în rădăcina repository-ului: `package.json`, `app/`, `components/`, `lib/`, `public/` etc.

- Root Directory în Vercel: `./` dacă `package.json` este la rădăcina repository-ului.
- Dacă alegi să încarci folderul `HardService_Profesional_v10` întreg, setează Root Directory la numele folderului.
- Framework: Next.js. Command: `npm run build`.
- Configurarea pentru formular este în `.env.example`; datele SMTP trebuie definite în Environment Variables în Vercel.
- Testează deployment-ul Preview, formularul real, toate paginile de servicii și afișarea siglelor înainte de publicare.

## Modificări în v10

- Simulare originală realistă cu telefon, căutare Google, anunț sponsorizat și notificare de contact. Este un **exemplu demonstrativ**, nu un rezultat Google real; codul este în `components/JourneyFlow.tsx`.
- SEO: metatitlu și descriere unice pe homepage + 7 pagini de servicii. Titlurile sunt absolute, astfel încât numele Hard Service să nu se repete din template. Sitemap și schema.org păstrate.
- Portofoliu: 12 website-uri distincte, sub formă de grilă cu logo-uri mari, fără nume vizibil sub fiecare. Eliminat zeroplagiat.ro; adăugate Enjoy Driving și Fire Stop.
- **Logo MedDev:** fișier SVG original furnizat de utilizator (`public/portfolio/meddev-original.svg`).
- **Logo Fire Stop:** imaginea originală furnizată de utilizator, decupată la zona vizibilă (`public/portfolio/fire-stop.png`).
- Enjoy Driving și restul website-urilor fără fișier de logo furnizat: încărcare din faviconurile publice. Dacă faviconul diferă de sigla mare a brandului, adaugă fișierul real în `public/portfolio/` și setează proprietatea `logo` din `lib/projects.ts`.
- Text mărit în servicii, prețuri, FAQ, formular, footer și pagini individuale.
- Șase servicii vizibile pe homepage, cu Creare site-uri + magazine online unite; cele șapte pagini SEO detaliate sunt păstrate.

## Logo-uri și insigne

- Logo-ul TikTok trimis de utilizator este în `public/brands/tiktok-official-user.png`.
- Insignele Meta Business Partner și Google Premier Partner 2026 trimise de utilizator sunt în `public/badges/`.
- Siglele Google Ads, Meta, Facebook și Instagram sunt încărcate prin Wikimedia Commons; verifică disponibilitatea și conformitatea folosirii lor.
- **Atenție:** afișarea insignelor de parteneriat este permisă doar firmelor cu statutul aferent; pentru badge-ul Google pe site trebuie folosit codul oficial emis din Google Partners, conform regulilor Google. Fișierele SVG nu dovedesc eligibilitatea.

## SEO și performanță

Nu există garanții de clasare. După deploy, validează titlurile, canonical, sitemap-ul, paginile de servicii, Search Console, viteza pe mobil și conversiile GA4/GTM. Site-ul original poate avea reguli CookieYes/GDPR personalizate ce trebuie păstrate/migrate.

## Previzualizare statică

`preview/index.html` este doar o prezentare HTML a direcției vizuale. Nu este build Next.js și nu are un formular de contact funcțional. Verifică site-ul final în Vercel Preview.
