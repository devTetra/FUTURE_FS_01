import { useState } from "react";
import profile from "../assets/img/profile.JPG";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section
      className={`bg-hero-bg grid grid-rows-2 items-center px-10 pt-20 pb-20 md:grid-cols-2 md:grid-rows-none md:px-20 md:pt-40 ${
        isOpen ? "pt-44" : "py-0"
      }`}
    >
      {/* Profile Image */}
      <div
        data-aos="zoom-in-up"
        className="order-last flex items-center justify-center"
      >
        <figure className="border-border flex w-72 max-w-full cursor-pointer items-center justify-center overflow-hidden rounded-full border shadow-lg transition duration-300 hover:scale-105 lg:w-96">
          <img
            className="h-72 object-cover lg:h-96"
            src={profile}
            alt="Profile photo"
          />
        </figure>
      </div>

      <div
        data-aos="fade-up"
        className="flex flex-col items-center justify-center gap-4 px-4 text-center md:items-start md:px-8 md:text-left"
      >
        <p className="small-heading text-sm md:text-base">Hello, I'm</p>
        <h1 className="font-heading text-4xl font-bold md:text-6xl">
          Treasure
        </h1>

        {/* Typing Animation */}
        <h2 className="text-primary type text-xl font-semibold md:text-2xl lg:text-3xl">
          A{" "}
          <TypeAnimation
            sequence={[
              "Software Engineer",
              1700,
              "Frontend Developer",
              1700,
              "Backend Enthusiast",
              1700,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            cursor={false}
            className="text-accent"
          />
        </h2>

        {/* Short Intro */}
        <p className="text-offwhite font-body max-w-md text-balance md:text-lg">
          I design and build elegant, user-focused web experiences, from
          responsive interfaces to robust backend systems,that are both
          functional and beautiful
        </p>

        <div className="flex flex-col gap-4 md:flex-row lg:gap-6">
          <a
            href="#contact"
            className="bg-primary text-hero-bg hover:bg-primary-hover font-heading rounded-2xl border-2 border-transparent px-4 py-3 font-bold shadow-sm transition duration-300 lg:px-6"
          >
            Hire Me
          </a>
          <a
            href="#projects"
            className="border-primary text-primary hover:bg-primary hover:text-hero-bg font-heading rounded-2xl border-2 px-4 py-3 font-bold shadow-sm transition duration-300 lg:px-6"
          >
            See My Work
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
