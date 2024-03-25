export interface Category {
    id: number;
    name: string;
    slug: string;
}

export interface Author {
    id: number
    first_name: string;
    last_name: string;
    profile_picture: {
        img: string;
    } | null ;
    bio: string | null;
}

export interface Article {
    id: number,
    main_photo: {
        id: number;
        img: string;
        alt: string;
        description: string;
    } | null,
    category:  Category;
    author: Agent;
    title: string;
    slug: string;
    created: string;
    content: string;
    intro: string;
    featured: boolean;
}



export interface BlogPostsList {
    posts: Article[];
    featuredPosts: Article[];
    categories: Category[];
    recentPosts: Article[]
}

export interface BlogPostDetail {
    post: Article;
    adjacentPost: {next: Article | null, previous: Article | null};
    categories: Category[];
    relatedPosts: Article[];
    author: Author;
}

export interface Opinion {
    name: string;
    value: string;
    img: string;
    bio: string;
    content: string;
}

export interface SocialUrl {
    url: string;
    name: 'facebook' | 'instagram' | "linkedin" | 'twitter'
}

export interface Agent {
    id: number;
    name: string;
    slug: string;
    img: string | null;
    full_img: string | null;
    email: string | null;
    phone: string | null;
    bio: string;
    content: string;
    opinion: Opinion[];
    urls: SocialUrl[];
}

export interface SerachParams { 
    typObiektu?: string;
    typRynku?: string ;
    typSprzedazy?: string;
    lokalizacja?: string;
    cenaOd?: string;
    cenaDo?: string;
    powierzchniaOd?: string;
    powierzchniaDo?: string;
   };

   
export type AgenList = Agent[]

export interface AgenDetail {
    articles: Article[]
    agent: Agent;
    offers: RealEstateObject[];
    sold_offers: RealEstateObject[]

}

export type availableNeighborhoodList = {name: "Fitness" |  "Bank" | "Pool" | "TennisCourt" | "Restaurant" | "ShoppingCenter" | "School" | "Kindergarten" |
"Hospital" | "Forest" | "Park" |"River" | "Lake"  | "Sea" | "Mountains" | "Playground" | "SportsHall" | "Church" | "Bar" | "Harbor" | "BodyShop" | "RailwaySiding" |"Paint" |"LowBuilding" |"PoliceStation" |"Pharmacy" | "Bazaar" |"Nursery" | "JuniorHighSchool" |"Shop" |"HighSchool" |"MedicalClinic"
id: number}

export type communicationList ={ name:"Bus" |"Tram"|"Metro"|"SuburbanTrain"|"Train"|"Trolley"|"Airport"|"Highway"|"Pks"|"None"|"Minibus"
id:number}

export type buildingType = "ApartmentOfficeBuilding" |"OfficeBuilding" |"House" |"TenementHouse" |"ApartmentRetailBuilding" |"OfficeRetailBuilding" |"ApartmentBuilding" |"StorageAndOfficeCenter" |"Seal" |"LowBlock" |"HighBlock" |"Villa" |"Loft" |"HouseMultiPlaces" |"ApartmentBlock" |"SectionHouse" |"ShoppingCenter" |"Garage" |"Pavilion" |"Hotel" |"Court" |"Palace" |"Pension" |"Historical" |"Other" |"Restaurant" |"Cottage" |"PartOfHouse" |"WavyBlock" |"Outbuilding" |"RepairShop" |"Hall" |"SkyScraper" |"Motel" |"Warehouse" |"Mill" |"Shop" |"PetrolStation" |"Granary" |"Pub" |"Newsstand" |"Saloon" |"Inn" |"Cafe" |"Cabinet" |"DistributionCentre" |"Grange" |"Agriturismo" |"Farm" |"ProductionHall" |"OfficeSpace"

export type condition ="Perfect" |"VeryGood" |"Good" |"NeedsSmallRenovation" |"NeedsTotalRenovation" |"NeedsConversion" |"NeedsFinishing" |"DevelopmentState" |"CloseRawState" |"ForDemolition" |"Abandoned" |"ToRenovate" |"ToRefresh" |"AfterRenovation" |"Renovated" |"HighStandard" |"WithoutWhiteMontage" |"ToLive" |"AboveConstruction" |"WithTenants" |"Negotiated" |"ToRenew"

