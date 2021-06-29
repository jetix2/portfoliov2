import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row-reverse flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 ml-12 md:mb-0 items-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black dark:text-white">
            Hi, I'm Orel Malki.
            <br className="hidden lg:inline-block" />I love to build simple and
            clean apps.
          </h1>
          <p className="mb-5 leading-relaxed dark:text-gray-200">
            With technical knowledge in every essential field of web design.
            Hardworking, punctual and committed. Capable of expressing my
            developing abilities in multiple projects, translating my experience
            into increasing the customer base through promotion and marketing on
            social networks. Ready for intensive work in a dynamic and
            challenging work environment with excellent human relations.
          </p>
          <div className="mx-auto bg-gray-50 text-black text-xl ml-1 dark:bg-gray-900 dark:text-white">
            <a
              className="ml-5 hover:text-yellow-300"
              href="https://www.facebook.com/orel.malki.5"
              target="_blank"
            >
              <i className="fa fa-facebook-official"></i>
            </a>

            <a
              className="ml-5 hover:text-yellow-300"
              href="https://www.instagram.com/malkiorel/"
              target="_blank"
            >
              <i className="fa fa-instagram"></i>
            </a>

            <a
              className="ml-5 hover:text-yellow-300"
              href="https://twitter.com/JeTix_LOL"
              target="_blank"
            >
              <i className="fa fa-twitter"></i>
            </a>

            <a
              className="ml-5 hover:text-yellow-300"
              href="https://github.com/jetix2"
              target="_blank"
            >
              <i className="fa fa-github"></i>
            </a>

            <a
              className="ml-5 hover:text-yellow-300"
              href="https://www.linkedin.com/in/orel-malki-28484019a/"
              target="_blank"
            >
              <i className="fa fa-linkedin"></i>
            </a>
          </div>
          <div className="flex justify-center mt-10">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-white bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              Check My Projects
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./coding.svg"
          />
        </div>
      </div>
    </section>
  );
}
