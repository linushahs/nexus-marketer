"use client";

import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import gsap from "gsap";
import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { services } from "../utils/constants";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function OurServices() {
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

      console.log(serviceHeader.current?.clientHeight);

      gsap.to(slider.current, {
        translateX: -amountToScroll,
        ease: "none",
        duration: 3,
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
    <section
      id="services"
      className=" bg-background border-b border-gray-700/40 "
    >
      <div ref={component} className="min-h-screen">
        <header
          ref={serviceHeader}
          className="container border-0 py-10 lg:py-6"
        >
          <h1 className="-ml-2">our services</h1>

          <h5 className="w-full lg:w-1/2 xl:w-[40%] text-darkText my-6 md:text-xl xl:text-[22px] md:leading-[32px]">
            We offer a comprehensive suite of tailored services to support your
            business, leverage its potential, and ensure sustained growth
          </h5>
        </header>

        <main
          ref={slider}
          className="hidden lg:flex gap-8 container border-0 mb-10"
        >
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
      </div>
    </section>
  );
}
