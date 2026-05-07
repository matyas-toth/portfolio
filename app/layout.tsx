import { Geist, Geist_Mono, Instrument_Sans, Instrument_Serif } from "next/font/google"
import type { Metadata } from "next"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils";
import AppNavBar from "@/components/ui/navvv";
import GradualBlur from "@/components/GradualBlur";

const instrumentSans = Instrument_Sans({ subsets: ['latin'], variable: '--font-sans' })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-instrument-serif",
  weight: "400",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://maty.as"),
  title: {
    default: "Matyas Toth — Designer, Engineer, Builder",
    template: "%s | Matyas Toth",
  },
  description:
    "Portfolio of Matyas Toth — a designer and engineer building digital products, AI tools, and civic tech. Explore selected work, thoughts on design and engineering, and get in touch.",
  keywords: [
    "Matyas Toth",
    "portfolio",
    "UI/UX designer",
    "product designer",
    "frontend engineer",
    "civic tech",
    "design engineering",
  ],
  authors: [{ name: "Matyas Toth", url: "https://maty.as" }],
  creator: "Matyas Toth",
  openGraph: {
    siteName: "Matyas Toth",
    locale: "en_US",
    type: "website",
    url: "https://maty.as",
    title: "Matyas Toth — Designer, Engineer, Builder",
    description:
      "Portfolio of Matyas Toth — building digital products, AI tools, and civic tech.",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@madebyreig",
    title: "Matyas Toth — Designer, Engineer, Builder",
    description:
      "Portfolio of Matyas Toth — building digital products, AI tools, and civic tech.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://maty.as",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased dark", fontMono.variable, instrumentSerif.variable, "font-sans", instrumentSans.variable)}
    >
      <body className="bg-black relative">
        <GradualBlur
          target="page"
          position="top"
          height="7rem"
          strength={2.5}
          divCount={10}
          curve="bezier"
          className="z-90!"
          exponential
          opacity={1}
        />
        <AppNavBar />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
