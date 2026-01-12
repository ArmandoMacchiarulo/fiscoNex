import SiteHeader from "@/components/SiteHeader";
import Reveal from "@/components/Reveal";
import type { Lang } from "@/lib/i18n";
import { getDict } from "@/lib/i18n";

export default async function PianiProfessional({
  params,
}: {
  // Next.js (sync-dynamic-apis): in some versions `params` is a Promise
  params: Promise<{ lang: Lang }>;
}) {
  const { lang } = await params;
  const t = getDict(lang);
  const planTodo =
    lang === "en"
      ? "TODO: plan description, pricing, CTA."
      : "TODO: descrizione piano, prezzo, CTA.";

  return (
    <div className="min-h-screen relative">
      {/* Background FULL PAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/piani.jpg')" }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-black/25" aria-hidden="true" />
      <div className="relative z-10">
        <SiteHeader lang={lang} variant="professional" />
        <main className="mx-auto max-w-6xl px-4 py-10 fn-text">
          <Reveal>
            <h1 className="text-4xl font-semibold tracking-tight">{t.plansTitle}</h1>
          </Reveal>
          <Reveal delayMs={80}>
            <p className="mt-4 fn-text-70">{t.todo}</p>
          </Reveal>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {["Starter", "Plus", "Premium"].map((x, idx) => (
              <Reveal key={x} delayMs={120 + idx * 70}>
                <div className="rounded-3xl border border-black/10 p-6">
                  <div className="text-lg font-medium">{x}</div>
                  <div className="mt-2 text-sm fn-text-70">{planTodo}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
