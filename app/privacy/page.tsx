import type { Metadata } from 'next';
import LegalLayout from '@/components/LegalLayout';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: `Privacy Policy | ${SITE.businessName}`,
  description: 'How PrimeGearLab handles visitor data on this affiliate guide.',
  alternates: { canonical: `${SITE.baseUrl}/privacy` },
};

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy">
      <p>
        This page explains in general terms how {SITE.businessName} (“we”) handles information when you
        visit this site. It is a plain-language summary, not legal advice.
      </p>
      <h2 className="pt-2 text-xl font-bold text-white">Information we collect</h2>
      <p>
        We do not ask you to create an account or submit personal details on this site. If you email us, we
        receive your email address and message so we can reply.
      </p>
      <h2 className="pt-2 text-xl font-bold text-white">Analytics and advertising tools</h2>
      <p>
        We may use analytics and advertising measurement tools such as Google Analytics, Google Ads and the
        Meta Pixel to understand traffic and measure campaigns. These tools may use cookies or similar
        technologies and may collect data such as your IP address, device and browser details, pages
        viewed, and which links you click. You can limit this through your browser settings, ad settings or
        opt-out tools offered by those providers.
      </p>
      <h2 className="pt-2 text-xl font-bold text-white">Third-party merchant sites</h2>
      <p>
        Links on this site lead to {SITE.merchantName}, which is operated by a third party. When you click
        through, the merchant and its tracking partners may set their own cookies and collect data under
        their own privacy policy. We do not control those practices.
      </p>
      <h2 className="pt-2 text-xl font-bold text-white">Contact</h2>
      <p>
        Questions about this policy:{' '}
        <a className="text-emerald-300 underline" href={`mailto:${SITE.contactEmail}`}>
          {SITE.contactEmail}
        </a>
        .
      </p>
    </LegalLayout>
  );
}
