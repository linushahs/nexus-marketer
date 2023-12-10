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
  const serviceHeader = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let ctx = gsap.context(() => {
      let { scrollWidth, offsetWidth } = slider.current as any;
      let amountToScroll = scrollWidth - offsetWidth + 32;
      let endOfScroll =
        amountToScroll + (serviceHeader.current?.clientHeight as number);

      gsap.to(slider.current, {
        translateX: -amountToScroll,
        ease: "none",
        duration: 5,
        scrollTrigger: {
          trigger: component.current,
          pin: true,
          scrub: 1,
          start: "0 top",
          end: () => "+=" + endOfScroll,
          markers: true,
        },
      });
    }, component);

    const delayedCall = gsap.delayedCall(1, () => {
      ScrollTrigger.refresh();
    });

    //cleanup function
    return () => {
      ctx.revert();
      delayedCall.kill();
    };
  }, []);

  return (
    <section className="bg-background border-b border-gray-700/40">
      <div ref={component} className=" lg:h-screen ">
        <header
          ref={serviceHeader}
          className="container border-0 py-10 lg:py-6"
        >
          <h1>our team</h1>
        </header>

        {/* team member slider in desktop -----------  */}
        <main
          ref={slider}
          className="container hidden team-slider lg:flex gap-8 pt-4 ml-2 border-0"
        >
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
