import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Long-form thoughts on design, engineering, civic tech, and the space between — by Matyas Toth.",
  alternates: {
    canonical: "https://maty.as/blog",
  },
  openGraph: {
    title: "Blog | Matyas Toth",
    description:
      "Long-form thoughts on design, engineering, civic tech, and the space between.",
    url: "https://maty.as/blog",
    type: "website",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="min-h-svh w-full relative">{children}</main>;
}
