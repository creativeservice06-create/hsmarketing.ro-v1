import {ArrowRight, CheckCircle2, FileText, Globe2, PhoneCall, UsersRound} from 'lucide-react';
import BrandMark from '@/components/BrandMark';

const path='M 95 122 C 188 122 192 58 278 110 S 440 167 512 116 S 671 52 745 116';
export default function JourneyFlow(){return <div className="journey" aria-label="De la reclamă la client: platforme publicitare, website, solicitare și contact">
  <div className="journey-top"><span className="live-indicator"/> CUM AJUNGE O RECLAMĂ LA UN CLIENT <span className="journey-demo">Exemplu ilustrativ</span></div>
  <div className="journey-canvas">
    <svg className="journey-path" viewBox="0 0 840 240" preserveAspectRatio="none" aria-hidden="true">
      <defs><linearGradient id="flow-gradient" x1="0" y1="0" x2="1" y2="0"><stop stopColor="#9BC4FF"/><stop offset=".45" stopColor="#1669F7"/><stop offset="1" stopColor="#65B0FF"/></linearGradient></defs>
      <path d={path} fill="none" stroke="#DCEBFF" strokeWidth="16" strokeLinecap="round"/>
      <path d={path} fill="none" stroke="url(#flow-gradient)" strokeWidth="3.5" strokeDasharray="10 9" strokeLinecap="round" className="flow-dash"/>
      <circle r="8" fill="#1767F3" stroke="#fff" strokeWidth="3" className="flow-dot"><animateMotion dur="8s" repeatCount="indefinite" path={path}/></circle>
    </svg>
    <div className="journey-steps">
      <div className="journey-node"><div className="node-icons"><BrandMark kind="google" size={26}/><BrandMark kind="meta" size={26}/><BrandMark kind="tiktok" size={26}/></div><strong>1. Reclama</strong><span>Ajungi la persoanele potrivite</span></div>
      <div className="journey-arrow"><ArrowRight size={19}/></div>
      <div className="journey-node"><div className="node-symbol blue"><Globe2 size={29}/></div><strong>2. Website</strong><span>Vizitatorul vede oferta ta</span></div>
      <div className="journey-arrow"><ArrowRight size={19}/></div>
      <div className="journey-node"><div className="node-symbol"><PhoneCall size={28}/></div><strong>3. Solicitare</strong><span>Primești apel sau formular</span></div>
      <div className="journey-arrow"><ArrowRight size={19}/></div>
      <div className="journey-node"><div className="node-symbol green"><UsersRound size={29}/><CheckCircle2 className="node-tick" size={18}/></div><strong>4. Client</strong><span>Începi o discuție reală</span></div>
    </div>
  </div>
  <div className="journey-foot"><span><FileText size={15}/> Pași clari</span><span><CheckCircle2 size={15}/> Conversii măsurabile</span><span>Fără promisiuni de rezultate garantate</span></div>
</div>}
