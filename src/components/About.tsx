import Image from "next/image";

function About() {
  return (
    <section id="about" className="container relative py-8 ">
      <h1>Who Are We</h1>

      <div className="flex flex-col xl:flex-row justify-between gap-12 xl:gap-8 items-start mt-12 text-white">
        <div className="xl:pl-20 flex relative">
          <Image
            src="/assets/introduction-pic1.png"
            alt="about-us"
            width={400}
            height={200}
          />

          <div className="flex gap-4 sm:w-full absolute top-1/2 right-0 sm:left-2/3 -translate-y-1/2 ">
            <h3>01</h3>
            <h3>
              We are a team of creative minds dedicated to redefining marketing
              strategies
            </h3>
          </div>
        </div>

        <div className="flex ml-auto xl:m-0 flex-col gap-4 xl:pr-12">
          <Image
            src="/assets/introduction-pic2.png"
            alt="about-us"
            width={400}
            height={200}
          />
          <div className="flex gap-4 ">
            <h3>02</h3>
            <h3>
              We prioritize client success, creating <br /> customized campaigns
              for success.
            </h3>
          </div>
        </div>
      </div>

      <div className="xl:pl-12 flex items-center text-white mt-12 xl:mt-8 relative">
        <div className="absolute sm:static flex gap-4 ">
          <h3 className="">03</h3>
          <h3 className="z-20">
            Our experienced team stays ahead of <br /> the trend to deliver
            tailored solutions.
          </h3>
        </div>
        <Image
          src="/assets/introduction-pic3.png"
          alt="about-us"
          width={400}
          height={200}
          className="sm:-ml-20"
        />
      </div>
    </section>
  );
}

export default About;
