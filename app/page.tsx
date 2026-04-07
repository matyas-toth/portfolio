import GradualBlur from "@/components/GradualBlur"
import { Button } from "@/components/ui/button"

import frame from "../public/frame.png"
import Image from "next/image"


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
          <div className="relative w-full h-70 rounded-4xl overflow-hidden">
            <Image src={frame} alt="frame" fill className="object-cover" />
          </div>
          <div className="bg-red-500 w-full h-70 rounded-4xl"></div>
          <div className="bg-red-500 w-full h-70 rounded-4xl"></div>
          <div className="bg-red-500 w-full h-70 rounded-4xl"></div>



        </div>
      </div>


    </div>
  )
}
