"use client";

import { Mail, Linkedin, Github } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function Contact() {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <main
      className="relative min-h-screen flex flex-col justify-center items-center px-4 text-white"
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
      <h1 className="text-5xl font-extrabold mb-4 text-center">Get in Touch</h1>

      <div className="max-w-2xl mx-auto text-center space-y-6 text-lg text-gray-200">
        <p className="text-xl text-gray-300 mb-8 text-center">
          I’d love to hear from you! Whether it’s a project idea, collaboration,
          or just a friendly hello.
        </p>
        <p className="text-xl text-gray-300 mb-8 text-center">
          Feel free to reach out
        </p>

        <div className="space-y-4">
          <p className="flex items-center justify-center gap-2">
            <Mail className="w-5 h-5 text-blue-500" />
            <a
              href="mailto:ariefnurazams@gmail.com"
              className="hover:underline"
            >
              ariefnurazams@gmail.com
            </a>
          </p>
          <p className="flex items-center justify-center gap-2">
            <Linkedin className="w-5 h-5 text-blue-500" />
            <a
              href="https://www.linkedin.com/in/arief-azams/"
              target="_blank"
              className="hover:underline"
            >
              linkedin.com/in/arief-azams
            </a>
          </p>

          <p className="flex items-center justify-center gap-2">
            <Github className="w-5 h-5 text-blue-500" />
            <a
              href="https://github.com/Azam2312334"
              target="_blank"
              className="hover:underline"
            >
              github.com/Azam2312334
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
