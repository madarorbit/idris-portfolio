"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { CloseIcon, MenuIcon } from "@/components/icons";
import { copy } from "@/content/site";
import { localizedPath, oppositeLocale, type Locale } from "@/lib/i18n";

export function SiteHeader({ locale }: { locale: Locale }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const text = copy[locale];
  const pathWithoutLocale = pathname.replace(/^\/(ar|en)/, "") || "/";
  const nextPath = localizedPath(oppositeLocale(locale), pathWithoutLocale);
  const links = [
    { href: localizedPath(locale, "/work"), label: text.work },
    { href: localizedPath(locale, "/about"), label: text.about },
    { href: localizedPath(locale, "/contact"), label: text.contactNav },
  ];

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link href={localizedPath(locale)} className="wordmark" aria-label={locale === "ar" ? "الصفحة الرئيسية" : "Home"} onClick={() => setOpen(false)}>
          <span className="wordmark__text">Idris Arif</span>
          <span className="wordmark__dot" aria-hidden="true" />
        </Link>
        <nav className="desktop-nav" aria-label={locale === "ar" ? "التنقل الرئيسي" : "Main navigation"}>
          {links.map((link) => <Link key={link.href} className={pathname === link.href ? "is-active" : ""} href={link.href}>{link.label}</Link>)}
          <Link href={nextPath} className="locale-switch" hrefLang={oppositeLocale(locale)}>{text.language}</Link>
        </nav>
        <button className="menu-button" type="button" aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen((value) => !value)}>
          <span className="sr-only">{open ? (locale === "ar" ? "إغلاق القائمة" : "Close menu") : (locale === "ar" ? "فتح القائمة" : "Open menu")}</span>
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>
      <div className={`mobile-nav ${open ? "is-open" : ""}`} id="mobile-navigation" aria-hidden={!open}>
        {links.map((link) => <Link key={link.href} href={link.href} tabIndex={open ? 0 : -1} onClick={() => setOpen(false)}>{link.label}</Link>)}
        <Link href={nextPath} hrefLang={oppositeLocale(locale)} tabIndex={open ? 0 : -1} onClick={() => setOpen(false)}>{text.language}</Link>
      </div>
    </header>
  );
}
