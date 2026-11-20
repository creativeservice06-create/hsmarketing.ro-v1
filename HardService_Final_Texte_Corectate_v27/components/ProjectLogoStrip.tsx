import Link from 'next/link';
import {ArrowRight} from 'lucide-react';
import {PROJECTS} from '@/lib/projects';

// Bandă sub Hero: siglele proiectelor (cele cu siglă salvată local) rulează automat pe un singur rând.
// Click pe orice siglă duce la secțiunea Portofoliu (#proiecte).
const COPIES=4; // lista se repetă ca banda să fie mereu plină; animația mută jumătate din ea (2 copii)

export default function ProjectLogoStrip(){
 const items=PROJECTS.filter(p=>p.logo);
 return <section className="hs-logo-strip" aria-label="Proiecte realizate"><div className="container hs-logo-strip-inner">
  <span className="hs-logo-strip-label">Proiecte realizate</span>
  <div className="hs-logo-strip-viewport">
   <div className="hs-logo-strip-track">
    {Array.from({length:COPIES}).flatMap((_,c)=>items.map(p=>
     <Link key={`${c}-${p.domain}`} href="/#proiecte" className="hs-logo-strip-item" title={`${p.name} — vezi portofoliul`} aria-hidden={c>0?true:undefined} tabIndex={c>0?-1:undefined} aria-label={c===0?`${p.name} — vezi portofoliul`:undefined}>
      <img src={p.logo} alt="" loading="lazy" decoding="async"/>
     </Link>
    ))}
   </div>
  </div>
  <Link href="/#proiecte" className="hs-logo-strip-link">Vezi tot portofoliul <ArrowRight size={16}/></Link>
 </div></section>;
}
