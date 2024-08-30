import React from "react";
import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

const Experiences = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.5 }}
        className="text-3xl my-20 text-center"
      >
        Experiences
      </motion.h2>
      <div>
        {EXPERIENCES.map((experience, index) => {
          return (
            <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
              <motion.div
                whileInView={{ x: 0, opacity: 1 }}
                initial={{ x: -100, opacity: 0 }}
                transition={{ duration: 1 }}
                className="w-full lg:w-1/4"
              >
                <p className="mb-2 text-sm text-neutral-400">
                  {experience.year}
                </p>
              </motion.div>
              <motion.div
                whileInView={{ x: -100, opacity: 1 }}
                initial={{ x: 0, opacity: 0 }}
                transition={{ duration: 1 }}
                className="w-full max-w-xl lg:w-3/4"
              >
                <h6 className="mb-2 font-semibold">
                  {experience.role} -{" "}
                  <span className="text-sm text-purple-100">
                    {experience.company}
                  </span>
                </h6>
                <p className="mb-4 text-neutral-400">
                  {experience.description}
                </p>
                {experience.technologies &&
                  experience.technologies.map((tech, techIndex) => {
                    return (
                      <span
                        key={techIndex}
                        className="mr-2 rounded bg-neutral-900 py-2 px-1 text-sm font-medium text-purple-800"
                      >
                        {tech}
                      </span>
                    );
                  })}
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experiences;
