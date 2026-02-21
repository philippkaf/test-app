type TestimonialItem = {
  quote: string;
  name: string;
  role: string;
  avatar: string;
};

const testimonials: TestimonialItem[] = [
  {
    quote:
      "We cut our deployment time from 45 minutes to under 2 minutes. The team was skeptical at first, but now nobody wants to go back.",
    name: "Sarah K.",
    role: "CTO at Momentum",
    avatar: "SK",
  },
  {
    quote:
      "Finally a platform that doesn't make me feel like I need a DevOps PhD. We shipped 3x faster in our first month.",
    name: "Markus T.",
    role: "Lead Engineer at Flink",
    avatar: "MT",
  },
  {
    quote:
      "The integrations are incredible. It just slots into our existing workflow and makes everything better without changing how we work.",
    name: "Lena W.",
    role: "VP Engineering at Forma",
    avatar: "LW",
  },
];

function TestimonialCard({ quote, name, role, avatar }: TestimonialItem) {
  return (
    <figure className="flex flex-col justify-between rounded border border-terminal-border bg-terminal-surface p-6 transition-all hover:border-terminal-green hover:border-glow">
      <blockquote>
        <p className="text-sm leading-relaxed text-terminal-green-dim">
          <span className="text-terminal-green">&ldquo;</span>
          {quote}
          <span className="text-terminal-green">&rdquo;</span>
        </p>
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-3">
        <div className="flex size-10 items-center justify-center rounded border border-terminal-green-muted bg-terminal-green-faint text-xs font-bold text-terminal-green terminal-glow-sm">
          {avatar}
        </div>
        <div>
          <p className="text-sm font-semibold text-terminal-green">
            {name}
          </p>
          <p className="text-xs text-terminal-green-dim">{role}</p>
        </div>
      </figcaption>
    </figure>
  );
}

export function Testimonial() {
  return (
    <section
      id="testimonials"
      className="border-y border-terminal-border bg-terminal-surface px-6 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <p className="mb-3 font-mono text-sm uppercase tracking-widest text-terminal-green terminal-glow-sm">
            // testimonials
          </p>
          <h2 className="text-balance text-4xl font-bold tracking-tight text-terminal-green terminal-glow sm:text-5xl">
            Loved by engineering teams
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
}
