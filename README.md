# MyApp Landing Page

A modern, production-ready landing page built with **Next.js 15**, **TypeScript**, and **Tailwind CSS**.

## Tech Stack

| Tool | Purpose |
|---|---|
| [Next.js 15](https://nextjs.org) | React framework (App Router) |
| [TypeScript](https://typescriptlang.org) | Type safety |
| [Tailwind CSS](https://tailwindcss.com) | Utility-first styling |
| [Vercel](https://vercel.com) | Deployment & hosting |

## Project Structure

```
src/
├── app/
│   ├── layout.tsx        # Root layout with metadata & fonts
│   ├── page.tsx          # Landing page entry point
│   └── globals.css       # Global styles & Tailwind directives
└── components/
    ├── Navbar.tsx         # Fixed navigation bar
    ├── Hero.tsx           # Hero section with CTA
    ├── Features.tsx       # Feature grid
    ├── Testimonial.tsx    # Testimonial cards
    ├── CTA.tsx            # Email capture / call to action
    └── Footer.tsx         # Footer with links
```

## Getting Started

### Prerequisites

- Node.js 18.18+ or newer
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd test-app

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Create production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Deploy to Vercel

The easiest way to deploy is via the [Vercel Platform](https://vercel.com/new).

### Option 1: Vercel CLI

```bash
npm i -g vercel
vercel
```

### Option 2: GitHub Integration

1. Push your code to a GitHub repository
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import your repository
4. Click **Deploy** — Vercel auto-detects Next.js

### Environment Variables

Copy `.env.example` to `.env.local` and fill in your values:

```bash
cp .env.example .env.local
```

## Customization

- **Brand colors** — edit `tailwind.config.ts` → `theme.extend.colors`
- **Content** — update text in each component file under `src/components/`
- **Metadata** — update `title`, `description`, and OpenGraph tags in `src/app/layout.tsx`
- **Favicon** — replace `public/favicon.ico`

## License

MIT
