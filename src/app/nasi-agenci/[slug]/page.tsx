
import { getRealEstateAgentsDetail } from "@/clients/clients"
import { mortgageMarketSwapper } from "@/utils/realEstate";
import { routes } from "@/config";

import { Email, Phone, Place } from "@mui/icons-material";
import Link from "next/link";

import { SocialIconComponent } from "@/components/socialIcon/SocialIcon";
import { AgentTestimonialComponent } from "@/components/testimonial/AgentTestimonial";

import { RealEstateCard } from "@/components/real_estate_card/EstateCard";

export const revalidate = 3600

export default async function Page ({ params }: { params: { slug: string } }) {
    const response = await getRealEstateAgentsDetail(params.slug);
    const agent = response.agent;


    return (
        <>
        <div className="flex flex-col md:flex-row gap-x-10 items-center my-10 px-5 lg:px-0">
            <div className="flex flex-col items-center text-white bg-[#47141e] p-5 rounded-2xl mb-10 md:mb-0 shadow-xl">
                <img className="w-80 rounded-xl" src={agent?.full_img || undefined} alt={agent.name}/>
                <h1 className="text-2xl font-bold my-5">{response.agent.name}</h1>
                <h2 className="text-2xl mb-5">{response.agent.bio}</h2>
                <div className="text-xl mb-5 flex flex-row items-center"><Phone className="mr-2.5"/>
                <Link href={`tel:+48${response.agent.phone!.replace(/ /g, "")}`}>
                +48 {response.agent.phone}
                </Link></div>
                <div className="text-xl flex flex-row items-center mb-5"><Email className="mr-2.5"/>
                <Link href={`mailto:${response.agent.email}`}>
                {response.agent.email}
                </Link></div>
                <div className="w-full flex flex-row gap-x-5 justify-center">{agent.urls.map((item, index)=>{
                  return (
                    <SocialIconComponent key={index} item={item}/>
                  )
                })}</div>
            </div>
            <div>
                <h3 className="text-3xl lg:text-4xl mb-10">O mnie</h3>
                <div className="w-full lg:w-[40rem] md:text-xl" dangerouslySetInnerHTML={{__html: agent.content}}></div>
            </div>
        </div>
        {response.offers.length !== 0 ? <div className="w-full flex flex-col items-center">
            <h2 className="text-3xl font-bold my-10">Moje oferty</h2>
            <div className="flex flex-col md:flex-row flex-wrap w-full gap-x-10 gap-y-10 px-10 justify-center mb-10">
            {response.offers.map((item, index)=>{
            return (
                <RealEstateCard sold={false} index={index} key={index} item={item} />
            )
          })}
        </div>
        </div> : null}
        {response.sold_offers.length !== 0 ? <div className="w-full flex flex-col items-center">
            <h2 className="text-3xl font-bold my-10">Zrealizowane oferty</h2>
            <div className="flex flex-col md:flex-row flex-wrap w-full gap-x-10 gap-y-10 px-10 justify-center mb-10">
            {response.sold_offers.map((item, index)=>{
            return (
              <RealEstateCard sold={true} index={index} key={index} item={item} />
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