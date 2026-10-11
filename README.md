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

Every CTA goes to `DEFAULT_AFFILIATE_URL` (`https://bodegacooler.com/?click_id=ehaxusbr`) by default.
Product-page deep links (`<product url>?click_id=ehaxusbr`) are implemented but **OFF**, because
the merchant's handling of `click_id` on product pages was not independently verified (status `PLAUSIBLE`).
After the merchant/network confirms it, set `NEXT_PUBLIC_USE_PRODUCT_DEEP_LINKS=true` and redeploy.

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
