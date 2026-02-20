"use client";

import type { Locale } from "@/i18n";
import Link from "next/link";

type Props = {
  locale: Locale;
};

export default function LanguageBadge({ locale }: Props) {
  const isIt = locale === "it";

  return (
    <div className="fixed right-4 top-4 z-50">
      <div className="flex items-center gap-1 rounded-full border border-white/20 bg-black/40 px-3 py-2 text-xs text-white backdrop-blur">
        <Link
          href="/it"
          hrefLang="it"
          className={`px-2 py-1 rounded-full ${
            isIt ? "bg-white/20 font-semibold" : "opacity-80 hover:opacity-100"
          }`}
        >
          IT
        </Link>
        <span className="opacity-40">|</span>
        <Link
          href="/en"
          hrefLang="en"
          className={`px-2 py-1 rounded-full ${
            !isIt ? "bg-white/20 font-semibold" : "opacity-80 hover:opacity-100"
          }`}
        >
          EN
        </Link>
      </div>
    </div>
  );
}
