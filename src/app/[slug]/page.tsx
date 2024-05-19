import { notFound } from "next/navigation";
import { allBlogs } from "@/../content";
import { dateFormat } from "@/lib/utils";
import Image from "next/image";

type Props = { params: { slug: string } };

export default async function Page({ params }: Props) {
  const doc = await allBlogs.get("/blog/" + params.slug);

  if (!doc) {
    return notFound();
  }

  const { Content, frontMatter } = doc;

  const Document = Content as JSX.ElementType;

  return (
    <article>
      <div className="flex flex-col">
        <div className="container">
          <div className="flex flex-col gap-4 pt-4">
            <h1 className="font-display max-w-2xl text-2xl font-extrabold text-[--tw-prose-headings] sm:text-4xl text-balance sm:leading-snug">
              {frontMatter.title}
            </h1>
            <time
              dateTime={frontMatter.createdAt.toString()}
              className="text-sm text-gray-500 transition-colors hover:text-gray-800"
            >
              {dateFormat(frontMatter.createdAt)}
            </time>
            <p className="sm:text-lg max-w-4xl text-[#374151] text-pretty">
              {frontMatter.description}
            </p>
          </div>
        </div>
        <div className="relative">
          <div className="hidden md:block absolute top-52 h-[calc(100%-13rem)] w-full border border-gray-200 bg-white/50 shadow-[inset_10px_-50px_94px_0_rgb(199,199,199,0.2)] backdrop-blur-lg" />
          <div className="w-full container grid grid-cols-3 gap-5 pt-4 md:pt-10 lg:gap-10">
            <div className="relative col-span-3 flex flex-col bg-white sm:rounded-t-xl sm:border sm:border-gray-200 md:col-span-2">
              <Image
                className="aspect-video rounded-t-xl object-cover"
                width={1920}
                height={1080}
                src={frontMatter.coverImage}
                alt={frontMatter.title}
              />
              <div className="prose p-4 sm:p-6 max-w-full prose-gray transition-all prose-headings:relative prose-headings:scroll-mt-20 prose-headings:font-display prose-headings:font-bold">
                <Document />
              </div>
            </div>
            <div className="sticky top-16 lg:top-1 col-span-1 hidden flex-col divide-y divide-gray-200 self-start sm:flex">
              <div className="flex flex-col gap-y-3 pt-2">
                <p className="text-sm font-semibold text-gray-500">Author</p>
                <a
                  className="group flex items-center gap-x-3"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={frontMatter.author.url}
                >
                  <Image
                    alt={frontMatter.author.name}
                    loading="lazy"
                    width={44}
                    height={44}
                    className="rounded-full size-11 transition-all group-hover:brightness-90"
                    src={frontMatter.author.avatar}
                  />
                  <div>
                    <p className="font-semibold text-gray-700">
                      {frontMatter.author.name}
                    </p>
                    <p className="font-medium text-xs text-gray-600">
                      {frontMatter.author.title}
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
