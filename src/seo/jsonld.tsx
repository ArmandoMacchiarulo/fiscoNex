import { brandInfo } from "@/config/brand";
import { getSiteUrl } from "./site";
import type { Locale } from "@/i18n";

export function OrganizationJsonLd({ locale }: { locale: Locale }) {
  const siteUrl = getSiteUrl();
  const data = {
    "@context": "https://schema.org",
    "@type": "AccountingService",
    name: "FiscoNex",
    url: `${siteUrl}/${locale}`,
    areaServed: brandInfo.areaServed || "IT",
    // Keep these empty for now; fill later:
    email: brandInfo.email || undefined,
    telephone: brandInfo.phone || undefined,
    address: brandInfo.address || undefined,
    sameAs: brandInfo.sameAs?.length ? brandInfo.sameAs : undefined,
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
