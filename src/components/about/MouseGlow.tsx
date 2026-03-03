import { useEffect, useRef } from "react";

/**
 * A cursor-following radial glow that sits behind content.
 * Attach to any section via absolute positioning.
 */
export function MouseGlow({ color = "hsl(262, 83%, 58%)", size = 400, opacity = 0.12 }) {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = glowRef.current;
    if (!el) return;
    const parent = el.parentElement;
    if (!parent) return;

    const handleMove = (e: MouseEvent) => {
      const rect = parent.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      el.style.transform = `translate(${x - size / 2}px, ${y - size / 2}px)`;
      el.style.opacity = String(opacity);
    };

    const handleLeave = () => {
      el.style.opacity = "0";
    };

    parent.addEventListener("mousemove", handleMove);
    parent.addEventListener("mouseleave", handleLeave);
    return () => {
      parent.removeEventListener("mousemove", handleMove);
      parent.removeEventListener("mouseleave", handleLeave);
    };
  }, [size, opacity]);

  return (
    <div
      ref={glowRef}
      className="pointer-events-none absolute z-0 rounded-full blur-3xl transition-opacity duration-500"
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
        opacity: 0,
      }}
    />
  );
}
