"use client";

import { useState, useEffect } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { twMerge } from "tailwind-merge";
import { Blog } from "@/utils/interface";
import sanityClient from "@/utils/sanityClient";
import { convertDateFormat, fetchBlogAuthor, urlFor } from "@/utils/helpers";
import { resolve } from "styled-jsx/macro";
import { postGroq } from "@/utils/groq";

const btnStyle =
  "py-3 px-4 w-full sm:px-6 lg:px-8  xl:w-fit rounded-full bg-[#353535] text-white sm:text-xl xl:text-[24px]";

const blogsCategory = ["For You", "Most Popular", "Tech", "Marketing"];

function BlogsNews() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const router = useRouter();

  useEffect(() => {
    sanityClient.fetch(postGroq()).then(async (res) => {
      setBlogs(res);
    });
  }, []);

  return (
    <section id="blogs" className="container relative py-8 ">
      <h1>blogs and news</h1>

      <main className="w-full mt-8 lg:mt-12">
        {blogs.length === 0 ? (
          <main className="flex gap-6 overflow-hidden w-full h-[420px] sm:h-[450px]">
            {new Array(3).fill(0).map((_, id) => (
              <div
                key={id}
                className="rounded-lg min-w-[360px] sm:flex-1 bg-card animate-pulse "
              ></div>
            ))}
          </main>
        ) : (
          <Swiper
            slidesPerView={1}
            breakpoints={{
              // when window width is >= 640px
              640: {
                slidesPerView: 2,
              },
              1366: {
                slidesPerView: 3,
              },
            }}
            spaceBetween={30}
            grabCursor={true}
            className="w-full h-[420px] sm:h-[450px]"
          >
            {blogs?.map((blog) => (
              <SwiperSlide
                key={blog._id}
                className={twMerge(
                  " relative rounded-md bg-cover bg-center z-30 !cursor-pointer "
                )}
                style={{
                  backgroundImage: `url(${blog.mainImage.asset.url})`,
                }}
              >
                {/* black background ----  */}
                <div className="w-full h-full absolute top-0 left-0 bg-black/60 -z-10"></div>

                <div className="p-6 text-white flex flex-col justify-between h-full">
                  {/* top section -----  */}
                  <div>
                    <span className="sm:text-lg">
                      {convertDateFormat(blog._createdAt)}
                    </span>
                    <h4 className="mt-2 text-[26px] leading-[32px] lg:text-[36px] lg:leading-[42px] capitalize">
                      {blog.title}
                    </h4>
                  </div>

                  {/* bottom section ----------  */}
                  <div className="flex justify-between items-center">
                    <h4>By {blog.author.name}</h4>
                    <button
                      onClick={() =>
                        router.replace(`/blog/${blog.slug.current}`)
                      }
                      className="border border-gray-200 py-1 px-3 rounded-lg capitalize cursor-pointer text-lg"
                    >
                      Read now
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}

        {/* options: and search field- -----------  */}
        <div className="flex flex-row gap-8 lg:justify-between mt-8 sm:mt-12">
          <div className="hidden xl:flex gap-8">
            <button className={btnStyle + " border-2 border-secondary"}>
              For You
            </button>
            <button className={btnStyle}>Most Popular</button>
            <button className={btnStyle}>Tech</button>
            <button className={btnStyle}>Marketing</button>
          </div>

          {/* ---button slider for mobile responsive  */}
          {/* ---------------------------------------- */}
          <Swiper
            slidesPerView={"auto"}
            spaceBetween={20}
            grabCursor={true}
            className="xl:!hidden w-full !rounded-full  text-white h-[55px] lg:h-[60px]"
          >
            {blogsCategory.map((category) => (
              <SwiperSlide className="!w-[140px] sm:!w-[190px]" key={category}>
                <button className={btnStyle}>{category}</button>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="hidden sm:flex lg:ml-4 sm:w-2/3 xl:w-1/3 relative  justify-end">
            <input
              type="text"
              className="sm:w-full h-full rounded-full sm:py-1.5 lg:py-2 px-6 text-xl lg:text-[24px] bg-[#353535]  focus:outline-tertiary focus:ring-transparent text-gray-400"
              placeholder="Search for blogs & news"
            />
            <MagnifyingGlassIcon className="absolute inset-y-2.5 right-4 w-9 h-9 text-white" />
          </div>
        </div>
      </main>
    </section>
  );
}

export default BlogsNews;
