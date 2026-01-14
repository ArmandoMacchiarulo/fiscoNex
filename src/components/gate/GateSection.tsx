import { asset } from "@/lib/asset";
import BackdropChiSiamo from "./BackdropChiSiamo";
import BackdropIntro from "./BackdropIntro";

export default function GateSection({
  id,
  section,
  bgImage,
  children,
}: {
  id?: string;
  section: "intro" | "choice" | "about" | string;
  bgImage?: string;
  children: React.ReactNode;
}) {
  const useImage = typeof bgImage === "string" && bgImage.length > 0;

  return (
    <section
      id={id}
      data-section={section}
      className="fn-gate-section fn-section min-h-[100dvh] w-full snap-start flex items-center justify-center"
      style={
        useImage
          ? {
              backgroundImage: `url(${asset(bgImage)})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }
          : undefined
      }
    >
      {/* Backdrop solo per Intro (Step 1) */}
      {!useImage && section === "intro" ? <BackdropIntro /> : null}
      {!useImage && section === "about" ? <BackdropChiSiamo /> : null}

      {/* overlay legacy quando c’è immagine */}
      {useImage ? (
        <div className="absolute inset-0 bg-black/25" aria-hidden="true" />
      ) : null}

      <div className="fn-gate-content mx-auto w-full max-w-4xl px-6 text-center fn-text">
        {children}
      </div>
    </section>
  );
}
