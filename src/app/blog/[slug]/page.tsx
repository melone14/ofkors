import { Metadata } from "next";

import { getBlogPostDetail } from "@/clients/clients";
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import Link from "next/link";
import { routes } from "@/config";
import { Article } from "@mui/icons-material";

export async function generateMetadata(
    { params }: { params: { slug: string } }
  ): Promise<Metadata> {
    // read route params
   
    // fetch data
    const response = await getBlogPostDetail(params.slug);
   
   
    return {
      title: `${response.post.title} | Ofkors Blog`,
    }
  }

export default async function Page({ params }: { params: { slug: string } }) {
    const months = ["styczeń", "luty", "marzec", "kwiecień", "maj", "czerwiec", "lipiec", "sierpień", "wrzesień", "październik", "listopad", "grudzień"];
    const response = await getBlogPostDetail(params.slug)
    const ArticleDate = new Date(response.post.created)

    return (
        <>
            <h1 className="mt-20 mb-4 text-6xl text-medium text-center">{response.post.title}</h1>
            <div className="mb-20 ">{ArticleDate.getDate()} {months[ArticleDate.getMonth()].toUpperCase()} {ArticleDate.getFullYear()} | {response.post.author.name}</div>
            {response.post.main_photo ? <img className="w-[55rem] rounded-2xl pb-10" src={response.post.main_photo.img} alt={response.post.main_photo.alt} /> : null}
            <div className="w-full lg:w-[55rem] px-5 lg:px-0 text-xl mb-10" dangerouslySetInnerHTML={{ __html: response.post.content}}></div>
            <Link className="flex flex-row items-center p-3 rounded-3xl border-gray-300 border-2 text-gray-300 mb-10" href={`${routes.blog}/kategoria/${response.post.category.slug}`}>
                <LocalOfferIcon className="mr-2.5"/>
                {response.post.category.name}
            </Link>
            <div className="w-full lg:w-[55rem] px-5 lg:px-0 flex flex-row items-center justify-between mb-10">
                {response.adjacentPost.previous?.slug ? <Link className="bg-[#ff5f6d] p-2.5 text-white rounded-xl" href={`${routes.blog}/${response.adjacentPost.previous.slug}`}>Poprzedni Post</Link> : <div></div>}
                {response.adjacentPost.next?.slug ? <Link className="bg-[#ff5f6d] p-2.5 text-white rounded-xl" href={`${routes.blog}/${response.adjacentPost.next.slug}`}>Następny Post</Link> : <div/>}
            </div>
        </>
    )

}