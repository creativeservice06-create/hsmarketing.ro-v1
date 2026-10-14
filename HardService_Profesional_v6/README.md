# Hard Service — Website Next.js v6

## Deploy pe Vercel
Încarcă **conținutul** acestui folder în rădăcina repository-ului GitHub (package.json lângă app/).
În Vercel setează Root Directory la `./` dacă ai pus fișierele în rădăcină.
Dacă ai încărcat folderul întreg `HardService_Profesional_v6`, setează Root Directory la `HardService_Profesional_v6`.
Framework: Next.js; Build: `npm run build`.

## Imagini și brand
- Cele două badge-uri furnizate sunt în `public/badges/`, în formatul original SVG.
- Confirmă dreptul de a afișa insignele de parteneriat înainte de publicare.
- Logo-urile Google Ads / Meta / TikTok etc. sunt încărcate din Wikimedia Commons prin URL-uri către fișierele cu mărci originale, nu redesenate. Disponibilitatea externă și condițiile de utilizare trebuie verificate.
- Logo-urile proiectelor folosesc faviconurile publice ale site-urilor, cu fallback-ul browserului dacă nu există. Pentru sigle de calitate mare, înlocuiește-le cu logo-urile originale aprobate.
- Nu sunt afișate adrese de email; formularul are nevoie de configurare SMTP.

## Formular
Setează în Vercel variabilele necesare din `app/api/contact/route.ts` (SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_TO etc.).
Nu expune parola SMTP în codul GitHub.

## Note
- Proiectele sunt ServiciiNonStop.ro, CarnetBarca.ro, Ignifugare.eu. Nu sunt inventate rezultate numerice.
- Nu suprascrie fără backup paginile SEO existente din site-ul live.
- Testează deployment-ul Preview înainte să îl legi de domeniul de producție.
