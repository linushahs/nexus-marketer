import { ArrowUpIcon } from "@heroicons/react/24/outline";

function TheEndSection() {
  return (
    <section className="container pt-10 border-0">
      <div className=" bg-primary rounded-md p-6 sm:pl-8 flex flex-col sm:flex-row justify-between sm:items-center">
        <h2>
          well, the end is <br />
          here
        </h2>
        <a
          href="#home"
          className="ml-auto text-2xl font-medium flex gap-2 items-center"
        >
          <span className="sm:hidden">Go up now</span>
          <ArrowUpIcon className="w-[80px] sm:w-[120px] lg:w-[160px] sm:m-0 p-0 cursor-pointer" />
        </a>
      </div>
    </section>
  );
}

export default TheEndSection;
