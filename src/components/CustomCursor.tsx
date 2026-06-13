"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  const springX = useSpring(cursorX, { damping: 25, stiffness: 300 });
  const springY = useSpring(cursorY, { damping: 25, stiffness: 300 });

  const trailX = useSpring(cursorX, { damping: 40, stiffness: 150 });
  const trailY = useSpring(cursorY, { damping: 40, stiffness: 150 });

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia("(pointer: coarse)").matches || window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    const handleHoverIn = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, [role='button'], input, textarea, select")) {
        setIsHovering(true);
      }
    };
    const handleHoverOut = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, [role='button'], input, textarea, select")) {
        setIsHovering(false);
      }
    };

    document.addEventListener("mouseover", handleHoverIn);
    document.addEventListener("mouseout", handleHoverOut);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseover", handleHoverIn);
      document.removeEventListener("mouseout", handleHoverOut);
    };
  }, [isMobile, cursorX, cursorY]);

  if (isMobile) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-difference"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <motion.div
          animate={{
            width: isHovering ? 48 : isClicking ? 8 : 12,
            height: isHovering ? 48 : isClicking ? 8 : 12,
            borderRadius: "50%",
          }}
          transition={{ type: "spring", damping: 20, stiffness: 300 }}
          style={{
            background: isHovering
              ? "rgba(0, 212, 255, 0.15)"
              : "white",
            border: isHovering ? "2px solid rgba(0, 212, 255, 0.8)" : "none",
          }}
        />
      </motion.div>

      <motion.div
        className="fixed top-0 left-0 z-[9998] pointer-events-none"
        style={{
          x: trailX,
          y: trailY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <motion.div
          animate={{
            width: isHovering ? 60 : 32,
            height: isHovering ? 60 : 32,
            opacity: isClicking ? 0.8 : 0.4,
          }}
          transition={{ type: "spring", damping: 20, stiffness: 200 }}
          style={{
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(0, 212, 255, 0.15), rgba(184, 77, 255, 0.05))",
            border: "1px solid rgba(0, 212, 255, 0.2)",
          }}
        />
      </motion.div>
    </>
  );
}
