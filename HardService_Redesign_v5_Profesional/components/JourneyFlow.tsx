import {ArrowRight, CheckCircle2, Globe2, PhoneCall, UsersRound} from 'lucide-react';
import BrandMark from '@/components/BrandMark';
import GooglePartnerBadge from '@/components/GooglePartnerBadge';

export default function JourneyFlow(){
  return <div className="journey journey-v5" aria-label="Cum funcționează promovarea de la platforma de reclame până la client">
    <div className="journey-v5-top">
      <div className="journey-v5-label"><span className="live-indicator"/> FLUXUL DE PROMOVARE</div>
      <GooglePartnerBadge compact />
    </div>

    <div className="journey-v5-rail" aria-hidden="true"><span/></div>

    <div className="journey-v5-grid">
      <div className="journey-v5-card">
        <div className="journey-v5-logoRow">
          <BrandMark kind="google" size={28}/>
          <BrandMark kind="meta" size={28}/>
          <BrandMark kind="tiktok" size={28}/>
        </div>
        <strong>1. Promovare</strong>
        <p>Lansăm campanii în Google, Meta și TikTok, în funcție de obiectivul firmei.</p>
      </div>

      <div className="journey-v5-sep"><ArrowRight size={18}/></div>

      <div className="journey-v5-card">
        <div className="journey-v5-icon"><Globe2 size={24}/></div>
        <strong>2. Website</strong>
        <p>Vizitatorul ajunge pe o pagină clară, adaptată pentru apeluri, formulare sau comenzi.</p>
      </div>

      <div className="journey-v5-sep"><ArrowRight size={18}/></div>

      <div className="journey-v5-card">
        <div className="journey-v5-icon"><PhoneCall size={24}/></div>
        <strong>3. Solicitare</strong>
        <p>Măsurăm interacțiunile importante: clic pe telefon, formular sau altă conversie relevantă.</p>
      </div>

      <div className="journey-v5-sep"><ArrowRight size={18}/></div>

      <div className="journey-v5-card journey-v5-card-accent">
        <div className="journey-v5-icon journey-v5-icon-green"><UsersRound size={24}/><CheckCircle2 size={15} className="journey-v5-check"/></div>
        <strong>4. Client</strong>
        <p>Optimizăm în continuare campaniile și paginile, pe baza datelor și rapoartelor.</p>
      </div>
    </div>

    <div className="journey-v5-meta">
      <span><CheckCircle2 size={15}/> Strategie și structură</span>
      <span><CheckCircle2 size={15}/> Website și tracking</span>
      <span><CheckCircle2 size={15}/> Optimizare și raportare</span>
    </div>
  </div>
}
