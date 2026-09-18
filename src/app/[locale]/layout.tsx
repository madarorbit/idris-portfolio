import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StructuredData } from "@/components/structured-data";
import { isLocale, locales, type Locale } from "@/lib/i18n";

export function generateStaticParams() { return locales.map((locale) => ({ locale })); }

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: value } = await params;
  const locale = isLocale(value) ? value : "ar";
  return { alternates: { canonical: `/${locale}`, languages: { ar: "/ar", en: "/en" } }, openGraph: { locale: locale === "ar" ? "ar_YE" : "en_US" } };
}

export default async function LocaleLayout({ children, params }: Readonly<{ children: React.ReactNode; params: Promise<{ locale: string }> }>) {
  const { locale: value } = await params;
  if (!isLocale(value)) notFound();
  const locale = value as Locale;
  return <div className="page-shell" dir={locale === "ar" ? "rtl" : "ltr"} lang={locale}><SiteHeader locale={locale} /><main>{children}</main><SiteFooter locale={locale} /><StructuredData locale={locale} /></div>;
}
