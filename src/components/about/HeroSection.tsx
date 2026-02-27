import { motion } from "framer-motion";
import { useParallax } from "@/hooks/use-scroll-animation";
import heroFashion from "@/assets/about/hero-fashion.jpg";
import { ChevronDown } from "lucide-react";

export function HeroSection() {
  const scrollY = useParallax();

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background */}
      <div
        className="absolute inset-0 z-0"
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      >
        <img
          src={heroFashion}
          alt="Premium fashion collection"
          className="w-full h-[120%] object-cover"
        />
        <div className="absolute inset-0 bg-foreground/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-sm uppercase tracking-[0.3em] text-background/70 mb-6 font-medium"
        >
          About Fitverse
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-background leading-[1.1] mb-8"
        >
          Redefining How Fashion
          <br />
          Is Experienced.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg sm:text-xl text-background/80 max-w-2xl mx-auto leading-relaxed font-light"
        >
          Where artificial intelligence meets personal style — empowering confidence,
          embracing sustainability, and transforming the way you discover fashion.
        </motion.p>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <span className="text-xs uppercase tracking-[0.2em] text-background/60">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-background/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
