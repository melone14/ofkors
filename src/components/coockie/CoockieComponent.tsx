'use client'

import { useState, useEffect } from "react"

import { routes } from "@/config"
import Image from "next/image"
import { Dialog } from "@mui/material"

import Logo from '@/images/logo/base_logo_transparent_background.png'

export const CoockieComponent = () => {

    const [open, setOpen] = useState(false);

    useEffect(()=>{
        const timeoutId = setTimeout(() => {
            if (!localStorage.getItem('coockie_accept')) {
                setOpen(true);
            }
            
          }, 3000);
          return () => clearTimeout(timeoutId);

    }, [])

    return (
        <>
        <Dialog onClose={
            ()=>{
                setOpen(false);
            }
        } open={open}>
            <div className="w-full flex flex-col items-center gap-5 p-5">
                <Image className="w-80 h-auto" src={Logo} alt="Logo Ofkors"/>
                <p className="w-full">
                Informujemy, iż w celu realizacji usług dostępnych na naszej stronie, optymalizacji jej treści oraz dostosowania
strony do Państwa indywidualnych potrzeb korzystamy z informacji zapisanych za pomocą plików cookies na
urządzeniach końcowych użytkowników. Pliki cookies można kontrolować za pomocą ustawień swojej
przeglądarki internetowej. Dalsze korzystanie ze strony internetowej, bez zmiany ustawień przeglądarki
internetowej oznacza, iż użytkownik akceptuje stosowanie plików cookies. Więcej informacji zawartych jest w 
 <a className="hover:underline text-[#47141e]" href={routes.privacyPolicy}> polityce prywatności</a> strony.
                </p>
                <button onClick={()=>{
                    localStorage.setItem('coockie_accept', JSON.stringify(true))
                    setOpen(false);
                }} className="transition p-4 bg-[#47141e] border-2 border-[#47141e] text-white rounded-xl hover:bg-white hover:text-[#47141e]">Zrozumiałem Politykę coockie</button>
            </div>
        </Dialog>

        </>
    )
}