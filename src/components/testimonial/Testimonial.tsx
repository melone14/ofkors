'use client'


import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Rating } from "@mui/material";




const Opinions = [
    {id: 0, name: "Jakub Bogucki", rating: 5, descrition: 'Ofkors Nieruchomości to biuro z którego usług korzystałem przy sprzedaży swojego mieszkania. Jestem bardzo zadowolony. Profesjonalnie, szybko i w cenie, którą chciałem otrzymać za moją nieruchomość. Sam nic nie musiałem robić, wszystkim zajęli się p.Joanna z p.Darkiem. Życzę Państwu powodzenia przy kolejnych transakcjach. Będę polecać Wasze biuro!'},
    {id: 1, name: "Marlena B.", rating: 5, descrition: 'Profesjonalizm! To słowo, które najlepiej opisuje Państwa podejście do tematu sprzedaży nieruchomości. Jestem pod ogromnym wrażeniem zaangażowania i energii z jaką Państwo działacie. Dziękuję za wsparcie mnie w sprzedaży mojego mieszkania. Na każdym etapie czułam się zaopiekowana, od początku wiedziałam, że jestem w dobrych rękach. Serdecznie dziękuję.'},
    {id: 2, name: "Lidia i Paweł Stankiewicz", rating: 5, descrition: 'Jesteśmy bardzo zadowoleni ze współpracy z biurem Ofkors Nieruchomości. Chcielibyśmy serdecznie podziękować Panu Dariuszowi za profesjonalizm, zaangażowanie i cierpliwość na każdym etapie procesu zakupu nieruchomości. Dzięki Pana pomocy cieszymy się naszym nowym mieszkaniem.'},
    {id: 4, name: "Marta i Paweł K.", rating: 5, descrition: 'Bardzo profesjonalna i rzetelna obsługa p.Joanny z Ofkors Nieruchomości sprawiła, że dziś cieszymy się z naszego nowego domu. Pani Joanna to osoba niezwykle zaangażowana, pełna pomysłów i fachowych rad. Dzięki Niej sprzedaliśmy nasze mieszkanie szybko i za dobre pieniądze. Bardzo dziękujemy i będziemy Panią polecać!' },
    {id: 5, name: "", rating: 5, descrition: 'Pan Dariusz z Ofkors Nieruchomości to specjalista w każdym calu. Od samego początku wiedzieliśmy, że trafiliśmy na osobę, która zna się na rzeczy. Świetne wyczucie rynku, fachowe porady dotyczące przygotowania mieszkania do sprzedaży sprawiły, że sprzedaliśmy je w 2 tygodnie! Dziękujemy i pozdrawiamy.' },
    {id: 6, name: "Katarzyna Adaszewska", rating: 5, descrition: 'Profesjonalne podejście od pierwszego spotkania to wyróżnik Pani Joanny z Ofkors Nieruchomości. Perfekcyjnie przeprowadziła sprzedaż naszego mieszkania. Świetny kontakt oraz empatyczne podejście do nas jako klientów dało się czuć na każdym etapie transakcji. Z czystym sumieniem będziemy polecać. Dziękujemy za pomoc:)' },
    {id: 7, name: "Daniel Kowalczyk", rating: 5, descrition: 'Bardzo polecamy współpracę z p.Dariuszem Czajka. Sprzedaliśmy z Nim mieszkanie w Warszawie. Tłumaczył nam cierpliwie wszelkie niejasności i rozładowywał emocje, gdy wymagała tego sytuacja. Dzięki Niemu sprawie przeszliśmy przez całą transakcję. Polecamy p.Dariusza do współpracy, to człowiek godny zaufania.' },
    {id: 8, name: "Dariusz i Anna Bukowscy", rating: 5, descrition: 'Pani Joanna to osoba kompetentna i profesjonalna, która świetnie zna rynek nieruchomości. Nasza współpraca układała się perfekcyjnie. Jesteśmy bardzo zadowoleni zarówno z komunikacji z p.Joanną oraz z efektu finalnego czyli wysokiej ceny za nieruchomość, którą sprzedaliśmy. Dziękujemy!' },
  ]


export const Testimonial = ({currentOpinion} : {currentOpinion: any}) => {

    return (
        <>
            <div className="flex flex-row items-center justify-center my-10 max-w-[35rem] w-96 h-96 rounded-full shadow-2xl bg-[#FAF8F6] p-5">
                <div className={` flex flex-col justify-center items-center gap-y-5 opinion-container`}>
                    <div><Rating sx={{ '& .MuiRating-iconFilled': {
                        color: '#47141e',
                    },}} readOnly value={currentOpinion.rating} /></div>
                    <div className="max-w-[20rem] text-md text-center min-h-40">{currentOpinion.descrition}</div>
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