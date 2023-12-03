"use client";

import Image from "next/image";

import { teamInfo } from "@/utils/constants";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

gsap.registerPlugin(ScrollTrigger);

function OurTeam() {
  const component = useRef<HTMLElement>(null);
  const slider = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let panels = gsap.utils.toArray(".team");
      gsap.to(panels, {
        xPercent: -100 * (panels.length - 2),
        ease: "none",
        scrollTrigger: {
          trigger: component.current,
          pin: true,
          scrub: 1,
          end: () => "+=" + slider.current?.offsetWidth,
        },
      });
    }, component);
    return () => ctx.revert();
  });

  return (
    <section
      ref={component}
      className="container lg:h-screen py-10 lg:pt-4 lg:pb-10  "
    >
      <h1>our team</h1>

      <main
        ref={slider}
        className="hidden team-slider lg:flex gap-8 pt-14 pl-8"
      >
        {teamInfo.map((member) => (
          <div
            key={member.id}
            className="team
          min-w-[300px] h-full cursor-pointer  lg:min-w-[350px]"
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
          </div>
        ))}
      </main>

      {/* team slider in mobile and tablet screen -----------  */}
      <Swiper
        slidesPerView={"auto"}
        breakpoints={{
          // when window width is >= 640px
          640: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        spaceBetween={30}
        grabCursor={true}
        className="lg:!hidden w-full mt-8 sm:mt-12  h-auto "
      >
        {teamInfo.map((member) => (
          <SwiperSlide
            key={member.id}
            className="
          !w-[300px] h-full cursor-pointer  "
          >
            <Image
              alt="avatar"
              width={400}
              height={400}
              src={member.imgSrc}
              className="w-full h-[450px] rounded-lg object-cover"
              draggable={false}
            />

            <h3 className="mt-3 text-white text-lg sm:text-xl">
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
