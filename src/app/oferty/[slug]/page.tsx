import { Metadata } from "next";
import { getRealEstateDetail } from "@/clients/clients"

import { AgentComponent } from "@/components/agent/agent";

import { mortgageMarketSwapper, furnishedTypeSwapper, conditionSwapper, 
    materialSwapper, buildingTypeSwapper, availableNeighborhoodListSwapper,
    communicationListSwapper, heatingTypeListSwapper, hotWaterListSwapper,
    objectTypeSwapper, windowTypeListSwapper, spaceFloorListSwapper, kitchenEquipmentSwapper,
    waterTypeListSwapper, sewerageTypeListSwapper, electricityStatusSwapper, gasStatusSwapper } from "@/utils/realEstate";

import { PhotoComponent } from "@/components/Photos/Photos";
import { ScrollComponent } from "@/components/scrollComponent/ScrollComponent";

import CropIcon from '@mui/icons-material/Crop';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import CropFreeIcon from '@mui/icons-material/CropFree';
import StairsIcon from '@mui/icons-material/Stairs';
import SellIcon from '@mui/icons-material/Sell';
import { BiArea } from "react-icons/bi";

const RowComponent = ({ label, data }: { label:string, data:string | number | undefined}) =>{

    if (!data) {
        return null
    }

    return (
        <div className="w-full flex flex-row">
            <div className="w-1/2 text-base">{label}:</div>
            <div className="w-1/2 text-base" dangerouslySetInnerHTML={{ __html: data}}></div>
        </div>
    )
}


export async function generateMetadata(
    { params }: { params: { slug: string } }
  ): Promise<Metadata> {
    // read route params
   
    // fetch data
    const response = await getRealEstateDetail(params.slug);
   
   
    return {
      title: `${response.headerAdvertisement} | Ofkors Oferty`,
    }
  }

