import { ScrollReveal } from "./ScrollReveal";
import { MouseGlow } from "./MouseGlow";
import { MagneticButton } from "./MagneticButton";
import { motion } from "framer-motion";
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
  { icon: Camera, title: "Virtual Try-On Engine", description: "AI-powered body mapping for realistic garment visualization", color: "hsl(175, 65%, 45%)" },
  { icon: ShoppingBag, title: "Integrated Shop Platform", description: "Curated collections from brands you love, all in one place", color: "hsl(28, 85%, 55%)" },
  { icon: Leaf, title: "Thrift Marketplace", description: "Buy and sell pre-loved fashion sustainably", color: "hsl(152, 55%, 38%)" },
  { icon: ShieldCheck, title: "Secure Image Processing", description: "Enterprise-grade encryption for all your photos and data", color: "hsl(190, 80%, 50%)" },
  { icon: Star, title: "Personalized Recommendations", description: "AI learns your taste to surface pieces you'll actually wear", color: "hsl(43, 80%, 58%)" },
];

function FeatureCard({ feature, index }: { feature: typeof features[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <ScrollReveal delay={0.08 * (index + 1)}>
      <MagneticButton strength={0.1}>
        <motion.div
          className="relative p-6 rounded-2xl border border-border/50 bg-card overflow-hidden cursor-default"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          whileHover={{ y: -6, transition: { duration: 0.3 } }}
        >
          {/* Bottom border glow */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-px"
            style={{
              background: isHovered
                ? `linear-gradient(90deg, transparent, ${feature.color}, transparent)`
                : "linear-gradient(90deg, transparent, transparent)",
              transition: "background 0.4s",
            }}
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
                stroke={feature.color}
                strokeWidth="1.5"
                strokeDasharray="138"
                animate={{ strokeDashoffset: isHovered ? 0 : 138 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />
            </svg>
          </div>

          <h3 className="font-display font-semibold mb-2">{feature.title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>

          {/* Hover number */}
          <span className="absolute top-4 right-5 text-6xl font-bold text-foreground/[0.03]">
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
          {/* Gradient arc */}
          <defs>
            <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(28, 85%, 55%)" />
              <stop offset="100%" stopColor="hsl(175, 65%, 45%)" />
            </linearGradient>
          </defs>
          <circle
            cx="60" cy="60" r="52"
            fill="none"
            stroke="url(#scoreGradient)"
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            className="transition-all duration-100"
            style={{
              filter: "drop-shadow(0 0 6px hsl(175, 65%, 45%, 0.4))",
            }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-4xl font-display font-bold">{score}</span>
          <span className="text-[10px] uppercase tracking-widest text-muted-foreground">Score</span>
        </div>
        {/* Pulse ring */}
        {hasAnimated && score >= 87 && (
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{ border: "1px solid hsl(175, 65%, 45%, 0.3)" }}
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
      <MouseGlow color="hsl(28, 85%, 55%)" size={500} opacity={0.05} />

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
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold">
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
            className="rounded-3xl p-10 sm:p-14 lg:p-16 relative overflow-hidden section-dark border"
            style={{ borderColor: "hsl(220, 12%, 18%)" }}
            whileHover={{ boxShadow: "0 20px 60px -20px hsl(175, 65%, 45%, 0.15)" }}
            transition={{ duration: 0.4 }}
          >
            {/* Decorative grid lines */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.04]">
              {Array.from({ length: 10 }).map((_, i) => (
                <div key={i} className="absolute top-0 bottom-0 border-l border-white" style={{ left: `${(i + 1) * 10}%` }} />
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 items-center relative z-10">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <TrendingUp className="w-5 h-5 text-tech-teal" />
                  <span className="text-xs uppercase tracking-[0.2em] font-semibold text-white/70">Special Feature</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-4">
                  TrendScore™
                </h3>
                <p className="leading-relaxed max-w-xl mb-6" style={{ color: "hsl(220, 8%, 55%)" }}>
                  Our AI-powered outfit rating system evaluates styling harmony, color balance,
                  and trend alignment — giving you a fashion confidence score before you commit to a purchase.
                </p>
                <div className="flex flex-wrap gap-3">
                  {["Styling Harmony", "Color Balance", "Trend Alignment"].map((tag, i) => (
                    <motion.span
                      key={tag}
                      className="px-3 py-1.5 rounded-full text-xs font-medium border text-white/70"
                      style={{ borderColor: "hsl(220, 12%, 25%)" }}
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
