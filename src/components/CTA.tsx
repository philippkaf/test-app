"use client";

export function CTA() {
  return (
    <section id="cta" className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-4xl rounded border border-terminal-green bg-terminal-surface p-12 text-center border-glow">
        {/* Terminal window chrome */}
        <div className="mb-8 flex items-center gap-2">
          <div className="size-3 rounded-full bg-red-500/70" />
          <div className="size-3 rounded-full bg-yellow-500/70" />
          <div className="size-3 rounded-full bg-terminal-green/70" />
          <span className="ml-2 text-xs text-terminal-green-dim">
            ~/myapp — bash
          </span>
        </div>

        <h2 className="text-balance text-4xl font-bold tracking-tight text-terminal-green terminal-glow sm:text-5xl">
          Ready to ship faster?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-terminal-green-dim">
          Start for free, no credit card required. Upgrade when you&apos;re
          ready. Cancel any time.
        </p>

        <form
          className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            placeholder="user@company.com"
            required
            className="flex-1 rounded border border-terminal-green-muted bg-terminal-bg px-5 py-3 text-sm text-terminal-green placeholder-terminal-green-muted outline-none transition-all focus:border-terminal-green focus:ring-1 focus:ring-terminal-green/30"
          />
          <button
            type="submit"
            className="rounded border border-terminal-green bg-terminal-green px-6 py-3 text-sm font-semibold text-terminal-bg shadow-md shadow-terminal-green/20 transition-all hover:bg-terminal-green-dim hover:shadow-terminal-green/30"
          >
            $ ./run
          </button>
        </form>

        <p className="mt-4 text-xs text-terminal-green-muted">
          Free plan: 3 projects · No credit card · OSS-friendly
        </p>
      </div>
    </section>
  );
}
