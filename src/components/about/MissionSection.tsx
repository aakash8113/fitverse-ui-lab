import { ScrollReveal } from "./ScrollReveal";
import { MouseGlow } from "./MouseGlow";
import { MagneticButton } from "./MagneticButton";
import missionImg from "@/assets/about/mission-fashion.jpg";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const problems = [
  {
    keyword: "Confidence",
    text: "Online shoppers can't try before they buy, leading to uncertainty and dissatisfaction.",
  },
  {
    keyword: "Sustainability",
    text: "Fast fashion drives massive waste — 92 million tonnes of textile waste annually.",
  },
  {
    keyword: "Innovation",
    text: "Traditional e-commerce lacks the technology to bridge the physical-digital gap.",
  },
];

const stats = [
  { value: "73%", label: "Less Returns" },
  { value: "2M+", label: "Virtual Try-Ons" },
  { value: "4.9", label: "User Rating" },
];

export function MissionSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imgScale = useTransform(scrollYProgress, [0, 0.5], [1.1, 1]);
  const imgRotate = useTransform(scrollYProgress, [0, 1], [2, -1]);

  return (
    <section ref={sectionRef} className="relative py-24 sm:py-32 bg-background overflow-hidden">
      <MouseGlow color="hsl(262, 83%, 58%)" size={600} opacity={0.06} />

      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text */}
          <div>
            <ScrollReveal direction="left">
              <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4 font-medium">
                Our Mission
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-8">
                Making Fashion Personal
                <br />
                & Sustainable
              </h2>
            </ScrollReveal>

            <div className="space-y-8">
              {problems.map((p, i) => (
                <ScrollReveal key={p.keyword} direction="left" delay={0.15 * (i + 1)}>
                  <div className="group cursor-default">
                    <h3 className="text-lg font-semibold mb-2 inline-block relative">
                      {p.keyword}
                      <motion.span
                        className="absolute -bottom-1 left-0 w-full h-px bg-foreground"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 + i * 0.15, ease: "easeOut" }}
                        style={{ transformOrigin: "left" }}
                      />
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">{p.text}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal direction="left" delay={0.6}>
              <div className="flex gap-12 mt-12 pt-8 border-t border-border">
                {stats.map((stat, i) => (
                  <MagneticButton key={stat.label} strength={0.2}>
                    <div className="cursor-default">
                      <motion.p
                        className="text-3xl sm:text-4xl font-bold"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.8 + i * 0.15 }}
                      >
                        {stat.value}
                      </motion.p>
                      <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                    </div>
                  </MagneticButton>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Image with scroll-driven effects */}
          <ScrollReveal direction="right">
            <div className="relative group">
              <motion.div
                className="aspect-[4/5] rounded-2xl overflow-hidden"
                style={{ scale: imgScale, rotate: imgRotate }}
              >
                <img
                  src={missionImg}
                  alt="Modern fashion boutique interior"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Hover overlay with grain texture */}
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-all duration-500" />
              </motion.div>
              {/* Decorative frame */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border border-border rounded-2xl -z-10" />
              {/* Corner accents */}
              <motion.div
                className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-foreground/30 rounded-tl-lg"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              />
              <motion.div
                className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-foreground/30 rounded-br-lg"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 }}
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
