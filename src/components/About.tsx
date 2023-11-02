import Image from "next/image";

const headingStyle = "flex-1 text-secondary font-medium";

function About() {
  return (
    <section id="about" className="container relative py-8 ">
      <h1>Who Are We</h1>

      <div className="flex justify-between gap-8 items-start mt-12 text-white">
        <div className="pl-20 flex relative">
          <Image
            src="/assets/introduction-pic1.png"
            alt="about-us"
            width={400}
            height={200}
          />

          <div className="flex gap-4 w-full absolute top-1/2 left-2/3 -translate-y-1/2 ">
            <h3>01</h3>
            <h3>
              Are we a Marketing and <br />
              advertisement agency?
            </h3>
          </div>
        </div>

        <div className="flex flex-col gap-4 pr-12">
          <Image
            src="/assets/introduction-pic2.png"
            alt="about-us"
            width={400}
            height={200}
          />
          <div className="flex gap-4 ">
            <h3>02</h3>
            <h3>
              an online agency that <br />
              promotes business?
            </h3>
          </div>
        </div>
      </div>

      <div className="pl-12 flex items-center text-white mt-8 relative">
        <div className="flex gap-4 ">
          <h3 className="">03</h3>
          <h3 className="z-20">
            okay how about a company <br /> that handles all your social <br />
            media
          </h3>
        </div>
        <Image
          src="/assets/introduction-pic3.png"
          alt="about-us"
          width={400}
          height={200}
          className="-ml-20 "
        />
      </div>
    </section>
  );
}

export default About;
