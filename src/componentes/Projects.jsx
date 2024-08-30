import React from "react";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1 }}
        className="text-3xl my-20 text-center"
      >
        Projects
      </motion.h2>
      <div>
        {PROJECTS.map((project, index) => {
          return (
            <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
              <motion.div
                whileInView={{ x: 0, opacity: 1 }}
                initial={{ x: -100, opacity: 0 }}
                transition={{ duration: 1.5 }}
                className="w-full lg:w-1/4"
              >
                <img
                  src={project.image}
                  width={150}
                  height={150}
                  alt={project.title}
                  className="mb-6 rounded"
                />
              </motion.div>
              <motion.div
                whileInView={{ x: -100, opacity: 1 }}
                initial={{ x: 0, opacity: 0 }}
                transition={{ duration: 1 }}
                className="w-full max-w-xl lg:w-3/4"
              >
                <h6 className="mb-2 font-semibold">{project.title}</h6>
                <p className="mb-4 text-neutral-400">{project.description}</p>
                {project.technologies &&
                  project.technologies.map((tech, techIndex) => {
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

export default Projects;
