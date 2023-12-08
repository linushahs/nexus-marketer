import Image from "next/image";
import "./css/achievement.css";
import { achievements } from "@/utils/constants";

const paginationBtnStyle = {
  default:
    "w-9 h-9 lg:w-11 lg:h-11 grid place-items-center rounded-full border border-black text-black text-lg lg:text-xl",
  active: "bg-black text-white",
};

export function Achievements() {
  return (
    <section id="achievement" className="container relative pt-8 pb-16">
      <h1>
        Championing <br /> Achievements, <br />
        <span className="text-primary">one milestone</span> at <br />a time
      </h1>

      <div className="flex flex-col gap-8 mt-8">
        {achievements.map(({ id, title, subTitle, imgSrc, link }) => (
          <div key={id} className="sticky-container sticky top-0 shadow-lg">
            {/* achievement body ----  */}
            <div className="xl:h-[75vh] sticky-body p-6 sm:p-0 flex flex-col sm:flex-row rounded-lg">
              {/* left section ----    */}
              <div className=" w-full mb-8 sm:pl-6 sm:m-0 flex-1  flex flex-col text-black justify-center items-center rounded-lg">
                <span className="text-center sm:text-lg lg:text-xl py-1 px-4 rounded-full font-medium border border-black text-black capitalize">
                  {subTitle}
                </span>

                <h2
                  dangerouslySetInnerHTML={{ __html: title }}
                  className="text-center my-4 md:my-8 sm:w-[75%]"
                ></h2>

                <a
                  href={link}
                  className="mt-2 sm:text-lg lg:text-xl  font-medium bg-black rounded-full py-1.5 px-6 text-white capitalize disabled:bg-black/80"
                >
                  view project
                </a>
              </div>

              {/* right section ---------  */}
              <Image
                src={imgSrc}
                alt="achievement-thumbnail"
                width={1000}
                height={600}
                loading="lazy"
                className="rounded-lg sm:rounded-none sm:rounded-tr-lg sm:rounded-br-lg  w-full ml-auto sm:w-[45%] lg:w-1/2 h-[200px] sm:h-[450px] xl:h-full object-cover object-left-top"
              />
            </div>
            {/* pagination ------------  */}
            <ul className="hidden  absolute left-8 top-1/2 -translate-y-1/2 sm:flex flex-col gap-4">
              {[1, 2].map((n) => (
                <li
                  key={n}
                  className={`${paginationBtnStyle.default} ${
                    n === id && paginationBtnStyle.active
                  }`}
                >
                  0{n}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
