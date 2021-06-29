import { ArrowDownIcon, SunIcon, MoonIcon } from "@heroicons/react/solid";
import React from "react";
import darkMode from "./darkMode";

export default function Navbar() {
  const [colorTheme, setTheme] = darkMode();
  return (
    <header className="bg-gray-300 md:sticky top-0 z-10 transition-colors duration-200 ease-in-out  dark:bg-gray-800">
      <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
        <img
          alt="gallery"
          className="w-12 rounded-full flex-shrink-0 object-cover object-center"
          src="avatar.jpg"
        /><div className="-mx-2">🚀</div>
        <a className="title-font font-medium text-white mb-4 md:mb-0">
          <a
            href="#about"
            className="ml-3 text-xl text-black hover:text-white dark:text-white dark:hover:text-yellow-200"
          >
            Orel Malki
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-black dark:text-gray-200 justify-center">
          <a href="#projects" className="mr-5 hover:text-white">
            Projects
          </a>
          <a href="#skills" className="mr-5 hover:text-white">
            Skills
          </a>
          <a href="#workethic" className="mr-5 hover:text-white">
            Work Ethic
          </a>
        </nav>
        <div
          onClick={() => setTheme(colorTheme)}
          className="mr-3 text-yellow-200 border-gray-500 hover:text-white"
        >
          {colorTheme === "light" ? (
            <SunIcon className="w-7 h-7 border-2 border-red-500 rounded-full bg-gray-800" />
          ) : (
            <MoonIcon className="w-7 h-7  border-2 border-red-500 rounded-full bg-gray-800 " />
          )}
        </div>
        <a
          href="#contact"
          className="inline-flex items-center bg-gray-300 border-0 py-1 px-5  hover:bg-green-500 rounded text-base mt-5 md:mt-0 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-green-500"
        >
          Hire Me
          <ArrowDownIcon className="animate-bounce w-4 h-4 ml-1" />
        </a>
      </div>
    </header>
  );
}
