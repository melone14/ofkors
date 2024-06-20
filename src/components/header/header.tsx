import Image from "next/image";
import Link from "next/link";

import OfkorsLogo from "@/images/logo/base_logo_transparent_background.png";
import { Phone, Email } from "@mui/icons-material";

import { HeaderMenu } from "./components/headerMenu";

import { MainMenu } from "@/config";

export const Header = () => {
  return (
    <>
      <header className="w-full relative top-0, left-0, right-0 z-20">
        <div
          style={{ backgroundColor: "#47141E" }}
          className="px-2 py-2 w-full justify-center items-center flex flex-col 
                sm:flex-row-reverse sm:justify-between sm:items-start md:items-center pr-10"
        >
          <div className="hidden md:flex items-center w-full h-auto justify-between sm:w-auto sm:justify-normal">
            <div className="text-white flex items-center transition ease-in-out hover:text-[#ff5f6d]">
              <Link className="flex items-center" href="tel:+48883027007">
                <Phone className="mr-2" />
                +48 883 027 007
              </Link>
            </div>
            <div className="text-white flex items-center sm:ml-5 transition ease-in-out hover:text-[#ff5f6d]">
              <Link className="flex items-center" href="mailto:biuro@ofkors.pl">
                <Email className="mr-2" />
                biuro@ofkors.pl
              </Link>
            </div>
          </div>
          <Link href={"/"}>
            <Image
              className="w-64 h-auto sm:w-80 md:w-96"
              src={OfkorsLogo}
              alt="Logo Ofkors"
            />
            {/* basic w-90 */}
          </Link>
        </div>
        <nav className="w-full h-16 hidden text-black flex flex-row justify-end gap-x-5 items-start lg:flex">
          {MainMenu.map((item, index) => {
            return (
              <Link
                className="transition ease-in-out mr-5 text-2xl font-medium text-[#47141e] hover:text-[#ff5f6d] mt-1"
                href={item.url}
                key={index}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <HeaderMenu />
      </header>
    </>
  );
};
