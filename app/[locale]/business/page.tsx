import Link from "next/link";
import { getDictionary, isLocale, type Locale } from "@/i18n";

export default async function BusinessPage({
  params,
}: {
  params: { locale: string };
}) {
  const locale = isLocale(params.locale) ? (params.locale as Locale) : "it";
  const dict = await getDictionary(locale);

  return (
    <main className="min-h-screen bg-[var(--color-light)] text-brand-dark">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="font-[var(--font-heading)] text-4xl md:text-5xl">
          {dict.business.title}
        </h1>
        <p className="mt-4 text-lg text-brand-dark/80">{dict.business.comingSoon}</p>
        <p className="mt-6 text-brand-dark/80">{dict.business.paragraph}</p>

        <div className="mt-10">
          <Link
            href={`/${locale}`}
            className="inline-flex items-center justify-center rounded-full px-6 py-3 font-[var(--font-heading)] font-bold bg-[var(--color-light-blue)] text-brand-dark hover:opacity-95"
          >
            ← Home
          </Link>
        </div>
      </div>
    </main>
  );
}
