import Image from "next/image";

function About() {
  return (
    <section id="about" className="container relative py-8 ">
      <h1>Who Are We</h1>

      <div className="flex flex-col xl:flex-row justify-between gap-12 xl:gap-8 items-start mt-12 text-white">
        <div className="xl:pl-20 flex flex-col sm:flex-row gap-4 relative">
          <Image
            src="/assets/introduction-pic1.png"
            alt="about-us"
            width={400}
            height={200}
          />

          <div className="flex gap-4 sm:w-full sm:absolute sm:top-1/2 sm:left-2/3 sm:-translate-y-1/2 ">
            <h3>01</h3>
            <h3>
              We are a team of creative minds dedicated to redefining marketing
              strategies
            </h3>
          </div>
        </div>

        <div className="flex ml-auto xl:m-0 flex-col gap-4 sm:w-1/2 lg:w-1/3 xl:pr-12">
          <Image
            src="/assets/introduction-pic2.png"
            alt="about-us"
            width={400}
            height={200}
          />
          <div className="flex gap-4 ">
            <h3>02</h3>
            <h3>
              We prioritize client success, creating customized campaigns for
              success.
            </h3>
          </div>
        </div>
      </div>

      <div className=" flex flex-col-reverse sm:flex-row gap-4 justify-center items-center text-white mt-12 xl:mt-12 relative">
        <div className="flex gap-4 sm:absolute top-1/2 left-0 sm:w-1/2 lg:left-20 lg:w-1/3 sm:-translate-y-1/2">
          <h3 className="">03</h3>
          <h3 className="z-20">
            Our experienced team stays ahead of the trend to deliver tailored
            solutions.
          </h3>
        </div>
        <Image
          src="/assets/introduction-pic3.png"
          alt="about-us"
          width={400}
          height={200}
          className="lg:-ml-[25%]"
        />
      </div>
    </section>
  );
}

export default About;
