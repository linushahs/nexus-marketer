import Logo from "../assets/Logo";

const linkGroup = "first:mr-8 flex flex-col gap-3 mt-1";
const linkHeadStyle = "font-medium text-[19px] sm:text-xl";
const linkStyle =
  "text-gray-400 text-[17px] sm:text-lg cursor-pointer mt-5 hover:text-white hover:underline capitalize";

function Footer() {
  return (
    <section className="container py-10 flex justify-between">
      {/* left section -----------------  */}
      {/* ------------------------------ */}
      <div className="hidden lg:block w-1/3">
        <span className="text-secondary flex gap-2 items-center text-[36px] leading-[24px]  capitalize">
          <Logo className="w-16 h-16" /> Nexus Marketers
        </span>

        <p className="text-gray-400 mt-8 text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ratione
          quasi rerum rem, vel et eveniet quia quo blanditiis consectetur
          obcaecati alias sapiente neque pariatur ipsum ipsa cum itaque autem.
        </p>
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
        <form>
          <h4 className="text-[30px] leading-[36px] sm:text-[36px] sm:leading-[44px] capitalize">
            discover more - sign up <br />
            for updates
          </h4>

          <input
            type="text"
            className="bg-white py-2 px-3 rounded-lg mt-6 text-black w-full text-lg"
          />

          <button
            type="submit"
            className="mt-6 w-fit rounded-full bg-primary py-1.5 px-4 flex gap-4 items-center text-lg font-medium hover:bg-primary/80 cursor-pointer text-black"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}

export default Footer;
