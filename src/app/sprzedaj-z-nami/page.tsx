import Link from "next/link";
import { Metadata } from "next";
import { Divider } from "@mui/material";

import HandshakeIcon from '@mui/icons-material/Handshake';
import LocalPoliceIcon from '@mui/icons-material/LocalPolice';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';

import { ContactSection } from "@/components/contactSecion/ContactSection";

export const metadata: Metadata = {
  title: 'Ofkors | Sprzedaj z Nami',
  description: 'Ofkors | Sprzedaj z Nami',
}

export default function Page() {
  return (
    <>
      <h1 className="my-20 mb-5 text-6xl text-medium text-center hidden">Sprzedaj z Nami</h1>
      <h2 className="text-5xl mb-20 text-center lg:mt-5">Oczywiste są dla nas</h2>
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 mb-20 md:mb-10 md:px-5">
        <div className="flex flex-col items-center justify-center gap-5 text-white w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-[#47141e] shadow-2xl">
          <div><HandshakeIcon sx={{ fontSize: "8rem"}}/></div>
          <div className="text-4xl">Relacja</div>
        </div>
        <div className=" md:w-1/2 max-w-[30rem] text-3xl text-center px-5 md:px-0">To fundament  naszego działania, zarówno w życiu codziennym, jak i w biznesie. Wiemy, że tylko dzięki odpowiedniej interakcji, zaufaniu i komunikacji z klientami jesteśmy w stanie wypracować wspólny sukces.</div>
      </div>

      <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-10 mb-20 md:mb-10 md:px-5">
        <div className=" md:w-1/2 max-w-[30rem] text-3xl text-center px-5 md:px-0">To dla nas priorytet na każdym etapie transakcji. W komunikacji z klientem, tworzeniu oferty nieruchomości, finalizacji transakcji. To gwarancja</div>
        <div className="flex flex-col items-center justify-center gap-5 text-white w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-[#47141e] shadow-2xl">
          <div><LocalPoliceIcon sx={{ fontSize: "8rem"}}/></div>
          <div className="text-4xl">Jakość</div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-10 mb-20 md:mb-10 md:px-5">
        <div className="flex flex-col items-center justify-center gap-5 text-white w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-[#47141e] shadow-2xl">
          <div><LeaderboardIcon sx={{ fontSize: "8rem"}}/></div>
          <div className="text-4xl">Skuteczność</div>
        </div>
        <div className=" md:w-1/2 max-w-[30rem] text-3xl text-center px-5 md:px-0">To sens naszego działania. Na końcu transakcji liczy się efekt. Dzięki temu od wielu lat pracujemy na poleceniach.</div>
      </div>

      <ContactSection/>
    </>
  );
}
