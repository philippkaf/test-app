import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        terminal: {
          bg: "#020c02",
          surface: "#071207",
          border: "#0d2b0d",
          green: "#00ff41",
          "green-dim": "#00cc33",
          "green-muted": "#1a5c1a",
          "green-faint": "#0a2e0a",
          amber: "#ffb700",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-mono)", "monospace"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
