
import { furnishedType, condition, material, buildingType, availableNeighborhoodList, communicationList, heatingTypeList, hotWaterList,
 objectType, windowTypeList, spaceFloorList, kitchenEquipment, electricityStatus, waterTypeList, sewerageTypeList } from "@/clients/types"

export const mortgageMarketSwapper = (string: "Primary" | "Secondary") =>{

    switch(string) {
        case "Primary":
            return "Pierwotny"
        case "Secondary":
            return "Wtórny"
    }
    return undefined
}

export const waterTypeListSwapper = (string: waterTypeList) =>{

    switch(string.name) {
        case "No":
            return "brak";
        case "Urban":
            return "Wodociągi miejskie"
        case "UrbanInWay":
            return "Wodociągi miejskie"
        case "UrbanOnPlot":
            return "Wodociągi miejskie"
        case "Well":
            return "Wodociągi miejskie"
    }
    return undefined
}

export const sewerageTypeListSwapper = (string: sewerageTypeList) =>{

    switch(string.name) {
        case "BiologicalCleaning":
            return "Czyszczenie Biologiczne";
        case "City":
            return "Miejska";
        case "No":
            return "Brak";
        case "UrbanInWay":
            return "Miejskie"
    }
    return undefined
}

export const electricityStatusSwapper = (string: electricityStatus) =>{

    switch(string) {
        case "Directly":
            return 'Bezpośrednie';
        case "InWay":
            return "Wbudowane";
        case "No":
            return 'Brak'
        case "Yes":
            return "Jest"
    }
    return undefined
}

export const gasStatusSwapper = (string: electricityStatus) =>{

    switch(string) {
        case "Directly":
            return 'Bezpośrednie';
        case "InWay":
            return "Wbudowane";
        case "No":
            return 'Brak'
        case "Yes":
            return "Jest"
    }
    return undefined
}
export const kitchenEquipmentSwapper = (string: kitchenEquipment) => {
    switch(string.name) {
        case "Dishwasher":
            return "Zmywarka";
        case "Furniture":
            return "Meble";
        case "GasOven":
            return "Kuchenka Gazowa";
        case "ElectricOven":
            return "Piekarnik elektryczny";
        case "Freezer":
            return "Zamrażarka";
        case "Microwave":
            return "Mikrofalówka";
        case "ElectricStove":
            return "Kuchenka elektryczna";
        case "Oven":
            return "Piec";
        case "KitchenFurniture":
            return "Zabudowa kuchenna";
        case "Sink":
            return "Zlew";
        case 'Refrigerator':
            return "Lodówka";
        case "GasHob":
            return "Palniki gazowe";
        case "Pantry":
            return "Spiżarnia";
        case "Hood":
            return "Okap";
        case "WashingMachine":
            return "Pralka"
    }
    return undefined
}

export const spaceFloorListSwapper = (string: spaceFloorList) =>{

    switch(string.name) {
        case "ConcreteFloor":
            return "Beton";
        case "Gres":
            return "Gres";
        case "Mixed":
            return "Mieszana";
        case "TerraCotta":
            return "Teracota";
        case "Mozaic":
            return "Mozaika";
        case "Panels":
            return "Panele podłogowe";
        case "Laminate":
            return "Laminat";
        case "PCV":
            return "PCV";
        case "Parquet":
            return "Parkiet";
        case "Other":
            return "Inne";
        case "Tiles":
            return "Płytki";
        case "Linoleum":
            return "Linoleum";
        case "BoardFloor":
            return "Płyta podłogowa";
        case "FittedCarpet":
            return "Wykładzina podłogowa";
    }
    return undefined
}


export const objectTypeSwapper = (string: objectType) =>{

    switch(string) {
        case "apartment":
            return "Mieszkanie";
        case "house":
            return "Dom";
        case "lot":
            return "Działka"
        case "object":
            return "Obiekt";
        case "office":
            return "Biuro";
    }
    return undefined
}

