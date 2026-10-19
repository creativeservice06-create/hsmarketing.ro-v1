
import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { SITE } from '@/lib/site';
import { CookiePreferencesButton } from '@/components/CookieConsent';

export const metadata: Metadata = {
  title: 'Politica de cookie-uri',
  description:
    'Informații despre cookie-urile utilizate pe hsmarketing.ro și despre gestionarea preferințelor pentru statistici și marketing.',
  alternates: {
    canonical: '/politica-cookie-uri/',
  },
};

export default function CookiePolicyPage() {
  return (
    <>
      <Header />

      <main className="legal-page">
        <div className="container legal-body">
          <h1>Politica de cookie-uri</h1>

          <p>
            La Hard Service respectăm confidențialitatea
            vizitatorilor. Această pagină explică modul în care
            website-ul hsmarketing.ro utilizează cookie-uri și
            alte tehnologii de stocare sau măsurare.
          </p>

          <p>
            <strong>Ultima actualizare:</strong> 19 octombrie 2026
          </p>

          <h2>1. Ce sunt cookie-urile?</h2>

          <p>
            Cookie-urile sunt fișiere mici salvate de browser
            pe dispozitivul utilizatorului. Acestea pot
            susține funcționarea unui website, reține
            anumite preferințe sau permite măsurarea
            utilizării paginilor.
          </p>

          <p>
            Website-urile pot utiliza și tehnologii similare,
            precum localStorage, care păstrează informații
            direct în browser.
          </p>

          <h2>2. Ce categorii utilizăm?</h2>

          <h3>Cookie-uri și tehnologii necesare</h3>

          <p>
            Acestea sunt utilizate pentru funcționarea
            website-ului, securitate și păstrarea
            preferințelor privind consimțământul.
          </p>

          <p>
            Alegerea vizitatorului privind cookie-urile este
            salvată local în browser prin cheia{' '}
            <strong>hs-cookie-preferences-v1</strong>,
            utilizând localStorage.
          </p>

          <p>
            Preferința este valabilă maximum 180 de zile,
            după care vizitatorului i se poate solicita
            din nou alegerea.
          </p>

          <h3>Statistici și analiză</h3>

          <p>
            Cu acordul vizitatorului, putem utiliza instrumente
            de analiză pentru a înțelege modul în care este
            folosit website-ul: pagini vizitate, interacțiuni
            și performanța generală.
          </p>

          <p>
            În funcție de configurarea efectivă, aceste
            instrumente pot include Google Analytics 4,
            prin Google Tag Manager, și Vercel Analytics.
          </p>

          <h3>Marketing și publicitate</h3>

          <p>
            Cu acordul vizitatorului, pot fi activate
            tehnologii care ajută la măsurarea conversiilor
            și evaluarea eficienței campaniilor publicitare.
          </p>

          <p>
            În funcție de tag-urile instalate, furnizorii
            pot include Google Ads, Meta sau TikTok.
            Aceste integrări nu sunt considerate active
            doar pentru că sunt menționate în această politică.
          </p>

          <h2>3. Cum funcționează consimțământul?</h2>

          <p>
            La prima vizită, website-ul afișează un banner
            prin care poți accepta, respinge sau personaliza
            utilizarea tehnologiilor opționale.
          </p>

          <ul>
            <li>
              <strong>Doar esențiale:</strong> nu activează
              categoriile opționale.
            </li>
            <li>
              <strong>Accept toate:</strong> permite categoriile
              de statistici și marketing.
            </li>
            <li>
              <strong>Personalizează:</strong> permite alegerea
              separată a categoriilor opționale.
            </li>
          </ul>

          <p>
            Refuzarea tehnologiilor opționale nu împiedică
            accesarea paginilor sau trimiterea unei solicitări
            prin formularul de contact.
          </p>

          <h2>4. Cum modifici preferințele?</h2>

          <p>
            Poți modifica oricând alegerea inițială.
            Apasă butonul de mai jos pentru a redeschide
            setările de consimțământ.
          </p>

          <div className="legal-note">
            <CookiePreferencesButton />
          </div>

          <p>
            Retragerea consimțământului oprește încărcarea
            ulterioară a tehnologiilor opționale controlate
            prin sistemul de consimțământ al site-ului.
          </p>

          <p>
            Cookie-urile deja stocate pot necesita ștergerea
            din setările browserului. Retragerea
            consimțământului nu afectează legalitatea
            prelucrărilor efectuate anterior retragerii.
          </p>

          <h2>5. Ce servicii externe pot fi implicate?</h2>

          <p>
            În funcție de configurarea activă și de
            preferințele vizitatorului, website-ul poate
            utiliza servicii precum:
          </p>

          <ul>
            <li>
              <strong>Vercel:</strong> găzduire,
              funcționare tehnică și eventuale statistici.
            </li>
            <li>
              <strong>Google Tag Manager:</strong> gestionarea
              integrărilor pentru analiză și marketing.
            </li>
            <li>
              <strong>Google Analytics:</strong> analiza
              traficului, dacă este activat.
            </li>
            <li>
              <strong>Google Ads:</strong> măsurarea
              conversiilor, dacă este configurată.
            </li>
            <li>
              <strong>Meta și TikTok:</strong> măsurarea
              campaniilor, numai dacă sunt instalate
              integrările corespunzătoare.
            </li>
          </ul>

          <p>
            Cookie-urile, identificatorii și perioadele
            de păstrare pot diferi în funcție de serviciile
            activate efectiv și de setările furnizorilor.
          </p>

          <h2>6. Cum controlezi cookie-urile din browser?</h2>

          <p>
            Majoritatea browserelor permit vizualizarea,
            blocarea sau ștergerea cookie-urilor și
            a informațiilor stocate local.
          </p>

          <p>
            Aceste opțiuni sunt disponibile de regulă în
            secțiunile „Confidențialitate”, „Securitate”
            sau „Datele site-urilor” din setările browserului.
          </p>

          <p>
            Dezactivarea unor tehnologii necesare poate
            afecta anumite funcționalități ale website-ului.
          </p>

          <h2>7. Protecția datelor personale</h2>

          <p>
            Informațiile colectate prin instrumentele de
            analiză și marketing pot constitui date
            personale în sensul legislației aplicabile.
          </p>

          <p>
            Pentru detalii despre operator, temeiurile
            prelucrării, destinatarii datelor și drepturile
            tale, consultă{' '}
            <Link href="/politica-confidentialitate/">
              Politica de confidențialitate
            </Link>.
          </p>

          <h2>8. Contact</h2>

          <p>
            Pentru întrebări privind utilizarea
            cookie-urilor, poți contacta{' '}
            <strong>{SITE.legalName}</strong> prin{' '}
            <Link href="/contact/">
              formularul de contact
            </Link>{' '}
            sau telefonic la{' '}
            <a href={SITE.phoneHref}>{SITE.phone}</a>.
          </p>

          <h2>9. Actualizarea politicii</h2>

          <p>
            Această politică poate fi modificată atunci când
            apar schimbări în tehnologiile utilizate,
            configurarea website-ului sau legislația
            aplicabilă.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
