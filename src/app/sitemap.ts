import type { MetadataRoute } from "next";
import { projects } from "@/content/projects";
import { getSiteUrl } from "@/lib/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  const routes = ["", "/work", "/about", "/contact"];
  return ["ar", "en"]
    .flatMap((locale) =>
      routes.map((route) => ({
        url: `${base}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: route === "" ? 1 : 0.7,
      })),
    )
    .concat(
      projects.flatMap((project) =>
        ["ar", "en"].map((locale) => ({
          url: `${base}/${locale}/work/${project.slug}`,
          lastModified: new Date(),
          changeFrequency: "monthly" as const,
          priority: 0.8,
        })),
      ),
    );
}
