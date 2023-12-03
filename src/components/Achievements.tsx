import Image from "next/image";
import "./css/achievement.css";

function Achievements() {
  return (
    <section className="container relative pt-8 pb-16">
      <h1>
        Championing <br /> Achievements, <br />{" "}
        <span className="text-primary">one milestone</span> at <br />a time
      </h1>

      <div className="flex flex-col gap-8 mt-8">
        {new Array(3).fill(0).map((_, id: number) => (
          <div key={id} className="sticky-container sticky top-0 shadow-lg">
            {/* achievement body ----  */}
            <div className="sticky-body p-6 sm:p-0 flex flex-col sm:flex-row rounded-lg">
              {/* left section ----    */}
              <div className="w-full mb-8 sm:m-0 sm:w-1/2  flex flex-col text-white justify-center items-center rounded-lg">
                <span className="sm:text-lg lg:text-xl py-1 px-4 rounded-full border border-secondary text-secondary capitalize">
                  marketing and advertisement
                </span>

                <h2 className="text-center my-8 lg:my-12">
                  some marketing <br /> project in recent <br />
                  days
                </h2>

                <button className="sm:text-lg lg:text-xl  font-medium bg-primary rounded-full py-1.5 px-6 text-black capitalize">
                  view project
                </button>
              </div>

              {/* right section ---------  */}
              <Image
                src="/assets/achievement-pic1.png"
                alt="achievement-thumbnail"
                width={800}
                height={300}
                className="w-full sm:w-1/2 sm:h-[450px] xl:h-[600px]"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Achievements;
