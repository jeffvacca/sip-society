import * as React from "react"
import Logo from "../public/svg/logo.svg"
import { ContactForm } from "./contact-form"


export default function Contact() {
    return (
        <div className="flex w-full justify-center items-center bg-offwhitedark py-12 relative">
                            {/* <Logo className="text-black w-screen h-screen opacity-10 absolute top-0" /> */}

            <div className="w-11/12 lg:w-9/12 px-4 flex justify-center items-center flex-col">
                <h1 className="text-gold text-center text-4xl md:text-6xl mb-8 md:mb-16 font-poiret">Contact</h1>
                <ContactForm />
            </div>
        </div>
    )
}