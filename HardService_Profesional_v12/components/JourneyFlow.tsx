import {ArrowUpRight, Check, CheckCircle2, MousePointerClick, Search} from 'lucide-react';
import PartnerBadges from '@/components/PartnerBadges';

/**
 * Scenariu vizual, nu o căutare Google efectivă și nici o promisiune de rezultate.
 * Toate elementele sunt în flow; fără straturi care acoperă ecranul telefonului.
 */
export default function JourneyFlow() {
  return (
    <div className="journey12" aria-label="Exemplu de căutare Google și contact printr-o reclamă">
      <div className="journey12-header">
        <div className="journey12-header-title"><span className="journey12-status-dot"/> DE LA CĂUTARE LA CLIENT</div>
        <span className="journey12-demo-label">Exemplu demonstrativ</span>
      </div>

      <div className="journey12-stage">
        <div className="journey12-phone-space">
          <div className="journey12-phone" aria-label="Telefon ilustrativ cu un rezultat sponsorizat Google">
            <div className="journey12-phone-camera" aria-hidden="true"/>
            <div className="journey12-phone-screen">
              <div className="journey12-status"><strong>9:41</strong><span>●  ▰  ▮</span></div>
              <div className="journey12-google" aria-label="Google"><span>G</span><span>o</span><span>o</span><span>g</span><span>l</span><span>e</span></div>
              <div className="journey12-searchbar"><Search size={14}/><span className="journey12-searchtext">servicii pentru firmă</span><span className="journey12-searchbtn"><Search size={13}/></span></div>
              <div className="journey12-tabs"><strong>Toate</strong><span>Imagini</span><span>Hărți</span><span>Video</span></div>
              <div className="journey12-result">
                <div className="journey12-source"><span className="journey12-avatar">S</span><span><b>Servicii pentru firme</b><small>companie-exemplu.ro</small></span></div>
                <div className="journey12-sponsored">Sponsorizat</div>
                <div className="journey12-result-title">Servicii profesionale pentru compania ta</div>
                <p>Găsește rapid soluția potrivită. Solicită o ofertă personalizată.</p>
                <div className="journey12-result-cta">Vezi serviciile <ArrowUpRight size={12}/></div>
              </div>
              <div className="journey12-secondary-result"><small>Rezultat organic</small><strong>Servicii și soluții pentru afaceri</strong><span>Informații și detalii despre servicii...</span></div>
            </div>
          </div>
        </div>

        <div className="journey12-story">
          <div className="journey12-story-kicker">CUM FUNCȚIONEAZĂ</div>
          <div className="journey12-step"><span className="journey12-step-icon">01</span><div><strong>Clientul caută</strong><p>Un serviciu de care are nevoie.</p></div></div>
          <div className="journey12-step"><span className="journey12-step-icon">02</span><div><strong>Îți vede reclama</strong><p>Anunțul îl trimite pe site-ul tău.</p></div></div>
          <div className="journey12-step"><span className="journey12-step-icon">03</span><div><strong>Te contactează</strong><p>Prin telefon sau formular.</p></div></div>
          <div className="journey12-success"><span><Check size={17}/></span><div><strong>Cerere de ofertă</strong><small>Obiectivul campaniei</small></div><CheckCircle2 size={18}/></div>
        </div>
      </div>

      <div className="journey12-footer">
        <span className="journey12-footnote"><MousePointerClick size={15}/> Reprezentare vizuală, nu rezultate de căutare reale.</span>
        <PartnerBadges small/>
      </div>
    </div>
  );
}
