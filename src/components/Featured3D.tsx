"use client"

import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight"
import Link from "next/link";

export function Featured3D() {
  return (
    <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32 z-10">
      <Card className="w-full h-[500px] bg-black/95 relative overflow-hidden border-white/10 rounded-3xl">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />

        <div className="flex h-full flex-col md:flex-row relative z-10">
          {/* Left content */}
          <div className="flex-1 p-8 md:p-12 relative z-20 flex flex-col justify-center pointer-events-none">
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 tracking-tight"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Beyond the Build
            </h1>
            <p className="mt-6 text-neutral-300 max-w-lg text-lg font-light leading-relaxed">
              Systems don't build themselves. Discover the logic, grit, and philosophy driving the engineer behind the architecture
            </p>
            <Link 
              href="/about" 
              className="mt-8 inline-flex items-center gap-3 px-8 py-4 border border-white/20 rounded-full text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 hover:border-[#FF4D00] hover:text-[#FF4D00] group w-fit pointer-events-auto"
            >
              Get to know Dhaya
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </div>

          {/* Right content */}
          <div className="flex-[1.5] relative min-h-[300px] md:min-h-full">
            <SplineScene
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full select-none"
            />
          </div>
        </div>
      </Card>
    </section>
  )
}
