"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mail, Linkedin, Github } from "lucide-react";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const descRef1 = useRef(null);
  const projectsRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const heroContentRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const circleRef = useRef<HTMLDivElement>(null);
  const [activeTechIndex, setActiveTechIndex] = useState<number | null>(null);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    if (typeof window !== "undefined") {
      document.documentElement.style.scrollBehavior = "smooth";
    }

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!circleRef.current || !heroContentRef.current) return;

      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      const progress = Math.min(scrollY / windowHeight, 1);
      setScrollProgress(progress);

      const scale = 1 + progress * 49;

      const contentOpacity = 1 - Math.pow(progress, 5);

      circleRef.current.style.transform = `scale(${scale})`;
      circleRef.current.style.opacity = `${Math.max(0, 1 - progress)}`;

      heroContentRef.current.style.transform = `scale(${scale})`;
      heroContentRef.current.style.opacity = `${Math.max(0, contentOpacity)}`;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isLoading) return;

    gsap.killTweensOf(".intro-heading");
    gsap.killTweensOf(".intro-line");
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

    gsap.set(".intro-heading", { opacity: 1, y: 0 });
    gsap.set(".intro-line", { opacity: 1, y: 0 });

    ScrollTrigger.refresh();

    gsap.fromTo(
      descRef1.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        scrollTrigger: {
          trigger: descRef1.current,
          start: isMobile ? "top 90%" : "top 80%",
          end: isMobile ? "bottom 30%" : "bottom 20%",
          toggleActions: "play none none reverse",
          invalidateOnRefresh: true,
        },
      }
    );

    gsap.fromTo(
      projectsRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: projectsRef.current,
          start: isMobile ? "top 85%" : "top 80%",
          toggleActions: "play none none none",
          invalidateOnRefresh: true,
          once: true,
        },
      }
    );

    gsap.fromTo(
      aboutRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: aboutRef.current,
          start: isMobile ? "top 85%" : "top 80%",
          toggleActions: "play none none none",
          invalidateOnRefresh: true,
          once: true,
        },
      }
    );

    gsap.fromTo(
      contactRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: contactRef.current,
          start: isMobile ? "top 85%" : "top 80%",
          toggleActions: "play none none none",
          invalidateOnRefresh: true,
          once: true,
        },
      }
    );

    const introTimeline = gsap.timeline();
    introTimeline.from(".intro-heading", {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
      clearProps: "all",
    });

    introTimeline.from(
      ".intro-line",
      {
        y: 20,
        opacity: 0,
        stagger: 0.3,
        duration: 0.8,
        ease: "power3.out",
        clearProps: "all",
      },
      "+=0.2"
    );

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

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      gsap.killTweensOf(".intro-heading");
      gsap.killTweensOf(".intro-line");
    };
  }, [isMobile, isLoading]);

  function Model() {
    const { scene } = useGLTF("/models/scene.gltf");
    return <primitive object={scene} scale={isMobile ? 0.5 : 0.7} />;
  }

  function Icon3D() {
    return (
      <div className={`${isMobile ? "w-16 h-16" : "w-24 h-24"} mx-auto mb-4`}>
        <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[2, 2, 2]} />
          <Model />
          <OrbitControls enableZoom={false} enablePan={false} />
        </Canvas>
      </div>
    );
  }

  if (isLoading) {
    return (
      <main
        className="relative min-h-screen overflow-x-hidden"
        style={{
          background:
            "linear-gradient(135deg, #0c0c0c 0%, #1a1a1a 25%, #0c0c0c 100%)",
        }}
      >
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
          </svg>
        </div>

        <section className="relative flex flex-col lg:items-center lg:justify-center min-h-screen text-white px-4 py-8 lg:py-0">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between w-full max-w-6xl lg:pt-20 pt-16 pb-8 lg:pb-0">
            <div className="flex-1 lg:pr-12 order-2 lg:order-1">
              <div className="h-4 w-24 bg-white/10 rounded animate-pulse mb-4 mx-auto lg:mx-0"></div>
              <div className="h-12 lg:h-16 w-3/4 bg-white/10 rounded animate-pulse mb-6 mx-auto lg:mx-0"></div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 lg:gap-8 mb-8">
                <div className="space-y-2">
                  <div className="h-3 w-16 bg-white/10 rounded animate-pulse mx-auto lg:mx-0"></div>
                  <div className="h-4 w-32 bg-white/10 rounded animate-pulse mx-auto lg:mx-0"></div>
                </div>
                <div className="space-y-2">
                  <div className="h-3 w-16 bg-white/10 rounded animate-pulse mx-auto lg:mx-0"></div>
                  <div className="h-4 w-24 bg-white/10 rounded animate-pulse mx-auto lg:mx-0"></div>
                </div>
              </div>
              <div className="space-y-4 mb-8 max-w-lg mx-auto lg:mx-0">
                <div className="h-4 w-full bg-white/10 rounded animate-pulse"></div>
                <div className="h-4 w-5/6 bg-white/10 rounded animate-pulse"></div>
                <div className="h-4 w-4/5 bg-white/10 rounded animate-pulse"></div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <div className="h-12 w-32 bg-white/10 rounded-lg animate-pulse"></div>
                <div className="h-12 w-32 bg-white/10 rounded-lg animate-pulse"></div>
              </div>
            </div>
            <div className="flex-shrink-0 relative order-1 lg:order-2 mb-8 lg:mb-0 flex justify-center">
              <div className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-full bg-white/10 animate-pulse"></div>
            </div>
          </div>
        </section>

        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 text-white/60 text-sm">
          <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce"></div>
          <div
            className="w-2 h-2 bg-white/60 rounded-full animate-bounce"
            style={{ animationDelay: "0.2s" }}
          ></div>
          <div
            className="w-2 h-2 bg-white/60 rounded-full animate-bounce"
            style={{ animationDelay: "0.4s" }}
          ></div>
        </div>
      </main>
    );
  }

  const techLogos = [
    { src: "/images/projects/ts.png", alt: "TypeScript", angle: 0 },
    { src: "/images/projects/next.jpg", alt: "Next.js", angle: 30 },
    { src: "/images/projects/js.png", alt: "JavaScript", angle: 60 },
    { src: "/images/projects/react.png", alt: "React", angle: 90 },
    { src: "/images/projects/node.png", alt: "Node.js", angle: 120 },
    { src: "/images/projects/php.png", alt: "PHP", angle: 150 },
    { src: "/images/projects/python.jpg", alt: "Python", angle: 180 },
    { src: "/images/projects/tailwind.png", alt: "Tailwind", angle: 210 },
    { src: "/images/projects/mysql.png", alt: "MySQL", angle: 240 },
    { src: "/images/projects/java.svg", alt: "Java", angle: 270 },
    { src: "/images/projects/postgresql.jpg", alt: "PostgreSQL", angle: 300 },
    { src: "/images/projects/prisma.jpg", alt: "Prisma", angle: 330 },
  ];

  return (
    <main
      className="relative min-h-screen overflow-x-hidden"
      style={{
        background:
          "linear-gradient(135deg, #0c0c0c 0%, #1a1a1a 25%, #0c0c0c 100%)",
      }}
    >
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

      <div
        style={{ height: isMobile ? "auto" : "100vh", position: "relative" }}
      >
        <section
          className={`${isMobile ? "relative" : "fixed"} top-0 left-0 w-full ${
            isMobile ? "min-h-screen" : "h-screen"
          } flex flex-col lg:items-center lg:justify-center text-white px-4 overflow-hidden`}
          style={{
            zIndex: isMobile ? "auto" : scrollProgress < 0.95 ? 100 : 1,
            pointerEvents: isMobile
              ? "auto"
              : scrollProgress >= 0.95
              ? "none"
              : "auto",
          }}
        >
          <div
            ref={circleRef}
            className="hidden lg:block fixed left-1/2 top-1/2 w-48 h-48 
                   -translate-x-1/2 -translate-y-1/2 rounded-full 
                   bg-gradient-radial from-white/20 via-white/10 to-transparent
                   border-2 border-white/40 shadow-2xl pointer-events-none"
            style={{
              transition: "transform 0.05s linear, opacity 0.05s linear",
              zIndex: 50,
              boxShadow:
                "0 0 100px rgba(255,255,255,0.3), inset 0 0 100px rgba(255,255,255,0.1)",
              transformOrigin: "center center",
            }}
          ></div>

          <div
            ref={isMobile ? null : heroContentRef}
            className="flex flex-col lg:flex-row lg:items-center lg:justify-between w-full max-w-6xl relative z-10 pt-20 lg:pt-0"
            style={{
              transition: "opacity 0.05s linear",
              willChange: "opacity",
            }}
          >
            <div className="flex-1 lg:pr-12 order-2 lg:order-1">
              <p className="text-sm text-gray-400 mb-4 uppercase tracking-wider text-center lg:text-left">
                ARIEF AZAM
              </p>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 intro-heading text-center lg:text-left">
                Full-Stack Developer
              </h1>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 lg:gap-8 mb-8 text-sm">
                <div className="text-center lg:text-left">
                  <p className="text-gray-400 mb-1">Email</p>
                  <p className="text-xs sm:text-sm break-words">
                    ariefnurazams@gmail.com
                  </p>
                </div>
                <div className="text-center lg:text-left">
                  <p className="text-gray-400 mb-1">Location</p>
                  <p>Malaysia</p>
                </div>
                <div className="text-center lg:text-left sm:col-span-2 lg:col-span-1">
                  <p className="text-gray-400 mb-1">Freelance</p>
                  <p>Available</p>
                </div>
              </div>

              <div className="text-left leading-relaxed mb-8 text-gray-200 intro-text max-w-lg mx-auto lg:mx-0">
                <span className="intro-line block relative cursor-pointer bg-gradient-to-r from-white via-gray-400 to-white bg-[length:200%_100%] bg-clip-text text-transparent transition-transform duration-300 ease-out hover:scale-105 hover:shadow-lg hover:shadow-white/30 mb-4 text-sm lg:text-base">
                  I am Arief Nur Azam, a Software Engineering student with
                  hands-on experience in developing and deploying full-stack
                  applications.
                </span>
                <span className="intro-line block relative cursor-pointer bg-gradient-to-r from-white via-gray-400 to-white bg-[length:200%_100%] bg-clip-text text-transparent transition-transform duration-300 ease-out hover:scale-105 hover:shadow-lg hover:shadow-white/30 mb-4 text-sm lg:text-base">
                  My focus spans both web and mobile development, where I create
                  scalable and user-friendly solutions.
                </span>
                <span className="intro-line block relative cursor-pointer bg-gradient-to-r from-white via-gray-400 to-white bg-[length:200%_100%] bg-clip-text text-transparent transition-transform duration-300 ease-out hover:scale-105 hover:shadow-lg hover:shadow-white/30 text-sm lg:text-base">
                  I am proficient in working across the stack, from responsive
                  front-end design to robust back-end systems.
                </span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="/projects"
                  className="px-4 lg:px-6 py-3 rounded-lg bg-white/20 backdrop-blur-md border border-white/30 text-white text-center hover:bg-white/30 transition text-sm lg:text-base"
                >
                  View Projects
                </a>
                <a
                  href="/contact"
                  className="px-4 lg:px-6 py-3 rounded-lg bg-white/20 backdrop-blur-md border border-white/30 text-white text-center hover:bg-white/30 transition text-sm lg:text-base"
                >
                  Contact Me
                </a>
              </div>
            </div>

            <div className="flex-shrink-0 relative order-1 lg:order-2 mb-8 lg:mb-0 flex justify-center">
              <div
                className={`relative ${isMobile ? "w-80 h-80" : "w-96 h-96"}`}
              >
                <svg
                  className="absolute inset-0 w-full h-full"
                  viewBox="0 0 400 400"
                  style={{ zIndex: 1 }}
                >
                  {[...Array(8)].map((_, ring) => {
                    const radius = 40 + ring * 25;
                    const segments = 36;
                    return [...Array(segments)].map((_, i) => {
                      const angle1 = (i / segments) * 2 * Math.PI;
                      const angle2 = ((i + 1) / segments) * 2 * Math.PI;
                      const x1 = 200 + radius * Math.cos(angle1);
                      const y1 = 200 + radius * Math.sin(angle1);
                      const x2 = 200 + radius * Math.cos(angle2);
                      const y2 = 200 + radius * Math.sin(angle2);
                      return (
                        <line
                          key={`ring-${ring}-${i}`}
                          x1={x1}
                          y1={y1}
                          x2={x2}
                          y2={y2}
                          stroke="rgba(255,255,255,0.3)"
                          strokeWidth="1"
                        />
                      );
                    });
                  })}

                  {techLogos.map((logo, i) => {
                    const angle = (logo.angle * Math.PI) / 180;
                    return (
                      <line
                        key={`spoke-${i}`}
                        x1="200"
                        y1="200"
                        x2={200 + 180 * Math.cos(angle)}
                        y2={200 + 180 * Math.sin(angle)}
                        stroke="rgba(255,255,255,0.4)"
                        strokeWidth="1.5"
                      />
                    );
                  })}
                </svg>

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-white shadow-2xl z-20 hover:scale-110 hover:shadow-white/50 transition-all duration-300 cursor-pointer">
                  <img
                    src="/images/projects/profile.JPEG"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>

                {techLogos.map((logo, i) => {
                  const angle = (logo.angle * Math.PI) / 180;
                  const distance = isMobile ? 140 : 180;
                  const x =
                    50 + (distance * Math.cos(angle)) / (isMobile ? 3.2 : 4);
                  const y =
                    50 + (distance * Math.sin(angle)) / (isMobile ? 3.2 : 4);
                  return (
                    <div
                      key={i}
                      className="absolute z-10 pointer-events-auto cursor-pointer group"
                      style={{
                        left: `${x}%`,
                        top: `${y}%`,
                        transform: "translate(-50%, -50%)",
                      }}
                    >
                      <div
                        className={`${
                          isMobile ? "w-10 h-10" : "w-12 h-12"
                        } rounded overflow-hidden shadow-lg border-2 border-white/40 hover:scale-125 hover:shadow-2xl hover:shadow-white/40 hover:border-white/80 transition-all duration-300 bg-white/10`}
                        style={{
                          transform: `rotate(${Math.random() * 30 - 15}deg)`,
                        }}
                      >
                        <img
                          src={logo.src}
                          alt={logo.alt}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-gray-900 text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                        {logo.alt}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </div>

      <section
        ref={projectsRef}
        className="flex flex-col items-center justify-center min-h-screen lg:h-screen text-white px-4 py-12 lg:py-8"
      >
        <h2 className="text-3xl lg:text-4xl font-bold mb-5">My Projects</h2>
        <div className="flex gap-4 mb-5">
          <a
            href="/projects"
            className="px-4 py-2 rounded-lg bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white/30 transition text-sm lg:text-base"
          >
            View Projects
          </a>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 max-w-6xl w-full">
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-4 lg:p-6 hover:scale-105 hover:shadow-2xl hover:shadow-white/30 transition-transform duration-300 ease-out text-center">
            <Icon3D />
            <h3 className="text-lg lg:text-xl font-semibold mb-3">Portfolio</h3>
            <p className="text-gray-300 mb-4 text-sm lg:text-base">
              A project showcases my skills, experience, and featured works in a
              clean and responsive design.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-4 lg:p-6 hover:scale-105 hover:shadow-2xl hover:shadow-white/30 transition-transform duration-300 ease-out text-center">
            <div
              className={`${
                isMobile ? "w-16 h-16" : "w-24 h-24"
              } mx-auto mb-4 overflow-hidden rounded-xl shadow-lg`}
            >
              <img
                src="/images/projects/MysukanLogo1.png"
                alt="MySukan Logo"
                className="w-full h-full object-contain scale-[1.3]"
              />
            </div>
            <h3 className="text-lg lg:text-xl font-semibold mb-3">MySukan</h3>
            <p className="text-gray-300 mb-4 text-sm lg:text-base">
              A Real-Time Sport Matchmaking Application.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-4 lg:p-6 hover:scale-105 hover:shadow-2xl hover:shadow-white/30 transition-transform duration-300 ease-out text-center lg:col-span-2 xl:col-span-1">
            <div className="w-16 h-16 lg:w-24 lg:h-24 mx-auto mb-4 flex items-center justify-center">
              <h1
                className={`${
                  isMobile ? "text-2xl" : "text-3xl"
                } font-semibold`}
              >
                Blog<span className="text-blue-500">Azam</span>
              </h1>
            </div>
            <h3 className="text-lg lg:text-xl font-semibold mb-3">
              Blogging Website
            </h3>
            <p className="text-gray-300 mb-4 text-sm lg:text-base">
              Users can create, edit, and manage posts in a minimal and
              responsive interface.
            </p>
          </div>
        </div>
      </section>

      <section
        ref={aboutRef}
        className="flex flex-col items-center justify-center min-h-screen text-white px-4 py-12 lg:py-8"
      >
        <h2 className="text-3xl lg:text-4xl font-bold mb-8 lg:mb-4">
          About Me
        </h2>
        <div className="w-full max-w-7xl mt-4 lg:mt-0">
          <div
            className="timeline-container relative overflow-x-auto cursor-grab"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              WebkitOverflowScrolling: "touch",
              overscrollBehaviorX: "contain",
            }}
            onMouseDown={(e) => {
              if (isMobile) return;
              const container = e.currentTarget;
              container.classList.add("active");
              container.style.cursor = "grabbing";
              const startX = e.pageX - container.offsetLeft;
              const scrollLeft = container.scrollLeft;
              let isDown = true;
              const handleMouseMove = (e: MouseEvent) => {
                if (!isDown) return;
                e.preventDefault();
                const x = e.pageX - container.offsetLeft;
                const walk = (x - startX) * 2;
                container.scrollLeft = scrollLeft - walk;
              };
              const handleMouseUp = () => {
                isDown = false;
                container.classList.remove("active");
                container.style.cursor = "grab";
                document.removeEventListener("mousemove", handleMouseMove);
                document.removeEventListener("mouseup", handleMouseUp);
              };
              const handleMouseLeave = () => {
                if (isDown) {
                  isDown = false;
                  container.classList.remove("active");
                  container.style.cursor = "grab";
                  document.removeEventListener("mousemove", handleMouseMove);
                  document.removeEventListener("mouseup", handleMouseUp);
                }
              };
              document.addEventListener("mousemove", handleMouseMove);
              document.addEventListener("mouseup", handleMouseUp);
              container.addEventListener("mouseleave", handleMouseLeave);
            }}
          >
            <div className="relative">
              <div
                className={`flex ${
                  isMobile ? "gap-8" : "gap-16"
                } px-4 lg:px-8 min-w-max py-0 relative`}
              >
                <div
                  className="absolute top-1/2 h-0.5 bg-white/30 -translate-y-1/2 z-0 pointer-events-none"
                  style={{
                    left: isMobile ? "7rem" : "8rem",
                    right: isMobile ? "7rem" : "8rem",
                  }}
                ></div>

                <div
                  className={`relative flex flex-col items-center ${
                    isMobile ? "w-56" : "w-64"
                  } flex-shrink-0`}
                >
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                    <div className="w-4 h-4 bg-white rounded-full border-4 border-gray-900"></div>
                  </div>
                  <div className="w-full mt-110 z-10">
                    <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-4 hover:bg-white/20 transition-all duration-300 w-full hover:scale-105">
                      <h3
                        className={`${
                          isMobile ? "text-base" : "text-lg"
                        } font-semibold mb-2 text-center`}
                      >
                        Foundation Studies
                      </h3>
                      <div className="flex justify-center">
                        <img
                          src="/images/projects/kms.png"
                          alt="kms Logo"
                          className={`${
                            isMobile ? "w-20 h-20" : "w-30 h-30"
                          } object-contain mx-auto`}
                        />
                      </div>
                      <p className="text-green-400 mt-1 mb-1 text-center text-sm">
                        Selangor Matriculation College
                      </p>
                      <p className="text-gray-300 text-xs text-center mb-2">
                        Information Technology - Computer Science
                      </p>
                      <p
                        className={`text-gray-400 ${
                          isMobile ? "text-xs" : "text-xs"
                        } text-center mb-3`}
                      >
                        Completed foundation studies in Information Technology
                        in computer science, learned the fundamentals of
                        programming, problem-solving, and IT concepts that built
                        a strong base for further studies.
                      </p>
                    </div>
                    <div className="mt-4 text-center">
                      <span className="text-gray-400 text-sm font-medium">
                        2018
                      </span>
                    </div>
                  </div>
                </div>

                <div
                  className={`relative flex flex-col items-center ${
                    isMobile ? "w-56" : "w-64"
                  } flex-shrink-0`}
                >
                  <div className="w-full mt-30 z-10">
                    <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-4 hover:bg-white/20 transition-all duration-300 w-full hover:scale-105">
                      <h3
                        className={`${
                          isMobile ? "text-base" : "text-lg"
                        } font-semibold text-center`}
                      >
                        Degree Studies
                      </h3>
                      <div className="flex justify-center">
                        <img
                          src="/images/projects/unikl.webp"
                          alt="unikl Logo"
                          className={`${
                            isMobile ? "w-20 h-16" : "w-full h-full"
                          } object-contain mx-auto bg-white rounded`}
                        />
                      </div>
                      <p className="text-blue-400 mt-1 mb-1 text-center text-sm">
                        Universiti Kuala Lumpur MIIT
                      </p>
                      <p className="text-gray-300 text-xs text-center mb-2">
                        Bachelor Degree in Software Engineering
                      </p>
                      <p
                        className={`text-gray-400 ${
                          isMobile ? "text-xs" : "text-xs"
                        } text-center`}
                      >
                        Native, Node.js, and Firebase.
                      </p>
                    </div>
                    <div className="mt-4 text-center">
                      <span className="text-gray-400 text-sm font-medium">
                        2022
                      </span>
                    </div>
                  </div>
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                    <div className="w-4 h-4 bg-white rounded-full border-4 border-gray-900"></div>
                  </div>
                </div>

                <div
                  className={`relative flex flex-col items-center ${
                    isMobile ? "w-56" : "w-64"
                  } flex-shrink-0`}
                >
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                    <div className="w-4 h-4 bg-white rounded-full border-4 border-gray-900"></div>
                  </div>
                  <div className="w-full mt-110 z-10">
                    <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-4 hover:bg-white/20 transition-all duration-300 w-full hover:scale-105">
                      <h3
                        className={`${
                          isMobile ? "text-base" : "text-lg"
                        } font-semibold mb-1 text-center`}
                      >
                        Internship
                      </h3>
                      <div className="mt-5 mb-5 flex justify-center">
                        <img
                          src="/images/projects/mdec.png"
                          alt="mdec Logo"
                          className={`${
                            isMobile ? "w-20 h-16" : "w-full h-full"
                          } object-contain mx-auto`}
                        />
                      </div>
                      <p className="text-yellow-400 mb-1 text-center text-sm">
                        Malaysia Digital Economy Corporation
                      </p>
                      <p
                        className={`text-gray-400 ${
                          isMobile ? "text-xs" : "text-xs"
                        } text-center mb-3`}
                      >
                        Completed internship at MDEC and gained hands-on
                        experience in modern web development frameworks such as
                        Next.js and React. Worked with JSON data integration,
                        participated in sprint-based tasks, and practiced Agile
                        methodologies, including ticketing systems, to deliver
                        and manage projects efficiently.
                      </p>
                    </div>
                    <div className="mt-4 text-center">
                      <span className="text-gray-400 text-sm font-medium">
                        2025
                      </span>
                    </div>
                  </div>
                </div>

                <div
                  className={`relative flex flex-col items-center ${
                    isMobile ? "w-56" : "w-64"
                  } flex-shrink-0`}
                >
                  <div className="w-full mt-50 z-10">
                    <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-4 hover:bg-white/20 transition-all duration-300 w-full hover:scale-105">
                      <h3
                        className={`${
                          isMobile ? "text-base" : "text-lg"
                        } font-semibold text-center`}
                      >
                        Junior Developer
                      </h3>
                      <p className="text-purple-400 mb-1 text-center text-sm">
                        -
                      </p>
                      <p className="text-gray-300 text-xs text-center mb-2">
                        -
                      </p>
                      <p
                        className={`text-gray-400 ${
                          isMobile ? "text-xs" : "text-xs"
                        } text-center mb-3`}
                      >
                        -
                      </p>
                    </div>
                    <div className="mt-4 text-center">
                      <span className="text-gray-400 text-sm font-medium">
                        -
                      </span>
                    </div>
                  </div>
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                    <div className="w-4 h-4 bg-white rounded-full border-4 border-gray-900"></div>
                  </div>
                </div>

                <div
                  className={`relative flex flex-col items-center ${
                    isMobile ? "w-56" : "w-64"
                  } flex-shrink-0`}
                >
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                    <div className="w-4 h-4 bg-white rounded-full border-4 border-gray-900"></div>
                  </div>
                  <div className="w-full mt-90 z-100">
                    <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-4 hover:bg-white/20 transition-all duration-300 w-full hover:scale-105">
                      <h3
                        className={`${
                          isMobile ? "text-base" : "text-lg"
                        } font-semibold mb-2 text-center`}
                      >
                        Software Architect
                      </h3>
                      <p className="text-cyan-400 mb-1 text-center text-sm">
                        future
                      </p>
                      <p className="text-gray-300 text-xs text-center mb-2">
                        -
                      </p>
                      <p
                        className={`text-gray-400 ${
                          isMobile ? "text-xs" : "text-xs"
                        } text-center mb-3`}
                      >
                        planning, designing, and solving system-level problems.
                      </p>
                    </div>
                    <div className="mt-4 text-center">
                      <span className="text-gray-400 text-sm font-medium">
                        -
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-6 lg:mt-0 gap-4 mb-4 lg:mb-0">
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <span className="hidden sm:inline">
                ← Drag to explore timeline →
              </span>
              <span className="sm:hidden">← Swipe to explore →</span>
            </div>
          </div>
        </div>

        <div className="mt-8 lg:mt-12 text-center max-w-2xl mx-auto">
          <p className="text-gray-300 leading-relaxed text-sm lg:text-base px-4">
            Currently available for opportunities and excited to work on
            innovative projects that challenge my skills and create meaningful
            user experiences.
          </p>
        </div>
      </section>

      <section
        ref={contactRef}
        className="flex flex-col items-center justify-center min-h-screen lg:h-screen text-white px-4 py-12 lg:py-8"
      >
        <h2 className="text-3xl font-extrabold mb-4 text-center">
          Get in Touch
        </h2>
        <div className="max-w-2xl mx-auto text-center space-y-6 text-lg text-gray-200">
          <p className="text-xl text-gray-300 mb-8 text-center">
            I&apos;d love to hear from you! Whether it&apos;s a project idea,
            collaboration, or just a friendly hello.
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
      </section>
    </main>
  );
}
