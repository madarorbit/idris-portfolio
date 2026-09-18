import type { Metadata } from "next";
import { ArrowUpRight } from "@/components/icons";
import { copy, site } from "@/content/site";
import { isLocale, type Locale } from "@/lib/i18n";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: value } = await params;
  const locale = isLocale(value) ? value : "ar";
  return { title: copy[locale].contactNav, description: copy[locale].contactLead, alternates: { canonical: `/${locale}/contact`, languages: { ar: "/ar/contact", en: "/en/contact" } } };
}

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: value } = await params;
  const locale: Locale = isLocale(value) ? value : "ar";
  const ar = locale === "ar";
  return <div className="contact-page">
    <header className="contact-intro"><span className="section-index">01 / {ar ? "تواصل" : "Contact"}</span><div><h1>{ar ? "خلّنا نتكلم عن الشيء الذي يستحق أن يُبنى." : "Let’s talk about the thing worth building."}</h1><p>{ar ? "المنتجات، البرمجيات، SaaS والذكاء الاصطناعي عندما يكون جزءًا من منتج مفيد." : "Products, software, SaaS, and AI when it belongs inside something useful."}</p></div></header>
    <div className="contact-actions">
      <a className="contact-action contact-action--primary" href={site.whatsapp} target="_blank" rel="noreferrer"><span><small>{ar ? "الأسرع" : "Fastest"}</small>{ar ? "واتساب" : "WhatsApp"}</span><ArrowUpRight /></a>
      <a className="contact-action" href={`tel:${site.phone}`}><span><small>{ar ? "اتصال مباشر" : "Direct call"}</small>{site.phone}</span><ArrowUpRight /></a>
      <a className="contact-action" href={site.instagram} target="_blank" rel="noreferrer"><span><small>Instagram</small>@i_dr_is_m</span><ArrowUpRight /></a>
      <a className="contact-action" href={site.github} target="_blank" rel="noreferrer"><span><small>GitHub</small>madarorbit</span><ArrowUpRight /></a>
    </div>
  </div>;
}
