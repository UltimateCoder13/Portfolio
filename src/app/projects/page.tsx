"use client";

import Link from "next/link";
import Image from "next/image";
import { Particles } from "@/components/ui/particles";
import CustomCursor from "@/components/CustomCursor";

const projects = [
  {
    id: "01",
    slug: "frc-2023-robot",
    title: "FRC Competitive Robot: Systems & Drivetrain",
    timeline: "2022 – 2023",
    description: "Co-engineered a custom tank-drive competition robot. Led electrical systems integration, wiring the RoboRIO control system and CAN bus network. Conducted extensive hardware-in-the-loop testing, actively diagnosing and resolving complex Java/WPILib software-to-hardware communication issues under strict competition deadlines.",
    image: "/projects/2023.jpg",
    stack: ["Java", "WPILib", "RoboRIO", "CAN Bus", "Systems Integration", "Drivetrain Mechanics"]
  },
  {
    id: "02",
    slug: "frc-2024-robot",
    title: "2024 FRC Robot: Swerve Architecture & Kinetic Systems",
    timeline: "2024",
    description: "Served as Strategy Lead and core systems integrator for a highly complex competition robot. Spearheaded the mechanical and electrical transition to the team's first swerve drive and brushless motor architecture, and co-engineered a custom dual-flywheel shooter system for high-velocity scoring. Navigated strict weight constraints while routing advanced pneumatics and Limelight vision-tracking hardware. Conducted post-competition root-cause analysis on critical power delivery failures. Recognized as a FIRST Dean's List Semi-Finalist for outstanding technical leadership.",
    image: "/projects/2024.jpg",
    stack: ["Swerve Drive Mechanics", "Dual-Flywheel Systems", "Brushless Motors", "Competitive Strategy", "Root-Cause Analysis", "Dean's List Semi-Finalist"]
  },
  {
    id: "03",
    slug: "frc-2025-robot",
    title: "2025 FRC Robot: High-Density Packaging & CNC Fabrication",
    timeline: "2025",
    description: "Spearheaded the mechanical fabrication of a multi-stage elevator system designed to actuate a differential claw for precise game-piece manipulation. Expanded the team's in-house manufacturing capabilities by operating a Carvera CNC mill to machine custom precision components. To solve severe chassis space constraints, I architected a custom vertical electronics panel and engineered a secure under-carriage wire-routing system for primary power delivery. Integrated next-generation brushless actuators (Kraken X60 and NEO Vortex), successfully diagnosing a critical firmware logic issue regarding velocity-acceleration dependencies during a rigorous debugging sprint. Contributions helped secure the FIRST Imagery and Sustainability Awards.",
    image: "/projects/2025.jpg",
    stack: ["CNC Machining (Carvera)", "CAD/CAM", "Elevator Mechanics", "Spatial Architecture", "High-Density Wiring", "Kraken X60 Motors", "Firmware Troubleshooting"]
  },
  {
    id: "04",
    slug: "fsae-aero-package",
    title: "Carbon Fiber Aerodynamics & Composite Manufacturing",
    timeline: "2025 – Present",
    description: "Engineered and manufactured a comprehensive custom aerodynamic package, fabricating multi-element front/rear wings, side diffusers, and the primary nose cone. Executed complex composite manufacturing workflows utilizing segmented 3D-printed molds, wet lay-ups, and vacuum bagging. Diagnosed structural rigidity issues in early rear-side plate iterations, successfully resolving flex by integrating specialized core materials. Utilized SolidWorks to design custom wing mounting inserts. Operated water jet, CO2, and fiber laser cutters for precision metal and polycarbonate fabrication. Currently spearheading the team's transition to large-format CNC-machined foam molds for next-generation aero development.",
    image: "/projects/FSAE.jpg",
    stack: ["Carbon Fiber Composites", "Vacuum Bagging", "SolidWorks", "Water Jet Machining", "Laser Cutting (Fiber & CO2)", "Structural Cores", "3D-Printed Tooling", "CNC Machining"]
  },
  {
    id: "05",
    slug: "hero-chair",
    title: "Hero Chair: AR & Brain-Computer Interface Wheelchair",
    timeline: "2023 - 2024",
    description: "Co-founded the team, conceptualized the core architecture, and led the physical fabrication of an omnidirectional wheelchair designed for quadriplegic users. Engineered two distinct hardware iterations: a rapid 3-day proof-of-concept, followed by a refined, professional-grade chassis built over two weeks for a live national presentation in Toronto. Integrated robust COTS swerve modules with a custom Python/JSON software bridge, successfully translating spatial vector data from a Microsoft HoloLens 2 (eye-tracking) and Muse headband (EEG) into real-time drivetrain kinematics. The project was awarded both 2nd Place and Fan Favorite.",
    image: "/projects/samsung-chair.jpeg",
    stack: ["Hardware Iteration", "Microsoft HoloLens 2 (AR)", "Muse Headband (BCI)", "Swerve Drive Kinematics", "Python", "JSON Data Pipelines", "Mechanical Fabrication", "Product Ideation"]
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
        <div className="flex flex-col gap-32 pb-40 mt-12">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
            >
              {/* Image Column */}
              <div 
                className={`relative aspect-[4/3] rounded-2xl border border-white/10 bg-white/5 overflow-hidden group shadow-lg ${index % 2 === 1 ? 'lg:order-last' : ''}`}
              >
                {/* Accent line on hover */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#FF4D00] origin-left scale-x-0 transition-transform duration-700 ease-out group-hover:scale-x-100 z-20" />
                
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105 opacity-80 group-hover:opacity-100" 
                />
                
                {/* Subtle dark overlay that fades on hover */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none" />
              </div>
              
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
                
                <p className="text-lg leading-relaxed text-white/50 mb-8">
                  {project.description}
                </p>
                
                {/* Tech stack badges */}
                <div className="flex flex-wrap gap-2 mb-10">
                  {project.stack.map(tech => (
                    <span 
                      key={tech} 
                      className="text-[0.7rem] tracking-[0.05em] uppercase text-[#FF4D00] border border-[#FF4D00]/20 bg-[#FF4D00]/5 px-4 py-2 rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Call to Action */}
                <Link 
                  href={`/projects/${project.slug}`} 
                  className="group inline-flex items-center gap-3 text-sm font-bold tracking-[0.08em] uppercase text-[#F5F5F5] pb-3 border-b border-white/20 hover:border-[#FF4D00] transition-colors w-fit"
                >
                  Read Full Case Study 
                  <span className="text-[#FF4D00] group-hover:translate-x-1 transition-transform duration-300">
                    →
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
