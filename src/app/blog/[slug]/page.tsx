import BlogDescription from "@/components/blogs/BlogDescription";
import PopularBlogs from "@/components/blogs/PopularBlogs";

function BlogPage() {
  return (
    <section className="container h-full py-6 flex gap-8 items-start">
      <BlogDescription />
      <PopularBlogs />
    </section>
  );
}

export default BlogPage;
