import Script from 'next/script';

/** Only characters valid in GA / Ads / Pixel IDs; anything else disables the integration. */
function safeId(value: string | undefined): string | null {
  if (!value) return null;
  return /^[A-Za-z0-9_-]{4,40}$/.test(value) ? value : null;
}

export default function Tracking() {
  const ga = safeId(process.env.NEXT_PUBLIC_GA_ID);
  const ads = safeId(process.env.NEXT_PUBLIC_GOOGLE_ADS_ID);
  const pixel = safeId(process.env.NEXT_PUBLIC_META_PIXEL_ID);
  const gtagId = ga ?? ads;

  return (
    <>
      {gtagId ? (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${gtagId}`}
            strategy="afterInteractive"
          />
          <Script id="gtag-init" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('js',new Date());${
              ga ? `gtag('config','${ga}');` : ''
            }${ads ? `gtag('config','${ads}');` : ''}`}
          </Script>
        </>
      ) : null}

      {pixel ? (
        <Script id="meta-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${pixel}');fbq('track','PageView');`}
        </Script>
      ) : null}
    </>
  );
}
