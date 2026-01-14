import Reveal from "@/components/Reveal";
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
        className="me-2 fixed right-4 top-4 z-50 rounded-full border border-black/15 bg-white/40 px-3 py-2 text-xs font-semibold uppercase tracking-wider fn-text backdrop-blur transition hover:bg-white/65"
        aria-label={lang === "en" ? "Passa a Italiano" : "Switch to English"}
      >
        {otherLang}
      </Link>

      {/* STEP 1: Intro senza immagine, con backdrop CSS */}
      <GateSection section="intro">
        <div
          className="position-relative w-100 d-flex flex-column align-items-center justify-content-center text-center px-3"
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
            className="position-absolute bottom-0 start-50 translate-middle-x pb-4"
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
                className="d-block fn-down-arrow"
                style={{ width: 44, height: 44, opacity: 0.65 }}
              />
            </Link>
          </div>
        </div>
      </GateSection>

      <GateSection id="section-2" section="choice" bgImage="/images/scelta.jpg">
        <div
          className="position-relative w-100 d-flex flex-column align-items-center justify-content-center text-center px-3"
          style={{ minHeight: "100dvh" }}
        >
          <Reveal>
            <h1 className="text-3xl font-semibold">{t.chooseTitle}</h1>
          </Reveal>

          <Reveal delayMs={80}>
            <div className="mt-10 d-flex flex-column gap-4 flex-sm-row justify-content-sm-center">
              <Link
                href={`/${lang}/professional`}
                className="group d-flex align-items-center justify-content-center px-0 py-0 backdrop-blur hover:bg-white/20 transition"
                style={{
                  textDecoration: "none",
                  width: "320px",
                  height: "200px",
                  borderRadius: "24px",
                }}
              >
                <img
                  src={asset("/images/FiscoNex-Professional.svg")}
                  alt={t.professional}
                  className="d-block w-75 h-75 transition-transform fn-bounce-hover"
                  style={{
                    objectFit: "contain",
                    padding: "24px",
                  }}
                />
              </Link>

              <Link
                href={`/${lang}/business`}
                className="group d-flex align-items-center justify-content-center px-0 py-0 backdrop-blur hover:bg-white/20 transition"
                style={{
                  textDecoration: "none",
                  width: "320px",
                  height: "200px",
                  borderRadius: "24px",
                }}
              >
                <img
                  src={asset("/images/FiscoNex-Business.svg")}
                  alt={t.business}
                  className="d-block w-75 h-75 transition-transform fn-bounce-hover"
                  style={{
                    objectFit: "contain",
                    padding: "24px",
                  }}
                />
              </Link>
            </div>
          </Reveal>

          {/* Freccia bottom fissa */}
          <div
            className="position-absolute bottom-0 start-50 translate-middle-x pb-4"
            style={{ zIndex: 50 }}
          >
            <Link
              href={`/${lang}#chi-siamo`}
              aria-label="Scroll to next section"
              className="fn-arrow-link"
            >
              <img
                src={asset("/images/down.webp")}
                alt="down arrow"
                className="d-block fn-down-arrow"
                style={{ width: 44, height: 44, opacity: 0.65 }}
              />
            </Link>
          </div>
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
