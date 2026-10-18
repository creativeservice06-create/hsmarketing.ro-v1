# Hard Service — redesign editorial v22

Proiect complet Next.js 15 / React 19 pentru Hard Service. Direcție de design inspirată din structura clară, orientată spre rezultate, a paginilor EpicAds.ro, cu layout, texte și identitate vizuală proprii Hard Service.

## Ce include

- Homepage nou, **fără ilustrația animată mare**: titlu SEO clar despre administrarea reclamelor, parteneriate în zona de sus și prezentare editorială a serviciilor (în locul celor 3 pași), situații concrete, servicii, un singur modul despre optimizare, proces, portofoliu, pachete, FAQ și contact.
- 7 pagini de serviciu distincte, cu secțiuni practice noi despre optimizări și indicatori relevanți, în plus față de materialele existente: `/google-ads/`, `/facebook-instagram-ads/`, `/tiktok-ads/`, `/creare-site/`, `/magazin-online/`, `/tracking-conversii/`, `/seo-tehnic/`.
- Meta titluri / descrieri unice, canonical, sitemap, robots, date structurate pentru Service / Breadcrumb / Organization și FAQ.
- Meniu responsive, formular cu validare, mențiuni despre buget și prețuri, pagini legale. Texte și etichete mai lizibile pe întregul site; pe mobil se păstrează layout-ul pe o coloană.
- Sigla Google Ads încărcată de utilizator în `public/brands/google-ads-original-user.webp`, folosită de componenta BrandMark.
- Insignele de parteneriat furnizate: originalele SVG în `public/badges`, randări PNG fidele în aceeași locație pentru compatibilitate și performanță.

## Instalare și publicare

1. Deschide arhiva și încarcă **fișierele din interior** direct în rădăcina repo-ului GitHub (`package.json` trebuie să fie lângă `app/`).
2. În Vercel: Framework = Next.js; Root Directory = `./`; Build Command = `next build` / implicit.
3. Configurează `NEXT_PUBLIC_SITE_URL` cu domeniul exact pe care îl publici, fără slash la final.
4. Configurarea formularului necesită variabilele SMTP din `.env.example` și test cu email real. Nu încărca parola SMTP în GitHub.
5. Pentru tracking, verifică GTM/GA4, consimțământul și condițiile legale înainte de activare.
6. Fă întâi Deploy Preview, verifică mobilul, formularul și linkurile, apoi publică pe domeniul final.

## Direcție vizuală și conținut v22

- H1 din homepage: **„Administrare Google Ads, Facebook Ads și TikTok Ads pentru firme.”**. Crearea site-urilor, magazinelor online și configurarea măsurării sunt explicate în introducere.
- În dreptul H1: badge-urile de parteneriat și un panou editorial sobru despre integrarea reclamelor cu paginile și datele; nu mai există schema în trei pași în această zonă.
- Textul de bază, descrierile din servicii, întrebările frecvente, formularul, prețurile și textele din paginile dedicate au dimensiuni mai mari.
- Fiecare dintre cele șapte servicii are explicații concrete (prin `lib/servicePlaybook.ts`): 3 decizii operaționale, 3 indicatori interpretați pe înțelesul clientului și limitele aferente.
- Homepage-ul are o singură secțiune suplimentară, scurtă, „Ce înseamnă optimizare”, pentru a nu dubla restul materialului.

## Badge-uri

Badge-urile Google Premier Partner și Meta Business Partner provin din fișierele furnizate de proprietarul proiectului. **Afișează-le numai dacă statutul firmei și regulile de marcă permit acest lucru**. Nu este declarată sau inventată o poziție în top, un număr de recenzii ori o sumă administrată lunar.

## Verificări

Sintaxa a 22 de fișiere TS/TSX a fost verificată fără erori de parsare; verificarea CSS a trecut. Nu au putut fi instalate dependențele Next.js din cache-ul offline; **build-ul complet Vercel și funcționarea formularului trebuie testate după instalarea dependențelor**. Browserul local a blocat navigarea, deci afișarea responsive trebuie verificată pe deployment-ul Preview. `preview/index.html` este o machetă HTML statică a structurii v22, nu o instanță Next.js complet funcțională.

## Important pentru SEO

Păstrează URL-urile vechi dacă site-ul existent are pagini indexate. Pentru pagini mutate, configurează redirect 301; nu lansa două domenii indexabile cu același conținut. Citește `SEO-LANSARE.md`.
