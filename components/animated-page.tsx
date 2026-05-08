"use client"

import { motion } from "motion/react"
import { useInView } from "motion/react"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { GlowGrid, GlowCard } from "@/components/ui/glow-card"
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { BlogSection } from "@/components/blog-section"
import { ContactSection } from "@/components/contact-section"
import Image, { StaticImageData } from "next/image"
import { HugeiconsIcon } from "@hugeicons/react"
import { ClipboardIcon, LinkSquare01Icon, AiBrowserIcon, BinaryCodeIcon, CursorMagicSelection01Icon, BoundingBoxIcon, UserGroupIcon } from "@hugeicons/core-free-icons"
import type { PostMeta } from "@/content"

// Shared variants
const fadeUp = {
  hidden: { opacity: 0, y: 20, filter: "blur(6px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
}

const fadeUpTransition = { duration: 0.55, ease: [0.2, 0, 0, 1] }

// Reusable scroll-triggered section
function ScrollReveal({ children, delay = 0, className, id }: { children: React.ReactNode; delay?: number; className?: string; id?: string }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })
  return (
    <motion.div
      ref={ref}
      id={id}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeUp}
      transition={{ ...fadeUpTransition, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Work card with scroll reveal
function WorkCard({ children, delay }: { children: React.ReactNode; delay: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28, filter: "blur(6px)" }}
      animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : { opacity: 0, y: 28, filter: "blur(6px)" }}
      transition={{ duration: 0.55, ease: [0.2, 0, 0, 1], delay }}
    >
      {children}
    </motion.div>
  )
}

interface AnimatedPageProps {
  posts: PostMeta[]
  one: StaticImageData
  two: StaticImageData
  three: StaticImageData
  four: StaticImageData
  design1: StaticImageData
  design2: StaticImageData
  design3: StaticImageData
  design4: StaticImageData
  design5: StaticImageData
  otthonai: StaticImageData
  cloudclient: StaticImageData
  mystayinfo: StaticImageData
  silknodeai: StaticImageData
  dialogegyesulet: StaticImageData
  willywalnutwalk: StaticImageData
  cirmi: StaticImageData
}

