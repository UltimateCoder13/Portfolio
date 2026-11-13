"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="min-h-screen bg-transparent" />;

  return (
    <section className="relative z-0 w-full min-h-screen flex flex-col justify-center items-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[30vw] bg-[#FF4D00]/15 blur-[120px] rounded-full pointer-events-none -z-10"></div>


      {/* Main Typography */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 md:px-12 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-6 sm:mb-8 text-[11px] sm:text-xs md:text-sm font-medium uppercase tracking-[0.25em] sm:tracking-[0.45em] md:tracking-[0.6em] text-accent/80"
        >
          ENGINEERING PORTFOLIO // MMXXVI
        </motion.p>

        <div className="overflow-hidden px-2">
          <motion.h1
            initial={{ opacity: 0, scale: 1.1, filter: "blur(20px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative text-4xl sm:text-6xl md:text-[8.5vw] lg:text-[10vw] font-bold tracking-tighter text-foreground leading-[0.9] sm:leading-[0.8] break-words"
          >
            DHAYA SRINIVASAN
          </motion.h1>
        </div>
      </div>

      {/* Background Detail Elements (Subtle) */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <div className="absolute top-12 left-12 h-[1px] w-48 bg-accent/20" />
        <div className="absolute top-12 left-12 h-48 w-[1px] bg-accent/20" />
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 flex flex-col items-center gap-4"
      >
        <div className="h-20 w-[1px] bg-gradient-to-b from-accent/0 via-accent/50 to-accent/0" />
        <span className="text-[10px] uppercase tracking-[0.5em] text-foreground/20">
          Scroll
        </span>
      </motion.div>
    </section>
  );
}
