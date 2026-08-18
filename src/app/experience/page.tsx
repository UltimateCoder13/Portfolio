"use client";

import Link from "next/link";
import { Particles } from "@/components/ui/particles";
import CustomCursor from "@/components/CustomCursor";
import OrangeMorphBlob from "@/components/ui/orange-morph-blob";

const experiences = [
  {
    id: "01",
    dates: "Sept 2025 — Present",
    role: "Aerodynamics Fabricator",
    org: "UofA Formula Racing Team",
    bullets: [
      "Designed molds in SolidWorks and manufactured carbon fiber composite aero parts using wet lay-up.",
      "Worked in a high-risk shop environment, prioritizing precision manufacturing to meet strict weight targets.",
    ],
    skills: ["SolidWorks", "Carbon Fiber", "Wet Lay-up", "Precision Manufacturing"],
  },
  {
    id: "02",
    dates: "Sept 2018 — March 2026",
    role: "Warrant Officer 2nd Class",
    org: "Royal Canadian Air Cadets",
    bullets: [
      "Responsible for the supervision, discipline, and well-being of over 200 cadets in field survival environments.",
      "Served as Canteen Flight Sergeant, managing high-volume inventory and financial transactions.",
      "Trained for 7 years in survival training, leadership, and teamwork",
      "Awarded the prestigious Lord Strathcona Medal for overall excellence in leadership and physical fitness"
    ],
    skills: ["Leadership", "Field Ops", "Logistics", "200+ Cadets", "Lord Strathcona Medal"],
  },
  {
    id: "03",
    dates: "Sept 2024 — June 2025",
    role: "Project Lead and Co-founder",
    org: "Engineering Research & Drone Club",
    bullets: [
      "Designed and tuned custom multi-rotor drones using Arducopter/Pixhawk, gaining hands-on experience with PID loops and ESC calibration.",
      "Led a research project prototyping improvements for a PLA plastic recycling machine to close the loop on 3D printing waste.",
    ],
    skills: ["Arducopter", "Pixhawk", "PID Tuning", "PLA Recycling"],
  },
  {
    id: "04",
    dates: "Sept 2022 — June 2025",
    role: "CoFounder, Strategy Lead, Electrical and Mechanical Member",
    org: "FIRST Robotics Competition (Sparkans)",
    bullets: [
      "Engineered robust mechanisms and innovative electrical mounting solutions for competition robots.",
      "Established team operational workflows, safety protocols (SOPs) for CNC machining, and trained rookies.",
      "Nominated for the prestigious FRC Dean's List Award (2024) for leadership and technical excellence.",
    ],
    skills: ["FRC Robotics", "CNC Machining", "Electrical Systems", "Mentorship"],
  },
  {
    id: "05",
    dates: "Oct 2024 — May 2025",
    role: "Co-founder & Tech Lead",
    org: "Samsung Solve for Tomorrow",
    bullets: [
      "Won 2nd Place Nationally by engineering an assistive mobility device for quadriplegic users.",
      "Integrated a Microsoft HoloLens AR headset with a Muse EEG headband.",
      "Developed custom logic/filtering algorithms to process noisy brainwave data for wheelchair navigation.",
    ],
    skills: ["HoloLens AR", "EEG/BCI", "Signal Processing", "Assistive Tech"],
  },
];

