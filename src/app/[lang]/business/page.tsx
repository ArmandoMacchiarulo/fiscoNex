import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import VariantPageShell from "@/components/layout/VariantPageShell";
import HorizontalSnapScroller from "@/components/scroller/HorizontalSnapScroller";
import { FnButton } from "@/components/ui/FnButton";
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
    <VariantPageShell lang={safeLang} variant="business" backgroundImage="/images/piani.jpg">
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
                <p className="mt-4 fn-text-90 leading-relaxed">{intro}</p>
              </div>
            </Reveal>

            <Reveal delayMs={80}>
              <div className="mt-4 backdrop-blur p-5 sm:p-8">
                <h2 className="text-lg sm:text-xl font-semibold px-2 sm:px-4">
                  {servicesTitle}
                </h2>

                <ul className="mt-4 grid gap-2 text-sm fn-text-80 sm:grid-cols-2">
                  {servicesList.map((s) => (
                    <li key={s}>• {s}</li>
                  ))}
                </ul>

                <div className="flex justify-center mt-4">
                  <FnButton href="#contatti" variant="sand">
                    {t.navContact}
                  </FnButton>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SEZIONE 2: Macro-aree (100vh) */}
      <section className="fn-section fn-vcenter">
        <div
          className="fn-fullbleed"
          style={{
            backgroundImage: `url(${asset("/images/business.jpg")})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="mx-auto max-w-6xl px-4 py-10">
            <HorizontalSnapScroller items={areas} height={520} ariaLabel="Macro areas" />
            <div className="mt-6 flex justify-center">
              <FnButton href="#contatti" variant="sand">
                {t.navContact}
              </FnButton>
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
              <h2 className="text-xl sm:text-2xl font-semibold">{t.contactTitle}</h2>

              <div className="mt-4 rounded-3xl bg-white p-4 sm:p-6 text-black">
                <ContactForm lang={safeLang} emailPlaceholder="email" />
              </div>
            </div>
          </Reveal>

          <footer className="mt-8 sm:mt-14 border-t border-white/15 pt-6 sm:pt-8 text-sm fn-text-80 selectable">
            <div className="grid grid-cols-1 gap-2 md:grid-cols-3">
              <div>Email: info.business@nomedominio.it</div>
              <div>Tel: +39 000 000 0000</div>
              <div>P.IVA: IT00000000000</div>
            </div>
          </footer>
        </div>
      </section>
    </VariantPageShell>
  );
}
