'use client';
import {useState} from 'react';
import {PROJECTS} from '@/lib/projects';

export default function ProjectLogoGrid(){
 const [errors,setErrors]=useState<Record<string,number>>({});
 return <div className="portfolio-wall-v9" aria-label="Portofoliu de website-uri realizate">
  {PROJECTS.map(p=>{
    const attempt=errors[p.domain]||0;
    const logo=p.logo || (attempt===0?`https://www.google.com/s2/favicons?domain=${encodeURIComponent(p.domain)}&sz=256`:attempt===1?`https://${p.domain}/favicon.ico`:null);
    return <a href={p.url} key={p.domain} className={`portfolio-logo-v9 ${p.logo?'portfolio-logo-custom':''}`} target="_blank" rel="noopener noreferrer" title={`${p.name} — ${p.domain}`} aria-label={`Deschide website-ul ${p.name}: ${p.domain}`}>
      {logo?<img src={logo} alt={`Siglă ${p.name}`} loading="lazy" decoding="async" onError={()=>setErrors(prev=>({...prev,[p.domain]:attempt+1}))}/>:<strong className="portfolio-fallback-v9">{p.name}</strong>}
      <span className="sr-only">{p.name}</span>
    </a>;
  })}
 </div>;
}
