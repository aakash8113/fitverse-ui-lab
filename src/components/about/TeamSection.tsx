import { ScrollReveal } from "./ScrollReveal";
import { MagneticButton } from "./MagneticButton";
import { MouseGlow } from "./MouseGlow";
import { motion } from "framer-motion";
import { useState } from "react";

const team = [
  {
    name: "Alex Chen",
    role: "CEO & Co-founder",
    focus: "Vision & Strategy",
    bio: "Former product lead at a leading fashion tech company. Passionate about democratizing personal style through technology.",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    accent: "hsl(28, 85%, 55%)",
  },
  {
    name: "Sarah Williams",
    role: "CTO & Co-founder",
    focus: "AI & Engineering",
    bio: "Computer vision researcher with a PhD from Stanford. Built AI systems processing millions of images daily.",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    accent: "hsl(175, 65%, 45%)",
  },
  {
    name: "Marcus Johnson",
    role: "Head of AI",
    focus: "Machine Learning",
    bio: "Previously at a major tech company's AI research lab. Specializes in generative models and real-time rendering.",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    accent: "hsl(190, 80%, 50%)",
  },
  {
    name: "Emma Davis",
    role: "Head of Design",
    focus: "UX & Brand",
    bio: "Award-winning designer who led design at two successful fashion startups. Obsessed with pixel-perfect interfaces.",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
    accent: "hsl(43, 80%, 58%)",
  },
];

function TeamCard({ member, index }: { member: typeof team[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <ScrollReveal delay={0.12 * (index + 1)}>
      <MagneticButton strength={0.12}>
        <div
          className="group cursor-default"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="aspect-[3/4] rounded-2xl overflow-hidden mb-5 relative">
            <motion.img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover"
              animate={{ scale: isHovered ? 1.08 : 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
            {/* Hover overlay with bio */}
            <motion.div
              className="absolute inset-0 flex items-end p-5"
              animate={{
                backgroundColor: isHovered ? "rgba(0,0,0,0.65)" : "rgba(0,0,0,0)",
              }}
              transition={{ duration: 0.4 }}
            >
              <motion.div
                animate={{
                  opacity: isHovered ? 1 : 0,
                  y: isHovered ? 0 : 15,
                }}
                transition={{ duration: 0.4 }}
              >
                <p className="text-white text-sm leading-relaxed">{member.bio}</p>
                <span
                  className="inline-block mt-3 px-2 py-1 rounded text-[10px] uppercase tracking-wider border"
                  style={{ color: member.accent, borderColor: member.accent + "60" }}
                >
                  {member.focus}
                </span>
              </motion.div>
            </motion.div>

            {/* Corner scan brackets */}
            {[
              "top-3 left-3 border-t border-l",
              "top-3 right-3 border-t border-r",
              "bottom-3 left-3 border-b border-l",
              "bottom-3 right-3 border-b border-r",
            ].map((pos, i) => (
              <motion.div
                key={pos}
                className={`absolute w-6 h-6 ${pos}`}
                style={{ borderColor: member.accent + "80" }}
                animate={{ opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
              />
            ))}
          </div>

          <h3 className="font-display font-semibold text-lg">{member.name}</h3>
          <p className="text-sm text-muted-foreground">{member.role}</p>
        </div>
      </MagneticButton>
    </ScrollReveal>
  );
}

export function TeamSection() {
  return (
    <section className="relative py-24 sm:py-32 bg-background overflow-hidden">
      <MouseGlow color="hsl(28, 85%, 55%)" size={500} opacity={0.04} />

      <div className="section-container relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4 font-medium">
              The People
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold">
              Meet Our Team
            </h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              A multidisciplinary team united by the belief that fashion should be personal, accessible, and sustainable.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, i) => (
            <TeamCard key={member.name} member={member} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
