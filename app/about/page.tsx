"use client";

import { useState, useEffect } from "react";
import { Code2, Laptop, Smartphone, Palette, Zap, Coffee } from "lucide-react";

export default function About() {
  const [isMobile, setIsMobile] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const techStack = [
    { name: "TypeScript", color: "bg-blue-500" },
    { name: "React", color: "bg-cyan-500" },
    { name: "Next.js", color: "bg-white" },
    { name: "Node.js", color: "bg-green-500" },
    { name: "Tailwind", color: "bg-teal-400" },
    { name: "Prisma", color: "bg-indigo-500" },
  ];

  return (
    <main
      className="relative min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 md:px-8 text-white py-12 sm:py-16"
      style={{
        background:
          "linear-gradient(135deg, #0c0c0c 0%, #1a1a1a 25%, #0c0c0c 100%)",
      }}
    >
      {/* Starfield Background */}
      <div className="fixed inset-0 pointer-events-none">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          style={{ opacity: isMobile ? 0.2 : 0.3 }}
        >
          <circle cx="12" cy="15" r="0.15" fill="rgba(255,255,255,0.8)" />
          <circle cx="28" cy="25" r="0.1" fill="rgba(255,255,255,0.6)" />
          <circle cx="45" cy="20" r="0.15" fill="rgba(255,255,255,0.9)" />
          <circle cx="68" cy="35" r="0.1" fill="rgba(255,255,255,0.7)" />
          <circle cx="85" cy="18" r="0.15" fill="rgba(255,255,255,0.5)" />
          <circle cx="20" cy="45" r="0.1" fill="rgba(255,255,255,0.8)" />
          <circle cx="55" cy="55" r="0.15" fill="rgba(255,255,255,0.6)" />
          <circle cx="75" cy="60" r="0.1" fill="rgba(255,255,255,0.9)" />
          <circle cx="10" cy="70" r="0.15" fill="rgba(255,255,255,0.4)" />
          <circle cx="35" cy="75" r="0.1" fill="rgba(255,255,255,0.7)" />
          <circle cx="60" cy="85" r="0.15" fill="rgba(255,255,255,0.5)" />
          <circle cx="90" cy="78" r="0.1" fill="rgba(255,255,255,0.8)" />
          <line
            x1="12"
            y1="15"
            x2="28"
            y2="25"
            stroke="rgba(255,255,255,0.15)"
            strokeWidth="0.05"
          />
          <line
            x1="28"
            y1="25"
            x2="45"
            y2="20"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="0.05"
          />
          <line
            x1="45"
            y1="20"
            x2="65"
            y2="25"
            stroke="rgba(255,255,255,0.12)"
            strokeWidth="0.05"
          />
        </svg>
      </div>

      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-8 sm:mb-12 text-center relative z-10">
        About Me
      </h1>

      {/* Bento Grid */}
      <div className="relative z-10 max-w-7xl w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 auto-rows-[minmax(180px,auto)]">
        {/* Large intro box */}
        <div className="md:col-span-2 lg:col-span-2 md:row-span-2 p-6 sm:p-8 bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-white/10 rounded-3xl hover:border-white/30 transition-all duration-300 group overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <Code2 className="w-8 h-8 text-blue-400" />
              <h2 className="text-2xl sm:text-3xl font-bold">Who I Am</h2>
            </div>
            <p className="text-gray-300 leading-relaxed text-sm sm:text-base mb-4">
              Hi, I&apos;m{" "}
              <span className="text-white font-semibold">Arief Azam</span>, a
              web and mobile developer passionate about building smooth,
              interactive, and meaningful digital experiences.
            </p>

            <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
              I enjoy turning ideas into products that are both functional and
              visually engaging.
            </p>
          </div>
        </div>

        {/* Tech stack box */}
        <div className="md:col-span-1 lg:col-span-2 md:row-span-1 p-6 bg-gradient-to-br from-green-500/10 to-teal-500/10 backdrop-blur-sm border border-white/10 rounded-3xl hover:border-white/30 transition-all duration-300 group overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <Zap className="w-6 h-6 text-green-400" />
              <h3 className="text-xl font-bold">Tech Stack</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech, i) => (
                <span
                  key={i}
                  className={`px-3 py-1 ${tech.color} ${
                    tech.name === "Next.js" ? "text-black" : "text-white"
                  } rounded-full text-xs sm:text-sm font-medium hover:scale-110 transition-transform duration-200 cursor-default`}
                >
                  {tech.name}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Journey box */}
        <div className="md:col-span-2 lg:col-span-2 md:row-span-1 p-6 bg-gradient-to-br from-orange-500/10 to-pink-500/10 backdrop-blur-sm border border-white/10 rounded-3xl hover:border-white/30 transition-all duration-300 group overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <Laptop className="w-6 h-6 text-orange-400" />
              <h3 className="text-xl font-bold">My Journey</h3>
            </div>
            <p className="text-gray-300 leading-relaxed text-sm">
              Started with{" "}
              <span className="text-white font-semibold">React & Next.js</span>,
              expanded into backend with{" "}
              <span className="text-white font-semibold">Prisma & Neon</span>,
              and built mobile apps with{" "}
              <span className="text-white font-semibold">React Native</span>.
            </p>
          </div>
        </div>

        {/* Stats box */}
        <div className="md:col-span-1 lg:col-span-1 md:row-span-1 p-6 bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-white/10 rounded-3xl hover:border-white/30 transition-all duration-300 group overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
            <div className="text-4xl sm:text-5xl font-bold text-blue-400 mb-2">
              3+
            </div>
            <div className="text-gray-300 text-sm">Years Coding</div>
          </div>
        </div>

        {/* Tools box */}
        <div className="md:col-span-1 lg:col-span-1 md:row-span-1 p-6 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-sm border border-white/10 rounded-3xl hover:border-white/30 transition-all duration-300 group overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-3">
              <Palette className="w-6 h-6 text-cyan-400" />
              <h3 className="text-lg font-bold">Styling</h3>
            </div>
            <p className="text-gray-300 text-sm">
              Tailwind CSS, shadcn/ui, GSAP
            </p>
          </div>
        </div>

        {/* Passion project box */}
        <div className="md:col-span-3 lg:col-span-2 md:row-span-1 p-6 bg-gradient-to-br from-yellow-500/10 to-red-500/10 backdrop-blur-sm border border-white/10 rounded-3xl hover:border-white/30 transition-all duration-300 group overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <Smartphone className="w-6 h-6 text-yellow-400" />
              <h3 className="text-xl font-bold">Beyond Coding</h3>
            </div>
            <p className="text-gray-300 leading-relaxed text-sm">
              Passionate about sports and fitness – which inspired{" "}
              <span className="text-white font-semibold">MySukan</span>, a
              mobile app connecting people through sports and healthy
              activities.
            </p>
          </div>
        </div>

        {/* Currently box */}
        <div className="md:col-span-1 lg:col-span-2 md:row-span-1 p-6 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 backdrop-blur-sm border border-white/10 rounded-3xl hover:border-white/30 transition-all duration-300 group overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
            <Coffee className="w-8 h-8 text-indigo-400 mb-3" />
            <div className="text-sm text-gray-300 mb-1">Currently</div>
            <div className="text-lg font-bold text-white">
              Available for Work
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
