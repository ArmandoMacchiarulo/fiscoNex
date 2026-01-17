"use client";

import { useEffect } from "react";

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

function scrollToTarget(target: HTMLElement) {
  const header = document.querySelector("header") as HTMLElement | null;
  const headerOffset = header?.offsetHeight ?? 0;

  const scrollParent = getScrollParent(target);
  const targetRect = target.getBoundingClientRect();

  if (!scrollParent) {
    window.scrollTo({
      top: window.scrollY + targetRect.top - headerOffset,
      behavior: "smooth",
    });
    return;
  }

  const parentRect = scrollParent.getBoundingClientRect();
  const delta = targetRect.top - parentRect.top;

  scrollParent.scrollTo({
    top: scrollParent.scrollTop + delta - headerOffset,
    behavior: "smooth",
  });
}

export default function AnchorScrollClient() {
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const target = e.target as HTMLElement | null;
      const a = target?.closest?.("a") as HTMLAnchorElement | null;
      if (!a) return;

      const href = a.getAttribute("href");
      if (!href || !href.includes("#")) return;

      let url: URL;
      try {
        if (href.startsWith("#")) {
          url = new URL(window.location.href);
          url.hash = href;
        } else {
          url = new URL(href, window.location.origin);
        }
      } catch {
        return;
      }

      // Only if same page
      if (url.pathname !== window.location.pathname) return;

      const hash = url.hash;
      if (!hash) return;

      const id = hash.slice(1);
      const el = document.getElementById(id);
      if (!el) return;

      e.preventDefault();

      const current = new URL(window.location.href);
      current.hash = hash;
      window.history.replaceState(null, "", current.toString());

      scrollToTarget(el);
    }

    // If arriving with hash, scroll as soon as possible
    if (window.location.hash) {
      const id = window.location.hash.slice(1);
      const el = document.getElementById(id);
      if (el) requestAnimationFrame(() => scrollToTarget(el));
    }

    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, []);

  return null;
}
