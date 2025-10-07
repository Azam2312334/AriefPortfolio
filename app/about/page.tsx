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
    { name: "Next.js", color: "bg-gray-900 dark:bg-white" },
    { name: "Node.js", color: "bg-green-500" },
    { name: "Tailwind", color: "bg-teal-400" },
    { name: "Prisma", color: "bg-indigo-500" },
  ];

  return (
    <main className="relative min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 md:px-8 text-foreground py-12 sm:py-16 page-bg">
      {/* Starfield Background */}
      <div className="fixed inset-0 pointer-events-none stars-bg">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <circle cx="12" cy="15" r="0.15" className="star" />
          <circle cx="28" cy="25" r="0.1" className="star" />
          <circle cx="45" cy="20" r="0.15" className="star" />
          <circle cx="68" cy="35" r="0.1" className="star" />
          <circle cx="85" cy="18" r="0.15" className="star" />
          <circle cx="20" cy="45" r="0.1" className="star" />
          <circle cx="55" cy="55" r="0.15" className="star" />
          <circle cx="75" cy="60" r="0.1" className="star" />
          <circle cx="10" cy="70" r="0.15" className="star" />
          <circle cx="35" cy="75" r="0.1" className="star" />
          <circle cx="60" cy="85" r="0.15" className="star" />
          <circle cx="90" cy="78" r="0.1" className="star" />
          <line x1="12" y1="15" x2="28" y2="25" className="star-line" />
          <line x1="28" y1="25" x2="45" y2="20" className="star-line" />
          <line x1="45" y1="20" x2="65" y2="25" className="star-line" />
        </svg>
      </div>

      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-8 sm:mb-12 text-center relative z-10">
        About Me
      </h1>

      {/* Bento Grid */}
      <div className="relative z-10 max-w-7xl w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 auto-rows-[minmax(180px,auto)]">
        {/* Large intro box */}
        <div className="bento-card bento-blue md:col-span-2 lg:col-span-2 md:row-span-2">
          <div className="bento-overlay bento-overlay-blue"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <Code2 className="w-8 h-8 bento-icon-blue" />
              <h2 className="text-2xl sm:text-3xl font-bold">Who I Am</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed text-sm sm:text-base mb-4">
              Hi, I&apos;m{" "}
              <span className="text-foreground font-semibold">Arief Azam</span>,
              a web and mobile developer passionate about building smooth,
              interactive, and meaningful digital experiences.
            </p>

            <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
              I enjoy turning ideas into products that are both functional and
              visually engaging.
            </p>
          </div>
        </div>

        {/* Tech stack box */}
        <div className="bento-card bento-green md:col-span-1 lg:col-span-2 md:row-span-1">
          <div className="bento-overlay bento-overlay-green"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <Zap className="w-6 h-6 bento-icon-green" />
              <h3 className="text-xl font-bold">Tech Stack</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech, i) => (
                <span
                  key={i}
                  className={`px-3 py-1 ${tech.color} ${
                    tech.name === "Next.js"
                      ? "text-white dark:text-black"
                      : "text-white"
                  } rounded-full text-xs sm:text-sm font-medium hover:scale-110 transition-transform duration-200 cursor-default`}
                >
                  {tech.name}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Journey box */}
        <div className="bento-card bento-orange md:col-span-2 lg:col-span-2 md:row-span-1">
          <div className="bento-overlay bento-overlay-orange"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <Laptop className="w-6 h-6 bento-icon-orange" />
              <h3 className="text-xl font-bold">My Journey</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed text-sm">
              Started with{" "}
              <span className="text-foreground font-semibold">
                React & Next.js
              </span>
              , expanded into backend with{" "}
              <span className="text-foreground font-semibold">
                Prisma & Neon
              </span>
              , and built mobile apps with{" "}
              <span className="text-foreground font-semibold">
                React Native
              </span>
              .
            </p>
          </div>
        </div>

        {/* Stats box */}
        <div className="bento-card bento-purple md:col-span-1 lg:col-span-1 md:row-span-1">
          <div className="bento-overlay bento-overlay-purple"></div>
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
            <div className="text-4xl sm:text-5xl font-bold bento-stat mb-2">
              3+
            </div>
            <div className="text-muted-foreground text-sm">Years Coding</div>
          </div>
        </div>

        {/* Tools box */}
        <div className="bento-card bento-cyan md:col-span-1 lg:col-span-1 md:row-span-1">
          <div className="bento-overlay bento-overlay-cyan"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-3">
              <Palette className="w-6 h-6 bento-icon-cyan" />
              <h3 className="text-lg font-bold">Styling</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Tailwind CSS, shadcn/ui, GSAP
            </p>
          </div>
        </div>

        {/* Passion project box */}
        <div className="bento-card bento-yellow md:col-span-3 lg:col-span-2 md:row-span-1">
          <div className="bento-overlay bento-overlay-yellow"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <Smartphone className="w-6 h-6 bento-icon-yellow" />
              <h3 className="text-xl font-bold">Beyond Coding</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed text-sm">
              Passionate about sports and fitness – which inspired{" "}
              <span className="text-foreground font-semibold">MySukan</span>, a
              mobile app connecting people through sports and healthy
              activities.
            </p>
          </div>
        </div>

        {/* Currently box */}
        <div className="bento-card bento-indigo md:col-span-1 lg:col-span-2 md:row-span-1">
          <div className="bento-overlay bento-overlay-indigo"></div>
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
            <Coffee className="w-8 h-8 bento-icon-indigo mb-3" />
            <div className="text-sm text-muted-foreground mb-1">Currently</div>
            <div className="text-lg font-bold text-foreground">
              Available for Work
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
