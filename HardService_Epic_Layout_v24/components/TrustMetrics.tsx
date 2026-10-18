import {ArrowUpRight, BarChart3, BriefcaseBusiness} from 'lucide-react';

/** Only user-provided credentials and user-provided project count are displayed.
 * Never invent an advertising spend amount. To publish a verified total set
 * NEXT_PUBLIC_MANAGED_AD_SPEND_RON at build time.
 */
const rawManagedSpend = process.env.NEXT_PUBLIC_MANAGED_AD_SPEND_RON || '';
const managedSpend = /^\d+(?:\.\d+)?$/.test(rawManagedSpend.trim()) ? Number(rawManagedSpend) : 0;
const managedSpendLabel = Number.isFinite(managedSpend) && managedSpend > 0
  ? `${new Intl.NumberFormat('ro-RO', {maximumFractionDigits: 0}).format(managedSpend)} lei`
  : null;

export default function TrustMetrics() {
  return <div className="hs24-trust-row" aria-label="Parteneriate și date despre proiecte">
    <div className="hs24-trust-card hs24-trust-google">
      <div className="hs24-trust-graphic"><img src="/badges/google-premier-partner-2026.png" width="138" height="74" alt="Insignă Google Premier Partner 2026" /></div>
      <div className="hs24-trust-info"><strong>Google Premier Partner</strong><span>Reclame și optimizare în Google Ads</span></div>
    </div>
    <div className="hs24-trust-card hs24-trust-meta">
      <div className="hs24-trust-graphic"><img src="/badges/meta-business-partner.png" width="160" height="74" alt="Insignă Meta Business Partner" /></div>
      <div className="hs24-trust-info"><strong>Meta Business Partner</strong><span>Facebook și Instagram Ads</span></div>
    </div>
    <div className="hs24-trust-card hs24-trust-projects">
      <div className="hs24-metric-top"><BriefcaseBusiness size={23} strokeWidth={1.9}/><span>PORTOFOLIU</span></div>
      <strong className="hs24-metric">20<span>+</span></strong>
      <span className="hs24-metric-description">proiecte realizate</span>
      <a href="/#proiecte" className="hs24-metric-link">Vezi o selecție <ArrowUpRight size={15}/></a>
    </div>
    <div className="hs24-trust-card hs24-trust-spend">
      <div className="hs24-metric-top"><BarChart3 size={23} strokeWidth={1.9}/><span>CAMPANII</span></div>
      {managedSpendLabel ? <><strong className="hs24-metric hs24-metric-spend">{managedSpendLabel}</strong><span className="hs24-metric-description">bugete publicitare administrate</span></> : <><strong className="hs24-metric hs24-metric-alt">Google · Meta</strong><span className="hs24-metric-description">bugete publicitare administrate</span></>}

    </div>
  </div>;
}
