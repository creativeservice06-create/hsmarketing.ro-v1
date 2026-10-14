import BrandMark from '@/components/BrandMark';
import PartnerBadges from '@/components/PartnerBadges';
import {MousePointerClick, Globe2, PhoneCall, UserRoundCheck} from 'lucide-react';

const steps=[
 {label:'Te descoperă',hint:'Reclama potrivită',Icon:MousePointerClick},
 {label:'Intră pe site',hint:'Ofertă convingătoare',Icon:Globe2},
 {label:'Te contactează',hint:'Apel sau formular',Icon:PhoneCall},
 {label:'Devine client',hint:'O colaborare reală',Icon:UserRoundCheck},
];
export default function JourneyFlow(){return <div className="journey-v7" aria-label="Etapele de promovare online">
  <div className="journey-v7-head"><span>UN PROCES SIMPLU</span><div className="journey-v7-platforms" aria-label="Platforme de promovare"><BrandMark kind="google" size={31}/><BrandMark kind="meta" size={35}/><BrandMark kind="tiktok" size={37}/></div></div>
  <div className="journey-v7-path" aria-hidden="true"><span className="journey-v7-moving-dot"/></div>
  <div className="journey-v7-steps">{steps.map(({label,hint,Icon},i)=><div className="journey-v7-step" key={label}>
    <div className="journey-v7-icon"><Icon size={24} strokeWidth={1.8}/><small>{String(i+1).padStart(2,'0')}</small></div>
    <strong>{label}</strong><p>{hint}</p>
  </div>)}</div>
  <div className="journey-v7-partners"><span className="journey-v7-caption">PARTENERIATE</span><PartnerBadges small/></div>
</div>}
