import {ArrowRight, CheckCircle2, Globe2, PhoneCall, UsersRound} from 'lucide-react';
import BrandMark from '@/components/BrandMark';

const path='M 72 108 C 170 56 250 56 344 108 S 518 160 614 108 S 780 56 864 108';

export default function JourneyFlow(){
  return <div className="journey journey-simple" aria-label="Cum funcționează promovarea: reclama, website, solicitare și client">
    <div className="journey-top"><span className="live-indicator"/> CUM FUNCȚIONEAZĂ <span className="journey-demo">Flux simplificat</span></div>
    <div className="journey-canvas">
      <svg className="journey-path" viewBox="0 0 940 220" preserveAspectRatio="none" aria-hidden="true">
        <path d={path} fill="none" stroke="#DFECFF" strokeWidth="12" strokeLinecap="round"/>
        <path d={path} fill="none" stroke="#196AF6" strokeWidth="3" strokeDasharray="8 10" strokeLinecap="round" className="flow-dash"/>
        <circle r="7" fill="#196AF6" stroke="#fff" strokeWidth="3" className="flow-dot"><animateMotion dur="8s" repeatCount="indefinite" path={path}/></circle>
      </svg>
      <div className="journey-steps">
        <div className="journey-node">
          <div className="node-icons compact-icons"><BrandMark kind="google" size={24}/><BrandMark kind="facebook" size={24}/><BrandMark kind="instagram" size={24}/><BrandMark kind="tiktok" size={24}/></div>
          <strong>1. Reclama</strong><span>Ajungi la persoanele potrivite</span>
        </div>
        <div className="journey-arrow"><ArrowRight size={18}/></div>
        <div className="journey-node"><div className="node-symbol blue"><Globe2 size={28}/></div><strong>2. Website</strong><span>Vizitatorul vede oferta și serviciile</span></div>
        <div className="journey-arrow"><ArrowRight size={18}/></div>
        <div className="journey-node"><div className="node-symbol"><PhoneCall size={27}/></div><strong>3. Solicitare</strong><span>Primești apel sau formular</span></div>
        <div className="journey-arrow"><ArrowRight size={18}/></div>
        <div className="journey-node"><div className="node-symbol green"><UsersRound size={28}/><CheckCircle2 className="node-tick" size={17}/></div><strong>4. Client</strong><span>Începe discuția comercială</span></div>
      </div>
    </div>
    <div className="journey-foot"><span><CheckCircle2 size={15}/> Mesaj clar</span><span><CheckCircle2 size={15}/> Pași ușor de urmărit</span></div>
  </div>
}
