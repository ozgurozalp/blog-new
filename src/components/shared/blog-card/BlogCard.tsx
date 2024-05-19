import styles from "./style.module.css";
import { cn, dateFormat } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { allBlogs } from "@/content";

interface BlogCardProps {
  blog: ReturnType<typeof allBlogs.all>[number];
}

export default function BlogCard({ blog }: BlogCardProps) {
  return (
    <article className={cn(styles.blogCardContainer)}>
      <Link className={cn(styles.blogCardCover)} href={blog.pathname}>
        <Image
          width={1980}
          height={1200}
          alt={blog.frontMatter.title}
          src={blog.frontMatter.coverImage}
          className="block object-cover aspect-video w-full h-full absolute inset-0"
        />
      </Link>
      <div className="md:p-8 flex flex-col gap-4 md:pt-0">
        <div className="flex flex-col gap-1">
          <div className="flex mt-auto justify-between">
            <time
              dateTime={blog.frontMatter.createdAt.toString()}
              className={cn(styles.blogCardDate)}
            >
              {dateFormat(blog.frontMatter.createdAt)}
            </time>
            <div className={cn(styles.blogCardTags)}>
              {blog.frontMatter.categories.map((tag: string, index: number) => (
                <Link
                  key={index}
                  className={cn(styles.blogCardTagLink)}
                  href={`/blog/tag/${tag}`}
                >
                  #{tag}
                </Link>
              ))}
            </div>
          </div>
          <Link href={blog.pathname}>
            <h2 className={cn(styles.blogCardTitle)}>
              {blog.frontMatter.title}
            </h2>
          </Link>
        </div>
        <p className={cn(styles.blogCardDescription)}>
          {blog.frontMatter.description}
        </p>
        <div className={cn(styles.blogCardAuthor)}>
          <figure className={cn(styles.blogCardAuthorFigure)}>
            <span className="absolute inset-0 block">
              <Image
                width={34}
                height={34}
                alt={blog.frontMatter.author.name}
                src={blog.frontMatter.author.avatar}
                className="rounded-full absolute h-full w-full object-cover inset-0"
              />
            </span>
          </figure>
          <div className="flex flex-col">
            <Link
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-balance text-base md:text-xl leading-[none]"
              href={blog.frontMatter.author.url}
            >
              <span>{blog.frontMatter.author.name}</span>
            </Link>
            <span className="text-sm leading-[none]">
              {blog.frontMatter.author.title}
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}
