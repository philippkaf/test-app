import Link from "next/link";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Pricing", href: "#cta" },
];

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur-md dark:border-slate-800/80 dark:bg-slate-950/80">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-slate-900 dark:text-white"
        >
          My<span className="text-sky-500">App</span>
        </Link>

        {/* Links */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <Link
            href="#"
            className="hidden text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white md:block"
          >
            Sign in
          </Link>
          <Link
            href="#cta"
            className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-slate-700 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100"
          >
            Get started
          </Link>
        </div>
      </nav>
    </header>
  );
}
