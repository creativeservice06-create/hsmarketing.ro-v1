# Verificări efectuate — Hard Service v26

## Modificări cerute
- Cardul din hero afișează 50+ conturi publicitare administrate; text despre bugete lunare Google Ads, Meta Ads și TikTok Ads.
- 20+ proiecte rămâne separat.
- Toate introducerile din secțiunile individuale de servicii (cu clasa `hs-section-heading hs-heading-row`) sunt într-o singură coloană, cu explicația imediat sub titlu.
- Stilul FAQ din paginile de servicii urmează o lectură verticală coerentă.

## SEO
- 7 pagini SEO cu H1 și titluri distincte; descrierile meta au 128–140 de caractere.
- WebPage, Service, BreadcrumbList, FAQPage JSON-LD, sitemap și canonical păstrate/adaptate.
- `NEXT_PUBLIC_SITE_URL` trebuie setată la domeniul public exact (fără slash final).
- `VERCEL_ENV=preview` este tratat cu noindex și robots.txt disallow pentru a limita duplicarea paginilor de test.
- Nu există promisiuni de poziții Google sau de câștig garantat.

## Teste efectuate
- Sintaxă TypeScript/TSX: 24 fișiere analizate, fără erori de parsare.
- CSS: fără erori de parsare.
- Capturi pentru homepage la 1440, 390, 320 px și secțiunile Google Ads la 1440/390 px.
- Lățimea de scroll nu depășește viewportul în testele vizuale menționate.

## Teste rămase obligatorii pe deployment
- `npm install` + `npm run build` pe Vercel sau într-un mediu cu toate dependențele.
- Test formular: SMTP, destinatari, erori, verificare GDPR/cookie.
- Validare în Rich Results Test, Search Console și PageSpeed Insights după deploy.
- Confirmarea afirmațiilor 20+ proiecte și 50+ conturi, eligibilitate pentru badge-uri.
- Teste finale pe iOS Safari/Android Chrome și rezolvarea eventualelor erori de rețea.
