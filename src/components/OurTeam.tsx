"use client";

import Image from "next/image";

import { teamInfo } from "@/utils/constants";
import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function OurTeam() {
  const component = useRef<HTMLDivElement>(null);
  const slider = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let ctx = gsap.context(() => {
      let mm = gsap.matchMedia();
      mm.add(
        {
          isDesktop: `(min-width: 1320px)`,
          isMobile: `(max-width: 1319px)`,
        },
        (context: any) => {
          let { isDesktop } = context.conditions;
          let panels = gsap.utils.toArray(".team");
          gsap.to(panels, {
            xPercent: isDesktop
              ? -68 * panels.length + 132
              : -100 * (panels.length - 2),
            ease: "none",
            scrollTrigger: {
              trigger: component.current,
              pin: true,
              scrub: 1,
              start: "top top",
              end: () => "+=" + slider.current?.offsetWidth,
              markers: true,
            },
          });
        }
      );
    }, component);
    return () => ctx.revert();
  }, []);

  return (
    <section className="container team-container">
      <div ref={component} className=" lg:h-screen pb-10 xl:pb-6">
        <h1 className="pt-4 pb-8">our team</h1>
        <main ref={slider} className="hidden team-slider lg:flex gap-8  pl-8">
          {teamInfo.map((member) => (
            <div
              key={member.id}
              className="team
          min-w-[30%] cursor-pointer xl:min-w-[22%]"
            >
              <Image
                alt="avatar"
                width={400}
                height={400}
                src={member.imgSrc}
                className="w-full h-[85%] rounded-lg object-cover"
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
          spaceBetween={18}
          grabCursor={true}
          className="lg:!hidden !w-full mt-8 md:mt-12  h-auto !rounded-lg"
        >
          {teamInfo.map((member) => (
            <SwiperSlide
              key={member.id}
              className="!w-[300px]  h-full cursor-pointer  "
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
      </div>
    </section>
  );
}
