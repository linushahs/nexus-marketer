import { about } from "@/utils/constants";
import Image from "next/image";

const paragraphStyle = "text-base xl:text-[19px] w-full sm:w-2/3 lg:w-1/3";

function Introduction() {
  return (
    <section className="container relative py-8 ">
      <h1>
        we are nexus <br /> marketers
      </h1>

      <div className="flex flex-col lg:flex-row text-tertiary my-8 sm:my-12">
        {/* desktop content ----------  */}
        <div className="hidden sm:flex  justify-end gap-10 ">
          {about.desktopText.map((obj, id) => (
            <p key={id} className={paragraphStyle}>
              {obj.text}
            </p>
          ))}
        </div>

        {/* mobile content ---------  */}
        <div className="sm:hidden flex flex-col gap-4">
          {about.mobileText.map((obj, id) => (
            <p key={id} className={paragraphStyle}>
              {obj.text}
            </p>
          ))}
        </div>
      </div>

      <Image
        src="/assets/introduction-pic.png"
        width={1000}
        height={500}
        alt="introduction-thumbnail"
        className="w-full h-[180px] rounded-md sm:h-auto"
      />
    </section>
  );
}

export default Introduction;
