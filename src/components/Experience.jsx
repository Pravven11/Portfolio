import { EXPERIENCE } from "../constants/data";
import { motion } from "framer-motion";

const Experience = () => (
  <section id="experience" className="relative py-20 px-6 max-w-6xl mx-auto">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-16"
    >
      <h2 className="text-2xl md:text-3xl font-bold text-foreground">
        <span className="text-primary font-mono">02.</span> Professional Journey
      </h2>
    </motion.div>

    <div className="relative">
      {/* Vertical timeline line */}
      <div className="absolute left-8 top-0 h-full w-0.5 bg-gradient-to-b from-primary/20 via-text-muted-foreground to-text-muted-foreground/20" />

      <div className="space-y-12 pl-12">
        {EXPERIENCE.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="relative text-justify"

          >
            {/* Timeline dot */}
            <div className="absolute -left-11 top-1.5 w-5 h-5 rounded-full border-2 border-primary flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-primary" />
            </div>

            <div
              className="
                    p-8 rounded-lg border
                    border-text-muted-foreground
                    bg-transparent
                    transition-colors
                  "
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {exp.role}{" "}
                    <span className="text-primary">@ {exp.company}</span>
                  </h3>
                  <p className="font-mono text-sm text-muted-foreground mt-1">
                    {exp.year}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, i) => (
                    <span
                      key={i}
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
              </div>

              <motion.div
                initial={{ height: 0, opacity: 0 }}
                whileInView={{ height: "auto", opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 + 0.2 }}
                className="overflow-hidden mt-6"
              >
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                  {exp.description.split("\n").map((point, i) => (
                    <li key={i} className="leading-relaxed">
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
