import Image from "next/image";
import { workProcess } from "../utils/constants";

function WorkProcess() {
  return (
    <section id="work" className="container py-10  ">
      <h1>How do we work?</h1>

      <main className="flex flex-col gap-y-12 lg:flex-row lg:gap-6  mt-12 lg:mt-16">
        {workProcess.map((process) => (
          <div key={process.step} className="text-secondary">
            <span className="rounded-full border border-secondary px-4 py-1 sm:text-xl lg:text-lg font-bold">
              Step {process.step}
            </span>
            <h4 className="mt-3 text-xl sm:text-2xl ">{process.title}</h4>

            <div
              className="mt-4 bg-no-repeat w-full h-[270px] sm:h-[350px] bg-cover lg:h-[400px] rounded-lg p-6 sm:p-8 flex items-end"
              style={{ backgroundImage: `url(${process.imgSrc})` }}
            >
              <p className="text-[19px] w-full sm:text-2xl sm:w-3/4 lg:w-full lg:text-lg ">
                {process.description}
              </p>
            </div>
          </div>
        ))}
      </main>
    </section>
  );
}

export default WorkProcess;
