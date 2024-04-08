import Link from "next/link";
import PlaceIcon from '@mui/icons-material/Place';
import { Metadata } from "next";

import { OfferSearchComponent } from "@/components/searchComponent/OfferSearch";
import { getRealEstateList } from "@/clients/clients";

import { routes } from "@/config";
import { RealEstateCard } from "@/components/real_estate_card/EstateCard";

type Props = {
    params: {};
    searchParams: { 
      typObiektu?: string;
      typRynku?: string ;
      typSprzedazy?: string;
      lokalizacja?: string;
      cenaOd?: string;
      cenaDo?: string;
      powierzchniaOd?: string;
      powierzchniaDo?: string;
     };
  };

  export const metadata: Metadata = {
    title: 'Ofkors | Oferty',
    description: 'Ofkors | Oferty',
  }
  
export default async function Page(props: Props) {
    const response = await getRealEstateList(props.searchParams);

   

    return (
      <>
        <h1 className="hidden text-6xl text-medium">Nasze oferty</h1>
        <div className="mt-10"></div>
        <div className='mx-2 md:px-5 lg:mx-auto px-5 md:px-20 py-10 rounded-2xl text-white w-full lg:w-auto'>
          <OfferSearchComponent/>
        </div>
        <div className="flex flex-row flex-wrap w-full gap-x-10 gap-y-10 px-10 justify-center my-10">
          {response.map((item, index)=>{
            return (
              <RealEstateCard sold={false} item={item} key={index} index={index} />
            )
          })}
        </div>
      </>
    )
  }