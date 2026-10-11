import type { Metadata } from 'next';
import LegalLayout from '@/components/LegalLayout';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: `Terms of Use | ${SITE.businessName}`,
  description: 'Terms of use for the PrimeGearLab Bodega Cooler guide.',
  alternates: { canonical: `${SITE.baseUrl}/terms` },
};

export default function TermsPage() {
  return (
    <LegalLayout title="Terms of Use">
      <p>
        By using this site you agree to these general terms. They are a plain-language summary, not legal
        advice.
      </p>
      <h2 className="pt-2 text-xl font-bold text-white">Informational purpose</h2>
      <p>
        {SITE.businessName} is an independent publisher. The content is for general information and is
        compiled from merchant pages and published specifications. We have not hands-on tested the products
        and do not guarantee that details are complete or current.
      </p>
      <h2 className="pt-2 text-xl font-bold text-white">No affiliation or sales</h2>
      <p>
        We are not the manufacturer, seller or an official partner of Bodega Cooler. We do not sell, ship,
        service or provide warranties for any product. Any purchase happens on {SITE.merchantName} under that
        merchant’s own prices and terms.
      </p>
      <h2 className="pt-2 text-xl font-bold text-white">Prices and availability</h2>
      <p>
        Prices, discounts, stock and shipping terms change. The merchant’s product page is the authority at
        the time you buy.
      </p>
      <h2 className="pt-2 text-xl font-bold text-white">Limitation of liability</h2>
      <p>
        To the extent permitted by law, we are not liable for losses arising from your use of this site or
        from purchases made on third-party sites.
      </p>
      <h2 className="pt-2 text-xl font-bold text-white">Contact</h2>
      <p>
        <a className="text-emerald-300 underline" href={`mailto:${SITE.contactEmail}`}>
          {SITE.contactEmail}
        </a>
      </p>
    </LegalLayout>
  );
}
