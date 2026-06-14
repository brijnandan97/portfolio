"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

export default function LeadMagnet() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent("Free Performance Guide Request");
    const body = encodeURIComponent(
      `Hi Brij,\n\nI'd like to receive the free Web Performance Checklist.\n\nMy email: ${email}\n\nThanks!`
    );
    window.location.href = `mailto:brijnandan9711@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-lg w-full"
    >
      <Link
        href="/"
        className="text-neon-blue text-sm font-medium hover:underline mb-8 inline-block"
      >
        &larr; Back to Home
      </Link>

      <div
        className="glass-card rounded-2xl p-8 sm:p-10"
      >
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-neon-blue/10 mb-5">
            <svg
              className="w-8 h-8 text-neon-blue"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </div>
          <h1
            className="text-2xl sm:text-3xl font-bold mb-3"
            style={{ color: "var(--text-heading)" }}
          >
            Free: Web Performance Checklist
          </h1>
          <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
            The exact 10-point checklist I use to achieve 45% load time
            improvements for my clients.
          </p>
        </div>

        <div className="space-y-3 mb-8">
          {[
            "Core Web Vitals optimization steps",
            "JavaScript bundle reduction techniques",
            "Image & font delivery best practices",
            "Caching & CDN configuration guide",
            "Real-world before/after metrics",
          ].map((item) => (
            <div
              key={item}
              className="flex items-center gap-3"
              style={{ color: "var(--text-primary)" }}
            >
              <svg
                className="w-5 h-5 text-neon-green flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-sm">{item}</span>
            </div>
          ))}
        </div>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="w-full px-4 py-3 rounded-xl text-sm focus:outline-none transition-colors"
              style={{
                background: "var(--bg-input)",
                border: "1px solid var(--border-input)",
                color: "var(--text-heading)",
              }}
            />
            <motion.button
              type="submit"
              className="btn-primary w-full !rounded-xl text-sm"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Get Free Checklist
            </motion.button>
            <p
              className="text-xs text-center"
              style={{ color: "var(--text-muted)" }}
            >
              No spam. I&apos;ll send the checklist to your email within 24 hours.
            </p>
          </form>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-4"
          >
            <div className="text-3xl mb-3">&#10003;</div>
            <p
              className="font-semibold mb-1"
              style={{ color: "var(--text-heading)" }}
            >
              Check your email client!
            </p>
            <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
              Complete sending the email and I&apos;ll reply with the checklist.
            </p>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
