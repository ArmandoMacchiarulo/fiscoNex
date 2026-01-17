"use client";

import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "ghost" | "sand";

function cn(...parts: Array<string | undefined | false>) {
  return parts.filter(Boolean).join(" ");
}

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition active:translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20";

const variants: Record<Variant, string> = {
  primary:
    "bg-black/85 text-white hover:bg-black shadow-sm",
  ghost:
    "bg-white/10 text-[rgb(var(--fn-text-rgb))] hover:bg-white/15 border border-white/15",
  sand:
    "bg-[rgb(246_218_192/0.9)] text-[rgb(var(--fn-text-rgb))] hover:bg-[rgb(246_218_192/1)] border border-black/10",
};

export function FnButton({
  href,
  onClick,
  children,
  className,
  variant = "primary",
  ...rest
}: {
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  className?: string;
  variant?: Variant;
} & Omit<ComponentProps<"button">, "children" | "onClick"> &
  Omit<ComponentProps<typeof Link>, "href" | "children">) {
  const cls = cn(base, variants[variant], className);

  if (href) {
    // For in-page anchors, render a plain <a> so our AnchorScrollClient can intercept.
    if (href.startsWith("#")) {
      return (
        <a href={href} className={cls} {...(rest as any)}>
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={cls} {...(rest as any)}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={cls} {...rest}>
      {children}
    </button>
  );
}
