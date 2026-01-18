import SiteHeader from "@/components/SiteHeader";
import { asset } from "@/lib/asset";
import type { Lang } from "@/lib/i18n";
import type { CSSProperties, ReactNode } from "react";

export default function VariantPageShell({
  lang,
  variant,
  backgroundImage,
  scrollMode = "snap",
  children,
}: {
  lang: Lang;
  variant: "professional" | "business";
  backgroundImage?: string;
  scrollMode?: "snap" | "page";
  children: ReactNode;
}) {
  const isSnap = scrollMode === "snap";

  return (
    <div
      data-variant={variant}
      className="relative min-h-[100dvh] flex flex-col"
    >
      <div className="relative z-10 flex flex-col min-h-[100dvh]">
        <SiteHeader lang={lang} variant={variant} contactAnchorId="contatti" />
        <main
          className={
            isSnap
              ? "fn-text fn-main overflow-y-auto fn-snap fn-page-main"
              : "fn-text fn-main fn-page-main"
          }
          style={
            backgroundImage
              ? ({
                  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  // @ts-ignore
                  "--fn-page-bg-image": `url(${asset(backgroundImage)})`,
                } as CSSProperties)
              : undefined
          }
        >
          {children}
        </main>
      </div>
    </div>
  );
}
