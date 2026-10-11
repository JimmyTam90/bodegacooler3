/** @type {import('next').NextConfig} */
const nextConfig = {
  // Served at https://primegearlab.com/bodegacooler via a Vercel rewrite on the parent domain.
  basePath: '/bodegacooler',
  poweredByHeader: false,
  images: {
    // Direct CDN URLs / no optimizer route, so images work behind the rewrite.
    unoptimized: true,
    // Only the merchant's Shopify-hosted path is permitted (no wildcard hosts).
    remotePatterns: [
      { protocol: 'https', hostname: 'bodegacooler.com', pathname: '/cdn/shop/**' },
    ],
  },
};

export default nextConfig;
