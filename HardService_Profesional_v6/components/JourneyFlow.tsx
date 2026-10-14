import BrandMark from '@/components/BrandMark';
import PartnerBadges from '@/components/PartnerBadges';
const stages=[['01','Reclama','Google · Meta · TikTok'],['02','Vizitatorul','Ajunge pe site'],['03','Contactul','Sună sau scrie'],['04','Clientul','Începe colaborarea']];
export default function JourneyFlow(){
 return <div className="journey-snake">
  <div className="snake-top"><span>DE LA RECLAMĂ LA CLIENT</span><span className="snake-platforms"><BrandMark kind="google" size={27}/><BrandMark kind="meta" size={32}/><BrandMark kind="tiktok" size={27}/></span></div>
  <svg className="snake-line" viewBox="0 0 660 180" preserveAspectRatio="none" aria-hidden="true">
   <path id="snakeRoute" d="M36 105 C 115 18, 205 18, 260 103 S 408 180, 472 103 S 580 20, 624 103" fill="none" stroke="#dce8f9" strokeWidth="10" strokeLinecap="round"/>
   <path d="M36 105 C 115 18, 205 18, 260 103 S 408 180, 472 103 S 580 20, 624 103" fill="none" stroke="#2876e8" strokeWidth="3" strokeDasharray="8 10" strokeLinecap="round"/>
   <circle r="7" fill="#1769e9" stroke="white" strokeWidth="3"><animateMotion dur="7s" repeatCount="indefinite" path="M36 105 C 115 18, 205 18, 260 103 S 408 180, 472 103 S 580 20, 624 103"/></circle>
  </svg>
  <div className="snake-steps">{stages.map(([n,title,subtitle])=><div key={n} className="snake-step"><span className="snake-index">{n}</span><strong>{title}</strong><small>{subtitle}</small></div>)}</div>
  <div className="snake-partners"><span>Parteneriate &amp; expertiză</span><PartnerBadges/></div>
 </div>
}
