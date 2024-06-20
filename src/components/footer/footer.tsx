import Image from "next/image";
import Link from "next/link";

import {
  Email,
  LocationOn,
  Phone,
  Facebook,
  Instagram,
} from "@mui/icons-material";

import OfkorsLogo from "@/images/logo/base_logo_transparent_background.png";

import { MainMenu, routes } from "@/config";

export const Footer = () => {
  return (
    <footer
      style={{ backgroundColor: "#47141E" }}
      className="w-full justify-between flex-wrap flex flex-col"
    >
      <div
        className="w-full justify-between flex-wrap flex flex-col 
        sm:flex-row text-white p-10 md:px-20"
      >
        <div className="mb-7 lg:mb-0">
          <Link href={routes.home}>
            <Image
              className="h-auto w-96 sm:w-52 md:w-64 mb-5"
              src={OfkorsLogo}
              alt="Ofkors Logo"
            />
          </Link>
          <div className="flex flex-col md:flex-row md:items-start  md:gap-x-10 lg:gap-x-20 gap-10 w-full">
            <div>
              <div className="mb-2">
                <Link
                  className="transition ease-in-out hover:text-[#ff5f6d]"
                  href="mailto:biuro@ofkors.pl"
                >
                  <Email className="mr-2.5" />
                  biuro@ofkors.pl
                </Link>
              </div>
              <div className="flex flex-row items-center mb-2">
                <Phone className="mr-2.5" />
                <div className="flex flex-col">
                  <Link
                    className="transition ease-in-out hover:text-[#ff5f6d]"
                    href="tel:+48883288007"
                  >
                    +48 883 288 007
                  </Link>
                  <Link
                    className="transition ease-in-out hover:text-[#ff5f6d]"
                    href="tel:+48883027007"
                  >
                    +48 883 027 007
                  </Link>
                </div>
              </div>
              <Link
                href="https://maps.app.goo.gl/UzjSHtDJddsT4i317"
                className="flex flex-row items-center transition ease-in-out hover:text-[#ff5f6d]"
              >
                <LocationOn className="mr-2.5" />
                <div className="flex flex-col">
                  <div>Plac Konesera 12/126</div>
                  <div>03-736 Warszawa</div>
                </div>
              </Link>
              <div className="flex flex-row mt-8">
                <a
                  className="border-2 border-white flex justify-center transition ease-in-out
                                items-center p-2 rounded-full mr-2.5 hover:bg-[#ff5f6d]"
                  href="https://www.facebook.com/profile.php?id=61558595796568"
                >
                  <Facebook />
                </a>
                <a
                  className="border-2 border-white flex justify-center transition ease-in-out
                                items-center p-2 rounded-full mr-2.5 hover:bg-[#ff5f6d]"
                  target="blank"
                  href="https://www.instagram.com/ofkors_nieruchomosci/"
                >
                  <Instagram />
                </a>
              </div>
            </div>
            <div className="mb-7 md:mb-0">
              <nav className="flex flex-col">
                {MainMenu.map((item, index) => {
                  return (
                    <Link
                      className="mb-2.5 transition ease-in-out hover:text-[#ff5f6d]"
                      href={item.url}
                      key={index}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </nav>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-medium mb-8 md:text-2xl">
            Ofkors Nieruchomości sp. z o. o.
          </h3>
          <p className="max-w-96 sm:max-w-60 md:max-w-96 text-justify">
            Nasza agencja nieruchomości zajmuje się profesjonalną sprzedażą,
            zakupem oraz wynajmem nieruchomości. Działamy na terenie Warszawy
            i&nbsp;miejscowości podwarszawskich oraz mamy szerokie kontakty
            wśród współpracujących agencji w&nbsp;całej Polsce. Jesteśmy
            gwarancją jakości i&nbsp;skuteczności. Dzięki naszemu zaangażowaniu,
            dobrym relacjom oraz etyce pracy, większość naszych ofert pochodzi
            z&nbsp;poleceń od zadowolonych klientów.
          </p>
        </div>
      </div>
      <div
        className="w-full flex-wrap flex flex-col 
        sm:flex-row-reverse gap-5 text-white px-10 md:px-20 pb-10"
      >
        <div className="flex flex-col sm:flex-row-reverse gap-5 text-white">
          <Link className="text-white" href={routes.privacyPolicy}>
            Polityka Prywatności
          </Link>
          <Link className="text-white" href={routes.regulamin}>
            Regulamin Strony
          </Link>
        </div>
        <div className="flex flex-col sm:flex-row-reverse gap-5 text-white">
          <Link className="text-white" href={routes.facebookPrivacy}>
            Polityka Prywatności Facebook
          </Link>
          <Link className="text-white" href={routes.instagramPrivacy}>
            Polityka Prywatności Instagram
          </Link>
        </div>
      </div>
    </footer>
  );
};
