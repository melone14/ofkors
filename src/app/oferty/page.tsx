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
        <h1 className="my-20 text-6xl text-medium">Nasze oferty</h1>
        <OfferSearchComponent/>
        <div className="flex flex-row flex-wrap w-full gap-x-10 gap-y-10 px-10 justify-center my-10">
          {response.map((item, index)=>{
            const dateCreated = new Date(item.dateCreated)
            return (
                <Link href={`${routes.offers}/${item.slug}`} key={index} className="rounded-lg flex flex-col shadow-xl">
                  {item.images.map((image, index)=>{
                    if (index ===1) return (
                      <img className="rounded-t-lg w-[20rem] md:w-[32rem]" key={index} src={`https://img.asariweb.pl/normal/${image.idi}`} alt="sdfgh" />
                      )
                    })}
                    <div className="p-5 w-[20rem] md:w-[32rem]">
                      <div className="flex flex-row items-center gap-x-2.5 mx-auto mb-4">
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
                      <div className="mb-4">
                        Dodano {dateCreated.getDate()}.{dateCreated.getMonth()+1}.{dateCreated.getFullYear()}
                      </div>
                      <div className="mb-4">
                        <div className="text-2xl font-bold">{parseInt(item.price.amount)} {item.price.currency}</div>
                        {/* <div>{pricePerm2.toPrecision(2)}</div> */}
                      </div>
                      <div className="mb-4">
                      {mortgageMarketSwapper(item.mortgageMarket)} / {mortgageMarketSwapper(item.mortgageMarket)}
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