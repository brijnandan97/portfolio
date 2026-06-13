"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

const faqs = [
  {
    question: "What is your typical project timeline?",
    answer:
      "It depends on the scope. A landing page takes 1-2 weeks. A full web application can range from 3-8 weeks. I provide detailed timelines after our initial discovery call.",
  },
  {
    question: "Do you work with clients outside India?",
    answer:
      "Absolutely! I work with clients globally. Currently based between Gurugram, India and Dubai, UAE. I'm comfortable with different time zones and use async communication tools effectively.",
  },
  {
    question: "What technologies do you prefer?",
    answer:
      "For frontend: React/Next.js with TypeScript is my go-to for most projects. For backend: Node.js/Express or Python depending on requirements. I choose the best tool for each project's needs.",
  },
  {
    question: "Do you offer ongoing maintenance?",
    answer:
      "Yes! Every project includes 30 days of free post-launch support. After that, I offer monthly maintenance plans for bug fixes, updates, and feature additions.",
  },
  {
    question: "Can you work with my existing team?",
    answer:
      "Definitely. I've led teams of 7+ engineers and mentored developers at London Stock Exchange Group. I integrate well into existing workflows and can adapt to your team's processes.",
  },
  {
    question: "What's included in your pricing?",
    answer:
      "All projects include source code, documentation, deployment support, responsive design, basic SEO, and post-launch support. No hidden fees — everything is discussed upfront.",
  },
];

function FAQItem({ faq, index }: { faq: typeof faqs[0]; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="border-b last:border-0"
      style={{ borderColor: "var(--border-color)" }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-5 flex items-center justify-between text-left group"
      >
        <span className="text-base font-medium group-hover:text-neon-blue transition-colors pr-4" style={{ color: "var(--text-primary)" }}>
          {faq.question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-neon-blue text-xl flex-shrink-0"
        >
          +
        </motion.span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="text-sm leading-relaxed pb-5" style={{ color: "var(--text-secondary)" }}>
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding relative" ref={ref}>
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-neon-blue text-sm font-mono tracking-wider uppercase">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 mb-6" style={{ color: "var(--text-heading)" }}>
            Common{" "}
            <span className="text-gradient">Questions</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card rounded-2xl px-6 md:px-8"
        >
          {faqs.map((faq, i) => (
            <FAQItem key={faq.question} faq={faq} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
