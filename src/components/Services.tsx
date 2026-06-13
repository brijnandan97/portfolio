"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    icon: "🌐",
    title: "Web Application Development",
    description:
      "Custom web apps built with React, Next.js, or Angular. Scalable architecture, responsive design, and blazing-fast performance.",
    features: ["Single Page Apps", "Progressive Web Apps", "Server-Side Rendering"],
    color: "#00d4ff",
  },
  {
    icon: "🛒",
    title: "E-Commerce Solutions",
    description:
      "Full-featured e-commerce platforms with payment integration, inventory management, and optimized checkout flows.",
    features: ["Custom Storefronts", "Payment Integration", "Admin Dashboards"],
    color: "#b84dff",
  },
  {
    icon: "📱",
    title: "Responsive UI/UX",
    description:
      "Pixel-perfect, mobile-first interfaces that look stunning on every device. Smooth animations and intuitive user experiences.",
    features: ["Mobile-First Design", "Micro-interactions", "Accessibility"],
    color: "#ff006e",
  },
  {
    icon: "⚡",
    title: "Performance Optimization",
    description:
      "Speed up your existing applications. Code splitting, lazy loading, caching strategies, and Core Web Vitals optimization.",
    features: ["Load Time Reduction", "SEO Optimization", "Bundle Optimization"],
    color: "#00ff88",
  },
  {
    icon: "🔧",
    title: "API Development",
    description:
      "RESTful APIs and backend services with Node.js and Python. Database design, authentication, and third-party integrations.",
    features: ["REST APIs", "Database Design", "Authentication"],
    color: "#00d4ff",
  },
  {
    icon: "🎯",
    title: "Technical Consulting",
    description:
      "Architecture reviews, code audits, and technical mentorship. Make informed decisions about your tech stack and development strategy.",
    features: ["Code Reviews", "Architecture Design", "Team Mentorship"],
    color: "#b84dff",
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-padding relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-neon-purple text-sm font-mono tracking-wider uppercase">
            What I Offer
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-6">
            Services That{" "}
            <span className="text-gradient">Deliver Results</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            From concept to deployment, I provide end-to-end development services
            tailored to your business needs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="glass-card rounded-2xl p-7 group cursor-default"
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl mb-5"
                style={{ background: `${service.color}15` }}
              >
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-neon-blue transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {service.features.map((feature) => (
                  <span
                    key={feature}
                    className="text-xs px-3 py-1 rounded-full border border-white/10 text-slate-500"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
