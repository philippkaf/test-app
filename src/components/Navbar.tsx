import Link from "next/link";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Pricing", href: "#cta" },
];

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-terminal-border bg-terminal-bg/90 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-terminal-green terminal-glow"
        >
          &gt; My<span className="text-terminal-green-dim">App</span>
          <span className="ml-0.5 inline-block h-4 w-2 animate-pulse bg-terminal-green" />
        </Link>

        {/* Links */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium text-terminal-green-dim transition-all hover:text-terminal-green hover:terminal-glow-sm"
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
            className="hidden text-sm font-medium text-terminal-green-dim hover:text-terminal-green md:block"
          >
            ./sign-in
          </Link>
          <Link
            href="#cta"
            className="rounded border border-terminal-green px-4 py-1.5 text-sm font-semibold text-terminal-green transition-all hover:bg-terminal-green hover:text-terminal-bg border-glow"
          >
            $ get-started
          </Link>
        </div>
      </nav>
    </header>
  );
}
