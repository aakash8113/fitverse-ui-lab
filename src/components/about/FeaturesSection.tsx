import { ScrollReveal } from "./ScrollReveal";
import { MouseGlow } from "./MouseGlow";
import { MagneticButton } from "./MagneticButton";
import { motion, useMotionValue, useSpring } from "framer-motion";
import {
  Camera,
  ShoppingBag,
  Leaf,
  ShieldCheck,
  Star,
  TrendingUp,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";

const features = [
  { icon: Camera, title: "Virtual Try-On Engine", description: "AI-powered body mapping for realistic garment visualization" },
  { icon: ShoppingBag, title: "Integrated Shop Platform", description: "Curated collections from brands you love, all in one place" },
  { icon: Leaf, title: "Thrift Marketplace", description: "Buy and sell pre-loved fashion sustainably" },
  { icon: ShieldCheck, title: "Secure Image Processing", description: "Enterprise-grade encryption for all your photos and data" },
  { icon: Star, title: "Personalized Recommendations", description: "AI learns your taste to surface pieces you'll actually wear" },
];

function FeatureCard({ feature, index }: { feature: typeof features[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <ScrollReveal delay={0.08 * (index + 1)}>
      <MagneticButton strength={0.1}>
        <motion.div
          className="relative p-6 rounded-2xl border border-border/50 bg-background overflow-hidden cursor-default"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          whileHover={{ y: -6, transition: { duration: 0.3 } }}
        >
          {/* Bottom border glow */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-px"
            animate={{
              background: isHovered
                ? "linear-gradient(90deg, transparent, hsl(262, 83%, 58%), hsl(217, 91%, 60%), transparent)"
                : "linear-gradient(90deg, transparent, transparent)",
            }}
            transition={{ duration: 0.4 }}
          />

          {/* Icon with animated ring on hover */}
          <div className="relative w-12 h-12 mb-4">
            <div className="absolute inset-0 flex items-center justify-center">
              <feature.icon className="w-6 h-6 text-foreground relative z-10" />
            </div>
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 48 48">
              <motion.circle
                cx="24"
                cy="24"
                r="22"
                fill="none"
                stroke="hsl(262, 83%, 58%)"
                strokeWidth="1"
                strokeDasharray="138"
                animate={{ strokeDashoffset: isHovered ? 0 : 138 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />
            </svg>
          </div>

          <h3 className="font-semibold mb-2">{feature.title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>

          {/* Hover number */}
          <span className="absolute top-4 right-5 text-6xl font-bold text-foreground/[0.03] group-hover:text-foreground/[0.06] transition-colors">
            {String(index + 1).padStart(2, "0")}
          </span>
        </motion.div>
      </MagneticButton>
    </ScrollReveal>
  );
}

function TrendScoreCircle() {
  const [score, setScore] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let current = 0;
          const target = 87;
          const interval = setInterval(() => {
            current += 1;
            setScore(current);
            if (current >= target) clearInterval(interval);
          }, 20);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [hasAnimated]);

  const circumference = 2 * Math.PI * 52;
  const offset = circumference - (score / 100) * circumference;

  return (
    <MagneticButton strength={0.2}>
      <div ref={ref} className="relative w-40 h-40 mx-auto lg:mx-0 cursor-default">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
          <circle cx="60" cy="60" r="52" fill="none" stroke="hsl(var(--border))" strokeWidth="4" />
          {/* Glow track */}
          <circle
            cx="60" cy="60" r="52"
            fill="none"
            stroke="hsl(262, 83%, 58%)"
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            className="transition-all duration-100"
            style={{
              filter: "drop-shadow(0 0 6px hsl(262, 83%, 58%, 0.5))",
            }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-4xl font-bold">{score}</span>
          <span className="text-[10px] uppercase tracking-widest text-muted-foreground">Score</span>
        </div>
        {/* Pulse ring */}
        {hasAnimated && score >= 87 && (
          <motion.div
            className="absolute inset-0 rounded-full border border-accent/30"
            animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        )}
      </div>
    </MagneticButton>
  );
}

export function FeaturesSection() {
  return (
    <section className="relative py-24 sm:py-32 bg-background overflow-hidden">
      <MouseGlow color="hsl(262, 83%, 58%)" size={500} opacity={0.05} />

      <div className="section-container relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <motion.p
              className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4 font-medium"
              initial={{ opacity: 0, letterSpacing: "0.1em" }}
              whileInView={{ opacity: 1, letterSpacing: "0.25em" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Capabilities
            </motion.p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              Built for Modern Fashion
            </h2>
          </div>
        </ScrollReveal>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {features.map((f, i) => (
            <FeatureCard key={f.title} feature={f} index={i} />
          ))}
        </div>

        {/* TrendScore Highlight */}
        <ScrollReveal>
          <motion.div
            className="rounded-3xl p-10 sm:p-14 lg:p-16 relative overflow-hidden"
            style={{ backgroundColor: "hsl(40, 20%, 97%)" }}
            whileHover={{ boxShadow: "0 20px 60px -20px hsl(262, 83%, 58%, 0.15)" }}
            transition={{ duration: 0.4 }}
          >
            {/* Decorative grid lines */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
              {Array.from({ length: 10 }).map((_, i) => (
                <div key={i} className="absolute top-0 bottom-0 border-l border-foreground" style={{ left: `${(i + 1) * 10}%` }} />
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 items-center relative z-10">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <TrendingUp className="w-5 h-5" />
                  <span className="text-xs uppercase tracking-[0.2em] font-semibold">Special Feature</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                  TrendScore™
                </h3>
                <p className="text-muted-foreground leading-relaxed max-w-xl mb-6">
                  Our AI-powered outfit rating system evaluates styling harmony, color balance,
                  and trend alignment — giving you a fashion confidence score before you commit to a purchase.
                </p>
                <div className="flex flex-wrap gap-3">
                  {["Styling Harmony", "Color Balance", "Trend Alignment"].map((tag, i) => (
                    <motion.span
                      key={tag}
                      className="px-3 py-1.5 rounded-full text-xs font-medium border border-border bg-background"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </div>
              <TrendScoreCircle />
            </div>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
}
