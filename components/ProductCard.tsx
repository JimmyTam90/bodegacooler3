import Image from 'next/image';
import type { Product } from '@/lib/types';
import { productDestination } from '@/lib/affiliate';
import { usd } from '@/lib/format';
import CtaButton from './CtaButton';

/**
 * Mobile + desktop document flow: product info -> image -> CTA -> details.
 * The CTA is a separate block below the image. Nothing is absolutely positioned over the image.
 */
export default function ProductCard({ product, highlight = false }: { product: Product; highlight?: boolean }) {
  const href = productDestination(product);

  return (
    <article
      className={`flex flex-col gap-4 rounded-2xl border p-4 ${
        highlight ? 'border-emerald-500 bg-slate-800' : 'border-slate-700 bg-slate-800/60'
      }`}
    >
      <header>
        <h3 className="text-lg font-bold text-white">{product.shortName}</h3>
        <p className="text-sm text-slate-300">{product.capacity} · dual zone · 12V compressor</p>
        <p className="mt-2 text-xl font-extrabold text-white">
          From {usd(product.price)}
          {product.regularPrice ? (
            <span className="ml-2 text-sm font-normal text-slate-400 line-through">
              {usd(product.regularPrice)}
            </span>
          ) : null}
        </p>
        {product.merchantDiscountLabel ? (
          <p className="text-xs text-slate-400">{product.merchantDiscountLabel} · checked {product.lastVerified}</p>
        ) : null}
      </header>

      <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-white">
        <Image
          src={product.image.url}
          alt={product.image.alt}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-contain"
          loading="lazy"
          unoptimized
        />
      </div>

      <div className="flex flex-col gap-2">
        <CtaButton href={href} location={`card_${product.id}`} productId={product.id}>
          Shop {product.modelCode} at Bodegacooler.com
        </CtaButton>
      </div>

      <dl className="grid grid-cols-[auto_1fr] gap-x-3 gap-y-1 text-sm text-slate-300">
        <dt className="text-slate-400">App control</dt>
        <dd>{product.appControl}</dd>
        <dt className="text-slate-400">Zones</dt>
        <dd>{product.dualZone}</dd>
      </dl>
    </article>
  );
}
