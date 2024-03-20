
import Link from "next/link"
import { routes } from "@/config"

import './styles.css'

export const ContactSection = () => {
    return (
        <>
        <div className="contact-section flex flex-col items-center justify-center my-20 text-white gap-5">
            <div className="text-3xl text-center">Potrzebujesz więcej informacji?</div>
            <Link className="text-2xl bg-[#47141e] rounded-2xl p-5 py-2.5 transition hover:bg-[#ff5f6d] text-center" href={routes.contact}>Skontaktuj się z Nami</Link>
        </div>
        </>
    )
}