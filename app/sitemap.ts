import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(SITE.lastCheckedIso);
  const paths = ['', '/privacy', '/terms', '/affiliate-disclosure', '/contact'];
  return paths.map((path) => ({
    url: `${SITE.baseUrl}${path}`,
    lastModified,
    changeFrequency: (path === '' ? 'weekly' : 'yearly') as 'weekly' | 'yearly',
    priority: path === '' ? 1 : 0.3,
  }));
}
