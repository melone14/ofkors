'use client'

import { useState, FormEvent } from "react";
import { TextField, Button } from "@mui/material"
import { outlinedInputClasses } from '@mui/material/OutlinedInput';
import { createTheme, ThemeProvider, Theme, useTheme } from '@mui/material/styles';
import { API_BASE_URL } from "@/config";

const customTheme = (outerTheme: Theme) =>
  createTheme({
    palette: {
      primary: {
        main: '#000000'
    }
    },
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            '--TextField-brandBorderColor': '#000000',
            '--TextField-brandBorderHoverColor': '#000000',
            '--TextField-brandBorderFocusedColor': '#000000',
            '& label.Mui-focused': {
              color: 'var(--TextField-brandBorderFocusedColor)',
            },
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          notchedOutline: {
            borderColor: 'var(--TextField-brandBorderColor)',
          },
          root: {
            [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: 'var(--TextField-brandBorderHoverColor)',
            },
            [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: 'var(--TextField-brandBorderFocusedColor)',
            },
          },
        },
      },
      MuiInput: {
        styleOverrides: {
          root: {
            '&::before': {
              borderBottom: '2px solid var(--TextField-brandBorderColor)',
            },
            '&:hover:not(.Mui-disabled, .Mui-error):before': {
              borderBottom: '2px solid var(--TextField-brandBorderHoverColor)',
            },
            '&.Mui-focused:after': {
              borderBottom: '2px solid var(--TextField-brandBorderFocusedColor)',
            },
            color: "#000000",
          },
        },
      },
    },
  });

  interface IFormInput {
    first_name: string
    last_name: string
    phone_number: string;
    email: string;
    message: string;
  }
  
  export const ContactForm = () => {
    
    const [isSuccess, setIsSucces] = useState(false)

    async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
 
    const formData = new FormData(event.currentTarget)
    const response = await fetch(`${API_BASE_URL}blog/ofkors-form-create/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: formData
    })
 
    // Handle response if necessary
    const data = await response.json()

  if (response.ok) {
    setIsSucces(true)
  }
  }
  
  const query = async (data: IFormInput) =>{
    return fetch(`${API_BASE_URL}blog/ofkors-form-create/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
  }


  // const onSubmit = async (data: IFormInput) => {
  //   const response = await query(data)
  //   if (response.status === 201) {
  //     setIsSucces(true)
  //   }
  // }
    const outerTheme = useTheme();

    return (
        <>
        <ThemeProvider theme={customTheme(outerTheme)}>
          {!isSuccess ? <form className="w-full px-5" onSubmit={onSubmit}>
          <div className="w-full flex flex-col gap-y-10">
            <div className="flex flex-col gap-x-10 gap-y-10 md:flex-row justify-between w-full">
                <TextField name="first_name" sx={{ color: '#FFFFFF'}} variant="standard" label="Imię"/>
                <TextField name="last_name" sx={{ color: '#FFFFFF'}} variant="standard" label="Nazwisko"/>
            </div>
            <div className="flex flex-col gap-x-10 gap-y-10 md:flex-row justify-between w-full">
                <TextField name="email" sx={{ color: '#FFFFFF'}} variant="standard" label="Email"/>
                <TextField name="phone_number" variant="standard" label="Numer Telefonu"/>
            </div>
                <TextField name="message" sx={{ color: '#FFFFFF'}} fullWidth variant="standard" multiline
                label="Wiadomość"/>
            <Button
                type="submit"
                className="px-10" 
                style={{ backgroundColor:"#47141e", height:'56px', color: 'white' }} 
                variant="contained">
                Wyślij
            </Button>
        </div>
        </form> : <div className="w-full h-full flex flex-row justify-center items-center text-xl">Dziękujemy za wysłanie formularza!</div>}
        </ThemeProvider>

        </>
    )
}