import {
  faGithub,
  faLinkedinIn,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Sidebar = () => {
  const links = [
    { ico: faGithub, link: "https://github.com/devTetra", label: "GitHub" },
    { ico: faXTwitter, link: "https://x.com/_tetraaa", label: "Twitter" },
    {
      ico: faLinkedinIn,
      link: "https://www.linkedin.com/in/treasure-ejike",
      label: "LinkedIn",
    },
    { ico: faEnvelope, link: "mailto:tre.ejike@gmail.com", label: "Email" },
    {
      ico: faFilePdf,
      link: "https://drive.google.com/file/d/1l7GOH-MfU6G1mbNC0_ArOU9TJIym1RtJ/view?usp=drive_link",
      label: "Resume",
    },
  ];
  return (
    <aside className="fixed z-0 mt-8 hidden flex-col items-center gap-4 pl-6 md:flex">
      <div className="bg-muted h-40 w-0.5"></div>

      {/* Social Links */}
      <ul className="flex flex-col gap-4">
        {links.map(({ ico, link, label }, i) => (
          <li key={i}>
            <a
              href={link}
              title={label}
              aria-label={label}
              target="_blank"
              className="inline-flex p-1"
            >
              <FontAwesomeIcon
                icon={ico}
                size="2x"
                className="text-muted hover:text-accent transition duration-300 hover:scale-110"
              />
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
