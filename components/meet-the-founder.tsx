import * as React from "react"

export default function MeetTheFounder() {
    return (
        <div className="flex w-full justify-center bg-gray-100 py-12">
            <div className="w-11/12 lg:w-9/12 px-4">
                <h1 className="text-gold text-center text-4xl md:text-6xl mb-8 md:mb-16 font-poiret">Meet the Founder</h1>
                <div className="md:grid grid-cols-12 gap-6 mb-16">
                    <div className="col-span-6">
                        <img src="images/photo-1.jpg" className="lg:w-11/12 block mx-auto mb-6 lg:mb-0" />
                    </div>
                    <div className="col-span-6 font-didact text-dark lg:text-lg flex flex-col justify-center ">
                        <p>With a passion for craft cocktails and a flair for creating unforgettable experiences, Mackenzie is the owner and lead bartender of Sip Society a mobile bartending service that brings the bar to you. Whether it's a wedding, corporate event, or private party, I specialize in customizing drink menus to suit any occasion, ensuring your guests enjoy top-quality cocktails and impeccable service.
                        </p>
                    </div>
                </div>
                <div className="md:grid grid-cols-12 gap-6">
                    <div className="col-span-6 order-last">
                        <img src="images/photo-2.jpg" className="lg:w-11/12 block mx-auto mb-6 lg:mb-0" />
                    </div>
                    <div className="col-span-6 font-didact text-dark lg:text-lg flex flex-col justify-center md:text-right">
                        <p>With years of experience in both high-end venues and casual settings, I am dedicated to providing a fun, professional, and stress-free bar experience, leaving you free to enjoy the celebration. Let me handle the drinks, so you can focus on making memories!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}