export default async function Page({ params }: { params: { slug: string } }) {

    //const descriptionRef = useRef(null)

    const response = await getRealEstateDetail(params.slug);


    return (
        <>
            <div className="container mx-auto px-2 md:px-10 my-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    <div className="col-span-1 lg:col-span-8">
                        <div className="w-full shadow-2xl rounded-2xl">
                            <PhotoComponent images={response.images} title={response.headerAdvertisement}/>
                            <div className="px-10 pb-10">
                                <h1 className="text-3xl font-bold mb-14">{response.headerAdvertisement}</h1>
                                {(response.totalArea || response.noOfRooms || (response.totalArea || response.lotArea) || response.floorNo) && <div className="w-full flex flex-row flex-wrap items-center justify-center mb-14 gap-5 md:gap-x-16">
                                    {(response.objectType) ?
                                            <div className="flex flex-col gap-y-2.5 items-center justify-center w-32 h-32">
                                            <SellIcon sx={{ color:"#47141e", fontSize:'3rem'}}/>
                                            <div>Cena</div>
                                            <div className="text-lg font-semibold">{Math.round(parseFloat(response.price.amount))} {response.price.currency}</div>
                                        </div> 
                                    : null}
                                    {response.totalArea ?
                                        <div className="flex flex-col gap-y-2.5 items-center justify-center w-32 h-32">
                                            <CropFreeIcon sx={{ color:"#47141e", fontSize:'3rem'}}/>
                                            <div>Powierzchnia</div>
                                            <div className="text-lg font-semibold">{response.totalArea}m<sup>2</sup></div>
                                        </div>
                                    : null}
                                    {(response.totalArea || response.lotArea) ?
                                         <div className="flex flex-col gap-y-2.5 items-center justify-center w-32 h-32">
                                            <CropIcon style={{ color:"#47141e", fontSize:'3rem'}}/>
                                            <div>Cena za m<sup>2</sup></div>
                                            <div className="text-lg font-semibold">{Math.round(parseFloat(response.price.amount)/((response.totalArea ? response.totalArea : response.lotArea) || 0))} {response.price.currency}</div>
                                        </div> 
                                    : null}
                                    {(response.objectType === 'lot') ?
                                         <div className="flex flex-col gap-y-2.5 items-center justify-center w-32 h-32">
                                            <BiArea style={{ color:"#47141e", fontSize:'3rem'}}/>
                                            <div>Powierzchnia</div>
                                            <div className="text-lg font-semibold">{Math.round(((response.totalArea ? response.totalArea : response.lotArea) || 0))} m<sup>2</sup></div>
                                        </div> 
                                    : null}
                                    {response.noOfRooms ?
                                        <div className="flex flex-col gap-y-2.5 items-center justify-center w-32 h-32">
                                            <MeetingRoomIcon sx={{ color:"#47141e", fontSize:'3rem'}}/>
                                            <div>Liczba pokoi</div>
                                            <div className="text-lg font-semibold">{parseInt(response.noOfRooms)}</div>
                                        </div> : null}
                                </div>}
                                <ScrollComponent />
                                <h3 id="description" className="text-3xl font-bold mb-14">Opis</h3>
                                <p className="mb-14" dangerouslySetInnerHTML={{ __html: response.description }}></p>
                                <h3 id="information"  className="text-3xl font-bold mb-14">Szczegóły</h3>
                                <h4 className="text-2xl font-bold mb-14">Informacje podstawowe</h4>
                                <div className="flex flex-col w-full items-start text-xl gap-y-2.5">
                                    <RowComponent label={"Rynek"} data={mortgageMarketSwapper(response.mortgageMarket)}/>
                                    <RowComponent label={"Cena"} data={`${parseInt(response.price.amount)} ${response.price.currency}`}/>
                                    <RowComponent label={"Powierzchnia"} data={`${response.totalArea ? response.totalArea : response.lotArea} m<sup>2</sup>`}/>
                                    <RowComponent label={"Liczba pokoi"} data={parseInt(response.noOfRooms)}/>
                                    <RowComponent label={"Piętro"} data={parseInt(response.floorNo)}/>
                                    <RowComponent label={"Rodzaj nieruchomości"} data={objectTypeSwapper(response.objectType)}/>
                                    <RowComponent label={"Stan nieruchomości"} data={conditionSwapper(response.condition)}/>
                                    <RowComponent label={"Umeblowanie"} data={furnishedTypeSwapper(response.furnishedType)}/>
                                </div>
                                {(response.yearBuilt || response.buildingType || response.material || response.noOfFloors) && <>
                                    <h4 className="text-2xl font-bold my-14">Opis budynku</h4>
                                    <div className="flex flex-col w-full items-start text-xl  gap-y-2.5">
                                        <RowComponent label={"Rodzaj budynku"} data={buildingTypeSwapper(response.buildingType)}/>
                                        <RowComponent label={"Rok budowy"} data={`${response.yearBuilt ? parseInt(response.yearBuilt) : ''}`}/>
                                        <RowComponent label={"Materiał"} data={materialSwapper(response.material)}/>
                                        <RowComponent label={"Liczba pięter"} data={parseInt(response.noOfFloors)}/>
                                    </div>
                                </>
                                }
                                <h4 className="text-2xl font-bold my-14">Informacje dodatkowe</h4>
                                <div className="flex flex-col w-full items-start text-xl gap-y-2.5">
                                    <RowComponent label={"Ciepła woda"} data={`${response.hotWaterList.map(item =>{
                                        if (hotWaterListSwapper(item) === undefined) {
                                            return '';
                                        }
                                        return ' ' + hotWaterListSwapper(item)
                                    })}`}/>
                                    <RowComponent label={"Rodzaj ogrzewania"} data={`${response.heatingTypeList.map(item =>{
                                        if (heatingTypeListSwapper(item) === undefined) {
                                            return '';
                                        }
                                        return ' ' + heatingTypeListSwapper(item)
                                    })}`}/>
                                    <RowComponent label={"Typ okien"} data={`${response.windowTypeList.map(item =>{
                                        if (windowTypeListSwapper(item) === undefined) {
                                            return '';
                                        }
                                        return ' ' + windowTypeListSwapper(item)
                                    })}`}/>
                                    <RowComponent label={"Rodzaje podłogi"} data={`${response.spaceFloorList.map(item=>{
                                        if (spaceFloorListSwapper(item) === undefined) {
                                            return '';
                                        }
                                        return ' ' + spaceFloorListSwapper(item) 
                                    })}`
                                    }/>
                                    <RowComponent label={"Wyposażenie kuchni"} data={`${response.kitchenEquipment.map(item =>{
                                        if (kitchenEquipmentSwapper(item) === undefined) {
                                            return '';
                                        }
                                        return ' ' + kitchenEquipmentSwapper(item)
                                    })}`}/>
                                    <RowComponent label={"Liczba łazienek"} data={parseInt(response.noOfBathrooms)}/>
                                    <RowComponent label={"Podłączenie Wodne"} data={`${response.waterTypeList.map(item => {
                                        if (waterTypeListSwapper(item) === undefined) {
                                            return '';
                                        }
                                        return ' ' + waterTypeListSwapper(item)
                                    })}`}/>
                                    <RowComponent label={"Podłączenie Gazowe"} data={gasStatusSwapper(response.gasStatus)}/>
                                    <RowComponent label={"Podłączenie Elektryczne"} data={electricityStatusSwapper(response.electricityStatus)}/>
                                    <RowComponent label={"Podłączenie Kanalizacyjne"} data={`${response.sewerageTypeList.map(item => {
                                        if (sewerageTypeListSwapper(item) === undefined) {
                                            return '';
                                        }
                                        return ' ' + sewerageTypeListSwapper(item)
                                    })}`}/>
                                    <RowComponent label={"Adres"} data={`${response.location.province ? response.location.province + ', ' : ''}
                                    ${response.location.locality ? response.location.locality + ', ' : ''}
                                    ${response.location.quarter ? response.location.quarter + ', ' : ''}
                                    ${response.location.fullName ? response.location.fullName : ''}`}/>
                                    <RowComponent label={"Komunikacja"} data={`${response.communicationList.map(item =>{
                                        if (communicationListSwapper(item) === undefined) {
                                            return '';
                                        }
                                        return ' ' + communicationListSwapper(item)
                                    })}`}/>
                                    <RowComponent label={"W pobliżu"} data={`${response.availableNeighborhoodList.map(item=>{
                                        if (availableNeighborhoodListSwapper(item) === undefined) {
                                            return '';
                                        }
                                        return ' ' + availableNeighborhoodListSwapper(item) 
                                    })}`}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1 lg:col-span-4">
                        <div className="relative lg:sticky top-8 flex flex-col items-center mb-10 md:mb-0">
                            {response.agent ?
                                <AgentComponent agent={response.agent!} isOffer={true} />
                                : null
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}