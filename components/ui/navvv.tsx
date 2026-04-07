export default function AppNavBar() {
    return (
        <nav className="fixed text-white top-0 left-0 w-full z-100 py-10 bg-gradient-to-b from-black/40 to-transparent">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex justify-start items-center gap-10">
                    <span className="text-5xl font-instrument-serif tracking-tight select-none cursor-pointer">Matyas Toth</span>

                </div>
                <div className="flex justify-end items-center gap-10">
                    <span className="text-xl tracking-tight opacity-80 hover:opacity-100 transition-all duration-300 ease-out cursor-pointer select-none">Selected Work</span>
                    <span className="text-xl tracking-tight opacity-80 hover:opacity-100 transition-all duration-300 ease-out cursor-pointer select-none">What I Do</span>
                    <span className="text-xl tracking-tight opacity-80 hover:opacity-100 transition-all duration-300 ease-out cursor-pointer select-none">Blog</span>
                    <span className="text-xl tracking-tight opacity-80 hover:opacity-100 transition-all duration-300 ease-out cursor-pointer select-none">Experience</span>
                    <span className="text-xl tracking-tight opacity-80 hover:opacity-100 transition-all duration-300 ease-out cursor-pointer select-none">Philosophy</span>
                    <span className="text-xl tracking-tight opacity-80 hover:opacity-100 transition-all duration-300 ease-out cursor-pointer select-none">Contact</span>
                </div>
            </div>
        </nav>
    )
}