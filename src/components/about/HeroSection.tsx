import { motion, useScroll, useTransform } from "framer-motion";
import heroFashion from "@/assets/about/hero-fashion.jpg";
import { ChevronDown } from "lucide-react";
import { useRef } from "react";
import { FloatingParticles } from "./FloatingParticles";
import { TextScramble } from "./TextScramble";
import { MouseGlow } from "./MouseGlow";

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const imgY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.8], [0.45, 0.85]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section ref={sectionRef} className="relative h-screen flex items-center justify-center overflow-hidden bg-foreground">
      {/* Parallax Background */}
      <motion.div className="absolute inset-0 z-0" style={{ y: imgY }}>
        <img
          src={heroFashion}
          alt="Premium fashion collection"
          className="w-full h-[130%] object-cover"
        />
        <motion.div
          className="absolute inset-0"
          style={{
            opacity: overlayOpacity,
            background: "linear-gradient(135deg, hsl(220, 20%, 8%) 0%, hsl(220, 20%, 8%, 0.6) 50%, hsl(175, 65%, 45%, 0.15) 100%)",
          }}
        />
      </motion.div>

      {/* Floating Particles — amber + teal */}
      <FloatingParticles count={15} color="hsl(28, 85%, 55%)" />
      <FloatingParticles count={15} color="hsl(175, 65%, 45%)" />

      {/* Mouse Glow — teal */}
      <MouseGlow color="hsl(175, 65%, 45%)" size={500} opacity={0.1} />

      {/* Scan Line Effect */}
      <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
        <motion.div
          className="absolute left-0 right-0 h-px"
          style={{ background: "linear-gradient(90deg, transparent, hsl(175, 65%, 45%, 0.3), transparent)" }}
          animate={{ top: ["-5%", "105%"] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear", repeatDelay: 3 }}
        />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-4 max-w-5xl mx-auto"
        style={{ y: textY, opacity: textOpacity }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/15 text-xs uppercase tracking-[0.3em] text-white/60 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-tech-teal animate-pulse" />
            Fitverse
          </span>
        </motion.div>

        <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-bold text-white leading-[1.05] mb-8">
          <TextScramble
            text="Redefining How Fashion"
            className="block"
            delay={0.5}
            speed={25}
          />
          <TextScramble
            text="Is Experienced."
            className="block"
            delay={1.2}
            speed={25}
          />
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed font-light"
        >
          Where artificial intelligence meets personal style — empowering confidence,
          embracing sustainability, and transforming the way you discover fashion.
        </motion.p>

        {/* Animated line — amber to teal */}
        <motion.div
          className="mx-auto mt-10 h-px"
          style={{ background: "linear-gradient(90deg, transparent, hsl(28, 85%, 55%), hsl(175, 65%, 45%), transparent)" }}
          initial={{ width: 0 }}
          animate={{ width: "200px" }}
          transition={{ duration: 1.5, delay: 2.2 }}
        />
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
      >
        <span className="text-xs uppercase tracking-[0.2em] text-white/40">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-white/40" />
        </motion.div>
      </motion.div>

      {/* Bottom gradient fade to background */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-[2]" />
    </section>
  );
}
