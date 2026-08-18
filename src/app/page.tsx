import Hero from "@/components/ui/Hero";
import CustomCursor from "@/components/CustomCursor";
import { Featured3D } from "@/components/Featured3D";
import { Navbar } from "@/components/ui/Navbar";
import { Projects } from "@/components/ui/Projects";
import { Experience } from "@/components/ui/Experience";
import { Connect } from "@/components/ui/Connect";
import { Particles } from "@/components/ui/particles";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#0a0a0a] text-[#F5F5F5] overflow-hidden">
      <CustomCursor />
      <Navbar />
      <Particles
        className="fixed inset-0 z-0 opacity-50"
        quantity={150}
        ease={80}
        color="#FF4D00"
        size={1.2}
        refresh
      />
      <Hero />
      <Featured3D />
      <Projects />
      <Experience />
      <Connect />
    </main>
  );
}
