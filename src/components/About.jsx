import React, { useRef } from "react";

export const About = () => {
  const revealContainer = useRef(null);

  const skills = [
    "React", "Node.js", "MongoDB", "Firebase", "C++",
    "Python", "JavaScript", "Git", "Linux", "SQL"
  ];

  return (
    <section
      id="about"
      ref={revealContainer}
      className="max-w-4xl mx-auto py-20 px-4"
    >
      <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8 relative before:content-['01.'] before:mr-2 before:text-primary opacity-0 animate-fade-in">
        About Me
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Text Content */}
        <div className="md:col-span-2 text-justify space-y-6 text-foreground opacity-0 animate-fade-in-delay-1">
          <p>
            Hello! I was a math enthusiast in high school and discovered programming during my freshman year at BVUCOE, Pune. Since then, I’ve been passionate about developing web and cross-platform applications.
          </p>
          <p>
            With a knack for problem-solving and a love for technology, I thrive on building solutions that are both functional and efficient. I enjoy collaborating with teams, coordinating work effectively, and delivering results.
          </p>
          <p>
            My experience spans across designing and developing user interfaces, testing, and debugging applications. I constantly explore new technologies and contribute to open-source projects that make an impact.
          </p>
          <p>
            Here are a few technologies I’ve been working with recently:
          </p>
          {/* Skills List */}
          <ul className="grid grid-cols-2 gap-x-5 gap-y-2 mt-8 pl-0 list-none">
            {skills.map((skill, i) => (
              <li
                key={i}
                className="relative pl-5 font-mono text-sm text-primary before:absolute before:left-0 before:content-['▹'] before:text-primary"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>

        {/* Image */}
        <div className="relative max-w-xs mx-auto md:mx-0 md:max-w-full opacity-0 animate-fade-in-delay-2">
          <div className="group relative block w-full rounded-lg shadow-lg transition-all duration-300 hover:shadow-primary/20">
            <div className="relative overflow-hidden rounded-lg grayscale contrast-100 transition-all duration-300 group-hover:filter-none">
              <img
                src="/me.jpg"
                alt="Praveen Tiwari"
                className="w-full h-auto rounded-lg object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute inset-0 rounded-lg border-2 border-primary opacity-20 group-hover:opacity-40 transition-all duration-300 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
