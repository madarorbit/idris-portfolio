import { site } from "@/content/site";
import type { Locale } from "@/lib/i18n";
import { getSiteUrl } from "@/lib/site-url";

export function StructuredData({ locale }: { locale: Locale }) {
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    url: getSiteUrl(),
    sameAs: [site.github, site.instagram],
    jobTitle: locale === "ar" ? "المؤسس وباني المنتجات البرمجية" : "Founder and software product builder",
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }} />;
}
