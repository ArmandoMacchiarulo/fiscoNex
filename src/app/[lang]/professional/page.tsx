import ContactSection from "@/components/layout/ContactSection";
import VariantPageShell from "@/components/layout/VariantPageShell";
import BackdropPro from "@/components/professional/BackdropPro";
import HeroCurvePanel from "@/components/professional/HeroCurvePanel";
import MetodoCardsSection from "@/components/professional/MetodoCardsSection";
import type { Lang } from "@/lib/i18n";
import { getDict } from "@/lib/i18n";

function getItems(lang: Lang) {
  if (lang === "en") {
    return [
      {
        title: "Contact us",
        body: "We review your situation and define the best path forward.",
      },
      {
        title: "VAT/Tax ID start-up < 72 hours",
        body: "A streamlined, guided process: fast timelines, clear steps.",
      },
      {
        title: "Ongoing support",
        body: "Continuous presence: less stress, more control.",
      },
      {
        title: "Income tax return, worry-free",
        body: "Deadlines and filings handled in an orderly, transparent way.",
      },
    ];
  }

  return [
    {
      title: "Contattaci",
      body: "Analizziamo la tua situazione e definiamo il percorso più adatto.",
    },
    {
      title: "Apertura P.IVA < 72 ore",
      body: "Iter snello e guidato: tempi rapidi, passaggi chiari.",
    },
    {
      title: "Supporto continuo",
      body: "Presenza costante: meno stress, più controllo.",
    },
    {
      title: "Dichiarazione redditi senza pensieri",
      body: "Scadenze e adempimenti gestiti in modo ordinato e trasparente.",
    },
  ];
}

export default async function ProfessionalPage({
  params,
}: {
  params: Promise<{ lang?: Lang }>;
}) {
  const { lang: rawLang } = await params;
  const safeLang: Lang = rawLang === "en" ? "en" : "it";
  const t = getDict(safeLang);
  const items = getItems(safeLang);

  const intro =
    safeLang === "en"
      ? "A premium, clear, straightforward experience: from day one to everyday management, with a simple and continuous method."
      : "Un’esperienza premium, chiara e diretta: dalla partenza alla gestione quotidiana, con un metodo semplice e continuo.";

  return (
    <VariantPageShell lang={safeLang} variant="professional" scrollMode="page">
      {/* Backdrop (continuous for the whole page) */}

      <BackdropPro />

      {/* SECTION 1: HERO */}
      <HeroCurvePanel title={t.heroProfessional} body={intro} />

      {/* SECTION 2: METODO */}
      <MetodoCardsSection
        title={safeLang === "en" ? "Method" : "Metodo"}
        subtitle={
          safeLang === "en"
            ? "Four clear steps, designed to stay simple and predictable."
            : "Quattro passaggi chiari, progettati per restare semplici e prevedibili."
        }
        items={items}
      />

      {/* SECTION 3: PARLA CON NOI */}
      <ContactSection lang={safeLang} id="contatti" />
    </VariantPageShell>
  );
}
