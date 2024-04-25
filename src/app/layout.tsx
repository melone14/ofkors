import type { Metadata } from "next";
import "./globals.css";

import { Header } from "@/components/header/header";
import { Footer } from "@/components/footer/footer";
import { ScrollButton } from "@/components/scrollButton/ScrollButton";

import { PhoneComponent } from "@/components/PhoneComponent/phoneComponent";
import { CoockieComponent } from "@/components/coockie/CoockieComponent";

export const metadata: Metadata = {
  title: "Ofkors | Twoja Najlepsza Agencja Nieruchomości",
  description: "Ofkors | Twoja Najlepsza Agencja Nieruchomości",
};

export const revalidate = 3600


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) 
{
  return (
    <html lang="pl">
      <body className="p-0 m-o">
        <PhoneComponent />
        <CoockieComponent/>
        <ScrollButton />
        <Header/>
        <main className="flex flex-col items-center">
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
