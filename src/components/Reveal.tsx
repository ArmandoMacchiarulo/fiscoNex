"use client";

import { useEffect, useRef, useState } from "react";

export default function Reveal({
  children,
  className = "",
  delayMs = 0,
  y = 12,
  once = true,
}: {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
  y?: number;
  once?: boolean;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Fallback: if IntersectionObserver not available
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) io.disconnect();
        } else if (!once) {
          setVisible(false);
        }
      },
      {
        // slightly before it fully enters the viewport
        root: null,
        rootMargin: "0px 0px -10% 0px",
        threshold: 0.15,
      }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [once]);

  return (
    <div
      ref={ref}
      className={`fn-reveal ${visible ? "is-visible" : ""} ${className}`}
      style={
        {
          // CSS vars used by globals.css
          "--fn-reveal-delay": `${delayMs}ms`,
          "--fn-reveal-y": `${y}px`,
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  );
}