export default function ExperiencePage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-[#F5F5F5] selection:bg-[#FF4D00] selection:text-white relative overflow-hidden font-sans">
      <CustomCursor />

      {/* Interactive Background */}
      <Particles
        className="fixed inset-0 z-0 opacity-50 pointer-events-none"
        quantity={150}
        ease={80}
        color="#FF4D00"
        size={1.2}
        refresh
      />

      {/* Page Container */}
      <div className="relative z-10 max-w-6xl mx-auto px-8 md:px-12">
        {/* Navigation Header */}
        <nav className="flex justify-between items-center py-8 border-b border-white/10">
          <Link
            href="/"
            className="text-sm font-bold tracking-[0.08em] uppercase text-[#F5F5F5] hover:text-[#FF4D00] transition-colors"
          >
            ← Back to Portfolio
          </Link>
          <Link
            href="/contact"
            className="text-sm font-bold tracking-[0.08em] uppercase text-[#F5F5F5] hover:text-[#FF4D00] transition-colors"
          >
            Let's Talk →
          </Link>
        </nav>

        {/* Page Header */}
        <div className="pt-24 pb-16 grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-12 items-center">
          {/* Left Column: Text */}
          <div className="relative z-10">
            <div className="flex items-center gap-2 text-xs tracking-[0.15em] uppercase text-[#FF4D00] mb-6">
              <span className="w-8 h-px bg-[#FF4D00]"></span>
              Career Timeline
            </div>
            <h1 className="text-5xl md:text-[5.5rem] font-extrabold leading-[0.95] tracking-tight">
              Experience
            </h1>
            <p className="text-lg leading-relaxed text-white/50 max-w-xl mt-8">
              A timeline of the teams I&apos;ve built with, the problems I&apos;ve
              solved, and the systems I&apos;ve shipped — from competition
              robotics to national-level engineering challenges.
            </p>
          </div>

          {/* Right Column: 3D Blob */}
          <div className="relative w-full h-[300px] md:h-[400px] flex items-center justify-center -z-0">
            <OrangeMorphBlob />
          </div>
        </div>

        {/* Timeline */}
        <div className="relative pb-32">
          {/* Vertical Spine */}
          <div className="absolute left-[23px] md:left-[27px] top-0 bottom-0 w-px bg-white/10" />

          {experiences.map((exp) => (
            <div key={exp.id} className="group relative pl-16 md:pl-20 pb-16 last:pb-0">
              {/* Timeline Node */}
              <div className="absolute left-[14px] md:left-[18px] top-1 z-10">
                <div className="w-[18px] h-[18px] rounded-full border-2 border-white/20 bg-[#0a0a0a] flex items-center justify-center transition-all duration-300 group-hover:border-[#FF4D00] group-hover:shadow-[0_0_12px_rgba(255,77,0,0.4)]">
                  <div className="w-[6px] h-[6px] rounded-full bg-white/20 transition-colors duration-300 group-hover:bg-[#FF4D00]" />
                </div>
              </div>

              {/* Experience Card */}
              <div className="relative bg-[#0a0a0a] border border-white/10 p-8 transition-all duration-500 overflow-hidden group-hover:border-white/20 rounded-lg">
                {/* Accent bar (top) */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#FF4D00] origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100" />

                {/* Accent bar (left) */}
                <div className="absolute top-0 left-0 w-[3px] h-0 bg-[#FF4D00] transition-all duration-400 group-hover:h-full" />

                {/* Header Row */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-6">
                  <div>
                    <div className="text-[0.7rem] tracking-[0.15em] uppercase text-white/35 mb-2 transition-colors duration-300 group-hover:text-[#FF4D00]">
                      {exp.dates}
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold tracking-tight transition-colors duration-300 group-hover:text-[#F5F5F5]">
                      {exp.role}
                    </h2>
                    <div className="text-sm text-white/50 mt-1 font-medium tracking-wide">
                      {exp.org}
                    </div>
                  </div>

                  {/* Index Badge */}
                  <div className="text-[0.7rem] tracking-[0.14em] uppercase text-white/15 font-bold shrink-0 mt-1 md:mt-0 transition-colors duration-300 group-hover:text-[#FF4D00]/40">
                    {exp.id} / {String(experiences.length).padStart(2, "0")}
                  </div>
                </div>

                {/* Bullets */}
                <ul className="flex flex-col gap-3">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-3">
                      <span className="text-[#FF4D00]/40 mt-[7px] shrink-0 transition-colors duration-300 group-hover:text-[#FF4D00]">
                        ▸
                      </span>
                      <span className="text-[0.95rem] leading-relaxed text-white/50 transition-colors duration-300 group-hover:text-white/75">
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Skill Tags — Dynamically mapped from the object */}
                {exp.skills && exp.skills.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-6 pt-5 border-t border-white/5">
                    {exp.skills.map((skill) => (
                      <span key={skill} className="text-[0.72rem] tracking-[0.04em] text-white/40 bg-white/5 border border-white/8 px-2.5 py-1 rounded-sm transition-colors duration-300 group-hover:text-white/60 group-hover:border-white/15">
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}