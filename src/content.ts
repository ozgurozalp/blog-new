import { createSource } from "mdxts";

export const allBlogs = createSource("blog/*.mdx", {
  baseDirectory: "src/blog",
  sort: (a, b) => {
    return new Date(a.createdAt!).getTime() - new Date(b.createdAt!).getTime();
  },
});
