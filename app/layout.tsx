import type { Metadata, Viewport } from 'next';
import './globals.css';
import Tracking from '@/components/Tracking';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  metadataBase: new URL('https://primegearlab.com'),
  title: SITE.title,
  description: SITE.description,
  alternates: { canonical: SITE.baseUrl },
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    url: SITE.baseUrl,
    siteName: SITE.businessName,
    title: SITE.title,
    description: SITE.description,
    locale: 'en_US',
    images: [{ url: `https://primegearlab.com${SITE.ogImagePath}`, width: 1200, height: 630, alt: SITE.title }],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE.title,
    description: SITE.description,
    images: [`https://primegearlab.com${SITE.ogImagePath}`],
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0f172a',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Merchant origin is the destination of every affiliate CTA and the image host. */}
        <link rel="dns-prefetch" href={SITE.merchantOrigin} />
        <link rel="preconnect" href={SITE.merchantOrigin} crossOrigin="anonymous" />
      </head>
      <body>
        {children}
        <Tracking />
      </body>
    </html>
  );
}
