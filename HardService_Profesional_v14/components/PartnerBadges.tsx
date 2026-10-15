export default function PartnerBadges({small=false}:{small?:boolean}) {
 return <div className={`official-partners ${small?'official-partners-small':''}`} aria-label="Insigne parteneriat">
  <img src="/badges/meta-business-partner.svg" alt="Meta Business Partner" loading="lazy"/>
  <img src="/badges/google-premier-partner-2026.svg" alt="Google Premier Partner 2026" loading="lazy"/>
 </div>;
}
