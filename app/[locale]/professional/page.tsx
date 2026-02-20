import { getDictionary, isLocale, type Locale } from "@/i18n";
import Link from "next/link";
export function generateStaticParams() {
  return [{ locale: "it" }, { locale: "en" }];
}

export default async function ProfessionalPage({
  params,
}: {
  params: { locale: string };
}) {
  const locale = isLocale(params.locale) ? (params.locale as Locale) : "it";
  const dict = await getDictionary(locale);
  const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

  return (
    <main className="min-h-screen bg-[var(--color-light)] text-brand-dark">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="font-[var(--font-heading)] text-4xl md:text-5xl">
          {dict.professional.title}
        </h1>
        <p className="mt-4 text-lg text-brand-dark/80">
          {dict.professional.comingSoon}
        </p>
        <p className="mt-6 text-brand-dark/80">{dict.professional.paragraph}</p>

        <div className="mt-10">
          <Link
            href={`${BASE}/${locale}`}
            className="inline-flex items-center justify-center rounded-full px-6 py-3 font-[var(--font-heading)] font-bold bg-[var(--color-light-blue)] text-brand-dark hover:opacity-95"
          >
            ← Home
          </Link>
        </div>
      </div>
    </main>
  );
}
