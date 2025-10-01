"use client";

import { Mail, Linkedin, Github } from "lucide-react";
import { useEffect, useState } from "react";

export default function Contact() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "ariefnurazams@gmail.com",
      href: "mailto:ariefnurazams@gmail.com",
      gradient: "from-blue-500/20 to-cyan-500/20",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/arief-azams",
      href: "https://www.linkedin.com/in/arief-azams/",
      gradient: "from-blue-600/20 to-indigo-500/20",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/Azam2312334",
      href: "https://github.com/Azam2312334",
      gradient: "from-gray-500/20 to-slate-600/20",
    },
  ];

  return (
    <main
      className="relative min-h-screen flex flex-col justify-center items-center px-4 text-white py-12 sm:py-16"
      style={{
        background:
          "linear-gradient(135deg, #0c0c0c 0%, #1a1a1a 25%, #0c0c0c 100%)",
      }}
    >
      {/* Starfield with connecting lines - Full Page */}
      <div className="fixed inset-0 pointer-events-none">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          style={{ opacity: isMobile ? 0.2 : 0.3 }}
        >
          {/* Dots - using percentage positions */}
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
          <circle cx="5" cy="35" r="0.1" fill="rgba(255,255,255,0.6)" />
          <circle cx="38" cy="12" r="0.15" fill="rgba(255,255,255,0.4)" />
          <circle cx="72" cy="8" r="0.1" fill="rgba(255,255,255,0.9)" />
          <circle cx="18" cy="65" r="0.15" fill="rgba(255,255,255,0.7)" />
          <circle cx="48" cy="40" r="0.1" fill="rgba(255,255,255,0.5)" />
          <circle cx="82" cy="50" r="0.15" fill="rgba(255,255,255,0.6)" />
          <circle cx="30" cy="60" r="0.1" fill="rgba(255,255,255,0.8)" />
          <circle cx="65" cy="25" r="0.15" fill="rgba(255,255,255,0.4)" />
          <circle cx="15" cy="88" r="0.1" fill="rgba(255,255,255,0.6)" />
          <circle cx="42" cy="92" r="0.15" fill="rgba(255,255,255,0.7)" />
          <circle cx="78" cy="95" r="0.1" fill="rgba(255,255,255,0.5)" />
          <circle cx="25" cy="5" r="0.15" fill="rgba(255,255,255,0.8)" />
          <circle cx="58" cy="8" r="0.1" fill="rgba(255,255,255,0.4)" />

          {/* Connecting Lines */}
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
          <line
            x1="68"
            y1="35"
            x2="55"
            y2="55"
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="0.05"
          />
          <line
            x1="20"
            y1="45"
            x2="35"
            y2="75"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="0.05"
          />
          <line
            x1="55"
            y1="55"
            x2="75"
            y2="60"
            stroke="rgba(255,255,255,0.12)"
            strokeWidth="0.05"
          />
          <line
            x1="75"
            y1="60"
            x2="90"
            y2="78"
            stroke="rgba(255,255,255,0.09)"
            strokeWidth="0.05"
          />
          <line
            x1="10"
            y1="70"
            x2="18"
            y2="65"
            stroke="rgba(255,255,255,0.11)"
            strokeWidth="0.05"
          />
          <line
            x1="38"
            y1="12"
            x2="48"
            y2="40"
            stroke="rgba(255,255,255,0.13)"
            strokeWidth="0.05"
          />
          <line
            x1="72"
            y1="8"
            x2="85"
            y2="18"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="0.05"
          />
          <line
            x1="48"
            y1="40"
            x2="68"
            y2="35"
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="0.05"
          />
          <line
            x1="82"
            y1="50"
            x2="75"
            y2="60"
            stroke="rgba(255,255,255,0.14)"
            strokeWidth="0.05"
          />
          <line
            x1="30"
            y1="60"
            x2="35"
            y2="75"
            stroke="rgba(255,255,255,0.09)"
            strokeWidth="0.05"
          />
          <line
            x1="5"
            y1="35"
            x2="12"
            y2="15"
            stroke="rgba(255,255,255,0.11)"
            strokeWidth="0.05"
          />
          <line
            x1="15"
            y1="88"
            x2="42"
            y2="92"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="0.05"
          />
          <line
            x1="42"
            y1="92"
            x2="60"
            y2="85"
            stroke="rgba(255,255,255,0.12)"
            strokeWidth="0.05"
          />
          <line
            x1="78"
            y1="95"
            x2="90"
            y2="78"
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="0.05"
          />
          <line
            x1="25"
            y1="5"
            x2="38"
            y2="12"
            stroke="rgba(255,255,255,0.13)"
            strokeWidth="0.05"
          />
          <line
            x1="58"
            y1="8"
            x2="65"
            y2="25"
            stroke="rgba(255,255,255,0.11)"
            strokeWidth="0.05"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto w-full">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 sm:mb-6 text-center">
          Get in Touch
        </h1>

        <div className="text-center space-y-3 sm:space-y-4 mb-8 sm:mb-12 px-4">
          <p className="text-base sm:text-lg md:text-xl text-gray-300">
            I&apos;d love to hear from you! Whether it&apos;s a project idea,
            collaboration, or just a friendly hello.
          </p>

          <p className="text-base sm:text-lg md:text-xl text-gray-300">
            Feel free to reach out
          </p>
        </div>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-3 px-4">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <a
                key={index}
                href={method.href}
                target={method.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  method.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="group relative p-6 sm:p-8 border border-white/10 rounded-2xl backdrop-blur-sm bg-white/5 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 overflow-hidden cursor-pointer"
              >
                {/* Gradient overlay on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${method.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}
                ></div>

                {/* Icon */}
                <div className="relative z-10 mb-4 flex justify-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/10 border-2 border-white/20 group-hover:border-white/40 flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10 text-center">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 group-hover:text-white transition-colors duration-300">
                    {method.label}
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 text-sm sm:text-base break-all transition-colors duration-300">
                    {method.value}
                  </p>
                </div>

                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Click indicator */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-6 h-6 rounded-full border-2 border-blue-400 flex items-center justify-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </main>
  );
}
