import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MyApp — Build faster, ship better",
  description:
    "The modern platform for teams who want to move fast without breaking things.",
  openGraph: {
    title: "MyApp — Build faster, ship better",
    description:
      "The modern platform for teams who want to move fast without breaking things.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="scroll-smooth">
      <body className={`${geistMono.variable} font-mono antialiased`}>
        {children}
      </body>
    </html>
  );
}
