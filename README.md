# Hard Service — homepage v4 / Next.js

Proiect Next.js 15 / React 19 / TypeScript cu homepage refăcut și pagini secundare de servicii. Reorganizare vizuală: hero clar, animație discretă „Reclamă → Website → Contact → Client”, servicii fără bară suplimentară de logo-uri, trei proiecte reale, beneficii, public țintă, prețuri, FAQ, formular și footer complet.

## Previzualizare

Deschide `preview/index.html` direct în browser pentru **o previzualizare statică**. Pentru site-ul real, din rădăcina proiectului rulează `npm install` și `npm run dev`, apoi accesează `http://localhost:3000`.

## Portofoliu real

Trei proiecte selectate: `serviciinonstop.ro`, `carnetbarca.ro`, `ignifugare.eu`. Descrierile reflectă lucrări din portofoliul existent și informații publice de pe aceste site-uri. Nu conțin cifre inventate. Cardurile folosesc capturi reale ale homepage-urilor realizate **la cerere de Thum.io**, prin URL-uri externe; dacă acest serviciu este indisponibil ori modifică condițiile, imaginile pot lipsi. Pentru producție este recomandat să înlocuiești fiecare `picture` din `app/page.tsx` cu o captură proprie în `public/projects/`.

## Logo-uri ale platformelor

Componenta `components/BrandMark.tsx` folosește **fișiere SVG cu grafica mărcilor originale, atribuite titularilor lor**, găzduite prin Wikimedia Commons `Special:FilePath`; nu sunt desene inventate în proiect. Pentru utilizare comercială verifică ghidurile oficiale Google, Meta/Facebook/Instagram și TikTok și înlocuiește, dacă e necesar, cu exporturile autorizate din kiturile oficiale. Fișierele sunt **linkuri externe** (de aceea este recomandat să obții copii locale aprobate de la titulari). Logo-urile nu implică afiliere.

## Google Partner — important

Nu afișăm o **insignă falsă sau desenată de noi**. `components/GooglePartnerBadge.tsx` este un spațiu pregătit să primească **snippetul oficial emis în contul Google Partners**, după verificarea statutului companiei și a site-ului autorizat. Google cere snippetul, nu simpla imagine; vezi [politica oficială](https://support.google.com/google-ads/answer/9028798). Componenta este momentan invizibilă în hero, header și footer. **Nu publica badge-ul dacă firma nu este eligibilă.**

## Prețuri și date comerciale

Pachetele sunt cele prezentate în versiunea publică actuală: START 200 lei/săpt., SILVER 350 lei/săpt., PROFESIONAL 400 lei/săpt., plus pachet personalizat. Bugetul publicitar este separat. Date contact și firmă: `lib/site.ts`.

## Deploy GitHub + Vercel

1. **Salvează repository-ul actual înainte de modificări**; de preferat lucrează pe un branch nou `redesign-v4` și testează pe un preview deployment Vercel.
2. Încarcă **conținutul ZIP-ului** în rădăcina repository-ului, sau migrează homepage-ul și componentele într-un repo existent.
3. Proiectul de față are pagini reconstruite, nu conținutul SEO complet al tuturor paginilor vechi; dacă vrei să păstrezi tot SEO-ul deja lucrat, migrează componentele în proiectul vechi, fără să înlocuiești paginile originale.
4. În Vercel setează `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, `CONTACT_TO` pentru formular (vezi `.env.example`). Nu încărca parolele în GitHub.
5. Configurează și verifică **CMP / CookieYes, Consent Mode**, GTM și evenimentele de conversie conform setupului anterior: acestea nu sunt migrate automat integral.
6. Rulează `npm run build` și testează funcționarea formularului, navigarea, prețurile, imaginile externe și afișarea pe mobil înainte de a comuta domeniul.

Această versiune a fost verificată sintactic, dar **nu a fost testată cu un build Next.js complet** din cauza indisponibilității dependențelor în mediul de lucru.
