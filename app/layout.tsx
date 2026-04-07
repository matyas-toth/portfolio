import { Geist, Geist_Mono, Instrument_Sans, Instrument_Serif } from "next/font/google"

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", fontMono.variable, instrumentSerif.variable, "font-sans", instrumentSans.variable)}
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
