"use client";

import Reveal from "@/components/Reveal";
import { useEffect, useMemo, useRef } from "react";

export type MetodoCardItem = {
  title: string;
  body: string;
};

export default function MetodoCardsSection({
  title,
  subtitle,
  items,
}: {
  title: string;
  subtitle?: string;
  items: MetodoCardItem[];
}) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const cardRefs = useRef<Array<HTMLElement | null>>([]);
  const stateRef = useRef<"in" | "out">("out");

  const prefersReduced = useMemo(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
  }, []);

  useEffect(() => {
    if (prefersReduced) return;

    const sec2 = sectionRef.current;
    if (!sec2) return;

    const setOut = () => {
      if (stateRef.current === "out") return;
      stateRef.current = "out";

      for (let i = 0; i < cardRefs.current.length; i++) {
        const el = cardRefs.current[i];
        if (!el) continue;

        const fromLeft = i % 2 === 0;
        const dir = fromLeft ? -1 : 1;

        const w = el.offsetWidth || 0;
        const off = (w + 64) * dir;

        el.style.transition =
          "transform 1420ms cubic-bezier(0.2, 0.8, 0.2, 1), opacity 1320ms ease-out, filter 1420ms ease-out";
        el.style.transitionDelay = "0ms";
        el.style.transform = `translate3d(${off}px, 10px, 0)`;
        el.style.opacity = "0";
        el.style.filter = "blur(6px)";
      }
    };

    const setIn = () => {
      if (stateRef.current === "in") return;
      stateRef.current = "in";

      for (let i = 0; i < cardRefs.current.length; i++) {
        const el = cardRefs.current[i];
        if (!el) continue;

        const delay = i * 90;

        el.style.transition =
          "transform 1520ms cubic-bezier(0.2, 0.8, 0.2, 1), opacity 1420ms ease-out, filter 1520ms ease-out";
        el.style.transitionDelay = `${delay}ms`;
        el.style.transform = "translate3d(0, 0, 0)";
        el.style.opacity = "1";
        el.style.filter = "blur(0px)";
      }
    };

    // Initial: OUT (so if you load on section3, they are out; scrolling into section2 triggers IN)
    // We also want the "OUT" to be applied before first paint where possible.
    // Apply immediately:
    for (let i = 0; i < cardRefs.current.length; i++) {
      const el = cardRefs.current[i];
      if (!el) continue;

      const fromLeft = i % 2 === 0;
      const dir = fromLeft ? -1 : 1;
      const w = el.offsetWidth || 0;
      const off = (w + 64) * dir;

      el.style.transition = "none";
      el.style.transform = `translate3d(${off}px, 10px, 0)`;
      el.style.opacity = "0";
      el.style.filter = "blur(6px)";
      void el.offsetHeight; // reflow
      el.style.transition =
        "transform 520ms cubic-bezier(0.2, 0.8, 0.2, 1), opacity 420ms ease-out, filter 520ms ease-out";
    }

    const threshold = 0.3;

    const obs = new IntersectionObserver(
      (entries) => {
        const e = entries[0];
        const ratio = e.intersectionRatio || 0;

        // ≥30% visible => IN, otherwise OUT
        if (ratio >= threshold) setIn();
        else setOut();
      },
      {
        // include a few steps so we reliably cross 0.3
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.6, 0.8, 1],
      },
    );

    obs.observe(sec2);

    return () => {
      obs.disconnect();
    };
  }, [prefersReduced]);

  return (
    <section ref={sectionRef} className="fn-section" aria-label={title}>
      <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-12">
        <div className="text-center">
          <Reveal y={10}>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              {title}
            </h2>
          </Reveal>

          {subtitle ? (
            <Reveal delayMs={90} y={10}>
              <p className="mx-auto mt-3 max-w-2xl leading-relaxed fn-text-90">
                {subtitle}
              </p>
            </Reveal>
          ) : null}
        </div>

        <div className="mx-auto mt-10 w-full lg:w-3/4 sm:mt-12">
          <div className="flex flex-col gap-4 sm:gap-5">
            {items.map((it, idx) => {
              const fromLeft = idx % 2 === 0;

              return (
                <div
                  key={it.title}
                  className={
                    fromLeft ? "flex justify-start" : "flex justify-end"
                  }
                >
                  <article
                    ref={(n) => {
                      cardRefs.current[idx] = n;
                    }}
                    className={[
                      "w-full md:w-3/4",
                      "rounded-3xl border border-black/10",
                      "bg-white/80 backdrop-blur",
                      "p-5 sm:p-6",
                      "shadow-[0_12px_40px_rgba(0,0,0,0.10)]",
                    ].join(" ")}
                    style={
                      prefersReduced
                        ? undefined
                        : { willChange: "transform, opacity, filter" }
                    }
                  >
                    <div className="text-lg font-semibold tracking-tight">
                      {it.title}
                    </div>
                    <p className="mt-2 text-sm leading-relaxed fn-text-80">
                      {it.body}
                    </p>
                  </article>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