export type kitchenEquipment = {name: "Furniture" |"KitchenFurniture" |"Refrigerator" |"WashingMachine" |"Dishwasher" |"Hood" |"Oven" |"Microwave" |"ElectricOven" |"GasHob" |"Pantry" |"Sink" |"GasOven" |"ElectricStove" |"Freezer"}

export type material = "PrecastConcreteSlabs" |"Brick" |"Ytong" |"HFrame" |"Concrete" |"Wood" |"AirBrick" |"Other" |"Monolith" |"Mixed" |"Blocks" |"Steel" |"Glass" |"Aerated" |"SandLimeBrick" | 'Ceramics'

export type apartmentTypeList = "Apartment" |"Loft" |"Enfilade" |"GoodToSet" |"Attic" |"FloorHouse" |"Penthouse" |"Multilevel" |"Mezzanine" |"TransitiveRoom" |"TransitiveRooms" |"OneLevel" |"TwoLevel"

export type furnishedType = "Yes" |"No" |"Possible" |"Partially"

export type ownershipType ="Mortgage" |"HousingCooperative" |"Shared" |"Other" |"HousingCooperativeKW" |"TenantCooperative" |"Legal" |"Physical" |"RealEstate" |"RightOfSuperficies" |"LeaseContract" |"Coestate"

export type heatingTypeList = { name:"City" |"Own" |"Gas" |"Electric" |"Oil" |"Coal" |"Environmental" |"Other" |"Fireplace" |"Stove" |"HeatPump" |"SolidFuel" |"HotAirBlowerUsingGas" |"HotAirBlowerUsingWater" |"InfraredHeater" |"Floor" |"Biomass"
id:number }

export type garageList = "Garage" |"RentAbility" |"Guarded" |"None" |"ParkingSpace" |"Underground" |"ExtraCharge" |"Single" |"Double" |"NotGuarded" |"Shed" |"Detached" |"OnStreet" |"InBuilding" |"Obligatory"

export type hotWaterList = {name: "CityWater" | "GasStove" | "ElectricOven" | "Boiler" | "Solar" | "Other" | "SolidFuel" | "Geothermal" | "CoalStove" | "HeatPump"}

export type objectType = 'apartment' | 'house' | 'lot' | "office" | 'object'

export type windowTypeList = {name: "Aluminium" | "PCV" | "WoodenOldType" | "WoodenNewType" | "Steel" |  "Roof" | "Burglar" | "Portcullis" | "Shades" | "Old"}

export type spaceFloorList = {
    name: "Parquet" |    "Panels" |    "BoardFloor" |    "TerraCotta" |    "Other" |    "Mixed" |    "ConcreteFloor" |    "FittedCarpet" |    "Laminate" |    "Tiles" |    "Linoleum" |    "Gres" |    "PCV" |    "Mozaic"
}

export interface RealEstateObject {
    id: number;
    slug: string;
    ido: number;
    objectType: objectType;
    hotWaterList: hotWaterList[]; //to do
    spaceFloorList: spaceFloorList[]; //to fdo
    windowTypeList: windowTypeList[] //to do
    dateCreated: string;
    agent: Agent | null;
    availableNeighborhoodList: availableNeighborhoodList[];
    communicationList: communicationList[]
    buildingType: buildingType;
    condition: condition;
    description: string;
    elevator: boolean | null;
    headerAdvertisement: string;
    kitchenEquipment: kitchenEquipment[];
    material: material
    yearBuilt: string;
    images: {
        id: number;
        idi:number;
        alt:string;
        main: boolean;
    }[]
    apartmentTypeList: apartmentTypeList[];
    floorNo: string;
    furnishedType: furnishedType;
    mortgageMarket: "Primary" | "Secondary";
    monitoring: boolean | null;
    noOfBathrooms: string;
    noOfFloors: string;
    noOfRooms: string;
    price: {
        id: number;
        amount: string;
        currency: string;
    }
    security: boolean | null;
    alarm:boolean | null;
    fencedArea:boolean | null;
    location: {
        id: number;
        province: string;
        locality: string;
        quarter: string;
        fullName: string;
    }
    ownershipType: ownershipType;
    parkingSpacesNo: number;
    heatingTypeList: heatingTypeList[]
    totalArea: number;
    reception: boolean | null;
    garageList: garageList[]

}