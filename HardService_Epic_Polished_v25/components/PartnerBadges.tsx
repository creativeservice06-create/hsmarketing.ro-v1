export default function PartnerBadges({small=false}:{small?:boolean}){
  return <div className={`hs-partners ${small?'hs-partners-small':''}`} aria-label="Insignele de parteneriat furnizate de Hard Service">
    <img src="/badges/google-premier-partner-2026.png" alt="Google Premier Partner 2026" loading="lazy" decoding="async" />
    <img src="/badges/meta-business-partner.png" alt="Meta Business Partner" loading="lazy" decoding="async" />
  </div>
}
