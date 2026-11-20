'use client';
import Link from 'next/link';
import {useEffect,useRef,useState,type PointerEvent as RPointerEvent,type MouseEvent as RMouseEvent} from 'react';
import {PROJECTS} from '@/lib/projects';

// Bandă sub Hero cu toate proiectele din portofoliu.
// - rulează automat, pe un singur rând
// - se poate trage cu mouse-ul / degetul; după ce o lași, continuă singură
// - un click (fără tragere) pe o siglă duce la secțiunea Portofoliu (#proiecte)
const COPIES=3;          // lista se repetă; poziția se ține în copia din mijloc => buclă fără capăt în ambele direcții
const SPEED=40;          // pixeli pe secundă
const DRAG_THRESHOLD=6;  // de la câți pixeli mișcarea e tragere, nu click

export default function ProjectLogoStrip(){
 const [errors,setErrors]=useState<Record<string,number>>({});
 const viewport=useRef<HTMLDivElement>(null);
 const track=useRef<HTMLDivElement>(null);
 const pos=useRef(0);
 const drag=useRef({down:false,dragging:false,startX:0,startPos:0,id:-1});
 const suppressClick=useRef(false);

 useEffect(()=>{
  const reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let raf=0,last=performance.now();
  const loop=(now:number)=>{
   const t=track.current; if(!t){raf=requestAnimationFrame(loop);return;}
   const w=t.scrollWidth/COPIES;
   if(w>0){
    if(!drag.current.down&&!reduce) pos.current+=SPEED*Math.min(now-last,100)/1000;
    if(pos.current===0) pos.current=w;
    while(pos.current>=2*w) pos.current-=w;
    while(pos.current<w) pos.current+=w;
    t.style.transform=`translate3d(${-pos.current}px,0,0)`;
   }
   last=now; raf=requestAnimationFrame(loop);
  };
  raf=requestAnimationFrame(loop);
  return ()=>cancelAnimationFrame(raf);
 },[]);

 const onPointerDown=(e:RPointerEvent)=>{
  if(e.pointerType==='mouse'&&e.button!==0) return;
  drag.current={down:true,dragging:false,startX:e.clientX,startPos:pos.current,id:e.pointerId};
  suppressClick.current=false;
 };
 const onPointerMove=(e:RPointerEvent)=>{
  const d=drag.current; if(!d.down||e.pointerId!==d.id) return;
  const dx=e.clientX-d.startX;
  if(!d.dragging&&Math.abs(dx)>DRAG_THRESHOLD){
   d.dragging=true; suppressClick.current=true;
   viewport.current?.setPointerCapture(e.pointerId);
  }
  if(d.dragging) pos.current=d.startPos-dx;
 };
 const onPointerEnd=(e:RPointerEvent)=>{
  const d=drag.current; if(e.pointerId!==d.id) return;
  d.down=false; d.dragging=false;
  if(viewport.current?.hasPointerCapture(e.pointerId)) viewport.current.releasePointerCapture(e.pointerId);
 };
 const onClickCapture=(e:RMouseEvent)=>{
  if(suppressClick.current){e.preventDefault();e.stopPropagation();suppressClick.current=false;}
 };

 return <section className="hs-logo-strip" aria-label="Proiecte realizate"><div className="container">
  <div ref={viewport} className="hs-logo-strip-viewport" onPointerDown={onPointerDown} onPointerMove={onPointerMove} onPointerUp={onPointerEnd} onPointerCancel={onPointerEnd} onClickCapture={onClickCapture} onDragStart={e=>e.preventDefault()}>
   <div ref={track} className="hs-logo-strip-track">
    {Array.from({length:COPIES}).flatMap((_,c)=>PROJECTS.map(p=>{
     const attempt=errors[p.domain]||0;
     const logo=p.logo || (attempt===0?`https://www.google.com/s2/favicons?domain=${encodeURIComponent(p.domain)}&sz=256`:attempt===1?`https://${p.domain}/favicon.ico`:null);
     const hidden=c!==1; // copia din mijloc e cea „reală” pentru cititoare de ecran și tastatură
     return <Link key={`${c}-${p.domain}`} href="/#proiecte" className="hs-logo-strip-item" title={`${p.name} — vezi portofoliul`} draggable={false} aria-hidden={hidden?true:undefined} tabIndex={hidden?-1:undefined} aria-label={hidden?undefined:`${p.name} — vezi portofoliul`}>
      {logo?<img src={logo} alt="" draggable={false} decoding="async" className={p.logo?undefined:'is-favicon'} onError={()=>setErrors(prev=>({...prev,[p.domain]:attempt+1}))}/>:<strong className="hs-logo-strip-fallback">{p.name}</strong>}
     </Link>;
    }))}
   </div>
  </div>
 </div></section>;
}
