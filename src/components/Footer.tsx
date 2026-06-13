"use client";

import { motion } from "framer-motion";

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const services = [
  "Web Application Development",
  "E-Commerce Solutions",
  "UI/UX Design",
  "Performance Optimization",
  "API Development",
  "Technical Consulting",
];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-dark-900">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
          <div className="col-span-2 md:col-span-1">
            <a href="#home" className="text-3xl font-bold text-gradient inline-block mb-4">
              BS.
            </a>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              Senior Full-Stack Developer building high-performance web applications
              that drive business results.
            </p>
            <div className="flex gap-3">
              <a
                href="https://github.com/brijnandan97"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-slate-500 hover:text-neon-blue hover:bg-neon-blue/10 transition-all"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/brij-singla-9b567016a/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-slate-500 hover:text-neon-purple hover:bg-neon-purple/10 transition-all"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="mailto:brijnandan9711@gmail.com"
                className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-slate-500 hover:text-neon-pink hover:bg-neon-pink/10 transition-all"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-500 hover:text-neon-blue transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2.5">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-sm text-slate-500">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">
              Ready to Start?
            </h4>
            <p className="text-sm text-slate-500 mb-4">
              Let&apos;s discuss your next project and build something amazing together.
            </p>
            <motion.a
              href="#contact"
              className="btn-primary inline-block text-sm !py-2.5 !px-5"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get a Free Quote
            </motion.a>
          </div>
        </div>

        <div className="border-t border-white/5 mt-12 pt-8 flex items-center justify-center">
          <p className="text-xs text-slate-600">
            &copy; {new Date().getFullYear()} Brij Singla. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
