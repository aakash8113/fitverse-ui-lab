import { ScrollReveal } from "./ScrollReveal";
import { motion } from "framer-motion";
import sustainableImg from "@/assets/about/sustainable-fashion.jpg";
import { useParallax } from "@/hooks/use-scroll-animation";

export function ClosingSection() {
  const scrollY = useParallax();

  return (
    <section className="relative py-32 sm:py-40 overflow-hidden">
      {/* Parallax background */}
      <div
        className="absolute inset-0 z-0"
        style={{ transform: `translateY(${(scrollY - 3000) * 0.15}px)` }}
      >
        <img
          src={sustainableImg}
          alt="Sustainable fashion"
          className="w-full h-[140%] object-cover"
        />
        <div className="absolute inset-0 bg-foreground/70" />
      </div>

      <div className="relative z-10 section-container text-center">
        <ScrollReveal>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-background leading-tight max-w-3xl mx-auto">
            The Future of Fashion
            <br />
            Is Intelligent.
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="text-background/70 text-lg sm:text-xl max-w-2xl mx-auto mt-8 leading-relaxed font-light">
            We're building a world where artificial intelligence empowers every individual
            to express their unique style — sustainably, confidently, and without compromise.
            From India to the world, Fitverse is leading the next generation of fashion technology.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <div className="mt-10 flex justify-center">
            <div className="w-16 h-px bg-background/30" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
