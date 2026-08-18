"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export default function Hero() {
  const [currentTime, setCurrentTime] = useState("");
  const [mounted, setMounted] = useState(false);
  const [location, setLocation] = useState("LOCATING...");

  useEffect(() => {
    setMounted(true);

    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = Math.abs(position.coords.latitude).toFixed(4);
          const latDir = position.coords.latitude >= 0 ? "N" : "S";
          const lon = Math.abs(position.coords.longitude).toFixed(4);
          const lonDir = position.coords.longitude >= 0 ? "E" : "W";
          setLocation(`${lat} ${latDir} / ${lon} ${lonDir}`);
        },
        () => setLocation("LOCATION UNAVAILABLE"),
        { timeout: 10000, maximumAge: 60000 }
      );
    } else {
      setLocation("LOCATION UNAVAILABLE");
    }

    const interval = setInterval(() => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString("en-US", { hour12: false }));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) return <div className="min-h-screen bg-transparent" />;

  return (
    <section className="relative z-0 w-full min-h-screen flex flex-col justify-center items-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[30vw] bg-[#FF4D00]/15 blur-[120px] rounded-full pointer-events-none -z-10"></div>


      {/* Main Typography */}
      <div className="relative z-10 w-full text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-8 text-xs font-medium uppercase tracking-[0.6em] text-accent/80 sm:text-sm"
        >
          ENGINEERING PORTFOLIO // MMXXVI
        </motion.p>

        <div className="overflow-hidden">
          <motion.h1
            initial={{ opacity: 0, scale: 1.1, filter: "blur(20px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative text-5xl font-bold tracking-tighter text-foreground sm:text-[10vw] leading-[0.8]"
          >
            DHAYA SRINIVASAN
          </motion.h1>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-12 flex flex-col items-center gap-6 text-[10px] font-light tracking-[0.3em] text-foreground/40 sm:flex-row sm:justify-center sm:gap-16 sm:text-xs"
        >
          <div className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
            <span>STATUS: ACTIVE</span>
          </div>
          <div className="hidden sm:block">SYSTEM_TIME: {currentTime || "00:00:00"}</div>
          <div>LOCATION: {location}</div>
        </motion.div>
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
