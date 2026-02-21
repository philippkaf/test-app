import Link from "next/link";

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-24 text-center scanlines">
      {/* Background grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,255,65,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,65,0.04) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      {/* Radial vignette */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, transparent 30%, #020c02 100%)",
        }}
      />

      {/* Badge */}
      <div className="mb-6 inline-flex items-center gap-2 rounded border border-terminal-green-muted bg-terminal-green-faint px-4 py-1.5 text-sm font-medium text-terminal-green terminal-glow-sm">
        <span className="size-1.5 animate-pulse rounded-full bg-terminal-green" />
        [STATUS: PUBLIC BETA]
      </div>

      {/* Headline */}
      <h1 className="text-balance text-5xl font-extrabold leading-tight tracking-tight text-terminal-green terminal-glow sm:text-6xl lg:text-7xl">
        Build faster,
        <br />
        <span className="text-terminal-green-dim">ship better</span>
      </h1>

      {/* Subheadline */}
      <p className="mt-6 max-w-2xl text-balance text-lg text-terminal-green-dim">
        <span className="text-terminal-green">&gt;</span> The modern platform
        for teams who want to move fast without breaking things. Designed for
        developers, built for scale.
      </p>

      {/* Actions */}
      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        <Link
          href="#cta"
          className="rounded border border-terminal-green bg-terminal-green px-6 py-3 text-base font-semibold text-terminal-bg shadow-lg shadow-terminal-green/20 transition-all hover:bg-terminal-green-dim hover:shadow-terminal-green/30"
        >
          $ ./start-free.sh
        </Link>
        <Link
          href="#features"
          className="rounded border border-terminal-green-muted px-6 py-3 text-base font-semibold text-terminal-green-dim transition-all hover:border-terminal-green hover:text-terminal-green border-glow"
        >
          --help
        </Link>
      </div>

      {/* Social proof */}
      <p className="mt-12 text-sm text-terminal-green-muted">
        Trusted by{" "}
        <span className="text-terminal-green terminal-glow-sm">2,000+</span>{" "}
        teams worldwide
      </p>
    </section>
  );
}
