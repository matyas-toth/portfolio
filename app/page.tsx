import GradualBlur from "@/components/GradualBlur"
import { Button } from "@/components/ui/button"
import { GlowGrid, GlowCard } from "@/components/ui/glow-card"
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"

import frame from "../public/frame.png"
import Image from "next/image"
import one from "../public/one.jpg"
import two from "../public/two.jpg"
import three from "../public/three.jpg"
import four from "../public/four.jpg"
import { HugeiconsIcon } from "@hugeicons/react"
import { BedSingle01Icon, ClipboardIcon, ExternalLink, LinkSquare01Icon, AiMagicIcon, CodeIcon, AiBrowserIcon, BinaryCodeIcon, CursorMagicSelection01Icon, BoundingBoxIcon, Building01Icon } from "@hugeicons/core-free-icons"





export default function Page() {
  return (
    <div className="min-h-svh w-full relative flex flex-col justify-start items-center">

      <div className="absolute w-full h-screen ">
        <div className="relative w-full h-full">
          <video
            src="/ascii-art.mp4"
            autoPlay
            loop
            muted
            className="absolute inset-0 w-full h-full object-cover opacity-50 brightness-120 "
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_1%,rgba(0,0,0,1)_100%)]"></div>

          <div className="absolute inset-0 bg-gradient-to-b from-black/100 via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-transparent to-transparent"></div>
        </div>
      </div>

      <div className="container relative z-50 min-h-svh mx-auto h-full flex flex-col justify-end items-start py-20">

        <h1 className="text-9xl font-instrument-serif text-olive-300 z-50 tracking-tight ">Never Idle. <div><span className="italic">Always</span> Curious.</div></h1>
        <div className="flex items-center gap-4"><Button size={"xl"} className="text-2xl mt-14">Explore what I do</Button><Button variant={"outline"} size={"xl"} className="text-2xl mt-14">Let's talk</Button></div>

      </div>
      <div className="container z-50 mx-auto min-h-200 flex flex-col items-center py-30">
        <h1 className="text-7xl text-olive-300 tracking-tight font-instrument-serif">Selected Work</h1>
        <p className="text-2xl text-olive-500 font-medium tracking-tight mt-4">A small set of products that I work on.</p>
        <div className="grid grid-cols-2 grid-rows-2 gap-10 w-full mt-20">
          <div className="relative w-full h-70 rounded-4xl overflow-hidden group">
            <div className="absolute w-full h-full top-0 left-0 flex flex-col justify-end items-start z-20 p-6">
              <h3 className="font-instrument-serif text-6xl relative">

                <HugeiconsIcon className="absolute top-0 -left-60 group-hover:translate-x-39 w-full h-full transition-all duration-500 ease-in-out" icon={ClipboardIcon} />

                <p className="group-hover:translate-x-20 transition-all duration-500 ease-in-out">MyStayInfo</p></h3>
              <p className="text-2xl font-medium mt-2 text-olive-400">Guest info page for AirBnb hosts.</p>
            </div>
            <div className="absolute w-full h-full top-0 left-0 flex flex-col justify-end items-end z-20 p-6">
              <Button size={"xl"} className="text-2xl mt-14"><HugeiconsIcon strokeWidth={2} className="scale-150 mr-3" icon={LinkSquare01Icon} />See Project</Button>
            </div>
            <div className="absolute bottom-0 left-0 w-[200%] h-24 bg-olive-950 blur-2xl translate-y-[50%] -translate-x-[25%]  z-10"></div>

            <Image src={one} alt="frame" fill className="object-cover object-[60%_90%] group-hover:scale-102 transition-all duration-500 ease-in-out" />
          </div>
          <div className="relative w-full h-70 rounded-4xl overflow-hidden group">
            <div className="absolute w-full h-full top-0 left-0 flex flex-col justify-end items-start z-20 p-6">
              <h3 className="font-instrument-serif text-6xl relative">

                <HugeiconsIcon className="absolute top-0 -left-60 group-hover:translate-x-39 w-full h-full transition-all duration-500 ease-in-out" icon={AiBrowserIcon} />

                <p className="group-hover:translate-x-20 transition-all duration-500 ease-in-out">Silknode AI</p></h3>
              <p className="text-2xl font-medium mt-2 text-olive-400">Synthesize a brand kit for your business.</p>
            </div>
            <div className="absolute w-full h-full top-0 left-0 flex flex-col justify-end items-end z-20 p-6">
              <Button size={"xl"} className="text-2xl mt-14"><HugeiconsIcon strokeWidth={2} className="scale-150 mr-3" icon={LinkSquare01Icon} />See Project</Button>
            </div>
            <div className="absolute bottom-0 left-0 w-[200%] h-24 bg-olive-950 blur-2xl translate-y-[50%] -translate-x-[25%]  z-10"></div>
            <Image src={two} alt="frame" fill className="object-cover object-[60%_80%] group-hover:scale-102 transition-all duration-500 ease-in-out" />
          </div>
          <div className="relative w-full h-70 rounded-4xl overflow-hidden group">
            <div className="absolute w-full h-full top-0 left-0 flex flex-col justify-end items-start z-20 p-6">
              <h3 className="font-instrument-serif text-6xl relative">

                <HugeiconsIcon className="absolute top-0 -left-60 group-hover:translate-x-55 w-full h-full transition-all duration-500 ease-in-out" icon={BinaryCodeIcon} />

                <p className="group-hover:translate-x-20 transition-all duration-500 ease-in-out">Wren</p></h3>
              <p className="text-2xl font-medium mt-2 text-olive-400">A highly opinionated AI coding agent.</p>
            </div>
            <div className="absolute w-full h-full top-0 left-0 flex flex-col justify-end items-end z-20 p-6">
              <Button size={"xl"} className="text-2xl mt-14"><HugeiconsIcon strokeWidth={2} className="scale-150 mr-3" icon={LinkSquare01Icon} />See Project</Button>
            </div>
            <div className="absolute bottom-0 left-0 w-[200%] h-24 bg-olive-950 blur-2xl translate-y-[50%] -translate-x-[25%]  z-10"></div>
            <Image src={four} alt="frame" fill className="object-cover object-[50%_50%] group-hover:scale-102 transition-all duration-500 ease-in-out" />
          </div>
          <div className="bg-olive-900 border-2 border-olive-800 w-full h-70 rounded-4xl flex flex-col justify-center items-center">

            <h3 className="font-instrument-serif text-3xl text-olive-600">something cool will probably happen here</h3>

          </div>



        </div>
      </div>
      <div className="container z-50 mx-auto h-200 flex flex-row justify-between items-center py-30">
        <div className="flex flex-col justify-center items-start">
          <h1 className="text-8xl text-olive-300 tracking-tight font-instrument-serif">Turning ideas <span className="block">into <span className="italic mr-6">digital</span>
            things.</span></h1>
          <p className="text-2xl text-olive-500 font-medium tracking-tight mt-4">I like being part of interesting stuff.</p>
        </div>
        <GlowGrid className="grid grid-rows-2 grid-cols-2 gap-10 w-200">
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
            <DialogContent className="sm:max-w-2xl bg-olive-900 border-olive-800 text-olive-300">
              <DialogHeader>
                <DialogTitle className="font-instrument-serif text-4xl">UI/UX Design</DialogTitle>
                <DialogDescription className="text-olive-500 text-lg">
                  Crafting intuitive and engaging user experiences.
                </DialogDescription>
              </DialogHeader>
              <div className="flex flex-col gap-4 py-4">
                <p className="text-olive-400">Here is a detailed overview of my UI/UX design philosophy, process, and examples. I focus on creating interfaces that are not only aesthetically pleasing but also highly functional.</p>
                <div className="w-full h-64 bg-olive-800 rounded-xl border border-olive-700 flex items-center justify-center">
                  <span className="text-olive-600">Image Placeholder</span>
                </div>
              </div>
            </DialogContent>
          </Dialog>

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
            <DialogContent className="sm:max-w-2xl bg-olive-900 border-olive-800 text-olive-300">
              <DialogHeader>
                <DialogTitle className="font-instrument-serif text-4xl">Product Design</DialogTitle>
                <DialogDescription className="text-olive-500 text-lg">
                  Building scalable and user-centric digital products.
                </DialogDescription>
              </DialogHeader>
              <div className="flex flex-col gap-4 py-4">
                <p className="text-olive-400">From ideation to launch, I specialize in comprehensive product design. This involves user research, rapid prototyping, and close collaboration with engineering teams.</p>
                <div className="w-full h-64 bg-olive-800 rounded-xl border border-olive-700 flex items-center justify-center">
                  <span className="text-olive-600">Image Placeholder</span>
                </div>
              </div>
            </DialogContent>
          </Dialog>

          <Dialog>
            <DialogTrigger asChild>
              <GlowCard className="w-full col-span-2 h-70 p-8 flex flex-col justify-between items-start cursor-pointer duration-500">
                <div>
                  <HugeiconsIcon icon={Building01Icon} className="w-12 h-12 text-olive-400 mb-6" />
                  <h3 className="font-instrument-serif text-4xl text-olive-300">Civic tech projects</h3>
                  <p className="text-olive-500 font-medium text-lg mt-2">Developing technology for public good and community empowerment.</p>
                </div>
                <Button variant="outline" size="sm" className="mt-4 pointer-events-none">Expand</Button>
              </GlowCard>
            </DialogTrigger>
            <DialogContent className="sm:max-w-2xl bg-olive-900 border-olive-800 text-olive-300">
              <DialogHeader>
                <DialogTitle className="font-instrument-serif text-4xl">Civic tech projects</DialogTitle>
                <DialogDescription className="text-olive-500 text-lg">
                  Developing technology for public good and community empowerment.
                </DialogDescription>
              </DialogHeader>
              <div className="flex flex-col gap-4 py-4">
                <p className="text-olive-400">I am deeply passionate about civic tech. I work on projects that enhance public services, promote transparency, and empower citizens through open data and accessible tools.</p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="w-full h-48 bg-olive-800 rounded-xl border border-olive-700 flex items-center justify-center">
                    <span className="text-olive-600">Image 1</span>
                  </div>
                  <div className="w-full h-48 bg-olive-800 rounded-xl border border-olive-700 flex items-center justify-center">
                    <span className="text-olive-600">Image 2</span>
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </GlowGrid>

      </div>


    </div>
  )
}
