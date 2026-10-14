import {CheckCircle2, MapPin, Search, PhoneCall, ArrowUpRight} from 'lucide-react';
import PartnerBadges from '@/components/PartnerBadges';

/** Visual demonstration of an example sponsored result — not a live or actual Google SERP. */
export default function JourneyFlow(){
 return <div className="search-demo-v9" aria-label="Demonstrație vizuală: un client caută servicii pe Google, vede un anunț și solicită o ofertă">
   <div className="search-demo-v9-label"><span className="sj-dot"/> DIN CĂUTARE, DIRECT SPRE CONTACT</div>
   <div className="search-stage-v9">
     <div className="search-phone-v9">
       <div className="search-phone-camera-v9" aria-hidden="true"/>
       <div className="search-phone-inner-v9">
         <div className="search-mobile-status-v9"><b>9:41</b><span>◖◖ ◼</span></div>
         <div className="search-google-v9" aria-label="Google"><span>G</span><span>o</span><span>o</span><span>g</span><span>l</span><span>e</span></div>
         <div className="search-field-v9"><Search size={15}/><span className="search-query-v9">firmă curățenie birouri</span><span className="search-mic-v9">⌕</span></div>
         <div className="search-tabs-v9"><strong>Toate</strong><span>Imagini</span><span>Hărți</span><span>Video</span></div>
         <div className="search-result-phone-v9">
           <div className="search-result-site-v9"><span className="search-favicon-v9">H</span><span><strong>Servicii pentru firme</strong><small>exemplu.ro · Anunț</small></span></div>
           <strong className="search-result-title-v9">Curățenie profesională în București</strong>
           <p>Servicii de curățenie pentru spații comerciale. Consultanță și oferte adaptate.</p>
           <span className="search-phone-link-v9">Cere ofertă <ArrowUpRight size={13}/></span>
         </div>
         <div className="search-result-phone-v9 search-organic-v9"><strong>Servicii de curățenie pentru firme</strong><p>Descoperă soluții pentru spații profesionale...</p></div>
         <div className="search-result-phone-v9 search-organic-v9"><strong>Curățenie birouri și spații comerciale</strong><p>Mai multe informații și opțiuni de contact...</p></div>
       </div>
     </div>
     <div className="search-float-result-v9" aria-label="Exemplu de anunț sponsorizat">
       <div className="search-float-heading-v9"><span>Promovat</span><span className="search-float-dot-v9">●</span><strong>www.exemplu.ro</strong></div>
       <strong className="search-float-title-v9">Servicii de curățenie pentru firme | Cere o ofertă</strong>
       <p>Curățenie profesională pentru birouri și spații comerciale. Solicită o ofertă personalizată.</p>
       <span className="search-float-action-v9"><PhoneCall size={16}/> Solicită ofertă <ArrowUpRight size={15}/></span>
     </div>
     <div className="search-float-conversion-v9"><CheckCircle2 size={21}/><span><strong>Solicitare trimisă</strong><small>Formular sau apel telefonic</small></span></div>
   </div>
   <div className="search-demo-v9-bottom"><span><MapPin size={15}/> Exemplu ilustrativ, nu rezultate Google în timp real.</span></div>
   <div className="search-demo-v9-partners"><PartnerBadges small/></div>
 </div>;
}
