import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import VariantPageShell from "@/components/layout/VariantPageShell";
import { FnButton } from "@/components/ui/FnButton";
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
  // Next.js (sync-dynamic-apis): in some versions `params` is a Promise
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
    <VariantPageShell
      lang={safeLang}
      variant="professional"
      backgroundImage="/images/piani.jpg"
    >
      {/* SEZIONE 1: hero + metodo (100vh) */}
      <section className="fn-section fn-vcenter">
        <div
          className="mx-auto rounded-[28px] border border-white/15 bg-white/10 backdrop-blur shadow"
          style={{
            maxWidth: "72rem",
            width: "100%",
            padding: "2rem 1rem",
          }}
        >
          <Reveal>
            <div className="backdrop-blur p-5 sm:p-8">
              <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-center">
                {t.heroProfessional}
              </h1>
              <p className="mt-4 fn-text-90 leading-relaxed text-center">
                {intro}
              </p>
            </div>
          </Reveal>

          <div className="mt-10">
            <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-2">
              {items.map((it, idx) => (
                <Reveal key={it.title} delayMs={80 + idx * 70}>
                  <div className="rounded-2xl border border-white/15 bg-white/10 backdrop-blur p-5 sm:p-6 hover:bg-white/15 transition shadow mx-0 sm:mx-5 my-2">
                    <div className="text-lg font-medium">{it.title}</div>
                    <div className="mt-2 text-sm fn-text-80 leading-relaxed">
                      {it.body}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-3">
            <FnButton href="#contatti" variant="sand">
              {t.navContact}
            </FnButton>
          </div>
        </div>
      </section>

      {/* SEZIONE 2: parla con noi (100vh) */}
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
            <div className="rounded-3xl border bg-white backdrop-blur p-5 sm:p-8 shadow">
              <h2 className="text-xl sm:text-2xl font-semibold">
                {t.contactTitle}
              </h2>

              <div className="mt-4 rounded-3xl bg-white p-4 sm:p-6 text-black">
                <ContactForm lang={safeLang} emailPlaceholder="email" />
              </div>
            </div>
          </Reveal>

          <footer className="mt-8 sm:mt-14 border-t border-white/15 pt-4 text-sm fn-text-80 selectable">
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
