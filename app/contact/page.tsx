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
    <main className="relative min-h-screen flex flex-col justify-center items-center px-4 text-foreground py-12 sm:py-16 page-bg">
      {/* Starfield with connecting lines - Full Page */}
      <div className="fixed inset-0 pointer-events-none stars-bg">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          {/* Dots */}
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
          <circle cx="5" cy="35" r="0.1" className="star" />
          <circle cx="38" cy="12" r="0.15" className="star" />
          <circle cx="72" cy="8" r="0.1" className="star" />
          <circle cx="18" cy="65" r="0.15" className="star" />
          <circle cx="48" cy="40" r="0.1" className="star" />
          <circle cx="82" cy="50" r="0.15" className="star" />
          <circle cx="30" cy="60" r="0.1" className="star" />
          <circle cx="65" cy="25" r="0.15" className="star" />
          <circle cx="15" cy="88" r="0.1" className="star" />
          <circle cx="42" cy="92" r="0.15" className="star" />
          <circle cx="78" cy="95" r="0.1" className="star" />
          <circle cx="25" cy="5" r="0.15" className="star" />
          <circle cx="58" cy="8" r="0.1" className="star" />

          {/* Connecting Lines */}
          <line x1="12" y1="15" x2="28" y2="25" className="star-line" />
          <line x1="28" y1="25" x2="45" y2="20" className="star-line" />
          <line x1="45" y1="20" x2="65" y2="25" className="star-line" />
          <line x1="68" y1="35" x2="55" y2="55" className="star-line" />
          <line x1="20" y1="45" x2="35" y2="75" className="star-line" />
          <line x1="55" y1="55" x2="75" y2="60" className="star-line" />
          <line x1="75" y1="60" x2="90" y2="78" className="star-line" />
          <line x1="10" y1="70" x2="18" y2="65" className="star-line" />
          <line x1="38" y1="12" x2="48" y2="40" className="star-line" />
          <line x1="72" y1="8" x2="85" y2="18" className="star-line" />
          <line x1="48" y1="40" x2="68" y2="35" className="star-line" />
          <line x1="82" y1="50" x2="75" y2="60" className="star-line" />
          <line x1="30" y1="60" x2="35" y2="75" className="star-line" />
          <line x1="5" y1="35" x2="12" y2="15" className="star-line" />
          <line x1="15" y1="88" x2="42" y2="92" className="star-line" />
          <line x1="42" y1="92" x2="60" y2="85" className="star-line" />
          <line x1="78" y1="95" x2="90" y2="78" className="star-line" />
          <line x1="25" y1="5" x2="38" y2="12" className="star-line" />
          <line x1="58" y1="8" x2="65" y2="25" className="star-line" />
        </svg>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto w-full">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 sm:mb-6 text-center">
          Get in Touch
        </h1>

        <div className="text-center space-y-3 sm:space-y-4 mb-8 sm:mb-12 px-4">
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground">
            I&apos;d love to hear from you! Whether it&apos;s a project idea,
            collaboration, or just a friendly hello.
          </p>

          <p className="text-base sm:text-lg md:text-xl text-muted-foreground">
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
                className="contact-card group relative overflow-hidden cursor-pointer"
              >
                {/* Gradient overlay on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${method.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}
                ></div>

                {/* Icon */}
                <div className="relative z-10 mb-4 flex justify-center">
                  <div className="contact-icon-circle">
                    <Icon className="contact-icon" />
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10 text-center">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 group-hover:text-foreground transition-colors duration-300">
                    {method.label}
                  </h3>
                  <p className="text-muted-foreground group-hover:opacity-90 text-sm sm:text-base break-all transition-all duration-300">
                    {method.value}
                  </p>
                </div>

                {/* Decorative corner */}
                <div className="contact-corner"></div>

                {/* Click indicator */}
                <div className="contact-indicator">
                  <div className="contact-indicator-ring">
                    <div className="contact-indicator-dot"></div>
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
