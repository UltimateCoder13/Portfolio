"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Raw instantaneous mouse coordinates (0ms lag)
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Ultra-snappy spring for the outer accent ring
  const ringSpringConfig = { damping: 32, stiffness: 650, mass: 0.04 };
  const ringX = useSpring(mouseX, ringSpringConfig);
  const ringY = useSpring(mouseY, ringSpringConfig);

  useEffect(() => {
    // Check for touch / coarse pointer devices
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsTouchDevice(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.getAttribute("role") === "button" ||
        target.closest("a") ||
        target.closest("button") ||
        target.closest("[role='button']") ||
        target.closest("input") ||
        target.closest("textarea")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mousedown", handleMouseDown, { passive: true });
    window.addEventListener("mouseup", handleMouseUp, { passive: true });
    window.addEventListener("mouseover", handleMouseOver, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [mouseX, mouseY, isVisible]);

  if (isTouchDevice) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[99999] overflow-hidden transition-opacity duration-200"
      style={{ opacity: isVisible ? 1 : 0 }}
      aria-hidden="true"
    >
      {/* Outer Follower Ring - Smooth, responsive trailing aura */}
      <motion.div
        className="fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#FF4D00]/70 pointer-events-none will-change-transform"
        style={{
          x: ringX,
          y: ringY,
          width: 32,
          height: 32,
        }}
        animate={{
          scale: isClicked ? 0.75 : isHovering ? 1.6 : 1,
          backgroundColor: isHovering ? "rgba(255, 77, 0, 0.15)" : "rgba(255, 77, 0, 0)",
          borderColor: isHovering ? "rgba(255, 77, 0, 0.9)" : "rgba(255, 77, 0, 0.5)",
        }}
        transition={{ duration: 0.15, ease: "easeOut" }}
      />

      {/* Center Dot - Zero-lag instantaneous hardware tracking */}
      <motion.div
        className="fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FF4D00] pointer-events-none will-change-transform shadow-[0_0_8px_rgba(255,77,0,0.8)]"
        style={{
          x: mouseX,
          y: mouseY,
          width: 6,
          height: 6,
        }}
        animate={{
          scale: isClicked ? 0.6 : isHovering ? 0 : 1,
        }}
        transition={{ duration: 0.1 }}
      />
    </div>
  );
}

