import BrandMark from '@/components/BrandMark';
import PartnerBadges from '@/components/PartnerBadges';
import {Globe} from 'lucide-react';

export default function JourneyFlow() {
  return (
    <div className="hero14" aria-label="Animație ilustrativă a promovării online">
      <div className="hero14-stage">
        <div className="hero14-arrow-bg" aria-hidden="true" />
        <div className="hero14-blob-bg" aria-hidden="true" />

        <div className="hero14-logo hero14-logo-google"><BrandMark kind="google" size={44} /></div>
        <div className="hero14-logo hero14-logo-meta"><BrandMark kind="meta" size={46} /></div>
        <div className="hero14-logo hero14-logo-tiktok"><BrandMark kind="tiktok" size={54} /></div>

        <div className="hero14-phone">
          <div className="hero14-phone-shell">
            <div className="hero14-notch" />
            <div className="hero14-screen">
              <div className="hero14-google-word"><span>G</span><span>o</span><span>o</span><span>g</span><span>l</span><span>e</span></div>
              <div className="hero14-searchbar"><span>servicii promovare</span><em>⌕</em></div>
              <div className="hero14-tabs"><strong>Toate</strong><span>Imagini</span><span>Videoclipuri</span><span>Știri</span></div>
              <div className="hero14-result-box">
                <small>Sponsorizat</small>
                <div className="hero14-domain"><i /> hardservicesrl.ro</div>
                <h4>Servicii de promovare online pentru firme</h4>
                <p>Google Ads · Meta Ads · TikTok Ads</p>
                <span>Mai multe contacte și vânzări.</span>
              </div>
            </div>
          </div>
        </div>

        <article className="hero14-card hero14-card-left">
          <div className="hero14-badge">Anunț</div>
          <div className="hero14-card-site">companie.ro</div>
          <h4>Produse sau servicii pentru compania ta</h4>
          <p>Reclame create pentru a atrage vizite pe site, apeluri și cereri de ofertă.</p>
        </article>

        <article className="hero14-card hero14-card-right">
          <div className="hero14-right-head"><h4>Rezultate reale</h4><span>↗</span></div>
          <div className="hero14-stat"><div><small>Contacte noi</small><strong>+125%</strong></div><div className="hero14-bars"><i /><i /><i /><i /></div></div>
          <div className="hero14-stat"><div><small>Vizite pe site</small><strong>+87%</strong></div><div className="hero14-bars alt"><i /><i /><i /><i /></div></div>
        </article>

        <div className="hero14-pill"><span>⚡</span> De la reclamă la contact</div>

        <div className="hero14-flow">
          <div className="hero14-step"><div className="hero14-step-icon">📣</div><strong>Reclamă<br />online</strong></div>
          <div className="hero14-sep-arrow">···→</div>
          <div className="hero14-step"><div className="hero14-step-icon">🖥️</div><strong>Vizită<br />pe site</strong></div>
          <div className="hero14-sep-arrow">···→</div>
          <div className="hero14-step"><div className="hero14-step-icon">📄</div><strong>Cerere<br />de contact</strong></div>
          <div className="hero14-sep-arrow">···→</div>
          <div className="hero14-step"><div className="hero14-step-icon">👥</div><strong>Mai multe<br />clienți</strong></div>
        </div>

        <article className="hero14-card hero14-chart">
          <div className="hero14-chart-head"><strong>Performanță campanii</strong><span>↑ +142%</span></div>
          <div className="hero14-graph">
            <div className="hero14-gridline g1" />
            <div className="hero14-gridline g2" />
            <div className="hero14-gridline g3" />
            <div className="hero14-curve">
              <i className="d1" /><i className="d2" /><i className="d3" /><i className="d4" /><i className="d5" /><i className="d6" />
            </div>
          </div>
          <div className="hero14-months"><span>Ian</span><span>Feb</span><span>Mar</span><span>Apr</span><span>Mai</span><span>Iun</span></div>
        </article>

        <div className="hero14-bottom">
          <PartnerBadges small />
          <div className="hero14-divider" />
          <div className="hero14-web"><Globe size={18} /><strong>hardservicesrl.ro</strong></div>
        </div>
      </div>
    </div>
  );
}
