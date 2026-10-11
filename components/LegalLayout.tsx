import type { ReactNode } from 'react';
import Link from 'next/link';
import SiteHeader from './SiteHeader';
import SiteFooter from './SiteFooter';
import { SITE } from '@/lib/site';

export default function LegalLayout({ title, children }: { title: string; children: ReactNode }) {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-4 py-10">
        <p className="mb-4 text-sm">
          <Link href="/" className="text-emerald-300 underline">
            ← Back to the guide
          </Link>
        </p>
        <h1 className="mb-2 text-3xl font-extrabold text-white">{title}</h1>
        <p className="mb-8 text-sm text-slate-400">Last updated: {SITE.lastChecked}</p>
        <div className="space-y-4 leading-relaxed text-slate-300">{children}</div>
      </main>
      <SiteFooter />
    </>
  );
}
