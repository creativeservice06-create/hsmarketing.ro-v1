import Link from 'next/link';
import {Mail, Phone, ArrowUpRight} from 'lucide-react';
import {SITE} from '@/lib/site';
import GooglePartnerBadge from '@/components/GooglePartnerBadge';

export default function Footer(){return <footer className="site-footer footer-v4">
  <div className="container footer-top footer-top-demo">
    <div className="footer-brand"><Link href="/" className="logo-type logo-footer" aria-label="Hard Service - Acasă"><span>HARD <b>SERVICE</b></span><small>MARKETING ONLINE</small></Link>
      <p>Promovare online, website-uri, tracking și suport pentru afacerile care vor mai multe solicitări. Tarife transparente, de la început.</p>
      <div className="footer-company"><strong>{SITE.legalName}</strong><span>CUI {SITE.cui}</span><span>Înființată la {SITE.founded}</span></div>
      <GooglePartnerBadge/>
    </div>
    <div className="footer-group"><h3>Servicii</h3><Link href="/google-ads/">Google Ads</Link><Link href="/facebook-instagram-ads/">Facebook &amp; Instagram Ads</Link><Link href="/tiktok-ads/">TikTok Ads</Link><Link href="/creare-site/">Creare site-uri</Link><Link href="/magazin-online/">Magazine online</Link><Link href="/tracking-conversii/">Tracking conversii</Link><Link href="/seo-tehnic/">SEO tehnic</Link></div>
    <div className="footer-group"><h3>Informații</h3><Link href="/#proiecte">Proiecte realizate</Link><Link href="/#preturi">Prețuri</Link><Link href="/#despre">Despre noi</Link><Link href="/#faq">Întrebări frecvente</Link><Link href="/politica-confidentialitate/">Confidențialitate</Link><Link href="/politica-cookie-uri/">Cookie-uri</Link></div>
    <div className="footer-group footer-contact"><h3>Contact</h3><a href={SITE.phoneHref}><Phone size={16}/>{SITE.phone}</a><a href={`mailto:${SITE.email}`}><Mail size={16}/>{SITE.email}</a><Link className="footer-cta" href="/contact/">Solicită o ofertă <ArrowUpRight size={16}/></Link><p>Disponibil pentru proiecte din toată România.</p></div>
  </div>
  <div className="container footer-bottom footer-bottom-demo"><span>© {new Date().getFullYear()} Hard Service SRL. Toate drepturile rezervate.</span><div className="footer-links-legal"><Link href="/politica-confidentialitate/">Confidențialitate</Link><span>·</span><Link href="/politica-cookie-uri/">Cookie-uri</Link><span>·</span><Link href="/#top">Sus ↑</Link></div></div>
</footer>}
