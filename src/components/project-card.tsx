import Link from "next/link";
import { ArrowUpRight } from "@/components/icons";
import { ProjectCanvas } from "@/components/project-canvas";
import { copy } from "@/content/site";
import type { Project } from "@/content/projects";
import { localizedPath, type Locale } from "@/lib/i18n";

export function ProjectCard({ project, locale, featured = false }: { project: Project; locale: Locale; featured?: boolean }) {
  const text = copy[locale];
  const eyebrow = locale === "ar" ? (project.theme === "madar" ? "طبقة تشغيل عربية للأعمال" : "SaaS للضمان وخدمات ما بعد البيع") : project.eyebrow;
  return <article className={`project-card ${featured ? "project-card--featured" : ""}`}>
    <Link href={localizedPath(locale, `/work/${project.slug}`)} className="project-card__visual" aria-label={`${text.readCaseStudy}: ${project.title}`}><ProjectCanvas project={project} locale={locale} compact={featured} /></Link>
    <div className="project-card__body">
      <div><span className="eyebrow">{eyebrow}</span><h3>{project.title}</h3></div>
      <Link className="text-link" href={localizedPath(locale, `/work/${project.slug}`)}>{text.readCaseStudy}<ArrowUpRight /></Link>
      <p>{project.shortDescription[locale]}</p>
    </div>
  </article>;
}
