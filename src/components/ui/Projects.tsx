"use client";

import { useState, useRef } from "react";
import { motion, useSpring } from "framer-motion";
import Link from "next/link";

const projects = [
  {
    title: "Smart Wheelchair",
    category: "Samsung Solve For Tomorrow",
    year: "2024",
    image: "/projects/Samsung Chair.jpeg",
    link: "#",
  },
  {
    title: "FRC 2025: Reefscape",
    category: "Competitive Robotics",
    year: "2025",
    image: "/projects/2025.jpg",
    link: "#",
  },
  {
    title: "FRC 2024: Crescendo",
    category: "Competitive Robotics",
    year: "2024",
    image: "/projects/2024.jpg",
    link: "#",
  },
  {
    title: "FRC 2023: Charged Up",
    category: "Competitive Robotics",
    year: "2023",
    image: "/projects/2023.jpg",
    link: "#",
  },
  {
    title: "Aero Package",
    category: "Formula Racing",
    year: "2025",
    image: "/projects/FSAE.jpg?v=3",
    link: "#",
  }
];

export function Projects() {
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const springConfig = { stiffness: 150, damping: 15, mass: 0.1 };
  const mouseX = useSpring(0, springConfig);
  const mouseY = useSpring(0, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <section id="projects" className="relative py-32 px-8 max-w-7xl mx-auto w-full" ref={containerRef} onMouseMove={handleMouseMove}>
      <div className="mb-16 border-b border-white/10 pb-8">
        <Link href="/projects" className="group flex w-full justify-between items-center">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase transition-colors duration-300 group-hover:text-[#FF4D00]">
            Projects
          </h2>
          <span className="text-3xl md:text-5xl transition-all duration-300 transform -rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[#FF4D00]">
            →
          </span>
        </Link>
      </div>

      <div className="relative flex flex-col w-full">
        {projects.map((project, index) => (
          <Link
            href={project.link}
            key={index}
            className="group border-b border-white/10 py-12 flex flex-col md:flex-row justify-between items-start md:items-center relative z-10 hover:text-[#FF4D00] transition-colors duration-500"
            onMouseEnter={() => setActiveProject(index)}
            onMouseLeave={() => setActiveProject(null)}
          >
            <h3 className="text-4xl md:text-6xl font-medium tracking-tight mb-4 md:mb-0 transition-transform duration-500 md:group-hover:translate-x-4">
              {project.title}
            </h3>
            <div className="flex gap-8 text-sm uppercase tracking-widest text-white/50 group-hover:text-[#FF4D00]/70 transition-colors duration-500">
              <span>{project.category}</span>
              <span>{project.year}</span>
            </div>
          </Link>
        ))}
      </div>

      {/* Floating Image Reveal */}
      <motion.div 
        className="pointer-events-none absolute left-0 top-0 z-50 w-[400px] h-[400px] hidden md:flex items-center justify-center"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: activeProject !== null ? 1 : 0,
          scale: activeProject !== null ? 1 : 0.8,
        }}
        transition={{ opacity: { duration: 0.2 }, scale: { duration: 0.2 } }}
      >
        {projects.map((project, index) => (
          <div 
            key={index}
            className="absolute inset-0 flex items-center justify-center transition-opacity duration-300"
            style={{ opacity: activeProject === index ? 1 : 0 }}
          >
            <img 
              src={project.image} 
              alt={project.title} 
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl shadow-black/50"
            />
          </div>
        ))}
      </motion.div>
    </section>
  );
}
