'use client';
import {useState} from 'react';
import Link from 'next/link';
import {ArrowRight, Menu, Phone, X, ChevronDown} from 'lucide-react';
import {SERVICES, SITE} from '@/lib/site';

export default function Header(){
  const [menuOpen,setMenuOpen]=useState(false);
  const [serviceOpen,setServiceOpen]=useState(false);
  const close=()=>{setMenuOpen(false);setServiceOpen(false)};
  return <header className="site-header">
    <div className="container header-inner">
      <Link href="/" className="logo-type" onClick={close} aria-label="Hard Service - Acasă"><span>HARD <b>SERVICE</b></span><small>MARKETING ONLINE</small></Link>
      <nav aria-label="Navigație principală" className={`nav-main ${menuOpen?'nav-open':''}`}>
        <Link href="/" onClick={close}>Acasă</Link>
        <div className="nav-services">
          <button type="button" className="nav-trigger" onClick={()=>setServiceOpen(!serviceOpen)} aria-expanded={serviceOpen} aria-controls="services-menu">Servicii <ChevronDown size={15}/></button>
          <div id="services-menu" className={`nav-dropdown ${serviceOpen?'dropdown-open':''}`}>
            {SERVICES.map(item=><Link key={item.slug} href={`/${item.slug}/`} onClick={close}>{item.name}</Link>)}
            <Link href="/#servicii" onClick={close}>Toate serviciile →</Link>
          </div>
        </div>
        <Link href="/#proiecte" onClick={close}>Portofoliu</Link>
        <Link href="/#preturi" onClick={close}>Prețuri</Link>
        <Link href="/#despre" onClick={close}>Despre noi</Link>
        <Link href="/#faq" onClick={close}>FAQ</Link>
        <Link href="/#contact" onClick={close}>Contact</Link>
      </nav>
      <div className="header-actions"><a className="header-phone" href={SITE.phoneHref}><Phone size={17}/><span>{SITE.phone}</span></a><Link href="/#contact" className="btn btn-blue btn-small">Solicită ofertă <ArrowRight size={16}/></Link></div>
      <button type="button" className="mobile-toggle" aria-label={menuOpen?'Închide meniul':'Deschide meniul'} aria-expanded={menuOpen} onClick={()=>setMenuOpen(!menuOpen)}>{menuOpen?<X size={23}/>:<Menu size={23}/>}</button>
    </div>
  </header>;
}
