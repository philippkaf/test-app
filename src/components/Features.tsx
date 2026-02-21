type Feature = {
  icon: string;
  title: string;
  description: string;
};

const features: Feature[] = [
  {
    icon: "⚡",
    title: "Lightning fast",
    description:
      "Optimized for performance from day one. Sub-second load times, globally distributed, always ready.",
  },
  {
    icon: "🔒",
    title: "Secure by default",
    description:
      "Enterprise-grade security built in. TLS everywhere, SOC 2 compliant, and regular third-party audits.",
  },
  {
    icon: "📦",
    title: "Zero config deploys",
    description:
      "Push to deploy. No YAML, no complex CI/CD setup. Ship from your terminal in seconds.",
  },
  {
    icon: "📈",
    title: "Built to scale",
    description:
      "From startup to enterprise. Auto-scaling infrastructure that grows with your business — no ops required.",
  },
  {
    icon: "🔗",
    title: "Integrates with everything",
    description:
      "Native integrations with GitHub, Slack, Datadog, and 100+ other tools your team already uses.",
  },
  {
    icon: "💬",
    title: "Real-time collaboration",
    description:
      "Work together seamlessly. Live previews, shared environments, and team-wide visibility.",
  },
];

function FeatureCard({ icon, title, description }: Feature) {
  return (
    <div className="group rounded border border-terminal-border bg-terminal-surface p-6 transition-all hover:border-terminal-green hover:border-glow">
      <div className="mb-4 flex size-12 items-center justify-center rounded border border-terminal-green-muted bg-terminal-green-faint text-2xl">
        {icon}
      </div>
      <h3 className="mb-2 text-base font-semibold text-terminal-green terminal-glow-sm">
        {title}
      </h3>
      <p className="text-sm leading-relaxed text-terminal-green-dim">
        {description}
      </p>
    </div>
  );
}

export function Features() {
  return (
    <section id="features" className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
      {/* Section header */}
      <div className="mb-16 text-center">
        <p className="mb-3 font-mono text-sm uppercase tracking-widest text-terminal-green terminal-glow-sm">
          // features
        </p>
        <h2 className="text-balance text-4xl font-bold tracking-tight text-terminal-green terminal-glow sm:text-5xl">
          Everything you need to ship
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-terminal-green-dim">
          No fluff, no bloat. Just the tools that actually move the needle.
        </p>
      </div>

      {/* Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </div>
    </section>
  );
}
