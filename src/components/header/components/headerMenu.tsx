'use client'

import { useState, useEffect } from "react"
import Link from "next/link"

import { usePathname } from 'next/navigation'

import { IconButton, Drawer } from "@mui/material"
import { Menu, Close } from "@mui/icons-material"

import { MainMenu } from "@/config"

export const HeaderMenu = () => {

    const pathname = usePathname()
    
    const [menuOpen, setMenuOpen] = useState<boolean>(false)
    
    useEffect(()=>{
        setMenuOpen(false)
    }, [pathname])

    return (
        <>
        <div className='w-full h-16 text-black flex flex-row justify-end items-center lg:hidden z-10 px-5'>
            <IconButton onClick={()=>{
                setMenuOpen((state)=>!state)
            }}>
                <Menu/>
            </IconButton>
        </div>
        <Drawer
        className="block lg:hidden"
        anchor="right"
        open={menuOpen}
        onClose={() => setMenuOpen(false)}>
            <div className="w-[20rem] flex flex-col justify-center items-center h-full gap-y-5">
                <nav className=" flex flex-col justify-center items-center gap-y-5">
                    {MainMenu.map((label, index)=>{
                        return (
                            <Link className="text-xl transition ease-in-out hover:text-[#47141e]" href={label.url} key={index}>{label.label}</Link>
                        )
                    })}
                </nav>
                <IconButton onClick={()=>setMenuOpen(false)}>
                    <Close className="text-2xl transition ease-in-out hover:text-[#47141e]"/>
                </IconButton>
            </div>
        </Drawer>
        </>
    )
}