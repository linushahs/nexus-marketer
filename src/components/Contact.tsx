"use client";

import "react-phone-input-2/lib/bootstrap.css";
import { ArrowUpRightIcon, CheckCircleIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import { FormEvent, useState } from "react";
import PhoneInput from "react-phone-input-2";
import { ArrowPathIcon } from "@heroicons/react/24/outline";
import axios from "axios";
import { ContactFormInputProps } from "@/utils/interface";

const formLabelStyle = "text-white";
const inputFieldStyle =
  "!w-full lg:!w-[80%] !rounded-none !border-0 !border-b !border-gray-400 !bg-transparent !py-2.5 !text-white !text-xl !outline-none !ring-0 !mt-3 ";

const initialFormInput = {
  name: "",
  phoneNumber: "",
  description: "",
};

export function Contact() {
  const [formInput, setFormInput] =
    useState<ContactFormInputProps>(initialFormInput);
  const [isLoading, setLoading] = useState(false);
  // const [isError, setIsError] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const sendMailTo = (data: ContactFormInputProps) => {
    if (!data.name || !data.description || !data.phoneNumber) {
      return "#contact";
    }

    const bodyContent = `${data.description}%0D%0A%0D%0A${data.name}%0D%0A${data.phoneNumber}`;

    return `mailto:shiwamkarn77@gmail.com?subject=test&body=${bodyContent}`;
  };

  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault();

    setLoading(true);
    const apiUrl = "https://newsletter.kalodhunga.com/v1/contact/";
    const requestBody = {
      name: formInput.name,
      phone_number: formInput.phoneNumber,
      description: formInput.description,
      application: "Nexus Marketers",
    };

    await axios
      .post(apiUrl, requestBody)
      .then((res) => {
        setIsSuccess(true);

        //setTimeout for success message
        setTimeout(() => {
          setIsSuccess(false);
          setFormInput(initialFormInput);
        }, 3500);

        setLoading(false);
        console.log(res);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

  return (
    <section id="contact" className="container pt-6 pb-10 ">
      <h1>lets collaborate</h1>
      <h3 className="text-white mt-3">
        or email at{" "}
        <a
          href="mailto:info@nexusmarketers.com?subject=Write your concerns"
          className="text-primary lowercase"
        >
          info@nexusmarketers.com
        </a>
      </h3>

      <main className="flex flex-col-reverse lg:flex-row gap-16 mt-10 lg:mt-14">
        <Image
          src="/assets/contact-pic.png"
          alt="contact picture"
          width={1000}
          height={400}
          className="w-full lg:w-1/2"
        />

        {/* Contact form: name, description, phone number ---------  */}
        {/* ----------------------------------------- */}
        <form
          onSubmit={handleFormSubmit}
          className="w-full lg:w-1/2 flex flex-col gap-12"
        >
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
              required
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
              required
            />
          </div>

          <button
            type="submit"
            className="w-fit rounded-full bg-primary py-3 px-4 flex gap-3 items-center text-xl font-medium hover:bg-primary/80 cursor-pointer disabled:bg-primary/60"
            disabled={isLoading || isSuccess}
          >
            {isSuccess ? "Message sent" : "Send message now"}
            {isSuccess && <CheckCircleIcon className="w-9 h-9 text-black/80" />}
            {!(isSuccess || isLoading) && (
              <ArrowUpRightIcon className="border border-black p-2 rounded-full w-9 h-9 " />
            )}
            {isLoading && <ArrowPathIcon className="w-7 h-7 animate-spin" />}
          </button>
        </form>
      </main>
    </section>
  );
}
