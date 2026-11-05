import type { MetadataRoute } from "next";

const SITE_URL = "https://www.danielyamaguchi.com.br";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date("2026-11-05"),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