export const windowTypeListSwapper = (string: windowTypeList) =>{

    switch(string.name) {
        case "Aluminium":
            return "Aluminium";
        case "Burglar":
            return "Antywłamaniowe";
        case "Old":
            return "Stare";
        case "PCV":
            return "PCV";
        case "Portcullis":
            return "Krata Drewniana"
        case "Roof":
            return "Okno dachowe";
        case "Shades":
            return "Przyciemnione";
        case "Steel":
            return "Stalowe";
        case "WoodenNewType":
            return "Drewniane";
        case "WoodenOldType":
            return "Drewniane";
    };

    return undefined
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
    }
    return undefined
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
    }
    return undefined
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
        case "Ytong":
            return "Beton komórkowy"
        case "Aerated":
            return "Beton komórkowy"
        case "Blocks":
            return "Bloczki"
        case "Concrete":
            return "Beton";
        case "PrecastConcreteSlabs":
            return "Prefabrykowane płyty betonowe"
        case "Ceramics":
            return 'Płyty ceramiczne'
    }
    return undefined
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
        case "Pub":
            return "Pub"
    }
    return undefined
}

export const availableNeighborhoodListSwapper = (string: availableNeighborhoodList) => {
    const name = string.name
    switch (name) {
        case "Bank":
            return 'Bank';
        case "Bar":
            return "Bar";
        case "Bazaar":
            return "Bazarek";
        case "Church":
            return "Kosciół";
        case "Fitness":
            return 'Klub fitness';
        case "Forest":
            return "Las";
        case "HighSchool":
            return 'Liceum';
        case "Hospital":
            return 'Szpital';
        case "Lake":
            return "Jezioro";
        case "Kindergarten":
            return "Przedszkole";
        case "Mountains":
            return "Góry";
        case "Park":
            return "Park";
        case "PoliceStation":
            return "Policja";
        case "Playground":
            return "Plac zabaw";
        case "Pharmacy":
            return "Apteka";
        case "River":
            return "Rzeka";
        case "School":
            return "Szkoła";
        case "Sea":
            return "Morze";
        case "ShoppingCenter":
            return "Galeria Handlowa";
        case "TennisCourt":
            return "Kort tenisowy";
        case "Shop":
            return "Sklep";
        case "Restaurant":
            return "Restauracja";
        case "Pool":
            return "Basen";
        case "SportsHall":
            return "Hala sportowa";
        case "Harbor":
            return "Port";
        case "JuniorHighSchool":
            return "Gimnazjum";
        case "MedicalClinic":
            return "Klinika medyczna";
        case "Nursery":
            return "Żłobek";
        case "RailwaySiding":
            return "Bocznica kolejowa";
    }
    return undefined
}

export const communicationListSwapper = (string: communicationList) => {
    switch (string.name) {
        case "Airport":
            return "Lotnisko";
        case "Bus":
            return "Autobus";
        case "Metro":
            return "Metro"
        case "None":
            return "Brak"
        case "Pks":
            return "PKS";
        case "Highway":
            return "Autostrada";
        case "Train":
            return "Pociągi";
        case "Tram":
            return "Tramwaj";
        case "Minibus":
            return "Minibus";
        case "SuburbanTrain":
            return "Pociąg podmiejski";
        
    }
    return undefined
}

export const heatingTypeListSwapper = (string: heatingTypeList) => {
    switch (string.name) {
        case "City":
            return "Miejskie";
        case "HeatPump":
            return "Pompa ciepła";
        case "Other":
            return "Inne";
        case 'Own':
            return "Własne";
        case "Gas":
            return "Gaz";
        case "Floor":
            return "Podłogowe";
        case "Coal":
            return "Węgiel";
        case "Electric":
            return "Elektryczne";
        case "Fireplace":
            return "Komine"
        case "Biomass":
            return "Biomasa"
        case "SolidFuel":
            return "Paliwo stałe";
        case "Oil":
            return "Ropa";
        case "Stove":
            return "Kuchenka";
        case "InfraredHeater":
            return "Promiennik podczerwieni";
        case "HotAirBlowerUsingGas":
            return 'Pompa ciepła'
        case 'HotAirBlowerUsingWater':
            return "Pompa ciepła";
        case "Environmental":
            return 'Środowiskowe'
    }
    return undefined;
}

export const hotWaterListSwapper = (string: hotWaterList) => {

    switch (string.name) {
        case "Boiler":
            return "Bojler";
        case "CityWater":
            return "Wodociągi miejskie";
        case "CoalStove":
            return 'Piec węglowy';
        case "ElectricOven":
            return "Piec elektryczny";
        case "Geothermal":
            return 'Ogrzewanie geotermalne';
        case "GasStove":
            return 'Kuchenka gazowa';
        case "HeatPump":
            return "Pompa ciepła";
        case "Other":
            return "Inne";
        case "Solar":
            return "Panele Solarne";
        case "SolidFuel":
            return "Paliwo stałe"
    }
    return undefined
}