import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Apply the portfolio's olive-toned typography to all MDX elements
    h1: ({ children }) => (
      <h1 className="font-instrument-serif text-5xl sm:text-6xl text-olive-100 leading-tight mb-6">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="font-instrument-serif text-3xl text-olive-200 mt-10 mb-4">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="font-instrument-serif text-2xl text-olive-200 mt-10 mb-4">
        {children}
      </h3>
    ),
    p: ({ children }) => (
      <p className="text-olive-400 text-lg leading-relaxed mb-6">{children}</p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-2 border-olive-500 pl-6 my-8 text-olive-300 italic text-xl">
        {children}
      </blockquote>
    ),
    em: ({ children }) => (
      <em className="text-olive-300">{children}</em>
    ),
    strong: ({ children }) => (
      <strong className="text-olive-200 font-semibold">{children}</strong>
    ),
    a: ({ href, children }) => (
      <a
        href={href}
        className="text-olive-300 underline underline-offset-4 hover:text-olive-200 transition-colors"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ),
    ul: ({ children }) => (
      <ul className="list-disc list-inside text-olive-400 text-lg leading-relaxed mb-6 space-y-2">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal list-inside text-olive-400 text-lg leading-relaxed mb-6 space-y-2">
        {children}
      </ol>
    ),
    ...components,
  };
}
