'use client';
import {useState} from 'react';
import {ExternalLink} from 'lucide-react';
import {PROJECTS} from '@/lib/projects';

/** Logos displayed as a clean client wall, using site identity files when reachable.
 * A favicon is a genuine site's own icon, not a fabricated or redrawn mark.
 */
export default function ProjectLogoGrid(){
 const [failed,setFailed]=useState<Record<string,number>>({});
 return <div className="project-logo-wall" aria-label="Website-uri din portofoliu">
  {PROJECTS.map(project=>{
    const n=failed[project.domain]||0;
    const logo=n===0?`https://www.google.com/s2/favicons?domain=${encodeURIComponent(project.domain)}&sz=256`:n===1?`https://${project.domain}/favicon.ico`:'';
    return <a key={project.domain} className="project-logo-tile" href={project.url} target="_blank" rel="noopener noreferrer" aria-label={`Deschide ${project.name} — ${project.domain}`}>
     <div className="project-logo-art">
      {logo?<img src={logo} loading="lazy" decoding="async" alt={`Logo/favicon ${project.name}`} width="86" height="86" onError={()=>setFailed(old=>({...old,[project.domain]:n+1}))}/>:<span className="project-logo-initials" aria-hidden="true">{project.name.split(' ').slice(0,2).map(w=>w[0]).join('').toUpperCase()}</span>}
     </div>
     <span className="project-logo-name">{project.name}</span>
     <span className="project-logo-domain">{project.domain}</span>
     <ExternalLink size={16} className="project-logo-open" aria-hidden="true"/>
    </a>
  })}
 </div>
}
