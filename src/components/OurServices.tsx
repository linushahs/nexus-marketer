import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import { services } from "../utils/constants";

function OurServices() {
  return (
    <section id="services" className="container relative py-8 ">
      <h1>our services</h1>

      <div className="flex flex-col gap-12 mt-8">
        {services.map((service, id: number) => (
          <div key={id} className="">
            {/* services body ----  */}
            <div className="flex flex-col bg-background">
              {/* top section ----    */}
              <div
                className="w-full aspect-[16/9] sm:h-[450px] lg:h-[600px] bg-no-repeat bg-center sm:object-cover rounded-lg"
                style={{ backgroundImage: `url(${service.imgSrc})` }}
              ></div>

              {/* bottom section -------  */}
              <div className="text-secondary flex justify-between items-start mt-6 text-lg sm:text-xl lg:text-2xl">
                <h4>
                  {service.title.split("\n")[0]} <br />{" "}
                  {service.title.split("\n")[1]}
                </h4>

                <a href="#" className="flex items-center gap-3">
                  View details{" "}
                  <ArrowUpRightIcon className=" rounded-full border border-secondary p-1.5 sm:p-2 w-7 h-7 sm:w-8 sm:h-8" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default OurServices;
