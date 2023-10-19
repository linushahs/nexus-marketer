import { ArrowUpRightIcon } from "@heroicons/react/20/solid";
import Image from "next/image";

function Homepage() {
  return (
    <section className="container relative py-8">
      <div className="flex items-center relative">
        <h1 className="w-[90%] sm:w-[80%] 3xl:w-[85%]">Digital Dilemmas,</h1>
        <hr className="absolute top-1/2 right-0 w-[15%] sm:w-[20%] lg:w-[25%] 3xl:w-[15%] border-tertiary" />
      </div>

      {/* headline, subtext -------------  */}
      <div className="flex flex-col lg:flex-row gap-8 items-start">
        <h1>
          Problemos <br />
          <span className="text-primary">Solved</span>
        </h1>

        <div className="w-full sm:w-2/3 ml-auto lg:m-0 lg:w-1/3">
          <p className="text-tertiary mb-8 lg:my-8 xl:text-lg 3xl:text-xl">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est fugit
            dolores, magni, itaque quis dicta asperiores omnis similique
            excepturi voluptate ullam nam fuga soluta eveniet ducimus beatae
            debitis. Ea, nostrum.
          </p>

          <span className="flex items-center gap-4">
            <button className="primary-btn">
              Get Started now
              <ArrowUpRightIcon className="border border-background p-1 rounded-full w-6 h-6 sm:w-8 sm:h-8 " />
            </button>
            <hr className="w-full border-tertiary right-8" />
          </span>
        </div>
      </div>

      {/* location, launched date ---------  */}
      <div className="mt-12 lg:mt-8 mb-4 flex justify-between text-secondary lg:text-lg">
        <h4>Kathmandu, Nepal</h4>
        <h4>2022 Nexus Marketers</h4>
      </div>

      {/* thumbnail ----------  */}
      <Image
        src="/assets/landing-thumbnail.png"
        alt="thumbnail"
        width={1000}
        height={200}
        priority={true}
        className="w-full"
      />
    </section>
  );
}

export default Homepage;
