import type { CSSProperties } from 'react';

type Props = {kind:'google'|'meta'|'tiktok'|'web'|'shop'|'analytics'|'seo'|'facebook'|'instagram'|'wordpress'|'shopify'; size?:number; className?:string};

/** Inline SVG symbols: no external CDN requests, works on Vercel and in previews. */
export default function BrandMark({kind,size=33,className=''}:Props) {
  const style:CSSProperties = {width:size,height:size,flexShrink:0};
  if(kind==='google') return <svg aria-label="Google Ads" role="img" className={className} style={style} viewBox="0 0 64 64">
    <path fill="#4285F4" d="M25.6 11c-4.2-2.5-9.7-1-12.1 3.2L2.7 33c-2.5 4.3-1 9.8 3.3 12.3s9.7 1 12.2-3.3l10.8-18.8c2.4-4.3 1-9.8-3.4-12.2Z"/>
    <path fill="#F9AB00" d="M25.6 11c4.3-2.5 9.7-1 12.2 3.2l23.5 40.6c2.5 4.3 1 9.8-3.3 12.2s-9.8 1-12.2-3.3L22.3 23.2c-2.5-4.3-1-9.8 3.3-12.2Z" transform="translate(0 -9)"/>
    <circle fill="#34A853" cx="10.5" cy="45.5" r="9.3"/>
  </svg>;
  if(kind==='meta') return <svg aria-label="Meta" role="img" className={className} style={style} viewBox="0 0 64 64" fill="none">
    <path d="M8 40C10 25 17 17 23 17c9 0 14 15 17 20 3.7 6.7 6.3 8.2 9.3 8.2 3.8 0 5.3-3.4 4.5-8.8C53.6 27 50 20 44.3 20 35 20 29.5 46 18.5 46 11 46 7 45 8 40Z" stroke="#0866FF" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>;
  if(kind==='facebook') return <svg aria-label="Facebook" role="img" className={className} style={style} viewBox="0 0 64 64"><circle cx="32" cy="32" r="30" fill="#0866FF"/><path fill="white" d="M37 58V37h7l1-9h-8v-5c0-2.6 1-4 4.1-4H46v-8c-2.4-.4-4.7-.6-7-.6-7.8 0-12.2 4.7-12.2 12.8V28h-7v9h7v21Z"/></svg>;
  if(kind==='instagram') return <svg aria-label="Instagram" role="img" className={className} style={style} viewBox="0 0 64 64"><defs><linearGradient id="ig-gradient" x1="0" y1="1" x2="1" y2="0"><stop stopColor="#FEDA75"/><stop offset=".32" stopColor="#FA7E1E"/><stop offset=".62" stopColor="#D62976"/><stop offset="1" stopColor="#4F5BD5"/></linearGradient></defs><rect x="4" y="4" width="56" height="56" rx="17" fill="url(#ig-gradient)"/><rect x="16" y="16" width="32" height="32" rx="11" fill="none" stroke="white" strokeWidth="4"/><circle cx="32" cy="32" r="8" fill="none" stroke="white" strokeWidth="4"/><circle cx="46" cy="18" r="3" fill="white"/></svg>;
  if(kind==='tiktok') return <svg aria-label="TikTok" role="img" className={className} style={style} viewBox="0 0 64 64">
    <path d="M39 8v27a12 12 0 1 1-10-11" fill="none" stroke="#25F4EE" strokeWidth="11" strokeLinecap="round" transform="translate(-3 2)"/>
    <path d="M39 8c1 11 7 15 16 16M39 8v27a12 12 0 1 1-10-11" fill="none" stroke="#FE2C55" strokeWidth="11" strokeLinecap="round" transform="translate(3 -2)"/>
    <path d="M39 8c1 11 7 15 16 16M39 8v27a12 12 0 1 1-10-11" fill="none" stroke="#101010" strokeWidth="10" strokeLinecap="round"/>
  </svg>;
  if(kind==='wordpress') return <svg aria-label="WordPress" role="img" className={className} style={style} viewBox="0 0 64 64"><circle cx="32" cy="32" r="29" fill="#21759B"/><circle cx="32" cy="32" r="24" stroke="white" strokeWidth="2.2" fill="none"/><text x="32" y="46" textAnchor="middle" fontFamily="Georgia,serif" fontWeight="bold" fontSize="42" fill="white">W</text></svg>;
  if(kind==='shopify') return <svg aria-label="Shopify" role="img" className={className} style={style} viewBox="0 0 64 64"><path fill="#95BF47" d="M13 17 54 12 58 57 7 55z"/><path fill="#5E8E3E" d="M54 12 58 57 45 54 43 15z"/><path d="M24 22c1-6 4-11 8-11s6 3 7 9" fill="none" stroke="#E8F6C9" strokeWidth="3"/><text x="29" y="46" fontSize="31" fontWeight="bold" fontFamily="Arial" fill="white" textAnchor="middle">S</text></svg>;
  if(kind==='web') return <svg aria-label="Site web" role="img" className={className} style={style} viewBox="0 0 64 64" fill="none" stroke="#1464EF" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round"><rect x="6" y="11" width="52" height="36" rx="5"/><path d="M32 47v10M19 57h26M6 21h52"/></svg>;
  if(kind==='shop') return <svg aria-label="Magazin online" role="img" className={className} style={style} viewBox="0 0 64 64" fill="none" stroke="#1978ED" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 12h7l7 32h31l6-24H17M23 44h28"/><circle cx="27" cy="54" r="4" fill="#1978ED"/><circle cx="49" cy="54" r="4" fill="#1978ED"/></svg>;
  if(kind==='analytics') return <svg aria-label="Analytics" role="img" className={className} style={style} viewBox="0 0 64 64"><rect x="8" y="39" width="12" height="18" rx="6" fill="#F9AB00"/><rect x="26" y="24" width="12" height="33" rx="6" fill="#F9AB00"/><rect x="44" y="7" width="12" height="50" rx="6" fill="#E37400"/></svg>;
  return <svg aria-label="SEO" role="img" className={className} style={style} viewBox="0 0 64 64" fill="none" stroke="#1464EF" strokeWidth="5" strokeLinecap="round"><circle cx="26" cy="27" r="17"/><path d="m38 40 16 16M18 34V24m9 10V16m9 18V28"/></svg>;
}
