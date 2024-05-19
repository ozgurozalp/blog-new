import { createSource } from "mdxts";

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
  categories: string[];
};

export const allBlogs = createSource<{
  frontMatter: BlogMeta;
}>("../blog/*.mdx", {
  sort: (a, b) => {
    return new Date(a.createdAt!).getTime() - new Date(b.createdAt!).getTime();
  },
});
