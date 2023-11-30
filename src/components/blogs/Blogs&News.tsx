"use client";

import { blogs } from "@/utils/constants";
import { Swiper, SwiperSlide } from "swiper/react";
import { twMerge } from "tailwind-merge";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const btnStyle =
  "py-3 px-4 w-full sm:px-6 lg:px-8  xl:w-fit rounded-full bg-[#353535] text-white sm:text-xl xl:text-[24px]";

const blogsCategory = ["For You", "Most Popular", "Tech", "Marketing"];

function BlogsNews() {
  return (
    <section className="container relative py-8 ">
      <h1>blogs and news</h1>

      <main className="w-full mt-8 lg:mt-20">
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
                  <span className="sm:text-lg">{blog.publishedDate}</span>
                  <h4 className="mt-2 text-[26px] leading-[32px] lg:text-[36px] lg:leading-[42px] capitalize">
                    {blog.title}
                  </h4>
                </div>

                {/* bottom section ----------  */}
                <div className="flex justify-between">
                  <h4>By {blog.author}</h4>
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
        <div className="flex flex-row gap-8 lg:justify-between mt-8 sm:mt-16">
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
