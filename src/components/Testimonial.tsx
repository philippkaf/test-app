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
    <figure className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
      <blockquote>
        <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
          &ldquo;{quote}&rdquo;
        </p>
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-3">
        <div className="flex size-10 items-center justify-center rounded-full bg-sky-100 text-xs font-bold text-sky-700 dark:bg-sky-900 dark:text-sky-300">
          {avatar}
        </div>
        <div>
          <p className="text-sm font-semibold text-slate-900 dark:text-white">
            {name}
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-400">{role}</p>
        </div>
      </figcaption>
    </figure>
  );
}

export function Testimonial() {
  return (
    <section
      id="testimonials"
      className="bg-slate-50 px-6 py-24 dark:bg-slate-900/50 sm:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-sky-500">
            Testimonials
          </p>
          <h2 className="text-balance text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
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
