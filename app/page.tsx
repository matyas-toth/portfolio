import type { Metadata } from "next"
import { AnimatedPage } from "@/components/animated-page"
import { allPosts } from "@/content"

import one from "../public/one.jpg"
import two from "../public/two.jpg"
import three from "../public/three.jpg"
import four from "../public/four.jpg"
import design1 from "../public/ui/design1.png"
import design2 from "../public/ui/design2.jpg"
import design3 from "../public/ui/design3.jpg"
import design4 from "../public/ui/design4.jpg"
import design5 from "../public/ui/design5.jpg"
import otthonai from "../public/product/otthonai.png"
import cloudclient from "../public/product/cloudclient.webp"
import mystayinfo from "../public/product/mystayinfo.png"
import silknodeai from "../public/product/silknodeai.png"
import dialogegyesulet from "../public/civic/dialogegyesulet.png"
import willywalnutwalk from "../public/civic/willywalnutwalk.png"
import cirmi from "../public/civic/cirmi.png"

export const metadata: Metadata = {
  title: "Matyas Toth — Designer, Engineer, Builder",
  description:
    "Never idle, always curious. Explore selected work in product design, AI, and civic tech by Matyas Toth.",
  alternates: { canonical: "https://maty.as" },
  openGraph: {
    title: "Matyas Toth — Designer, Engineer, Builder",
    description: "Never idle, always curious. Explore selected work in product design, AI, and civic tech.",
    url: "https://maty.as",
    type: "website",
    images: [{ url: "/og-image.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Matyas Toth — Designer, Engineer, Builder",
    description: "Never idle, always curious. Explore selected work in product design, AI, and civic tech.",
    images: ["/og-image.png"],
  },
}

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Matyas Toth",
  url: "https://maty.as",
  jobTitle: "Designer & Engineer",
  sameAs: [
    "https://www.linkedin.com/in/mátyás-tóth-56920926b/",
    "https://github.com/matyas-toth",
    "https://x.com/madebyreig",
  ],
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <AnimatedPage
        posts={allPosts}
        one={one} two={two} three={three} four={four}
        design1={design1} design2={design2} design3={design3} design4={design4} design5={design5}
        otthonai={otthonai} cloudclient={cloudclient} mystayinfo={mystayinfo} silknodeai={silknodeai}
        dialogegyesulet={dialogegyesulet} willywalnutwalk={willywalnutwalk} cirmi={cirmi}
      />
    </>
  )
}
