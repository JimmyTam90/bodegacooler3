import type { Metadata } from 'next';
import LegalLayout from '@/components/LegalLayout';
import { AFFILIATE_DISCLOSURE, SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: `Affiliate Disclosure | ${SITE.businessName}`,
  description: 'How PrimeGearLab earns commissions from links on this page.',
  alternates: { canonical: `${SITE.baseUrl}/affiliate-disclosure` },
};

export default function AffiliateDisclosurePage() {
  return (
    <LegalLayout title="Affiliate Disclosure">
      <p className="text-lg text-white">{AFFILIATE_DISCLOSURE}</p>
      <p>
        Links to {SITE.merchantName} on this site are affiliate links. If you click one and buy, the
        merchant may pay us a commission. The price you pay is not increased because of this.
      </p>
      <p>
        Our commission does not change the facts we report, but you should know it exists. We aim to state
        where each detail comes from, and we recommend confirming price, stock, shipping and warranty on the
        merchant’s own page before you purchase.
      </p>
      <p>
        {SITE.businessName} is an independent publisher and is not owned, operated or endorsed by the
        merchant.
      </p>
    </LegalLayout>
  );
}
