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
  metadataBase: new URL('https://ofkors.pl'),
  alternates: {
    canonical: '/',
  },
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
        <div className="fixed z-10 bottom-4 left-4 flex flex-col gap-5">
          <PhoneComponent />
          <CoockieComponent/>
        </div>
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
