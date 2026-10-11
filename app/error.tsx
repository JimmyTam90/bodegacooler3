'use client';

export default function ErrorPage({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <main className="mx-auto max-w-3xl px-4 py-20 text-center">
      <h1 className="text-3xl font-extrabold text-white">Something went wrong</h1>
      <p className="mt-3 text-slate-300">Please try again.</p>
      <button
        type="button"
        onClick={() => reset()}
        className="mt-6 inline-flex min-h-[48px] items-center rounded-xl bg-cta px-6 font-bold text-ink"
      >
        Try again
      </button>
    </main>
  );
}
