import Image from "next/image";
import { workProcess } from "../utils/constants";

function WorkProcess() {
  return (
    <section id="work" className="container py-10  ">
      <h1>How do we work?</h1>

      <main className="flex gap-6  mt-16">
        {workProcess.map((process) => (
          <div key={process.step} className="text-secondary">
            <span className="rounded-full border border-secondary px-4 py-1 text-lg font-bold">
              Step {process.step}
            </span>
            <h4 className="mt-3 text-lg sm:text-xl lg:text-2xl">
              {process.title}
            </h4>

            <div
              className="mt-4 bg-no-repeat h-[400px] rounded-lg p-8 flex items-end"
              style={{ backgroundImage: `url(${process.imgSrc})` }}
            >
              <p className="text-lg ">{process.description}</p>
            </div>
          </div>
        ))}
      </main>
    </section>
  );
}

export default WorkProcess;
