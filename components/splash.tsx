import * as React from "react"
import Logo from "../public/svg/logo.svg"

export default function Splash() {
    return (
        <div className="flex w-full h-[calc(100vh-64px)] items-center justify-center">
            <Logo className="text-white w-2/3 h-2/3" />
        </div>
    )
}