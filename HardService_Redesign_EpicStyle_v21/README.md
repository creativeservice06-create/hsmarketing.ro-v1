# Hard Service — redesign editorial v21

Proiect complet Next.js 15 / React 19 pentru Hard Service. Direcție de design inspirată din structura clară, orientată spre rezultate, a paginilor EpicAds.ro, cu layout, texte și identitate vizuală proprii Hard Service.

## Ce include

- Homepage nou, **fără ilustrația animată mare**: hero compact, parteneriate sus, situații întâlnite în promovare, servicii, proces, portofoliu, pachete, FAQ și contact.
- 7 pagini de serviciu distincte și indexabile: `/google-ads/`, `/facebook-instagram-ads/`, `/tiktok-ads/`, `/creare-site/`, `/magazin-online/`, `/tracking-conversii/`, `/seo-tehnic/`.
- Meta titluri / descrieri unice, canonical, sitemap, robots, date structurate pentru Service / Breadcrumb / Organization și FAQ.
- Meniu responsive, formular cu validare, mențiuni despre buget și prețuri, pagini legale.
- Sigla Google Ads încărcată de utilizator în `public/brands/google-ads-original-user.webp`, folosită de componenta BrandMark.
- Insignele de parteneriat furnizate: originalele SVG în `public/badges`, randări PNG fidele în aceeași locație pentru compatibilitate și performanță.

## Instalare și publicare

1. Deschide arhiva și încarcă **fișierele din interior** direct în rădăcina repo-ului GitHub (`package.json` trebuie să fie lângă `app/`).
2. În Vercel: Framework = Next.js; Root Directory = `./`; Build Command = `next build` / implicit.
3. Configurează `NEXT_PUBLIC_SITE_URL` cu domeniul exact pe care îl publici, fără slash la final.
4. Configurarea formularului necesită variabilele SMTP din `.env.example` și test cu email real. Nu încărca parola SMTP în GitHub.
5. Pentru tracking, verifică GTM/GA4, consimțământul și condițiile legale înainte de activare.
6. Fă întâi Deploy Preview, verifică mobilul, formularul și linkurile, apoi publică pe domeniul final.

## Badge-uri

Badge-urile Google Premier Partner și Meta Business Partner provin din fișierele furnizate de proprietarul proiectului. **Afișează-le numai dacă statutul firmei și regulile de marcă permit acest lucru**. Nu este declarată sau inventată o poziție în top, un număr de recenzii ori o sumă administrată lunar.

## Verificări

Sintaxa TS/TSX și CSS pot fi validate și fără dependențele npm; însă **build-ul complet Next.js și testarea funcțională a formularului trebuie executate într-un mediu cu dependențele instalate**. Previzualizarea `preview/index.html` este o reprezentare HTML statică, nu o instanță Next.js complet funcțională.

## Important pentru SEO

Păstrează URL-urile vechi dacă site-ul existent are pagini indexate. Pentru pagini mutate, configurează redirect 301; nu lansa două domenii indexabile cu același conținut. Citește `SEO-LANSARE.md`.
