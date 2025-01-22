import * as React from "react"
import Package from "./package"
import { Separator } from "@/components/ui/separator"

export default function Packages() {

    const packages = [
        {
            title: 'Just a Sip',
            content: 'Perfect for intimate gatherings up to 50 guests.',
            footer: '$1500'
        },
        {
            title: 'Make It a Double',
            content: 'Designed for mid-sized parties of 50-100 people.',
            footer: '$2000'
        },
        {
            title: 'Raise Your Glass',
            content: 'Ideal for large events of 100 guests or more.',
            footer: '$2500'
        },
    ]



    return (
        <div className="flex w-full justify-center bg-dark py-12 font-didact text-offwhitedarker">
            <div className="w-11/12 lg:w-9/12 px-4">
                <h1 className="text-gold text-center text-4xl md:text-6xl mb-8 md:mb-16 font-poiret">Our Packages</h1>
                <p className="text-center text-lg mb-16">
                    Our mobile bartending packages are designed to cater to events of all sizes, offering flexible pricing based on guest count and service requirements. Whether you're hosting an intimate party or a grand celebration, we tailor our packages to ensure your event is unforgettable while staying within your budget.
                </p>
                <div className="w-11/12 lg:w-9/12 px-4 mx-auto mb-16">
                    <p className="text-xl mb-4 text-gold">
                        All of our mobile bartending packages include:
                    </p>
                    <ul className="list list-disc list-inside  leading-7 pl-4">
                        <li>Expert, trained bartending staff who bring both skill and style</li>
                        <li>High-quality glassware and premium plasticware for every drink</li>
                        <li>A full selection of sodas and mixers to complement your drinks</li>
                        <li>A curated drink menu customized to fit your event's theme or vibe</li>
                        <li>Fresh garnishes and fruits to enhance each cocktail</li>
                        <li>Five hours of professional bartending service</li>
                        <li>Stylish drink accessories for a polished, cohesive setup</li>
                        <li>Travel up to 30 miles at no extra charge (additional fees for longer distances)</li>
                    </ul>
                </div>
                <div className="grid grid-cols-3 gap-8 mb-32">
                    {packages.map((item, index) => <Package title={item.title} content={item.content} footer={item.footer} key={item.title} />)}
                </div>
                <div className="mb-24 leading-10 text-3xl uppercase text-center font-poiret text-white">Ask about custom pricing for our exclusive beer and wine-only packages!</div>
                <div className="w-11/12 lg:w-9/12 px-4 mx-auto mb-16">
                    <p className="text-xl mb-4 text-gold"> Add-Ons: </p>
                    <dl className="leading-7 pl-4">
                        <dt className="font-poiret text-xl tracking-wide">Additional Bar Setups - $200/set up</dt>
                        <dd className="tracking-wide">Need more bars to keep the drinks flowing? We've got you covered.</dd>
                        <Separator className="my-4" />                        
                        <dt className="font-poiret text-xl tracking-wide">Extra Bar Service Hours – $150/hour</dt>
                        <dd className="tracking-wide">Extend the party and let the good times roll a little longer!</dd>
                        <Separator className="my-4" />                        
                        <dt className="font-poiret text-xl tracking-wide">Mocktail Menu – $100</dt>
                        <dd className="tracking-wide">Crafted for those who prefer something non-alcoholic but just as chic.
                        </dd>
                        <Separator className="my-4" />                        
                        <dt className="font-poiret text-xl tracking-wide">Champagne Toast Wall (coming soon)</dt>
                        <dd className="tracking-wide">A showstopping way to kick off any celebration with bubbles and beauty.</dd>
                        <Separator className="my-4" />                        
                        <dt className="font-poiret text-xl tracking-wide">Party Essentials Shopping & Delivery – $200 + cost of material</dt>
                        <dd className="tracking-wide">Let us take the shopping off your hands—just tell us what you need, and we’ll deliver it right to your event</dd>
                    </dl>
                </div>
            </div>
        </div>
    )
}