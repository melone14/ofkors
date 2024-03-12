import { API_BASE_URL } from "@/config"

import {  BlogPostsList, BlogPostDetail, RealEstateObject, AgenList, AgenDetail, SerachParams } from "./types"


export const getBlogPostsList = async (): Promise<BlogPostsList> => { //TO DO
  const response = await fetch(`${API_BASE_URL}blog/article/`)

  if (!response.ok) {
      throw new Error('Failed to fetch data')
    }
    
  return response.json()
}

export const getBlogPostDetail = async (slug: string): Promise<BlogPostDetail> => {

  const response = await fetch(`${API_BASE_URL}blog/article/${slug}/`)

  if (!response.ok) {
      throw new Error('Failed to fetch data')
    }

  return response.json()
}

export const getBlogPostsCategoryList = async (slug: string): Promise<BlogPostsList> => { 
  const response = await fetch(`${API_BASE_URL}blog/category/${slug}/`)

  if (!response.ok) {
      throw new Error('Failed to fetch data')
    }
    
  return response.json()
}


export const getRealEstateList = async (props: SerachParams): Promise<RealEstateObject[]> => { 

  console.log(props)

  const transactionType = props?.typSprzedazy === 'wszystko' ? null : props?.typSprzedazy;
  const objectType = props?.typObiektu === 'wszystko' ? null : props?.typObiektu;
  const rynekType = props?.typRynku === 'wszystko' ? null : props?.typRynku;

  let objectTypeEn 

  if (objectType === null) {

  } else if (objectType === 'mieszkanie') {
    objectTypeEn = 'apartment'
  } else if (objectType === 'dom') {
    objectTypeEn = 'house'
  } else if (objectType === 'dzialka') {
    objectTypeEn = 'lot'
  } else if (objectType === 'lokal') {
    objectTypeEn = 'office'
  } else if (objectType === 'obiekt') {
    objectTypeEn = 'object'
  }


  const location = props?.lokalizacja === '' ? null : props?.lokalizacja;
  const priceMax = props?.cenaDo === '' ? null : props?.cenaDo;
  const priceMin = props?.cenaOd === '' ? null : props?.cenaOd;
  const areaMax = props?.powierzchniaDo === '' ? null : props?.powierzchniaDo;
  const areaMin = props?.powierzchniaOd === '' ? null : props?.powierzchniaOd;

  let params = new URLSearchParams();

  if (priceMax) { params.append('maxPrice', priceMax) }
  if (priceMin) { params.append('minPrice', priceMin) }
  if (areaMax) { params.append('areaMax', areaMax) }
  if (areaMin) { params.append('areaMin', areaMin) }
  if (location) { params.append('location', location) }
  if (rynekType) { params.append('rynekType', rynekType === 'pierwotny' ? 'Primary' : 'Secondary') }
  if (transactionType) { params.append('transactionType', transactionType === 'sprzedaz' ? 'sell' : 'rent') }
  if (objectType) { params.append('objectType', objectTypeEn!) }
  console.log(params.toString())


  const response = await fetch(`${API_BASE_URL}real_estate/offer_list/?${params.toString()}`, {next : { revalidate: 0 }})

  if (!response.ok) {
      throw new Error('Failed to fetch data')
    }
    
  return response.json()
}

export const getRealEstateDetail = async (slug: string): Promise<RealEstateObject> => { 
  const response = await fetch(`${API_BASE_URL}real_estate/offer_detail/${slug}/`)

  if (!response.ok) {
      throw new Error('Failed to fetch data')
    }
    
  return response.json()
}


export const getRealEstateAgentsList = async (): Promise<AgenList> => { 
  const response = await fetch(`${API_BASE_URL}blog/agent/`)

  if (!response.ok) {
      throw new Error('Failed to fetch data')
    }
    
  return response.json()
}

export const getRealEstateAgentsDetail = async (slug: string): Promise<AgenDetail> => { 
  const response = await fetch(`${API_BASE_URL}blog/agent/${slug}/`)

  if (!response.ok) {
      throw new Error('Failed to fetch data')
    }
    
  return response.json()
}