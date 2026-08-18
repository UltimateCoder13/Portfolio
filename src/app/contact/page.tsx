"use client";

import Link from "next/link";
import { useState } from "react";
import CustomCursor from "@/components/CustomCursor";
import { Particles } from "@/components/ui/particles";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' }); // Clear form
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#050505] text-[#F5F5F5] selection:bg-[#FF4D00] selection:text-white flex flex-col px-8 py-8 md:py-12 relative overflow-hidden">
      <CustomCursor />
      <Particles
        className="fixed inset-0 z-0 opacity-50 pointer-events-none"
        quantity={150}
        ease={80}
        color="#FF4D00"
        refresh
      />
      {/* Subtle Background Glow */}
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-[#FF4D00]/5 blur-[150px] rounded-full pointer-events-none -z-10 translate-x-1/3 -translate-y-1/3"></div>

      {/* Minimalist Header */}
      <nav className="w-full max-w-7xl mx-auto flex justify-between items-center z-10">
        <Link href="/" className="text-2xl font-bold tracking-tighter uppercase group flex items-center gap-4">
          <span className="text-white/50 group-hover:-translate-x-2 transition-transform duration-300">←</span>
          Back to Portfolio
        </Link>
      </nav>

      {/* Main Content */}
      <div className="flex-1 flex flex-col md:flex-row gap-16 md:gap-24 max-w-7xl mx-auto w-full pt-24 md:pt-32 z-10">
        
        {/* Left Side: Massive Typography */}
        <div className="flex-1 flex flex-col gap-8">
          <h1 className="text-[15vw] md:text-[8vw] leading-[0.85] font-bold tracking-tighter uppercase">
            Let's<br />
            <span className="text-[#FF4D00]">Talk.</span>
          </h1>
          <p className="text-white/50 text-lg md:text-xl max-w-md font-medium leading-relaxed mt-4">
            Have a system architecture problem to solve? A robotics project in mind? Or just want to connect? Drop a message below.
          </p>
        </div>

        {/* Right Side: Premium Form */}
        <div className="flex-1 max-w-xl w-full">
          <form onSubmit={handleSubmit} className="flex flex-col gap-12">
            
            {/* Input Group: Name */}
            <div className="relative group">
              <label htmlFor="name" className="text-xs font-bold tracking-[0.2em] uppercase text-white/40 mb-2 block transition-colors group-focus-within:text-[#FF4D00]">
                01. What's your name?
              </label>
              <input 
                type="text" 
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-transparent border-b border-white/20 py-4 text-xl md:text-2xl text-white placeholder:text-white/20 focus:outline-none focus:border-[#FF4D00] transition-colors rounded-none"
                placeholder="John Doe"
              />
            </div>

            {/* Input Group: Email */}
            <div className="relative group">
              <label htmlFor="email" className="text-xs font-bold tracking-[0.2em] uppercase text-white/40 mb-2 block transition-colors group-focus-within:text-[#FF4D00]">
                02. What's your email?
              </label>
              <input 
                type="email" 
                id="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-transparent border-b border-white/20 py-4 text-xl md:text-2xl text-white placeholder:text-white/20 focus:outline-none focus:border-[#FF4D00] transition-colors rounded-none"
                placeholder="john@company.com"
              />
            </div>

            {/* Input Group: Message */}
            <div className="relative group">
              <label htmlFor="message" className="text-xs font-bold tracking-[0.2em] uppercase text-white/40 mb-2 block transition-colors group-focus-within:text-[#FF4D00]">
                03. Your message
              </label>
              <textarea 
                id="message"
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-transparent border-b border-white/20 py-4 text-xl md:text-2xl text-white placeholder:text-white/20 focus:outline-none focus:border-[#FF4D00] transition-colors resize-none rounded-none"
                placeholder="Tell me about your project..."
              ></textarea>
            </div>

            {/* Submit Button */}
            <button 
              type="submit"
              disabled={isSubmitting}
              className="mt-8 px-8 py-5 border border-white/20 rounded-full text-sm font-bold uppercase tracking-[0.2em] transition-all duration-300 hover:border-[#FF4D00] hover:text-[#FF4D00] hover:bg-[#FF4D00]/10 w-fit disabled:opacity-50 disabled:cursor-not-allowed group flex items-center gap-4"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
              {!isSubmitting && <span className="transition-transform duration-300 group-hover:translate-x-2">↗</span>}
            </button>
            {status === 'success' && (
              <p className="mt-4 text-[#FF4D00] text-sm font-bold tracking-widest uppercase">Message sent successfully.</p>
            )}
            {status === 'error' && (
              <p className="mt-4 text-red-500 text-sm font-bold tracking-widest uppercase">Failed to send. Please try again.</p>
            )}
          </form>
        </div>
      </div>
    </main>
  );
}
