'use client'

import Image from "next/image";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Rating } from "@mui/material";


import Agents from "@/images/joannaDarek/ofkors agents.jpg"


const Opinions = [
    {id: 0, name: "Patryk Wojciechowski", rating: 5, descrition: 'Muszę przyznać, że byłem początkowo sceptyczny co do zakupów przez internet, ale ta firma całkowicie zmieniła moje podejście. Ich obsługa klienta jest niesamowita. Zadzwoniłem z kilkoma pytaniami dotyczącymi produktu i zostałem obsłużony przez bardzo pomocnego i kompetentnego pracownika.', jobRole: 'CEO, Spexo'},
    {id: 1, name: "Patryk Wojciechowski", rating: 5, descrition: 'To był mój pierwszy zakup w tym sklepie internetowym i jestem pod wrażeniem. Strona internetowa była łatwa w nawigacji, a proces zamawiania był prosty i intuicyjny. Gdy pojawił się problem z dostawą (zgubił się paczkowicz), obsługa klienta natychmiast podjęła działania w moim imieniu i zagwarantowała, że paczka dotrze na czas. ', jobRole: 'CEO, Spexo'},
    {id: 2, name: "Patryk Wojciechowski", rating: 5, descrition: 'Mam bardzo pozytywne doświadczenia z tą firmą. Ich asortyment jest szeroki, a ceny są konkurencyjne. Poza tym, obsługa klienta jest bez zarzutu. Ostatnio miałem problem z jednym z produktów, który otrzymałem, ale firma szybko zareagowała i zaoferowała mi rozwiązanie problemu. ', jobRole: 'CEO, Spexo'},
    {id: 4, name: "Patryk Wojciechowski", rating: 5, descrition: 'Byłem zaskoczony, jak szybko moje zamówienie zostało zrealizowane. Produkt, który kupiłem, był bardzo dobrze zapakowany i dotarł do mnie w idealnym stanie. Poza tym, komunikacja z firmą była sprawna i uprzejma.', jobRole: 'CEO'},
    {id: 5, name: "Patryk Wojciechowski", rating: 5, descrition: 'Nigdy nie pisałem opinii o sklepach internetowych, ale ta firma zasługuje na uznanie. Ich produkty są wysokiej jakości, a obsługa klienta jest niesamowita. Ostatnio miałem problem z dostawą, ale firma szybko zareagowała i zorganizowała ponowną wysyłkę paczki. ', jobRole: 'CEO, Spexo'},
]


export const Testimonial = ({currentOpinion} : {currentOpinion: any}) => {

    return (
        <>
            <div className="flex flex-row items-center justify-center my-10 max-w-[35rem]">
                <div className={` flex flex-col justify-center items-center gap-y-10 opinion-container`}>
                    <div><Rating sx={{ '& .MuiRating-iconFilled': {
                        color: '#47141e',
                    },}} readOnly value={currentOpinion.rating} /></div>
                    <div className="max-w-[20rem] md:max-w-[30rem] text-xl text-center min-h-40">&apos;{currentOpinion.descrition}&apos;</div>
                    <div className="flex flex-col gap-y-5 items-center">
                            <div>{currentOpinion.name}</div>
                            <div>{currentOpinion.jobRole}</div>
                    </div>
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