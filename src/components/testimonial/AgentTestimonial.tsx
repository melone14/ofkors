'use client'

import Image from "next/image";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Rating } from "@mui/material";

import { Opinion } from "@/clients/types";

import Agents from "@/images/joannaDarek/ofkors agents.jpg"



export const AgentTestimonial = ({currentOpinion} : {currentOpinion: Opinion}) => {

    return (
        <>
            <div className="flex flex-row items-center justify-center my-10 w-96 h-96 rounded-full bg-[#FAF8F6] p-5 shadow-2xl">
                <div className={` flex flex-col justify-between items-center opinion-container`}>
                    <div className="mb-5"><Rating sx={{ '& .MuiRating-iconFilled': {
                        color: '#47141e',
                    },}} readOnly value={parseFloat(currentOpinion.value)} /></div>
                    <div className="max-w-[30rem] text-md text-center min-h-40 h-" dangerouslySetInnerHTML={{__html: currentOpinion.content}}/>
                    <div className="flex flex-row gap-x-4 items-center">
                        <Image className="w-16 h-16 rounded-full" src={Agents} alt={currentOpinion.name} />
                        <div className="h-16 flex flex-col items-start gap-y-2 justify-center">
                            <div>{currentOpinion.name}</div>
                            <div>{currentOpinion.bio}</div>
                        </div>
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

export const AgentTestimonialComponent = ({ data } : {data: Opinion[]}) => {
  console.log(data)
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
        {data.map((opinion, index) => (
          <AgentTestimonial key={index} currentOpinion={opinion} />
        ))}
      </Carousel>
    </div>
  );
};