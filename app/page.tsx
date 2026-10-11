import Image from 'next/image';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import StickyCta from '@/components/StickyCta';
import CtaButton, { SecondaryLink } from '@/components/CtaButton';
import ProductCard from '@/components/ProductCard';
import FaqAccordion, { type FaqItem } from '@/components/FaqAccordion';
import { PRIMARY_PRODUCT, PRODUCTS, T50_EXTRA_IMAGES } from '@/lib/products';
import { generalDestination, productDestination } from '@/lib/affiliate';
import { AFFILIATE_DISCLOSURE, SITE } from '@/lib/site';
import { usd } from '@/lib/format';

const FAQS: FaqItem[] = [
  {
    question: 'Do these fridges need ice?',
    answer:
      'No. These are compressor-based 12V portable fridge/freezers, so they cool electrically instead of relying on ice. They do need a power source: a 12/24V DC outlet in a vehicle, or an AC outlet using the supplied adapter. Confirm the exact power options for your model on the merchant page.',
  },
  {
    question: 'What does dual zone mean?',
    answer:
      'A dual-zone fridge has two compartments with their own temperature settings, so one side can act as a freezer while the other stays cold for drinks and fresh food. Retailer listings for the T50 and TWW75 describe independent control from -4°F to 68°F.',
  },
  {
    question: 'Who sells these, and who ships the order?',
    answer:
      'Bodegacooler.com is the seller. PrimeGearLab is an independent guide and does not sell, ship or service products. Prices, shipping, warranty and returns are set by the merchant at checkout.',
  },
  {
    question: 'What shipping and warranty terms does the merchant state?',
    answer:
      'On its homepage, the merchant advertises free shipping, with orders packed in 1–2 business days and delivery estimated at 3–7 business days, a 30-day trial and a 24-month warranty. Terms can change and may vary by product, so check the merchant’s shipping, refund and warranty pages before you buy.',
  },
  {
    question: 'Have you tested these fridges yourselves?',
    answer:
      'No. This guide compiles published specifications and merchant information, and we say where a detail comes from. We have not hands-on tested these units, so we do not make performance claims such as cooling speed or battery run time.',
  },
];

