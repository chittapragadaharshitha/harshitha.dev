import type { MetadataRoute } from "next";
import { allProjects } from "../lib/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://harshitha.dev";
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${baseUrl}/story`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/work`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/essays`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/meet`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
  ];

  const workPages: MetadataRoute.Sitemap = allProjects.map((project) => ({
    url: `${baseUrl}/work/${project.slug}`,
    lastModified: new Date(project.date),
    changeFrequency: "monthly",
    priority: project.featured ? 0.8 : 0.6,
  }));

  return [...staticPages, ...workPages];
}
