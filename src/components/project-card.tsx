import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "@/components/icons";
import { copy } from "@/content/site";
import type { Project } from "@/content/projects";
import { localizedPath, type Locale } from "@/lib/i18n";

export function ProjectCard({ project, locale, featured = false }: { project: Project; locale: Locale; featured?: boolean }) {
  const text = copy[locale];
  const ar = locale === "ar";
  const href = localizedPath(locale, `/work/${project.slug}`);
  return (
    <article className={`project-card project-card--${project.theme} ${featured ? "project-card--featured" : ""}`}>
      <Link href={href} className="project-card__visual" aria-label={`${text.readCaseStudy}: ${project.title}`}>
        {project.theme === "madar" ? (
          <Image src="/projects/madar/madar-retail-master.png" alt={ar ? "الأصل البصري الرسمي لـ MADAR Retail" : "Official MADAR Retail product visual"} width={1254} height={1254} sizes="(max-width: 850px) 100vw, 70vw" priority={featured} />
        ) : (
          <div className="ahd-cover">
            <div className="ahd-cover__brand"><Image src="/projects/ahd/ahd-app-icon.webp" alt={ar ? "علامة عَهد الرسمية" : "Official AHD mark"} width={256} height={256} /><span>عَهد</span></div>
            <div className="ahd-cover__copy"><span>{ar ? "ضمان إلكتروني" : "Electronic warranty"}</span><span>{ar ? "تحقق بالرمز والرقم التسلسلي" : "Token & serial verification"}</span><span>{ar ? "خدمات ما بعد البيع" : "After-sales service"}</span></div>
            <span className="ahd-cover__live">{ar ? "ديمو تفاعلي حي" : "Live interactive demo"}</span>
          </div>
        )}
        <span className="project-card__number">{project.theme === "madar" ? "01" : "02"}</span>
      </Link>
      <div className="project-card__body">
        <div className="project-card__meta"><span>{project.theme === "madar" ? "MADAR / ORBIT" : "AHD / عَهد"}</span><span>{ar ? "المؤسس وباني المنتج" : "Founder & builder"}</span></div>
        <h3>{project.title}</h3>
        <p>{project.shortDescription[locale]}</p>
        <Link className="text-link" href={href}>{text.readCaseStudy}<ArrowUpRight /></Link>
      </div>
    </article>
  );
}
