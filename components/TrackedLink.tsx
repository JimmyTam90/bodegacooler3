'use client';

import type { ReactNode } from 'react';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

interface TrackedLinkProps {
  href: string;
  location: string;
  productId?: string;
  className?: string;
  ariaLabel?: string;
  children: ReactNode;
}

const ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;
const ADS_LABEL = process.env.NEXT_PUBLIC_GOOGLE_ADS_CLICK_LABEL;

/**
 * Native <a> affiliate link. Navigation is never blocked or delayed:
 * the click handler only fires fire-and-forget analytics events and never
 * calls preventDefault, so the link works with or without JavaScript.
 */
export default function TrackedLink({
  href,
  location,
  productId,
  className,
  ariaLabel,
  children,
}: TrackedLinkProps) {
  const handleClick = () => {
    try {
      const utm: Record<string, string> = {};
      new URLSearchParams(window.location.search).forEach((value, key) => {
        if (key.startsWith('utm_')) utm[key] = value;
      });
      const destinationHost = new URL(href).hostname;

      window.gtag?.('event', 'affiliate_click', {
        link_location: location,
        product_id: productId ?? 'general',
        destination_host: destinationHost,
        transport_type: 'beacon',
        ...utm,
      });

      if (ADS_ID && ADS_LABEL) {
        window.gtag?.('event', 'conversion', { send_to: `${ADS_ID}/${ADS_LABEL}` });
      }

      window.fbq?.('trackCustom', 'AffiliateClick', {
        link_location: location,
        product_id: productId ?? 'general',
      });
    } catch {
      /* analytics must never affect navigation */
    }
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer sponsored"
      onClick={handleClick}
      aria-label={ariaLabel}
      className={className}
    >
      {children}
    </a>
  );
}
