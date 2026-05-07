import type { MetadataRoute } from "next";
import { allPosts } from "@/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const blogPosts = allPosts.map((post) => ({
    url: `https://maty.as/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: "https://maty.as",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: "https://maty.as/blog",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...blogPosts,
  ];
}
