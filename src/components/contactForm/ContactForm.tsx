'use client'

import { useState } from "react";
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


  const [isSucces, setIsSucces] = useState(false);

  const [first_name, setfirst_name] = useState('');
  const [last_name, setlast_name] = useState('');
  const [email, setemail] = useState('');
  const [phone_number, setphone_number] = useState('');
  const [message, setmessage] = useState('');
  
  const query = async (data: IFormInput) =>{
    return fetch(`${API_BASE_URL}blog/ofkors-form-create/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
  }


  const onSubmit = async (data: IFormInput) => {
    const response = await query(data)
    if (response.status === 201) {
      setIsSucces(true)
    }
  }

    const outerTheme = useTheme();


    return (
        <>

        <ThemeProvider theme={customTheme(outerTheme)}>
          {!isSucces ? <form className="w-full px-5" onSubmit={async ()=> {
            await onSubmit(
              {first_name: first_name,
              last_name: last_name,
              phone_number: phone_number,
              email: email,
              message:message}
            )
          }}>
          <div className="w-full flex flex-col gap-y-10">
            <div className="flex flex-col gap-x-10 gap-y-10 md:flex-row justify-between w-full">
                <TextField value={first_name} onChange={(event)=> {
                  setfirst_name(event.target.value)
                }} sx={{ color: '#FFFFFF'}} variant="standard" label="Imię"/>
                <TextField value={last_name} onChange={(event)=> {
                  setlast_name(event.target.value)
                }} sx={{ color: '#FFFFFF'}} variant="standard" label="Nazwisko"/>
            </div>
            <div className="flex flex-col gap-x-10 gap-y-10 md:flex-row justify-between w-full">
                <TextField value={email} onChange={(event)=> {
                  setemail(event.target.value)
                }} sx={{ color: '#FFFFFF'}} variant="standard" label="Email"/>
                <TextField value={phone_number} onChange={(event)=> {
                  setphone_number(event.target.value)
                }} variant="standard" label="Numer Telefonu"/>
            </div>
                <TextField value={message} onChange={(event)=> {
                  setmessage(event.target.value)
                }} sx={{ color: '#FFFFFF'}} fullWidth variant="standard" multiline
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