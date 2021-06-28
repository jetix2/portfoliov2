import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { skills } from "../data";

export default function Skills() {
  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <ChipIcon className="w-10 inline-block mb-4 dark:text-gray-200" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-black mb-4 dark:text-white">
            Skills &amp; Technologies
          </h1>
          <p className="text-black leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto dark:text-white">
          I have studied the fundamentals of web development during my course at WebSchool Academy I learned how to develop web products such as websites and web applications. I am skilled in 
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skill) => (
            <div key={skill} className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-300 rounded flex p-4 h-full items-center dark:bg-gray-800">
                <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                <span className="title-font font-medium text-black dark:text-white">
                  {skill}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}