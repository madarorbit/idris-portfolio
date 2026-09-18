import type { Metadata } from "next";
import { ContactLinks } from "@/components/contact-links";
import { copy } from "@/content/site";
import { isLocale, type Locale } from "@/lib/i18n";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: value } = await params;
  const locale = isLocale(value) ? value : "ar";
  return { title: copy[locale].contactNav, description: copy[locale].contactLead };
}

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: value } = await params;
  const locale: Locale = isLocale(value) ? value : "ar";
  const text = copy[locale];
  return <div className="contact-page"><div className="contact-intro"><span className="eyebrow">01 / {text.contactNav}</span><div><h1>{locale === "ar" ? "لنبنِ شيئًا مفيدًا." : "Let’s build something useful."}</h1><p>{text.contactLead}</p></div></div><div className="contact-content"><div className="contact-content__copy"><p>{text.openTo}:</p><p style={{ marginTop: 18, color: "#676e77", fontSize: "1rem", lineHeight: 1.8, letterSpacing: 0 }}>{locale === "ar" ? "المنتجات، البرمجيات، الذكاء الاصطناعي، SaaS، وكل ما يستحق أن يُبنى بعناية." : "Products, software, AI, SaaS, and anything worth building with care."}</p></div><ContactLinks locale={locale} /></div></div>;
}
