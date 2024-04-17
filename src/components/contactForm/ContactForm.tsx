'use client'

import { useState, FormEvent } from "react";
import { TextField, Button, Dialog, IconButton } from "@mui/material"
import { outlinedInputClasses } from '@mui/material/OutlinedInput';
import { createTheme, ThemeProvider, Theme, useTheme } from '@mui/material/styles';
import { Close } from "@mui/icons-material";
import { API_BASE_URL } from "@/config";
import { routes } from "@/config";

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
    const [dialogOpen, setIsdialogOpen] = useState(false)

    async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
 
    const formData = new FormData(event.currentTarget)

    const qs = {
      first_name: formData.get('first_name'),
      last_name: formData.get('last_name'),
      email: formData.get('email'),
      phone_number: formData.get('phone_number'),
      message: formData.get('message'),
    }

    const response = await fetch(`${API_BASE_URL}blog/ofkors-form-create/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(qs)
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
        <Dialog
          open={dialogOpen}
          onClose={()=> {
            setIsdialogOpen(false);
          }}
        >
          <div className="w-[20rem] md:w-full p-10">
            <div className="w-full flex flex-row-reverse mb-5">
              <IconButton
              onClick={()=>{
                setIsdialogOpen(false);
              }}>
                <Close />
              </IconButton>
            </div>
            <span>
          Administratorem danych osobowych zbieranych za pośrednictwem Strony jest (tutaj należy podać imię i
          nazwisko / nazwę Sprzedawcy). Dane są lub mogą być przetwarzane w celach oraz na podstawach wskazanych
          szczegółowo w polityce prywatności (np. realizacja umowy, marketing bezpośredni). Polityka prywatności
          zawiera pełną informację na temat przetwarzania danych przez administratora wraz z prawami
          przysługującymi osobie, której dane dotyczą. Szybki kontakt z administratorem: adres email do kontaktu lub
          tel.: numer telefonu kontaktowego
            </span>
          </div>
        </Dialog>
        <ThemeProvider theme={customTheme(outerTheme)}>
          {!isSuccess ? <form className="w-full px-5" onSubmit={onSubmit}>
            <input type="text" name="dskjhf" />
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
            <div className="flex items-center">
              <input id="link-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
              <label htmlFor="link-checkbox" className="ms-2 text-sm font-medium text-gray-900">Potwierdzam, że zapoznałem się i akceptuję <a href={routes.regulamin} className="text-[#47141e] hover:underline">regulamin strony</a> internetowej oraz potwierdzam, że zapoznałem
się z <a href={routes.privacyPolicy} className="text-[#47141e] hover:underline">polityką prywatności</a> strony internetowego. <button onClick={()=> {setIsdialogOpen(true)}} className="text-[#47141e] hover:underline">Czytaj więcej</button></label>
            </div>
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