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
        <div className="px-5 lg:px-0 text-4xl font-bold gradient-text my-20 text-center">Ofkors Nieruchomości – Twój wybór jest oczywisty</div>
        <div className="my-20 text-6xl text-medium hidden">O Nas</div>
        <div className="flex w-full px-10 flex-col lg:flex-row items-center p-5 lg:px-10 justify-center gap-10 mb-10">
            <Image className="w-full lg:w-1/3 rounded-xl shadow-xl" src={Agents} alt="Agenci Nieruchomości" />
            <div className="w-full lg:w-1/3 text-2xl text-justify">Ofkors Nieruchomości to zespół pasjonatów, którzy połączyli swoje doświadczenie, wiedzę i energię, aby stworzyć wyjątkowe miejsce na rynku nieruchomości. W naszej pracy zawsze stawiamy na indywidualne podejście do każdego klienta, dbając o to, aby proces poszukiwania, sprzedaży lub wynajmu nieruchomości był jak najbardziej komfortowy i efektywny. Nasza otwartość, zaangażowanie i łatwość nawiązywania relacji sprawiają, że budujemy trwałe więzi zarówno z klientami, jak i partnerami biznesowymi. W Ofkors wierzymy, że sukces w biznesie nieruchomości opiera się nie tylko na umiejętnościach zawodowych, ale także na etyce pracy i zaangażowaniu w dobro naszych klientów.</div>
        </div>
        <div className="my-20 text-4xl text-medium">Nasz Zespół</div>
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