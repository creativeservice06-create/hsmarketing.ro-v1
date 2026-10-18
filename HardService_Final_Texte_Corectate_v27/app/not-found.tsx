import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
export default function NotFound(){return <><Header/><main className="container notfound"><h1>Pagina nu a fost găsită</h1><p>Link-ul este incorect sau pagina a fost mutată.</p><Link className="btn btn-blue" href="/">Înapoi la homepage</Link></main><Footer/></>}
