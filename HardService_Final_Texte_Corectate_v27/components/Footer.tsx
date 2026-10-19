import Link from 'next/link';
import {ArrowUpRight, Phone} from 'lucide-react';
import PartnerBadges from '@/components/PartnerBadges';
import {SITE} from '@/lib/site';
import { CookiePreferencesButton } from '@/components/CookieConsent';

export default function Footer(){return <footer className="hs-footer">
  <div className="container hs-footer-main">
    <div className="hs-footer-about">
      <Link href="/" className="hs-wordmark hs-wordmark-footer" aria-label="Hard Service - Acasă"><span>HARD <span>SERVICE</span></span><small>MARKETING ONLINE</small></Link>
      <p>Google Ads, Meta Ads, TikTok Ads, website-uri și tracking. Un singur punct de contact pentru implementare, optimizare și raportare.</p>
      <PartnerBadges small/>
    </div>
    <div className="hs-footer-col"><h3>Promovare</h3><Link href="/google-ads/">Google Ads</Link><Link href="/facebook-instagram-ads/">Facebook &amp; Instagram</Link><Link href="/tiktok-ads/">TikTok Ads</Link><Link href="/tracking-conversii/">GA4 și GTM</Link></div>
    <div className="hs-footer-col"><h3>Website &amp; companie</h3><Link href="/creare-site/">Creare site</Link><Link href="/magazin-online/">Magazin online</Link><Link href="/seo-tehnic/">SEO tehnic</Link><Link href="/#proiecte">Portofoliu</Link><Link href="/#faq">FAQ</Link></div>
    <div className="hs-footer-col hs-footer-contact"><h3>Hai să discutăm</h3><a href={SITE.phoneHref}><Phone size={17}/>{SITE.phone}</a><Link href="/contact/" className="hs-footer-offer">Solicită ofertă <ArrowUpRight size={17}/></Link><span>{SITE.legalName}</span><span>CUI {SITE.cui}</span><span>Servicii disponibile în România</span></div>
  </div>
  <div className="container hs-footer-bottom"><span>© {new Date().getFullYear()} {SITE.legalName}. Toate drepturile rezervate.</span><div><Link href="/politica-confidentialitate/">Confidențialitate</Link><Link href="/politica-cookie-uri/">Cookie-uri</Link><CookiePreferencesButton /><Link href="/#top">Înapoi sus ↑</Link></div></div>
</footer>}
