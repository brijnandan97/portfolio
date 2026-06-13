"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const highlights = [
  {
    icon: "🚀",
    title: "Performance Obsessed",
    description: "Reduced load times by 45% and bundle sizes by 40% through optimization techniques",
  },
  {
    icon: "👥",
    title: "Team Leader",
    description: "Led teams of 7+ engineers, delivering complex applications on schedule",
  },
  {
    icon: "🏢",
    title: "Enterprise Scale",
    description: "Built applications serving 10K+ users at companies like ZS Associates & Majid Al Futtaim",
  },
  {
    icon: "⚡",
    title: "Full-Stack Expertise",
    description: "End-to-end development from React/Angular frontends to Node.js/Python backends",
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding relative" ref={ref}>
      <div className="absolute inset-0 grid-pattern opacity-50" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-neon-blue text-sm font-mono tracking-wider uppercase">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 mb-6" style={{ color: "var(--text-heading)" }}>
            Building Digital{" "}
            <span className="text-gradient">Excellence</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg" style={{ color: "var(--text-secondary)" }}>
            I&apos;m a Senior Full-Stack Developer currently at Majid Al Futtaim, managing
            the Seller Portal for Carrefour. I specialize in creating scalable,
            high-performance web applications that drive business results.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="glass-card rounded-2xl p-6 text-center"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold mb-2" style={{ color: "var(--text-heading)" }}>
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 sm:mt-16 glass-card rounded-2xl p-6 sm:p-8 md:p-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: "var(--text-heading)" }}>
                Why Work With Me?
              </h3>
              <p className="leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
                With experience at top-tier companies like ZS Associates, Infosys, and
                Majid Al Futtaim, I bring enterprise-grade engineering practices to every
                project. Whether it&apos;s a startup MVP or a large-scale platform, I deliver
                clean, maintainable, and performant code.
              </p>
              <ul className="space-y-3">
                {[
                  "Pixel-perfect implementation from designs",
                  "SEO-optimized & accessible applications",
                  "Rigorous testing (85%+ code coverage)",
                  "Clear communication & timely delivery",
                ].map((point) => (
                  <li key={point} className="flex items-center gap-3" style={{ color: "var(--text-primary)" }}>
                    <span className="w-2 h-2 rounded-full bg-neon-green flex-shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "6+", label: "Years of Experience" },
                { value: "50+", label: "Projects Completed" },
                { value: "85%", label: "Test Coverage" },
                { value: "45%", label: "Performance Gains" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ scale: 1.05 }}
                  className="rounded-xl p-5 text-center border"
                  style={{ background: "var(--bg-tertiary)", borderColor: "var(--border-color)" }}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ delay: 0.8 + i * 0.1, type: "spring" }}
                    className="text-2xl md:text-3xl font-bold text-gradient"
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-xs mt-1" style={{ color: "var(--text-muted)" }}>{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
