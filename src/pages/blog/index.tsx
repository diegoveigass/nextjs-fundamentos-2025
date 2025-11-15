import { Search } from "@/components/search";

export default function BlogPage() {
  return (
    <div className="flex flex-col py-24 flex-grow h-full">
      <header>
        <div className="container space-y-6 flex flex-col items-start justify-between md:flex-row md:items-end lg:items-end">
          <div className="flex flex-col gap-4 md:p-0">
            <span className="uppercase text-body-tag text-cyan-100 rounded-md w-fit text-center py-2 px-4 bg-cyan-300 md:text-left">
              Blog
            </span>

            <h1 className="text-balance text-start md:text-left text-heading-lg md:text-heading-xl max-w-2xl text-gray-100">
              Dicas e estratégias para impulsionar seu negócio
            </h1>
          </div>
          <Search />
        </div>
      </header>
    </div>
  );
}
