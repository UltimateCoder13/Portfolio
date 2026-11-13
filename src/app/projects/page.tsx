"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Particles } from "@/components/ui/particles";
import CustomCursor from "@/components/CustomCursor";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  timeline: string;
  description: string;
  image?: string;
  images?: string[];
  stack: string[];
}

const projects: ProjectItem[] = [
  {
    id: "01",
    slug: "frc-2023-robot",
    title: "2023 FRC Robot: Sparky",
    timeline: "2023",
    description: "Co-built a custom tank-drive competition robot for the 2023 FRC season. Managed the electrical layout, wiring the RoboRIO control board, power distribution, and CAN bus network. Ran shop testing to isolate and fix Java/WPILib software-to-hardware communication issues prior to competition matches.",
    image: "/projects/2023.jpg",
    stack: ["Java", "WPILib", "RoboRIO", "CAN Bus", "Systems Integration", "Drivetrain Mechanics"]
  },
  {
    id: "02",
    slug: "frc-2024-robot",
    title: "2024 FRC Robot: Sparky 2",
    timeline: "2024",
    description: "Served as competition driver and strategy lead while transitioning the robot to a custom swerve drive and brushless motor setup. Co-engineered a dual-flywheel intake/shooter mechanism, integrated pneumatics and Limelight vision hardware under strict weight limits, and ran root-cause post-match testing on power delivery failures. Named a 2024 FIRST Dean's List Semi-Finalist.",
    image: "/projects/2024.jpg",
    stack: ["Swerve Drive Mechanics", "Dual-Flywheel Systems", "Brushless Motors", "Competitive Strategy", "Root-Cause Analysis", "Dean's List Semi-Finalist"]
  },
  {
    id: "03",
    slug: "frc-2025-robot",
    title: "2025 FRC Robot: Triton",
    timeline: "2025",
    description: "Fabricated a multi-stage elevator system and differential claw mechanism, operating a Carvera CNC mill to machine custom aluminum and polycarbonate parts. Designed a high-density vertical electronics panel and under-carriage wire routing to solve tight chassis space constraints. Integrated Kraken X60 and NEO Vortex actuators, resolving motor velocity/acceleration firmware logic during fast-turnaround pit repairs. Received the FIRST Imagery and Sustainability Award.",
    image: "/projects/2025.jpg",
    stack: ["CNC Machining (Carvera)", "CAD/CAM", "Elevator Mechanics", "High-Density Wiring", "Driver", "Firmware Troubleshooting"]
  },
  {
    id: "04",
    slug: "fsae-aero-package",
    title: "FSAE Car: UA 26",
    timeline: "2025 – 2026",
    description: "Designed molds in SolidWorks and manufactured carbon fiber aero components, including multi-element front and rear wings, side diffusers, and the front nose cone. Applied vacuum-assisted wet lay-ups, added structural core materials to eliminate side-plate flexing, and cut metal and polycarbonate hardware on water jet and fiber/CO2 lasers. Led the move toward CNC-machined foam molds for team production.",
    image: "/projects/FSAE.jpg?v=3",
    stack: ["Carbon Fiber Composites", "Vacuum Bagging", "SolidWorks", "Water Jet Machining", "Laser Cutting (Fiber & CO2)", "Structural Cores", "3D-Printed Tooling", "CNC Machining"]
  },
  {
    id: "05",
    slug: "hero-chair",
    title: "Hero Chair",
    timeline: "2023 - 2024",
    description: "Co-founded the project and built the physical frame for an omnidirectional wheelchair aimed at quadriplegic accessibility. Fabricated two hardware builds—a 3-day prototype followed by a final chassis for national demonstration in Toronto. Won 2nd Place nationally and the Fan Favorite award.",
    image: "/projects/Samsung Chair.jpeg",
    stack: ["Hardware Iteration", "Microsoft HoloLens 2", "Muse Headband", "Swerve Drive", "Mechanical Fabrication", "Product Ideation"]
  },
  {
    id: "06",
    slug: "percepta-assistive-wearable",
    title: "NatHacks: Percepta",
    timeline: "Nov 2026",
    description: "Co-built an assistive wearable system with a 6-person team at natHACKS for people with Age-related Macular Degeneration (AMD). Engineered a detachable 3D-printed camera module (Raspberry Pi Zero 2 W, OV5647 camera, 3.7V LiPo) that clips onto existing glasses, paired with an ESP32 haptic wristband driving four vibration motors. Integrated YOLO-World and ROS 2 to stream directional hand-to-object coordinates over UDP, alongside a local Qwen 3.5 2B voice assistant ('Laura'). Scoped to a functional MVP under hardware and multi-device networking constraints.",
    images: [
      "/projects/Glasses.png",
      "/projects/Wrist Haptics.png",
      "/projects/henock glasses.jpg"
    ],
    stack: ["Raspberry Pi Zero 2 W", "ESP32", "YOLO-World", "Qwen 3.5 2B", "3D Printing", "Haptic Feedback"]
  }
];

function ProjectSlideshow({ images, title }: { images: string[]; title: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered || images.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 2000);

    return () => clearInterval(timer);
  }, [currentIndex, isHovered, images.length]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div
      className="relative aspect-[4/3] w-full rounded-2xl border border-white/10 bg-[#0e0e0e] overflow-hidden group shadow-2xl transition-all duration-500 hover:border-white/25"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Top accent line on hover */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#FF4D00] origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100 z-30" />

      {/* Images container */}
      <div className="relative w-full h-full">
        {images.map((imgSrc, idx) => (
          <img
            key={imgSrc}
            src={imgSrc}
            alt={`${title} - Photo ${idx + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-out ${idx === currentIndex
                ? "opacity-90 group-hover:opacity-100 z-10"
                : "opacity-0 pointer-events-none z-0"
              }`}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        type="button"
        onClick={prevSlide}
        aria-label="Previous photo"
        className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full flex items-center justify-center bg-black/60 backdrop-blur-md border border-white/10 text-white/70 hover:border-[#FF4D00] hover:text-[#FF4D00] transition-colors opacity-90 md:opacity-0 md:group-hover:opacity-100 duration-300"
      >
        <ChevronLeft className="w-4 h-4" />
      </button>

      <button
        type="button"
        onClick={nextSlide}
        aria-label="Next photo"
        className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full flex items-center justify-center bg-black/60 backdrop-blur-md border border-white/10 text-white/70 hover:border-[#FF4D00] hover:text-[#FF4D00] transition-colors opacity-90 md:opacity-0 md:group-hover:opacity-100 duration-300"
      >
        <ChevronRight className="w-4 h-4" />
      </button>

      {/* Progress Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10">
        {images.map((_, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setCurrentIndex(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentIndex
                ? "w-6 bg-[#FF4D00]"
                : "w-2 bg-white/25 hover:bg-white/50"
              }`}
          />
        ))}
      </div>
    </div>
  );
}

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
              {project.images && project.images.length > 0 ? (
                <div className={`w-full ${index % 2 === 1 ? 'lg:order-last' : ''}`}>
                  <ProjectSlideshow images={project.images} title={project.title} />
                </div>
              ) : project.slug === 'fsae-aero-package' ? (
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
