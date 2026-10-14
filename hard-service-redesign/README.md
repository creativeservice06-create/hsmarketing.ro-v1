# Hard Service — redesign Next.js

Homepage modern, simplificat, pentru Hard Service, cu toate fișierele necesare unei aplicații **Next.js App Router**. Poate fi publicat pe GitHub + Vercel.

## Ce include

- Header responsive, meniu de servicii și telefon real: **0740 231 358**.
- Hero simplu, fără laptop; **linie curbată animată SVG**: reclame → website → solicitare → client. Animația se reduce în funcție de setarea `prefers-reduced-motion`.
- Simboluri de brand SVG locale, fără cereri către CDN pentru logo-uri (Google Ads, Meta, Facebook, Instagram, TikTok, WordPress, Shopify, Analytics). Verifică respectarea ghidurilor de brand înainte de publicare.
- Servicii cu linkuri interne HTML către pagini dedicate: `/google-ads/`, `/facebook-instagram-ads/`, `/tiktok-ads/`, `/creare-site/`, `/magazin-online/`, `/tracking-conversii/`, `/seo-tehnic/`.
- Exact 3 **proiecte demonstrative**: magazin online decorațiuni, firmă servicii construcții, cabinet stomatologic. Descrierile și desenele sunt marcate drept exemple; NU conțin rezultate inventate. Actualizează-le ulterior cu proiectele reale aprobate pentru publicare.
- Pachetele afișate pe hardservicesrl.ro: START 200 RON/săptămână, SILVER 350, PROFESIONAL 400; distinge tariful administrării de bugetul reclamelor.
- FAQ accesibil fără JavaScript prin `details/summary`.
- Formular de contact cu API Nodemailer și aceleași variabile SMTP de bază ca proiectul anterior (`SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`), honeypot și deduplicare de scurtă durată.
- Header și footer consistente pe homepage și pe paginile secundare.
- Metadate SEO, canonical, sitemap, robots, Organization, WebSite, Service și BreadcrumbList JSON-LD.
- Pagina `/contact/` păstrată pentru indexare.
- Paginile de confidențialitate și cookie-uri sunt **modele inițiale**; necesită revizuire GDPR și păstrarea unui CMP valid (de ex. CookieYes).

## Previzualizare fără instalare

Deschide `preview/index.html` direct în browser. Aceasta este o **previzualizare statică**, nu site-ul funcțional; pentru formular, pagini de servicii și logo-urile din React rulează proiectul Next.js.

## Instalare locală

Cerință: Node.js 20+.

```bash
npm install
cp .env.example .env.local
npm run dev
```

Accesează `http://localhost:3000`. Pentru producție: `npm run build`.

## Formularul — variabile în Vercel

Configurează în Vercel → Project → Settings → Environment Variables:

| Variabilă | Valoare | 
|---|---|
| `SMTP_HOST` | `smtp.mail.yahoo.com` (dacă folosești Yahoo) |
| `SMTP_PORT` | `465` |
| `SMTP_USER` | emailul autentificat în SMTP |
| `SMTP_PASS` | parola de aplicație a contului SMTP, **nu parola de cont** |
| `CONTACT_TO` | `chirilasadrian@yahoo.com` (opțional, default) |
| `NEXT_PUBLIC_GTM_ID` | `GTM-K2T3M8BJ` (opțional; vezi avertizarea de mai jos) |

**Nu pune niciodată parole în GitHub.** Dacă variabilele lipsesc, formularul afișează o eroare clară și oferă posibilitatea de a suna. Verifică trimiterea după deploy.

## GTM și consimțământ

Codul GTM este opțional și se încarcă doar dacă setezi `NEXT_PUBLIC_GTM_ID`. Înainte de activare pe noul site, verifică **CookieYes + Consent Mode v2** și că tagurile neesențiale nu rulează fără consimțământul necesar. Noul proiect nu include automat bannerul CookieYes existent; trebuie menținut/integrat din configurația anterioară.

## Publicare pe GitHub + Vercel

1. **Fă mai întâi backup la repository-ul actual** și creează o ramură nouă `redesign`, ca să nu pierzi paginile detaliate și implementările vechi.
2. Dezarhivează ZIP-ul; în GitHub trebuie puse **fișierele și folderele din interiorul arhivei**, nu ZIP-ul ca fișier singular.
3. Dacă vrei să înlocuiești integral site-ul, poți folosi un repository nou sau înlocui conținutul repository-ului existent după backup. Atenție: **paginile dedicate sunt rescrise și nu au exact textele SEO din proiectul actual**. Pentru a păstra integral SEO-ul deja dezvoltat, migrează doar componenta vizuală a homepage-ului în repository-ul actual și nu șterge paginile originale.
4. Importă branch-ul/repository-ul în Vercel; framework preset `Next.js`; build `npm run build`.
5. Configurează SMTP și, după validarea consimțământului, GTM.
6. Testează **toate** linkurile, formularul, telefonul, indexarea/canonical, cookie bannerul și versiunea mobilă înainte de a conecta domeniul live.

## Actualizări ulterioare

- Modifică serviciile, pachetele și FAQ în `lib/site.ts`.
- Modifică cele trei proiecte din `app/page.tsx` (`projectExamples`). Imaginile de înlocuit se află în `public/projects/`.
- Schimbă telefonul, emailul și CUI în `lib/site.ts`.
- CSS-ul responsive este în `app/globals.css`.
- Animația curbată este în `components/JourneyFlow.tsx`.

## Google Partner

**Nu este afișată sigla Google Partner.** Aceasta poate fi adăugată numai după verificarea certificării și a drepturilor de folosire a insignei oficiale. Niciun rezultat de campanie sau calificativ de recenzii nu a fost inventat.

## Limitări ale verificării

Proiectul a fost validat static pentru sintaxă JSX/TSX și structură, dar mediul de generare nu a putut descărca dependențele npm pentru a executa efectiv `next build`. Rulează build-ul pe GitHub/Vercel și verifică implementarea înainte de a înlocui site-ul live.
