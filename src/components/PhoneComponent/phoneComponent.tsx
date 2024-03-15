'use client'

import Link from "next/link"

import { Phone } from "@mui/icons-material";

export const PhoneComponent = () => {

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      };

    return (
        <Link href="tel:+48883027007" onClick={scrollToTop} id="scrollup" className="fixed z-10 bottom-4 left-4 p-5 bg-[#ffc371] transition ease-in-out hover:bg-[#ff5f6d]
        flex md:hidden flex-row justify-center items-center rounded-full cursor-pointer shadow-lg">
            <Phone sx={{ color: 'white' }} />
        </Link>
    )
}