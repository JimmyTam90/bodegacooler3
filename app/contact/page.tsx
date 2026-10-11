import type { Metadata } from 'next';
import LegalLayout from '@/components/LegalLayout';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: `Contact | ${SITE.businessName}`,
  description: 'Contact PrimeGearLab about this guide.',
  alternates: { canonical: `${SITE.baseUrl}/contact` },
};

export default function ContactPage() {
  return (
    <LegalLayout title="Contact">
      <p>Questions about this guide, a correction, or a data request? Email us:</p>
      <p>
        <a
          className="inline-flex min-h-[44px] items-center text-lg font-semibold text-emerald-300 underline"
          href={`mailto:${SITE.contactEmail}`}
        >
          {SITE.contactEmail}
        </a>
      </p>
      <p>
        For orders, shipping, returns or warranty, please contact {SITE.merchantName} directly. We do not
        sell or service the products and cannot see or change your order.
      </p>
    </LegalLayout>
  );
}
