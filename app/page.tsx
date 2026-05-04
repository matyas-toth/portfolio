import GradualBlur from "@/components/GradualBlur"
import { Button } from "@/components/ui/button"

import frame from "../public/frame.png"
import Image from "next/image"
import one from "../public/one.jpg"
import two from "../public/two.jpg"
import three from "../public/three.jpg"
import four from "../public/four.jpg"
import { HugeiconsIcon } from "@hugeicons/react"
import { BedSingle01Icon, ClipboardIcon, ExternalLink, LinkSquare01Icon } from "@hugeicons/core-free-icons"





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
      <div className="container z-50 mx-auto h-200 flex flex-col items-center py-30">
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
          <div className="relative w-full h-70 rounded-4xl overflow-hidden">
            <div className="absolute w-full h-full top-0 left-0 flex flex-col justify-end items-start z-20 p-6">
              <h3 className="font-instrument-serif text-6xl">Silknode AI</h3>
              <p className="text-2xl font-medium mt-2 text-olive-400">Synthesize a brand kit for your business.</p>
            </div>
            <div className="absolute w-full h-full top-0 left-0 flex flex-col justify-end items-end z-20 p-6">
              <Button size={"xl"} className="text-2xl mt-14"><HugeiconsIcon strokeWidth={2} className="scale-150 mr-3" icon={LinkSquare01Icon} />See Project</Button>
            </div>
            <div className="absolute bottom-0 left-0 w-[200%] h-24 bg-olive-950 blur-2xl translate-y-[50%] -translate-x-[25%]  z-10"></div>
            <Image src={two} alt="frame" fill className="object-cover object-[60%_80%]" />
          </div>
          <div className="relative w-full h-70 rounded-4xl overflow-hidden">
            <div className="absolute w-full h-full top-0 left-0 flex flex-col justify-end items-start z-20 p-6">
              <h3 className="font-instrument-serif text-6xl">Wren</h3>
              <p className="text-2xl font-medium mt-2 text-olive-400">A highly opinionated AI coding agent.</p>
            </div>
            <div className="absolute w-full h-full top-0 left-0 flex flex-col justify-end items-end z-20 p-6">
              <Button size={"xl"} className="text-2xl mt-14"><HugeiconsIcon strokeWidth={2} className="scale-150 mr-3" icon={LinkSquare01Icon} />See Project</Button>
            </div>
            <div className="absolute bottom-0 left-0 w-[200%] h-24 bg-olive-950 blur-2xl translate-y-[50%] -translate-x-[25%]  z-10"></div>
            <Image src={four} alt="frame" fill className="object-cover object-[50%_50%]" />
          </div>
          <div className="bg-olive-900 border-2 border-olive-800 w-full h-70 rounded-4xl"></div>



        </div>
      </div>


    </div>
  )
}
