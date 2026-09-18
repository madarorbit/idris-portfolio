import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "@/components/icons";
import { ContactLinks } from "@/components/contact-links";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { copy } from "@/content/site";
import { projects } from "@/content/projects";
import { isLocale, localizedPath, type Locale } from "@/lib/i18n";

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: value } = await params;
  const locale: Locale = isLocale(value) ? value : "ar";
  const text = copy[locale];
  return <>
    <section className="hero">
      <div className="hero__copy"><span className="eyebrow">{locale === "ar" ? "هوية رقمية / 01" : "Digital home / 01"}</span><h1>Idris<br />Arif</h1><p className="hero__role">{text.shortRole}</p><p className="hero__statement">{text.statement}</p><p className="hero__support">{text.supporting}</p><div className="hero__actions"><Link className="button button--dark" href={localizedPath(locale, "/work")}>{text.viewWork}<ArrowUpRight /></Link><Link className="button button--quiet" href={localizedPath(locale, "/contact")}>{text.contact}</Link></div></div>
      <div className="hero__portrait-wrap"><Image className="portrait" src="/portraits/idris-hero.png" alt={locale === "ar" ? "صورة إدريس عارف" : "Portrait of Idris Arif"} width={1254} height={1254} priority /><div className="hero__caption"><span>{locale === "ar" ? "مؤسس وباني منتجات" : "Founder & product builder"}</span><span>2026 —</span></div></div>
      <a className="hero__scroll" href="#work"><span className="sr-only">{locale === "ar" ? "انتقل إلى الأعمال" : "Scroll to selected work"}</span><ArrowDown /></a>
    </section>
    <section className="page-section" id="work"><SectionHeading index="02" title={text.selectedWork} intro={text.selectedWorkIntro} /><div className="work-grid">{projects.map((project, index) => <ProjectCard key={project.slug} project={project} locale={locale} featured={index === 0} />)}</div></section>
    <section className="page-section dark-band"><SectionHeading index="03" title={text.now} /><div className="now-grid"><span className="eyebrow muted">{locale === "ar" ? "ما أبنيه الآن" : "What I am building now"}</span><div className="now-grid__copy"><p>{text.nowText}</p><div className="now-grid__rule" /><ContactLinks locale={locale} compact /></div></div></section>
    <section className="page-section"><div className="about-tease"><div className="about-tease__copy"><span className="eyebrow">04 / {text.about}</span><p>{text.aboutShort}</p><Link className="text-link" href={localizedPath(locale, "/about")}>{text.about}<ArrowUpRight /></Link></div><div className="about-tease__image"><Image src="/portraits/idris-about.png" alt={locale === "ar" ? "إدريس عارف في صورة بورتريه" : "Idris Arif portrait"} width={1254} height={1254} loading="lazy" /></div></div></section>
    <section className="page-section dark-band contact-band"><SectionHeading index="05" title={text.contactNav} /><div className="contact-band__copy"><p>{text.contactLead}</p><Link className="button button--dark" href={localizedPath(locale, "/contact")}>{text.contact}<ArrowUpRight /></Link></div></section>
  </>;
}
