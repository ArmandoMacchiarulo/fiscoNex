"use client";

import { useEffect, useMemo, useRef, useState } from "react";

export type SnapItem = {
  title: string;
  body: string;
};

function cn(...parts: Array<string | undefined | false>) {
  return parts.filter(Boolean).join(" ");
}

export default function HorizontalSnapScroller({
  items,
  height = 520,
  className,
  ariaLabel = "Carousel",
}: {
  items: SnapItem[];
  height?: number;
  className?: string;
  ariaLabel?: string;
}) {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const [index, setIndex] = useState(0);

  const count = items.length;

  const scrollToIndex = (next: number) => {
    const el = scrollerRef.current;
    if (!el) return;

    const w = el.clientWidth;
    const clamped = Math.max(0, Math.min(count - 1, next));
    el.scrollTo({ left: clamped * w, behavior: "smooth" });
  };

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const w = el.clientWidth || 1;
        const i = Math.round(el.scrollLeft / w);
        setIndex(Math.max(0, Math.min(count - 1, i)));
      });
    };

    el.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener("scroll", onScroll);
    };
  }, [count]);

  const dots = useMemo(() => Array.from({ length: count }, (_, i) => i), [count]);

  return (
    <div className={cn("w-full", className)} aria-label={ariaLabel}>
      <div className="relative">
        <div
          ref={scrollerRef}
          className="flex w-full overflow-x-auto snap-x snap-mandatory scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          style={{ height }}
        >
          {items.map((it) => (
            <div
              key={it.title}
              className="snap-center shrink-0 w-full h-full flex items-center justify-center px-6"
            >
              <div className="max-w-3xl text-center">
                <div className="text-3xl sm:text-4xl font-semibold tracking-tight text-[rgb(var(--fn-text-rgb))] [text-shadow:0_2px_14px_rgba(255,255,255,0.45)]">
                  {it.title}
                </div>
                <p className="mt-4 text-base sm:text-lg leading-relaxed text-[rgb(var(--fn-text-rgb))] [text-shadow:0_2px_14px_rgba(255,255,255,0.35)]">
                  {it.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Controls */}
        <button
          type="button"
          className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-black/10 bg-white/60 px-3 py-2 text-sm font-semibold fn-text backdrop-blur hover:bg-white/80 transition"
          aria-label="Previous"
          onClick={() => scrollToIndex(index - 1)}
        >
          ‹
        </button>
        <button
          type="button"
          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-black/10 bg-white/60 px-3 py-2 text-sm font-semibold fn-text backdrop-blur hover:bg-white/80 transition"
          aria-label="Next"
          onClick={() => scrollToIndex(index + 1)}
        >
          ›
        </button>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
          {dots.map((d) => (
            <button
              key={d}
              type="button"
              aria-label={`Go to slide ${d + 1}`}
              aria-current={d === index ? "true" : undefined}
              onClick={() => scrollToIndex(d)}
              className={cn(
                "h-2.5 w-2.5 rounded-full border border-black/15 transition",
                d === index ? "bg-black/70" : "bg-black/15 hover:bg-black/30"
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
