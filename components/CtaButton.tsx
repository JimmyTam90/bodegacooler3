import type { ReactNode } from 'react';
import TrackedLink from './TrackedLink';

interface CtaButtonProps {
  href: string;
  location: string;
  productId?: string;
  children: ReactNode;
  ariaLabel?: string;
}

/** Primary affiliate CTA: normal-flow block, never positioned over an image. */
export default function CtaButton({ href, location, productId, children, ariaLabel }: CtaButtonProps) {
  return (
    <TrackedLink
      href={href}
      location={location}
      productId={productId}
      ariaLabel={ariaLabel}
      className="flex min-h-[52px] w-full items-center justify-center rounded-xl bg-cta px-6 py-3 text-center text-base font-extrabold text-ink shadow-lg hover:brightness-110 sm:text-lg"
    >
      {children}
    </TrackedLink>
  );
}

/** Secondary, internal anchor link (same page). */
export function SecondaryLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      className="flex min-h-[48px] w-full items-center justify-center rounded-xl border border-slate-500 px-6 py-3 text-center text-base font-semibold text-white hover:border-emerald-400 hover:text-emerald-300"
    >
      {children}
    </a>
  );
}
