"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { teamInfo } from "@/utils/constants";

function OurTeam() {
  return (
    <section className="container py-10  ">
      <h1>our team</h1>

      <Swiper
        slidesPerView={"auto"}
        breakpoints={{
          // when window width is >= 640px
          640: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        spaceBetween={30}
        grabCursor={true}
        className="w-full mt-8 sm:mt-12  h-auto sm:h-[600px]"
      >
        {teamInfo.map((member) => (
          <SwiperSlide
            key={member.id}
            className="
          !w-[300px] h-full cursor-pointer  lg:!w-[350px] sm:odd:mt-[60px]"
          >
            <Image
              alt="avatar"
              width={400}
              height={400}
              src={member.imgSrc}
              className="w-full h-[450px] rounded-lg object-cover"
              draggable={false}
            />

            <h3 className="mt-3 text-white text-lg sm:text-xl lg:text-2xl">
              {member.name}
            </h3>
            <p className="capitalize sm:text-lg mt-0.5 text-gray-300 ">
              {member.position}
            </p>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default OurTeam;
