import Image from "next/image";
import type { Project } from "@/content/projects";
import type { Locale } from "@/lib/i18n";

export function ProjectGallery({ project, locale }: { project: Project; locale: Locale }) {
  const ar = locale === "ar";
  if (project.theme === "madar") {
    return <div className="project-gallery"><figure className="project-gallery__wide"><Image src="/projects/madar/orby-master.png" alt={ar ? "صورة من تجربة ORBY" : "ORBY product visual"} width={1536} height={1536} /><figcaption>{ar ? "الأصل البصري الرسمي لتجربة ORBY." : "The official visual asset from the ORBY experience."}</figcaption></figure><figure><Image src="/projects/madar/madar-retail.webp" alt={ar ? "أصل بصري لـ MADAR Retail" : "MADAR Retail visual asset"} width={1254} height={1254} /><figcaption>{ar ? "أصل بصري مختار من MADAR Retail." : "A selected visual asset from MADAR Retail."}</figcaption></figure></div>;
  }
  return <div className="project-gallery project-gallery--ahd"><figure><Image src="/projects/ahd/ahd-app-icon.webp" alt={ar ? "أيقونة تطبيق عَهد" : "AHD app icon"} width={255} height={255} /><figcaption>{ar ? "أصل العلامة الرسمي المستخدم في المنتج." : "The official brand asset used in the product."}</figcaption></figure><div className="project-gallery__note"><span>{ar ? "من الواجهة إلى التشغيل" : "From interface to operations"}</span><strong>{ar ? "كل تفصيل يخدم الثقة." : "Every detail serves trust."}</strong></div></div>;
}
