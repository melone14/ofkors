
import { getRealEstateAgentsDetail } from "@/clients/clients"
import { mortgageMarketSwapper } from "@/utils/realEstate";
import { routes } from "@/config";

import { Email, Phone, Place } from "@mui/icons-material";
import Link from "next/link";

import { SocialIconComponent } from "@/components/socialIcon/SocialIcon";
import { AgentTestimonialComponent } from "@/components/testimonial/AgentTestimonial";


export const revalidate = 3600

export default async function Page ({ params }: { params: { slug: string } }) {
    const response = await getRealEstateAgentsDetail(params.slug);
    const agent = response.agent;


    return (
        <>
        <div className="flex flex-col md:flex-row gap-x-10 items-center my-10 px-5 lg:px-0">
            <div className="flex flex-col items-center text-white bg-[#47141e] p-5 rounded-2xl mb-10 md:mb-0 shadow-xl">
                <img className="w-80 rounded-xl" src={agent?.full_img} alt={agent.name}/>
                <h1 className="text-2xl font-bold my-5">{response.agent.name}</h1>
                <h2 className="text-2xl mb-5">{response.agent.bio}</h2>
                <div className="text-xl mb-5 flex flex-row items-center"><Phone className="mr-2.5"/> +48 {response.agent.phone}</div>
                <div className="text-xl flex flex-row items-center mb-5"><Email className="mr-2.5"/>{response.agent.email}</div>
                <div className="w-full flex flex-row gap-x-5 justify-center">{agent.urls.map((item, index)=>{
                  return (
                    <SocialIconComponent key={index} item={item}/>
                  )
                })}</div>
            </div>
            <div>
                <h3 className="text-3xl lg:text-4xl mb-10">O mnie</h3>
                <div className="w-full lg:w-[50rem] text-xl lg:text-2xl" dangerouslySetInnerHTML={{__html: agent.content}}></div>
            </div>
        </div>
        {response.offers.length !== 0 ? <div className="w-full flex flex-col items-center">
            <h2 className="text-3xl font-bold my-10">Moje oferty</h2>
            <div className="flex flex-col md:flex-row flex-wrap w-full gap-x-10 gap-y-10 px-10 justify-center mb-10">
            {response.offers.map((item, index)=>{
            const dateCreated = new Date(item.dateCreated)
            return (
                <Link href={`${routes.offers}/${item.slug}`} key={index} className="rounded-lg flex flex-col shadow-xl">
                  {item.images.map((image, index)=>{
                    if (index ===1) return (
                      <img className="rounded-t-lg w-[32rem]" key={index} src={`https://img.asariweb.pl/normal/${image.idi}`} alt={item.headerAdvertisement} />
                      )
                    })}
                    <div className="p-5 w-[20rem] md:w-[32rem]">
                      <div className="flex flex-row items-center gap-x-2.5 mx-auto mb-4">
                        <Place/>
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
        </div> : null}
        {response.sold_offers.length !== 0 ? <div className="w-full flex flex-col items-center">
            <h2 className="text-3xl font-bold my-10">Zrealizowane oferty</h2>
            <div className="flex flex-col md:flex-row flex-wrap w-full gap-x-10 gap-y-10 px-10 justify-center mb-10">
            {response.sold_offers.map((item, index)=>{
            const dateCreated = new Date(item.dateCreated)
            return (
                <Link href={`${routes.offers}/${item.slug}`} key={index} className="rounded-lg flex flex-col shadow-xl">
                  {item.images.map((image, index)=>{
                    if (index ===1) return (
                      <img className="rounded-t-lg w-[32rem]" key={index} src={`https://img.asariweb.pl/normal/${image.idi}`} alt={item.headerAdvertisement} />
                      )
                    })}
                    <div className="p-5 w-[20rem] md:w-[32rem]">
                      <div className="flex flex-row items-center gap-x-2.5 mx-auto mb-4">
                        <Place/>
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
        </div> : null}
        {agent.opinion ?
        <>
        <h3 className="text-3xl font-bold my-10">Opinie Agenta</h3>
        <div className="w-full">
          <AgentTestimonialComponent data={agent.opinion} />
        </div>
        </>
        : null
        }
        </>
    )
}