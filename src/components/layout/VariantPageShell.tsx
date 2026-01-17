import SiteHeader from "@/components/SiteHeader";
import { asset } from "@/lib/asset";
import type { Lang } from "@/lib/i18n";
import type { ReactNode } from "react";

export default function VariantPageShell({
  lang,
  variant,
  backgroundImage,
  children,
}: {
  lang: Lang;
  variant: "professional" | "business";
  backgroundImage: string;
  children: ReactNode;
}) {
  return (
    <div data-variant={variant} className="relative min-h-[100dvh] flex flex-col">
      <div className="relative z-10 flex flex-col min-h-[100dvh]">
        <SiteHeader lang={lang} variant={variant} contactAnchorId="contatti" />
        <main
          className="fn-text fn-main overflow-y-auto fn-snap fn-page-main"
          style={{
            // Use a CSS var so the background remains continuous across sections
            // and can be overridden by variants.
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            "--fn-page-bg-image": `url(${asset(backgroundImage)})`,
          }}
        >
          {children}
        </main>
      </div>
    </div>
  );
}
