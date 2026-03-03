import { ScrollReveal } from "./ScrollReveal";
import { GridBackground } from "./GridBackground";
import { MouseGlow } from "./MouseGlow";
import { MagneticButton } from "./MagneticButton";
import { Eye, Sparkles, Recycle, Users } from "lucide-react";
import { motion } from "framer-motion";
import solutionImg from "@/assets/about/solution-tech.jpg";
import { useState } from "react";

const approaches = [
  {
    icon: Eye,
    title: "AI Visualization Engine",
    description: "See exactly how garments look on your body using our proprietary computer vision technology.",
    accentColor: "hsl(175, 65%, 45%)",
  },
  {
    icon: Sparkles,
    title: "Smart Product Discovery",
    description: "AI-curated recommendations that learn your style preferences and body type.",
    accentColor: "hsl(28, 85%, 55%)",
  },
  {
    icon: Recycle,
    title: "Sustainable Marketplace",
    description: "A circular fashion ecosystem where pre-loved pieces find new homes.",
    accentColor: "hsl(152, 55%, 38%)",
  },
  {
    icon: Users,
    title: "User-Centered Design",
    description: "Every feature is built from real customer feedback and shopping behavior data.",
    accentColor: "hsl(190, 80%, 50%)",
  },
];

function GlowCard({ item, index }: { item: typeof approaches[0]; index: number }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <ScrollReveal delay={0.1 * (index + 1)}>
      <MagneticButton strength={0.15}>
        <motion.div
          className="relative group p-6 rounded-2xl border overflow-hidden cursor-default"
          style={{
            backgroundColor: "hsl(var(--surface-dark))",
            borderColor: isHovered ? item.accentColor : "hsl(220, 12%, 20%)",
          }}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          whileHover={{ y: -4, transition: { duration: 0.3 } }}
        >
          {/* Mouse-following spotlight */}
          {isHovered && (
            <div
              className="absolute w-40 h-40 rounded-full pointer-events-none transition-opacity duration-300"
              style={{
                left: mousePos.x - 80,
                top: mousePos.y - 80,
                background: `radial-gradient(circle, ${item.accentColor.replace(")", ", 0.15)")} 0%, transparent 70%)`,
              }}
            />
          )}

          {/* Top border glow on hover */}
          <motion.div
            className="absolute top-0 left-0 right-0 h-px"
            style={{
              background: `linear-gradient(90deg, transparent, ${item.accentColor}, transparent)`,
              opacity: isHovered ? 1 : 0,
              transition: "opacity 0.4s",
            }}
          />

          <div className="relative z-10">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
              style={{ backgroundColor: item.accentColor }}
            >
              <item.icon className="w-5 h-5 text-white" />
            </div>
            <h3 className="font-display font-semibold mb-2 text-white">{item.title}</h3>
            <p className="text-sm leading-relaxed" style={{ color: "hsl(220, 8%, 60%)" }}>{item.description}</p>
          </div>
        </motion.div>
      </MagneticButton>
    </ScrollReveal>
  );
}

export function SolutionSection() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden section-dark">
      {/* Interactive grid background */}
      <GridBackground />
      <MouseGlow color="hsl(175, 65%, 45%)" size={500} opacity={0.08} />

      <div className="section-container relative z-10">
        <ScrollReveal>
          <div className="text-center mb-20">
            <motion.p
              className="text-xs uppercase tracking-[0.25em] mb-4 font-medium"
              style={{ color: "hsl(175, 65%, 45%)" }}
              initial={{ opacity: 0, letterSpacing: "0.1em" }}
              whileInView={{ opacity: 1, letterSpacing: "0.25em" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              The Solution
            </motion.p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold leading-tight max-w-3xl mx-auto text-white">
              The Fitverse Approach
            </h2>
            <p className="mt-6 max-w-2xl mx-auto leading-relaxed" style={{ color: "hsl(220, 8%, 55%)" }}>
              We've built an integrated ecosystem that combines AI-powered virtual try-on,
              curated shopping, and a sustainable thrift marketplace — all in one platform.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <ScrollReveal direction="left">
            <div className="aspect-square rounded-2xl overflow-hidden relative group border border-white/10">
              <img
                src={solutionImg}
                alt="Fashion technology interface on tablet"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Tech overlay on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-foreground/20" />
                {/* Scanning line */}
                <motion.div
                  className="absolute left-0 right-0 h-0.5"
                  style={{ background: "linear-gradient(90deg, transparent, hsl(175, 65%, 45%), transparent)" }}
                  animate={{ top: ["0%", "100%", "0%"] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />
                {/* Corner brackets */}
                <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2" style={{ borderColor: "hsl(175, 65%, 45%, 0.7)" }} />
                <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2" style={{ borderColor: "hsl(175, 65%, 45%, 0.7)" }} />
                <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2" style={{ borderColor: "hsl(28, 85%, 55%, 0.7)" }} />
                <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2" style={{ borderColor: "hsl(28, 85%, 55%, 0.7)" }} />
              </div>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {approaches.map((item, i) => (
              <GlowCard key={item.title} item={item} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
