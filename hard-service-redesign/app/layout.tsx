import type {Metadata,Viewport} from 'next';
import {Analytics} from '@vercel/analytics/next';
import {SITE} from '@/lib/site';
import './globals.css';

export const viewport:Viewport={width:'device-width',initialScale:1,themeColor:'#ffffff'};
export const metadata:Metadata={
  metadataBase:new URL(SITE.url),
  title:{default:'Hard Service | Marketing online',template:'%s | Hard Service'},
  description:'Google Ads, Meta Ads, TikTok Ads, creare website și tracking, cu tarife transparente și administrare continuă.',
  alternates:{canonical:'/'},
  openGraph:{type:'website',locale:'ro_RO',siteName:'Hard Service Marketing',url:SITE.url,title:'Hard Service Marketing',description:'Promovare online, website-uri și tracking cu prețuri clare.'},
  robots:{index:true,follow:true},
  icons:{icon:'/icon.svg'},
};
const org={
  '@context':'https://schema.org','@type':'Organization','@id':`${SITE.url}/#organization`,name:SITE.name,legalName:SITE.legalName,url:SITE.url,telephone:'+40740231358',email:SITE.email,
  areaServed:{'@type':'Country',name:'România'},contactPoint:{'@type':'ContactPoint',telephone:'+40740231358',contactType:'sales',availableLanguage:['ro']},
};
const website={'@context':'https://schema.org','@type':'WebSite','@id':`${SITE.url}/#website`,url:SITE.url,name:SITE.name,inLanguage:'ro-RO',publisher:{'@id':`${SITE.url}/#organization`}};
const gtmId=process.env.NEXT_PUBLIC_GTM_ID || '';
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="ro"><head>
  {gtmId&&<script id="gtm" dangerouslySetInnerHTML={{__html:`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${gtmId}');`}}/>}
  <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(org)}}/><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(website)}}/>
</head><body>{gtmId&&<noscript><iframe src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`} height="0" width="0" style={{display:'none',visibility:'hidden'}} title="Google Tag Manager"/></noscript>}{children}<Analytics/></body></html>}
