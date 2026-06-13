"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const techCategories = [
  {
    title: "Frontend",
    techs: [
      { name: "React", color: "#61DAFB" },
      { name: "Next.js", color: "#ffffff" },
      { name: "Angular", color: "#DD0031" },
      { name: "TypeScript", color: "#3178C6" },
      { name: "JavaScript", color: "#F7DF1E" },
      { name: "Tailwind CSS", color: "#06B6D4" },
      { name: "HTML5", color: "#E34F26" },
      { name: "CSS3", color: "#1572B6" },
    ],
  },
  {
    title: "Backend",
    techs: [
      { name: "Node.js", color: "#339933" },
      { name: "Express.js", color: "#ffffff" },
      { name: "Python", color: "#3776AB" },
      { name: "REST APIs", color: "#00d4ff" },
      { name: "PostgreSQL", color: "#4169E1" },
      { name: "MySQL", color: "#4479A1" },
      { name: "MongoDB", color: "#47A248" },
    ],
  },
  {
    title: "Tools & Others",
    techs: [
      { name: "Git", color: "#F05032" },
      { name: "Docker", color: "#2496ED" },
      { name: "Jest", color: "#C21325" },
      { name: "Vite", color: "#646CFF" },
      { name: "D3.js", color: "#F9A03C" },
      { name: "MobX", color: "#FF9955" },
      { name: "Material-UI", color: "#007FFF" },
      { name: "Figma", color: "#F24E1E" },
    ],
  },
];

export default function TechStack() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-neon-green text-sm font-mono tracking-wider uppercase">
            Tech Arsenal
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-6">
            Tools I{" "}
            <span className="text-gradient">Master</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            A versatile tech stack refined over 6+ years of building production applications.
          </p>
        </motion.div>

        <div className="space-y-12">
          {techCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: catIndex * 0.2 }}
            >
              <h3 className="text-lg font-semibold text-slate-300 mb-4 flex items-center gap-3">
                <span className="w-8 h-[1px] bg-gradient-to-r from-neon-blue to-transparent" />
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.techs.map((tech, i) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      duration: 0.4,
                      delay: catIndex * 0.2 + i * 0.05,
                    }}
                    whileHover={{
                      scale: 1.1,
                      boxShadow: `0 0 20px ${tech.color}40`,
                    }}
                    className="px-5 py-2.5 rounded-xl border border-white/10 bg-dark-800/50 text-sm font-medium text-slate-300 cursor-default transition-colors hover:border-opacity-50"
                    style={{
                      ["--hover-border" as string]: tech.color,
                    }}
                  >
                    <span
                      className="inline-block w-2 h-2 rounded-full mr-2"
                      style={{ background: tech.color }}
                    />
                    {tech.name}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
