'use client'
import Link from "next/link"
import { useState, useCallback } from "react";

import { ThemeProvider, createTheme } from '@mui/material/styles';

import FormControl from '@mui/material/FormControl';
import { Button, Select, MenuItem, InputLabel, TextField } from "@mui/material";
import { routes } from "@/config";
import { Value } from "sass";

const theme = createTheme({
    components: {
      MuiSelect: {
        styleOverrides: {
          root: {
            color: '#FFFFFF',
            borderColor: '#47141e',
            "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "#47141e"
              },
            "&.Mui-focused": {
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#ff5f6d",
                  color: "#ff5f6d"
                },
              }
          },
          select : {
            color: '#47141e',
          }
        },
      },
      MuiFormLabel: {
        styleOverrides : {
            root: {
                color: "#47141e",
                "&.Mui-focused": {
                      color: "#ff5f6d"
                }
            },
        }
      },
      MuiInputBase: {
        styleOverrides: {
            root: {
                color: "#47141e",
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
                      borderColor: "#ff5f6d",
                      color: "#ff5f6d"
                    },
                  }
            }
        }
      }
    },
  });

export const OfferSearchComponent = () => {

    const [objectType, setobjectType] = useState('mieszkanie');
    const [rentingType, setRentingType] = useState('pierwotny');
    const [sellingType, setsellingType] = useState('sprzedaz');
    
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
        let params = `typObiektu=${objectType}&typRynku=${rentingType}&typSprzedazy=${sellingType}`
        if (priceMax) {
            params += `&cenaDo=${priceMax}`
        }
        if (priceMin) {
            params += `&cenaOd=${priceMin}`
        }
        if (areaMax) {
            params += `&powierzchniaDo=${areaMax}`
        }
        if (areaMin) {
            params += `&powierzchniaOd=${areaMin}`
        }
        if (location) {
            params += `&lokalizacja=${location}`
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
                <FormControl fullWidth>
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
                <FormControl fullWidth>
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
                <Button 
                    className="px-5 w-full md:w-auto" 
                    style={{ backgroundColor:"#ff5f6d", height:'56px' }} 
                    variant="contained"
                    onClick={()=>{
                        setshowFilters((state)=>!state)
                    }}>Filtry</Button>
                <Link className="w-full md:w-auto" href={urlValue}>
                    <Button className="px-5 w-full md:w-auto" style={{ backgroundColor:"#ff5f6d", height:'56px' }} variant="contained">Szukaj</Button>
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