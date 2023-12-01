import Image from "next/image";

function Introduction() {
  return (
    <section className="container relative py-8 ">
      <h1>
        we are nexus <br /> marketers
      </h1>

      <div className="flex flex-col lg:flex-row gap-12 justify-end text-tertiary my-12">
        <p className="text-[17px] w-full sm:w-2/3 lg:w-1/3">
          Nexus Marketers, where creativity meets strategy to redefine brand
          narratives. Our team is driven by innovation, crafting tailored
          solutions to amplify your brand&apos;s presence in the digital
          landscape. From captivating content creation to data-driven campaigns,
          we specialize in optimizing every aspect of your marketing journey and
          engage audiences across diverse platforms.
        </p>
        <p className="text-[17px] w-full sm:w-2/3 lg:w-1/3 ml-auto lg:m-0">
          At our agency, we prioritize collaboration and client-centric
          approaches. We build lasting partnerships through transparency,
          dedication, and results. Our holistic approach combines cutting-edge
          technology with human-centric insights, ensuring your brand stands out
          in the digital landscape. From social media management to SEO
          optimization, we&apos;re dedicated to elevating your brand&apos;s
          impact in the evolving market.
        </p>
      </div>

      <Image
        src="/assets/introduction-pic.png"
        width={1000}
        height={500}
        alt="introduction-thumbnail"
        className="w-full"
      />
    </section>
  );
}

export default Introduction;
