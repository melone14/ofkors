import PlaceIcon from '@mui/icons-material/Place';
import Link from "next/link";
import { routes } from "@/config";

import { RealEstateObject } from '@/clients/types';


export const RealEstateCard = ({ index, item, sold }: { index: number; item: RealEstateObject, sold: boolean}) => {
    const mainImage:{
          id: number;
          idi:number;
          alt:string;
          main: boolean;
      } = item.images.find(image => image.main === true) || item.images[0]
        const dateCreated = new Date(item.dateCreated)
    return (
        <>
                <Link href={`${routes.offers}/${item.slug}`} key={index} className="rounded-lg transition ease-in-out hover:shadow-2xl 
                flex flex-col shadow-xl w-[20rem] md:w-[32rem]">
                    <div className='relative rounded-t-lg w-full h-[300px]'>
                        {sold && <div className='absolute top-4 right-4 p-3 bg-[#47141e] text-white rounded-xl'>Sprzedane</div>}
                        <img className="rounded-t-lg w-full h-[300px] object-cover" src={`https://img.asariweb.pl/normal/${mainImage.idi}`} alt={item.headerAdvertisement} />
                    </div>
                    <div className="p-5 w-full h-full flex flex-col items-start gap-5">
                      <div className="text-2xl flex flex-row flex-wrap font-bold">
                        {item.headerAdvertisement}
                      </div>
                      <div>
                        <div className="text-2xl font-bold">{parseInt(item.price.amount)} {item.price.currency}</div>
                        {/* <div>{pricePerm2.toPrecision(2)}</div> */}
                      </div>
                      {(item.totalArea || item.noOfRooms || item.floorNo) && <div>
                        {item.totalArea}m<sup>2</sup> / {parseInt(item.noOfRooms)} {(parseInt(item.noOfRooms)===1) ? 'Pokój' :
                        ((parseInt(item.noOfRooms)<=4) ? 'Pokoje' : "Pokoi")} / {parseInt(item.floorNo)} Piętro
                      </div>}
                      <div className="flex flex-row items-center gap-x-2.5">
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
                    </div>
                  </Link>
        </>
    )
}