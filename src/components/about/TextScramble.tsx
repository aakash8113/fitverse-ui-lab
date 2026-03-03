import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";

interface TextScrambleProps {
  text: string;
  className?: string;
  delay?: number;
  speed?: number;
}

/**
 * Text that scrambles in letter-by-letter when it enters the viewport.
 */
export function TextScramble({ text, className = "", delay = 0, speed = 30 }: TextScrambleProps) {
  const [displayed, setDisplayed] = useState("");
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    const timeout = setTimeout(() => {
      let iteration = 0;
      const totalIterations = text.length * 3; // each char gets 3 scramble frames

      const interval = setInterval(() => {
        const resolved = Math.floor(iteration / 3);
        let result = text.slice(0, resolved);

        // Add scramble characters for unresolved positions
        for (let i = resolved; i < text.length; i++) {
          if (text[i] === " ") {
            result += " ";
          } else if (iteration > i * 2) {
            result += chars[Math.floor(Math.random() * chars.length)];
          } else {
            result += " ";
          }
        }

        setDisplayed(result);
        iteration++;

        if (iteration > totalIterations) {
          setDisplayed(text);
          clearInterval(interval);
        }
      }, speed);

      return () => clearInterval(interval);
    }, delay * 1000);

    return () => clearTimeout(timeout);
  }, [hasStarted, text, delay, speed]);

  return (
    <span ref={ref} className={className}>
      {hasStarted ? displayed : "\u00A0"}
    </span>
  );
}
