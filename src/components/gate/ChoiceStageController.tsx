"use client";

import { useEffect, useRef } from "react";

type Stage = "idle" | "base" | "backdrop" | "buttons";

function setStage(host: HTMLElement, stage: Stage) {
  host.setAttribute("data-choice-stage", stage);
}

export default function ChoiceStageController({
  once = true,
}: {
  once?: boolean;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const played = useRef(false);
  const timers = useRef<number[]>([]);

  useEffect(() => {
    const marker = ref.current;
    if (!marker) return;

    // Più robusto: non dipendo dal tag <section>, ma dal data-section
    const host = marker.closest(
      '[data-section="choice"]'
    ) as HTMLElement | null;
    if (!host) return;

    const clearTimers = () => {
      for (const t of timers.current) window.clearTimeout(t);
      timers.current = [];
    };

    const run = () => {
      if (once && played.current) return;
      played.current = true;

      clearTimers();
      setStage(host, "base");

      // 0.5s: start backdrop
      timers.current.push(
        window.setTimeout(() => setStage(host, "backdrop"), 500)
      );
      // 1.5s: show buttons
      timers.current.push(
        window.setTimeout(() => setStage(host, "buttons"), 1500)
      );
    };

    // reset quando esci (solo se once=false)
    const reset = () => {
      clearTimers();
      played.current = false;
      setStage(host, "idle");
    };

    // init
    setStage(host, "idle");

    // IntersectionObserver sul CONTAINER (non sul marker)
    if (typeof IntersectionObserver === "undefined") {
      run();
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        const e = entries[0];
        if (!e) return;

        if (e.isIntersecting) run();
        else if (!once) reset();
      },
      { threshold: 0.5 } // sezione quasi full-screen: 0.5 è perfetto
    );

    io.observe(host);

    return () => {
      clearTimers();
      io.disconnect();
    };
  }, [once]);

  // marker “normale”, NON sr-only
  return <div ref={ref} aria-hidden="true" className="fn-choice-marker" />;
}
