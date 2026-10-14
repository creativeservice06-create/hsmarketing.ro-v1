import type {Metadata} from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import {SITE} from '@/lib/site';
import {Phone,Mail} from 'lucide-react';
export const metadata:Metadata={title:'Contact și ofertă promovare online',description:'Contactează Hard Service pentru Google Ads, Meta Ads, TikTok Ads, creare site și tracking.',alternates:{canonical:'/contact/'}};
export default function ContactPage(){return <><Header/><main><section className="contact-section contact-page-section"><div className="container contact-grid"><div className="contact-copy"><div className="kicker">CONTACT HARD SERVICE</div><h1>Hai să discutăm despre promovarea firmei tale.</h1><p>Completează formularul sau contactează-ne telefonic. Oferim servicii de marketing online, website și tracking pentru firme.</p><a className="contact-phone-link" href={SITE.phoneHref}><Phone size={21}/><span><small>Telefon</small><strong>{SITE.phone}</strong></span></a><p style={{marginTop:18}}><Mail size={15} style={{verticalAlign:'middle',marginRight:8}}/>{SITE.email}</p><p className="contact-company">{SITE.legalName} · CUI {SITE.cui}</p></div><div className="contact-card"><h2>Solicită o ofertă</h2><p>Spune-ne ce vrei să promovezi.</p><ContactForm/></div></div></section></main><Footer/></>}
