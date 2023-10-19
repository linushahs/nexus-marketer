import Image from "next/image";

function Introduction() {
  return (
    <section className="container relative py-8 ">
      <h1>
        we are nexus <br /> marketers
      </h1>

      <div className="flex flex-col lg:flex-row gap-12 justify-end text-tertiary my-12">
        <p className="w-full sm:w-2/3 lg:w-1/3">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro nulla
          quia molestias minus iste quibusdam consequuntur architecto sint
          mollitia enim. Autem sapiente soluta a possimus itaque quaerat earum
          at illo! Enim facilis ipsa omnis deserunt debitis doloremque eum vero.
          Ratione aut error.
        </p>
        <p className="w-full sm:w-2/3 lg:w-1/3 ml-auto lg:m-0">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro nulla
          quia molestias minus iste quibusdam consequuntur architecto sint
          mollitia enim. Autem sapiente soluta a possimus itaque quaerat earum
          at illo! Enim facilis ipsa omnis deserunt debitis doloremque eum vero.
          Ratione aut error.
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
