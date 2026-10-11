export type Availability = 'in_stock' | 'sold_out' | 'unknown';
export type AffiliateStatus = 'VERIFIED' | 'PLAUSIBLE' | 'UNKNOWN';
export type ImageStatus = 'OBSERVED' | 'VERIFIED' | 'BROKEN';

export interface ProductImage {
  url: string;
  alt: string;
  source: string;
  /** Pixel dimensions are not known for merchant CDN images. */
  width: number | null;
  height: number | null;
  status: ImageStatus;
}

export interface Product {
  id: string;
  name: string;
  shortName: string;
  modelCode: string;
  category: string;
  productUrl: string;
  affiliateStatus: AffiliateStatus;
  availability: Availability;
  /** "From" price: the lowest listed variant. */
  price: number;
  /** Regular price as listed by the merchant, if any. */
  regularPrice: number | null;
  merchantDiscountLabel: string | null;
  currency: 'USD';
  merchantReviewCount: number | null;
  image: ProductImage;
  capacity: string;
  dualZone: string;
  appControl: string;
  noise: string;
  tempRange: string;
  power: string;
  sourcePage: string;
  lastVerified: string;
}
