'use client';
import {useState} from 'react';
import Link from 'next/link';
import {ArrowUpRight, Menu, Phone, X, ChevronDown} from 'lucide-react';
import {SERVICES, SITE} from '@/lib/site';

export default function Header(){
  const [menuOpen,setMenuOpen]=useState(false);
  const [servicesOpen,setServicesOpen]=useState(false);
  const close=()=>{setMenuOpen(false);setServicesOpen(false)};
  return <header className="hs-header" id="site-header">
    <div className="container hs-header-inner">
      <Link href="/" className="hs-wordmark" aria-label="Hard Service - pagina principală" onClick={close}>
        <span>HARD <span>SERVICE</span></span><small>MARKETING ONLINE</small>
      </Link>
      <nav id="hs-main-menu" className={`hs-nav ${menuOpen?'hs-nav-open':''}`} aria-label="Navigație principală">
        <Link href="/" onClick={close}>Acasă</Link>
        <div className="hs-nav-drop">
          <button type="button" onClick={()=>setServicesOpen(!servicesOpen)} aria-expanded={servicesOpen} aria-controls="hs-services-menu">Servicii <ChevronDown size={15}/></button>
          <div className={`hs-nav-menu ${servicesOpen?'is-open':''}`} id="hs-services-menu">
            {SERVICES.map(s=><Link key={s.slug} href={`/${s.slug}/`} onClick={close}>{s.name}</Link>)}
          </div>
        </div>
        <Link href="/#proiecte" onClick={close}>Proiecte</Link>
        <Link href="/#preturi" onClick={close}>Prețuri</Link>
        <Link href="/#mod-de-lucru" onClick={close}>Cum lucrăm</Link>
        <Link href="/#faq" onClick={close}>FAQ</Link>
      </nav>
      <div className="hs-header-actions">
        <a href={SITE.phoneHref} className="hs-header-call" aria-label={`Sună la ${SITE.phone}`}><Phone size={17}/><span>{SITE.phone}</span></a>
        <Link href="/contact/" className="hs-btn hs-btn-primary hs-btn-small" onClick={close}>Cere ofertă <ArrowUpRight size={17}/></Link>
      </div>
      <button type="button" className="hs-nav-toggle" aria-label={menuOpen?'Închide meniul':'Deschide meniul'} aria-expanded={menuOpen} aria-controls="hs-main-menu" onClick={()=>setMenuOpen(!menuOpen)}>{menuOpen?<X size={23}/>:<Menu size={23}/>}</button>
    </div>
  </header>;
}
