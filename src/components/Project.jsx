import { PROJECTS } from "../constants/data";
import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";

const Project = () => {
  return (
    <section id="projects" className="relative py-20 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.0 }}
        className="mb-16"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">
          <span className="text-primary font-mono">03.</span> Some Things I've
          Built
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 gap-16">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative"
          >
            <div className="flex flex-col lg:flex-row gap-8 items-center">
              <div className="lg:w-1/2 relative overflow-hidden rounded-lg">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto object-cover rounded-lg transition-transform duration-500 hover:scale-105"
                  />
                </a>
              </div>

              <div
                className={`lg:w-1/2 ${
                  index % 2 === 0 ? "lg:order-1" : "lg:order-0"
                }`}
              >
                <div
                  className="
                      p-5 rounded-lg border
                      border-text-muted-foreground
                      bg-transparent
                      transition-colors
                    "
                >
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors"
                    >
                      {project.title}
                    </a>
                  </h3>

                  <div className="mb-4">
                    <p className="text-muted-foreground">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="
                            text-xs font-mono px-2 py-1 rounded border
                            border-text-muted-foreground
                            text-muted-foreground
                          "
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label="GitHub repository"
                      >
                        <FiGithub className="w-5 h-5" />
                      </a>
                    )}
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="Live project"
                    >
                      <FiExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Project;
