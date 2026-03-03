import { ScrollReveal } from "./ScrollReveal";
import { FloatingParticles } from "./FloatingParticles";
import { TextScramble } from "./TextScramble";
import sustainableImg from "@/assets/about/sustainable-fashion.jpg";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function ClosingSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imgY = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.6, 0.7, 0.8]);

  return (
    <section ref={sectionRef} className="relative py-32 sm:py-40 overflow-hidden">
      {/* Background image with scroll-driven parallax */}
      <motion.div className="absolute inset-0 z-0 overflow-hidden" style={{ y: imgY }}>
        <img
          src={sustainableImg}
          alt="Sustainable fashion"
          className="absolute inset-0 w-full h-[140%] object-cover -top-[20%]"
        />
        <motion.div className="absolute inset-0 bg-foreground" style={{ opacity: overlayOpacity }} />
      </motion.div>

      {/* Particles */}
      <FloatingParticles count={15} color="hsl(0, 0%, 100%)" />

      {/* Scanning line */}
      <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
        <motion.div
          className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"
          animate={{ top: ["-5%", "105%"] }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear", repeatDelay: 2 }}
        />
      </div>

      <div className="relative z-10 section-container text-center">
        <ScrollReveal>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight max-w-3xl mx-auto">
            <TextScramble text="The Future of Fashion" delay={0.2} speed={30} />
            <br />
            <TextScramble text="Is Intelligent." delay={0.8} speed={30} />
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="text-white/70 text-lg sm:text-xl max-w-2xl mx-auto mt-8 leading-relaxed font-light">
            We're building a world where artificial intelligence empowers every individual
            to express their unique style — sustainably, confidently, and without compromise.
            From India to the world, Fitverse is leading the next generation of fashion technology.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <motion.div
            className="mt-10 mx-auto h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"
            initial={{ width: 0 }}
            whileInView={{ width: 120 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.6 }}
          />
        </ScrollReveal>
      </div>
    </section>
  );
}
