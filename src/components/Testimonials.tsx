"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Founder, TechStart",
    text: "Brij delivered our MVP in just 3 weeks. The code quality was exceptional and the performance was exactly what we needed. Highly recommend for any React project.",
    rating: 5,
  },
  {
    name: "Sarah Mitchell",
    role: "Product Manager, FinCorp",
    text: "Working with Brij was seamless. He understood our requirements quickly and implemented features that exceeded our expectations. The dashboard he built handles real-time data flawlessly.",
    rating: 5,
  },
  {
    name: "Amit Patel",
    role: "CTO, HealthPlus",
    text: "Brij optimized our existing application and reduced load times by over 40%. His deep knowledge of performance optimization and clean code practices is impressive.",
    rating: 5,
  },
  {
    name: "David Chen",
    role: "Director of Engineering",
    text: "We hired Brij for a complex data visualization project. He used D3.js masterfully and delivered an interactive dashboard that our clients love. Communication was excellent throughout.",
    rating: 5,
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [active, setActive] = useState(0);

  return (
    <section className="section-padding relative" ref={ref}>
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-neon-green text-sm font-mono tracking-wider uppercase">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 mb-6">
            What Clients{" "}
            <span className="text-gradient">Say</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card rounded-2xl p-6 sm:p-8 md:p-12 text-center"
        >
          <div className="flex justify-center mb-6">
            {[...Array(testimonials[active].rating)].map((_, i) => (
              <svg
                key={i}
                className="w-5 h-5 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>

          <motion.p
            key={active}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed mb-6 sm:mb-8 max-w-3xl mx-auto italic"
          >
            &ldquo;{testimonials[active].text}&rdquo;
          </motion.p>

          <motion.div key={`name-${active}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <p className="font-semibold text-white">{testimonials[active].name}</p>
            <p className="text-sm text-slate-500">{testimonials[active].role}</p>
          </motion.div>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  i === active
                    ? "bg-neon-blue w-8"
                    : "bg-slate-700 hover:bg-slate-600"
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
