import React from "react";
import { TerminalIcon} from "@heroicons/react/solid";
import { testimonials } from "../data";

export default function Testimonials() {
  return (
    <section id="workethic">
      <div className="container px-5 py-10 mx-auto text-center">
        <i className="fas fa-fist-raised text-red-500 text-7xl w-10 inline-block mb-4" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-black mb-12 dark:text-white">
        Quotes that drive me foward!
        </h1>
        <div className="flex flex-wrap m-4">
          {testimonials.map((testimonial) => (
            <div className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-gray-200 bg-opacity-40 p-8 rounded dark:bg-gray-800">
                <TerminalIcon className="block w-8 text-gray-500 mb-4" />
                <p className="leading-relaxed mb-6 text-black dark:text-gray-200">{testimonial.quote}</p>
                <div className="inline-flex items-center">
                  <img
                    alt="testimonial"
                    src={testimonial.image}
                    className="w-12 rounded-full flex-shrink-0 object-cover object-center"
                  />
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-black dark:text-white">
                      {testimonial.name}
                    </span>
                    <span className="text-black-500 text-sm uppercase dark:text-gray-500">
                      {testimonial.company}
                    </span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}