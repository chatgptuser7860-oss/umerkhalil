import type { MetadataRoute } from "next";

import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date()
    },
    {
      url: `${siteUrl}/projects`,
      lastModified: new Date()
    },
    {
      url: `${siteUrl}/contact`,
      lastModified: new Date()
    }
  ];
}
