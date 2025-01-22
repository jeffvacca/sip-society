import * as React from "react"
import { Menu } from "lucide-react";
export default function Header() {
    return (
        <header className="flex h-16 w-full items-center px-8 fixed">
            <div>
                <Menu />
            </div>
        </header>
    )
}