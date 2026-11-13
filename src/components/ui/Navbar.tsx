"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = ["Experience", "Projects", "About", "Connect"];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsOpen(false);
  };

  // Close menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const getItemHref = (item: string) => {
    return item === "Connect"
      ? "/contact"
      : item === "About"
      ? "/about"
      : item === "Experience"
      ? "/experience"
      : item === "Projects"
      ? "/projects"
      : `#${item.toLowerCase()}`;
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 px-5 sm:px-8 md:px-8 py-5 sm:py-6 md:py-8 flex justify-between items-center mix-blend-difference text-[#F5F5F5] pointer-events-auto">
        <button 
          onClick={scrollToTop} 
          className="text-xl sm:text-2xl font-bold tracking-tighter uppercase transition-colors duration-300 hover:text-[#FF4D00]"
          aria-label="Dhaya Home"
        >
          Dhaya<span className="text-[#FF4D00]">.</span>
        </button>

        {/* Desktop / Tablet Links */}
        <div className="hidden md:flex gap-8 md:gap-12">
          {navItems.map((item) => (
            <Link
              key={item}
              href={getItemHref(item)}
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

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          className="md:hidden min-h-[44px] min-w-[44px] flex items-center justify-center p-2 rounded-xl border border-white/10 bg-black/40 backdrop-blur-md text-[#F5F5F5] hover:text-[#FF4D00] transition-colors"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/70 backdrop-blur-md md:hidden"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="absolute top-0 left-0 right-0 bg-[#0a0a0a]/95 border-b border-white/10 px-6 pt-24 pb-8 flex flex-col gap-2 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {navItems.map((item) => (
              <Link
                key={item}
                href={getItemHref(item)}
                onClick={() => setIsOpen(false)}
                className="min-h-[48px] flex items-center justify-between text-base font-bold tracking-widest uppercase text-[#F5F5F5] hover:text-[#FF4D00] py-3 border-b border-white/5 transition-colors"
              >
                <span>{item}</span>
                <span className="text-[#FF4D00] text-sm font-normal">→</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
