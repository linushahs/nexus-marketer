"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import Logo from "../assets/Logo";
import axios from "axios";
import { ArrowPathIcon } from "@heroicons/react/24/outline";
import { validateEmail } from "@/utils/helpers";
import { twMerge } from "tailwind-merge";
import { footerContent } from "@/utils/constants";

const linkGroup = "first:mr-8 flex flex-col gap-3 mt-1";
const linkHeadStyle = "font-medium text-[19px] sm:text-xl";
const linkStyle =
  "text-gray-400 text-[17px] sm:text-lg cursor-pointer mt-5 hover:text-white hover:underline capitalize";
const errorColor = "red-500";

function Footer() {
  const [email, setEmail] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [isError, setIsError] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleNewsLetterSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setIsError("Invalid email");
      return;
    }

    setLoading(true);
    const apiUrl = "https://newsletter.kalodhunga.com/v1/email/";
    const requestBody = {
      email: email,
      opt_in_newsletter: true,
      application: "Nexus Marketers",
    };

    await axios
      .post(apiUrl, requestBody)
      .then((res) => {
        setIsError("");
        setIsSuccess(true);

        //setTimeout for success message
        setTimeout(() => {
          setIsSuccess(false);
          setEmail("");
        }, 2000);

        setLoading(false);
        console.log(res);
      })
      .catch((err) => {
        setIsError(err.message);
        setLoading(false);
        console.log(err);
      });
  };

  const handleEmailInput = (e: ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    if (!input) {
      setIsError("");
    }
    setEmail(input);
  };

  return (
    <section className="container pt-4 pb-10 flex justify-between">
      {/* left section -----------------  */}
      {/* ------------------------------ */}
      <div className="hidden lg:block w-1/3">
        <span className="text-secondary flex gap-2 items-center text-[36px] leading-[24px]  capitalize">
          <Logo className="w-16 h-16" /> Nexus Marketers
        </span>

        <p className="text-gray-400 mt-8 text-lg">{footerContent}</p>
      </div>

      {/* right section ---------------  */}
      {/* ----------------------------- */}
      <div className="text-secondary flex-1 flex flex-wrap items-start justify-between gap-y-10 sm:flex-nowrap lg:justify-end lg:gap-x-20 sm:mt-4">
        {/* quick links -----------------------  */}
        <div className={linkGroup}>
          <h3 className={linkHeadStyle}>Quick links</h3>
          <ul>
            <li className={linkStyle}>
              <a href="#home">Home</a>
            </li>
            <li className={linkStyle}>
              <a href="#about">About</a>
            </li>
            <li className={linkStyle}>
              <a href="#services">Services</a>
            </li>
            <li className={linkStyle}>
              <a href="#work">Works</a>
            </li>
            <li className={linkStyle}>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>

        {/* other links -----------------------  */}
        <div className={linkGroup}>
          <h3 className={linkHeadStyle}>Other links</h3>
          <ul>
            <li className={linkStyle}>
              <a role="link" className="w-full" aria-disabled>
                Privacy Policy
              </a>
            </li>
            <li className={linkStyle}>
              <a role="link" aria-disabled>
                Terms and Condition
              </a>
            </li>
            <li className={linkStyle}>
              <a role="link" aria-disabled>
                Use Cases
              </a>
            </li>
            <li className={linkStyle}>
              <a role="link" aria-disabled>
                careers
              </a>
            </li>
          </ul>
        </div>

        {/* discover more ----------------  */}
        <form onSubmit={handleNewsLetterSubmit} className="sm:w-1/2 lg:w-[44%]">
          <h4 className="text-[30px] leading-[36px] sm:text-[36px] sm:leading-[44px] capitalize">
            discover more - sign up for updates
          </h4>

          <div className="relative flex flex-col gap-2">
            <input
              type="text"
              id="discoverInput"
              className={twMerge(
                ` bg-white py-2 px-3 rounded-lg mt-6 text-black w-[80%] text-lg`,
                isError &&
                  `border-[3px] border-${errorColor} focus:outline-${errorColor}`
              )}
              onChange={handleEmailInput}
              required
            />
            <label
              className={twMerge(
                "hidden",
                isError && `block text-lg text-${errorColor}`
              )}
              htmlFor="discoverInput"
            >
              {isError}
            </label>
          </div>

          <button
            type="submit"
            className="mt-6 w-fit rounded-full bg-primary py-1.5 px-4 flex gap-2 items-center sm:text-lg xl:text-xl font-medium hover:bg-primary/80 cursor-pointer text-black disabled:bg-primary/60"
            disabled={isLoading || isSuccess}
          >
            {isLoading && <ArrowPathIcon className="w-6 h-6 animate-spin" />}
            {isSuccess ? "Subscribed" : "Subscribe"}
          </button>
        </form>
      </div>
    </section>
  );
}

export default Footer;
