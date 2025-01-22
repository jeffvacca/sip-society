import * as React from "react"
import Logo from "../public/svg/logo.svg"
import { ContactForm } from "./contact-form"
import { Facebook, Instagram } from "lucide-react";
import { Separator } from "./ui/separator";

export default function Contact() {
    return (
        <div className="w-full bg-offwhitedark py-12 relative font-didact relative">
            <Logo className="text-black w-full opacity-5 top-16 absolute" />

            <h1 className="text-gold text-center text-4xl md:text-6xl mb-8 md:mb-16 font-poiret">Contact</h1>


            <div className="px-12 md:grid grid-cols-12 gap-6 mx-auto z-10 relative">
                <div className="col-span-7 mb-16 md:mb-0">
                    <ContactForm />
                </div>
                <div className="col-span-5">
                    <div className="text-slate-800 text-2xl mb-8 font-poiret font-semibold">
                        <a className="block mb-1" href="tel:315-926-9507">315-926-9507</a>
                        <a className="block" href="mailto:sipsocietyroc@gmail.com">sipsocietyroc@gmail.com</a>
                    </div>
                    <Separator className="mb-8 !bg-gray-300" />
                    <div className="flex items-center text-gold ">
                        <a href="https://www.instagram.com/sipsocietyroc/profilecard/?igsh=bmszMWt2Y3UwcXNy" target="_blank" className="mr-4 hover:text-gold/50 cursor-pointer">
                            <Instagram size={36} />
                        </a>
                        <a href="https://www.facebook.com/share/19QWGWCpVa/?mibextid=wwXIfr" target="_blank" className="mr-4 hover:text-gold/50 cursor-pointer">
                            <Facebook size={36} />
                        </a>
                    </div>

                </div>



            </div>
        </div>
    )
}