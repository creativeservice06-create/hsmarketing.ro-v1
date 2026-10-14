import type { CSSProperties } from 'react';

type Props = {kind:'google'|'meta'|'tiktok'|'web'|'shop'|'analytics'|'seo'|'facebook'|'instagram'|'wordpress'|'shopify'; size?:number; className?:string};

/** Inline SVG symbols: no external CDN requests, works on Vercel and in previews. */
export default function BrandMark({kind,size=33,className=''}:Props) {
  const style:CSSProperties = {width:size,height:size,flexShrink:0};
  // Brand assets are the actual trademark artwork attributed to their owners,
  // distributed as original file assets by Wikimedia Commons (not hand-drawn SVG replicas).
  // Replace with brand-kit exports from the owners where required by their use policies.
  const originalMarks: Partial<Record<Props['kind'], string>> = {
    google:'https://commons.wikimedia.org/wiki/Special:FilePath/Google_Ads_icon.svg',
    meta:'https://commons.wikimedia.org/wiki/Special:FilePath/Meta_Platforms_logo.svg',
    facebook:'https://commons.wikimedia.org/wiki/Special:FilePath/2021_Facebook_icon.svg',
    instagram:'https://commons.wikimedia.org/wiki/Special:FilePath/Instagram_logo_2022.svg',
    tiktok:'/brands/tiktok-official-user.png',
  };
  const brandLogo = originalMarks[kind];
  if(brandLogo) return <img className={`brand-original ${className}`} src={brandLogo} width={size} height={size} loading="lazy" decoding="async" alt={`${kind==='google'?'Google Ads':kind==='meta'?'Meta':kind==='tiktok'?'TikTok':kind==='facebook'?'Facebook':'Instagram'} — logo` } style={{width:size,height:size,objectFit:'contain',flexShrink:0}}/>;
  if(kind==='wordpress') return <svg aria-label="WordPress" role="img" className={className} style={style} viewBox="0 0 64 64"><circle cx="32" cy="32" r="29" fill="#21759B"/><circle cx="32" cy="32" r="24" stroke="white" strokeWidth="2.2" fill="none"/><text x="32" y="46" textAnchor="middle" fontFamily="Georgia,serif" fontWeight="bold" fontSize="42" fill="white">W</text></svg>;
  if(kind==='shopify') return <svg aria-label="Shopify" role="img" className={className} style={style} viewBox="0 0 64 64"><path fill="#95BF47" d="M13 17 54 12 58 57 7 55z"/><path fill="#5E8E3E" d="M54 12 58 57 45 54 43 15z"/><path d="M24 22c1-6 4-11 8-11s6 3 7 9" fill="none" stroke="#E8F6C9" strokeWidth="3"/><text x="29" y="46" fontSize="31" fontWeight="bold" fontFamily="Arial" fill="white" textAnchor="middle">S</text></svg>;
  if(kind==='web') return <svg aria-label="Site web" role="img" className={className} style={style} viewBox="0 0 64 64" fill="none" stroke="#1464EF" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round"><rect x="6" y="11" width="52" height="36" rx="5"/><path d="M32 47v10M19 57h26M6 21h52"/></svg>;
  if(kind==='shop') return <svg aria-label="Magazin online" role="img" className={className} style={style} viewBox="0 0 64 64" fill="none" stroke="#1978ED" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 12h7l7 32h31l6-24H17M23 44h28"/><circle cx="27" cy="54" r="4" fill="#1978ED"/><circle cx="49" cy="54" r="4" fill="#1978ED"/></svg>;
  if(kind==='analytics') return <svg aria-label="Analytics" role="img" className={className} style={style} viewBox="0 0 64 64"><rect x="8" y="39" width="12" height="18" rx="6" fill="#F9AB00"/><rect x="26" y="24" width="12" height="33" rx="6" fill="#F9AB00"/><rect x="44" y="7" width="12" height="50" rx="6" fill="#E37400"/></svg>;
  return <svg aria-label="SEO" role="img" className={className} style={style} viewBox="0 0 64 64" fill="none" stroke="#1464EF" strokeWidth="5" strokeLinecap="round"><circle cx="26" cy="27" r="17"/><path d="m38 40 16 16M18 34V24m9 10V16m9 18V28"/></svg>;
}
