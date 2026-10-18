# Hard Service v26 — redesign de agenție, orientat spre lead-uri

Proiect **Next.js 15 / React 19** pentru Hard Service. Structura de comunicare a fost studiată comparând agenții PPC precum EpicAds; codul, textele, culorile și elementele grafice rămân proprii Hard Service.

## Ce s-a schimbat

- Prima secțiune este bazată pe mesaj și credibilitate, fără imagini artificiale sau animații: Google Ads, Meta Ads, TikTok Ads, website, tracking și ofertă.
- Patru carduri de încredere, dimensionate unitar: **Google Premier Partner**, **Meta Business Partner**, **20+ proiecte** și **50+ conturi publicitare administrate**, cu accent pe administrarea bugetelor lunare Google, Meta și TikTok.
- Pe mobil, după începerea derulării, apar **două butoane fixe**: sus apel direct, jos „Cerere ofertă”. Butonul de ofertă deschide `/contact/#formular`.
- Conținutul se citește vertical și are proporții tipografice consistente: probleme ale clienților, servicii, industrii, proces în 4 etape, portofoliu, pachete, FAQ, formular.
- Șapte pagini SEO distincte, cu conținut propriu, explicații practice, metadata, canonical, breadcrumbs, FAQ și date structurate existente păstrate.


## Ajustări v26

- Mesaj comercial nou sub cele șase servicii, cu legătură directă spre formular. Explicația despre paginile SEO distincte a fost scoasă de pe homepage; URL-urile separate se păstrează.
- Patru situații rescrise în limbaj clar, cu click-uri, calificarea cererilor, măsurarea conversiilor și optimizarea paginilor.
- Al patrulea card din hero afișează **50+ conturi publicitare administrate** și descrie administrarea bugetelor lunare pe **Google Ads, Meta Ads și TikTok Ads**. Nu prezintă sume în lei neverificate.
- Logo-ul principal, cardurile, tipografia și interacțiunile au fost rafinate pentru desktop și mobil.

## Indicatorii publicați — important

Pe prima pagină sunt afișate **20+ proiecte realizate** și **50+ conturi publicitare administrate**, cifre comunicate de proprietar. Confirmă-le înainte de publicare. Nu afișăm sume în lei, costuri pe lead sau creșteri de vânzări fără date verificabile. Cardul descrie activitatea de administrare lunară a bugetelor pentru Google Ads, Meta Ads și TikTok Ads.

## Instalare în GitHub / Vercel

1. Extrage ZIP-ul; încarcă **conținutul** în rădăcina repository-ului. `package.json` trebuie să fie direct lângă `app/` și `components/`.
2. În Vercel setează **Framework = Next.js**, **Root Directory = `./`** (doar dacă `package.json` este chiar în rădăcina repository-ului).
3. Configurează `NEXT_PUBLIC_SITE_URL` pentru domeniul canonic real. Configurează variabilele SMTP potrivit `.env.example`; nu încărca parolele în GitHub.
4. Confirmă datele de încredere afișate în carduri și dreptul de utilizare a badge-urilor.
5. Testează formularul de contact, butonul `tel:`, meniul mobil, butonul fix de ofertă, Search Console, sitemap, GTM și GA4 într-un deployment Preview.
6. Publică abia după verificările juridice, SEO, de date și de design pe mobil.

## Logo-uri, parteneriate și portofoliu

Insignele Google Premier Partner și Meta Business Partner sunt **fișierele furnizate de utilizator**. Afișează-le numai dacă firma are statutul și dreptul de utilizare necesare. Nu am preluat recenzii, logo-uri, cifre de performanță sau cod de la EpicAds.

Sigla Google Ads din imaginea încărcată este în `public/brands/google-ads-original-user.webp`. Portofoliul include siglele locale originale disponibile pentru Enjoy Driving, Fire Stop și MedDev; unde nu există încă siglă locală este folosit faviconul public al domeniului.

## Verificări și limite

`preview/index.html` este **o machetă statică** a paginii principale, pentru verificarea designului, și nu reprezintă build-ul Next.js real. Am verificat vizual macheta la 1440 px, 390 px și 320 px, inclusiv butoanele fixe de mobil. Verificarea completă `next build`/Vercel și testarea reală a formularului rămân obligatorii înainte de lansare.

Păstrează URL-urile paginilor indexate; la migrare folosește redirecturi 301 doar când este necesar. Vezi `SEO-LANSARE.md`.


## Aranjare și SEO v26

- Pe toate paginile individuale de servicii, descrierile lungi din „Ce urmărim”, „Detalii care contează” și „În practică” sunt așezate **sub titlu**, cu lățime controlată pe desktop și mobil. Și FAQ-ul este organizat într-un flux vertical.
- Am clarificat titlurile intermediare, păstrat cele șapte URL-uri și adăugat marcajul `WebPage` alături de `Service` și `BreadcrumbList`.
- Deployment-urile Vercel Preview sunt `noindex`/robots disallow; producția folosește domeniul specificat prin `NEXT_PUBLIC_SITE_URL`.
- FAQPage nu garantează rezultate extinse în Google pentru site-urile obișnuite de agenție.
- Detalii și verificări în `SEO-LANSARE.md`.
