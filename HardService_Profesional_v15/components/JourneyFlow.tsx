import PartnerBadges from '@/components/PartnerBadges';

export default function JourneyFlow() {
  return (
    <div className="hero15" aria-label="Ilustrație principală pentru promovare online">
      <div className="hero15-figure">
        <img
          src="/hero/hero-reference-example.png"
          alt="Ilustrație demonstrativă: căutare Google, rezultate și parcursul de la reclamă la contact"
          className="hero15-image"
        />
        <div className="hero15-bottom-mask" aria-hidden="true" />
        <div className="hero15-badges">
          <PartnerBadges small={false} />
        </div>
      </div>
    </div>
  );
}
