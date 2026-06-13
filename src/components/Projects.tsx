"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    title: "Carrefour Seller Portal",
    description:
      "Enterprise-scale seller management platform for Carrefour retail. Enables sellers to create products, manage offers, and handle operations across multiple regions.",
    tech: ["React", "TypeScript", "Node.js", "PostgreSQL", "REST APIs"],
    category: "Enterprise",
    color: "#00d4ff",
    metrics: "Multi-region · Thousands of sellers",
  },
  {
    title: "AlterIgo - Gen AI Platform",
    description:
      "AI-powered data analysis tool enabling users to query and visualize complex datasets using natural language. Led a team of 7 engineers.",
    tech: ["React", "TypeScript", "Python", "D3.js", "Web Workers"],
    category: "AI/ML",
    color: "#b84dff",
    metrics: "40% faster loads · 85% test coverage",
  },
  {
    title: "Chat-X Real-Time App",
    description:
      "Real-time chat application with 99.9% uptime. WebSocket-based communication with a fully responsive interface optimized for mobile.",
    tech: ["React", "TypeScript", "Tailwind", "WebSockets", "Node.js"],
    category: "Real-Time",
    color: "#ff006e",
    link: "https://github.com/brijnandan97",
    metrics: "99.9% uptime · 50% better mobile UX",
  },
  {
    title: "M&A Analytics Tools",
    description:
      "Mergers & Acquisitions data processing tools that automated pre-processing workflows, cutting development time and enabling faster deal analysis.",
    tech: ["Angular", "Python", "D3.js", "REST APIs"],
    category: "Finance",
    color: "#00ff88",
    metrics: "15% faster development · Automated workflows",
  },
  {
    title: "Enterprise Component Library",
    description:
      "Reusable component architecture that reduced redundant code by 30% across multiple projects. Standardized UI patterns for the organization.",
    tech: ["React", "TypeScript", "Jest", "Storybook", "MobX"],
    category: "Developer Tools",
    color: "#00d4ff",
    metrics: "30% less code · 20% faster dev time",
  },
  {
    title: "Performance Optimization Suite",
    description:
      "Collection of performance improvements across multiple applications including lazy loading, code splitting, and Web Worker integration.",
    tech: ["React", "Webpack", "Web Workers", "Lighthouse"],
    category: "Performance",
    color: "#b84dff",
    metrics: "45% faster loads · 20% better responsiveness",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding relative" ref={ref}>
      <div className="absolute inset-0 dot-pattern opacity-30" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-neon-blue text-sm font-mono tracking-wider uppercase">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-6">
            Featured{" "}
            <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            A selection of projects that showcase my expertise in building
            production-grade applications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="glass-card rounded-2xl p-6 group flex flex-col"
            >
              <div className="flex items-center justify-between mb-4">
                <span
                  className="text-xs font-medium px-3 py-1 rounded-full"
                  style={{
                    background: `${project.color}15`,
                    color: project.color,
                  }}
                >
                  {project.category}
                </span>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-500 hover:text-neon-blue transition-colors"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                )}
              </div>

              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-neon-blue transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-grow">
                {project.description}
              </p>

              <div className="text-xs text-slate-500 mb-4 flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5" style={{ color: project.color }} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                </svg>
                {project.metrics}
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] px-2.5 py-1 rounded-md bg-white/5 text-slate-400 border border-white/5"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/brijnandan97"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            View More on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
