import type { Lang } from "@/lib/i18n";
import type { Metadata } from "next";

export function generateStaticParams() {
  return [{ lang: "it" }, { lang: "en" }];
}

export async function generateMetadata({
  params,
}: {
  // Next.js (sync-dynamic-apis): in some versions `params` is a Promise
  params: Promise<{ lang: Lang }>;
}): Promise<Metadata> {
  const allowIndexing = process.env.NEXT_PUBLIC_ALLOW_INDEXING === "true";

  const { lang } = await params;

  const description =
    lang === "en"
      ? "Tailor-made tax advisory for professionals and businesses. Modern, clear, ongoing support."
      : "Consulenza fiscale su misura per professionisti e imprese. Approccio moderno, chiaro e continuo.";

  return {
    title: {
      default: "FiscoNex",
      template: `%s | FiscoNex`,
    },
    description,
    robots: allowIndexing
      ? { index: true, follow: true }
      : { index: false, follow: false },
    alternates: {
      languages: {
        it: "/it",
        en: "/en",
      },
    },
    openGraph: {
      title: "FiscoNex",
      description,
      type: "website",
      locale: lang === "en" ? "en_US" : "it_IT",
    },
  };
}

// ✅ Niente <html> o <body> qui
export default function LangLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
