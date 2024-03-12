'use client'
import Image from "next/image"
import { ArrowBack, ArrowForward } from "@mui/icons-material"
import React, { FC, useState } from "react"

type Props = {
    images: {
        id: number;
        idi:number;
        alt:string;
    }[],
    title: string;
}

export const PhotoComponent: FC<Props> = ({ images, title }) => {

    const [currentPhoto, setCurrentPhoto] = useState(0)

    const changePhoto = (direction: 'next' | 'prev') => {
        if (direction === 'prev') {
            setCurrentPhoto((prevIndex) => (prevIndex === 0 ? images.length -1  : prevIndex - 1));
        } else if (direction === 'next') {
            setCurrentPhoto((prevIndex) => (prevIndex === images.length -1 ? 0 : prevIndex + 1));
        }
      };

    return (
        <>
            <div className="w-full p-5">
                <div className="w-full relative">
                    <button onClick={() => changePhoto('prev')} className="absolute top-1/2 transform -translate-y-1/2 
                    left-2 z-10 rounded-full p-2 md:p-4 bg-[#47141e] flex flex-row items-center justify-center text-white"><ArrowBack/></button>
                    <img className="w-full rounded-2xl" src={`https://img.asariweb.pl/normal/${images[currentPhoto].idi}`} alt={title}/>
                    <button onClick={() => changePhoto('next')} className="absolute top-1/2 transform -translate-y-1/2 
                    right-2 z-10 rounded-full p-2 md:p-4 bg-[#47141e] flex flex-row items-center justify-center text-white"><ArrowForward/></button>
                </div>
                <div className="flex flex-row gap-x-5 overflow-auto mt-5">
                    {images.map((image, index) =>{
                        return (
                            <img onClick={()=>{
                                setCurrentPhoto(index)
                            }} key={index} className={`h-20 rounded w-40 ${index===currentPhoto ? "border-4 border-[#47141e]" : ''}`}
                            src={`https://img.asariweb.pl/normal/${image.idi}`} alt={title}/>
                        )
                    })}
                </div>
            </div>
        </>
    )
}