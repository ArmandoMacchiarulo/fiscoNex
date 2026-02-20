"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  locale: "it" | "en";
};

function swapLocale(pathname: string, nextLocale: "it" | "en") {
  // Normalizza e split
  const parts = pathname.split("?")[0].split("/").filter(Boolean);

  // Se il primo segmento è una lingua, sostituiscilo; altrimenti prependo
  if (parts[0] === "it" || parts[0] === "en") {
    parts[0] = nextLocale;
  } else {
    parts.unshift(nextLocale);
  }

  return "/" + parts.join("/");
}

export default function LanguageSwitcher({ locale }: Props) {
  const pathname = usePathname() ?? `/${locale}`;

  return (
    <div className="flex items-center gap-2 text-sm">
      <span className="opacity-80">Lang:</span>

      <Link
        className={`underline ${locale === "it" ? "font-semibold" : ""}`}
        href={swapLocale(pathname, "it")}
        hrefLang="it"
      >
        IT
      </Link>

      <span className="opacity-50">/</span>

      <Link
        className={`underline ${locale === "en" ? "font-semibold" : ""}`}
        href={swapLocale(pathname, "en")}
        hrefLang="en"
      >
        EN
      </Link>
    </div>
  );
}
