'use client'

import { useForm, Controller } from "react-hook-form";
import { useState } from "react";
import { useMutation, QueryClient, QueryClientProvider } from "@tanstack/react-query";
import axios from "axios";
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

export const ContactFormNested = () => {


  const [isSucces, setIsSucces] = useState(false);
  
  const query = async (data: IFormInput) =>{
    return axios.post(`${API_BASE_URL}blog/ofkors-form-create/`, data)
  }

  const mutation = useMutation({
    mutationFn: (data: IFormInput)=> query(data)
  })
  
  const {
    handleSubmit,
    formState: { errors },
    control
  } = useForm<IFormInput>({
    defaultValues: {
      first_name: "",
      last_name: "",
      phone_number: "",
      email: "",
      message: "",
    },
  })


  const onSubmit = async (data: IFormInput) => {
    console.log(data)
    const response = await mutation.mutateAsync(data)
    if (response.status === 201) {
      setIsSucces(true)
    }
  }

    const outerTheme = useTheme();


    return (
        <>

        <ThemeProvider theme={customTheme(outerTheme)}>
          {!isSucces ? <form className="w-full px-5" onSubmit={handleSubmit(onSubmit)}>
          <div className="w-full flex flex-col gap-y-10">
            <div className="flex flex-col gap-x-10 gap-y-10 md:flex-row justify-between w-full">
            <Controller
              name="first_name"
              control={control}
              render={({field})=> {
                return (
                  <TextField {...field} sx={{ color: '#FFFFFF'}} variant="standard" label="Imię"/>
                  )
                }}
                />
            <Controller
              name="last_name"
              control={control}
              render={({field})=> {
                return (
                  <TextField {...field} sx={{ color: '#FFFFFF'}} variant="standard" label="Nazwisko"/>
                  )
                }}
                />
            </div>
            <div className="flex flex-col gap-x-10 gap-y-10 md:flex-row justify-between w-full">
            <Controller
              name="email"
              control={control}
              render={({field})=> {
                return (
                  <TextField {...field} sx={{ color: '#FFFFFF'}} variant="standard" label="Email"/>
                )
              }}
              />
            <Controller
              name="phone_number"
              control={control}
              render={({field})=> {
                return (
                  <TextField  {...field} variant="standard" label="Numer Telefonu"/>
                  )
                }}
                />
            </div>
            <Controller
              name="message"
              control={control}
              render={({field})=> {
                return (
                  <TextField {...field} sx={{ color: '#FFFFFF'}} fullWidth variant="standard" multiline
                  label="Wiadomość"/>
                )
              }}
            />
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

export const ContactForm = () => {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <ContactFormNested />
    </QueryClientProvider>
  )
}