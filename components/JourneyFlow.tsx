import {ArrowRight, CheckCircle2, Globe2, PhoneCall, UsersRound} from 'lucide-react';
import BrandMark from '@/components/BrandMark';
import GooglePartnerBadge from '@/components/GooglePartnerBadge';

/** Simple 4-step explanation: lightweight HTML+CSS animation and no heavyweight 3D. */
export default function JourneyFlow(){
  return <div className="journey journey-v4" aria-label="Cum funcționează promovarea online de la reclamă la contact">
    <div className="journey-v4-top"><span className="live-indicator"/> DE LA RECLAMĂ LA CLIENT <GooglePartnerBadge/></div>
    <div className="journey-v4-steps">
      <div className="journey-v4-item"><span className="journey-v4-icon journey-v4-brands"><BrandMark kind="google" size={25}/><BrandMark kind="facebook" size={25}/><BrandMark kind="instagram" size={25}/><BrandMark kind="tiktok" size={28}/></span><b>Reclamă</b><small>Ajungem la publicul potrivit</small></div>
      <span className="journey-v4-arrow"><ArrowRight size={18}/></span>
      <div className="journey-v4-item"><span className="journey-v4-icon"><Globe2 size={27}/></span><b>Website</b><small>Prezentăm clar oferta</small></div>
      <span className="journey-v4-arrow"><ArrowRight size={18}/></span>
      <div className="journey-v4-item"><span className="journey-v4-icon"><PhoneCall size={26}/></span><b>Contact</b><small>Apel sau cerere de ofertă</small></div>
      <span className="journey-v4-arrow"><ArrowRight size={18}/></span>
      <div className="journey-v4-item"><span className="journey-v4-icon green"><UsersRound size={25}/><CheckCircle2 size={15} className="journey-v4-tick"/></span><b>Client</b><small>Începe discuția comercială</small></div>
    </div>
    <div className="journey-v4-line" aria-hidden="true"><span/></div>
    <p className="journey-v4-note">Un proces clar. Rezultatele depind de ofertă, buget și concurență.</p>
  </div>
}
