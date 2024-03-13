import React from "react"
import Link from "next/link"
import { Metadata } from "next"
import { ContactForm } from "@/components/contactForm/ContactForm"
import { Email, Phone, Place } from "@mui/icons-material"

import { GoogleMapComponent } from "@/components/googleMap/MapComponent"

import "./style.css"

const Menu = [
    {label: "Zadzwoń", icon: <Phone sx={{ color:'#47141e'}} />, text:'Zadzwoń jeśli potrzebujesz pilnej odpowiedzi', data: "+48 999 000 222"},
    {label: "Napisz", icon: <Email sx={{ color:'#47141e'}} />, text:'Napisz, a odpiszemy', data: "biuro@ofkors.pl"},
    {label: "Przyjedź", icon: <Place sx={{ color:'#47141e'}} />, text:'Przyjedź i spotkaj się z nami', data: "pl. konesera 12\n00-001 Warszawa"}
]

export const metadata: Metadata = {
    title: 'Ofkors | Kontakt',
    description: 'Ofkors | Kontakt',
  }

export default function Page() {

    return (
        <>
            <div className="contact-main-section mt-10">
                <div className="flex items-center flex-col lg:flex-row justify-between m-0 md:m-10 py-10 px-5 md:px-20">
                    <div className="flex flex-col items-center mb-10">
                        <h1 className="text-4xl font-bold mb-10 text-center">Kontakt</h1>
                        <h2 className="text-3xl text-center">Masz pytania? Skontaktuj się z nami</h2>
                    </div>
                    <div className="w-full md:w-[40rem] rounded-md p-10 px-0 flex flex-col items-center">
                        <h3 className="text-3xl font-bold mb-10">Napisz do Nas</h3>
                        <ContactForm/>
                    </div>
                </div>
            </div>
            <div className="w-full flex-wrap flex flex-row justify-around my-20 gap-y-10 flex-wrap">
                <Link href="tel:+48 999 000 222" className="flex flex-col justify-center items-center gap-y-2.5 w-80 h-80 md:w-96 md:h-96 rounded-full bg-[#FAF8F6] p-5 shadow-2xl">
                    <div><Phone sx={{ color:'#47141e'}} /></div>
                    <div className="text-3xl font-bold">Zadzwoń</div>
                    <div className="max-w-60 text-center text-xl">Zadzwoń jeśli potrzebujesz pilnej odpowiedzi</div>
                    <div className="text-center text-md">+48 999 000 222</div>
                </Link>
                <Link href="mailto:biuro@ofkors.pl" className="flex flex-col justify-center items-center gap-y-2.5 w-80 h-80 md:w-96 md:h-96 rounded-full bg-[#FAF8F6] p-5 shadow-2xl">
                    <div><Email sx={{ color:'#47141e'}} /></div>
                    <div className="text-3xl font-bold">Napisz</div>
                    <div className="max-w-60 text-center text-xl">Napisz, a odpiszemy</div>
                    <div className="text-center text-md">biuro@ofkors.pl</div>
                </Link>
                <Link href='https://maps.app.goo.gl/UzjSHtDJddsT4i317' target="blank" className="flex flex-col justify-center items-center gap-y-2.5 w-80 h-80 md:w-96 md:h-96 rounded-full bg-[#FAF8F6] p-5 shadow-2xl">
                    <div><Place sx={{ color:'#47141e'}} /></div>
                    <div className="text-3xl font-bold">Przyjedź</div>
                    <div className="max-w-60 text-center text-xl">Przyjedź i spotkaj się z nami</div>
                    <div className="text-center text-md flex flex-col items-center">
                        <div>pl. konesera 12</div>
                        <div>00-001 Warszawa</div>
                    </div>
                </Link>
            </div>
            <GoogleMapComponent />
        </>
    )
}