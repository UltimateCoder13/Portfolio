"use client";

import Link from "next/link";
import { Particles } from "@/components/ui/particles";
import CustomCursor from "@/components/CustomCursor";

const experiences = [
  {
    id: "01",
    dates: "Oct 2025 - Present",
    role: "FTC Team Mentor",
    org: "STEM Collegiate",
    bullets: [
      "Mentored students through the engineering design cycle, teaching 3D CAD modeling, mechanical fabrication and good electrical practices.",
      "Teaching students root-cause troubleshooting techniques to solve mechanical and electrical failures under tight time limits.",
      "Guiding students in the robot building process and ensuring that the robot is competition-ready.",
      "Managed technical inspection prep, and pit strategy to support team performance during live events."],
    skills: ["Mentorship", "Engineering Design Cycle", "Troubleshooting", "Teamwork", "Communication", "Leadership",],
  },
  {
    id: "02",
    dates: "Sept 2025 — Present",
    role: "Aerodynamics Team Member",
    org: "University of Alberta Formula Racing Team",
    bullets: [
      "Designed molds in SolidWorks and manufactured carbon fiber composite aero parts using vacuum assisted wet lay-up.",
      "Collaborated in a shop environment, prioritizing precision and quality for the car.",
      "Led the adoption of CNC-machined foam molds to improve the scalability and quality of the team's composite manufacturing process."
    ],
    skills: ["SolidWorks", "Carbon Fiber", "Wet Lay-up", "3D Printing", "CNC Machining"],
  },
  {
    id: "03",
    dates: "May 2026 — Aug 2026",
    role: "Composites Research Intern",
    org: "Composites Research Lab",
    bullets: [
      "Conducted advanced materials research in a laboratory environment, investigating the mechanical properties and behavior of experimental composites.",
      "Fabricated and cured test specimens utilizing vacuum-assisted resin/composite lay-up techniques to evaluate structural integrity.",
      "Operated large-scale additive manufacturing systems to 3D print Shape Memory Polymers (SMP) and PLA with a pellet extruder.",
      "Developed and optimized thermal forming processes to transition SMP components from 2D sheets to complex 3D geometries."
    ],
    skills: ["Vacuum Lay-up", "Experimental Composites", "SMP 3D Printing", "Lab Research"],
  },
  {
    id: "04",
    dates: "Sept 2018 — March 2026",
    role: "Warrant Officer 2nd Class",
    org: "Royal Canadian Air Cadets",
    bullets: [
      "Responsible for the supervision, discipline, and well-being of over 200 cadets in field survival environments.",
      "Served as Canteen Flight Sergeant, managing high-volume inventory and financial transactions.",
      "Trained for 7 years in survival training, leadership, and teamwork",
      "Awarded the prestigious Lord Strathcona Medal for overall excellence in leadership and physical fitness",
      "Was awarded Top Cadets for 3 years in a row"
    ],
    skills: ["Leadership", "Survival Training", "Logistics", "200+ Cadets", "Lord Strathcona Medal"],
  },
  {
    id: "05",
    dates: "Sept 2022 — June 2025",
    role: "Co-founder",
    org: "STEM IA Drone Club",
    bullets: [
      "Designed and tuned custom multi-rotor drones using Arducopter/Pixhawk, gaining hands-on experience with PID loops and ESC calibration.",
      "Led new memeber in gaining experience in various aspects of drone technology such as getting their drone licence",
      "Build a large scale RC airplane using foam featuring ESCs and flight controllers"
    ],
    skills: ["Arducopter", "Pixhawk", "PID Tuning", "Electronics", "Leadership", "Mentorship"],
  },
  {
    id: "06",
    dates: "Sept 2022 — June 2025",
    role: "CoFounder, Strategy Lead, Electrical and Mechanical Team Member ",
    org: "FRC Team 9277 - Sparkans",
    bullets: [
      "Engineered robust mechanisms and innovative electrical mounting solutions for competition robots.",
      "Established team operational workflows, safety protocols (SOPs) for CNC machining, and trained rookies.",
      "Nominated for the prestigious FRC Dean's List Award (2024) for leadership and technical excellence.",
      "Ranked second in Alberta for the 2025 season",
    ],
    skills: ["FRC Robotics", "CNC Machining", "Electrical Systems", "Mentorship"],
  },
  {
    id: "07",
    dates: "Oct 2024 — May 2025",
    role: "Co-founder & Build Lead",
    org: "Samsung Solve for Tomorrow",
    bullets: [
      "Won 2nd Place Nationally by engineering an assistive mobility device for quadriplegic users.",
      "Integrated a Microsoft HoloLens AR headset with a Muse EEG headband.",
      "Developed custom logic/filtering algorithms to process noisy brainwave data for wheelchair navigation.",
      "Won over $20 000 for my highschool robotics team."
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
        <div className="pt-24 pb-20 flex flex-col items-center text-center max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-2 text-xs tracking-[0.15em] uppercase text-[#FF4D00] mb-6">
            <span className="w-8 h-px bg-[#FF4D00]"></span>
            Career Timeline
            <span className="w-8 h-px bg-[#FF4D00]"></span>
          </div>
          <h1 className="text-5xl md:text-[5.5rem] font-extrabold leading-[0.95] tracking-tight">
            Experience
          </h1>
          <p className="text-lg leading-relaxed text-white/50 max-w-2xl mt-8">
            A timeline of the teams I&apos;ve built with, the problems I&apos;ve
            solved. From competition robotics to national-level engineering challenges.
          </p>
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