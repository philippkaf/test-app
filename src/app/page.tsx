import { Navbar } from "@/components/Navbar";
import { HeroImage } from "@/components/HeroImage";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Testimonial } from "@/components/Testimonial";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-terminal-bg">
      <Navbar />
      <HeroImage />
      <Hero />
      <Features />
      <Testimonial />
      <CTA />
      <Footer />
    </main>
  );
}
