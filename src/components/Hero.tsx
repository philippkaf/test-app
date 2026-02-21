import Link from "next/link";

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-24 text-center">
      {/* Background gradient */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(14,165,233,0.15),transparent)]" />
      </div>

      {/* Badge */}
      <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-4 py-1.5 text-sm font-medium text-sky-700 dark:border-sky-800 dark:bg-sky-950 dark:text-sky-300">
        <span className="size-1.5 rounded-full bg-sky-500" />
        Now in public beta
      </div>

      {/* Headline */}
      <h1 className="text-balance text-5xl font-extrabold leading-tight tracking-tight text-slate-900 dark:text-white sm:text-6xl lg:text-7xl">
        Build faster,{" "}
        <span className="bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">
          ship better
        </span>
      </h1>

      {/* Subheadline */}
      <p className="mt-6 max-w-2xl text-balance text-lg text-slate-600 dark:text-slate-400">
        The modern platform for teams who want to move fast without breaking
        things. Designed for developers, built for scale.
      </p>

      {/* Actions */}
      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        <Link
          href="#cta"
          className="rounded-full bg-sky-500 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-sky-500/30 transition-all hover:bg-sky-600 hover:shadow-sky-600/30"
        >
          Start for free
        </Link>
        <Link
          href="#features"
          className="rounded-full border border-slate-200 bg-white px-6 py-3 text-base font-semibold text-slate-700 transition-all hover:border-slate-300 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
        >
          See how it works
        </Link>
      </div>

      {/* Social proof */}
      <p className="mt-12 text-sm text-slate-500 dark:text-slate-500">
        Trusted by{" "}
        <span className="font-semibold text-slate-900 dark:text-white">
          2,000+
        </span>{" "}
        teams worldwide
      </p>
    </section>
  );
}
