import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { experience } from "../data/experience.json";
import { projects } from "../data/projects.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedinIn,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LinkMaker from "./components/LinkMaker";
import ContactForm from "./components/ContactForm";
import Skills from "./components/Skills";
import Hero from "./components/Hero";

function App() {
  const links = [
    { ico: faGithub, link: "https://github.com/devTetra", label: "GitHub" },
    { ico: faXTwitter, link: "https://x.com/_tetraaa", label: "Twitter" },
    {
      ico: faLinkedinIn,
      link: "https://www.linkedin.com/in/treasure-ejike",
      label: "LinkedIn",
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 700,
      once: false,
      disable: false,
      easing: "ease-in-out",
      mirror: false,
      anchorPlacement: "top-bottom",
      startEvent: "DOMContentLoaded",
    });
  }, []);

  return (
    <>
      {/* Sidebar (For only Desktops) */}
      <Sidebar />

      {/* Navbar */}
      <Navbar />
      <main className="bg-background font-body text-text flex flex-col">
        {/* Hero */}
        <Hero />
        {/* About */}
        <section id="about" className="section">
          {/* About Me */}
          <div className="space-y-6">
            <div data-aos="fade-up" className="flex flex-col gap-4">
              <p className="small-heading text-sm">A Little More</p>
              <h2 className="font-heading text-4xl md:text-5xl">About Me</h2>
            </div>
            <div
              data-aos="fade-left"
              className="space-y-4 text-lg leading-relaxed"
            >
              <p>
                I’m a developer focused about crafting responsive, user-friendly
                websites. On the frontend, I enjoy building clean, intuitive
                interfaces with React and Tailwind. On the backend, I’ve started
                working with Express and MongoDB and continue to grow my
                experience by creating projects that bring more structure and
                functionality to my work.
              </p>

              <p>
                I’m always learning and looking for ways to grow with every
                project. Whether collaborating on something new or improving
                what’s already there, I’m ready to take on the next challenge.
              </p>

              <p className="text-primary font-bold">
                Let’s work together and bring your next idea to life!
              </p>
            </div>
          </div>
          {/* Skills + Education */}
          <div className="grid grid-cols-1 gap-10 md:grid-cols-[auto_250px]">
            {/* Skills */}
            <div data-aos="fade-left">
              <h3 className="font-heading mb-6 text-2xl md:text-3xl">
                Technologies That I Use
              </h3>
              <Skills />
            </div>
            <div
              data-aos="fade-right"
              className="bg-card-bg self-end rounded-2xl p-8 text-center shadow-lg md:text-left"
            >
              <h3 className="font-heading mb-4 flex items-center gap-3 justify-self-center text-2xl font-bold md:justify-self-auto">
                <span className="text-primary text-2xl">
                  <FontAwesomeIcon icon={faGraduationCap} />
                </span>
                Education
              </h3>

              <p className="font-highlight mb-1 text-xl font-semibold">
                B.Sc. Software Engineering
              </p>

              <p className="font-highlight mb-1 text-base italic">
                Babcock University, Nigeria
              </p>

              <p className="text-primary text-sm tracking-wide uppercase">
                Jan 2022 – July 2025
              </p>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="section">
          <div data-aos="fade-up" className="flex flex-col gap-4">
            <p className="small-heading text-sm">Check Out My</p>
            <h2 className="font-heading text-4xl md:text-5xl">Projects</h2>
          </div>

          <div className="flex flex-col gap-20">
            {projects.map(({ title, desc, stack, github, demo, img }, id) => (
              <Projects
                key={id}
                title={title}
                desc={desc}
                stack={stack}
                github={github}
                demo={demo}
                img={img}
              />
            ))}
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="section">
          <div data-aos="fade-up" className="flex flex-col gap-4">
            <p className="small-heading text-sm">Where I've Gained</p>
            <h2 className="font-heading text-4xl md:text-5xl">Experience</h2>
          </div>
          <div className="grid grid-cols-1 gap-12">
            {experience.map(
              ({ title, company, date, location, contributions }, id) => (
                <Experience
                  key={id}
                  title={title}
                  company={company}
                  date={date}
                  location={location}
                  contributions={contributions}
                />
              ),
            )}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="section">
          <div data-aos="fade-up" className="flex flex-col gap-4">
            <p className="small-heading text-sm">Want To</p>
            <h2 className="font-heading text-4xl md:text-5xl">Get In Touch</h2>
          </div>
          <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
            {/* Left Side */}
            <div
              data-aos="fade-left"
              className="flex flex-col justify-center gap-6"
            >
              <h3 className="font-heading text-accent text-2xl font-semibold">
                Let’s Connect
              </h3>
              <p className="text-foreground leading-relaxed text-balance">
                I’m currently seeking opportunities where I can contribute and
                grow as a frontend, backend, or fullstack developer. Whether
                you’re looking for collaboration, freelance work, or full-time
                positions, I’d love to connect.
              </p>

              <LinkMaker
                links={links}
                dClass="flex gap-6 text-2xl"
                aClass="text-muted hover:text-accent  transition duration-300 hover:scale-110"
              />
              <a
                href="https://drive.google.com/file/d/1M5TwN78E-rHJQcJI8HmEwzvMUHt7eGl_/view"
                target="_blank"
                className="bg-primary text-background hover:bg-primary-hover/80 mt-4 inline-flex w-fit items-center gap-2 rounded-xl px-6 py-3 font-semibold shadow-lg transition duration-300 hover:scale-105"
              >
                View CV
              </a>
            </div>
            {/* Right Side(Contact Form) */}
            <ContactForm />
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
