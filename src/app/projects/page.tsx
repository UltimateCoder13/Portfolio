"use client";

import Link from "next/link";
import { Particles } from "@/components/ui/particles";
import CustomCursor from "@/components/CustomCursor";

const projects = [
  {
    id: "01",
    slug: "frc-2023-robot",
    title: "FRC Competitive Robot: Systems & Drivetrain",
    timeline: "2022 – 2023",
    description: "Co-built a custom tank-drive competition robot for the 2023 FRC season. Managed the electrical layout, wiring the RoboRIO control board, power distribution, and CAN bus network. Ran shop testing to isolate and fix Java/WPILib software-to-hardware communication issues prior to competition matches.",
    image: "/projects/2023.jpg",
    stack: ["Java", "WPILib", "RoboRIO", "CAN Bus", "Systems Integration", "Drivetrain Mechanics"]
  },
  {
    id: "02",
    slug: "frc-2024-robot",
    title: "2024 FRC Robot: Swerve Architecture & Kinetic Systems",
    timeline: "2024",
    description: "Served as competition driver and strategy lead while transitioning the robot to a custom swerve drive and brushless motor setup. Co-engineered a dual-flywheel intake/shooter mechanism, integrated pneumatics and Limelight vision hardware under strict weight limits, and ran root-cause post-match testing on power delivery failures. Named a 2024 FIRST Dean's List Semi-Finalist.",
    image: "/projects/2024.jpg",
    stack: ["Swerve Drive Mechanics", "Dual-Flywheel Systems", "Brushless Motors", "Competitive Strategy", "Root-Cause Analysis", "Dean's List Semi-Finalist"]
  },
  {
    id: "03",
    slug: "frc-2025-robot",
    title: "2025 FRC Robot: High-Density Packaging & CNC Fabrication",
    timeline: "2025",
    description: "Fabricated a multi-stage elevator system and differential claw mechanism, operating a Carvera CNC mill to machine custom aluminum and polycarbonate parts. Designed a high-density vertical electronics panel and under-carriage wire routing to solve tight chassis space constraints. Integrated Kraken X60 and NEO Vortex actuators, resolving motor velocity/acceleration firmware logic during fast-turnaround pit repairs. Co-received the FIRST Imagery and Sustainability Awards.",
    image: "/projects/2025.jpg",
    stack: ["CNC Machining (Carvera)", "CAD/CAM", "Elevator Mechanics", "High-Density Wiring", "Driver", "Firmware Troubleshooting"]
  },
  {
    id: "04",
    slug: "fsae-aero-package",
    title: "Carbon Fiber Aerodynamics & Composite Manufacturing",
    timeline: "2025 – Present",
    description: "Designed molds in SolidWorks and manufactured carbon fiber aero components, including multi-element front and rear wings, side diffusers, and the front nose cone. Applied vacuum-assisted wet lay-ups, added structural core materials to eliminate side-plate flexing, and cut metal and polycarbonate hardware on water jet and fiber/CO2 lasers. Led the move toward CNC-machined foam molds for team production.",
    image: "/projects/FSAE.jpg?v=3",
    stack: ["Carbon Fiber Composites", "Vacuum Bagging", "SolidWorks", "Water Jet Machining", "Laser Cutting (Fiber & CO2)", "Structural Cores", "3D-Printed Tooling", "CNC Machining"]
  },
  {
    id: "05",
    slug: "hero-chair",
    title: "Hero Chair: AR & Brain-Computer Interface Wheelchair",
    timeline: "2023 - 2024",
    description: "Co-founded the project and built the physical frame for an omnidirectional wheelchair aimed at quadriplegic accessibility. Fabricated two hardware builds—a 3-day prototype followed by a final chassis for national demonstration in Toronto. Won 2nd Place nationally and the Fan Favorite award.",
    image: "/projects/Samsung Chair.jpeg",
    stack: ["Hardware Iteration", "Microsoft HoloLens 2", "Muse Headband", "Swerve Drive", "Mechanical Fabrication", "Product Ideation"]
  }
];

export default function ProjectsPage() {
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
        <div className="pt-24 pb-16">
          <div className="relative z-10">
            <div className="flex items-center gap-2 text-xs tracking-[0.15em] uppercase text-[#FF4D00] mb-6">
              <span className="w-8 h-px bg-[#FF4D00]"></span>
              Featured Work
            </div>
            <h1 className="text-5xl md:text-[5.5rem] font-extrabold leading-[0.95] tracking-tight">
              Projects
            </h1>
            <p className="text-lg leading-relaxed text-white/50 max-w-xl mt-8">
              A collection of hardware and software builds, from composite manufacturing to autonomous systems.
            </p>
          </div>
        </div>

        {/* Project Index */}
        <div className="flex flex-col gap-28 pb-40 mt-12">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
            >
              {/* Image Column */}
              {project.slug === 'fsae-aero-package' ? (
                <div
                  className={`relative aspect-[4/3] w-full rounded-2xl border border-white/10 bg-white/5 overflow-hidden group shadow-lg ${index % 2 === 1 ? 'lg:order-last' : ''}`}
                >
                  {/* Accent line on hover */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#FF4D00] origin-left scale-x-0 transition-transform duration-700 ease-out group-hover:scale-x-100 z-20" />

                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105 opacity-80 group-hover:opacity-100"
                  />

                  {/* Subtle dark overlay that fades on hover */}
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none" />
                </div>
              ) : (
                <div className={`flex items-center justify-center ${index % 2 === 1 ? 'lg:order-last' : ''}`}>
                  <div className="relative inline-block rounded-2xl border border-white/10 bg-[#0e0e0e] overflow-hidden group shadow-2xl transition-all duration-500 hover:border-white/25">
                    {/* Accent line on hover */}
                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#FF4D00] origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100 z-20" />

                    <img
                      src={project.image}
                      alt={project.title}
                      className={`w-auto h-auto ${project.slug === 'frc-2024-robot' ? 'max-h-[540px] md:max-h-[580px]' : 'max-h-[420px]'} max-w-full object-contain block rounded-2xl transition-transform duration-700 ease-out group-hover:scale-105 opacity-90 group-hover:opacity-100`}
                    />
                  </div>
                </div>
              )}

              {/* Text Column */}
              <div className={`flex flex-col justify-center ${index % 2 === 1 ? 'lg:order-first' : ''}`}>
                <div className="flex items-center gap-4 mb-3">
                  <span className="text-[0.7rem] tracking-[0.15em] uppercase text-[#FF4D00] font-bold">
                    {project.id}
                  </span>
                  <span className="w-4 h-px bg-white/20"></span>
                  <span className="text-[0.7rem] tracking-[0.15em] uppercase text-white/40">
                    {project.timeline}
                  </span>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#F5F5F5] mb-6">
                  {project.title}
                </h2>

                <p className="text-base md:text-lg leading-relaxed text-white/50 mb-8">
                  {project.description}
                </p>

                {/* Tech stack badges */}
                <div className="flex flex-wrap gap-2">
                  {project.stack.map(tech => (
                    <span
                      key={tech}
                      className="text-[0.7rem] tracking-[0.05em] uppercase text-[#FF4D00] border border-[#FF4D00]/20 bg-[#FF4D00]/5 px-4 py-2 rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
