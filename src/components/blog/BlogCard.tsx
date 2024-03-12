import React, { FC } from "react"
import Link from "next/link";
import { Divider } from "@mui/material";
import { Article } from "@/clients/types"
import { routes } from "@/config";
import BookmarkIcon from '@mui/icons-material/Bookmark';
import Agents from "@/images/joannaDarek/ofkors agents.jpg"

type Props = {
    article: Article;
}

export const BlogCard:FC<Props> = ({ article }) => {
    const months = ["styczeń", "luty", "marzec", "kwiecień", "maj", "czerwiec", "lipiec", "sierpień", "wrzesień", "październik", "listopad", "grudzień"];

    const ArticleDate = new Date(article.created)

    if (!article.main_photo) {
        return (
            <>
        <div className="flex w-full flex-col lg:flex-row items-center lg:w-[55rem] my-10 px-5 md:px-10 lg:px-0">

            <div className="w-full flex flex-col gap-y-7">
                {article.featured ? 
                <div className="flex flex-row items-center justify-center bg-[#ff5f6d] w-36 py-2 rounded-md text-white">
                    <BookmarkIcon/>
                    <div>Wyróżnione</div>
                </div>
                 : null}
                 <Link href={`${routes.blog}/kategoria/${article.category.slug}`}>
                    {article.category.name.toUpperCase()}
                 </Link>
                 <div className="text-2xl font-bold">{article.title}</div>
                 <div className="flex flex-row items-center gap-x-4">
                    <div>{ArticleDate.getDate()}/{months[ArticleDate.getMonth()]}/{ArticleDate.getFullYear()}</div>
                    <Link href={`${routes.agents}/${article.author.slug}`}>{article.author.name}</Link>
                 </div>
                 <div className="text-xl">{article.intro}</div>
                 <Link className="p-2 bg-[#ff5f6d] text-white w-40 rounded-md" href={`${routes.blog}/${article.slug}`}>
                    <div className="flex flex-row justify-center items-center">Kontynuuj czytanie</div>
                 </Link>
            </div>
        </div>
        <Divider className="w-[20rem] md:w-[40rem] lg:w-[60rem] mb-10"/>
        </>
        )
    }

    return (
        <>
        <div className="flex w-full flex-col lg:flex-row items-center gap-x-10 lg:w-[55rem] mb-10 my-10 px-5 md:px-10 lg:px-0">
            <div className="w-full lg:w-1/2">
                <img className="rounded-2xl mb-5 lg:mb-0" src={article.main_photo.img} alt={article.main_photo.alt} />
            </div>
            <div className="w-full lg:w-1/2 flex flex-col gap-y-7 m">
                {article.featured ? 
                <div className="flex flex-row items-center justify-center bg-[#ff5f6d] w-36 py-2 rounded-md text-white">
                    <BookmarkIcon/>
                    <div>Wyróżnione</div>
                </div>
                 : null}
                 <Link href={`${routes.blog}/kategoria/${article.category.slug}`}>
                    {article.category.name.toUpperCase()}
                 </Link>
                 <div className="text-2xl font-bold">{article.title}</div>
                 <div className="flex flex-row items-center gap-x-4">
                    <div>{ArticleDate.getDate()}/{months[ArticleDate.getMonth()]}/{ArticleDate.getFullYear()}</div>
                    <Link href={`${routes.agents}/${article.author.slug}`}>{article.author.name}</Link>
                 </div>
                 <div  className="text-xl">{article.intro}</div>
                 <Link className="p-2 bg-[#ff5f6d] text-white w-40 rounded-md" href={`${routes.blog}/${article.slug}`}>
                    <div className="flex flex-row justify-center items-center">Kontynuuj czytanie</div>
                 </Link>
            </div>
        </div>
        <Divider className="w-[20rem] md:w-[40rem] lg:w-[60rem] mb-10"/>
        </>
    )
}