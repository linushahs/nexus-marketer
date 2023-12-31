"use client";

import { ArrowUpRightIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import { motion } from "framer-motion";

const locationAndDateStyle = "sm:text-lg xl:text-xl";

export function Homepage() {
  return (
    <section id="home" className="container relative pt-4 pb-8">
      <div className="flex items-center relative">
        <motion.p
          initial={{ x: -100, opacity: 0 }}
          animate={{
            x: 0,
            opacity: 100,
            transition: { delay: 1, duration: 1 },
          }}
          className="landing-title w-[90%] sm:w-[80%] 3xl:w-[85%]"
        >
          Digital Dilemmas,
        </motion.p>
        <motion.hr
          initial={{ y: "-100%", opacity: 0 }}
          animate={{ y: 0, opacity: 100, transition: { delay: 1 } }}
          className="absolute top-1/2 right-0 flex-1 w-[15%] sm:w-[30%] lg:w-[32%] 3xl:w-[20%] border-tertiary"
        />
      </div>

      {/* headline, subtext -------------  */}
      <div className="flex flex-col lg:flex-row gap-8 items-start">
        <motion.p
          initial={{ x: -100, opacity: 0 }}
          animate={{
            x: 0,
            opacity: 100,
            transition: { delay: 1, duration: 1 },
          }}
          className="landing-title"
        >
          Problem <br />
          <span className="text-primary">Solved</span>
        </motion.p>

        <div className="w-full sm:w-2/3 ml-auto lg:m-0 lg:w-[38%]">
          <motion.p
            initial={{ y: -50, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 100,
              transition: { delay: 1.2, duration: 1 },
            }}
            className="text-tertiary mb-8 lg:my-8 sm:text-xl 3xl:text-2xl "
          >
            Nexus Marketers: Your digital growth partner. We craft compelling
            websites, employ innovative strategies, and master advanced SEO for
            elevated brand visibility and business success. Join us to amplify
            your online presence!
          </motion.p>

          <motion.span
            initial={{ x: -50, opacity: 0 }}
            animate={{
              x: 0,
              opacity: 100,
              transition: { delay: 1.5, duration: 1 },
            }}
            className="flex items-center gap-4"
          >
            <a href="#about" className="primary-btn">
              Get Started now
              <ArrowUpRightIcon className="border border-background p-1 rounded-full w-6 h-6 sm:w-8 sm:h-8 " />
            </a>
            <hr className="flex-1 border-tertiary right-8" />
          </motion.span>
        </div>
      </div>

      {/* location, launched date ---------  */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 100,
          transition: { delay: 1.7, duration: 0.6 },
        }}
        className="mt-12 lg:mt-8 mb-4 flex justify-between text-secondary lg:text-lg"
      >
        <h5 className={locationAndDateStyle}>Kathmandu, Nepal</h5>
        <h5 className={locationAndDateStyle}>2022 Nexus Marketers</h5>
      </motion.div>

      {/* thumbnail ----------  */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{
          x: 0,
          opacity: 100,
          transition: { delay: 2.2, duration: 0.6 },
        }}
      >
        <Image
          src="/assets/landing-thumbnail.png"
          alt="thumbnail"
          width={1000}
          height={300}
          priority={true}
          className="w-full rounded-lg h-[180px] sm:h-auto"
        />
      </motion.div>
    </section>
  );
}
