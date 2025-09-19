import {
  faCss3,
  faGithub,
  faHtml5,
  faJs,
  faNodeJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TailwindIcon from "./TailwindIcon";
// import tailwindSVG from "../assets/tailwind.svg";

const Skills = () => {
  // const tailwindSVG = "";
  const skills = [
    { ico: faHtml5, label: "HTML 5" },
    { ico: faCss3, label: "CSS3" },
    { ico: faJs, label: "JavaScript" },
    { ico: faReact, label: "React" },
    { ico: "tailwind", label: "Tailwind" },
    { ico: faGithub, label: "Git" },
    { ico: faNodeJs, label: "Node.js" },
    { ico: "express", label: "Express" },
    { ico: faDatabase, label: "MongoDB" },
  ];
  return (
    <ul className="grid grid-cols-2 gap-6 sm:grid-cols-3">
      {skills.map(({ ico, label }, i) => (
        <li
          key={i}
          className="bg-hero-bg flex items-center gap-2 rounded-lg px-3 py-2 shadow-sm transition hover:shadow-md"
        >
          {/* Icon handler */}
          {ico === "tailwind" ? (
            <TailwindIcon className="text-primary h-6 w-6" alt={label} />
          ) : ico === "express" ? (
            <span className="font-heading text-primary text-lg">Ex</span>
          ) : (
            <FontAwesomeIcon icon={ico} className="text-primary h-6 w-6" />
          )}

          <p className="font-heading text-sm tracking-wide">{label}</p>
        </li>
      ))}
    </ul>
  );
};

export default Skills;
