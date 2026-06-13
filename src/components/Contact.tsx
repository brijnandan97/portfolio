"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const budgetRanges: Record<string, { label: string; ranges: string[] }> = {
  india: {
    label: "🇮🇳 India",
    ranges: ["₹5,000 - ₹10,000", "₹10,000 - ₹25,000", "₹25,000 - ₹50,000", "₹50,000+"],
  },
  uae: {
    label: "🇦🇪 UAE",
    ranges: ["AED 300 - AED 800", "AED 800 - AED 2,000", "AED 2,000 - AED 5,000", "AED 5,000+"],
  },
  usa: {
    label: "🇺🇸 USA",
    ranges: ["$100 - $250", "$250 - $500", "$500 - $1,200", "$1,200+"],
  },
  uk: {
    label: "🇬🇧 UK",
    ranges: ["£80 - £200", "£200 - £450", "£450 - £1,000", "£1,000+"],
  },
  europe: {
    label: "🇪🇺 Europe",
    ranges: ["€90 - €220", "€220 - €500", "€500 - €1,100", "€1,100+"],
  },
  australia: {
    label: "🇦🇺 Australia",
    ranges: ["A$150 - A$350", "A$350 - A$800", "A$800 - A$1,800", "A$1,800+"],
  },
};

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedCountry, setSelectedCountry] = useState("india");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    budget: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Project Inquiry: ${formData.projectType || "New Project"}`
    );
    const body = encodeURIComponent(
      `Hi Brij,\n\nName: ${formData.name}\nProject Type: ${formData.projectType}\nBudget: ${formData.budget}\n\n${formData.message}\n\nBest regards,\n${formData.name}`
    );
    window.location.href = `mailto:brijnandan9711@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="section-padding relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-neon-pink text-sm font-mono tracking-wider uppercase">
            Let&apos;s Talk
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 mb-6">
            Start Your{" "}
            <span className="text-gradient">Project</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Have a project in mind? Let&apos;s discuss how I can help bring your vision to life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              Get in Touch
            </h3>
            <p className="text-slate-400 mb-8 leading-relaxed">
              Whether you need a full web application, a landing page, or help
              optimizing an existing project, I&apos;m here to help. Let&apos;s build
              something great together.
            </p>

            <div className="space-y-6">
              <a
                href="mailto:brijnandan9711@gmail.com"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-neon-blue/10 flex items-center justify-center group-hover:bg-neon-blue/20 transition-colors">
                  <svg className="w-5 h-5 text-neon-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-slate-500">Email</p>
                  <p className="text-slate-200 group-hover:text-neon-blue transition-colors">
                    brijnandan9711@gmail.com
                  </p>
                </div>
              </a>

              <a href="tel:+917018289620" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-neon-purple/10 flex items-center justify-center group-hover:bg-neon-purple/20 transition-colors">
                  <svg className="w-5 h-5 text-neon-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-slate-500">Phone</p>
                  <p className="text-slate-200 group-hover:text-neon-purple transition-colors">
                    +91-7018289620
                  </p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/brij-singla-9b567016a/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-neon-pink/10 flex items-center justify-center group-hover:bg-neon-pink/20 transition-colors">
                  <svg className="w-5 h-5 text-neon-pink" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-slate-500">LinkedIn</p>
                  <p className="text-slate-200 group-hover:text-neon-pink transition-colors">
                    brij-singla
                  </p>
                </div>
              </a>

              <a
                href="https://www.instagram.com/brij_singla/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 flex items-center justify-center group-hover:from-purple-500/20 group-hover:to-pink-500/20 transition-colors">
                  <svg className="w-5 h-5 text-pink-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-slate-500">Instagram</p>
                  <p className="text-slate-200 group-hover:text-pink-400 transition-colors">
                    @brij_singla
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-neon-green/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-neon-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-slate-500">Location</p>
                  <p className="text-slate-200">Gurugram, India / Dubai, UAE</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            onSubmit={handleSubmit}
            className="glass-card rounded-2xl p-8 space-y-5"
          >
            <div>
              <label className="text-sm text-slate-400 mb-1.5 block">Your Name</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-dark-900/50 border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-neon-blue/50 transition-colors"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="text-sm text-slate-400 mb-1.5 block">Email Address</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-dark-900/50 border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-neon-blue/50 transition-colors"
                placeholder="john@company.com"
              />
            </div>
            <div>
              <label className="text-sm text-slate-400 mb-1.5 block">Project Type</label>
              <select
                value={formData.projectType}
                onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-dark-900/50 border border-white/10 text-white focus:outline-none focus:border-neon-blue/50 transition-colors appearance-none"
              >
                <option value="">Select...</option>
                <option value="Web Application">Web Application</option>
                <option value="E-Commerce">E-Commerce</option>
                <option value="Landing Page">Landing Page</option>
                <option value="Dashboard">Dashboard</option>
                <option value="API Development">API Development</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-slate-400 mb-1.5 block">Your Country</label>
                <select
                  value={selectedCountry}
                  onChange={(e) => {
                    setSelectedCountry(e.target.value);
                    setFormData({ ...formData, budget: "" });
                  }}
                  className="w-full px-4 py-3 rounded-xl bg-dark-900/50 border border-white/10 text-white focus:outline-none focus:border-neon-blue/50 transition-colors appearance-none"
                >
                  {Object.entries(budgetRanges).map(([key, { label }]) => (
                    <option key={key} value={key}>{label}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-sm text-slate-400 mb-1.5 block">Budget Range</label>
                <select
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-dark-900/50 border border-white/10 text-white focus:outline-none focus:border-neon-blue/50 transition-colors appearance-none"
                >
                  <option value="">Select...</option>
                  {budgetRanges[selectedCountry].ranges.map((range) => (
                    <option key={range} value={range}>{range}</option>
                  ))}
                </select>
              </div>
            </div>
            <div>
              <label className="text-sm text-slate-400 mb-1.5 block">Project Details</label>
              <textarea
                rows={4}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-dark-900/50 border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-neon-blue/50 transition-colors resize-none"
                placeholder="Tell me about your project, goals, and timeline..."
              />
            </div>
            <motion.button
              type="submit"
              className="btn-primary w-full !rounded-xl text-base"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {submitted ? "Opening Email Client..." : "Send Message"}
            </motion.button>
            <p className="text-xs text-slate-600 text-center">
              I typically respond within 24 hours.
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
