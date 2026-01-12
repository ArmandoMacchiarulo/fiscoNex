"use client";

import { asset } from "@/lib/asset";

import type { Lang } from "@/lib/i18n";
import { getDict } from "@/lib/i18n";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function SiteHeader({
  lang,
  variant,
  contactAnchorId = "contatti",
}: {
  lang?: Lang;
  variant?: "professional" | "business";
  contactAnchorId?: string;
}) {
  const headerRef = useRef<HTMLElement | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const pathname = usePathname() || "";
  const parts = pathname.split("/").filter(Boolean);

  const inferredLang: Lang = parts[0] === "en" ? "en" : "it";
  const inferredVariant =
    parts[1] === "professional" || parts[1] === "business"
      ? parts[1]
      : undefined;

  const safeLang: Lang = lang === "en" || lang === "it" ? lang : inferredLang;
  const safeVariant: "professional" | "business" =
    variant === "professional" || variant === "business"
      ? variant
      : inferredVariant ?? "professional";

  const t = getDict(safeLang);

  const base = `/${safeLang}`;
  const plansHref = `${base}/${safeVariant}/piani`;
  const contactHref = `${base}/${safeVariant}#${contactAnchorId}`;
  const whoHref = `${base}#chi-siamo`;
  const otherLang: Lang = safeLang === "en" ? "it" : "en";

  // Manteniamo la stessa pagina e stesso path, cambiando solo il prefisso lingua
  const restPath = parts.slice(1).join("/"); // es. "professional/piani" oppure "business"
  const langSwitchHref = `/${otherLang}${restPath ? `/${restPath}` : ""}`;

  // Chiude il menu mobile al cambio pagina
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Espone l'altezza reale dell'header come CSS var (utile per scroll interni)
  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;

    const setVar = () => {
      const h = el.offsetHeight || 0;
      document.documentElement.style.setProperty("--fn-header-h", `${h}px`);
    };

    setVar();

    // ResizeObserver per gestire wrap/2 righe su mobile
    const ro = new ResizeObserver(() => setVar());
    ro.observe(el);
    window.addEventListener("resize", setVar);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", setVar);
    };
  }, []);

  // ✅ FIX: forza scroll anche se hash è già uguale e anche con scroll-container interno
  useEffect(() => {
    function goToHash(hash: string) {
      const id = hash.replace("#", "");
      if (!id) return;

      const el = document.getElementById(id);
      if (!el) return;

      // comportamento "secco" (senza smooth)
      el.scrollIntoView({ behavior: "auto", block: "start" });

      // mantiene URL coerente senza dipendere dal router
      const url = new URL(window.location.href);
      url.hash = `#${id}`;
      window.history.replaceState(null, "", url.toString());
    }

    function onClick(e: MouseEvent) {
      const target = e.target as HTMLElement | null;
      const a = target?.closest?.("a") as HTMLAnchorElement | null;
      if (!a) return;

      const href = a.getAttribute("href");
      if (!href) return;

      // gestiamo solo link con hash (es. /it/professional#contatti)
      if (!href.includes("#")) return;

      const url = new URL(href, window.location.origin);

      // ✅ intercetta SOLO se stiamo già sulla stessa pagina
      if (url.pathname !== window.location.pathname) return;

      // ✅ e solo se punta al nostro anchor
      if (url.hash !== `#${contactAnchorId}`) return;

      e.preventDefault();
      goToHash(url.hash);
    }

    // quando arrivi da un'altra pagina già con #contatti, garantisce lo scroll anche nel main scrollabile
    if (window.location.hash === `#${contactAnchorId}`) {
      // piccolo delay per essere sicuri che il DOM sia pronto
      setTimeout(() => goToHash(window.location.hash), 0);
    }

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, [contactAnchorId]);

  return (
    <header
      ref={(n) => {
        headerRef.current = n;
      }}
      className="sticky top-0 z-50 border-b border-black/10 bg-white/80 fn-text backdrop-blur"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
        <Link href={base} className="flex items-center gap-2 shrink-0">
          <img
            src={asset("/images/FiscoNex-solo-nome.svg")}
            alt={t.brand}
            className="h-8 w-auto"
          />
          <span className="sr-only">{t.brand}</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden sm:flex flex-wrap items-center justify-end gap-1 md:gap-2 text-sm">
          <Link
            href={plansHref}
            className="rounded-xl px-3 py-1 hover:bg-black/5 transition text-decoration-none fn-text"
          >
            {t.navPlans}
          </Link>
          <Link
            href={contactHref}
            className="rounded-xl px-3 py-1 hover:bg-black/5 transition text-decoration-none fn-text"
          >
            {t.navContact}
          </Link>
          <Link
            href={whoHref}
            className="rounded-xl px-3 py-1 hover:bg-black/5 transition text-decoration-none fn-text"
          >
            {t.navWho}
          </Link>
        </nav>

        {/* Right actions (always visible) */}
        <div className="flex items-center gap-2 shrink-0">
          <Link
            href={langSwitchHref}
            className="rounded-full border border-black/10 bg-black/5 px-3 py-2 text-xs font-semibold uppercase tracking-wider fn-text backdrop-blur transition hover:bg-black/10"
            aria-label={
              safeLang === "en" ? "Passa a Italiano" : "Switch to English"
            }
          >
            {otherLang}
          </Link>

          {/* Mobile menu */}
          <button
            type="button"
            className="sm:hidden inline-flex items-center justify-center rounded-xl border border-black/10 bg-black/5 px-3 py-2 text-xs font-semibold fn-text transition hover:bg-black/10"
            aria-label="Menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {/* simple hamburger */}
            <span className="sr-only">Menu</span>
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M4 7H20M4 12H20M4 17H20"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <div className="sm:hidden border-t border-black/10 bg-white/80 backdrop-blur">
          <nav className="mx-auto max-w-6xl px-4 py-3 flex flex-col gap-2 text-sm">
            <Link
              href={plansHref}
              className="rounded-xl px-3 py-2 hover:bg-black/5 transition text-decoration-none fn-text"
            >
              {t.navPlans}
            </Link>
            <Link
              href={contactHref}
              className="rounded-xl px-3 py-2 hover:bg-black/5 transition text-decoration-none fn-text"
            >
              {t.navContact}
            </Link>
            <Link
              href={whoHref}
              className="rounded-xl px-3 py-2 hover:bg-black/5 transition text-decoration-none fn-text"
            >
              {t.navWho}
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}