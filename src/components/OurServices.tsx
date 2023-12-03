"use client";

import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import gsap from "gsap";
import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import { services } from "../utils/constants";

function OurServices() {
  const slider = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let panels = gsap.utils.toArray(".service");
      gsap.to(panels, {
        xPercent: -50 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: slider.current,
          pin: true,
          scrub: 2,
          end: () => "+=" + slider.current?.offsetWidth,
        },
      });
    }, slider);
    return () => ctx.revert();
  });

  return (
    <section ref={slider} id="services" className="container relative py-8">
      <h1 className="-ml-2">our services</h1>

      <h5 className="w-full lg:w-[40%] text-darkText my-6 text-xl xl:text-[22px] md:leading-[32px]">
        A marketing agency is a professional entity dedicated to the art and
        science of crafting and executing comprehensive market
      </h5>

      <main className="flex gap-8 mt-8 pb-10">
        {services.map((service, id: number) => (
          <div key={id} className="service sm:min-w-[600px] lg:min-w-[700px] ">
            <Image
              src={service.imgSrc}
              alt="service thumbnail"
              width={600}
              height={400}
              className="h-[300px] lg:h-[380px] rounded-md w-full bg-white object-cover"
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
    </section>
  );
}

export default OurServices;
