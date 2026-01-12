import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import SiteHeader from "@/components/SiteHeader";
import { asset } from "@/lib/asset";
import type { Lang } from "@/lib/i18n";
import { getDict } from "@/lib/i18n";

function getAreas(lang: Lang) {
  if (lang === "en") {
    return [
      {
        title: "Business Tax",
        body: "Integrated corporate tax management: planning, compliance, and ongoing support.",
      },
      {
        title: "Indirect Tax",
        body: "VAT and indirect taxes: operational analysis and processes to reduce risk and inefficiencies.",
      },
      {
        title: "M&A Tax",
        body: "Tax support for extraordinary transactions: assessments, structuring, and implementation.",
      },
      {
        title: "Tax Controversy",
        body: "Assistance in disputes: strategy, documentation, and structured case management.",
      },
    ];
  }

  return [
    {
      title: "Business Tax",
      body: "Gestione integrata della fiscalità d’impresa: pianificazione, compliance e supporto continuativo.",
    },
    {
      title: "Indirect Tax",
      body: "IVA e imposte indirette: analisi operativa e processi per ridurre rischi e inefficienze.",
    },
    {
      title: "M&A Tax",
      body: "Supporto fiscale in operazioni straordinarie: valutazioni, strutture e implementazione.",
    },
    {
      title: "Tax Controversy",
      body: "Assistenza nel contenzioso: strategia, documentazione e gestione ordinata.",
    },
  ];
}

