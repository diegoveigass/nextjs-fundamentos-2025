import Image from "next/image";
import Link from "next/link";

export function PostCard() {
  return (
    <Link
      href={`/blog/`}
      className="w-full max-w-2xl rounded-3xl border border-gray-400 hover:border-blue-300 bg-gray-600 overflow-hidden transition-all duration-300"
    >
      <div className="p-2 rounded-md overflow-hidden">
        <div className="relative rounded-lg overflow-hidden">
          <div className="absolute top-0 right-0 px-3 py-1">
            <span className="text-gray-300 text-body-xs">22/04/1995</span>
          </div>
          <Image
            alt=""
            src="/assets/primeiro-post.png"
            width={288}
            height={144}
            className="w-full h-40 object-cover object-center overflow-hidden"
          />
        </div>

        <div className="px-2 mt-4 space-y-4">
          <h2 className="text-heading-xs text-gray-100 font-sans">
            Transformando seu negócio em uma loja virtual
          </h2>

          <p className="text-body-xs text-gray-300 line-clamp-2">
            Se você está buscando uma maneira simples e eficaz de vender seus
            produtos online, o Site.Set é a solução perfeita para você. Criar
            uma loja virtual de sucesso nunca foi tão fácil. Com nossa
            plataforma intuitiva, você pode criar um site profissional para sua
            loja em minutos, sem precisar de conhecimentos técnicos.
          </p>

          <div className="flex items-center gap-3 border-t border-t-gray-400 py-4">
            <Image
              src="/customer-01.png"
              alt=""
              className="object-cover size-5 rounded-full border border-blue-200 md:size-6 overflow-hidden"
              width={24}
              height={24}
            />
            <span className="text-body-xs text-gray-300">Diego Veiga</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
