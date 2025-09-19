import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

const Projects = ({ title, desc, stack, github, demo, img }) => {
  return (
    <div
      data-aos="fade-left"
      className="bg-card-bg grid cursor-pointer grid-cols-1 gap-6 overflow-hidden rounded-2xl shadow-lg md:grid-cols-2"
    >
      <div className="z-0 md:pt-10">
        <img
          src={img}
          alt={title}
          className="h-64 w-full object-cover transition duration-300 hover:scale-105 md:h-full md:rounded-none md:rounded-tr-2xl"
        />
      </div>

      <div className="flex flex-col justify-center gap-4 self-start p-6">
        <div className="order-last flex gap-5 self-end md:order-first">
          <a
            href={github}
            target="_blank"
            className="project-links"
            aria-label="View GitHub Repository"
          >
            <FontAwesomeIcon icon={faGithub} size="xl" />
          </a>
          <a
            href={demo}
            target="_blank"
            className="project-links"
            aria-label="View Live Demo"
          >
            <FontAwesomeIcon icon={faExternalLinkAlt} size="xl" />
          </a>
        </div>
        <h3 className="font-heading text-3xl font-semibold">{title}</h3>
        <p className="text-foreground leading-relaxed">{desc}</p>

        <div className="text-accent flex flex-wrap items-center gap-x-4 gap-y-2 text-sm font-semibold uppercase">
          {stack.map((tech, idx) => (
            <span key={idx}>{tech}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
