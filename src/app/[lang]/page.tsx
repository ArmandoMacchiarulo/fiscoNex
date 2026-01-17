import Reveal from "@/components/Reveal";
import ChoiceStageController from "@/components/gate/ChoiceStageController";
import GateSection from "@/components/gate/GateSection";
import { asset } from "@/lib/asset";
import type { Lang } from "@/lib/i18n";
import { getDict } from "@/lib/i18n";
import Link from "next/link";

export default async function Home({
  params,
}: {
  params: Promise<{ lang?: Lang }>;
}) {
  const { lang: rawLang } = await params;
  const lang: Lang = rawLang === "en" ? "en" : "it";
  const t = getDict(lang);
  const otherLang: Lang = lang === "en" ? "it" : "en";

  return (
    <main
      data-brand="gate"
      className="fn-gate h-[100dvh] w-full overflow-y-auto snap-y snap-mandatory fn-snap"
    >
      <Link
        href={`/${otherLang}`}
        className="mr-2 fixed right-4 top-4 z-50 rounded-full border border-black/15 bg-white/40 px-3 py-2 text-xs font-semibold uppercase tracking-wider fn-text backdrop-blur transition hover:bg-white/65"
        aria-label={lang === "en" ? "Passa a Italiano" : "Switch to English"}
      >
        {otherLang}
      </Link>

      {/* STEP 1: Intro senza immagine, con backdrop CSS */}
      <GateSection section="intro">
        <div
          className="relative w-full flex flex-col items-center justify-center text-center px-3"
          style={{ minHeight: "100dvh" }}
        >
          <Reveal>
            <div className="mx-auto w-full max-w-xl">
              <img
                src={asset("/images/FiscoNex-logo.svg")}
                alt={t.missionTitle}
                className="w-full h-auto"
              />
            </div>
          </Reveal>

          <Reveal delayMs={80}>
            <p className="mt-6 text-lg leading-relaxed fn-text-90">
              {t.missionBody}
            </p>
          </Reveal>

          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 pb-4"
            style={{ zIndex: 50 }}
          >
            <Link
              href={`/${lang}#section-2`}
              aria-label="Scroll to next section"
              className="fn-arrow-link"
            >
              <img
                src={asset("/images/down.webp")}
                alt="down arrow"
                className="block fn-down-arrow"
                style={{ width: 44, height: 44, opacity: 0.65 }}
              />
            </Link>
          </div>
        </div>
      </GateSection>

      <GateSection id="section-2" section="choice">
        <div
          className="relative w-full flex flex-col items-center justify-center text-center px-3"
          style={{ minHeight: "100dvh" }}
        >
          {/* Orchestrazione: base -> backdrop (0.5s) -> pulsanti (1.5s) */}
          <ChoiceStageController />

          <h1 className="text-3xl font-semibold">{t.chooseTitle}</h1>

          <div className="fn-choice-buttons mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link
              href={`/${lang}/professional`}
              className="fn-choice-card fn-choice-card--pro group flex items-center justify-center px-0 py-0"
              style={{
                textDecoration: "none",
                width: "320px",
                height: "200px",
                borderRadius: "24px",
              }}
            >
              <span className="fn-choice-visual">
                <img
                  src={asset("/images/FiscoNex-Professional.svg")}
                  alt={t.professional}
                  className="block w-full h-full transition-transform fn-bounce-hover"
                  style={{ objectFit: "contain", padding: "24px" }}
                />
              </span>
            </Link>

            <Link
              href={`/${lang}/business`}
              className="fn-choice-card fn-choice-card--bus group flex items-center justify-center px-0 py-0"
              style={{
                textDecoration: "none",
                width: "320px",
                height: "200px",
                borderRadius: "24px",
              }}
            >
              <span className="fn-choice-visual">
                <img
                  src={asset("/images/FiscoNex-Business.svg")}
                  alt={t.business}
                  className="block w-full h-full transition-transform fn-bounce-hover"
                  style={{ objectFit: "contain", padding: "24px" }}
                />
              </span>
            </Link>
          </div>

          {/* Freccia bottom ... (come già hai) */}
        </div>
      </GateSection>

      <GateSection id="chi-siamo" section="about">
        <Reveal>
          <h2 className="text-3xl font-semibold">{t.whoTitle}</h2>
        </Reveal>
        <Reveal delayMs={80}>
          <p className="mt-6 text-lg leading-relaxed fn-text-90">{t.whoBody}</p>
        </Reveal>
      </GateSection>
    </main>
  );
}
