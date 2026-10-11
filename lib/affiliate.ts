import { DEFAULT_AFFILIATE_URL } from './site';
import type { Product } from './types';

/**
 * Affiliate routing.
 *
 * DEFAULT_AFFILIATE_URL is supplied by the publisher. The merchant's tracking structure
 * for product-page landings (?click_id= on a /products/... URL) has NOT been independently
 * verified, so product deep links are status PLAUSIBLE and are OFF by default.
 * Set NEXT_PUBLIC_USE_PRODUCT_DEEP_LINKS=true only after the merchant/network confirms
 * that click_id is honoured on product pages.
 *
 * No affiliate identifier is invented here: the click_id value is read from the
 * publisher-provided DEFAULT_AFFILIATE_URL.
 */

const USE_DEEP_LINKS = process.env.NEXT_PUBLIC_USE_PRODUCT_DEEP_LINKS === 'true';

const clickId = new URL(DEFAULT_AFFILIATE_URL).searchParams.get('click_id');

export function productDeepLink(product: Product): string {
  const url = new URL(product.productUrl);
  if (clickId) url.searchParams.set('click_id', clickId); // set() prevents duplicates
  return url.toString();
}

/** Destination for a CTA about a specific product. */
export function productDestination(product: Product): string {
  if (USE_DEEP_LINKS && product.availability === 'in_stock') {
    return productDeepLink(product);
  }
  return DEFAULT_AFFILIATE_URL;
}

/** Destination for general CTAs (header, sticky, FAQ). */
export const generalDestination: string = DEFAULT_AFFILIATE_URL;

export const deepLinksEnabled = USE_DEEP_LINKS;
