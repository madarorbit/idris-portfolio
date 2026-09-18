import type { MetadataRoute } from "next";
import { projects } from "@/content/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const routes = ["", "/work", "/about", "/contact"];
  return ["ar", "en"].flatMap((locale) => routes.map((route) => ({ url: `${base}/${locale}${route}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: route === "" ? 1 : 0.7 }))).concat(projects.flatMap((project) => ["ar", "en"].map((locale) => ({ url: `${base}/${locale}/work/${project.slug}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 }))));
}
