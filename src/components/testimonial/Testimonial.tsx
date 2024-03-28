'use client'

import Image from "next/image";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Rating } from "@mui/material";


import Agents from "@/images/joannaDarek/ofkors agents.jpg"


const Opinions = [
    {id: 0, name: "p. Kamil", rating: 5, descrition: 'Współpraca z biurem "Ofkors" była dla mnie niesamowicie pozytywnym doświadczeniem. Ich profesjonalizm i zaangażowanie sprawiły, że sprzedaż mojego mieszkania przebiegła sprawnie i bezproblemowo. Polecam z całego serca!', jobRole: 'CEO, Spexo'},
    {id: 1, name: "Robert K", rating: 5, descrition: 'Biuro "Ofkors" to zespół ludzi, którzy naprawdę wiedzą, co robią. Ich strategia sprzedażowa była trafna, a obsługa klienta na najwyższym poziomie. Bardzo doceniam ich pomoc i gorąco polecam każdemu, kto szuka skutecznego partnera w sprzedaży nieruchomości.', jobRole: 'CEO, Spexo'},
    {id: 2, name: "Marta P", rating: 5, descrition: 'Biuro "Ofkors" okazało się niezawodnym partnerem w procesie sprzedaży mojego mieszkania. Ich troskliwe podejście do moich potrzeb oraz skuteczne działania przyniosły oczekiwane rezultaty. Dzięki nim mogłam bez obaw oddać się całemu procesowi. Szczerze polecam!', jobRole: 'CEO, Spexo'},
    {id: 4, name: "Ania K", rating: 5, descrition: 'Współpraca na 5 gwiazdek. Pełny profesjonalizm w każdym calu. Od pierwszego spotkania po przekazanie kluczy czyłam wspracie. Polecam z czystym sumieniem.', jobRole: 'CEO'},
]


export const Testimonial = ({currentOpinion} : {currentOpinion: any}) => {

    return (
        <>
            <div className="flex flex-row items-center justify-center my-10 max-w-[35rem] w-96 h-96 rounded-full shadow-md bg-[#FAF8F6]">
                <div className={` flex flex-col justify-center items-center gap-y-5 md:gap-y-10 opinion-container`}>
                    <div><Rating sx={{ '& .MuiRating-iconFilled': {
                        color: '#47141e',
                    },}} readOnly value={currentOpinion.rating} /></div>
                    <div className="max-w-[20rem] text-md md:text-lg text-center min-h-40">&apos;{currentOpinion.descrition}&apos;</div>
                    <div>{currentOpinion.name}</div>
                </div>
            </div>
        </>
      );
}



const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 1024, min: 768 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 768, min: 640 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
  },
};

export const TestimonialComponent = () => {

  const customLeftArrow = (
    <div className="absolute arrow-btn left-0 text-center py-3 cursor-pointer bg-[#47141e] rounded-full text-white mx-3 w-10 h-10 flex flex-col justify-center items-center">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
      </svg>
    </div>
  );

  const customRightArrow = (
    <div className="absolute arrow-btn right-0 text-center py-3 cursor-pointer bg-[#47141e] rounded-full text-white mx-3 w-10 h-10 flex flex-col justify-center items-center">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
      </svg>
    </div>
  );

  return (
    <div className="mb-8 w-full">
      <Carousel infinite customLeftArrow={customLeftArrow} customRightArrow={customRightArrow} responsive={responsive} 
      itemClass="px-4 flex flex-col items-center">
        {Opinions.map((opinion, index) => (
          <Testimonial key={index} currentOpinion={opinion} />
        ))}
      </Carousel>
    </div>
  );
};