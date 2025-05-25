import React from "react";
import { motion } from "framer-motion";

export const About = () => {
  const skills = [
    "React",
    "Node.js",
    "MongoDB",
    "Firebase",
    "C++",
    "Python",
    "JavaScript",
    "Git",
    "Linux",
    "SQL",
  ];

  return (
    <section id="about" className="relative py-28 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-16"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">
          <span className="text-primary font-mono">01.</span> About Me
        </h2>
        <div className="hidden md:block h-px bg-border mt-4 w-64" />
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="lg:col-span-2 space-y-6 text-muted-foreground"
        >
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-justify"
          >
            Hello! I was a math enthusiast in high school and discovered
            programming during my freshman year at BVUCOE, Pune. Since then,
            I've been passionate about developing web and cross-platform
            applications.With a knack for problem-solving and a love for
            technology, I thrive on building solutions that are both functional
            and efficient. I enjoy collaborating with teams, coordinating work
            effectively, and delivering results.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-justify"
          >
            My experience spans across designing and developing user interfaces,
            testing, and debugging applications. I constantly explore new
            technologies and contribute to open-source projects that make an
            impact. Here are a few technologies I've been working with recently:
          </motion.p>

          {/* Skills List */}
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1 }}
            className="grid grid-cols-2 gap-x-8 gap-y-2 mt-4 pl-0 list-none"
          >
            {skills.map((skill, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 1 + i * 0.1 }}
                viewport={{ once: true }}
                className="relative pl-5 font-mono text-md text-blue-700"
              >
                {skill}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative w-full max-w-xs mx-auto lg:mx-0 lg:max-w-md"
        >
          <div className="group relative">
            <div className="absolute -inset-4 rounded-xl bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            <div className="absolute inset-0 rounded-xl border-2 border-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            <img
              src="/me.jpg"
              alt="Praveen Tiwari"
              className="w-full h-auto rounded-xl object-cover shadow-lg transition-transform duration-500 group-hover:-translate-y-2"
              loading="lazy"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
