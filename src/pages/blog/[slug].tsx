import { useRouter } from "next/router";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { allPosts } from "contentlayer/generated";
import Image from "next/image";
import Link from "next/link";
import { Avatar } from "@/components/avatar";
import { AvatarTitle } from "@/components/avatar/avatar-title";

export default function PostPage() {
  const router = useRouter();

  const slug = router.query.slug as string;
  const post = allPosts.find((post) => post.slug === slug);

  if (!post) return;

  const publishedAt = new Date(post.date).toLocaleDateString("pt-BR");

  return (
    <main className="mt-32 text-gray-100">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild className="text-action-sm">
              <Link href="/blog">Blog</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <span className="text-blue-200 text-action-sm">{post.title}</span>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="container grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-6 lg:gap-12">
        <article className="bg-gray-600 rounded-lg overflow-hidden border-gray-400 border">
          <figure className="relative aspect-[16/10] w-full overflow-hidden rounded-lg">
            <Image
              src={post.image}
              alt={post.title}
              className="object-cover"
              fill
            />
          </figure>

          <header className="p-4 md:p-6 lg:p-12">
            <h1 className="text-balance mb-6 text-heading-lg md:text-heading-xl lg:text-heading-xl">
              {post.title}
            </h1>

            <Avatar.Container>
              <Avatar.Image
                src={post.Author.avatar.trimEnd()}
                alt=""
                className="rounded-full"
              />
              <Avatar.Content>
                <AvatarTitle>{post.Author.name}</AvatarTitle>
                <Avatar.Description>
                  Publicado em <time dateTime={post.date}>{publishedAt}</time>
                </Avatar.Description>
              </Avatar.Content>
            </Avatar.Container>
          </header>
        </article>
      </div>
    </main>
  );
}
