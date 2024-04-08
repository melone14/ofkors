'use client'

import Link from "next/link"

import ExpandLessIcon from '@mui/icons-material/ExpandLess';

export const ScrollButton = () => {

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      };

    return (
        <div onClick={scrollToTop} id="scrollup" className="fixed z-10 bottom-4 right-4 p-3 bg-[#ffc371] transition ease-in-out hover:bg-[#ff5f6d]
        flex flex-row justify-center items-center rounded-full cursor-pointer shadow-lg">
            <ExpandLessIcon sx={{ color: 'white', fontSize: '2rem' }} />
        </div>
    )
}