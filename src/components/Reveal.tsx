"use client";

import { useEffect, useRef, useState } from "react";

export default function Reveal({
  children,
  className = "",
  delayMs = 0,
  x = 0,
  y = 12,
  once = true,
}: {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
  x?: number;
  y?: number;
  once?: boolean;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    // If the element lives inside a scrollable container (e.g. .fn-snap),
    // use it as the observer root so reveals work with internal scrolling.
    const root = (el.closest?.(".fn-snap") as HTMLElement | null) ?? null;

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
        root,
        rootMargin: "0px 0px -10% 0px",
        threshold: 0.15,
      },
    );

    io.observe(el);
    return () => io.disconnect();
  }, [once]);

  return (
    <div
      ref={ref}
      // Outer wrapper: MUST keep layout (Firefox SVG 0x0 fix)
      className={`fn-reveal ${className}`}
      style={
        {
          width: "100%",
          display: "block",
          // keep layout stable in all browsers
          position: "relative",
          // CSS vars used by globals.css
          "--fn-reveal-delay": `${delayMs}ms`,
          "--fn-reveal-x": `${x}px`,
          "--fn-reveal-y": `${y}px`,
        } as React.CSSProperties
      }
    >
      {/* Inner wrapper: animation target */}
      <div className={`fn-reveal__inner ${visible ? "is-visible" : ""}`}>
        {children}
      </div>
    </div>
  );
}
