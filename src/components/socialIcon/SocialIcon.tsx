
import Link from "next/link"

import { SocialUrl } from "@/clients/types"

import { Instagram, Facebook, X, LinkedIn } from "@mui/icons-material"


export const SocialIconComponent = ({item} : {item: SocialUrl}) => {
    const classOptions = "h-10 w-10 transition ease-in-out hover:border-[#ffc371] hover:text-[#ffc371] rounded-full border-2 border-white flex flex-row justify-center items-center"

    if (item.name === 'facebook')  {
        return (
            <Link className={classOptions} href={item.url}>
                <Facebook />
            </Link>
        )
    }
    if (item.name === 'instagram')  {
        return (
            <Link className={classOptions}  href={item.url}>
                <Instagram />
            </Link>
        )
    }
    if (item.name === 'linkedin')  {
        return (
            <Link className={classOptions} href={item.url}>
                <LinkedIn />
            </Link>
        )
    }
    if (item.name === 'twitter')  {
            return (
                <Link className={classOptions} href={item.url}>
                    <X />
                </Link>
            )
    }    
    
}