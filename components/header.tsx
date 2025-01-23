import * as React from "react"
import Link from "next/link";
export default function Header() {
    return (
        <header className="flex h-16 w-full items-center px-8 sticky top-0  text-offwhitedarker md:text-lg font-poiret font-semibold">
            <nav className="w-full flex items-center justify-around md:justify-end">
                <Link className="md:ml-8" href="#founder">Meet the Founder</Link>
                <Link className="md:ml-8" href="#packages">Our Packages</Link>
                <Link className="md:ml-8" href="#contact">Contact</Link>
            </nav>
        </header>
    )
}