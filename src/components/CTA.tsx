"use client";

export function CTA() {
  return (
    <section id="cta" className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-4xl rounded-3xl bg-gradient-to-br from-sky-500 to-blue-600 p-12 text-center shadow-2xl shadow-sky-500/20">
        <h2 className="text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Ready to ship faster?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-sky-100">
          Start for free, no credit card required. Upgrade when you&apos;re
          ready. Cancel any time.
        </p>

        <form
          className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            placeholder="Enter your work email"
            required
            className="flex-1 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm text-white placeholder-sky-200 outline-none backdrop-blur focus:border-white/40 focus:ring-2 focus:ring-white/30"
          />
          <button
            type="submit"
            className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-sky-600 shadow-md transition-all hover:bg-sky-50 hover:shadow-lg"
          >
            Get started free
          </button>
        </form>

        <p className="mt-4 text-xs text-sky-200">
          Free plan includes 3 projects · No credit card required
        </p>
      </div>
    </section>
  );
}
