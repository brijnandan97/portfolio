"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

const roles = [
  "Full-Stack Developer",
  "React Specialist",
  "Performance Expert",
  "UI/UX Enthusiast",
  "Team Leader",
];

function FloatingOrb({ delay, size, color, x, y }: { delay: number; size: number; color: string; x: string; y: string }) {
  return (
    <motion.div
      className="absolute rounded-full blur-3xl opacity-20"
      style={{ width: size, height: size, background: color, left: x, top: y }}
      animate={{
        y: [0, -30, 0],
        x: [0, 15, 0],
        scale: [1, 1.1, 1],
      }}
      transition={{
        duration: 8,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < currentRole.length) {
            setDisplayText(currentRole.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 40 : 80
    );
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden overflow-x-clip"
    >
      <FloatingOrb delay={0} size={400} color="#00d4ff" x="10%" y="20%" />
      <FloatingOrb delay={2} size={300} color="#b84dff" x="70%" y="60%" />
      <FloatingOrb delay={4} size={250} color="#ff006e" x="50%" y="10%" />

      <div className="absolute inset-0 dot-pattern" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-20 sm:pt-24 lg:pt-0">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="relative flex-shrink-0 order-1 lg:order-1 lg:-ml-5"
          >
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64">
              <div className="absolute -inset-0.5 rounded-full bg-gradient-to-br from-neon-blue via-neon-purple to-neon-pink opacity-40 blur-sm" />
              <div className="relative w-full h-full rounded-full overflow-hidden border" style={{ borderColor: "var(--border-input)" }}>
                <Image
                  src="/profile.png"
                  alt="Brij Singla"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>
          </motion.div>

          <div className="text-center lg:text-left flex-1 order-2 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-6"
            >
              <span className="inline-block px-4 py-2 rounded-full text-sm font-medium border border-neon-blue/30 text-neon-blue bg-neon-blue/5">
                Available for Freelance Projects
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-5xl md:text-7xl lg:text-7xl font-bold mb-6 leading-tight"
              style={{ color: "var(--text-heading)" }}
            >
              Hi, I&apos;m{" "}
              <span className="text-gradient">Brij Singla</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg sm:text-xl md:text-3xl mb-4 h-8 sm:h-10 flex items-center justify-center lg:justify-start gap-2"
              style={{ color: "var(--text-secondary)" }}
            >
              <span>I&apos;m a</span>
              <span className="text-neon-blue font-semibold">
                {displayText}
                <span className="animate-pulse">|</span>
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-base sm:text-lg max-w-2xl mb-8 sm:mb-10 px-2 lg:px-0"
              style={{ color: "var(--text-muted)" }}
            >
              6+ years of experience crafting high-performance web applications.
              I help businesses build scalable, beautiful digital products that users love.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <motion.a
                href="#contact"
                className="btn-primary text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start a Project
              </motion.a>
              <motion.a
                href="#projects"
                className="btn-secondary text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
              </motion.a>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="mt-10 sm:mt-16 flex items-center justify-center gap-8 sm:gap-12 text-center"
        >
          {[
            { number: "6+", label: "Years Experience" },
            { number: "50+", label: "Projects Delivered" },
            { number: "10K+", label: "Users Impacted" },
          ].map((stat) => (
            <motion.div
              key={stat.label}
              whileHover={{ scale: 1.1, y: -5 }}
              className="cursor-default"
            >
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gradient">
                {stat.number}
              </div>
              <div className="text-xs sm:text-sm mt-1" style={{ color: "var(--text-muted)" }}>{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden sm:block"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 flex items-start justify-center p-1.5"
          style={{ borderColor: "var(--text-muted)" }}
        >
          <motion.div className="w-1.5 h-3 rounded-full bg-neon-blue" />
        </motion.div>
      </motion.div>
    </section>
  );
}
