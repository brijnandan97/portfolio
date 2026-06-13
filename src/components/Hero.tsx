"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

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
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <FloatingOrb delay={0} size={400} color="#00d4ff" x="10%" y="20%" />
      <FloatingOrb delay={2} size={300} color="#b84dff" x="70%" y="60%" />
      <FloatingOrb delay={4} size={250} color="#ff006e" x="50%" y="10%" />

      <div className="absolute inset-0 dot-pattern" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
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
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
        >
          Hi, I&apos;m{" "}
          <span className="text-gradient">Brij Singla</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg sm:text-xl md:text-3xl text-slate-400 mb-4 h-8 sm:h-10 flex items-center justify-center gap-2"
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
          className="text-base sm:text-lg text-slate-500 max-w-2xl mx-auto mb-8 sm:mb-10 px-2"
        >
          6+ years of experience crafting high-performance web applications.
          I help businesses build scalable, beautiful digital products that users love.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
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

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="mt-12 sm:mt-16 flex items-center justify-center gap-6 sm:gap-12 text-center"
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
              <div className="text-xs sm:text-sm text-slate-500 mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-slate-600 flex items-start justify-center p-1.5"
        >
          <motion.div className="w-1.5 h-3 rounded-full bg-neon-blue" />
        </motion.div>
      </motion.div>
    </section>
  );
}
