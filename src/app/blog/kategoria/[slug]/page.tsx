import { Metadata } from "next";
import { getBlogPostsCategoryList } from "@/clients/clients";
import { BlogCard } from "@/components/blog/BlogCard";

export const metadata: Metadata = {
  title: "Ofkors | Blog",
  description: "Ofkors | BLog",
};

export default async function BlogCategoryList({
  params,
}: {
  params: { slug: string };
}) {
  const response = await getBlogPostsCategoryList(params.slug);

  return (
    <>
      <h1 className="mt-20 text-6xl text-medium hidden">Z naszego Bloga</h1>
      {response.posts.length !== 0 &&
        response.posts.map((post, index) => {
          return <BlogCard key={index} article={post} />;
        })}
      {response.posts.length === 0 && (
        <>
          <div className="py-40 text-3xl blog-cover text-center my-20 text-white">
            Tu niebawem znajdziesz interesujące treści z&nbsp;rynku
            nieruchomości i&nbsp;pracy naszego biura
          </div>
        </>
      )}
    </>
  );
}
