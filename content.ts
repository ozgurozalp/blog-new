import { createSource } from "mdxts";
import type { Category } from "@/lib/constants";

export type BlogMeta = {
  title: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  coverImage: string;
  author: {
    name: string;
    url: string;
    title: string;
    avatar: string;
  };
  categories: Category[];
};

export const allBlogs = createSource<{
  frontMatter: BlogMeta;
}>("blogs/*.mdx", {
  baseDirectory: "blogs",
  sort: (a, b) => {
    return (
      b.frontMatter.createdAt.getTime() - a.frontMatter.createdAt.getTime()
    );
  },
});
