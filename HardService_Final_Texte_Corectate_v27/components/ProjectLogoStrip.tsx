import Link from 'next/link';
import {ArrowRight} from 'lucide-react';
import {PROJECTS} from '@/lib/projects';

// Bandă scurtă sub Hero: proiectele cu siglă salvată local, în ordinea din portofoliu.
export default function ProjectLogoStrip(){
 const items=PROJECTS.filter(p=>p.logo).slice(0,5);
 return <section className="hs-logo-strip" aria-label="Proiecte realizate"><div className="container hs-logo-strip-inner">
  <span className="hs-logo-strip-label">Proiecte realizate</span>
  <div className="hs-logo-strip-logos">
   {items.map(p=><a key={p.domain} href={p.url} target="_blank" rel="noopener noreferrer" title={`${p.name} — ${p.domain}`} aria-label={`Deschide website-ul ${p.name}: ${p.domain}`}>
    <img src={p.logo} alt={`Siglă ${p.name}`} loading="lazy" decoding="async"/>
   </a>)}
  </div>
  <Link href="/#proiecte" className="hs-logo-strip-link">Vezi tot portofoliul <ArrowRight size={16}/></Link>
 </div></section>;
}
