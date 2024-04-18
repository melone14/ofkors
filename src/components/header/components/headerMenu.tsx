'use client'

import { useState, useEffect } from "react"
import Link from "next/link"

import { usePathname } from 'next/navigation'

import { IconButton, Drawer } from "@mui/material"
import { createTheme, ThemeProvider, Theme, useTheme } from '@mui/material/styles';
import { Menu, Close } from "@mui/icons-material"

import { MainMenu } from "@/config"

const customTheme = (outerTheme: Theme) =>
    createTheme({
      palette: {
        primary: {
          main: '#000000'
      }
      },
      components: {
        MuiDrawer: {
            styleOverrides: {
                root: {
                    backgroundColor: 'rgba(255, 255, 255, 0.5);'
                }
            }
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundColor: 'rgba(255, 255, 255, 0.8);'
                }
            }
        },
      },
    });

export const HeaderMenu = () => {

    const outerTheme = useTheme();
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
        <ThemeProvider theme={customTheme(outerTheme)}>
            <Drawer
            className="block lg:hidden"
            anchor="right"
            open={menuOpen}
            onClose={() => setMenuOpen(false)}>
                <div className="w-[17rem] flex flex-col justify-center items-center h-full gap-y-5">
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
        </ThemeProvider>
        </>
    )
}