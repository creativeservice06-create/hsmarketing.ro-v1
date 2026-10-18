# Hard Service v24 — redesign de agenție, orientat spre lead-uri

Proiect **Next.js 15 / React 19** pentru Hard Service. Structura de comunicare a fost studiată comparând agenții PPC precum EpicAds; codul, textele, culorile și elementele grafice rămân proprii Hard Service.

## Ce s-a schimbat

- Prima secțiune este bazată pe mesaj și credibilitate, fără imagini artificiale sau animații: Google Ads, Meta Ads, TikTok Ads, website, tracking și ofertă.
- Patru carduri de încredere, dimensionate unitar: **Google Premier Partner**, **Meta Business Partner**, **20+ proiecte** (conform informației furnizate de proprietar) și **bugete administrate**.
- Pe mobil, după începerea derulării, apar **două butoane fixe**: sus apel direct, jos „Cerere ofertă”. Butonul de ofertă deschide `/contact/#formular`.
- Conținutul se citește vertical și are proporții tipografice consistente: probleme ale clienților, servicii, industrii, proces în 4 etape, portofoliu, pachete, FAQ, formular.
- Șapte pagini SEO distincte, cu conținut propriu, explicații practice, metadata, canonical, breadcrumbs, FAQ și date structurate existente păstrate.

## Publicarea sumei în lei — important

Nu s-a inventat nicio cifră despre bugetele de reclame gestionate. Până la confirmare, al patrulea card indică platformele Google și Meta, fără sumă.

Dacă deții o valoare reală **cumulată** a bugetelor publicitare administrate, verificată din rapoartele conturilor, configurează pe Vercel:

`NEXT_PUBLIC_MANAGED_AD_SPEND_RON=1250000`

Acesta este **doar un exemplu de format**, nu o sumă a Hard Service. Nu publica exemplul ca valoare reală. Reconstruiește deployment-ul după modificarea variabilei. Cardul afișează automat valoarea formatată, de exemplu `1.250.000 lei`. Pentru o valoare lunară ar trebui schimbată explicit eticheta, astfel încât să nu se confunde totalul cu media.

„20+ proiecte” este o informație furnizată de proprietar. Înainte de lansare, confirmă că numărul corespunde proiectelor reale; grila afișează o selecție de proiecte, nu întreaga listă.

## Instalare în GitHub / Vercel

1. Extrage ZIP-ul; încarcă **conținutul** în rădăcina repository-ului. `package.json` trebuie să fie direct lângă `app/` și `components/`.
2. În Vercel setează **Framework = Next.js**, **Root Directory = `./`** (doar dacă `package.json` este chiar în rădăcina repository-ului).
3. Configurează `NEXT_PUBLIC_SITE_URL` pentru domeniul canonic real. Configurează variabilele SMTP potrivit `.env.example`; nu încărca parolele în GitHub.
4. Opțional, configurează `NEXT_PUBLIC_MANAGED_AD_SPEND_RON` **doar cu o valoare verificată**.
5. Testează formularul de contact, butonul `tel:`, meniul mobil, butonul fix de ofertă, Search Console, sitemap, GTM și GA4 într-un deployment Preview.
6. Publică abia după verificările juridice, SEO, de date și de design pe mobil.

## Logo-uri, parteneriate și portofoliu

Insignele Google Premier Partner și Meta Business Partner sunt **fișierele furnizate de utilizator**. Afișează-le numai dacă firma are statutul și dreptul de utilizare necesare. Nu am preluat recenzii, logo-uri, cifre de performanță sau cod de la EpicAds.

Sigla Google Ads din imaginea încărcată este în `public/brands/google-ads-original-user.webp`. Portofoliul include siglele locale originale disponibile pentru Enjoy Driving, Fire Stop și MedDev; unde nu există încă siglă locală este folosit faviconul public al domeniului.

## Verificări și limite

`preview/index.html` este **o machetă statică** a paginii principale, pentru verificarea designului, și nu reprezintă build-ul Next.js real. Am verificat vizual macheta la 1440 px, 390 px și 320 px, inclusiv butoanele fixe de mobil. Verificarea completă `next build`/Vercel și testarea reală a formularului rămân obligatorii înainte de lansare.

Păstrează URL-urile paginilor indexate; la migrare folosește redirecturi 301 doar când este necesar. Vezi `SEO-LANSARE.md`.
