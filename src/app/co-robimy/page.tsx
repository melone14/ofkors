import Link from "next/link";
import { Metadata } from "next";
import { Divider } from "@mui/material";

import './style.css';

import { FaBuildingCircleCheck } from "react-icons/fa6";
import { CiSquareCheck } from "react-icons/ci";
import { FaBookReader } from "react-icons/fa";
import { GoShieldCheck } from "react-icons/go";
import { PiHandshake } from "react-icons/pi";
import { PiStudent } from "react-icons/pi";
import { BiTransfer } from "react-icons/bi";
import { MdOutlineHandshake } from "react-icons/md";
import { MdOutlineShield } from "react-icons/md";
import { CiTrophy } from "react-icons/ci";

import { ContactSection } from "@/components/contactSecion/ContactSection";

export const metadata: Metadata = {
  title: 'Ofkors | Sprzedaj z Nami',
  description: 'Ofkors | Sprzedaj z Nami',
}

const wartosci = [
  { icon: <FaBuildingCircleCheck className="w-8 h-8 text-white" />, text:'Nieruchomości i praca z ludźmi to nasza pasja' },
  { icon: <FaBookReader className="w-8 h-8 text-white"/>, text:'Posiadamy kilkuletnie doświadczenie na rynku nieruchomości potwierdzone setkami zrealizowanych transakcji' },
  { icon: <GoShieldCheck className="w-8 h-8 text-white"/>, text:'Stawiamy na jakość- w obsłudze klienta, przygotowaniu oferty oraz finalizacji transakcji' },
  { icon: <CiSquareCheck className="w-8 h-8 text-white"/>, text:'Jesteśmy skuteczni - sprzedajemy szybko i osiągamy wysokie ceny transakcyjne' },
  { icon: <PiHandshake className="w-8 h-8 text-white"/>, text:'Mierzymy wysoko- motywują nas efekty naszej pracy i opinie naszych klientów' },
  { icon: <PiStudent className="w-8 h-8 text-white"/>, text:'Dbamy o ciągły rozwój, szkolenia i warsztat pracy' },
  { icon: <BiTransfer className="w-8 h-8 text-white"/>, text:'Ważna jest dla nas etyka pracy, transparentność i jasne zasady' }
]

export default function Page() {
  return (
    <>
      <h1 className="my-20 text-6xl text-medium text-center hidden">Sprzedaj z Nami</h1>
      <div className="w-full flex flex-col items-center mt-20 wartosci py-20">
        <div className="flex flex-row items-start justify-center w-full flex-wrap px-5 gap-10 max-w-[85rem]">
          {wartosci.map((item, index)=>{
            return (
              <div className="w-full px-5 md:px-0 md:w-96 flex flex-col items-center" key={index}>
                <div className="rounded-xl bg-[#ffc371] h-16 w-16 flex flex-col items-center justify-center mb-4">
                  {item.icon}
                </div>
                <div className="text-center text-xl text-white">{item.text}</div>
              </div>
            )
          })}
        </div>
      </div>
        <h2 className="text-3xl md:text-4xl my-10 font-bold text-center gradient-text">Oczywiste są dla nas</h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 mb-20 md:mb-10 md:px-5">
          <div className="flex flex-col items-center justify-center gap-5 text-white w-60 h-60 rounded-full bg-[#47141e] shadow-2xl">
            <div><PiHandshake style={{ fontSize: "2.5rem"}}/></div>
            <div className="text-2xl">Relacja</div>
          </div>
          <div className=" md:w-1/2 max-w-[30rem] text-xl text-center px-5 md:px-0">To fundament  naszego działania, zarówno w życiu codziennym, jak i w biznesie. Wiemy, że tylko dzięki odpowiedniej interakcji, zaufaniu i komunikacji z klientami jesteśmy w stanie wypracować wspólny sukces.</div>
        </div>

        <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-10 mb-20 md:mb-10 md:px-5">
          <div className=" md:w-1/2 max-w-[30rem] text-xl text-center px-5 md:px-0">To dla nas priorytet na każdym etapie transakcji. W komunikacji z klientem, tworzeniu oferty nieruchomości, finalizacji transakcji.</div>
          <div className="flex flex-col items-center justify-center gap-5 text-white w-60 h-60 rounded-full bg-[#47141e] shadow-2xl">
            <div><MdOutlineShield style={{ fontSize: "2.5rem"}}/></div>
            <div className="text-2xl">Jakość</div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-10 mb-20 md:mb-10 md:px-5">
          <div className="flex flex-col items-center justify-center gap-5 text-white w-60 h-60 rounded-full bg-[#47141e] shadow-2xl">
            <div><CiTrophy style={{ fontSize: "2.5rem"}}/></div>
            <div className="text-2xl">Skuteczność</div>
          </div>
          <div className=" md:w-1/2 max-w-[30rem] text-xl text-center px-5 md:px-0">To sens naszego działania. Na końcu transakcji liczy się efekt. Dzięki temu od wielu lat pracujemy na poleceniach.</div>
        </div>
      <ContactSection/>
    </>
  );
}
