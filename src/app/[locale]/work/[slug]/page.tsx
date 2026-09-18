import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "@/components/icons";
import { ProjectGallery } from "@/components/project-gallery";
import { LiveProductPreview } from "@/components/live-product-preview";
import { copy } from "@/content/site";
import { getProject, projects } from "@/content/projects";
import { isLocale, localizedPath, locales, type Locale } from "@/lib/i18n";

export function generateStaticParams() {
  return locales.flatMap((locale) => projects.map((project) => ({ locale, slug: project.slug })));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale: value, slug } = await params;
  const locale = isLocale(value) ? value : "ar";
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.shortDescription[locale],
    alternates: { canonical: `/${locale}/work/${slug}`, languages: { ar: `/ar/work/${slug}`, en: `/en/work/${slug}` } },
    openGraph: { images: [{ url: `/og/${project.theme}.svg`, width: 1200, height: 630, alt: project.title }] },
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale: value, slug } = await params;
  if (!isLocale(value)) notFound();
  const locale = value as Locale;
  const project = getProject(slug);
  if (!project) notFound();
  const text = copy[locale];
  const ar = locale === "ar";
  const related = projects.find((item) => item.slug !== project.slug);
  const liveUrl = project.theme === "madar" ? "https://www.orbitmadar.com/" : "https://warranty-platform-mu.vercel.app/explore";

  return <div className={`project-page project-page--${project.theme}`}>
    <section className="project-hero">
      <div className="project-hero__top">
        <Link className="text-link" href={localizedPath(locale, "/work")}>{ar ? <ArrowRight /> : <ArrowLeft />}{text.backToWork}</Link>
        <span>{project.theme === "madar" ? "01 / 02" : "02 / 02"}</span>
      </div>
      <div className="project-hero__title">
        <span className="section-index">{project.eyebrow}</span>
        <div><h1>{project.title}</h1><p>{project.shortDescription[locale]}</p></div>
      </div>
      <div className="project-hero__visual">
        {project.theme === "madar"
          ? <ProjectGallery project={project} locale={locale} />
          : <LiveProductPreview theme="ahd" url={liveUrl} title={ar ? "التجربة التفاعلية لعَهد" : "AHD interactive demo"} label={ar ? "تجربة المنتج الحقيقية" : "Real product experience"} />}
      </div>
      <dl className="project-meta">
        <div><dt>{text.projectStatus}</dt><dd>{ar ? (project.theme === "madar" ? "منتج منشور" : "الديمو العام منشور · التشغيل قيد التطوير") : project.status}</dd></div>
        <div><dt>{text.projectRole}</dt><dd>{ar ? text.roleFounder : project.role}</dd></div>
        <div><dt>{text.projectStack}</dt><dd>{project.stack.join(" · ")}</dd></div>
        <div><dt>{text.projectYear}</dt><dd>{ar ? "2026 — مستمر" : project.period}</dd></div>
      </dl>
    </section>

    <section className="case-study__section"><span className="case-index">01</span><h2>{text.problem}</h2><div className="case-study__content"><p>{project.problem[locale]}</p></div></section>
    <section className="case-study__section"><span className="case-index">02</span><h2>{text.built}</h2><div className="case-study__content"><p>{project.overview[locale]}</p><ul className="case-study__list">{project.built[locale].map((item) => <li key={item}>{item}</li>)}</ul></div></section>
    <section className="case-study__section"><span className="case-index">03</span><h2>{text.decisions}</h2><div className="case-study__content"><div className="decision-grid">{project.decisions[locale].map((item) => <article className="decision-card" key={item.title}><h3>{item.title}</h3><p>{item.text}</p></article>)}</div></div></section>

    {project.theme === "ahd" ? <section className="case-study__section case-study__section--visual"><span className="case-index">04</span><h2>{ar ? "أصول وتجربة حقيقية" : "Real product evidence"}</h2><div className="case-study__content"><ProjectGallery project={project} locale={locale} /></div></section> : null}

    <section className="case-study__section">
      <span className="case-index">{project.theme === "ahd" ? "05" : "04"}</span>
      <h2>{text.status}</h2>
      <div className="case-study__content">
        <p>{project.currentStatus[locale]}</p>
        <div className="project-links">{project.links[locale].map((link) => <a href={link.href} key={link.href} target={link.external ? "_blank" : undefined} rel={link.external ? "noreferrer" : undefined}>{link.label}<ArrowUpRight /></a>)}</div>
      </div>
    </section>

    {related ? <section className="related-section"><span>{text.related}</span><Link href={localizedPath(locale, `/work/${related.slug}`)}><strong>{related.title}</strong>{ar ? <ArrowLeft /> : <ArrowRight />}</Link></section> : null}
  </div>;
}
