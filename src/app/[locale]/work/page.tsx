import type { Metadata } from "next";
import { ProjectCard } from "@/components/project-card";
import { copy } from "@/content/site";
import { projects } from "@/content/projects";
import { isLocale, type Locale } from "@/lib/i18n";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: value } = await params;
  const locale = isLocale(value) ? value : "ar";
  return { title: copy[locale].work, description: copy[locale].selectedWorkIntro, alternates: { canonical: `/${locale}/work`, languages: { ar: "/ar/work", en: "/en/work" } } };
}

export default async function WorkPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: value } = await params;
  const locale: Locale = isLocale(value) ? value : "ar";
  const text = copy[locale];
  return <div className="inner-page"><header className="inner-page__intro"><span className="section-index">01 / {text.work}</span><div><h1>{locale === "ar" ? "منتجات، لا مجرد أفكار." : "Products, not just ideas."}</h1><p>{text.selectedWorkIntro}</p></div></header><div className="work-stack work-stack--index">{projects.map((project) => <ProjectCard key={project.slug} project={project} locale={locale} />)}</div></div>;
}
