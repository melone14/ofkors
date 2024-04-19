'use client'
import Link from "next/link"
import { useState, useCallback } from "react";

import { ThemeProvider, createTheme } from '@mui/material/styles';

import FormControl from '@mui/material/FormControl';
import { Button, Select, MenuItem, InputLabel, TextField } from "@mui/material";
import { routes } from "@/config";
import { styled } from '@mui/material/styles';
import { ButtonProps } from '@mui/material/Button';

const OfkorsButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    height: '56px',
    border: '1px solid',
    lineHeight: 1.5,
    'background-color': '#47141e',
    borderColor: '#47141e',
    '&:hover': {
      backgroundColor: '#ffc371',
      borderColor: '#ffc371',
      boxShadow: 'none',
    },
    '&:active': {
        boxShadow: 'none',
        backgroundColor: '#ffc371',
        borderColor: '#ffc371',
    },
  '&:focus': {
  },
  });

const theme = createTheme({
    components: {
      MuiSelect: {
        styleOverrides: {
          root: {
            color: '#ffc371',
            borderColor: '#ffc371',
            "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "#FFFFFF"
              },
            "&.Mui-focused": {
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#ffc371",
                  color: "#ffc371"
                }
              }
          },
          select : {
            color: '#FFFFFF',
          }
        },
      },
      MuiFormLabel: {
        styleOverrides : {
            root: {
                color: "#47141e",
                "&.Mui-focused": {
                      color: "#47141e"
                }
            },
        }
      },
      MuiInputBase: {
        styleOverrides: {
            root: {
                color: "#ffc371",
            }
        }
      },
      MuiOutlinedInput : {
        styleOverrides: {
            root: {
                "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#47141e"
                  },
                "&.Mui-focused": {
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#ffc371",
                      color: "#ffc371"
                    },
                  }
            }
        }
      },
      MuiMenuItem: {
        styleOverrides: {
            root: {
                backgroundColor: "#ffc371",
                color: '#FFFFFF',
                "&:focus": {
                    backgroundColor: "rgb(71, 20, 30)",
                  },
                  "&:hover": {
                    backgroundColor: "rgb(71, 20, 30)",
                  },
                  "&.Mui-selected":{
                    backgroundColor: "rgb(71, 20, 30)",
                    "&:hover": {
                        backgroundColor: "rgba(71, 20, 30)",
                    }
                  }
            }
        }
      },
      MuiList: {
        styleOverrides: {
            root: {
                paddingTop: '0px',
                paddingBottom: '0px',
            }
        }
      }
    },
  });

