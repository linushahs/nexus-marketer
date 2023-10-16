import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import Logo from "./assets/Logo";

function Navbar() {
  return (
    <nav id="home" className="relative container  z-40  text-secondary ">
      <div className="border-b border-secondary flex items-center justify-between pt-3 pb-4">
        <div>
          <Logo className="w-12 h-12" />
        </div>
        {/* right side  */}
        <ul className="navbar-menu lg:flex items-center gap-12 hidden font-[500] text-lg 3xl:text-xl">
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

        <div className="flex items-center capitalize gap-2">
          <hr className="w-14 border-tertiary" />
          <h3>nexusmarketers@gmail.com</h3>
          <ArrowUpRightIcon className="border border-secondary p-2 rounded-full w-8 h-8 " />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
