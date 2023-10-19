"use client";

import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import Logo from "./assets/Logo";
import { ArrowRightIcon, Bars3Icon } from "@heroicons/react/20/solid";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

type Menu = {
  id: number;
  title: string;
  url: string;
};

export const menus: Menu[] = [
  "home",
  "about",
  "work",
  "team",
  "project",
  "blogs",
  "contact",
].map((menu, idx) => {
  return { id: idx + 1, title: menu, url: "#" + menu };
});

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav id="home" className="relative container  z-40  text-secondary ">
      <div className="border-b border-secondary flex items-center justify-between pt-3 pb-4">
        <div>
          <Logo className="w-12 h-12" />
        </div>
        {/* right side  */}
        <ul className="navbar-menu lg:flex items-center ml-32 gap-16 hidden font-[500] text-lg 3xl:text-xl">
          <li>
            <a href="#home" className="active">
              Home
            </a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#works">Works</a>
          </li>
          <li>
            <a href="#clients">Clients</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="#blogs">Blogs</a>
          </li>
        </ul>

        <div className="hidden sm:flex items-center capitalize gap-2">
          <hr className="w-14 border-tertiary" />
          <h4>nexusmarketers@gmail.com</h4>
          <ArrowUpRightIcon className="border border-secondary p-2 rounded-full w-8 h-8 " />
        </div>

        {/* bar icon ---------  */}
        <button
          onClick={() => setIsMenuOpen(true)}
          className="lg:hidden cursor-pointer"
        >
          <Bars3Icon className="w-8 h-8 text-white" />
        </button>
      </div>

      {/* backdrop : black ----------- */}
      {isMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-screen z-20 bg-black/30"></div>
      )}

      {/* list of menus (in small devices: tab & mobile) ---->  */}
      <div
        className={twMerge(
          "nav-menu top-0 right-0 fixed h-full w-[92%] sm:w-[70%] bg-background flex flex-col justify-between z-30",
          isMenuOpen && "active"
        )}
      >
        <header className="px-6 pt-6 flex w-full justify-between">
          <Logo className="w-10 h-10 " />

          <button
            onClick={() => setIsMenuOpen(false)}
            className="lg:hidden text-lg cursor-pointer font-bold"
          >
            Close
          </button>
        </header>

        <ul className="px-6 flex-1 flex flex-col justify-center">
          {menus.map((menu) => (
            <li
              key={menu.id}
              className="my-2.5 py-3 text-3xl border-b border-tertiary font-medium  cursor-pointer hover:font-bold"
            >
              <a
                className="flex justify-between items-center text-white capitalize"
                href={menu.url}
              >
                {menu.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
