import { useState } from "react";
import {
  faGithub,
  faLinkedinIn,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faBars, faEnvelope, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LinkMaker from "./LinkMaker";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const links = [
    { ico: faGithub, link: "https://github.com/devTetra", label: "GitHub" },
    {
      ico: faXTwitter,
      link: "https://x.com/_tetraaa",
      label: "Twitter",
    },
    {
      ico: faLinkedinIn,
      link: "https://www.linkedin.com/in/treasure-ejike",
      label: "LinkedIn",
    },
    { ico: faEnvelope, link: "mailto:tre.ejike@gmail.com", label: "Email" },
  ];

  const navLinks = [
    { title: "About", link: "#about" },
    { title: "Projects", link: "#projects" },
    { title: "Experience", link: "#experience" },
    { title: "Get In Touch", link: "#contact" },
  ];

  return (
    <header className="bg-background/50 fixed top-0 left-0 z-50 w-full backdrop-blur-md md:pt-4">
      <nav className="font-body text-text flex flex-col pb-4 shadow-lg md:flex-row md:justify-end md:text-lg">
        {/* Menu button (Mobile Only) */}
        <div className="flex items-center justify-end gap-3">
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-controls="mobile-menu"
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            className="hover:bg-primary cursor-pointer self-end rounded px-3 py-2 transition duration-300 md:hidden"
          >
            {isOpen ? (
              <FontAwesomeIcon icon={faXmark} />
            ) : (
              <FontAwesomeIcon icon={faBars} />
            )}
          </button>
        </div>
        <ul
          className={`flex-col gap-2 transition-all duration-300 md:flex md:w-2/3 lg:w-1/2 ${
            isOpen ? "flex" : "hidden"
          }`}
        >
          {/* Nav links */}
          <div className="mt-4 flex flex-col gap-6 px-4 pb-1 md:mt-0 md:flex-row md:items-center md:justify-evenly md:gap-0 md:px-0">
            {navLinks.map(({ title, link }, i) => (
              <li key={i}>
                <a
                  href={link}
                  className="font-heading hover:border-primary block border-b-2 border-transparent px-2 transition duration-300"
                >
                  {title}
                </a>
              </li>
            ))}
          </div>

          {/* Social + Resume Links (Mobile Only) */}
          <div className="my-8 flex flex-col gap-8 md:hidden">
            <div className="order-last self-center transition duration-300 hover:scale-105">
              <a
                href="https://drive.google.com/file/d/1VgNRGaNtbel7_0537LhzbCaMolrBJ3Qu/view?usp=drive_link"
                target="_blank"
                className="bg-primary text-hero-bg hover:bg-primary-hover font-heading cursor-pointer rounded-2xl border-2 border-transparent px-4 py-3 font-semibold shadow-sm"
              >
                View CV
              </a>
            </div>

            <LinkMaker
              links={links}
              dClass={"flex justify-center gap-4"}
              aClass={"inline-flex p-2"}
              fClass={
                "text-offwhite hover:text-accent cursor-pointer transition duration-300 hover:scale-110"
              }
              fSize={"lg"}
            />
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
