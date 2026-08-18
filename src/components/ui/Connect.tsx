import Link from "next/link";

export function Connect() {
  const socials = [
    { name: "LinkedIn", link: "https://www.linkedin.com/in/dhaya-srinivasan-932781325/" },
    { name: "GitHub", link: "https://github.com/UltimateCoder13" }
  ];

  return (
    <section id="connect" className="relative pt-32 pb-8 px-8 max-w-7xl mx-auto w-full z-10">
      {/* Massive Call to Action */}
      <div className="flex flex-col items-center text-center mb-24 md:mb-32">
        <h2 className="text-[12vw] md:text-[10vw] leading-none font-bold tracking-tighter uppercase text-[#F5F5F5] hover:text-[#FF4D00] transition-colors duration-700 cursor-default">
          Let's Talk
        </h2>
        <p className="text-white/50 text-base md:text-xl max-w-2xl mt-8 font-medium">
          Open for new opportunities. Whether it's a complex system architecture, a robotics project, or just a chat about engineering, my inbox is open.
        </p>
        <Link 
          href="/contact" 
          className="mt-12 px-8 py-4 border border-white/20 rounded-full text-sm font-bold uppercase tracking-[0.2em] transition-all duration-300 hover:border-[#FF4D00] hover:text-[#FF4D00] hover:bg-[#FF4D00]/10 group flex items-center gap-3"
        >
          Send a Message
          <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
        </Link>
      </div>

      {/* Links and Location Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-16 border-t border-white/10">
        <div className="flex flex-col gap-6">
          <h3 className="text-sm font-bold tracking-[0.2em] uppercase text-white/40">Digital Presence</h3>
          <div className="flex flex-col gap-3">
            {socials.map((social) => (
              <a 
                key={social.name} 
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl md:text-3xl font-medium text-[#F5F5F5] hover:text-[#FF4D00] transition-colors duration-300 w-fit group flex items-center gap-3"
              >
                {social.name}
                <span className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[#FF4D00]">↗</span>
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-6 md:items-end text-left md:text-right">
          <h3 className="text-sm font-bold tracking-[0.2em] uppercase text-white/40">Location</h3>
          <p className="text-2xl md:text-3xl font-medium text-[#F5F5F5]">
            Edmonton, AB<br />
            <span className="text-white/50 text-xl md:text-2xl">Canada</span>
          </p>
        </div>
      </div>

      {/* Copyright Footer */}
      <div className="mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium tracking-widest text-white/40 uppercase">
        <p>© {new Date().getFullYear()} Dhaya Srinivasan. All rights reserved.</p>
        <a href="#" className="hover:text-[#FF4D00] transition-colors duration-300 flex items-center gap-2">
          Back to Top <span className="text-lg leading-none">↑</span>
        </a>
      </div>
    </section>
  );
}
