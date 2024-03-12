
import { furnishedType, condition, material, buildingType } from "@/clients/types"

export const mortgageMarketSwapper = (string: "Primary" | "Secondary") =>{

    switch(string) {
        case "Primary":
            return "Pierwotny"
        case "Secondary":
            return "Wtórny"
        default:
            return "Brak"
    }
}


export const furnishedTypeSwapper = (string: furnishedType) => {
    switch(string) {
        case "Yes":
            return "Tak"
        case "No":
            return "Nie"
        case "Partially":
            return "Możliwe"
        case "Possible":
            return "Możliwe"
        default:
            return "Brak"
    }
}

export const conditionSwapper = (string: condition) => {
    switch(string) {
        case "Abandoned":
            return "Opuszczony"
        case "Good":
            return "Dobry"
        case "DevelopmentState":
            return "W stanie deweloperskim"
        case "Perfect":
            return "Perfekcyjny"
        case "HighStandard":
            return "W wysokim standardzie"
        case "VeryGood":
            return "Bardzo dobry"
        case "ToLive":
            "Do zamieszkania"
        case "ToRefresh":
            return "Do odświeżenia";
        case "ToRenew":
            return "Do odnowienia"
        case "ToRenovate":
            return "Do odnowienia"
        case "Renovated":
            return "Odnowione";
        default:
            return "Brak"
    }
}

export const materialSwapper = (string: material) => {
    switch(string) {
        case "AirBrick":
            return "Pustak"
        case "Brick":
            return "Cegła"
        case "Glass":
            return "Szkło"
        case "Wood":
            return "Drewno";
        case "Other":
            return "Inne"
        case "Monolith":
            return "Monolit";
        case "Steel":
            return "Stal"
        default:
            return "Brak"
    }
}


export const buildingTypeSwapper = (string: buildingType) =>{

    switch(string) {
        case "Villa":
            return "Willa";
        case "Cafe":
            return "Kawiarnia";
        case "House":
            return "Dom"
        case "Motel":
            return "Motel";
        case "Palace":
            return "Pałac";
        case "Shop":
            "Sklep";
        case "Warehouse":
            return "Magazyn"
        case "LowBlock":
            return "Niski blok";
        case "Hotel":
            return "Hotel";
        case "HighBlock":
            return 'Wysoki blok'
        case "Other":
            return "Inne";
        case "PetrolStation":
            return "Stacja Paliw";
        case "SkyScraper":
            return 'Wieżowiec'
        case "Restaurant":
            return "Restauracja";
        case "SectionHouse":
            return "Dom segmentowy"
        case "WavyBlock":
            return "Falisty blok"
        case "Court":
            return "Budynek Sądowy";
        case "Cabinet":
            return "Gabinet";
        default:
            return "Brak"
    }
}