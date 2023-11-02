import { ArrowUpIcon } from "@heroicons/react/24/outline";

function TheEndSection() {
  return (
    <section className="container pt-10">
      <div className=" bg-primary rounded-md p-4 pl-8 flex justify-between items-center">
        <h2>
          well, the end is <br />
          here
        </h2>
        <a href="#home">
          <ArrowUpIcon className="w-[160px] m-0 p-0 cursor-pointer" />
        </a>
      </div>
    </section>
  );
}

export default TheEndSection;
