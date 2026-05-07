import Link from "next/link";
import { allPosts } from "@/content";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowRight01Icon,
  Clock01Icon,
  ArrowLeft01Icon,
} from "@hugeicons/core-free-icons";

const tagColorMap: Record<string, string> = {
  "Design Process": "text-olive-400 bg-olive-800 border-olive-700",
  Engineering: "text-olive-300 bg-olive-800 border-olive-700",
  Thinking: "text-olive-400 bg-olive-800 border-olive-700",
  "Civic Tech": "text-olive-400 bg-olive-800 border-olive-700",
};

export default function BlogIndexPage() {
  return (
    <div className="container z-50 mx-auto py-16 md:py-30 px-4">
      {/* Back to home */}
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-olive-500 hover:text-olive-300 transition-colors text-sm font-medium mb-10"
      >
        <HugeiconsIcon icon={ArrowLeft01Icon} className="w-4 h-4" />
        Back to home
      </Link>

      {/* Section header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 md:mb-16 gap-4 sm:gap-0">
        <div>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl text-olive-300 tracking-tight font-instrument-serif">
            What I&apos;m <span className="italic">thinking about.</span>
          </h1>
        </div>
        <p className="text-olive-500 text-lg font-medium sm:max-w-md sm:text-right">
          Long-form thoughts on design, engineering, AI, and the space between.
        </p>
      </div>

      {/* Blog list */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-olive-800" />
        <div className="space-y-0">
          {allPosts.map((post, i) => {
            const idx = String(i + 1).padStart(2, "0");
            const tagColor = tagColorMap[post.tag] ?? "text-olive-400 bg-olive-800 border-olive-700";
            const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            });

            return (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="w-full text-left group block"
              >
                <article className="relative pl-6 sm:pl-10 pr-6 py-10 border-b border-olive-800 transition-all duration-300 hover:bg-olive-900/60">
                  {/* Active bar */}
                  <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-olive-300 transition-all duration-300 opacity-0 group-hover:opacity-100" />

                  <div className="flex items-start gap-4 sm:gap-10">
                    {/* Big index number */}
                    <span className="font-instrument-serif text-4xl sm:text-7xl leading-none transition-all duration-300 select-none flex-shrink-0 w-12 sm:w-20 text-olive-800 group-hover:text-olive-300">
                      {idx}
                    </span>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <span
                          className={`text-xs font-mono uppercase tracking-widest px-2 py-0.5 rounded border ${tagColor}`}
                        >
                          {post.tag}
                        </span>
                        <span className="text-olive-600 text-sm">
                          {formattedDate}
                        </span>
                        <span className="flex items-center gap-1 text-olive-600 text-sm">
                          <HugeiconsIcon
                            icon={Clock01Icon}
                            className="w-3 h-3"
                          />
                          {post.readTime} read
                        </span>
                      </div>

                      <h2 className="font-instrument-serif text-2xl sm:text-4xl leading-tight mb-2 transition-colors duration-300 text-olive-300 group-hover:text-olive-200">
                        {post.title}
                      </h2>
                      <p className="text-olive-500 text-lg font-medium leading-snug">
                        {post.subtitle}
                      </p>
                    </div>

                    {/* Arrow */}
                    <div className="flex-shrink-0 self-center transition-all duration-300 -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100">
                      <div className="w-10 h-10 rounded-full border border-olive-600 flex items-center justify-center">
                        <HugeiconsIcon
                          icon={ArrowRight01Icon}
                          className="w-4 h-4 text-olive-300"
                        />
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
