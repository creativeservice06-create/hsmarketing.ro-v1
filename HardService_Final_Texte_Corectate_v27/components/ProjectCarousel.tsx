'use client';
import {useRef,useState} from 'react';
import {ArrowLeft,ArrowRight,ExternalLink} from 'lucide-react';
import {PROJECTS} from '@/lib/projects';

export default function ProjectCarousel(){
 const track=useRef<HTMLDivElement>(null);
 const [atStart,setAtStart]=useState(true);
 const [atEnd,setAtEnd]=useState(false);
 const [logoErrors,setLogoErrors]=useState<Record<string,number>>({});
 const advance=(direction:number)=>{const el=track.current;if(!el)return;const card=el.querySelector<HTMLElement>('.project-v7-card');const distance=card?card.getBoundingClientRect().width+20:340;el.scrollBy({left:distance*direction,behavior:'smooth'});};
 const refresh=()=>{const el=track.current;if(!el)return;setAtStart(el.scrollLeft<8);setAtEnd(el.scrollLeft+el.clientWidth>=el.scrollWidth-8)};
 return <div className="project-v7-wrap">
   <div className="project-v7-controls"><span>{PROJECTS.length} proiecte din portofoliu</span><div className="project-v7-nav"><button type="button" onClick={()=>advance(-1)} disabled={atStart} aria-label="Proiecte anterioare"><ArrowLeft size={20}/></button><button type="button" onClick={()=>advance(1)} disabled={atEnd} aria-label="Proiecte următoare"><ArrowRight size={20}/></button></div></div>
   <div ref={track} className="project-v7-track" onScroll={refresh} tabIndex={0} aria-label="Carusel proiecte realizate">
    {PROJECTS.map((pr,index)=>{
      const attempt=logoErrors[pr.domain]??0;
      const url=attempt===0?`https://${pr.domain}/favicon.ico`:attempt===1?`https://www.google.com/s2/favicons?domain=${pr.domain}&sz=256`:'';
      return <article key={pr.domain} className="project-v7-card">
      <a href={pr.url} target="_blank" rel="noopener noreferrer" className="project-v7-visual" aria-label={`Vizitează ${pr.name}`}>
       <div className="project-v7-logo">
        {url?<img src={url} alt={`Simbolul site-ului ${pr.domain}`} width="72" height="72" loading="lazy" onError={()=>setLogoErrors(m=>({...m,[pr.domain]:attempt+1}))}/>:<strong>{pr.name.slice(0,2).toUpperCase()}</strong>}
       </div>
       <span className="project-v7-category">{pr.category}</span>
       <strong className="project-v7-name">{pr.name}</strong>
       <span className="project-v7-domain">{pr.domain}</span>
      </a>
      <div className="project-v7-content"><p>{pr.description}</p><a href={pr.url} target="_blank" rel="noopener noreferrer">Vezi website-ul <ExternalLink size={16}/></a></div>
      <span className="project-v7-no">{String(index+1).padStart(2,'0')} / {PROJECTS.length}</span>
     </article>})}
   </div>
   <p className="project-v7-note">Identificarea vizuală folosește faviconurile publicate de website-uri; acolo unde nu sunt disponibile, apare o monogramă. Caruselul poate fi derulat și cu mouse-ul sau prin gesturi tactile.</p>
  </div>;
}
