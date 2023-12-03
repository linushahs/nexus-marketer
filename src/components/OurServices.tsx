"use client";

import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import gsap from "gsap";
import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import { services } from "../utils/constants";
import { Swiper, SwiperSlide } from "swiper/react";

function OurServices() {
  const component = useRef<HTMLElement>(null);
  const slider = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let panels = gsap.utils.toArray(".service");
      gsap.to(panels, {
        xPercent: -100 * (panels.length - 2),
        ease: "none",
        scrollTrigger: {
          trigger: component.current,
          pin: true,
          scrub: 2,
          end: () => "+=" + slider.current?.offsetWidth,
        },
      });
    }, component);
    return () => ctx.revert();
  });

  return (
    <section
      ref={component}
      id="services"
      className="container  py-10 lg:pt-6 lg:pb-10 lg:h-screen"
    >
      <h1 className="-ml-2">our services</h1>

      <h5 className="w-full lg:w-[40%] text-darkText my-6 md:text-xl xl:text-[22px] md:leading-[32px]">
        A marketing agency is a professional entity dedicated to the art and
        science of crafting and executing comprehensive market
      </h5>

      <main ref={slider} className="hidden lg:flex gap-8 mt-8 pb-10 pl-8">
        {services.map((service, id: number) => (
          <div
            key={id}
            className="service sm:min-w-[600px] lg:min-w-[560px] 2xl:min-w-[700px]"
          >
            <Image
              src={service.imgSrc}
              alt="service thumbnail"
              width={600}
              height={400}
              className="h-[300px] 2xl:h-[380px] rounded-md w-full bg-white object-cover"
            />
            <div className="flex justify-between items-center text-secondary mt-6">
              <h4 className="w-1/2 sm:w-fit">{service.title}</h4>
              <a
                href="#"
                className="flex gap-3 items-center sm:text-lg lg:text-xl"
              >
                Learn more{" "}
                <ArrowUpRightIcon className="border border-secondary p-2 rounded-full w-8 h-8 " />
              </a>
            </div>
          </div>
        ))}
      </main>

      {/* slider in mobile and tablet screen -------------  */}
      <Swiper
        slidesPerView={1}
        breakpoints={{
          // when window width is >= 640px
          640: {
            slidesPerView: "auto",
            spaceBetween: 30,
          },
        }}
        spaceBetween={15}
        grabCursor={true}
        className="lg:!hidden w-full"
      >
        {services.map((service, id: number) => (
          <SwiperSlide
            key={id}
            className="sm:!w-[600px] lg:!w-[700px] aspect-video "
          >
            <Image
              src={service.imgSrc}
              alt="service thumbnail"
              width={600}
              height={400}
              className="h-[230px] sm:h-[300px] rounded-lg w-full bg-white object-cover"
            />
            <div className="flex justify-between items-center text-secondary mt-4">
              <h4 className="w-1/2 sm:w-fit">{service.title}</h4>
              <a
                href="#"
                className="flex gap-3 items-center sm:text-lg lg:text-xl"
              >
                Learn more{" "}
                <ArrowUpRightIcon className="border border-secondary p-2 rounded-full w-8 h-8 " />
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default OurServices;
