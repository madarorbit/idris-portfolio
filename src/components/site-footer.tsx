import Link from "next/link";
import { copy, site } from "@/content/site";
import { localizedPath, type Locale } from "@/lib/i18n";

export function SiteFooter({ locale }: { locale: Locale }) {
  const text = copy[locale];
  return (
    <footer className="site-footer">
      <div className="site-footer__lead">
        <span className="footer-kicker">{locale === "ar" ? "إدريس عارف" : "Idris Arif"}</span>
        <p>{locale === "ar" ? "أبني منتجات برمجية لمشكلات حقيقية." : "I build software products for real-world problems."}</p>
      </div>
      <div className="site-footer__row">
        <div className="footer-links">
          <Link href={localizedPath(locale, "/work")}>{text.work}</Link>
          <Link href={localizedPath(locale, "/about")}>{text.about}</Link>
          <Link href={localizedPath(locale, "/contact")}>{text.contactNav}</Link>
        </div>
        <div className="footer-social">
          <a href={site.instagram} target="_blank" rel="noreferrer">Instagram</a>
          <a href={site.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={site.whatsapp} target="_blank" rel="noreferrer">WhatsApp</a>
        </div>
      </div>
      <div className="site-footer__bottom"><span>© {new Date().getFullYear()} Idris Arif</span><span>{text.footer}</span></div>
    </footer>
  );
}
