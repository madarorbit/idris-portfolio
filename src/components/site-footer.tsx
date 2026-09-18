import Link from "next/link";
import { copy, site } from "@/content/site";
import { localizedPath, type Locale } from "@/lib/i18n";

export function SiteFooter({ locale }: { locale: Locale }) {
  const text = copy[locale];
  return (
    <footer className="site-footer">
      <div className="site-footer__top">
        <p className="footer-note">{text.footer}</p>
        <div className="footer-links">
          <Link href={localizedPath(locale, "/work")}>{text.work}</Link>
          <Link href={localizedPath(locale, "/about")}>{text.about}</Link>
          <Link href={localizedPath(locale, "/contact")}>{text.contactNav}</Link>
        </div>
      </div>
      <div className="site-footer__bottom">
        <span>© {new Date().getFullYear()} {site.name}</span>
        <a href={site.instagram} target="_blank" rel="noreferrer">Instagram</a>
        <a href={site.github} target="_blank" rel="noreferrer">GitHub</a>
      </div>
    </footer>
  );
}
