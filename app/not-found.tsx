import Link from 'next/link';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-4 py-20 text-center">
        <h1 className="text-3xl font-extrabold text-white">Page not found</h1>
        <p className="mt-3 text-slate-300">That page does not exist.</p>
        <p className="mt-6">
          <Link href="/" className="inline-flex min-h-[48px] items-center rounded-xl bg-cta px-6 font-bold text-ink">
            Back to the guide
          </Link>
        </p>
      </main>
      <SiteFooter />
    </>
  );
}
