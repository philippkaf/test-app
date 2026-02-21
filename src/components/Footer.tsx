import Link from "next/link";

const footerLinks = {
  Product: ["Features", "Pricing", "Changelog", "Roadmap"],
  Company: ["About", "Blog", "Careers", "Press"],
  Legal: ["Privacy", "Terms", "Security", "Cookies"],
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-terminal-border bg-terminal-surface">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-1">
            <Link
              href="/"
              className="text-xl font-bold text-terminal-green terminal-glow"
            >
              &gt; MyApp
            </Link>
            <p className="mt-3 text-sm text-terminal-green-dim">
              Build faster, ship better.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-terminal-green terminal-glow-sm">
                // {category}
              </h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-sm text-terminal-green-dim transition-colors hover:text-terminal-green"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-terminal-border pt-6">
          <p className="text-sm text-terminal-green-muted">
            © {currentYear} MyApp, Inc. — All rights reserved.{" "}
            <span className="text-terminal-green">_</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
