import Image from "next/image";
import "./css/achievement.css";
import { achievements } from "@/utils/constants";

function Achievements() {
  return (
    <section className="container relative pt-8 pb-16">
      <h1>
        Championing <br /> Achievements, <br />{" "}
        <span className="text-primary">one milestone</span> at <br />a time
      </h1>

      <div className="flex flex-col gap-8 mt-8">
        {achievements.map(({ id, title, subTitle, imgSrc, description }) => (
          <div key={id} className="sticky-container sticky top-0 shadow-lg">
            {/* achievement body ----  */}
            <div className="sticky-body py-8 px-6 sm:px-4 flex flex-col sm:flex-row rounded-lg">
              {/* left section ----    */}
              <div className="w-full mb-8 sm:m-0 sm:w-1/2  flex flex-col text-white justify-center items-center rounded-lg">
                <span className="sm:text-lg lg:text-xl py-1 px-4 rounded-full border border-secondary text-secondary capitalize">
                  {subTitle}
                </span>

                <h2 className="text-center my-8">{title}</h2>
                {/* <p className="mt-6 mb-8 text-center text-secondary w-[60%]">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Consequatur repellat obcaecati aut rerum, quibusdam fugit quo
                  aliquid.
                </p> */}

                <button
                  disabled
                  aria-disabled
                  className="mt-3 sm:text-lg lg:text-xl  font-medium bg-primary rounded-full py-1.5 px-6 text-black capitalize disabled:bg-primary/60"
                >
                  view project
                </button>
              </div>

              {/* right section ---------  */}
              <Image
                src={imgSrc}
                alt="achievement-thumbnail"
                width={800}
                height={300}
                className="w-full sm:w-1/2 h-[200px] sm:h-[450px] xl:h-[600px] object-cover object-left-top"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Achievements;
