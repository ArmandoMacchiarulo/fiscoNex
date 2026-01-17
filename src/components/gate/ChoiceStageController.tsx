"use client";

import { useEffect, useRef } from "react";

type Stage = "idle" | "base" | "backdrop" | "buttons";

function setStage(host: HTMLElement, stage: Stage) {
  host.setAttribute("data-choice-stage", stage);
}

function isScrollable(el: HTMLElement) {
  const s = window.getComputedStyle(el);
  return /(auto|scroll)/.test(s.overflowY);
}

function getScrollParent(el: HTMLElement | null): HTMLElement | null {
  let cur = el?.parentElement ?? null;
  while (cur && cur !== document.body) {
    if (isScrollable(cur)) return cur;
    cur = cur.parentElement;
  }
  return null;
}

function isMostlyVisible(target: HTMLElement, root: HTMLElement | null) {
  const t = target.getBoundingClientRect();
  const r = (root ?? document.documentElement).getBoundingClientRect();

  const top = Math.max(t.top, r.top);
  const bottom = Math.min(t.bottom, r.bottom);
  const visible = Math.max(0, bottom - top);
  const ratio = visible / Math.max(1, t.height);

  return ratio > 0.35;
}

export default function ChoiceStageController({ once = true }: { once?: boolean }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const played = useRef(false);
  const timers = useRef<number[]>([]);

  useEffect(() => {
    const marker = ref.current;
    if (!marker) return;

    const host = marker.closest('[data-section="choice"]') as HTMLElement | null;
    if (!host) return;

    const root = getScrollParent(host);

    const clearTimers = () => {
      for (const t of timers.current) window.clearTimeout(t);
      timers.current = [];
    };

    const run = () => {
      if (once && played.current) return;
      played.current = true;

      clearTimers();
      setStage(host, "base");

      timers.current.push(window.setTimeout(() => setStage(host, "backdrop"), 500));
      timers.current.push(window.setTimeout(() => setStage(host, "buttons"), 1500));
    };

    const reset = () => {
      clearTimers();
      played.current = false;
      setStage(host, "idle");
    };

    // init
    setStage(host, "idle");

    // Fallback: if IO never fires on Firefox inside a scroll-container,
    // ensure the buttons become visible when the section is in view.
    const safety = window.setTimeout(() => {
      const stage = host.getAttribute("data-choice-stage") as Stage | null;
      if (stage === "idle" && isMostlyVisible(host, root)) run();
    }, 600);

    if (typeof IntersectionObserver === "undefined") {
      run();
      return () => {
        window.clearTimeout(safety);
        clearTimers();
      };
    }

    const io = new IntersectionObserver(
      (entries) => {
        const e = entries[0];
        if (!e) return;

        if (e.isIntersecting) run();
        else if (!once) reset();
      },
      {
        root,
        threshold: 0.35,
      }
    );

    io.observe(host);

    return () => {
      window.clearTimeout(safety);
      clearTimers();
      io.disconnect();
    };
  }, [once]);

  return <div ref={ref} aria-hidden="true" className="fn-choice-marker" />;
}
