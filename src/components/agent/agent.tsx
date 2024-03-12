import React, { FC } from "react"
import Image from "next/image"
import Link from "next/link";
import { Email, Phone } from "@mui/icons-material";
import { Agent } from "@/clients/types"
import { routes } from "@/config";

import { SocialIconComponent } from "../socialIcon/SocialIcon";

type Props = {
    agent: Agent,
    isOffer?: boolean
}


export const AgentComponent:FC<Props> = ({agent, isOffer}) => {
    return (
        <>
            <Link className="w-80 lg:w-96 py-10 text-white rounded-2xl bg-[#47141e]
            flex flex-col items-center " href={`${routes.agents}/${agent.slug}`}>
            {isOffer ? <div className="text-3xl mb-5">Opiekun Oferty</div> : null}
                <img className="h-52 w-52 rounded-full mb-5" src={agent?.img || ''} alt={agent?.name}/>
            <div className="text-3xl mb-5">
                {agent?.name}
            </div>
            <div className="text-2xl mb-5">
            {agent?.bio}
            </div>
            <div className="flex flex-row gap-x-5 items-center mb-5">
                <Phone/>
                <div>
                    +48 {agent?.phone}
                </div>
            </div>
            <div className="flex flex-row gap-x-5 items-center mb-5">
                <Email/>
                <div>
                    {agent?.email}
                </div>
            </div>
            <div className="w-full flex flex-row gap-x-5 justify-center">{agent.urls.map((item, index)=>{
                return (
                    <SocialIconComponent key={index} item={item}/>
                    )
                })}</div>
        </Link>
        </>
    )
}