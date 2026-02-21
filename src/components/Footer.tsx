import Link from "next/link";

const footerLinks = {
  Product: ["Features", "Pricing", "Changelog", "Roadmap"],
  Company: ["About", "Blog", "Careers", "Press"],
  Legal: ["Privacy", "Terms", "Security", "Cookies"],
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-1">
            <Link
              href="/"
              className="text-xl font-bold text-slate-900 dark:text-white"
            >
              My<span className="text-sky-500">App</span>
            </Link>
            <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">
              Build faster, ship better.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-900 dark:text-white">
                {category}
              </h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-sm text-slate-500 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-slate-200 pt-6 dark:border-slate-800">
          <p className="text-sm text-slate-400 dark:text-slate-500">
            © {currentYear} MyApp, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
