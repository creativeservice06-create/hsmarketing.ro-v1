import Link from 'next/link';
import {Mail, MapPin, Phone} from 'lucide-react';
import {SITE} from '@/lib/site';
import GooglePartnerBadge from '@/components/GooglePartnerBadge';

export default function Footer(){return <footer className="site-footer">
  <div className="container footer-top footer-top-demo">
    <div className="footer-brand">
      <Link href="/" className="logo-type logo-footer"><span>HARD <b>SERVICE</b></span><small>MARKETING ONLINE</small></Link>
      <p>Ajutăm companiile să obțină mai mulți clienți prin promovare online, site-uri performante și strategii digitale cu rezultate măsurabile.</p>
      <div className="footer-socials" aria-label="Rețele sociale">
        <span>f</span><span>ig</span><span>in</span><span>yt</span><span>tt</span>
      </div>
      <div className="footer-tax">© {new Date().getFullYear()} Hard Service SRL. Toate drepturile rezervate.</div>
    </div>

    <div className="footer-group">
      <h3>Servicii</h3>
      <Link href="/google-ads/">Google Ads</Link>
      <Link href="/facebook-instagram-ads/">Facebook &amp; Instagram Ads</Link>
      <Link href="/tiktok-ads/">TikTok Ads</Link>
      <Link href="/creare-site/">Creare site-uri</Link>
      <Link href="/magazin-online/">Magazine online</Link>
      <Link href="/seo-tehnic/">SEO tehnic / Tracking</Link>
    </div>

    <div className="footer-group">
      <h3>Informații utile</h3>
      <Link href="/#proiecte">Portofoliu</Link>
      <Link href="/#preturi">Prețuri</Link>
      <Link href="/#despre">Despre noi</Link>
      <Link href="/#intrebari">Întrebări frecvente</Link>
      <Link href="/contact/">Contact</Link>
    </div>

    <div className="footer-group footer-contact">
      <h3>Contact</h3>
      <a href={SITE.phoneHref}><Phone size={17}/> {SITE.phone}</a>
      <a href={`mailto:${SITE.email}`}><Mail size={17}/> {SITE.email}</a>
      <span><MapPin size={17}/> București, România</span>
      <GooglePartnerBadge/>
    </div>
  </div>
  <div className="container footer-bottom footer-bottom-demo">
    <div className="footer-links-legal">
      <Link href="/politica-confidentialitate/">Politica de confidențialitate</Link>
      <span>|</span>
      <Link href="/politica-cookie-uri/">Politica cookie-uri</Link>
      <span>|</span>
      <Link href="/#top">Înapoi sus</Link>
    </div>
  </div>
</footer>;}
