import { copy, site } from "@/content/site";
import type { Locale } from "@/lib/i18n";
import { ArrowUpRight } from "@/components/icons";

export function ContactLinks({ locale, compact = false }: { locale: Locale; compact?: boolean }) {
  const text = copy[locale];
  const links = [
    { label: text.whatsapp, href: site.whatsapp },
    { label: text.phone, href: `tel:${site.phone}` },
    { label: text.instagram, href: site.instagram },
    { label: text.github, href: site.github },
  ];
  return <div className={`contact-links ${compact ? "contact-links--compact" : ""}`}>{links.map((link) => <a href={link.href} key={link.href} target={link.href.startsWith("http") ? "_blank" : undefined} rel={link.href.startsWith("http") ? "noreferrer" : undefined}>{link.label}<ArrowUpRight /></a>)}</div>;
}
