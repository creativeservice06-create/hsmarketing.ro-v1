import BrandMark from '@/components/BrandMark';
import PartnerBadges from '@/components/PartnerBadges';
import {Globe} from 'lucide-react';

/** Ilustrație demonstrativă: inspirată de un concept modern de prezentare Google Ads; nu reprezintă rezultate reale. */
export default function JourneyFlow(){
  return <div className="hero13" aria-label="Demonstrație ilustrativă a traseului de la căutare la contact">
    <div className="hero13-canvas">
      <div className="hero13-bg-arrow" aria-hidden="true"/>
      <div className="hero13-bg-blob" aria-hidden="true"/>

      <div className="hero13-floating hero13-gads"><BrandMark kind="google" size={46}/></div>
      <div className="hero13-floating hero13-meta"><BrandMark kind="meta" size={54}/></div>
      <div className="hero13-floating hero13-tiktok"><BrandMark kind="tiktok" size={62}/></div>

      <div className="hero13-phone">
        <div className="hero13-phone-shell">
          <div className="hero13-notch"/>
          <div className="hero13-screen">
            <div className="hero13-google"><span>G</span><span>o</span><span>o</span><span>g</span><span>l</span><span>e</span></div>
            <div className="hero13-search"><span className="hero13-query">servicii promovare</span><span className="hero13-search-btn">⌕</span></div>
            <div className="hero13-tabs"><strong>Toate</strong><span>Imagini</span><span>Videoclipuri</span><span>Știri</span></div>

            <div className="hero13-result">
              <small className="hero13-sponsored">Sponsorizat</small>
              <div className="hero13-domain"><span className="hero13-dot"/> hardservicesrl.ro</div>
              <h4>Servicii de promovare online pentru firme</h4>
              <p>Google Ads · Meta Ads · TikTok Ads</p>
              <span>Mai multe contacte și vânzări.</span>
            </div>
          </div>
        </div>
      </div>

      <article className="hero13-card hero13-ad-card">
        <small className="hero13-ad-badge">Anunț</small>
        <div className="hero13-ad-site">companie.ro</div>
        <h4>Produse sau servicii pentru compania ta</h4>
        <p>Reclame create pentru a atrage vizite pe site, apeluri și cereri de ofertă.</p>
      </article>

      <article className="hero13-card hero13-metrics-card">
        <div className="hero13-card-head"><h4>Rezultate reale</h4><span>↗</span></div>
        <div className="hero13-metric"><div><small>Contacte noi</small><strong>+125%</strong></div><div className="hero13-bars"><i/><i/><i/><i/></div></div>
        <div className="hero13-metric"><div><small>Vizite pe site</small><strong>+87%</strong></div><div className="hero13-bars alt"><i/><i/><i/><i/></div></div>
      </article>

      <div className="hero13-pill"><span>⚡</span> De la reclamă la contact</div>

      <section className="hero13-flow-panel">
        <div className="hero13-step"><span className="hero13-icon">📣</span><strong>Reclamă<br/>online</strong></div>
        <span className="hero13-arrow">···→</span>
        <div className="hero13-step"><span className="hero13-icon">🖥️</span><strong>Vizită<br/>pe site</strong></div>
        <span className="hero13-arrow">···→</span>
        <div className="hero13-step"><span className="hero13-icon">📄</span><strong>Cerere<br/>de contact</strong></div>
        <span className="hero13-arrow">···→</span>
        <div className="hero13-step"><span className="hero13-icon">👥</span><strong>Mai multe<br/>clienți</strong></div>
      </section>

      <article className="hero13-card hero13-chart-card">
        <div className="hero13-chart-head"><strong>Performanță campanii</strong><span>↑ +142%</span></div>
        <div className="hero13-chart-grid">
          <div className="hero13-chart-lines"><b/><b/><b/></div>
          <div className="hero13-chart-path"><i className="p1"/><i className="p2"/><i className="p3"/><i className="p4"/><i className="p5"/><i className="p6"/></div>
        </div>
        <div className="hero13-months"><span>Ian</span><span>Feb</span><span>Mar</span><span>Apr</span><span>Mai</span><span>Iun</span></div>
      </article>

      <div className="hero13-footer-strip">
        <PartnerBadges small/>
        <span className="hero13-sep"/>
        <div className="hero13-domain-mark"><Globe size={20}/><strong>hardservicesrl.ro</strong></div>
      </div>
    </div>
  </div>;
}
