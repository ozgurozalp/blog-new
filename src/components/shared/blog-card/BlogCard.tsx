import styles from "./style.module.css";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default function BlogCard({ blog }: any) {
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
      <time
        dateTime={blog.frontMatter.createdAt}
        className={cn(styles.blogCardDate)}
      >
        {new Date(blog.frontMatter.createdAt).toLocaleDateString("en-US", {
          weekday: "long",
          year: "numeric",
          month: "short",
          day: "numeric",
        })}
      </time>
      <Link className={cn(styles.blogCardTitle)} href={blog.pathname}>
        <h2 className="font-cal leading-[100%] !leading-xs text-[32px] inline-block text-balance">
          {blog.frontMatter.title}
        </h2>
      </Link>
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
        <Link
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline text-balance text-[22px] leading-none"
          href={blog.frontMatter.author.url}
        >
          <span>{blog.frontMatter.author.name}</span>
        </Link>
        <span className="text-base leading-none">
          {blog.frontMatter.author.title}
        </span>
      </div>
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
    </article>
  );
}
