import type { Product } from './types';

/**
 * PRODUCT DATA MANIFEST: single source of truth for every product fact on the page.
 *
 * Evidence notes
 * - Names, URLs, prices, regular prices and availability: observed on bodegacooler.com
 *   collection "Portable Freezer on Wheels" (/collections/portable-freezer) on 2026-10-11.
 * - "From" price = lowest variant. Prices change; the page says "checked <date>".
 * - Temperature range / noise / power: only where a third-party retailer listing states it
 *   (labelled "retailer listing"). Anything else is "See merchant page".
 * - Images: URLs observed in the merchant's page markup. The sandbox could not request the CDN
 *   directly (403 from egress policy), so status is OBSERVED, not VERIFIED.
 *
 * Excluded on purpose:
 * - IP4X 100QT Dual Zone and 79QT IPX4 Dual Zone: shown "Sold out" by the merchant.
 * - T36 38qt: collection page says "In stock" but another merchant page shows "0 left"
 *   (conflicting evidence), so it is not used as a recommended product.
 * - "K18": no such model found on the merchant site.
 */

const CDN = 'https://bodegacooler.com/cdn/shop';
const SOURCE = 'https://bodegacooler.com/collections/portable-freezer';
const CHECKED = '2026-10-11';

export const PRODUCTS: Product[] = [
  {
    id: 't50',
    name: 'BODEGAcooler Portable Freezer 53qt/50L with Flexible Dual Zone T50',
    shortName: 'Bodega T50',
    modelCode: 'T50',
    category: '12V Portable Refrigerators & Car Freezers',
    productUrl: 'https://bodegacooler.com/products/53-quart-50l-12v-portable-freezer-t50',
    affiliateStatus: 'PLAUSIBLE',
    availability: 'in_stock',
    price: 382.49,
    regularPrice: 449.99,
    merchantDiscountLabel: 'Merchant lists 15% off',
    currency: 'USD',
    merchantReviewCount: 231,
    image: {
      url: `${CDN}/files/BODEGAcooler_12V_Portable_Refrigerator_T50_53Qt_50L_Dual_Zone-New.webp?v=1782467633`,
      alt: 'Bodega T50 53 quart dual-zone 12V portable fridge freezer',
      source: 'bodegacooler.com product gallery (observed)',
      width: null,
      height: null,
      status: 'OBSERVED',
    },
    capacity: '53 qt / 50 L',
    dualZone: 'Yes',
    appControl: 'Yes (merchant lists app control)',
    noise: 'See merchant page',
    tempRange: '-4°F to 68°F (retailer listing)',
    power: '12/24V DC and 100-240V AC (retailer listing)',
    sourcePage: SOURCE,
    lastVerified: CHECKED,
  },
  {
    id: 't60',
    name: 'BODEGAcooler 12V Fridge 64qt/60L with Wheels Dual Zone T60',
    shortName: 'Bodega T60',
    modelCode: 'T60',
    category: '12V Portable Refrigerators & Car Freezers',
    productUrl: 'https://bodegacooler.com/products/64-quart-60l-12v-portable-car-fridge-t60',
    affiliateStatus: 'PLAUSIBLE',
    availability: 'in_stock',
    price: 383.99,
    regularPrice: 479.99,
    merchantDiscountLabel: 'Merchant lists 20% off',
    currency: 'USD',
    merchantReviewCount: 177,
    image: {
      url: `${CDN}/products/Portable_Fridge_T60.jpg?v=1776241334`,
      alt: 'Bodega T60 64 quart dual-zone 12V portable fridge on wheels',
      source: 'bodegacooler.com product gallery (observed)',
      width: null,
      height: null,
      status: 'OBSERVED',
    },
    capacity: '64 qt / 60 L',
    dualZone: 'Yes',
    appControl: 'Yes (merchant lists app control)',
    noise: 'See merchant page',
    tempRange: 'See merchant page',
    power: 'See merchant page',
    sourcePage: SOURCE,
    lastVerified: CHECKED,
  },
  {
    id: 'tww75',
    name: 'BODEGACOOLER 75L Dual-Zone Car Fridge | 80 Quart Portable 12V Refrigerator & Freezer',
    shortName: 'Bodega 80qt (TWW75)',
    modelCode: 'TWW75',
    category: '12V Portable Refrigerators & Car Freezers',
    productUrl: 'https://bodegacooler.com/products/80-quart-75l-portable-car-fridge-freezer',
    affiliateStatus: 'PLAUSIBLE',
    availability: 'in_stock',
    price: 599.99,
    regularPrice: 799.99,
    merchantDiscountLabel: 'Merchant lists 25% off',
    currency: 'USD',
    merchantReviewCount: 86,
    image: {
      url: `${CDN}/files/portable-refrigerator-80qt-tww75.jpg?v=1698916874`,
      alt: 'Bodega 80 quart TWW75 dual-zone 12V portable refrigerator',
      source: 'bodegacooler.com product gallery (observed)',
      width: null,
      height: null,
      status: 'OBSERVED',
    },
    capacity: '80 qt / 75 L',
    dualZone: 'Yes (45.5 L + 29.5 L, retailer listing)',
    appControl: 'Yes (merchant lists app control)',
    noise: '45 dB (retailer listing)',
    tempRange: '-4°F to 68°F (retailer listing)',
    power: '12/24V DC and 100-240V AC (retailer listing)',
    sourcePage: SOURCE,
    lastVerified: CHECKED,
  },
  {
    id: 'tww95',
    name: 'BODEGACOOLER 95L Dual-Zone Car Fridge | 100 Quart Portable 12V Refrigerator & Freezer',
    shortName: 'Bodega 100qt (TWW95)',
    modelCode: 'TWW95',
    category: '12V Portable Refrigerators & Car Freezers',
    productUrl: 'https://bodegacooler.com/products/100qt-portable-freezer-95l-dual-zone',
    affiliateStatus: 'PLAUSIBLE',
    availability: 'in_stock',
    price: 749.98,
    regularPrice: 999.99,
    merchantDiscountLabel: 'Merchant lists 25% off',
    currency: 'USD',
    merchantReviewCount: 33,
    image: {
      url: `${CDN}/files/100qt_portable_freezer_car_refrigerator_bodegacooler_TWW95.jpg?v=1688451269`,
      alt: 'Bodega 100 quart TWW95 dual-zone 12V portable refrigerator',
      source: 'bodegacooler.com product gallery (observed)',
      width: null,
      height: null,
      status: 'OBSERVED',
    },
    capacity: '100 qt / 95 L',
    dualZone: 'Yes',
    appControl: 'Yes (merchant lists Wi-Fi app control)',
    noise: 'See merchant page',
    tempRange: 'See merchant page',
    power: 'See merchant page',
    sourcePage: SOURCE,
    lastVerified: CHECKED,
  },
];

/** Hero / primary product. Must be in stock. */
export const PRIMARY_PRODUCT: Product = (() => {
  const p = PRODUCTS.find((x) => x.id === 't50' && x.availability === 'in_stock');
  if (!p) throw new Error('Primary product is not available; select the next available product.');
  return p;
})();

export const T50_EXTRA_IMAGES = [
  {
    url: `${CDN}/files/BODEGAcooler_12V_Portable_Refrigerator_T50_53Qt_50L_Dual_Zone_APP_control-2026.webp?v=1782468524`,
    alt: 'Bodega T50 app control screen for the dual-zone portable fridge',
    source: 'bodegacooler.com T50 gallery (observed)',
  },
  {
    url: `${CDN}/files/BODEGAcooler_12V_Portable_Refrigerator_T50_53Qt_50L_Dual_Zone_power_source.jpg?v=1776241269`,
    alt: 'Bodega T50 power source options graphic',
    source: 'bodegacooler.com T50 gallery (observed)',
  },
] as const;
