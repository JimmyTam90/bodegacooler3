import { DEFAULT_AFFILIATE_URL } from './site';
import type { Product } from './types';

/**
 * Affiliate routing.
 *
 * Product CTAs deep-link to the product's own page on Bodegacooler.com with the publisher's
 * click_id appended, e.g. https://bodegacooler.com/products/<slug>?click_id=ehaxusbr.
 * Deep links are ON by default (publisher decision). Set NEXT_PUBLIC_USE_PRODUCT_DEEP_LINKS=false
 * to fall back to DEFAULT_AFFILIATE_URL for every CTA.
 *
 * Note: the product pages load with the parameter attached, but whether the merchant's tracking
 * credits click_id on product-page landings has not been independently verified
 * (affiliateStatus stays PLAUSIBLE in lib/products.ts). Confirm with the merchant/network.
 *
 * General CTAs ("Browse all Bodega fridges") always use DEFAULT_AFFILIATE_URL.
 * No identifier is invented here: the click_id value is read from DEFAULT_AFFILIATE_URL.
 */

const USE_DEEP_LINKS = process.env.NEXT_PUBLIC_USE_PRODUCT_DEEP_LINKS !== 'false';

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

/** Destination for general CTAs (browse all, etc.). */
export const generalDestination: string = DEFAULT_AFFILIATE_URL;

export const deepLinksEnabled = USE_DEEP_LINKS;
