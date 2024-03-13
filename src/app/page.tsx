import type { Metadata } from 'next' 

import './style.css'
import Image from 'next/image';

import BothAgents from "@/images/home/Ofkors - ph - anojszewska 12.jpg"

import { SearchComponent } from "@/components/searchComponent/HomeSearch";
import { TestimonialComponent } from '@/components/testimonial/Testimonial';

 
export const metadata: Metadata = {
  title: 'Ofkors - Twoja Agencja Nieruchomości',
  description: 'Ofkors - Twoja Agencja Nieruchomości',
}

export default function Home() {
  return (
    <>
      <div className="-mt-16 mb-10 w-full home-main-section flex flex-col-reverse items-center pb-10">
        <div style={{ backgroundColor: 'rgba(71, 20, 30, 0.7)' }} className='mx-2 md:px-5 lg:mx-auto px-5 md:px-20 py-10 rounded-2xl text-white hidden md:block'>
          <h1 className='text-3xl text-white font-bold mb-10 text-center'>Znajdź swoją wymarzoną nieruchomość</h1>
          <SearchComponent />
        </div>
      </div>
      <div style={{ backgroundColor: 'rgba(71, 20, 30, 0.7)' }} className='mx-2 md:px-5 lg:mx-auto px-5 md:px-20 py-10 rounded-2xl text-white block md:hidden'>
          <div className='text-3xl text-white font-bold mb-10 text-center'>Znajdź swoją wymarzoną nieruchomość</div>
          <SearchComponent />
        </div>
      <div className='flex flex-col lg:flex-row gap-x-10 items-center my-20'>
        <div className='w-full lg:w-[35rem] px-5 lg:px-0 flex flex-col items-center'>
          <Image className='w-full rounded-xl mx-5 lg:mx-0 mb-5 lg:mb-0' src={BothAgents} alt="Two Agents" />
        </div>
        <div className='p-5 lg:p-0'>
          <p className='lg:max-w-96 text-2xl mb-5 text-center'>OFKORS NIERUCHOMOŚCI powstało ze wspólnej pasji do nieruchomości. Stworzyliśmy biuro z którego usług sami chcielibyśmy skorzystać. Tylko tyle i aż tyle. Dla nas każdy Klient, a tym samym każda nieruchomość to oddzielna historia, której częścią stajemy się również my. Jesteśmy dla ludzi, którzy chcą powierzyć ten kawałek swojego życia zespołowi doświadczonych, zaangażowanych oraz skutecznych doradców.</p>
          <p className='lg:max-w-96 text-2xl mb-5 text-center'>Jesteśmy ciekawi, jaką historię Ty nam opowiesz.</p>
          <div className='lg:max-w-96 flex flex-col items-center'>
            <div className='lg:max-w-96 text-2xl text-center'>Joanna Stojanowska,</div>
            <div className='lg:max-w-96 text-2xl text-center'>Dariusz Czajka</div>
          </div>
        </div>
      </div>
      <TestimonialComponent />
    </>
  );
}
