import Link from "next/link";
import PlaceIcon from '@mui/icons-material/Place';
import { Metadata } from "next";

import { OfferSearchComponent } from "@/components/searchComponent/OfferSearch";
import { getRealEstateList } from "@/clients/clients";

import { routes } from "@/config";

import { mortgageMarketSwapper } from "@/utils/realEstate";

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
            const mainImage:{
              id: number;
              idi:number;
              alt:string;
              main: boolean;
          } = item.images.find(image => image.main === true) || item.images[0]
            const dateCreated = new Date(item.dateCreated)
            return (
                <Link href={`${routes.offers}/${item.slug}`} key={index} className="rounded-lg transition ease-in-out hover:shadow-2xl 
                flex flex-col shadow-xl w-[20rem] md:w-[32rem]">
                    <img className="rounded-t-lg w-full"  src={`https://img.asariweb.pl/normal/${mainImage.idi}`} alt={item.headerAdvertisement} />
                    <div className="p-5 w-full">
                      <div className="flex flex-row items-center gap-x-2.5 mx-auto mb-8">
                        <PlaceIcon/>
                        <div className="flex flex-row items-center flex-wrap gap-x-2.5">
                          <div>
                            {item.location.province},
                          </div>
                          {item.location.quarter ? <div>
                            {item.location.quarter},
                          </div> : null}
                          {item.location.locality ? <div>
                            {item.location.locality},
                          </div> : null}
                          <div>
                            {item.location.fullName}
                          </div>
                        </div>
                      </div>
                      <div className="mb-8">
                        <div className="text-2xl font-bold">{parseInt(item.price.amount)} {item.price.currency}</div>
                        {/* <div>{pricePerm2.toPrecision(2)}</div> */}
                      </div>
                      <div className="mb-4">
                        {item.totalArea}m<sup>2</sup> / {parseInt(item.noOfRooms)} {(parseInt(item.noOfRooms)===1) ? 'Pokój' :
                        ((parseInt(item.noOfRooms)<=4) ? 'Pokoje' : "Pokoi")} / {parseInt(item.floorNo)} Piętro
                      </div>
                      <div className="text-2xl flex flex-row flex-wrap font-bold">
                        {item.headerAdvertisement}
                      </div>
                    </div>
                  </Link>
            )
          })}
        </div>
      </>
    )
  }