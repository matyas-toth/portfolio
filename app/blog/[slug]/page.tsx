import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { allPosts } from "@/content";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowLeft01Icon } from "@hugeicons/core-free-icons";

// Pre-render all blog slugs at build time
export function generateStaticParams() {
  return allPosts.map((p) => ({ slug: p.slug }));
}

// 404 for any slug not in the list
export const dynamicParams = false;

// Dynamic per-post SEO metadata
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = allPosts.find((p) => p.slug === slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `https://maty.as/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://maty.as/blog/${post.slug}`,
      type: "article",
      publishedTime: new Date(post.date).toISOString(),
      authors: ["Matyas Toth"],
      images: [{ url: "/og-image.png" }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: ["/og-image.png"],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = allPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  // Dynamically import the MDX file
  const { default: PostContent } = await import(`@/content/${slug}.mdx`);

  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  const postIndex =
    String(allPosts.findIndex((p) => p.slug === slug) + 1).padStart(2, "0");

  // JSON-LD Article structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    author: {
      "@type": "Person",
      name: "Matyas Toth",
      url: "https://maty.as",
    },
    datePublished: new Date(post.date).toISOString(),
    publisher: {
      "@type": "Person",
      name: "Matyas Toth",
    },
    mainEntityOfPage: `https://maty.as/blog/${post.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="container mx-auto px-4">
        {/* Top bar */}
        <div className="flex items-center justify-between py-8">
          <Link
            href="/blog"
            className="flex items-center gap-2 text-olive-500 hover:text-olive-300 transition-colors text-sm font-medium"
          >
            <HugeiconsIcon icon={ArrowLeft01Icon} className="w-4 h-4" />
            All posts
          </Link>
          <div className="flex items-center gap-4 text-olive-600 text-sm">
            <span>{post.readTime} read</span>
            <span>{formattedDate}</span>
          </div>
        </div>

        {/* Article */}
        <article className="max-w-2xl mx-auto pb-32 pt-8">
          {/* Post header */}
          <header className="mb-14">
            <p className="font-mono text-olive-600 text-sm uppercase tracking-[0.3em] mb-6">
              {postIndex} / {String(allPosts.length).padStart(2, "0")}
            </p>
            <h1 className="font-instrument-serif text-4xl sm:text-5xl lg:text-6xl text-olive-100 leading-tight mb-6">
              {post.title}
            </h1>
            <p className="text-olive-400 text-xl sm:text-2xl font-medium leading-snug">
              {post.subtitle}
            </p>

            {/* Decorative divider */}
            <div className="flex items-center gap-4 mt-10">
              <div className="h-[1px] flex-1 bg-olive-800" />
              <span className="text-olive-600 text-xs font-mono">
                Matyas Toth · {formattedDate}
              </span>
              <div className="h-[1px] flex-1 bg-olive-800" />
            </div>
          </header>

          {/* Lead paragraph */}
          <p className="text-olive-300 text-xl leading-relaxed font-medium border-l-2 border-olive-500 pl-6 mb-10">
            {post.excerpt}
          </p>

          {/* MDX Body */}
          <div className="prose-olive">
            <PostContent />
          </div>

          {/* Footer */}
          <footer className="mt-20 pt-10 border-t border-olive-800">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-olive-600 text-sm font-mono uppercase tracking-widest mb-1">
                  Written by
                </p>
                <p className="text-olive-300 font-instrument-serif text-2xl">
                  Matyas Toth
                </p>
              </div>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-olive-400 hover:text-olive-200 border border-olive-700 hover:border-olive-500 transition-all px-4 py-2 rounded-md text-sm font-medium"
              >
                <HugeiconsIcon icon={ArrowLeft01Icon} className="w-4 h-4" />
                All posts
              </Link>
            </div>
          </footer>
        </article>
      </div>
    </>
  );
}
