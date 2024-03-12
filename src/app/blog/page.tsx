
import { Metadata } from "next"
import { getBlogPostsList } from "@/clients/clients"
import { BlogCard } from "@/components/blog/BlogCard"


export const metadata: Metadata = {
    title: 'Ofkors | Blog',
    description: 'Ofkors | BLog',
  }

export default async function BlogList() {
    const response = await getBlogPostsList()

    return (
        <>
            <h1 className="mt-20 mb-10 text-6xl text-medium text-center">Z naszego Bloga</h1>
            {response.posts.map((post, index)=>{
                return (
                    <BlogCard key={index} article={post} />
                )
            })}
        </>
    )
}