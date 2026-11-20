import Link from 'next/link';
import {PROJECTS} from '@/lib/projects';

// Bandă sub Hero: siglele proiectelor (cele cu siglă salvată local) rulează automat pe un singur rând.
// Click pe orice siglă duce la secțiunea Portofoliu (#proiecte).
const COPIES=6; // lista se repetă ca banda să fie plină și pe ecrane foarte late; animația mută jumătate din ea

export default function ProjectLogoStrip(){
 const items=PROJECTS.filter(p=>p.logo);
 return <section className="hs-logo-strip" aria-label="Proiecte realizate">
  <div className="hs-logo-strip-viewport">
   <div className="hs-logo-strip-track">
    {Array.from({length:COPIES}).flatMap((_,c)=>items.map(p=>
     <Link key={`${c}-${p.domain}`} href="/#proiecte" className="hs-logo-strip-item" title={`${p.name} — vezi portofoliul`} aria-hidden={c>0?true:undefined} tabIndex={c>0?-1:undefined} aria-label={c===0?`${p.name} — vezi portofoliul`:undefined}>
      <img src={p.logo} alt="" loading="lazy" decoding="async"/>
     </Link>
    ))}
   </div>
  </div>
 </section>;
}
