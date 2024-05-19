import { BlogCard } from "@/components/shared/blog-card";
import { allBlogs } from "@/../content";

export default function BlogList() {
  const blogs = allBlogs.all();
  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-6">
      {blogs.map((blog, index) => (
        <BlogCard key={index} blog={blog} />
      ))}
    </div>
  );
}
