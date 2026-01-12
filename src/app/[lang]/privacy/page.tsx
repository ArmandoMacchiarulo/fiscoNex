import Reveal from "@/components/Reveal";
import type { Lang } from "@/lib/i18n";
import { getDict } from "@/lib/i18n";

export default async function Privacy({
  params,
}: {
  // Next.js (sync-dynamic-apis): in some versions `params` is a Promise
  params: Promise<{ lang: Lang }>;
}) {
  const { lang } = await params;
  const t = getDict(lang);
  const bodyTodo =
    lang === "en"
      ? "TODO: privacy text, contacts, purposes, legal basis, retention, rights, etc."
      : "TODO: testo privacy, contatti, finalità, base giuridica, conservazione, diritti, ecc.";

  return (
    <main className="mx-auto max-w-3xl px-4 py-10 fn-text ">
      <Reveal>
        <h1 className="text-4xl font-semibold tracking-tight">
          {t.privacyPolicy}
        </h1>
      </Reveal>
      <Reveal delayMs={80}>
        <p className="mt-4 fn-text-70">{t.todo}</p>
      </Reveal>
      <Reveal delayMs={140}>
        <div className="mt-6 rounded-3xl border border-black/10 p-6 text-sm fn-text-70 selectable">
          {bodyTodo}
        </div>
      </Reveal>
    </main>
  );
}
