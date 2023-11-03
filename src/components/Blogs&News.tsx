"use client";

import { blogs } from "@/utils/constants";
import { Swiper, SwiperSlide } from "swiper/react";
import { twMerge } from "tailwind-merge";

// Import Swiper styles
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const btnStyle = "py-2 rounded-full bg-[#353535] text-white px-8 text-[24px]";

function BlogsNews() {
  return (
    <section className="container relative py-8 ">
      <h1>blogs and news</h1>

      <main className="w-full mt-10">
        <Swiper
          slidesPerView={"auto"}
          breakpoints={{
            // when window width is >= 640px
            640: {
              slidesPerView: 3,
            },
          }}
          spaceBetween={30}
          grabCursor={true}
          className="w-full h-[300px] sm:h-[450px]"
        >
          {blogs?.map((blog) => (
            <SwiperSlide
              key={blog.id}
              className={twMerge(
                " relative rounded-md bg-cover bg-center z-30 "
              )}
              style={{ backgroundImage: `url(${blog.imgSrc})` }}
            >
              {/* black background ----  */}
              <div className="w-full h-full absolute top-0 left-0 bg-black/20 -z-10"></div>

              <div className="p-6 text-white flex flex-col justify-between h-full">
                {/* top section -----  */}
                <div>
                  <span className="text-lg">{blog.publishedDate}</span>
                  <h4 className="mt-2 text-[36px] leading-[42px] capitalize">
                    {blog.title}
                  </h4>
                </div>

                {/* bottom section ----------  */}
                <div className="flex justify-between">
                  <h3>By {blog.author}</h3>
                  <a
                    role="link"
                    aria-disabled
                    className="capitalize cursor-pointer text-lg"
                  >
                    Read now
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* options: and search field- -----------  */}
        <div className="flex justify-between items-center mt-16">
          <div className="flex gap-8">
            <button className={btnStyle + " border-2 border-secondary"}>
              For You
            </button>
            <button className={btnStyle}>Most Popular</button>
            <button className={btnStyle}>Tech</button>
            <button className={btnStyle}>Marketing</button>
          </div>

          <div className="w-1/2 relative flex justify-end">
            <input
              type="text"
              className="w-2/3 rounded-full py-2 px-6 text-[24px] bg-[#353535]  focus:outline-tertiary focus:ring-transparent text-gray-400"
            />
            <MagnifyingGlassIcon className="absolute inset-y-2 right-4 w-8 h-8 text-white" />
          </div>
        </div>
      </main>
    </section>
  );
}

export default BlogsNews;
