"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    step: "01",
    title: "Discovery",
    description: "We discuss your goals, requirements, target audience, and timeline. I analyze competitors and define the project scope.",
    duration: "1-2 Days",
    icon: "💡",
    color: "#00d4ff",
  },
  {
    step: "02",
    title: "Design & Planning",
    description: "Wireframes, UI mockups, and technical architecture. You approve the design before any code is written.",
    duration: "3-5 Days",
    icon: "🎨",
    color: "#b84dff",
  },
  {
    step: "03",
    title: "Development",
    description: "Clean, tested, production-ready code. Regular updates and demos so you're always in the loop.",
    duration: "1-4 Weeks",
    icon: "⚙️",
    color: "#ff006e",
  },
  {
    step: "04",
    title: "Testing & QA",
    description: "Rigorous testing across devices and browsers. Performance optimization and accessibility checks.",
    duration: "2-3 Days",
    icon: "🧪",
    color: "#00ff88",
  },
  {
    step: "05",
    title: "Launch & Support",
    description: "Deployment, DNS setup, and monitoring. 30 days of free support post-launch for bug fixes.",
    duration: "1-2 Days",
    icon: "🚀",
    color: "#00d4ff",
  },
];

export default function Process() {
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
          <span className="text-neon-blue text-sm font-mono tracking-wider uppercase">
            How I Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-6">
            My{" "}
            <span className="text-gradient">Process</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            A transparent, collaborative approach that keeps you in control at every stage.
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-[2px] bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink opacity-20 -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="glass-card rounded-2xl p-6 text-center relative"
              >
                <div
                  className="w-12 h-12 mx-auto rounded-full flex items-center justify-center text-xl mb-4"
                  style={{ background: `${step.color}15` }}
                >
                  {step.icon}
                </div>
                <div
                  className="text-xs font-mono font-bold mb-2"
                  style={{ color: step.color }}
                >
                  STEP {step.step}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-3">
                  {step.description}
                </p>
                <span
                  className="text-[11px] font-medium px-3 py-1 rounded-full"
                  style={{ background: `${step.color}10`, color: step.color }}
                >
                  {step.duration}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
