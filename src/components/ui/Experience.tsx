import Link from "next/link";

export function Experience() {
  const experiences = [
    {
      role: "Candidate for B.S. in Engineering",
      company: "University of Alberta",
      date: "Class of 2029",
      description: "Currently pursuing an engineering degree. Relevant coursework includes Multivariable Calculus, Engineering Mechanics, Differential Equations, and Computer Programming.",
      skills: ["Python", "HTML/CSS/JS", "SolidWorks", "Fusion 360"],
    },
    {
      role: "Aero Sub-Team Member",
      company: "UofA Formula Racing Team",
      date: "Sept 2025 — Present",
      description: "Designed precision molds and mounting brackets in SolidWorks to optimize aerodynamic geometry. Fabricated carbon fiber composite parts using wet lay-up techniques.",
      skills: ["SolidWorks", "CAD", "Composites", "Manufacturing"],
    },
    {
      role: "Co-Founder & Build Lead",
      company: "Sparkans FRC Robotics Team",
      date: "Sept 2022 — June 2025",
      description: "Co-founded team and established core operational workflows. Engineered robust mechanisms and electrical mounting solutions. Nominated for the 2024 FRC Dean's List Award.",
      skills: ["Electronics Integration", "Mechanical Design", "Rapid Prototyping"],
    },
    {
      role: "Warrant Officer 2nd Class",
      company: "Air Cadets",
      date: "Sept 2019 — March 2026",
      description: "Led over 200 cadets in survival and leadership training. Awarded the Lord Strathcona Medal and recognized as Top Cadet for three consecutive years.",
      skills: ["Leadership", "Crisis Management", "Logistics"],
    },
  ];

  return (
    <section id="experience" className="relative py-32 px-8 max-w-7xl mx-auto w-full z-10">
      <div className="mb-16 border-b border-white/10 pb-8 flex flex-col gap-2">
        <Link href="/experience" className="group flex w-full justify-between items-center">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase text-[#F5F5F5] transition-colors duration-300 group-hover:text-[#FF4D00]">
            Experience
          </h2>
          <span className="text-3xl md:text-5xl transition-all duration-300 transform -rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[#FF4D00] text-[#F5F5F5]">
            →
          </span>
        </Link>
        <span className="text-[#FF4D00] text-sm font-medium tracking-[0.2em] uppercase">
          Career & Education
        </span>
      </div>

      <div className="flex flex-col w-full">
        {experiences.map((exp, index) => (
          <div 
            key={index}
            className="group relative grid grid-cols-1 md:grid-cols-[300px_1fr] gap-8 py-12 border-b border-white/10 transition-colors duration-500 hover:bg-white/[0.02] -mx-8 px-8"
          >
            {/* Left Column: Date & Company */}
            <div className="flex flex-col gap-2 pt-2">
              <span className="text-sm font-bold tracking-widest text-white/40 uppercase">{exp.date}</span>
              <span className="text-lg font-medium text-[#FF4D00]">{exp.company}</span>
            </div>

            {/* Right Column: Role, Description, Skills */}
            <div className="flex flex-col gap-4">
              <h3 className="text-2xl md:text-3xl font-medium tracking-tight text-[#F5F5F5]">
                {exp.role}
              </h3>
              <p className="text-white/60 leading-relaxed max-w-2xl text-sm md:text-base">
                {exp.description}
              </p>
              <div className="flex flex-wrap gap-3 mt-4">
                {exp.skills.map((skill, sIndex) => (
                  <span 
                    key={sIndex} 
                    className="px-4 py-1.5 rounded-full border border-white/10 text-xs font-medium tracking-wider text-white/70 uppercase transition-colors duration-300 group-hover:border-[#FF4D00]/50 group-hover:text-[#FF4D00]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
