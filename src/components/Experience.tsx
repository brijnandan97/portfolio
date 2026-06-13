"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    role: "Full-Stack Developer",
    company: "Majid Al Futtaim",
    location: "Dubai, UAE",
    period: "Present",
    description:
      "Managing the Seller Portal for Carrefour, enabling sellers to create products, offers, and manage their retail operations across the platform.",
    highlights: [
      "Architecting seller-facing features for the Carrefour ecosystem",
      "Building scalable solutions for multi-region retail operations",
      "Collaborating with cross-functional teams across multiple countries",
    ],
    color: "#00d4ff",
    current: true,
  },
  {
    role: "Senior Software Engineer",
    company: "ZS Associates",
    location: "Gurugram, India",
    period: "Jul 2024 – Present",
    description:
      "Leading UI development for AlterIgo, a Gen-AI powered data analysis tool. Managing a team of 7 engineers.",
    highlights: [
      "Reduced initial bundle size by 40% with lazy loading",
      "Improved page load speed by 45% and user engagement by 30%",
      "Achieved 85% code coverage with comprehensive Jest testing",
      "Led team of 7 engineers for Gen-AI product development",
    ],
    color: "#b84dff",
    current: false,
  },
  {
    role: "Software Engineer",
    company: "ZS Associates",
    location: "Gurugram, India",
    period: "Dec 2021 – Jun 2024",
    description:
      "Developed and optimized responsive UI components, enhancing UX for 10K+ users.",
    highlights: [
      "Reduced redundant code by 30% through reusable component architecture",
      "Cut development time by 20% with component standardization",
      "Automated M&A tools data pre-processing, saving 15% dev time",
    ],
    color: "#ff006e",
    current: false,
  },
  {
    role: "Systems Engineer",
    company: "Infosys Limited",
    location: "Gurugram, India",
    period: "Aug 2019 – Nov 2021",
    description:
      "Engineered RESTful APIs and implemented Agile methodologies for enterprise systems.",
    highlights: [
      "Decreased API latency by 40% with optimized RESTful services",
      "Accelerated sprint efficiency by 25% with Agile practices",
      "Reduced bug occurrences by 35% through rigorous testing",
    ],
    color: "#00ff88",
    current: false,
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding relative" ref={ref}>
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-neon-pink text-sm font-mono tracking-wider uppercase">
            Career Journey
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 mb-6" style={{ color: "var(--text-heading)" }}>
            Professional{" "}
            <span className="text-gradient">Experience</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg" style={{ color: "var(--text-secondary)" }}>
            6+ years of delivering impactful solutions at industry-leading companies.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-[22px] md:left-1/2 md:-translate-x-px top-0 bottom-0 w-[2px] bg-gradient-to-b from-neon-blue via-neon-purple to-neon-pink opacity-30" />

          <div className="space-y-8 md:space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company + exp.role}
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row items-start gap-6 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="absolute left-[14px] md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full border-2 z-10"
                  style={{ borderColor: exp.color, background: exp.current ? exp.color : "var(--timeline-dot-bg)" }}
                >
                  {exp.current && (
                    <span className="absolute inset-0 rounded-full animate-ping opacity-50" style={{ background: exp.color }} />
                  )}
                </div>

                <div className={`ml-10 md:ml-0 md:w-[45%] glass-card rounded-2xl p-5 sm:p-6 ${
                  index % 2 === 0 ? "md:text-right" : "md:text-left"
                }`}>
                  <div className="flex items-center gap-2 mb-1 flex-wrap md:justify-end" style={{ justifyContent: index % 2 === 0 ? undefined : "flex-start" }}>
                    {exp.current && (
                      <span className="text-[10px] px-2 py-0.5 rounded-full font-medium" style={{ background: `${exp.color}20`, color: exp.color }}>
                        CURRENT
                      </span>
                    )}
                    <span className="text-xs" style={{ color: "var(--text-muted)" }}>{exp.period}</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold" style={{ color: "var(--text-heading)" }}>{exp.role}</h3>
                  <p className="text-sm font-medium mt-1" style={{ color: exp.color }}>
                    {exp.company} · {exp.location}
                  </p>
                  <p className="text-xs sm:text-sm mt-3 leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                    {exp.description}
                  </p>
                  <ul className={`mt-3 sm:mt-4 space-y-2 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                    {exp.highlights.map((h) => (
                      <li key={h} className="text-xs flex items-start gap-2" style={{ color: "var(--text-muted)", justifyContent: index % 2 === 0 ? "flex-end" : "flex-start" }}>
                        {index % 2 !== 0 && <span className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ background: exp.color }} />}
                        <span>{h}</span>
                        {index % 2 === 0 && <span className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ background: exp.color }} />}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
