import { allBlogs } from "@/content";
import Image from "next/image";
import Link from "next/link";
import { TypographyH4 } from "@/components/typography/TypographyH4";
import { TypographyP } from "@/components/typography/TypographyP";
import { TypographyH1 } from "@/components/typography/TypographyH1";

export default function Page() {
  const blogs = allBlogs.all();

  return (
    <div className="container space-y-10 py-4">
      <TypographyH1 className="text-center mx-auto">
        Welcome to my blog! Here are some of my latest posts.
      </TypographyH1>
      <div className="grid grid-cols-4 gap-4">
        {blogs.map((blog, index) => (
          <article
            className="border border-gray-200 flex flex-col gap-4 rounded-md overflow-hidden"
            key={index}
          >
            <Link
              className="block relative overflow-hidden"
              href={blog.pathname}
            >
              <Image
                width={1280}
                height={720}
                src={blog.frontMatter.coverImage}
                alt={blog.frontMatter.title}
                className="hover:scale-105 transition-transform duration-300 ease-in-out"
              />
            </Link>
            <div className="px-4 pb-4 flex flex-col gap-2">
              <TypographyH4>
                <Link href={blog.pathname}>{blog.frontMatter.title}</Link>
              </TypographyH4>
              <TypographyP>{blog.frontMatter.description}</TypographyP>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
