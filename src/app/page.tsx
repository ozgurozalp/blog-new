import { allBlogs } from "@/content";
import { BlogCard } from "@/components/shared/blog-card";

export default function Page() {
  const blogs = allBlogs.all();

  return (
    <div className="container space-y-10 py-4">
      <div className="grid grid-cols-3 gap-4">
        {blogs.map((blog, index) => (
          <BlogCard key={index} blog={blog} />
        ))}
      </div>
    </div>
  );
}
