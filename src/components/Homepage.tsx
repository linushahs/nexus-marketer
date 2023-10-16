import { ArrowUpRightIcon } from "@heroicons/react/20/solid";
import ArrowUpRight from "./assets/ArrowUpRight";
import Image from "next/image";

function Homepage() {
  return (
    <section className="container relative py-10">
      <div className="flex items-center relative">
        <h1 className="w-full">Digital Dilemmas,</h1>
        <hr className="absolute top-1/2 right-0 w-[400px] border-tertiary" />
      </div>

      {/* headline, subtext -------------  */}
      <div className="flex gap-8 items-start">
        <h1>
          Problemos <br />
          <span className="text-primary">Solved</span>
        </h1>

        <div className="w-1/3">
          <p className="text-tertiary my-8 xl:text-lg 3xl:text-xl">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est fugit
            dolores, magni, itaque quis dicta asperiores omnis similique
            excepturi voluptate ullam nam fuga soluta eveniet ducimus beatae
            debitis. Ea, nostrum.
          </p>

          <span className="flex items-center gap-4">
            <button className="primary-btn">
              Get Started now
              <ArrowUpRightIcon className="border border-background p-1 rounded-full w-8 h-8 " />
            </button>
            <hr className="w-full border-tertiary right-8" />
          </span>
        </div>
      </div>

      {/* location, launched date ---------  */}
      <div className="my-4 flex justify-between text-secondary text-lg">
        <h3>Kathmandu, Nepal</h3>
        <h3>2022 Nexus Marketers</h3>
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
