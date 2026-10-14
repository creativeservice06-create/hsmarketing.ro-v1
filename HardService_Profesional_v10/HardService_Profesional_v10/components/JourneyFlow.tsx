import {CheckCircle2, PhoneCall, Search, MousePointer2, UserRound, MessageSquareText} from 'lucide-react';
import PartnerBadges from '@/components/PartnerBadges';

/** Demonstrație vizuală inspirată de fluxul din Sinaps; nu reprezintă rezultate Google reale. */
export default function JourneyFlow(){
 return <div className="search-demo-v10" aria-label="Demonstrație: clientul caută pe Google, vede un anunț și trimite o solicitare">
   <div className="search-demo-v10-label"><span className="sj-dot"/> EXEMPLU ILUSTRATIV: DE LA CĂUTARE LA SOLICITARE</div>
   <div className="search-stage-v10">
     <div className="search-float-card-v10 profile-card-v10">
        <div className="profile-avatar-v10">HS</div>
        <div>
          <strong>Hard Service</strong>
          <small>Google Ads • Meta Ads • TikTok Ads</small>
        </div>
     </div>
     <div className="search-float-card-v10 ad-card-v10" aria-label="Exemplu de anunț sponsorizat">
       <div className="ad-badge-v10">Anunț</div>
       <div className="ad-site-v10">www.hardservicesrl.ro</div>
       <strong>Promovare online pentru firme | Google Ads, Meta Ads</strong>
       <p>Campanii, website și optimizare pentru contacte și vânzări. Cere o ofertă clară.</p>
       <span><MousePointer2 size={15}/> Intră pe site</span>
     </div>
     <div className="search-phone-v10">
       <div className="search-phone-shell-v10">
         <div className="search-phone-camera-v10" aria-hidden="true"/>
         <div className="search-phone-inner-v10">
           <div className="search-mobile-status-v10"><b>9:41</b><span>◔◔ ◼</span></div>
           <div className="search-google-v10" aria-label="Google"><span>G</span><span>o</span><span>o</span><span>g</span><span>l</span><span>e</span></div>
           <div className="search-field-v10"><Search size={15}/><span className="search-query-v10">agenție google ads brașov</span><span className="search-mic-v10">⌕</span></div>
           <div className="search-tabs-v10"><strong>TOATE</strong><span>IMAGINI</span><span>HĂRȚI</span><span>SITE-URI</span></div>
           <div className="search-result-v10 sponsored-v10">
             <div className="result-head-v10"><span className="result-fav-v10">HS</span><span><b>Hard Service</b><small>hardservicesrl.ro · Anunț</small></span></div>
             <strong className="result-title-v10">Administrare Google Ads și promovare online pentru firme</strong>
             <p>Campanii pentru căutări relevante, website și optimizare pentru apeluri și formulare.</p>
           </div>
           <div className="search-result-v10"><strong>Creare website și landing page</strong><p>Pagini clare, rapide și pregătite pentru promovare.</p></div>
           <div className="search-result-v10"><strong>Facebook Ads și TikTok Ads</strong><p>Strategie, creativ și raportare pentru promovare constantă.</p></div>
         </div>
       </div>
     </div>
     <div className="search-float-card-v10 message-card-v10">
        <div className="message-icon-v10"><MessageSquareText size={18}/></div>
        <div>
          <strong>Solicitare nouă</strong>
          <small>Apel telefonic sau formular de contact</small>
        </div>
        <CheckCircle2 size={18}/>
     </div>
   </div>
   <div className="search-demo-v10-note"><PhoneCall size={15}/> Flux demonstrativ: căutare → anunț → vizită pe site → contact.</div>
   <div className="search-demo-v10-partners"><PartnerBadges small/></div>
 </div>;
}
