import Image from "next/image"
import { Metadata } from "next";
import Agents from '@/images/oNas/Ofkors - ph - anojszewska 11.jpg'

import { AgentComponent } from "@/components/agent/agent";

import { getRealEstateAgentsList } from "@/clients/clients";


import "./styles.css"

export const metadata: Metadata = {
  title: 'Ofkors | O Nas',
  description: 'Ofkors | O Nas',
}

export default async function Page() {

    const response = await getRealEstateAgentsList();

    return (
        <>
        <div className="px-5 lg:px-0 text-4xl font-bold gradient-text md:my-20 text-center">Ofkors Nieruchomości</div>
        <div className="md:my-20 text-6xl text-medium hidden">O Nas</div>
        <div className="flex w-full px-10 flex-col lg:flex-row items-center p-5 lg:px-10 justify-center gap-10 mb-10">
            <Image className="w-full lg:w-1/3 rounded-xl shadow-xl" src={Agents} alt="Agenci Nieruchomości" />
            <div  className="w-full lg:w-1/3  text-justify">
              <div className="text-justify mb-5 text-xl">Ofkors Nieruchomości to pasjonaci, którzy połączyli swoje  wieloletnie doświadczenie, wiedzę i energię, aby stworzyć wyjątkowe miejsce na rynku nieruchomości. Nasza otwartość, zaangażowanie i łatwość nawiązywania relacji sprawiają, że budujemy trwałe więzi zarówno z klientami, jak i partnerami biznesowymi. W Ofkors wierzymy, że sukces opiera się nie tylko na umiejętnościach zawodowych, ale także na etyce pracy i indywidualnemu podejściu do każdego klienta. </div>
              <div className="mx-auto text-xl">
                Przekonaj się, co możemy zrobić dla Ciebie.
              </div>
            </div>
        </div>
        <div className="my-20 text-4xl text-medium font-bold text-[#ff5f6d]">Poznaj Nas</div>
        <div className="w-full flex flex-row flex-wrap items-center justify-center gap-x-5 gap-y-5 mb-10">
          {response.map((item, index)=>{
            return (
              <AgentComponent key={index} agent={item}/>
            )
          })}
        </div>
        </>
    )
}