export function AnimatedPage({ posts, one, two, three, four, design1, design2, design3, design4, design5, otthonai, cloudclient, mystayinfo, silknodeai, dialogegyesulet, willywalnutwalk, cirmi }: AnimatedPageProps) {
  return (
    <div className="min-h-svh w-full relative flex flex-col justify-start items-center px-4">

      {/* ─── Hero Background ───────────────────────────── */}
      <div className="absolute w-full h-screen">
        <div className="relative w-full h-full">
          <video src="/ascii-art.mp4" autoPlay loop muted className="absolute inset-0 w-full h-full object-cover opacity-50 brightness-120" />
          <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_1%,rgba(0,0,0,1)_100%)]" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/100 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-transparent to-transparent" />
        </div>
      </div>

      {/* ─── Hero Section ──────────────────────────────── */}
      <section aria-label="Introduction" className="container relative z-50 min-h-svh mx-auto h-full flex flex-col justify-end items-start py-12 md:py-20">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
        >
          <motion.h1
            variants={fadeUp}
            transition={fadeUpTransition}
            className="text-5xl sm:text-7xl lg:text-9xl font-instrument-serif text-olive-300 z-50 tracking-tight"
          >
            Never Idle. <div><span className="italic">Always</span> Curious.</div>
          </motion.h1>
          <motion.div variants={fadeUp} transition={{ ...fadeUpTransition, delay: 0.1 }} className="flex flex-wrap items-center gap-3">
            <motion.div whileTap={{ scale: 0.96 }} transition={{ duration: 0.15, ease: "easeOut" }}>
              <Button size="xl" className="text-lg sm:text-2xl mt-8 md:mt-14" onClick={() => document.getElementById('selected-work')?.scrollIntoView({ behavior: 'smooth' })}>Explore what I do</Button>
            </motion.div>
            <motion.div whileTap={{ scale: 0.96 }} transition={{ duration: 0.15, ease: "easeOut" }}>
              <Button variant="outline" size="xl" className="text-lg sm:text-2xl mt-8 md:mt-14" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>Let&apos;s talk</Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* ─── Selected Work ─────────────────────────────── */}
      <section id="selected-work" aria-label="Selected Work" className="container z-50 mx-auto min-h-200 flex flex-col items-center py-16 md:py-30">
        <ScrollReveal className="text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-7xl text-olive-300 tracking-tight font-instrument-serif">Selected Work</h2>
          <p className="text-lg sm:text-2xl text-olive-500 font-medium tracking-tight mt-4">A small set of products that I work on.</p>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-none gap-6 md:gap-10 w-full mt-10 md:mt-20">
          <WorkCard delay={0}>
            <a href="https://mystayinfo.com" target="_blank" rel="noopener noreferrer" className="block relative w-full h-70 rounded-4xl overflow-hidden group">
              <div className="absolute w-full h-full top-0 left-0 flex flex-col justify-end items-start z-20 p-6">
                <h3 className="font-instrument-serif text-6xl relative">
                  <HugeiconsIcon className="absolute top-0 -left-60 group-hover:translate-x-39 w-full h-full transition-all duration-500 ease-in-out" icon={ClipboardIcon} />
                  <p className="group-hover:translate-x-20 transition-all duration-500 ease-in-out">MyStayInfo</p>
                </h3>
                <p className="text-2xl font-medium mt-2 text-olive-400">Guest info page for AirBnb hosts.</p>
              </div>
              <div className="absolute hidden w-full h-full top-0 left-0 xl:flex flex-col justify-end items-end z-20 p-6">
                <Button size="xl" className="text-2xl mt-14 pointer-events-none" tabIndex={-1}><HugeiconsIcon strokeWidth={2} className="scale-150 mr-3" icon={LinkSquare01Icon} />See Project</Button>
              </div>
              <div className="absolute bottom-0 left-0 w-[200%] h-24 bg-olive-950 blur-2xl translate-y-[50%] -translate-x-[25%] z-10" />
              <Image src={one} alt="MyStayInfo — guest information page for AirBnb hosts" fill className="object-cover object-[60%_90%] group-hover:scale-102 transition-all duration-500 ease-in-out" />
            </a>
          </WorkCard>
          <WorkCard delay={0.08}>
            <a href="https://silknodeai.com" target="_blank" rel="noopener noreferrer" className="block relative w-full h-70 rounded-4xl overflow-hidden group">
              <div className="absolute w-full h-full top-0 left-0 flex flex-col justify-end items-start z-20 p-6">
                <h3 className="font-instrument-serif text-6xl relative">
                  <HugeiconsIcon className="absolute top-0 -left-60 group-hover:translate-x-39 w-full h-full transition-all duration-500 ease-in-out" icon={AiBrowserIcon} />
                  <p className="group-hover:translate-x-20 transition-all duration-500 ease-in-out">Silknode AI</p>
                </h3>
                <p className="text-2xl font-medium mt-2 text-olive-400">Synthesize a brand kit for your business.</p>
              </div>
              <div className="absolute hidden w-full h-full top-0 left-0 xl:flex flex-col justify-end items-end z-20 p-6">
                <Button size="xl" className="text-2xl mt-14 pointer-events-none" tabIndex={-1}><HugeiconsIcon strokeWidth={2} className="scale-150 mr-3" icon={LinkSquare01Icon} />See Project</Button>
              </div>
              <div className="absolute bottom-0 left-0 w-[200%] h-24 bg-olive-950 blur-2xl translate-y-[50%] -translate-x-[25%] z-10" />
              <Image src={two} alt="Silknode AI — AI-powered brand kit synthesis tool" fill className="object-cover object-[60%_80%] group-hover:scale-102 transition-all duration-500 ease-in-out" />
            </a>
          </WorkCard>
          <WorkCard delay={0.04}>
            <a href="https://github.com/matyas-toth/wren-cli" target="_blank" rel="noopener noreferrer" className="block relative w-full h-70 rounded-4xl overflow-hidden group">
              <div className="absolute w-full h-full top-0 left-0 flex flex-col justify-end items-start z-20 p-6">
                <h3 className="font-instrument-serif text-6xl relative">
                  <HugeiconsIcon className="absolute top-0 -left-60 group-hover:translate-x-55 w-full h-full transition-all duration-500 ease-in-out" icon={BinaryCodeIcon} />
                  <p className="group-hover:translate-x-20 transition-all duration-500 ease-in-out">Wren</p>
                </h3>
                <p className="text-2xl font-medium mt-2 text-olive-400">A highly opinionated AI coding agent.</p>
              </div>
              <div className="hidden absolute w-full h-full top-0 left-0 xl:flex flex-col justify-end items-end z-20 p-6">
                <Button size="xl" className="text-2xl mt-14 pointer-events-none" tabIndex={-1}><HugeiconsIcon strokeWidth={2} className="scale-150 mr-3" icon={LinkSquare01Icon} />See Project</Button>
              </div>
              <div className="absolute bottom-0 left-0 w-[200%] h-24 bg-olive-950 blur-2xl translate-y-[50%] -translate-x-[25%] z-10" />
              <Image src={four} alt="Wren — an opinionated AI coding agent" fill className="object-cover object-[50%_50%] group-hover:scale-102 transition-all duration-500 ease-in-out" />
            </a>
          </WorkCard>
          <WorkCard delay={0.12}>
            <div className="bg-olive-900 border-2 border-olive-800 w-full h-70 rounded-4xl flex flex-col justify-center items-center">
              <h3 className="font-instrument-serif text-3xl text-olive-600 text-center">something cool will probably happen here</h3>
            </div>
          </WorkCard>
        </div>
      </section>

      {/* ─── What I Do ─────────────────────────────────── */}
      <section aria-label="What I do" className="container z-50 mx-auto h-auto xl:h-200 flex flex-col xl:flex-row justify-between items-start xl:items-center py-16 md:py-30 gap-10 xl:gap-0">
        <ScrollReveal>
          <div className="flex flex-col justify-center items-start">
            <h2 className="text-4xl sm:text-6xl lg:text-8xl text-olive-300 tracking-tight font-instrument-serif">
              Turning ideas <span className="block">into <span className="italic mr-2 md:mr-4 xl:mr-6">digital</span>things.</span>
            </h2>
            <p className="text-lg sm:text-2xl text-olive-500 font-medium tracking-tight mt-4">I like being part of interesting stuff.</p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15} className="w-full lg:w-200">
          <GlowGrid className="grid grid-rows-3 lg:grid-rows-2 grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 w-full">

            {/* UI/UX Dialog */}
            <Dialog>
              <DialogTrigger asChild>
                <GlowCard className="w-full h-70 p-8 flex flex-col justify-between items-start cursor-pointer duration-500">
                  <div>
                    <HugeiconsIcon icon={CursorMagicSelection01Icon} className="w-12 h-12 text-olive-400 mb-6" />
                    <h3 className="font-instrument-serif text-4xl text-olive-300">UI/UX Design</h3>
                    <p className="text-olive-500 font-medium text-lg mt-2">Crafting intuitive and engaging user experiences.</p>
                  </div>
                  <Button variant="outline" size="sm" className="mt-4 pointer-events-none">Expand</Button>
                </GlowCard>
              </DialogTrigger>
              <DialogContent className="sm:max-w-3xl bg-olive-950 border-olive-800 text-olive-300 overflow-y-auto max-h-[90vh] z-100 pt-6 pb-4">
                <DialogHeader className="pb-2">
                  <DialogTitle className="font-instrument-serif text-4xl sm:text-5xl text-olive-200">UI/UX Design</DialogTitle>
                  <DialogDescription className="text-olive-500 text-lg sr-only">UI/UX design work and philosophy by Matyas Toth.</DialogDescription>
                </DialogHeader>
                <div className="flex flex-col gap-5 py-4">
                  <p className="text-olive-300 text-lg leading-relaxed font-medium">Even though I love designing, I still prefer to ship things. A design that never gets built is just a pretty picture, and a design handed off to another developer is often a pretty picture with a short life expectancy.</p>
                  <p className="text-olive-500 text-base leading-relaxed">The interfaces I care most about are the ones I also write the code for. When you control both sides, nothing gets lost in translation. The hover state actually happens the way you imagined it. The transition timing is what you felt in Figma, not what a rushed sprint delivered. The spacing breathes correctly because you are the one who decides when it is close enough.</p>
                  <p className="text-olive-500 text-base leading-relaxed">That said, I do not let a coding agent assemble the UI and call it done. There is a real craft in taking a layout from functional to satisfying. It is the difference between a button that works and a button that feels good to press. AI can get you 70% of the way there quickly. The last 30% is still human work, and it is the part that makes people notice without knowing why.</p>
                  <p className="text-olive-500 text-base leading-relaxed">Below is a selection of screens from projects I designed and built.</p>
                </div>
                <div className="grid grid-cols-2 gap-3 pb-2">
                  <div className="col-span-2 relative w-full aspect-video rounded-2xl overflow-hidden bg-olive-800"><Image src={design1} alt="UI/UX design work — screen 1" fill className="object-cover object-top" /></div>
                  <div className="col-span-2 relative w-full aspect-video rounded-2xl overflow-hidden bg-olive-800"><Image src={design2} alt="UI/UX design work — screen 2" fill className="object-cover" /></div>
                  <div className="col-span-2 relative w-full aspect-video rounded-2xl overflow-hidden bg-olive-800"><Image src={design3} alt="UI/UX design work — screen 3" fill className="object-cover" /></div>
                  <div className="col-span-2 relative w-full aspect-video rounded-2xl overflow-hidden bg-olive-800"><Image src={design4} alt="UI/UX design work — screen 4" fill className="object-cover" /></div>
                  <div className="col-span-2 relative w-full aspect-video rounded-2xl overflow-hidden bg-olive-800"><Image src={design5} alt="UI/UX design work — screen 5" fill className="object-cover" /></div>
                </div>
              </DialogContent>
            </Dialog>

            {/* Product Design Dialog */}
            <Dialog>
              <DialogTrigger asChild>
                <GlowCard className="w-full h-70 p-8 flex flex-col justify-between items-start cursor-pointer duration-500">
                  <div>
                    <HugeiconsIcon icon={BoundingBoxIcon} className="w-12 h-12 text-olive-400 mb-6" />
                    <h3 className="font-instrument-serif text-4xl text-olive-300">Product Design</h3>
                    <p className="text-olive-500 font-medium text-lg mt-2">Building scalable and user-centric digital products.</p>
                  </div>
                  <Button variant="outline" size="sm" className="mt-4 pointer-events-none">Expand</Button>
                </GlowCard>
              </DialogTrigger>
              <DialogContent className="sm:max-w-3xl bg-olive-950 border-olive-800 text-olive-300 overflow-y-auto max-h-[90vh] z-100 pt-6 pb-2">
                <DialogHeader className="pb-2">
                  <DialogTitle className="font-instrument-serif text-4xl sm:text-5xl text-olive-200">Product Design</DialogTitle>
                  <DialogDescription className="sr-only">Product work by Matyas Toth.</DialogDescription>
                </DialogHeader>
                <div className="flex flex-col gap-5 py-4">
                  <p className="text-olive-300 text-lg leading-relaxed font-medium">Good product design is not about how it looks in a Figma file. It is about whether it works for real people trying to do a real thing.</p>
                  <p className="text-olive-500 text-base leading-relaxed">Every product below went from concept to something I could hand someone and watch them use. That process changes your decisions. You stop designing features and start designing outcomes. You cut things that look clever on a board but add friction in practice. The constraint of having to actually build the thing is the best design tool I know.</p>
                </div>
                <div className="flex flex-col gap-6 pb-4">
                  {[
                    { href: "https://silknodeai.com", src: silknodeai, alt: "Silknode AI", tag: "AI Tool", desc: "Generate a cohesive brand kit in minutes. Silknode handles logo, color palette, typography, and brand guidelines using AI-driven art direction, cutting what used to be a weeks-long agency process down to an afternoon." },
                    { href: "https://mystayinfo.com", src: mystayinfo, alt: "myStayInfo", tag: "SaaS", desc: "Guest info pages for Airbnb and vacation rental hosts. WiFi, house rules, check-out instructions, and local tips in one shareable link. Hosts print a QR code, guests scan on arrival, and nobody sends a message at midnight asking where the spare key is." },
                    { href: "https://otthon-ai.hu", src: otthonai, alt: "Otthon AI", tag: "AI Tool", desc: "An AI interior design tool built for Hungarian users. Upload a photo of your room, or start from scratch, and the AI generates styled interior concepts around it. Experiment with furniture layouts, lighting, and styles before spending a forint on anything." },
                    { href: "https://cloudclient.hu", src: cloudclient, alt: "CloudClient", tag: "Gaming", desc: "The fastest Hungarian Minecraft client. Built for players who care about performance. CloudClient strips away the overhead and gives the game back to the people playing it, without the usual trade-offs between speed and polish." },
                  ].map((p) => (
                    <a key={p.href} href={p.href} target="_blank" rel="noopener noreferrer" className="group block">
                      <div className="rounded-2xl border border-olive-800 overflow-hidden hover:border-olive-600 transition-colors duration-300">
                        <div className="relative w-full aspect-video bg-olive-900"><Image src={p.src} alt={p.alt} fill className="object-cover object-top" /></div>
                        <div className="p-5">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="font-instrument-serif text-2xl text-olive-200">{p.alt}</h3>
                            <span className="text-xs font-mono uppercase tracking-widest text-olive-600 border border-olive-700 px-2 py-0.5 rounded">{p.tag}</span>
                          </div>
                          <p className="text-olive-500 text-sm leading-relaxed">{p.desc}</p>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </DialogContent>
            </Dialog>

            {/* Civic Tech Dialog */}
            <Dialog>
              <DialogTrigger asChild>
                <GlowCard className="w-full col-span-1 lg:col-span-2 h-fit p-8 flex flex-col justify-between items-start cursor-pointer duration-500">
                  <div>
                    <HugeiconsIcon icon={UserGroupIcon} className="w-12 h-12 text-olive-400 mb-6" />
                    <h3 className="font-instrument-serif text-4xl text-olive-300">Civic tech projects</h3>
                    <p className="text-olive-500 font-medium text-lg mt-2">Developing technology for public good and community empowerment.</p>
                  </div>
                  <Button variant="outline" size="sm" className="mt-4 pointer-events-none">Expand</Button>
                </GlowCard>
              </DialogTrigger>
              <DialogContent className="sm:max-w-3xl bg-olive-950 border-olive-800 text-olive-300 overflow-y-auto max-h-[90vh] z-100 pt-6 pb-2">
                <DialogHeader className="pb-2">
                  <DialogTitle className="font-instrument-serif text-4xl sm:text-5xl text-olive-200">Civic tech projects</DialogTitle>
                  <DialogDescription className="sr-only">Civic tech work by Matyas Toth.</DialogDescription>
                </DialogHeader>
                <div className="flex flex-col gap-5 py-4">
                  <p className="text-olive-300 text-lg leading-relaxed font-medium">Some of the most interesting work I have done was free.</p>
                  <p className="text-olive-500 text-base leading-relaxed">These are pro bono projects for Hungarian civil organisations, built with a team of five where I served as technical lead and architect. No budget, no commercial pressure, just real organisations with real needs and a team willing to show up and solve them properly. That context strips away a lot of the noise. You ship what works, not what impresses a client on a call.</p>
                </div>
                <div className="flex flex-col gap-6 pb-4">
                  <a href="https://dialogegyesulet.hu" target="_blank" rel="noopener noreferrer" className="group block">
                    <div className="rounded-2xl border border-olive-800 overflow-hidden hover:border-olive-600 transition-colors duration-300">
                      <div className="relative w-full aspect-video bg-olive-900"><Image src={dialogegyesulet} alt="Dialóg Egyesület website" fill className="object-cover object-top" /></div>
                      <div className="p-5">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-instrument-serif text-2xl text-olive-200">Dialóg Egyesület</h3>
                          <span className="text-xs font-mono uppercase tracking-widest text-olive-600 border border-olive-700 px-2 py-0.5 rounded">Website + CMS</span>
                        </div>
                        <p className="text-olive-500 text-sm leading-relaxed">A full modern website for Dialóg Egyesület, a Hungarian civil organisation built around the idea that everyone counts and everyone shapes the community. Beyond the public-facing site we built a custom admin panel with gallery management, giving the team a lightweight CMS they can actually run themselves without a developer on call.</p>
                      </div>
                    </div>
                  </a>
                  <a href="https://diodome.setaloja.hu" target="_blank" rel="noopener noreferrer" className="group block">
                    <div className="rounded-2xl border border-olive-800 overflow-hidden hover:border-olive-600 transition-colors duration-300">
                      <div className="relative w-full aspect-video bg-olive-900"><Image src={willywalnutwalk} alt="Willy Walnut Walk" fill className="object-cover object-top" /></div>
                      <div className="p-5">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-instrument-serif text-2xl text-olive-200">Willy Walnut&apos;s Walk</h3>
                          <span className="text-xs font-mono uppercase tracking-widest text-olive-600 border border-olive-700 px-2 py-0.5 rounded">Frontend</span>
                        </div>
                        <p className="text-olive-500 text-sm leading-relaxed">A complete frontend modernisation for Dió Döme sétálója, one of several family-friendly nature walks opened across Hungary by a single non-profit. We rebuilt it so that the walks themselves are the focus: clear routes, family-oriented information, and a design that works on a phone while you are actually out walking.</p>
                      </div>
                    </div>
                  </a>
                  <div className="group block">
                    <div className="rounded-2xl border border-olive-800 overflow-hidden opacity-80">
                      <div className="relative w-full aspect-video bg-olive-900"><Image src={cirmi} alt="Cirmi — Civil Rádió Miskolc portal" fill className="object-cover object-top" /></div>
                      <div className="p-5">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-instrument-serif text-2xl text-olive-200">Cirmi</h3>
                          <span className="text-xs font-mono uppercase tracking-widest text-olive-600 border border-olive-700 px-2 py-0.5 rounded">Portal</span>
                        </div>
                        <p className="text-olive-500 text-sm leading-relaxed">Civil Rádió Miskolc is a culture radio based in Miskolc (my city) that streams live on and off throughout the week. We built their listener portal: live stream front and centre when they are on air, archive view when they are not, latest posts pulled from Instagram and Facebook, and upcoming events aggregated from YouTube and Facebook. Everything a community radio needs, in one place.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>

          </GlowGrid>
        </ScrollReveal>
      </section>

      {/* ─── Blog ─────────────────────────────────────────── */}
      <ScrollReveal className="relative w-full">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-transparent pointer-events-none" />
        <BlogSection posts={posts} />
      </ScrollReveal>

      {/* ─── Contact ──────────────────────────────────────── */}
      <ScrollReveal className="relative w-full border-olive-900/60" id="contact">
        <ContactSection />
      </ScrollReveal>

    </div>
  )
}
