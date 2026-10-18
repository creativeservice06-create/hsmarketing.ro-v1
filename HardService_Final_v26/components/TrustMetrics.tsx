import {ArrowUpRight, BarChart3, BriefcaseBusiness} from 'lucide-react';

/** Datele de mai jos sunt comunicate de firmă. Nu inventăm sume de bugete sau rezultate Ads. */
export default function TrustMetrics() {
  return <div className="hs24-trust-row" aria-label="Parteneriate și activitate Hard Service">
    <div className="hs24-trust-card hs24-trust-google">
      <div className="hs24-trust-graphic"><img src="/badges/google-premier-partner-2026.png" width="138" height="74" alt="Google Premier Partner 2026" /></div>
      <div className="hs24-trust-info"><strong>Google Premier Partner</strong><span>Administrare și optimizare Google Ads</span></div>
    </div>
    <div className="hs24-trust-card hs24-trust-meta">
      <div className="hs24-trust-graphic"><img src="/badges/meta-business-partner.png" width="160" height="74" alt="Meta Business Partner" /></div>
      <div className="hs24-trust-info"><strong>Meta Business Partner</strong><span>Promovare Facebook și Instagram</span></div>
    </div>
    <div className="hs24-trust-card hs24-trust-projects">
      <div className="hs24-metric-top"><BriefcaseBusiness size={23} strokeWidth={1.9}/><span>PORTOFOLIU</span></div>
      <strong className="hs24-metric">20<span>+</span></strong>
      <span className="hs24-metric-description">proiecte realizate</span>
      <a href="/#proiecte" className="hs24-metric-link">Vezi o selecție <ArrowUpRight size={15}/></a>
    </div>
    <div className="hs24-trust-card hs24-trust-spend">
      <div className="hs24-metric-top"><BarChart3 size={23} strokeWidth={1.9}/><span>ADMINISTRARE ADS</span></div>
      <strong className="hs24-metric">50<span>+</span></strong>
      <span className="hs24-metric-description">conturi publicitare administrate</span>
      <span className="hs26-metric-platforms">Bugete administrate lunar</span>
      <span className="hs26-metric-platform-list">Google Ads · Meta Ads · TikTok Ads</span>
    </div>
  </div>;
}
