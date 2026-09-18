import Image from "next/image";
import type { Project } from "@/content/projects";
import type { Locale } from "@/lib/i18n";

export function ProjectCanvas({ project, locale = "en", compact = false }: { project: Project; locale?: Locale; compact?: boolean }) {
  const ar = locale === "ar";
  return (
    <div className={`project-canvas project-canvas--${project.theme} ${compact ? "project-canvas--compact" : ""}`}>
      <div className="project-canvas__grid" />
      <div className="project-canvas__topline"><span>{project.theme === "madar" ? "MADAR / ORBIT" : "AHD / عَهد"}</span><span>{project.theme === "madar" ? "01" : "02"}</span></div>
      <div className="project-canvas__center">
        <span className="project-canvas__kicker">{project.eyebrow}</span>
        {project.theme === "madar" ? <Image className="project-canvas__logo" src="/projects/madar/logo.svg" alt="مَدار | ORBIT" width={420} height={96} /> : <span className="project-canvas__ahd-mark" aria-label="عَهد">عَهد</span>}
        <strong>{project.title}</strong>
        <span className="project-canvas__line" />
        <span>{project.theme === "madar" ? (ar ? "طبقة واحدة واضحة لحركة العمل." : "One clear layer for the way work moves.") : (ar ? "ضمان وسجلات وخدمة بعد البيع." : "Warranty, records, and service after the sale.")}</span>
      </div>
      <div className="project-canvas__footer"><span>{project.theme === "madar" ? "Retail · Workspaces · ORBY" : "Warranty · Tenants · After-sales"}</span><span>{ar ? "استكشف" : "Scroll to explore"}</span></div>
    </div>
  );
}
