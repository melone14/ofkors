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
        <div onClick={scrollToTop} id="scrollup" className="fixed bottom-4 right-4 p-5 bg-[#ffc371] 
        flex flex-row justify-center items-center rounded-full cursor-pointer shadow-lg">
            <ExpandLessIcon sx={{ color: 'white' }} />
        </div>
    )
}