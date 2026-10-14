import { ArrowRight, CheckCircle2, PhoneCall, Search, ShieldCheck } from 'lucide-react';
import BrandMark from '@/components/BrandMark';
import PartnerBadges from '@/components/PartnerBadges';

/** Lightweight HTML/CSS illustration, not a real search or live Google result. */
export default function JourneyFlow(){
 return <div className="search-journey" aria-label="Demonstrație: un client caută un serviciu în Google, descoperă o reclamă și contactează firma">
  <div className="search-journey-top">
   <span className="sj-label"><span className="sj-dot"/> CUM AJUNGE CLIENTUL LA TINE</span>
   <span className="sj-channel"><BrandMark kind="google" size={27}/><span>Google Ads</span></span>
  </div>
  <div className="sj-workspace">
   <div className="sj-phone-shell">
    <div className="sj-phone-screen">
     <div className="sj-phone-status"><span>9:41</span><span className="sj-status-bars" aria-hidden="true">● ▰ ▰</span></div>
     <div className="sj-search-header"><span className="sj-google-word"><i>G</i><i>o</i><i>o</i><i>g</i><i>l</i><i>e</i></span></div>
     <div className="sj-search-query"><Search size={15}/><span>servicii curățenie firmă</span><span className="sj-cursor" aria-hidden="true"/></div>
     <div className="sj-result">
      <div className="sj-result-top"><span className="sj-result-avatar">S</span><span><strong>Servicii pentru afacerea ta</strong><small>exemplu-site.ro</small></span><span className="sj-dots">⋮</span></div>
      <p className="sj-ad-label">Sponsorizat · Exemplu de anunț</p>
      <h3>Curățenie profesională pentru firme</h3>
      <p className="sj-ad-description">Servicii dedicate. Cere o ofertă și află detaliile.</p>
      <div className="sj-ad-links"><span>Servicii disponibile</span><span>Cere ofertă</span></div>
     </div>
     <div className="sj-organic-result"><span/><span/><span/></div>
    </div>
    <div className="sj-notch" aria-hidden="true"/>
   </div>
   <div className="sj-floating sj-floating-discovery"><Search size={18}/><span><small>01 · CĂUTARE</small><b>Cineva caută serviciul</b></span></div>
   <div className="sj-floating sj-floating-website"><ArrowRight size={18}/><span><small>02 · SITE</small><b>Ajunge pe pagina ta</b></span></div>
   <div className="sj-floating sj-floating-contact"><PhoneCall size={19}/><span><small>03 · CONTACT</small><b>Sună sau cere ofertă</b></span><CheckCircle2 size={19} className="sj-check"/></div>
  </div>
  <div className="sj-footer"><span><ShieldCheck size={15}/> Exemplu vizual ilustrativ, nu rezultate Google în timp real.</span></div>
  <div className="sj-badges"><PartnerBadges small/></div>
 </div>
}
