
import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';

import { SITE } from '@/lib/site';
import MobileActionDock from '@/components/MobileActionDock';
import CookieConsent from '@/components/CookieConsent';

import './globals.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),

  title: {
    default: 'Promovare Google Ads, Meta Ads și TikTok Ads | Hard Service',
    template: '%s | Hard Service',
  },

  description:
    'Administrare Google Ads, Meta Ads și TikTok Ads, creare site-uri și magazine online, SEO tehnic și tracking conversii pentru firme.',

  alternates: {
    canonical: '/',
  },

  openGraph: {
    type: 'website',
    locale: 'ro_RO',
    siteName: 'Hard Service Marketing',
    url: SITE.url,
    title: 'Promovare Google Ads, Meta Ads și TikTok Ads | Hard Service',
    description:
      'Administrare campanii PPC și Meta Ads, creare site-uri și optimizare conversii pentru firme.',
    images: [
      {
        url: '/og-hard-service-v3.jpg',
        width: 1200,
        height: 630,
        alt: 'Hard Service — Google Ads, Meta Ads, TikTok Ads și Website',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    images: ['/og-hard-service-v3.jpg'],
  },

  robots:
    process.env.VERCEL_ENV === 'preview'
      ? { index: false, follow: false }
      : { index: true, follow: true },

  icons: {
    icon: '/icon.svg',
  },
};

const org = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${SITE.url}/#organization`,
  name: SITE.name,
  legalName: SITE.legalName,
  url: SITE.url,
  telephone: '+40740231358',
  areaServed: {
    '@type': 'Country',
    name: 'România',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+40740231358',
    contactType: 'sales',
    availableLanguage: ['ro'],
  },
};

const website = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE.url}/#website`,
  url: SITE.url,
  name: SITE.name,
  inLanguage: 'ro-RO',
  publisher: {
    '@id': `${SITE.url}/#organization`,
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="ro">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(org),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(website),
          }}
        />
      </head>

      <body>
        {children}

        <MobileActionDock />

        <CookieConsent
          gtmId={process.env.NEXT_PUBLIC_GTM_ID || ''}
        />
      </body>
    </html>
  );
}
