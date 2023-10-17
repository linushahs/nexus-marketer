import Image from "next/image";

const headingStyle =
  "flex-1 w-fit bg-secondary px-8 py-4 rounded-md font-medium";

function About() {
  return (
    <section className="container relative py-8 ">
      <h1>Who Are We</h1>

      <div className="flex gap-8 items-center mt-12">
        <div className="flex-1 flex justify-center">
          <Image
            src="/assets/aboutus.svg"
            alt="about-us"
            width={300}
            height={200}
          />
        </div>

        <h3 className={headingStyle}>1. Marketing and advertisement agency?</h3>
      </div>

      <h3 className={`${headingStyle} mt-12`}>
        2. an online agency that promotes business?
      </h3>

      <h3 className={`${headingStyle} mt-[150px] ml-auto`}>
        3. okay how about a company that handles all your social media
      </h3>
    </section>
  );
}

export default About;
