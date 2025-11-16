import Image from "next/image";
import Link from "next/link";

interface Author {
  name: string;
  avatar: string;
}

interface PostCardProps {
  slug: string;
  title: string;
  description: string;
  image: string;
  date: string;
  author: Author;
}

export function PostCard({
  slug,
  title,
  description,
  image,
  date,
  author,
}: PostCardProps) {
  return (
    <Link
      href={`/blog/${slug}`}
      className="w-full max-w-2xl rounded-[12px] border border-gray-400 hover:border-blue-300 bg-gray-600 overflow-hidden transition-all duration-300"
    >
      <div className="p-2 rounded-md overflow-hidden">
        <div className="relative">
          <div className="absolute top-0 right-0 px-3 py-1 bg-gray-600 backdrop-blur-sm rounded-bl-[10px]">
            <span className="text-gray-300 text-body-xs ">{date}</span>
          </div>
          <Image
            alt=""
            src={image}
            width={288}
            height={144}
            className="w-full h-40 object-cover object-center rounded-lg"
          />
        </div>

        <div className="px-2 mt-4 space-y-4">
          <h2 className="text-heading-xs text-gray-100 font-sans">{title}</h2>

          <p className="text-body-xs text-gray-300 line-clamp-2">
            {description}
          </p>

          <div className="flex items-center gap-3 border-t border-t-gray-400 py-4">
            <Image
              src={author.avatar}
              alt=""
              className="object-cover size-5 rounded-full border border-blue-200 md:size-6 overflow-hidden"
              width={24}
              height={24}
            />
            <span className="text-body-xs text-gray-300">{author.name}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