export default function HomePage() {
  const p = PRIMARY_PRODUCT;
  const heroHref = productDestination(p);

  return (
    <>
      <SiteHeader />

      <main className="pb-28 md:pb-0">
        {/* HERO: mobile order is info -> image -> CTA. Desktop: text left, image right. */}
        <section aria-labelledby="hero-title" className="mx-auto max-w-6xl px-4 py-8 md:py-14">
          <div className="grid gap-6 md:grid-cols-2 md:grid-rows-[auto_auto] md:gap-x-10 md:gap-y-4">
            <div className="md:col-start-1 md:row-start-1">
              <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-emerald-400">
                Independent guide · Prices checked {SITE.lastChecked}
              </p>
              <h1 id="hero-title" className="text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
                Bodega Cooler 12V dual-zone portable fridges: T50 and model comparison
              </h1>
              <p className="mt-4 text-lg text-slate-300">
                An ice-free 12V/24V car fridge-freezer for RV campers, overlanders, road trippers and
                truck drivers. See how the {p.modelCode} stacks up against the larger Bodega models, then
                buy directly from the merchant.
              </p>
              <ul className="mt-4 space-y-2 text-slate-200">
                <li className="flex gap-2"><span aria-hidden="true" className="text-emerald-400">✓</span> Compressor cooling: no ice runs</li>
                <li className="flex gap-2"><span aria-hidden="true" className="text-emerald-400">✓</span> Dual zone: freeze one side, chill the other</li>
                <li className="flex gap-2"><span aria-hidden="true" className="text-emerald-400">✓</span> App control listed by the merchant</li>
              </ul>
            </div>

            <div className="md:col-start-2 md:row-span-2 md:row-start-1">
              <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-white">
                <Image
                  src={p.image.url}
                  alt={p.image.alt}
                  fill
                  priority
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-contain"
                  unoptimized
                />
              </div>
            </div>

            <div className="flex flex-col gap-3 md:col-start-1 md:row-start-2">
              <CtaButton href={heroHref} location="hero" productId={p.id}>
                Shop the {p.modelCode} at Bodegacooler.com
              </CtaButton>
              <SecondaryLink href="#compare">Compare models</SecondaryLink>
              <p className="text-sm text-slate-300">
                {p.shortName} ({p.capacity}) from <strong className="text-white">{usd(p.price)}</strong>
                {p.regularPrice ? <> · merchant lists regular price {usd(p.regularPrice)}</> : null}. Free
                shipping advertised by the merchant.
              </p>
              <p className="text-xs text-slate-400">{AFFILIATE_DISCLOSURE}</p>
            </div>
          </div>
        </section>

        {/* KEY BENEFITS */}
        <section aria-labelledby="benefits-title" className="border-y border-slate-800 bg-slate-900/60 px-4 py-10">
          <div className="mx-auto max-w-6xl">
            <h2 id="benefits-title" className="text-2xl font-bold text-white">Why buyers choose a 12V compressor fridge</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                ['No ice to buy', 'Electric compressor cooling replaces the daily ice run and the meltwater.'],
                ['Fridge and freezer in one', 'Dual-zone models let you set each side separately.'],
                ['Runs on vehicle or wall power', 'Retailer listings state 12/24V DC plus 100–240V AC for the T50 and TWW75.'],
                ['Phone control', 'The merchant lists app control on these models.'],
              ].map(([title, text]) => (
                <div key={title} className="rounded-xl border border-slate-700 bg-slate-800/60 p-4">
                  <h3 className="font-semibold text-white">{title}</h3>
                  <p className="mt-1 text-sm text-slate-300">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* T50 EXPLAINED */}
        <section aria-labelledby="t50-title" className="mx-auto max-w-6xl px-4 py-12">
          <h2 id="t50-title" className="text-2xl font-bold text-white">Bodega T50 at a glance</h2>
          <p className="mt-3 max-w-3xl text-slate-300">
            The T50 is the entry point to this guide: a 53 quart (50 L) dual-zone portable fridge-freezer.
            It is the best fit when you are packing for one to three people and want fridge and freezer space
            without moving up to the larger, pricier models.
          </p>
          <dl className="mt-6 grid max-w-3xl grid-cols-[auto_1fr] gap-x-6 gap-y-2 text-slate-200">
            <dt className="text-slate-400">Capacity</dt><dd>{p.capacity}</dd>
            <dt className="text-slate-400">Zones</dt><dd>{p.dualZone}</dd>
            <dt className="text-slate-400">App control</dt><dd>{p.appControl}</dd>
            <dt className="text-slate-400">Temperature range</dt><dd>{p.tempRange}</dd>
            <dt className="text-slate-400">Power</dt><dd>{p.power}</dd>
            <dt className="text-slate-400">Noise level</dt><dd>{p.noise}</dd>
          </dl>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {T50_EXTRA_IMAGES.map((img) => (
              <figure key={img.url} className="overflow-hidden rounded-xl border border-slate-700 bg-white">
                <div className="relative aspect-square w-full">
                  <Image
                    src={img.url}
                    alt={img.alt}
                    fill
                    sizes="(min-width: 640px) 50vw, 100vw"
                    className="object-contain"
                    loading="lazy"
                    unoptimized
                  />
                </div>
              </figure>
            ))}
          </div>
        </section>

        {/* USE CASES */}
        <section aria-labelledby="use-title" className="border-y border-slate-800 bg-slate-900/60 px-4 py-12">
          <div className="mx-auto max-w-6xl">
            <h2 id="use-title" className="text-2xl font-bold text-white">Who a 12V fridge-freezer suits</h2>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              <li className="rounded-xl border border-slate-700 bg-slate-800/60 p-4"><strong className="text-white">RV and van campers</strong><br /><span className="text-slate-300">Keep food cold off the grid without buying ice.</span></li>
              <li className="rounded-xl border border-slate-700 bg-slate-800/60 p-4"><strong className="text-white">Overlanders</strong><br /><span className="text-slate-300">Longer trips favor larger capacity and a freezer side.</span></li>
              <li className="rounded-xl border border-slate-700 bg-slate-800/60 p-4"><strong className="text-white">Road trippers</strong><br /><span className="text-slate-300">A mid-size unit covers weekend trips for a small group.</span></li>
              <li className="rounded-xl border border-slate-700 bg-slate-800/60 p-4"><strong className="text-white">Truck drivers</strong><br /><span className="text-slate-300">Meal-prep storage in the cab, powered by 12V or 24V.</span></li>
            </ul>
          </div>
        </section>

        {/* COMPARE */}
        <section id="compare" aria-labelledby="compare-title" className="mx-auto max-w-6xl scroll-mt-4 px-4 py-12">
          <h2 id="compare-title" className="text-2xl font-bold text-white">Bodega dual-zone models, side by side</h2>
          <p className="mt-3 max-w-3xl text-slate-300">
            All four are listed as in stock on the merchant’s site as of {SITE.lastChecked}. “From” prices are
            the lowest option; battery and power-station bundles cost more.
          </p>

          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {PRODUCTS.map((product) => (
              <ProductCard key={product.id} product={product} highlight={product.id === p.id} />
            ))}
          </div>

          <div className="mt-10 overflow-x-auto rounded-xl border border-slate-700">
            <table className="w-full min-w-[640px] border-collapse text-left text-sm">
              <caption className="sr-only">Bodega dual-zone portable fridge comparison</caption>
              <thead className="bg-slate-800 text-slate-200">
                <tr>
                  <th scope="col" className="p-3">Spec</th>
                  {PRODUCTS.map((x) => (
                    <th key={x.id} scope="col" className="p-3">{x.modelCode}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-700 text-slate-300">
                {(
                  [
                    ['Capacity', (x) => x.capacity],
                    ['Dual-zone control', (x) => x.dualZone],
                    ['App control', (x) => x.appControl],
                    ['Noise level', (x) => x.noise],
                    ['Temperature range', (x) => x.tempRange],
                    ['Power', (x) => x.power],
                    ['From price', (x) => usd(x.price)],
                    ['Merchant regular price', (x) => (x.regularPrice ? usd(x.regularPrice) : '—')],
                  ] as [string, (x: (typeof PRODUCTS)[number]) => string][]
                ).map(([label, get]) => (
                  <tr key={label}>
                    <th scope="row" className="bg-slate-900 p-3 font-medium text-slate-200">{label}</th>
                    {PRODUCTS.map((x) => (
                      <td key={x.id} className="p-3 align-top">{get(x)}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-slate-400">
            Prices, discounts and stock are as shown on Bodegacooler.com on {SITE.lastChecked} and can change.
            Items marked “retailer listing” come from third-party retailer pages, and “See merchant page” means we
            could not confirm the detail. Check the product page before buying.
          </p>
        </section>

        {/* HOW TO CHOOSE */}
        <section aria-labelledby="choose-title" className="border-y border-slate-800 bg-slate-900/60 px-4 py-12">
          <div className="mx-auto max-w-3xl">
            <h2 id="choose-title" className="text-2xl font-bold text-white">How to choose a size</h2>
            <p className="mt-3 text-slate-300">
              This is our general guidance, not a tested recommendation. Start from how many people you are
              feeding and for how long.
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-300">
              <li>Solo or couple, weekend trips: the T50 (53 qt) is the compact option here.</li>
              <li>Small family or longer trips: step up to the T60 (64 qt) for a similar price.</li>
              <li>Extended overlanding or a group: the TWW75 (80 qt) or TWW95 (100 qt) add capacity.</li>
              <li>Measure your vehicle’s cargo space first; larger units are bigger and heavier.</li>
            </ul>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" aria-labelledby="faq-title" className="mx-auto max-w-3xl scroll-mt-4 px-4 py-12">
          <h2 id="faq-title" className="mb-6 text-2xl font-bold text-white">Frequently asked questions</h2>
          <FaqAccordion items={FAQS} />
        </section>

        {/* FINAL CTA: info -> image -> CTA */}
        <section aria-labelledby="final-title" className="border-t border-slate-800 bg-slate-900/60 px-4 py-12">
          <div className="mx-auto max-w-md">
            <h2 id="final-title" className="text-2xl font-bold text-white">Ready to see the T50?</h2>
            <p className="mt-2 text-slate-300">
              {p.shortName} from {usd(p.price)} at Bodegacooler.com. Check current price, stock and shipping
              terms on the merchant page.
            </p>
            <div className="relative mt-5 aspect-square w-full overflow-hidden rounded-2xl bg-white">
              <Image
                src={p.image.url}
                alt={p.image.alt}
                fill
                sizes="(min-width: 448px) 448px, 100vw"
                className="object-contain"
                loading="lazy"
                unoptimized
              />
            </div>
            <div className="mt-4 flex flex-col gap-3">
              <CtaButton href={heroHref} location="final" productId={p.id}>
                Shop the {p.modelCode} at Bodegacooler.com
              </CtaButton>
              <CtaButton href={generalDestination} location="final_all_models">
                Browse all Bodega fridges
              </CtaButton>
              <p className="text-xs text-slate-400">{AFFILIATE_DISCLOSURE}</p>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
      <StickyCta />
    </>
  );
}