export default async function BusinessPage({
  params,
}: {
  // Next.js (sync-dynamic-apis): in some versions `params` is a Promise
  params: Promise<{ lang?: Lang }>;
}) {
  const { lang: rawLang } = await params;
  const safeLang: Lang = rawLang === "en" ? "en" : "it";
  const t = getDict(safeLang);
  const areas = getAreas(safeLang);

  const intro =
    safeLang === "en"
      ? "A professional, international, and pragmatic approach: we support businesses on tax, compliance, and administrative needs."
      : "Un taglio professionale, internazionale e concreto: affianchiamo l’impresa su fiscalità, compliance e supporto amministrativo.";

  const servicesTitle = safeLang === "en" ? "Services" : "Servizi";

  const servicesList =
    safeLang === "en"
      ? [
          "Corporate tax",
          "Tax planning",
          "National compliance",
          "Administrative support",
          "Accounting",
        ]
      : [
          "Fiscalità d’impresa",
          "Pianificazione fiscale",
          "Compliance nazionale",
          "Supporto amministrativo",
          "Contabilità",
        ];

  return (
    <div className="relative min-h-[100dvh] flex flex-col">
      {/* Background FULL PAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${asset("/images/piani.jpg")})` }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-black/25" aria-hidden="true" />

      <div className="relative z-10 flex flex-col min-h-[100dvh]">
        <SiteHeader
          lang={safeLang}
          variant="business"
          contactAnchorId="contatti"
        />

        <main className="fn-text fn-main overflow-y-auto fn-snap">
          {/* SEZIONE 1: Hero + Servizi (100vh) */}
          <section className="fn-section fn-vcenter">
            <div
              className="mx-auto"
              style={{
                maxWidth: "72rem",
                width: "100%",
                padding: "2rem 1rem",
              }}
            >
              <div className="rounded-[28px] border border-white/15 bg-white/10">
                <Reveal>
                  <div className="backdrop-blur p-5 sm:p-8 text-center">
                    <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
                      {t.heroBusiness}
                    </h1>
                    <p className="mt-4 fn-text-85 leading-relaxed">{intro}</p>
                  </div>
                </Reveal>

                <Reveal delayMs={80}>
                  <div className="mt-4 backdrop-blur p-5 sm:p-8">
                    <h2 className="text-lg sm:text-xl font-semibold px-2 sm:px-4">
                      {servicesTitle}
                    </h2>

                    <ul className="mt-4 grid gap-2 text-sm fn-text-85 sm:grid-cols-2">
                      {servicesList.map((s) => (
                        <li key={s}>• {s}</li>
                      ))}
                    </ul>

                    {/* Bottone contattaci sotto l'elenco */}
                    <div className="d-flex justify-content-center mt-4">
                      <a
                        href="#contatti"
                        className="btn btn-dark btn-sm rounded-pill px-4"
                      >
                        {t.navContact}
                      </a>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </section>

          {/* SEZIONE 2: Carosello (100vh) */}
          <section className="fn-section">
            <div className="fn-vcenter" style={{ minHeight: "100%" }}>
              {/* FULL-BLEED: esce dal max-width */}
              <div
                className="carousel-dark w-100 mt-5"
                style={{
                  backgroundImage: `url(${asset("/images/business.jpg")})`,
                  width: "100vw",
                  marginLeft: "calc(50% - 50vw)",
                }}
              >
                <div
                  id="macroAreasCarousel"
                  className="carousel slide"
                  data-bs-ride="carousel"
                  data-bs-interval="6500"
                  data-bs-touch="true"
                  data-bs-wrap="true"
                >
                  <div className="carousel-indicators" style={{ zIndex: 20 }}>
                    {areas.map((_, i) => (
                      <button
                        key={i}
                        type="button"
                        data-bs-target="#macroAreasCarousel"
                        data-bs-slide-to={i}
                        className={i === 0 ? "active" : ""}
                        aria-current={i === 0 ? "true" : undefined}
                        aria-label={`Slide ${i + 1}`}
                      />
                    ))}
                  </div>

                  <div
                    className="carousel-inner"
                    style={{
                      height: "520px",
                      borderRadius: "0px",
                      overflow: "hidden",
                    }}
                  >
                    {areas.map((a, i) => (
                      <div
                        key={a.title}
                        className={`carousel-item ${i === 0 ? "active" : ""}`}
                        style={{ height: "520px" }}
                      >
                        <div
                          className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center text-center px-4"
                          style={{ zIndex: 5, pointerEvents: "none" }}
                        >
                          <div
                            style={{ maxWidth: "900px", pointerEvents: "auto" }}
                          >
                            <div
                              className="fw-semibold mb-3"
                              style={{
                                fontSize: "2rem",
                                color: "rgb(var(--fn-text-rgb))",
                                textShadow: "0 2px 14px rgba(255,255,255,0.45)",
                              }}
                            >
                              {a.title}
                            </div>

                            <p
                              className="mb-4 fn-text-85"
                              style={{
                                color: "rgb(var(--fn-text-rgb))",
                                textShadow: "0 2px 14px rgba(255,255,255,0.35)",
                                fontSize: "1.05rem",
                                lineHeight: 1.6,
                              }}
                            >
                              {a.body}
                            </p>

                            <a
                              href="#contatti"
                              className="btn btn-dark btn-sm rounded-pill px-4"
                            >
                              {t.navContact}
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#macroAreasCarousel"
                    data-bs-slide="prev"
                    style={{ zIndex: 20, width: "10%" }}
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    />
                    <span className="visually-hidden">Previous</span>
                  </button>

                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#macroAreasCarousel"
                    data-bs-slide="next"
                    style={{ zIndex: 20, width: "10%" }}
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    />
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* SEZIONE 3: Parla con noi (100vh) */}
          <section id="contatti" className="fn-section fn-vcenter">
            <div
              className="mx-auto"
              style={{
                maxWidth: "72rem",
                width: "100%",
                padding: "2rem 1rem",
              }}
            >
              <Reveal>
                <div className="mt-0 rounded-3xl border bg-white backdrop-blur p-5 sm:p-8 shadow">
                  <h2 className="text-xl sm:text-2xl font-semibold">
                    {t.contactTitle}
                  </h2>

                  <div className="mt-4 rounded-3xl bg-white p-4 sm:p-6 text-black">
                    <ContactForm lang={safeLang} emailPlaceholder="email" />
                  </div>
                </div>
              </Reveal>

              <footer className="mt-8 sm:mt-14 border-t border-white/15 pt-6 sm:pt-8 text-sm fn-text-80 selectable">
                <div className="row g-2">
                  <div className="col-12 col-md-4">
                    Email: info.business@nomedominio.it
                  </div>
                  <div className="col-12 col-md-4">Tel: +39 000 000 0000</div>
                  <div className="col-12 col-md-4">P.IVA: IT00000000000</div>
                </div>
              </footer>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
