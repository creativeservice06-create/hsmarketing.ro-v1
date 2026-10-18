# Checklist SEO — Hard Service

## Înainte de lansare

- [ ] Alege domeniul canonical final și setează `NEXT_PUBLIC_SITE_URL` în Vercel.
- [ ] Verifică meta title, meta description, OG, canonical și titlul H1 pentru homepage și pentru cele 7 servicii.
- [ ] Verifică în Google Search Console proprietatea, indexarea, `robots.txt` și `sitemap.xml`.
- [ ] Asigură-te că paginile SEO actuale nu dispar fără redirect 301. URL-urile existente sunt preferabile unor URL-uri noi fără motiv.
- [ ] Confirmă că nu publici simultan două website-uri cu același conținut pe două domenii indexabile.
- [ ] Testează performanța mobilă (LCP, INP, CLS), imaginile, linkurile interne și formularul.
- [ ] Verifică atributele ALT, numele fișierelor publice și sursele logo-urilor din portofoliu; faviconurile nu înlocuiesc mereu logoul original.
- [ ] Publică politici de confidențialitate și cookie-uri verificate, nu doar modelele inițiale.
- [ ] Verifică măsurarea conversiilor numai după instalarea corectă a bannerului de consimțământ.

## Structura păstrată

| URL | Intenție principală |
| --- | --- |
| `/` | agenție promovare online, administrare Ads și servicii web |
| `/google-ads/` | administrare campanii Google Ads, Search, conversii |
| `/facebook-instagram-ads/` | reclame Facebook și Instagram, lead-uri, Meta Ads |
| `/tiktok-ads/` | administrare TikTok Ads, strategie video |
| `/creare-site/` | creare site de prezentare, landing pages |
| `/magazin-online/` | creare magazin online, e-commerce |
| `/tracking-conversii/` | GA4, GTM și conversii |
| `/seo-tehnic/` | audit SEO tehnic, indexare și performanță |

## Conținut

Paginile au secțiuni specifice despre livrabile, potrivirea serviciului, implementare, rapoarte, exemple, limitări și întrebări frecvente. În v22–v23 sunt păstrate câte un modul editorial pe fiecare serviciu cu decizii și indicatori specifici acelui serviciu (vezi `lib/servicePlaybook.ts`). Evită adăugarea automată de paragrafe repetitive doar pentru densitatea cuvintelor-cheie.

## Afirmații de încredere

Nu folosi recenzii, cifre de performanță, certificări sau rezultate de campanii neconfirmate. Badge-urile apar în site numai cu aprobarea și eligibilitatea firmei. Pentru proiectele din portofoliu, folosește realizări verificabile și acordul pentru sigle acolo unde este necesar.

## După lansare

- [ ] Trimite sitemap în Search Console.
- [ ] Verifică indexarea paginilor după 7–14 zile, apoi lunar.
- [ ] Analizează interogările cu impresii, CTR-ul și paginile care primesc trafic.
- [ ] Actualizează informațiile utile din paginile de servicii și adaugă studii de caz numai cu date verificabile.

**Notă:** SEO îmbunătățește capacitatea site-ului de a fi înțeles și folosit, dar nu garantează o poziție anume în Google.


## Verificare editorială / SEO v26

1. Fiecare pagină trebuie să aibă un H1 descriptiv, un meta-title unic și o descriere relevantă, nu o enumerare forțată de cuvinte-cheie.
2. În paginile de servicii, explicațiile sunt sub titlurile H2, urmate de exemple proprii și informații utile despre proces, costuri și limitele măsurării.
3. Verificați în Search Console indexarea, sitemap-ul, canonical, eventualele pagini duplicate și raportul de interogări; fără date din cont nu se pot face afirmații despre poziții.
4. Testați mobil, PageSpeed Insights, formularele, GTM/consimțământ, linkurile interne și numărul de telefon înainte de lansare.
5. Marcajul FAQPage nu garantează rezultate extinse în Google: acestea sunt în prezent limitate în principal la site-uri guvernamentale și medicale de autoritate.
6. Confirmați cifrele 20+ proiecte și 50+ conturi, precum și dreptul de utilizare a insignelor de parteneriat.

7. Deployments Vercel Preview sunt setate noindex și cu robots.txt restrictiv pentru a evita duplicarea conținutului pe domenii de test. Domeniul de producție trebuie să corespundă exact cu NEXT_PUBLIC_SITE_URL.
