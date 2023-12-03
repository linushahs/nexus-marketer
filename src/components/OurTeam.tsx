"use client";

import Image from "next/image";

import { teamInfo } from "@/utils/constants";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

function OurTeam() {
  const slider = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let panels = gsap.utils.toArray(".team");
      gsap.to(panels, {
        xPercent: -100 * (panels.length - 4),
        ease: "none",
        scrollTrigger: {
          trigger: slider.current,
          pin: true,
          scrub: 1,
          end: () => "+=" + slider.current?.offsetWidth,
        },
      });
    }, slider);
    return () => ctx.revert();
  });

  return (
    <section ref={slider} className="container pt-4 pb-10  ">
      <h1>our team</h1>

      <main className="team-slider flex gap-8 pt-14 ">
        {teamInfo.map((member) => (
          <div
            key={member.id}
            className="team
          min-w-[300px] h-full cursor-pointer  lg:min-w-[350px] sm:odd:mt-[60px]"
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
      {/* </Swiper> */}
    </section>
  );
}

export default OurTeam;
