import { isLocale, type Locale } from "@/i18n";
import { getSiteUrl } from "@/seo/site";
import type { Metadata } from "next";
export function generateStaticParams() {
  return [{ locale: "it" }, { locale: "en" }];
}

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const locale = isLocale(params.locale) ? (params.locale as Locale) : "it";
  const siteUrl = getSiteUrl();

  return {
    alternates: {
      canonical: `/${locale}`,
      languages: {
        it: "/it",
        en: "/en",
      },
    },
    openGraph: {
      url: `${siteUrl}/${locale}`,
    },
  };
}

export default function LocaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
