import { ArrowUpRightIcon } from "@heroicons/react/20/solid";
import Image from "next/image";

const formLabelStyle = "text-white";
const inputFieldStyle =
  "w-[80%] border-b border-gray-400 bg-transparent py-2.5 text-white text-xl outline-none mt-3";

function Contact() {
  return (
    <section className="container py-10  ">
      <h1>lets collaborate</h1>
      <h3 className="text-white mt-2">
        or email at{" "}
        <span className="text-primary lowercase">nexusmarketers@gmail.com</span>
      </h3>

      <main className="flex gap-16 mt-16">
        <Image
          src="/assets/contact-pic.png"
          alt="contact picture"
          width={800}
          height={400}
          className="w-1/2"
        />

        <form className="w-1/2 flex flex-col gap-16">
          <div>
            <label htmlFor="name" className={formLabelStyle}>
              <h3>
                Name <span className="text-red-500 text-xl">*</span>
              </h3>
            </label>

            <input
              type="text"
              className={inputFieldStyle}
              placeholder="Enter your name here"
            />
          </div>
          <div>
            <label htmlFor="email" className={formLabelStyle}>
              <h3>
                Email <span className="text-red-500 text-xl">*</span>
              </h3>
            </label>

            <input
              type="text"
              className={inputFieldStyle}
              placeholder="Enter your email here"
            />
          </div>
          <div>
            <label htmlFor="services" className={formLabelStyle}>
              <h3>
                Services <span className="text-red-500 text-xl">*</span>
              </h3>
            </label>

            <input
              type="text"
              className={inputFieldStyle}
              placeholder="Enter a brief description here"
            />
          </div>

          <button
            type="submit"
            className="w-fit rounded-full bg-primary py-4 px-5 flex gap-4 items-center text-xl font-medium hover:bg-primary/80 cursor-pointer"
          >
            Send message now
            <ArrowUpRightIcon className="border border-black p-2 rounded-full w-9 h-9 " />
          </button>
        </form>
      </main>
    </section>
  );
}

export default Contact;
