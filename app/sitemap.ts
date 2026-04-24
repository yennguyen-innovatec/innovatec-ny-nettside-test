import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://innovatec.net";

  const routes = [
    "/no",
    "/no/om-oss",
    "/no/hva-vi-gjor",
    "/no/prosjekter",
    "/no/jobb-hos-oss",
    "/no/kontakt-oss",
    "/en",
    "/en/om-oss",
    "/en/hva-vi-gjor",
    "/en/prosjekter",
    "/en/jobb-hos-oss",
    "/en/kontakt-oss",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));
}
