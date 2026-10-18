'use client';
import {useEffect,useState} from 'react';
import Link from 'next/link';
import {ArrowUpRight,PhoneCall} from 'lucide-react';
import {SITE} from '@/lib/site';

/** Appears after users begin scrolling, only on mobile viewport sizes. */
export default function MobileActionDock(){
  const [visible,setVisible]=useState(false);
  useEffect(()=>{
    const update=()=>setVisible(window.scrollY>170);
    update();
    window.addEventListener('scroll',update,{passive:true});
    return ()=>window.removeEventListener('scroll',update);
  },[]);
  return <div className={`hs24-mobile-actions ${visible?'is-visible':''}`} aria-label="Contact rapid" aria-hidden={!visible}>
    <a href={SITE.phoneHref} className="hs24-dock-call" tabIndex={visible?0:-1}><PhoneCall size={20}/> Sună direct: {SITE.phone}</a>
    <Link href="/contact/#formular" className="hs24-dock-offer" tabIndex={visible?0:-1}>Cerere ofertă <ArrowUpRight size={20}/></Link>
  </div>;
}
