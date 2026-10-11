import { generalDestination, productDestination } from '@/lib/affiliate';
import { PRIMARY_PRODUCT } from '@/lib/products';
import { usd } from '@/lib/format';
import TrackedLink from './TrackedLink';

/**
 * Separate sticky bar for mobile only. It is its own fixed element at the bottom of the
 * viewport and is not attached to, or positioned over, any product image.
 */
export default function StickyCta() {
  const href = productDestination(PRIMARY_PRODUCT) || generalDestination;

  return (
    <div
      className="pointer-events-auto fixed inset-x-0 bottom-0 z-50 border-t border-slate-700 bg-slate-900/95 px-4 pt-3 backdrop-blur md:hidden"
      style={{ paddingBottom: 'max(12px, env(safe-area-inset-bottom))' }}
    >
      <TrackedLink
        href={href}
        location="sticky_mobile"
        productId={PRIMARY_PRODUCT.id}
        className="flex min-h-[48px] w-full items-center justify-center rounded-xl bg-cta px-4 py-3 text-center text-base font-extrabold text-ink"
      >
        Shop {PRIMARY_PRODUCT.modelCode} · from {usd(PRIMARY_PRODUCT.price)}
      </TrackedLink>
    </div>
  );
}
