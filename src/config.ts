export const routes = {
    sellWithUs: '/sprzedaj-z-nami',
    home: '/',
    contact: '/kontakt',
    offers: '/oferty',
    aboutUs: '/o-nas',
    agents: '/nasi-agenci',
    blog: '/blog'
}


export const MainMenu = [ { label: 'Sprzedaj z nami', url: routes.sellWithUs },
        { label: 'Oferty', url: routes.offers },
        { label: 'O nas', url: routes.aboutUs },
        { label: 'Blog', url: routes.blog },
        { label: 'Kontakt', url: routes.contact },
]


export const API_BASE_URL = 'https://ofkors-nieruchomosci.ey.r.appspot.com/'