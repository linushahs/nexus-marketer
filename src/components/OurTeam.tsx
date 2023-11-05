"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const teamInfo = [
  {
    id: 1,
    name: "John Doe",
    position: "ceo and manager",
    imgSrc: "/assets/member-pic.png",
  },
  {
    id: 2,
    name: "John Doe",
    position: "ceo and manager",
    imgSrc: "/assets/member-pic.png",
  },
  {
    id: 3,
    name: "John Doe",
    position: "ceo and manager",
    imgSrc: "/assets/member-pic.png",
  },
  {
    id: 4,
    name: "John Doe",
    position: "ceo and manager",
    imgSrc: "/assets/member-pic.png",
  },
  {
    id: 5,
    name: "John Doe",
    position: "ceo and manager",
    imgSrc: "/assets/member-pic.png",
  },
  {
    id: 6,
    name: "John Doe",
    position: "ceo and manager",
    imgSrc: "/assets/member-pic.png",
  },
  {
    id: 7,
    name: "John Doe",
    position: "ceo and manager",
    imgSrc: "/assets/member-pic.png",
  },
];

function OurTeam() {
  return (
    <section className="container py-10  ">
      <h1>our creative teams</h1>

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
        className="w-full mt-12 sm:mt-16  text-white h-auto sm:h-[600px]"
      >
        {teamInfo.map((member) => (
          <SwiperSlide
            key={member.id}
            className="
          !w-[220px] cursor-pointer sm:!w-[280px] lg:!w-[350px] odd:mt-[60px]"
          >
            <Image
              alt="avatar"
              width={400}
              height={400}
              src={member.imgSrc}
              className="w-full rounded-lg"
              draggable={false}
            />

            <h3 className="mt-3 text-lg sm:text-xl lg:text-2xl font-[600]">
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
