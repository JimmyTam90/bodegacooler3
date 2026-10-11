import Link from 'next/link';
import { AFFILIATE_DISCLOSURE, FOOTER_NOTICE, SITE } from '@/lib/site';

export default function SiteFooter() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 px-4 py-10 text-sm text-slate-400">
      <div className="mx-auto flex max-w-6xl flex-col gap-4">
        <p className="text-base font-bold text-white">{SITE.businessName}</p>
        <p>
          PrimeGearLab is an independent publisher and affiliate guide. We are not the manufacturer,
          seller or an official partner of Bodega Cooler. Purchases are made on {SITE.merchantName},
          which sets its own prices, shipping, warranty and return terms.
        </p>
        <p className="text-slate-200">{AFFILIATE_DISCLOSURE}</p>
        <nav aria-label="Legal" className="flex flex-wrap gap-x-5 gap-y-1">
          <Link href="/privacy" className="flex min-h-[44px] items-center underline hover:text-white">
            Privacy Policy
          </Link>
          <Link href="/terms" className="flex min-h-[44px] items-center underline hover:text-white">
            Terms
          </Link>
          <Link href="/affiliate-disclosure" className="flex min-h-[44px] items-center underline hover:text-white">
            Affiliate Disclosure
          </Link>
          <Link href="/contact" className="flex min-h-[44px] items-center underline hover:text-white">
            Contact
          </Link>
        </nav>
        <p>
          Contact Email:{' '}
          <a className="underline hover:text-white" href={`mailto:${SITE.contactEmail}`}>
            {SITE.contactEmail}
          </a>
        </p>
        <p>{FOOTER_NOTICE}</p>
        <p className="text-xs text-slate-500">
          Designed with Google Ads and Meta Ads policy considerations.
        </p>
      </div>
    </footer>
  );
}
