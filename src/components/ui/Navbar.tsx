"use client";

import Link from "next/link";

export function Navbar() {
  const navItems = ["Experience", "Projects", "About", "Connect"];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-8 py-8 flex justify-between items-center mix-blend-difference text-[#F5F5F5] pointer-events-auto">
      <button 
        onClick={scrollToTop} 
        className="text-2xl font-bold tracking-tighter uppercase transition-colors duration-300 hover:text-[#FF4D00]"
      >
        Dhaya<span className="text-[#FF4D00]">.</span>
      </button>
      <div className="flex gap-8 md:gap-12">
        {navItems.map((item) => (
          <Link
            key={item}
            href={item === "Connect" ? "/contact" : item === "About" ? "/about" : item === "Experience" ? "/experience" : item === "Projects" ? "/projects" : `#${item.toLowerCase()}`}
            className="group relative overflow-hidden text-base md:text-lg uppercase font-medium tracking-widest"
          >
            <span className="block transition-transform duration-500 group-hover:-translate-y-full">
              {item}
            </span>
            <span className="absolute top-0 left-0 block translate-y-full transition-transform duration-500 group-hover:translate-y-0 text-[#FF4D00]">
              {item}
            </span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
