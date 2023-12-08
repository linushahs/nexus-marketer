"use client";

import BlogDescription from "@/components/blogs/BlogDescription";
import BlogHeader from "@/components/blogs/BlogHeader";
import PopularBlogs from "@/components/blogs/PopularBlogs";
import { postSlugGroq } from "@/utils/groq";
import { Blog } from "@/utils/interface";
import sanityClient from "@/utils/sanityClient";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

function BlogPage() {
  const [blogDesc, setBlogDesc] = useState<Blog | null>(null);
  const { slug } = useParams();

  useEffect(() => {
    sanityClient.fetch(postSlugGroq(slug)).then((res) => {
      setBlogDesc(res[0]);
    });
  }, [slug]);

  return (
    <section className="container h-full py-6 flex flex-col lg:flex-row lg:gap-8 justify-between items-start">
      <div className="flex-1 flex flex-col">
        <BlogHeader blogDesc={blogDesc} />
        <BlogDescription blogDesc={blogDesc} className="hidden lg:block" />
      </div>

      <div className="lg:w-[36%] flex flex-col md:flex-row gap-4">
        <BlogDescription blogDesc={blogDesc} className="lg:hidden" />
        <PopularBlogs />
      </div>
    </section>
  );
}

export default BlogPage;
