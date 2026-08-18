"use client";

import Link from "next/link";
import { Particles } from "@/components/ui/particles";
import CustomCursor from "@/components/CustomCursor";

export default function AboutPage() {
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

        {/* HERO SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center py-24">
          <div>
            <div className="flex items-center gap-2 text-xs tracking-[0.15em] uppercase text-[#FF4D00] mb-6">
              <span className="w-8 h-px bg-[#FF4D00]"></span>
              Engineering Candidate
            </div>
            <h1 className="text-5xl md:text-[5.5rem] font-extrabold leading-[0.95] tracking-tight mb-8">
              Building<br />
              <em className="not-italic text-transparent [-webkit-text-stroke:1px_rgba(240,237,230,0.4)]">things</em><br />
              that last.
            </h1>
            <p className="text-lg leading-relaxed text-white/65 max-w-md">
              I am a candidate for a B.S. in Engineering with a passion for <strong>precision design</strong> and rapid prototyping. From fabricating carbon fiber aero packages to engineering brain-controlled mobility solutions, I bridge the gap between concept and reality.
            </p>
            <div className="flex flex-wrap gap-4 mt-10">
              <Link href="/contact" className="inline-flex items-center gap-2 bg-[#FF4D00] text-white text-sm font-medium tracking-[0.04em] px-7 py-3.5 transition-all hover:bg-[#d4521f] hover:-translate-y-px">
                Let's Talk →
              </Link>
              <a href="/Resume.pdf" download="Dhaya_Srinivasan_Resume.pdf" className="inline-flex items-center gap-2 bg-transparent text-[#F5F5F5] text-sm font-medium tracking-[0.04em] px-7 py-3.5 border border-white/20 transition-all hover:border-white/50 hover:-translate-y-px">
                Download CV
              </a>
              <a href="/Dhaya_Srinivasan_Open_Cover_Letter.pdf" download="Dhaya_Srinivasan_Letter_Of_Intent.pdf" className="inline-flex items-center gap-2 bg-transparent text-[#F5F5F5] text-sm font-medium tracking-[0.04em] px-7 py-3.5 border border-white/20 transition-all hover:border-white/50 hover:-translate-y-px">
                Letter of Intent
              </a>
            </div>
          </div>

          {/* Portrait Frame */}
          <div className="relative aspect-[4/5] bg-[#1a1a1a] border border-white/10 overflow-hidden flex flex-col items-center justify-center group rounded-2xl">
            {/* Technical Corner (Rounded to match frame) */}
            <div className="absolute top-[-1px] left-[-1px] w-6 h-6 border-t-2 border-l-2 border-[#FF4D00] z-30 rounded-tl-2xl"></div>

            {/* Frame Tag (Rounded to match frame) */}
            <div className="absolute bottom-[-1px] right-[-1px] bg-[#FF4D00] text-[0.7rem] font-bold tracking-[0.12em] uppercase text-white px-3 py-1.5 z-30 rounded-br-2xl rounded-tl-lg">
              Dhaya / Portfolio
            </div>

            {/* Blueprint Background Overlay */}
            <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,rgba(255,77,0,0.06)_0px,rgba(255,77,0,0.06)_1px,transparent_1px,transparent_12px)] z-0"></div>

            {/* Your Profile Photo */}
            <img
              src="/Dhaya.jpeg"
              alt="Dhaya Srinivasan"
              className="absolute inset-0 w-full h-full object-cover z-10 transition-all duration-500 ease-out opacity-70 brightness-[0.7] saturate-[0.8] scale-[0.98] rounded-2xl group-hover:opacity-100 group-hover:brightness-100 group-hover:saturate-100 group-hover:scale-105"
            />

            {/* Dark Vignette Overlay (Fades out on hover) */}
            <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.95)] z-20 pointer-events-none transition-opacity duration-500 group-hover:opacity-0 rounded-2xl"></div>
          </div>
        </div>

        {/* STATS ROW */}
        <div className="grid grid-cols-3 border-t border-l border-white/10 mb-24">
          <div className="p-8 border-r border-b border-white/10">
            <div className="text-4xl md:text-5xl font-extrabold text-[#FF4D00] leading-none mb-2">3+</div>
            <div className="text-[0.8rem] text-white/45 tracking-[0.06em] uppercase">Years in Robotics</div>
          </div>
          <div className="p-8 border-r border-b border-white/10">
            <div className="text-4xl md:text-5xl font-extrabold text-[#FF4D00] leading-none mb-2">4</div>
            <div className="text-[0.8rem] text-white/45 tracking-[0.06em] uppercase">Major Build Projects</div>
          </div>
          <div className="p-8 border-r border-b border-white/10">
            <div className="text-4xl md:text-5xl font-extrabold text-[#FF4D00] leading-none mb-2">2</div>
            <div className="text-[0.8rem] text-white/45 tracking-[0.06em] uppercase">National Awards</div>
          </div>
        </div>

        {/* SKILLS SECTION */}
        <div className="flex items-end justify-between mb-12 pb-6 border-b border-white/10">
          <div>
            <div className="text-[0.72rem] tracking-[0.18em] uppercase text-white/35 mb-2">What I work with</div>
            <h2 className="text-4xl font-extrabold tracking-tight">Skills & Tools</h2>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-white/10 border border-white/10 mb-24">

          {/* Skill Card 1 */}
          <div className="bg-[#0a0a0a] p-8 relative group hover:bg-[#111] transition-colors overflow-hidden">
            <div className="absolute top-0 left-0 w-[3px] h-0 bg-[#FF4D00] transition-all duration-300 group-hover:h-full"></div>
            <div className="text-[0.7rem] tracking-[0.14em] uppercase text-[#FF4D00] mb-3">Design</div>
            <div className="text-xl font-bold mb-3">CAD & 3D Modeling</div>
            <div className="w-full h-[2px] bg-white/10 mt-4 overflow-hidden">
              <div className="h-full bg-[#FF4D00] w-[95%] -translate-x-full group-hover:translate-x-0 transition-transform duration-1000 ease-out"></div>
            </div>
            <div className="flex flex-wrap gap-2 mt-5">
              {["SolidWorks", "Fusion 360", "Drafting"].map(tool => (
                <span key={tool} className="text-[0.72rem] tracking-[0.04em] text-white/50 bg-white/5 border border-white/10 px-2.5 py-1">{tool}</span>
              ))}
            </div>
          </div>

          {/* Skill Card 2 */}
          <div className="bg-[#0a0a0a] p-8 relative group hover:bg-[#111] transition-colors overflow-hidden">
            <div className="absolute top-0 left-0 w-[3px] h-0 bg-[#FF4D00] transition-all duration-300 group-hover:h-full"></div>
            <div className="text-[0.7rem] tracking-[0.14em] uppercase text-[#FF4D00] mb-3">Fabrication</div>
            <div className="text-xl font-bold mb-3">Prototyping & Manufacturing</div>
            <div className="w-full h-[2px] bg-white/10 mt-4 overflow-hidden">
              <div className="h-full bg-[#FF4D00] w-[85%] -translate-x-full group-hover:translate-x-0 transition-transform duration-1000 ease-out delay-100"></div>
            </div>
            <div className="flex flex-wrap gap-2 mt-5">
              {["Carbon Fiber Lay-up", "CNC Milling", "3D Printing", "Laser Cutting"].map(tool => (
                <span key={tool} className="text-[0.72rem] tracking-[0.04em] text-white/50 bg-white/5 border border-white/10 px-2.5 py-1">{tool}</span>
              ))}
            </div>
          </div>

          {/* Skill Card 3 */}
          <div className="bg-[#0a0a0a] p-8 relative group hover:bg-[#111] transition-colors overflow-hidden">
            <div className="absolute top-0 left-0 w-[3px] h-0 bg-[#FF4D00] transition-all duration-300 group-hover:h-full"></div>
            <div className="text-[0.7rem] tracking-[0.14em] uppercase text-[#FF4D00] mb-3">Software</div>
            <div className="text-xl font-bold mb-3">Code & Control</div>
            <div className="w-full h-[2px] bg-white/10 mt-4 overflow-hidden">
              <div className="h-full bg-[#FF4D00] w-[80%] -translate-x-full group-hover:translate-x-0 transition-transform duration-1000 ease-out delay-200"></div>
            </div>
            <div className="flex flex-wrap gap-2 mt-5">
              {["Python", "HTML/CSS/JS", "Electronics Integration", "EEG Navigation"].map(tool => (
                <span key={tool} className="text-[0.72rem] tracking-[0.04em] text-white/50 bg-white/5 border border-white/10 px-2.5 py-1">{tool}</span>
              ))}
            </div>
          </div>

          {/* Skill Card 4 */}
          <div className="bg-[#0a0a0a] p-8 relative group hover:bg-[#111] transition-colors overflow-hidden">
            <div className="absolute top-0 left-0 w-[3px] h-0 bg-[#FF4D00] transition-all duration-300 group-hover:h-full"></div>
            <div className="text-[0.7rem] tracking-[0.14em] uppercase text-[#FF4D00] mb-3">Management</div>
            <div className="text-xl font-bold mb-3">Strategy & Leadership</div>
            <div className="w-full h-[2px] bg-white/10 mt-4 overflow-hidden">
              <div className="h-full bg-[#FF4D00] w-[90%] -translate-x-full group-hover:translate-x-0 transition-transform duration-1000 ease-out delay-300"></div>
            </div>
            <div className="flex flex-wrap gap-2 mt-5">
              {["Project Planning", "Crisis Management", "Logistics", "Mentorship"].map(tool => (
                <span key={tool} className="text-[0.72rem] tracking-[0.04em] text-white/50 bg-white/5 border border-white/10 px-2.5 py-1">{tool}</span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
