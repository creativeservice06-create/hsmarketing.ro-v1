
import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Politica de confidențialitate',
  description:
    'Află cum Hard Service colectează, utilizează și protejează datele personale transmise prin site-ul hsmarketing.ro.',
  alternates: {
    canonical: '/politica-confidentialitate/',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />

      <main className="legal-page">
        <div className="container legal-body">
          <h1>Politica de confidențialitate</h1>

          <p>
            Protecția datelor tale personale este importantă pentru
            Hard Service. Această politică explică modul în care
            colectăm și prelucrăm informațiile transmise prin
            website-ul hsmarketing.ro, precum și drepturile pe
            care le ai în conformitate cu Regulamentul (UE)
            2016/679 (GDPR).
          </p>

          <p>
            <strong>Ultima actualizare:</strong> 19 octombrie 2026
          </p>

          <h2>1. Cine prelucrează datele personale?</h2>

          <p>
            Operatorul datelor personale este{' '}
            <strong>{SITE.legalName}</strong>, CUI {SITE.cui},
            care operează website-ul hsmarketing.ro sub
            denumirea comercială Hard Service.
          </p>

          <p>
            Pentru întrebări privind prelucrarea datelor
            personale, ne poți contacta prin{' '}
            <Link href="/contact/">formularul de contact</Link>{' '}
            sau telefonic la{' '}
            <a href={SITE.phoneHref}>{SITE.phone}</a>.
          </p>

          <h2>2. Ce date colectăm?</h2>

          <p>
            Când completezi formularul de contact sau soliciți
            o ofertă, putem prelucra următoarele informații:
          </p>

          <ul>
            <li>Numele și prenumele.</li>
            <li>Adresa de email.</li>
            <li>Numărul de telefon.</li>
            <li>Serviciul pentru care soliciți informații.</li>
            <li>Mesajul și alte informații oferite voluntar.</li>
          </ul>

          <p>
            În timpul utilizării website-ului, furnizorii
            tehnici pot prelucra și informații precum adresa
            IP, tipul browserului, momentul accesării sau
            date necesare securității și funcționării site-ului.
          </p>

          <p>
            Te rugăm să nu incluzi în formular informații
            sensibile care nu sunt necesare solicitării tale.
          </p>

          <h2>3. De ce utilizăm aceste date?</h2>

          <p>
            Datele transmise sunt utilizate pentru:
          </p>

          <ul>
            <li>
              Primirea și analizarea solicitărilor de ofertă.
            </li>
            <li>
              Contactarea persoanelor care ne solicită servicii.
            </li>
            <li>
              Pregătirea ofertelor și a propunerilor comerciale.
            </li>
            <li>
              Gestionarea comunicării cu potențialii clienți.
            </li>
            <li>
              Protejarea website-ului împotriva utilizării
              abuzive și a accesului neautorizat.
            </li>
            <li>
              Analizarea traficului și măsurarea campaniilor,
              atunci când aceste tehnologii sunt activate
              pe baza consimțământului.
            </li>
          </ul>

          <h2>4. Temeiul legal al prelucrării</h2>

          <p>
            În funcție de scop, prelucrarea datelor poate avea
            următoarele temeiuri legale:
          </p>

          <ul>
            <li>
              <strong>Art. 6 alin. (1) lit. b) GDPR:</strong>{' '}
              efectuarea demersurilor solicitate înainte de
              încheierea unui contract, precum pregătirea
              unei oferte.
            </li>
            <li>
              <strong>Art. 6 alin. (1) lit. f) GDPR:</strong>{' '}
              interesul legitim privind securitatea website-ului,
              prevenirea abuzurilor și gestionarea comunicărilor,
              în condițiile prevăzute de lege.
            </li>
            <li>
              <strong>Art. 6 alin. (1) lit. a) GDPR:</strong>{' '}
              consimțământul pentru tehnologiile opționale
              de analiză și marketing.
            </li>
          </ul>

          <h2>5. Cui pot fi transmise datele?</h2>

          <p>
            Datele pot fi prelucrate de furnizorii tehnici
            utilizați pentru funcționarea website-ului,
            găzduire, transmiterea emailurilor și securitate.
          </p>

          <p>
            Website-ul este găzduit prin infrastructura
            Vercel, iar solicitările transmise prin formular
            sunt expediate prin serviciul de email configurat
            pentru Hard Service.
          </p>

          <p>
            Dacă vizitatorul acceptă tehnologiile opționale,
            date privind utilizarea site-ului pot fi
            prelucrate și de furnizorii de analiză sau
            publicitate configurați efectiv, cum ar fi
            serviciile Google.
          </p>

          <p>
            În funcție de furnizori, anumite prelucrări pot
            implica transferuri de date în afara Spațiului
            Economic European, în condițiile și cu garanțiile
            prevăzute de legislația aplicabilă.
          </p>

          <h2>6. Cât timp păstrăm datele?</h2>

          <p>
            Datele din solicitările de ofertă sunt păstrate
            pe perioada necesară analizării și soluționării
            cererii. Ulterior, unele informații pot fi
            păstrate atunci când acest lucru este necesar
            pentru îndeplinirea obligațiilor legale sau
            apărarea unor drepturi.
          </p>

          <p>
            Durata concretă depinde de scopul prelucrării,
            existența unei relații contractuale și obligațiile
            legale aplicabile. Datele care nu mai sunt
            necesare trebuie șterse sau anonimizate.
          </p>

          <h2>7. Cum protejăm datele?</h2>

          <p>
            Utilizăm conexiuni HTTPS și măsuri tehnice
            și organizatorice destinate protejării datelor.
            Accesul la informațiile transmise prin formular
            trebuie limitat la persoanele autorizate și
            la furnizorii implicați în furnizarea serviciilor.
          </p>

          <h2>8. Ce drepturi ai?</h2>

          <p>
            În condițiile GDPR, poți beneficia de următoarele
            drepturi:
          </p>

          <ul>
            <li>Dreptul de acces la datele personale.</li>
            <li>Dreptul la rectificarea datelor inexacte.</li>
            <li>Dreptul la ștergerea datelor, când este aplicabil.</li>
            <li>Dreptul la restricționarea prelucrării.</li>
            <li>Dreptul la opoziție, în condițiile legii.</li>
            <li>Dreptul la portabilitatea datelor, când este aplicabil.</li>
            <li>Dreptul de a retrage consimțământul.</li>
            <li>
              Dreptul de a depune o plângere la autoritatea
              competentă pentru protecția datelor.
            </li>
          </ul>

          <p>
            Pentru exercitarea acestor drepturi, trimite-ne
            o solicitare prin{' '}
            <Link href="/contact/">pagina de contact</Link>.
          </p>

          <p>
            De asemenea, te poți adresa Autorității Naționale
            de Supraveghere a Prelucrării Datelor cu Caracter
            Personal (ANSPDCP), prin{' '}
            <a
              href="https://www.dataprotection.ro/"
              target="_blank"
              rel="noopener noreferrer"
            >
              website-ul oficial
            </a>.
          </p>

          <h2>9. Cookie-uri și tehnologii de analiză</h2>

          <p>
            Website-ul poate utiliza tehnologii necesare
            funcționării sale și, cu acordul vizitatorului,
            instrumente pentru analiza traficului și
            măsurarea eficienței reclamelor.
          </p>

          <p>
            Detalii despre categorii, scopuri și modificarea
            preferințelor sunt disponibile în{' '}
            <Link href="/politica-cookie-uri/">
              Politica de cookie-uri
            </Link>.
          </p>

          <h2>10. Actualizarea politicii</h2>

          <p>
            Această politică poate fi actualizată în cazul
            modificării website-ului, a serviciilor utilizate
            sau a cerințelor legale. Versiunea actualizată
            va fi publicată pe această pagină.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
