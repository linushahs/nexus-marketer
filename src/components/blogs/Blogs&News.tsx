"use client";

import { blogs } from "@/utils/constants";
import { Swiper, SwiperSlide } from "swiper/react";
import { twMerge } from "tailwind-merge";

// Import Swiper styles
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const btnStyle =
  "py-3 px-4 w-full sm:px-8  sm:w-fit rounded-full bg-[#353535] text-white text-xl xl:text-[24px]";

const blogsCategory = ["For You", "Most Popular", "Tech", "Marketing"];

function BlogsNews() {
  return (
    <section className="container relative py-8 ">
      <h1>blogs and news</h1>

      <main className="w-full mt-10">
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
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center mt-12 sm:mt-16">
          <div className="hidden sm:flex gap-8">
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
            className="sm:!hidden w-full  text-white h-[60px]"
          >
            {blogsCategory.map((category) => (
              <SwiperSlide className="!w-[180px]" key={category}>
                <button draggable={false} className={btnStyle}>
                  {category}
                </button>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="hidden sm:flex lg:ml-4 xl:w-1/2 relative  justify-end">
            <input
              type="text"
              className="lg:w-full xl:w-2/3 rounded-full py-[9px] px-6 text-[24px] bg-[#353535]  focus:outline-tertiary focus:ring-transparent text-gray-400"
            />
            <MagnifyingGlassIcon className="absolute inset-y-2 right-4 w-9 h-9 text-white" />
            S
          </div>
        </div>
      </main>
    </section>
  );
}

export default BlogsNews;
