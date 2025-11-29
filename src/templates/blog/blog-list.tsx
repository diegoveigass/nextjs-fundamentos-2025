import { Search } from "@/components/search";
import { allPosts } from "contentlayer/generated";
import { Inbox } from "lucide-react";
import { useRouter } from "next/router";
import { PostCard } from "./components/post-card";
import { PostGridCard } from "./components/post-grid-card";

export function BlogList() {
  const router = useRouter();
  const query = router.query.q as string;
  const pageTitle = query
    ? `Resultados de busca para: "${query}"`
    : "Dicas e estratégias para impulsionar seu negócio";

  const posts = query
    ? allPosts.filter((post) => {
        return (
          post.title.toLocaleLowerCase().includes(query.toLocaleLowerCase()) ||
          post.description
            .toLocaleLowerCase()
            .includes(query.toLocaleLowerCase())
        );
      })
    : allPosts;

  const hasPosts = posts.length > 0;

  return (
    <div className="flex flex-col py-24 flex-grow h-full md:gap-14 gap-6">
      <header>
        <div className="container space-y-6 flex flex-col items-start justify-between md:flex-row md:items-end lg:items-end">
          <div className="flex flex-col gap-4 md:p-0">
            <span className="uppercase text-body-tag text-cyan-100 rounded-md w-fit text-center py-2 px-4 bg-cyan-300 md:text-left">
              Blog
            </span>

            <h1 className="text-balance text-start md:text-left text-heading-lg md:text-heading-xl max-w-2xl text-gray-100">
              {pageTitle}
            </h1>
          </div>
          <Search />
        </div>
      </header>

      {hasPosts ? (
        <PostGridCard>
          {posts.map((post) => {
            return (
              <PostCard
                key={post._id}
                title={post.title}
                image={post.image.trimEnd()}
                description={post.description}
                slug={post.slug}
                date={new Date(post.date).toLocaleDateString("pt-BR")}
                author={{
                  avatar: post.Author.avatar.trimEnd(),
                  name: post.Author.name,
                }}
              />
            );
          })}
        </PostGridCard>
      ) : (
        <div className="flex flex-col items-center justify-center text-gray-100 gap-8 border-dashed border-2 border-gray-300 container p-8 md:p-12 rounded-lg">
          <Inbox className="size-12 text-cyan-300" />
          <p>Nenhum post encontrado.</p>
        </div>
      )}
    </div>
  );
}
