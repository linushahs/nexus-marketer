"use client";

import "react-phone-input-2/lib/bootstrap.css";
import { ArrowUpRightIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";

const formLabelStyle = "text-white";
const inputFieldStyle =
  "!w-full lg:!w-[80%] !rounded-none !border-0 !border-b !border-gray-400 !bg-transparent !py-2.5 !text-white !text-xl !outline-none !ring-0 !mt-3 ";

type ContactFormInputProps = {
  name: string;
  phoneNumber: any;
  description: string;
};

function Contact() {
  const [formInput, setFormInput] = useState<ContactFormInputProps>({
    name: "",
    phoneNumber: "",
    description: "",
  });

  const sendMailTo = (data: ContactFormInputProps) => {
    if (!data.name || !data.description || !data.phoneNumber) {
      return "#contact";
    }

    const bodyContent = `${data.description}%0D%0A%0D%0A${data.name}%0D%0A${data.phoneNumber}`;

    return `mailto:shiwamkarn77@gmail.com?subject=test&body=${bodyContent}`;
  };

  return (
    <section id="contact" className="container py-10  ">
      <h1>lets collaborate</h1>
      <h3 className="text-white mt-3">
        or email at{" "}
        <span className="text-primary lowercase">info@nexusmarketers.com</span>
      </h3>

      <main className="flex flex-col-reverse lg:flex-row gap-16 mt-10 sm:mt-16">
        <Image
          src="/assets/contact-pic.png"
          alt="contact picture"
          width={1000}
          height={400}
          className="w-full lg:w-1/2"
        />

        <form className="w-full lg:w-1/2 flex flex-col gap-12">
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
              value={formInput.name}
              onChange={(e) =>
                setFormInput({ ...formInput, name: e.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor="phoneno" className={formLabelStyle}>
              <h3>
                Phone Number <span className="text-red-500 text-xl">*</span>
              </h3>
            </label>

            <PhoneInput
              enableSearch={true}
              value={formInput.phoneNumber}
              country={"np"}
              onChange={(e) => setFormInput({ ...formInput, phoneNumber: e })}
              inputClass={inputFieldStyle}
              dropdownClass="!bg-background !text-white !border !border-gray-400 !max-h-[320px]"
              searchClass="!rounded-none !bg-background !text-white !border-0 !border-b !border-gray-400"
            />
          </div>
          <div>
            <label htmlFor="description" className={formLabelStyle}>
              <h3>
                Description <span className="text-red-500 text-xl">*</span>
              </h3>
            </label>

            <input
              type="text"
              className={inputFieldStyle}
              placeholder="Enter a brief description here"
              value={formInput.description}
              onChange={(e) =>
                setFormInput({ ...formInput, description: e.target.value })
              }
            />
          </div>

          <a
            href={sendMailTo(formInput)}
            className="w-fit rounded-full bg-primary py-3 px-4 flex gap-4 items-center text-xl font-medium hover:bg-primary/80 cursor-pointer"
          >
            Send message now
            <ArrowUpRightIcon className="border border-black p-2 rounded-full w-9 h-9 " />
          </a>
        </form>
      </main>
    </section>
  );
}

export default Contact;