export const OfferSearchComponent = () => {

    const [objectType, setobjectType] = useState('');
    const [sellingType, setsellingType] = useState('');
    
    const [areaMin, setareaMin] = useState('');
    const [areaMax, setareaMax] = useState('');
    const [priceMin, setpriceMin] = useState('');
    const [priceMax, setpriceMax] = useState('');
    const [location, setlocation] = useState('');
    
    const isCorrectValue = (value: string) => {
        const isNumber = typeof parseFloat(value) === 'number' && !isNaN(parseFloat(value))

        if (/[a-zA-Z]/.test(value)) return false;
        if (value === '') return true
        if (value.includes(',') || value.includes(" ")) return false
        if (isNaN(parseFloat(value))) return false

        return isNumber
    }

    const [showFilters, setshowFilters] = useState(false);

    const isAnyUrlParam = () =>{
        let params = ``
        if (objectType) {
            params += `typObiektu=${objectType}&`
        }
        if (sellingType) {
            params += `typSprzedazy=${sellingType}&`
        }
        if (priceMax) {
            params += `cenaDo=${priceMax}&`
        }
        if (priceMin) {
            params += `cenaOd=${priceMin}&`
        }
        if (areaMax) {
            params += `powierzchniaDo=${areaMax}&`
        }
        if (areaMin) {
            params += `powierzchniaOd=${areaMin}&`
        }
        if (location) {
            params += `lokalizacja=${location}&`
        }

        return params
    }

    const urlValue = `${routes.offers}?${isAnyUrlParam()}`

    return (
        <ThemeProvider theme={theme}>
    <div className="mx-auto md:mx-3 max-w-7xl rounded-lg lg:mx-auto z-10">
        <div className="w-full flex flex-col gap-y-5">
            <div className="flex flex-col md:flex-row w-full justify-between items-center gap-x-5 gap-y-5">
            <div className="flex flex-col md:flex-row w-full justify-between items-center gap-x-5 max-w-4xl gap-y-5">
                <FormControl  className="w-full lg:w-48">
                    <InputLabel id="objectType">Rodzaj obiektu</InputLabel>
                    <Select
                        labelId="objectType"
                        id="objectType"
                        value={objectType}
                        label="Rodzaj obiektu"
                        onChange={(event: any)=> {
                            setobjectType(event.target.value)
                        }}
                    >
                        <MenuItem value={'wszystko'}>Wszystko</MenuItem>
                        <MenuItem value={'mieszkanie'}>Mieszkanie</MenuItem>
                        <MenuItem value={'dom'}>Dom</MenuItem>
                        <MenuItem value={'dzialka'}>Działka</MenuItem>
                        <MenuItem value={'lokal'}>Lokal</MenuItem>
                        <MenuItem value={'obiekt'}>Obiekt</MenuItem>
                    </Select>
                </FormControl>
                <FormControl  className="w-full lg:w-48">
                    <InputLabel id="sellingType">Rodzaj transkacji</InputLabel>
                    <Select
                    labelId="sellingType"
                    id="sellingType"
                    value={sellingType}
                    label="Rodzaj transkacji"
                    onChange={(event: any)=> {
                        setsellingType(event.target.value)
                    }}
                    >
                        <MenuItem value={'wszystko'}>Wszystko</MenuItem>
                        <MenuItem value={'sprzedaz'}>Sprzedaż</MenuItem>
                        <MenuItem value={'wynajem'}>Wynajem</MenuItem>
                    </Select>
                </FormControl>
                <div className="w-full lg:w-64">
                <TextField 
                        fullWidth id="location-input" 
                        label="Miejscowośc lub dzielnica" 
                        variant="outlined"
                        value={location}
                        onChange={(event)=>{
                            setlocation(event.target.value)
                        }}>
                    </TextField>
                </div>
                </div>
                <OfkorsButton 
                    className="px-5 w-full md:w-auto bg-[#47141e]" 
                    variant="contained"
                    onClick={()=>{
                        setshowFilters((state)=>!state)
                    }}>Filtry</OfkorsButton>
                <Link className="w-full md:w-auto" href={urlValue}>
                    <OfkorsButton className="px-5 w-full md:w-auto bg-[#47141e]" variant="contained">Szukaj</OfkorsButton>
                </Link>
            </div>
            {showFilters ? 
            <div className="flex flex-col md:flex-row w-full justify-between items-center gap-x-5 gap-y-5 max-w-4xl">
                <TextField 
                    value={priceMin}
                    onChange={(event)=>{
                        if(isCorrectValue(event.target.value)) {
                        setpriceMin(event.target.value)
                    }}} 
                    fullWidth 
                    id="outlined-basic" 
                    label="Cena od" 
                    variant="outlined">
                </TextField>
                <TextField 
                    value={priceMax}
                    onChange={(event)=>{
                        
                        if(isCorrectValue(event.target.value)) {setpriceMax(event.target.value)}
                        }}
                    fullWidth 
                    id="outlined-basic" 
                    label="Cena do" 
                    variant="outlined">
                </TextField>
                <TextField 
                    value={areaMin}
                    onChange={(event)=>{
                        if(isCorrectValue(event.target.value)) {setareaMin(event.target.value)}
                        }}
                        fullWidth 
                    id="outlined-basic" 
                    label="Powierzchnia od" 
                    variant="outlined">
                </TextField>
                <TextField 
                    value={areaMax}
                    onChange={(event)=>{
                        if(isCorrectValue(event.target.value)) {setareaMax(event.target.value)}
                        }} 
                    fullWidth 
                    id="outlined-basic" 
                    label="Powierzchnia do" 
                    variant="outlined">
                </TextField>
            </div> 
            : null}
        </div>
    </div>
    </ThemeProvider>
    )
}