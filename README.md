# PrimeGearLab: Bodega Cooler 12V guide (Next.js on Vercel)

Affiliate landing page served at `https://primegearlab.com/bodegacooler` (`basePath: '/bodegacooler'`).

## Run

```bash
npm install
npm run typecheck   # tsc --noEmit
npm run build       # next build
npm run qa          # static checks (placeholders, CTA/overlay rules, affiliate URL syntax, files)
npm run dev         # http://localhost:3000/bodegacooler
```

> These commands have **not** been run yet in the environment that generated this project
> (its network policy blocked the npm registry). Run them once before deploying.

## Where the data lives

- `lib/products.ts`: Product Data Manifest (single source of truth: URLs, prices, availability, images, specs).
  Header comment lists evidence sources and which products were excluded and why.
- `lib/site.ts`: business info, default affiliate URL, disclosure and footer text.
- `lib/affiliate.ts`: CTA destination logic.

## Affiliate routing (important)

Product CTAs (T50, T60, TWW75, TWW95 cards, hero, sticky bar, final T50 CTA) deep-link to the product's
own page with `?click_id=ehaxusbr` appended. Deep links are **ON by default**; set
`NEXT_PUBLIC_USE_PRODUCT_DEEP_LINKS=false` to send everything to `DEFAULT_AFFILIATE_URL`.
General CTAs ("Browse all Bodega fridges") always use `DEFAULT_AFFILIATE_URL`
(`https://bodegacooler.com/?click_id=ehaxusbr`).

Product URLs are the live pages found on bodegacooler.com (see `productUrl` in `lib/products.ts`; change a
URL there and the CTA follows). Whether the merchant credits `click_id` on product-page landings is not
independently verified (status `PLAUSIBLE`); confirm with the merchant/network.

## Environment variables

See `.env.example`. All tracking IDs are optional and read from the environment; none are hard-coded.

## Deploying behind primegearlab.com

Deploy this project to Vercel, then add rewrites in the Vercel project that serves `primegearlab.com`
(replace the destination host with this project's own Vercel URL):

```json
{
  "rewrites": [
    { "source": "/bodegacooler", "destination": "https://<this-project>.vercel.app/bodegacooler" },
    { "source": "/bodegacooler/:path*", "destination": "https://<this-project>.vercel.app/bodegacooler/:path*" }
  ]
}
```

Notes: `robots.txt` and `sitemap.xml` are served under `/bodegacooler/`; a crawler-wide `robots.txt` at the
domain root belongs to the parent project. Product images load directly from the merchant CDN (no image optimizer route).
