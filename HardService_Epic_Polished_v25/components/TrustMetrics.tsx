import {ArrowUpRight, BarChart3, BriefcaseBusiness} from 'lucide-react';

/** Afișează o cifră lunară numai dacă a fost furnizată și verificată.
 * Fără valoare, cardul prezintă platformele și serviciul, fără sumă inventată.
 */
const monthlyRaw = process.env.NEXT_PUBLIC_MONTHLY_AD_SPEND_RON || '';
const monthlySpend = /^\d+(?:\.\d+)?$/.test(monthlyRaw.trim()) ? Number(monthlyRaw) : 0;
const monthlySpendLabel = Number.isFinite(monthlySpend) && monthlySpend > 0
  ? `${new Intl.NumberFormat('ro-RO', {maximumFractionDigits: 0}).format(monthlySpend)} lei`
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
      <div className="hs24-metric-top"><BarChart3 size={23} strokeWidth={1.9}/><span>BUGETE LUNARE</span></div>
      {monthlySpendLabel
        ? <><strong className="hs24-metric hs24-metric-spend">{monthlySpendLabel}</strong><span className="hs24-metric-description">bugete publicitare administrate lunar</span><span className="hs25-platforms">Google Ads · Meta Ads · TikTok Ads</span></>
        : <><strong className="hs24-metric hs24-metric-alt hs25-platforms-title">Google · Meta · TikTok</strong><span className="hs24-metric-description">Bugete publicitare administrate lunar</span></>}

    </div>
  </div>;
}
