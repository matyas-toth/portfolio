import Link from "next/link"

export default function AppNavBar() {
    return (
        <nav aria-label="Main navigation" className="fixed text-white top-0 left-0 w-full z-100 py-10 bg-gradient-to-b from-black/40 to-transparent">
            <div className="container mx-auto flex justify-center lg:justify-between items-center px-4">
                <div className="flex justify-start items-center gap-10">
                    <Link href="/" className="text-5xl font-instrument-serif tracking-tight select-none cursor-pointer hover:text-olive-300 transition-colors">
                        Matyas Toth
                    </Link>

                </div>
                <div className="hidden lg:flex items-center gap-8">
                    <Link href="/blog" className="text-lg font-medium text-olive-400 hover:text-olive-200 transition-colors">
                        Blog
                    </Link>
                </div>

            </div>
        </nav>
    )
}