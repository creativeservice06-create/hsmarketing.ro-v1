import PartnerBadges from '@/components/PartnerBadges';
import BrandMark from '@/components/BrandMark';
import {CheckCircle2, Search, ArrowRight} from 'lucide-react';

/** Ilustrație demonstrativă inspirată de zona hero a site-urilor moderne de marketing; nu reprezintă rezultate reale Google. */
export default function JourneyFlow(){
  return <div className="hero-illustration-v11" aria-label="Demonstrație ilustrativă a modului în care promovarea online aduce contacte noi">
    <div className="hero-illustration-v11-stage">
      <div className="hero-floating-logos-v11" aria-hidden="true">
        <span className="hero-floating-logo-v11"><BrandMark kind="google" size={44}/></span>
        <span className="hero-floating-logo-v11"><BrandMark kind="meta" size={48}/></span>
        <span className="hero-floating-logo-v11 hero-floating-logo-v11-tiktok"><BrandMark kind="tiktok" size={54}/></span>
      </div>

      <div className="hero-phone-v11">
        <div className="hero-phone-shell-v11">
          <div className="hero-phone-notch-v11" />
          <div className="hero-phone-screen-v11">
            <div className="hero-google-title-v11" aria-label="Google"><span>G</span><span>o</span><span>o</span><span>g</span><span>l</span><span>e</span></div>
            <div className="hero-search-v11"><Search size={15}/><span className="hero-search-query-v11">servicii firmă</span><span className="hero-search-icon-v11">⌕</span></div>
            <div className="hero-tabs-v11"><strong>Toate</strong><span>Imagini</span><span>Videoclipuri</span><span>Știri</span></div>
            <article className="hero-result-v11 sponsored">
              <span className="hero-sponsored-v11">Sponsorizat</span>
              <div className="hero-result-site-v11"><span className="hero-result-dot-v11" /> companie.ro</div>
              <h4>Servicii de promovare online pentru firme</h4>
              <p>Google Ads · Meta Ads · TikTok Ads</p>
              <small>Mai multe contacte și vânzări.</small>
            </article>
            <article className="hero-result-v11"><h4>Creare website și pagini de prezentare</h4><p>Pagini clare, rapide și orientate spre conversii.</p></article>
            <article className="hero-result-v11"><h4>Tracking conversii și optimizare</h4><p>Date măsurate corect pentru decizii mai bune.</p></article>
          </div>
        </div>
      </div>

      <article className="hero-card-v11 hero-card-ad-v11">
        <span className="hero-card-badge-v11">Anunț</span>
        <div className="hero-card-site-v11">companie.ro</div>
        <h4>Produse sau servicii pentru compania ta</h4>
        <p>Reclame create pentru a atrage vizite pe site, apeluri și cereri de ofertă.</p>
      </article>

      <article className="hero-card-v11 hero-card-metrics-v11">
        <h4>Rezultate orientative</h4>
        <div className="metric-row-v11"><span>Contacte noi</span><strong>+125%</strong><div className="metric-bars-v11"><i/><i/><i/><i/></div></div>
        <div className="metric-row-v11"><span>Vizite pe site</span><strong>+87%</strong><div className="metric-bars-v11"><i/><i/><i/><i/></div></div>
      </article>

      <div className="hero-pill-v11"><span>⚡</span> De la reclamă la contact</div>

      <div className="hero-flow-panel-v11">
        <div className="hero-flow-step-v11"><span className="hero-flow-icon-v11">📣</span><strong>Reclamă online</strong></div>
        <ArrowRight size={18}/>
        <div className="hero-flow-step-v11"><span className="hero-flow-icon-v11">🖥️</span><strong>Vizită pe site</strong></div>
        <ArrowRight size={18}/>
        <div className="hero-flow-step-v11"><span className="hero-flow-icon-v11">📝</span><strong>Cerere de contact</strong></div>
        <ArrowRight size={18}/>
        <div className="hero-flow-step-v11"><span className="hero-flow-icon-v11">👥</span><strong>Mai mulți clienți</strong></div>
      </div>

      <article className="hero-card-v11 hero-card-chart-v11">
        <div className="hero-chart-head-v11"><strong>Performanță campanii</strong><span><CheckCircle2 size={14}/> +142%</span></div>
        <div className="hero-chart-v11" aria-hidden="true">
          <div className="hero-chart-line-v11"></div>
          <div className="hero-chart-dots-v11"><i/><i/><i/><i/><i/><i/></div>
        </div>
        <div className="hero-chart-months-v11"><span>Ian</span><span>Feb</span><span>Mar</span><span>Apr</span><span>Mai</span><span>Iun</span></div>
      </article>
    </div>
    <div className="hero-illustration-v11-partners"><PartnerBadges small/></div>
  </div>;
}
