"use client";

import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import { services } from "../utils/constants";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

function OurServices() {
  return (
    <section id="services" className="container relative py-8 ">
      <h1>our services</h1>

      <h4 className="w-full lg:w-[40%] text-darkText my-6 md:leading-[32px]">
        A marketing agency is a professional entity dedicated to the art and
        science of crafting and executing comprehensive market
      </h4>

      <div className="flex flex-col gap-12 mt-8">
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
          className="w-full"
        >
          {services.map((service, id: number) => (
            <SwiperSlide
              key={id}
              className="sm:!w-[600px] lg:!w-[700px] aspect-video "
            >
              <Image
                src={"/assets/service1.png"}
                alt="service thumbnail"
                width={600}
                height={400}
                className="rounded-md w-full"
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
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default OurServices;
