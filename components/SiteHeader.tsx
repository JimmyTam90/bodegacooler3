import Image from 'next/image';
import Link from 'next/link';
import { SITE } from '@/lib/site';

export default function SiteHeader() {
  return (
    <header className="border-b border-slate-800 bg-slate-900">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
        <Link href="/" className="flex min-h-[44px] items-center gap-2" aria-label="PrimeGearLab home">
          <Image
            src={SITE.logoPath}
            alt="PrimeGearLab logo"
            width={160}
            height={40}
            priority
            unoptimized
            className="h-8 w-auto"
          />
        </Link>
        <nav aria-label="Page sections" className="flex items-center gap-4 text-sm font-medium text-slate-200">
          <a href="#compare" className="flex min-h-[44px] items-center hover:text-emerald-300">
            Compare
          </a>
          <a href="#faq" className="flex min-h-[44px] items-center hover:text-emerald-300">
            FAQ
          </a>
        </nav>
      </div>
    </header>
  );
}
