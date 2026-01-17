import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import type { Lang } from "@/lib/i18n";
import { getDict } from "@/lib/i18n";

export default function ContactSection({
  lang,
  id = "contatti",
}: {
  lang: Lang;
  id?: string;
}) {
  const t = getDict(lang);

  return (
    <section id={id} className="fn-section fn-vcenter">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <Reveal>
          <div className="rounded-3xl border bg-white backdrop-blur p-5 sm:p-8 shadow">
            <h2 className="text-xl sm:text-2xl font-semibold">{t.contactTitle}</h2>

            <div className="mt-4 rounded-3xl bg-white p-4 sm:p-6 text-black">
              <ContactForm lang={lang} emailPlaceholder="email" />
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
  );
}
