"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Canvas } from "@react-three/fiber"; // three js
import { OrbitControls, useGLTF } from "@react-three/drei";

gsap.registerPlugin(ScrollTrigger); // register plugin

export default function Home() {
  // variables
  const descRef1 = useRef(null);
  const projectsRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const tl = gsap.timeline();

  useEffect(() => {
    // Hero Section
    gsap.fromTo(
      descRef1.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        scrollTrigger: {
          trigger: descRef1.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "restart reverse restart reverse", // restart on every scroll
        },
      }
    );

    // Projects Section
    gsap.fromTo(
      projectsRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: projectsRef.current,
          start: "top 80%",
          toggleActions: "restart reverse restart reverse",
        },
      }
    );

    // About Section
    gsap.fromTo(
      aboutRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 80%",
          toggleActions: "restart reverse restart reverse",
        },
      }
    );

    // Contact Section
    gsap.fromTo(
      contactRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: contactRef.current,
          start: "top 80%",
          toggleActions: "restart reverse restart reverse",
        },
      }
    );

    // Heading animation first
    tl.from(".intro-heading", {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    });

    // Line-by-line reveal
    tl.from(
      ".intro-line",
      {
        y: 20,
        opacity: 0,
        stagger: 0.3,
        duration: 0.8,
        ease: "power3.out",
        overwrite: "auto",
      },
      "+=0.2"
    );

    // Highlight sweep effect (loops gently)
    gsap.to(".intro-line", {
      backgroundPosition: "200% 0",
      duration: 2.5,
      ease: "linear",
      repeat: -1,
      stagger: {
        each: 2,
        repeat: -1,
      },
    });
  }, []);

  function Model() {
    const { scene } = useGLTF("/models/scene.gltf");
    return <primitive object={scene} scale={0.7} />;
  }

  function Icon3D() {
    return (
      <div className="w-24 h-24 mx-auto mb-4">
        <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[2, 2, 2]} />
          <Model />
          <OrbitControls enableZoom={false} enablePan={false} />
        </Canvas>
      </div>
    );
  }

  return (
    <main
      className="relative min-h-screen overflow-hidden"
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
          style={{ opacity: 0.3 }}
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
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center h-screen text-white px-4">
        <div className="flex items-center justify-between w-full max-w-6xl pt-20">
          {/* Left side - Text Content */}
          <div className="flex-1 pr-12">
            {/* Small intro text */}
            <p className="text-sm text-gray-400 mb-4 uppercase tracking-wider">
              HI THERE! I'M ARIEF AZAM
            </p>

            {/* Main heading */}
            <h1 className="text-6xl font-bold mb-6 intro-heading">
              Full-Stack Developer
            </h1>

            {/* Contact info */}
            <div className="grid grid-cols-2 gap-8 mb-8 text-sm">
              <div>
                <p className="text-gray-400 mb-1">Email</p>
                <p>ariefnurazams@gmail.com</p>
              </div>
              <div>
                <p className="text-gray-400 mb-1">Location</p>
                <p>Malaysia</p>
              </div>
              <div>
                <p className="text-gray-400 mb-1">Freelance</p>
                <p>Available</p>
              </div>
            </div>

            {/* Description */}
            <div className="text-left leading-relaxed mb-8 text-gray-200 intro-text max-w-lg">
              <span
                className="intro-line block relative cursor-pointer
               bg-gradient-to-r from-white via-gray-400 to-white
               bg-[length:200%_100%] bg-clip-text text-transparent
               transition-transform duration-300 ease-out
               hover:scale-105 hover:shadow-lg hover:shadow-white/30 mb-4"
              >
                I am Arief Nur Azam, a Software Engineering student with
                hands-on experience in developing and deploying full-stack
                applications.
              </span>
              <span
                className="intro-line block relative cursor-pointer
               bg-gradient-to-r from-white via-gray-400 to-white
               bg-[length:200%_100%] bg-clip-text text-transparent
               transition-transform duration-300 ease-out
               hover:scale-105 hover:shadow-lg hover:shadow-white/30 mb-4"
              >
                My focus spans both web and mobile development, where I create
                scalable and user-friendly solutions.
              </span>
              <span
                className="intro-line block relative cursor-pointer
               bg-gradient-to-r from-white via-gray-400 to-white
               bg-[length:200%_100%] bg-clip-text text-transparent
               transition-transform duration-300 ease-out
               hover:scale-105 hover:shadow-lg hover:shadow-white/30"
              >
                I am proficient in working across the stack, from responsive
                front-end design to robust back-end systems.
              </span>
            </div>

            {/* Buttons */}
            <div className="flex gap-4">
              <a
                href="/projects"
                className="px-6 py-3 rounded-lg 
                 bg-white/20 backdrop-blur-md 
                 border border-white/30 
                 text-white 
                 hover:bg-white/30 
                 transition"
              >
                View Projects
              </a>

              <a
                href="/contact"
                className="px-6 py-3 rounded-lg 
                 bg-white/20 backdrop-blur-md 
                 border border-white/30 
                 text-white 
                 hover:bg-white/30 
                 transition"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* Right side - Profile photo */}
          <div className="flex-shrink-0 relative">
            {/* Profile Photo */}
            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-lg relative z-10">
              <img
                src="/images/projects/profile.JPEG"
                alt="Profile Photo"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        ref={projectsRef}
        className="flex flex-col items-center justify-center h-screen text-white px-4"
      >
        <h2 className="text-4xl font-bold mb-5">My Projects</h2>
        <div className="flex gap-4 mb-5">
          <a
            href="/projects"
            className="px-4 py-2 rounded-lg 
               bg-white/20 backdrop-blur-md 
               border border-white/30 
               text-white 
               hover:bg-white/30 
               transition"
          >
            View Projects
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
          {/* Project 1 */}
          <div
            className="bg-white/10 backdrop-blur-lg border border-white/20 
                  rounded-2xl p-6 hover:scale-105 hover:shadow-2xl 
                  hover:shadow-white/30 transition-transform 
                  duration-300 ease-out text-center"
          >
            <Icon3D />
            <h3 className="text-xl font-semibold mb-3">Portfolio</h3>
            <p className="text-gray-300 mb-4">
              A project showcases my skills, experience, and featured works in a
              clean and responsive design.
            </p>
          </div>

          {/* Project 2 */}
          <div
            className="bg-white/10 backdrop-blur-lg border border-white/20 
                rounded-2xl p-6 hover:scale-105 hover:shadow-2xl 
                hover:shadow-white/30 transition-transform 
                duration-300 ease-out text-center"
          >
            <div className="w-24 h-24 mx-auto mb-4 overflow-hidden rounded-xl shadow-lg">
              <img
                src="/images/projects/MysukanLogo1.png"
                alt="MySukan Logo"
                className="w-full h-full object-contain
               scale-[1.3]"
              />
            </div>

            <h3 className="text-xl font-semibold mb-3">MySukan</h3>
            <p className="text-gray-300 mb-4">
              A Real-Time Sport Matchmaking Application.
            </p>
          </div>

          {/* Project 3 */}
          <div
            className="bg-white/10 backdrop-blur-lg border border-white/20 
                  rounded-2xl p-6 hover:scale-105 hover:shadow-2xl 
                  hover:shadow-white/30 transition-transform 
                  duration-300 ease-out text-center"
          >
            <h1 className="text-3xl font-semibold">
              Blog
              <span className="text-blue-500 mb-20">Azam</span>
            </h1>

            <h3 className="text-xl font-semibold mb-3">Blogging Website</h3>
            <p className="text-gray-300 mb-4">
              Users can create, edit, and manage posts in a minimal and
              responsive interface.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        ref={aboutRef}
        className="flex flex-col items-center justify-center h-screen text-white px-4"
      >
        <h2 className="text-4xl font-bold mb-12">About</h2>
      </section>

      {/* Contact Section */}
      <section
        ref={contactRef}
        className="flex flex-col items-center justify-center h-screen text-white px-4"
      >
        <h2 className="text-4xl font-bold mb-12">Contact</h2>
        <div className="flex gap-4">
          <a
            href="/contact"
            className="px-4 py-2 rounded-lg bg-white/20 backdrop-blur-md 
               border border-white/30 
               text-white 
               hover:bg-white/30 
               transition"
          >
            Contact Me
          </a>
        </div>
      </section>
    </main>
  );
}
