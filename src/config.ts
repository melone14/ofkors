export const routes = {
    sellWithUs: '/co-robimy',
    home: '/',
    contact: '/kontakt',
    offers: '/oferty',
    aboutUs: '/o-nas',
    agents: '/nasi-agenci',
    blog: '/blog',
    privacyPolicy: '/polityka-prywatnosci',
    regulamin: '/regulamin-strony',
}


export const MainMenu = [ 
        { label: 'O nas', url: routes.aboutUs },
        { label: 'Ofkors', url: routes.sellWithUs },
        { label: 'Oferty', url: routes.offers },
        { label: 'Blog', url: routes.blog },
        { label: 'Kontakt', url: routes.contact },
]


export const API_BASE_URL = 'https://ofkors-nieruchomosci.ey.r.appspot.com/'