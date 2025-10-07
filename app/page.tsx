"use client"; //client side rendering

//imports from libraries
import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mail, Linkedin, Github } from "lucide-react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const descRef1 = useRef(null);
  const projectsRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const heroContentRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const circleRef = useRef<HTMLDivElement>(null);
  const techLogosContainerRef = useRef<HTMLDivElement>(null);
  const rotationAnimationRef = useRef<gsap.core.Tween | null>(null);
  const [hoveredLogo, setHoveredLogo] = useState<string | null>(null);
  const logoItemsRef = useRef<HTMLDivElement[]>([]);

  // Ensure the component is mounted before rendering
  useEffect(() => {
    setMounted(true);
  }, []);

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

  // Scroll-based animations for hero section
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

  // Simulate loading state for 1.5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  // Rotation animation for tech logos
  useEffect(() => {
    if (isLoading || !techLogosContainerRef.current) return;

    // Create continuous rotation animation for the container
    rotationAnimationRef.current = gsap.to(techLogosContainerRef.current, {
      rotation: 360,
      duration: 20,
      ease: "none",
      repeat: -1,
      onUpdate: function () {
        // Get current rotation value
        const containerRotation = gsap.getProperty(
          techLogosContainerRef.current,
          "rotation"
        );

        // Counter-rotate each logo item to keep them upright
        logoItemsRef.current.forEach((item) => {
          if (item) {
            gsap.set(item, {
              rotation: -containerRotation,
            });
          }
        });
      },
    });

    return () => {
      if (rotationAnimationRef.current) {
        rotationAnimationRef.current.kill();
      }
    };
  }, [isLoading]);

  // GSAP animations
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

    // Projects Section Animation
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

    // About Section Animation
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

    // Contact Section Animation
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

    // Intro Section Animation
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
    // Cleanup function to kill animations and ScrollTriggers
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      gsap.killTweensOf(".intro-heading");
      gsap.killTweensOf(".intro-line");
    };
  }, [isMobile, isLoading]);

  // 3D Model Component
  function Model() {
    const { scene } = useGLTF("/models/scene.gltf");
    return <primitive object={scene} scale={isMobile ? 0.5 : 0.7} />;
  }

  // 3D Icon Component
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

  if (isLoading) {
    return (
      <main className="relative min-h-screen overflow-x-hidden z-10 page-bg">
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
          </svg>
        </div>

        <section className="relative flex flex-col lg:items-center lg:justify-center min-h-screen text-foreground px-4 py-8 lg:py-0">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between w-full max-w-6xl lg:pt-20 pt-16 pb-8 lg:pb-0">
            <div className="flex-1 lg:pr-12 order-2 lg:order-1">
              <div className="h-4 w-24 bg-muted rounded animate-pulse mb-4 mx-auto lg:mx-0"></div>
              <div className="h-12 lg:h-16 w-3/4 bg-muted rounded animate-pulse mb-6 mx-auto lg:mx-0"></div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 lg:gap-8 mb-8">
                <div className="space-y-2">
                  <div className="h-3 w-16 bg-muted rounded animate-pulse mx-auto lg:mx-0"></div>
                  <div className="h-4 w-32 bg-muted rounded animate-pulse mx-auto lg:mx-0"></div>
                </div>
                <div className="space-y-2">
                  <div className="h-3 w-16 bg-muted rounded animate-pulse mx-auto lg:mx-0"></div>
                  <div className="h-4 w-24 bg-muted rounded animate-pulse mx-auto lg:mx-0"></div>
                </div>
              </div>
              <div className="space-y-4 mb-8 max-w-lg mx-auto lg:mx-0">
                <div className="h-4 w-full bg-muted rounded animate-pulse"></div>
                <div className="h-4 w-5/6 bg-muted rounded animate-pulse"></div>
                <div className="h-4 w-4/5 bg-muted rounded animate-pulse"></div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <div className="h-12 w-32 bg-muted rounded-lg animate-pulse"></div>
                <div className="h-12 w-32 bg-muted rounded-lg animate-pulse"></div>
              </div>
            </div>
            <div className="flex-shrink-0 relative order-1 lg:order-2 mb-8 lg:mb-0 flex justify-center">
              <div className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-full bg-muted animate-pulse"></div>
            </div>
          </div>
        </section>

        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 text-muted-foreground text-sm">
          <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
          <div
            className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"
            style={{ animationDelay: "0.2s" }}
          ></div>
          <div
            className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"
            style={{ animationDelay: "0.4s" }}
          ></div>
        </div>
      </main>
    );
  }

  // Main Content
  return (
    <main className="relative min-h-screen overflow-x-hidden page-bg">
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

      {/* Hero Section */}
      <div
        style={{ height: isMobile ? "auto" : "100vh", position: "relative" }}
      >
        <section
          className={`${
            isMobile ? "relative mt-[-250]" : "fixed lg:mt-[-60px]"
          } top-0 left-0 w-full ${
            isMobile ? "min-h-screen" : "h-screen"
          } flex flex-col lg:items-center lg:justify-center text-foreground px-4 overflow-hidden`}
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
                   hero-circle pointer-events-none"
            style={{
              transition: "transform 0.05s linear, opacity 0.05s linear",
              zIndex: 50,
              transformOrigin: "center center",
            }}
          ></div>

          <div
            ref={isMobile ? null : heroContentRef}
            className="flex flex-col mt-50 lg:flex-row lg:items-center lg:justify-between w-full max-w-6xl relative z-10 pt-20 lg:pt-0"
            style={{
              transition: "opacity 0.05s linear",
              willChange: "opacity",
            }}
          >
            <div className="flex-1 lg:pr-12 order-2 lg:order-1">
              <p className="z-10 text-sm text-muted-foreground mb-4 uppercase tracking-wider text-center lg:text-left">
                ARIEF AZAM
              </p>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 intro-heading text-center lg:text-left">
                Full-Stack Developer
              </h1>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 lg:gap-8 mb-8 text-sm">
                <div className="text-center lg:text-left">
                  <p className="text-muted-foreground mb-1">Email</p>
                  <p className="text-xs sm:text-sm break-words">
                    ariefnurazams@gmail.com
                  </p>
                </div>
                <div className="text-center lg:text-left">
                  <p className="text-muted-foreground mb-1">Location</p>
                  <p>Malaysia</p>
                </div>
                <div className="text-center lg:text-left sm:col-span-2 lg:col-span-1">
                  <p className="text-muted-foreground mb-1">Freelance</p>
                  <p>Available</p>
                </div>
              </div>

              <div className="text-left leading-relaxed mb-8 intro-text max-w-lg mx-auto lg:mx-0">
                <span className="intro-line block relative cursor-pointer intro-gradient transition-transform duration-300 ease-out hover:scale-105 mb-4 text-sm lg:text-base">
                  I am Arief Nur Azam, a Software Engineering student with
                  hands-on experience in developing and deploying full-stack
                  applications.
                </span>
                <span className="intro-line block relative cursor-pointer intro-gradient transition-transform duration-300 ease-out hover:scale-105 mb-4 text-sm lg:text-base">
                  My focus spans both web and mobile development, where I create
                  scalable and user-friendly solutions.
                </span>
                <span className="intro-line block relative cursor-pointer intro-gradient transition-transform duration-300 ease-out hover:scale-105 text-sm lg:text-base">
                  I am proficient in working across the stack, from responsive
                  front-end design to robust back-end systems.
                </span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-20 justify-center lg:justify-start">
                <a href="/projects" className="btn-glass">
                  View Projects
                </a>
                <a href="/contact" className="btn-glass">
                  Contact Me
                </a>
              </div>
            </div>

            <div className="flex-shrink-0 relative order-1 lg:order-2 mb-8 lg:mb-0 flex justify-center">
              <div
                className={`relative ${isMobile ? "w-80 h-80" : "w-96 h-96"}`}
                onMouseEnter={() => {
                  if (!isMobile && rotationAnimationRef.current) {
                    rotationAnimationRef.current.pause();
                  }
                }}
                onMouseLeave={() => {
                  if (!isMobile && rotationAnimationRef.current) {
                    rotationAnimationRef.current.resume();
                  }
                  setHoveredLogo(null);
                }}
                onTouchStart={() => {
                  if (isMobile && rotationAnimationRef.current) {
                    rotationAnimationRef.current.pause();
                  }
                }}
                onTouchEnd={() => {
                  if (isMobile && rotationAnimationRef.current) {
                    rotationAnimationRef.current.resume();
                  }
                  setTimeout(() => setHoveredLogo(null), 100);
                }}
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
                          className="tech-ring"
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
                        className="tech-spoke"
                        strokeWidth="1.5"
                      />
                    );
                  })}
                </svg>

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden profile-img z-20">
                  <img
                    src="/images/projects/profile.JPEG"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div
                  ref={techLogosContainerRef}
                  className="absolute inset-0"
                  style={{ transformOrigin: "center center" }}
                >
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
                        ref={(el) => {
                          if (el) logoItemsRef.current[i] = el;
                        }}
                        className="absolute tech-logo-item"
                        style={{
                          left: `${x}%`,
                          top: `${y}%`,
                          transform: "translate(-50%, -50%)",
                          zIndex: 30,
                        }}
                      >
                        <div
                          className={`${
                            isMobile ? "w-10 h-10" : "w-12 h-12"
                          } tech-logo cursor-pointer`}
                          onMouseEnter={() => {
                            if (!isMobile) {
                              setHoveredLogo(logo.alt);
                            }
                          }}
                          onMouseLeave={() => {
                            if (!isMobile) {
                              setHoveredLogo(null);
                            }
                          }}
                          onTouchStart={() => {
                            if (isMobile) {
                              setHoveredLogo(logo.alt);
                            }
                          }}
                        >
                          <img
                            src={logo.src}
                            alt={logo.alt}
                            className="w-full h-full object-cover pointer-events-none select-none"
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Tooltip layer - outside rotation */}
                {hoveredLogo && (
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{ zIndex: 100 }}
                  >
                    {techLogos.map((logo, i) => {
                      if (logo.alt !== hoveredLogo) return null;
                      const angle = (logo.angle * Math.PI) / 180;
                      const distance = isMobile ? 140 : 180;
                      const x =
                        50 +
                        (distance * Math.cos(angle)) / (isMobile ? 3.2 : 4);
                      const y =
                        50 +
                        (distance * Math.sin(angle)) / (isMobile ? 3.2 : 4);
                      return (
                        <div
                          key={`tooltip-${i}`}
                          className="absolute"
                          style={{
                            left: `${x}%`,
                            top: `${y}%`,
                            transform: "translate(-50%, -50%)",
                          }}
                        >
                          <div
                            className="absolute left-1/2 -translate-x-1/2 bg-black text-white px-3 py-1.5 rounded-md text-sm whitespace-nowrap shadow-lg font-medium"
                            style={{
                              top: isMobile ? "-3rem" : "-3rem",
                            }}
                          >
                            {logo.alt}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Projects Section */}
      <section
        ref={projectsRef}
        className="flex flex-col items-center justify-center min-h-screen lg:h-screen text-foreground px-4 py-12 lg:py-8"
      >
        <h2 className="text-3xl lg:text-4xl font-bold mb-5">My Projects</h2>
        <div className="flex gap-4 mb-5">
          <a href="/projects" className="btn-glass">
            View Projects
          </a>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 max-w-6xl w-full">
          <div className="card-glass">
            <Icon3D />
            <h3 className="text-lg lg:text-xl font-semibold mb-3">Portfolio</h3>
            <p className="text-muted-foreground mb-4 text-sm lg:text-base">
              A project showcases my skills, experience, and featured works in a
              clean and responsive design.
            </p>
          </div>

          <div className="card-glass">
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
            <p className="text-muted-foreground mb-4 text-sm lg:text-base">
              A Real-Time Sport Matchmaking Application.
            </p>
          </div>

          <div className="card-glass lg:col-span-2 xl:col-span-1">
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
            <p className="text-muted-foreground mb-4 text-sm lg:text-base">
              Users can create, edit, and manage posts in a minimal and
              responsive interface.
            </p>
          </div>
        </div>
      </section>

      {/* About Me - Mobile */}
      <section className="block sm:hidden flex flex-col items-center text-foreground px-4 py-12">
        <h2 className="text-3xl lg:text-4xl font-bold mb-12">About Me</h2>

        <div className="w-full max-w-4xl relative">
          <div className="max-h-[600px] overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-muted scrollbar-track-transparent">
            <div className="space-y-16 py-4 relative">
              <div
                className="absolute left-1/2 -translate-x-1/2 w-0.5 timeline-line"
                style={{
                  top: "2rem",
                  bottom: "2rem",
                  height: "calc(100% - 4rem)",
                }}
              ></div>

              {/* Foundation Studies - 2018 */}
              <div className="relative flex items-center">
                <div className="w-1/2 pr-4 flex justify-end">
                  <div className="card-timeline max-w-[180px]">
                    <h3 className="text-sm font-semibold mb-2">
                      Foundation Studies
                    </h3>
                    <div className="flex justify-center mb-2">
                      <img
                        src="/images/projects/kms.png"
                        alt="kms Logo"
                        className="w-16 h-16 object-contain"
                      />
                    </div>
                    <p className="text-green-400 mb-1 text-xs">
                      Selangor Matriculation College
                    </p>
                    <p className="text-muted-foreground text-[10px] mb-2">
                      Information Technology - Computer Science
                    </p>
                    <p className="text-muted-foreground text-[10px]">
                      Completed foundation studies in Information Technology in
                      computer science, learned the fundamentals of programming,
                      problem-solving, and IT concepts that built a strong base
                      for further studies.
                    </p>
                  </div>
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 z-10">
                  <div className="timeline-dot"></div>
                </div>
                <div className="w-1/2 pl-4 text-center">
                  <span className="text-muted-foreground text-xs font-medium">
                    2018
                  </span>
                </div>
              </div>

              {/* Degree Studies - 2022 */}
              <div className="relative flex items-center">
                <div className="w-1/2 pr-4 text-center flex justify-end">
                  <span className="text-muted-foreground text-xs font-medium">
                    2022
                  </span>
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 z-10">
                  <div className="timeline-dot"></div>
                </div>
                <div className="w-1/2 pl-4">
                  <div className="card-timeline max-w-[180px]">
                    <h3 className="text-sm font-semibold mb-2">
                      Degree Studies
                    </h3>
                    <div className="flex justify-center mb-2">
                      <img
                        src="/images/projects/unikl.webp"
                        alt="unikl Logo"
                        className="w-20 h-16 object-contain bg-white rounded"
                      />
                    </div>
                    <p className="text-blue-400 mb-1 text-xs">
                      Universiti Kuala Lumpur MIIT
                    </p>
                    <p className="text-muted-foreground text-[10px] mb-2">
                      Bachelor Degree in Software Engineering
                    </p>
                    <p className="text-muted-foreground text-[10px]">
                      Native, Node.js, and Firebase.
                    </p>
                  </div>
                </div>
              </div>

              {/* Internship - 2025 */}
              <div className="relative flex items-center">
                <div className="w-1/2 pr-4 flex justify-end">
                  <div className="card-timeline max-w-[180px]">
                    <h3 className="text-sm font-semibold mb-2">Internship</h3>
                    <div className="flex justify-center mb-2">
                      <img
                        src="/images/projects/mdec.png"
                        alt="mdec Logo"
                        className="w-20 h-16 object-contain"
                      />
                    </div>
                    <p className="text-yellow-400 mb-1 text-xs">
                      Malaysia Digital Economy Corporation
                    </p>
                    <p className="text-muted-foreground text-[10px]">
                      Completed internship at MDEC and gained hands-on
                      experience in modern web development frameworks such as
                      Next.js and React. Worked with JSON data integration,
                      participated in sprint-based tasks, and practiced Agile
                      methodologies, including ticketing systems, to deliver and
                      manage projects efficiently.
                    </p>
                  </div>
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 z-10">
                  <div className="timeline-dot"></div>
                </div>
                <div className="w-1/2 pl-4 text-center">
                  <span className="text-muted-foreground text-xs font-medium">
                    2025
                  </span>
                </div>
              </div>

              {/* Junior Developer */}
              <div className="relative flex items-center">
                <div className="w-1/2 pr-4 text-center flex justify-end">
                  <span className="text-muted-foreground text-xs font-medium">
                    -
                  </span>
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 z-10">
                  <div className="timeline-dot"></div>
                </div>
                <div className="w-1/2 pl-4">
                  <div className="card-timeline max-w-[180px]">
                    <h3 className="text-sm font-semibold mb-2">
                      Junior Developer
                    </h3>
                    <p className="text-purple-400 mb-1 text-xs">-</p>
                    <p className="text-muted-foreground text-[10px] mb-1">-</p>
                    <p className="text-muted-foreground text-[10px]">-</p>
                  </div>
                </div>
              </div>

              {/* Software Architect */}
              <div className="relative flex items-center">
                <div className="w-1/2 pr-4 flex justify-end">
                  <div className="card-timeline max-w-[180px]">
                    <h3 className="text-sm font-semibold mb-2">
                      Software Architect
                    </h3>
                    <p className="text-cyan-400 mb-1 text-xs">future</p>
                    <p className="text-muted-foreground text-[10px] mb-1">-</p>
                    <p className="text-muted-foreground text-[10px]">
                      planning, designing, and solving system-level problems.
                    </p>
                  </div>
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 z-10">
                  <div className="timeline-dot"></div>
                </div>
                <div className="w-1/2 pl-4 text-center">
                  <span className="text-muted-foreground text-xs font-medium">
                    -
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center max-w-2xl mx-auto">
          <p className="text-muted-foreground leading-relaxed text-sm px-4">
            Currently available for opportunities and excited to work on
            innovative projects that challenge my skills and create meaningful
            user experiences.
          </p>
        </div>
      </section>

      {/* About Me - Desktop */}
      <section
        ref={aboutRef}
        className="hidden sm:flex flex-col items-center justify-center min-h-screen text-foreground px-4 py-12 lg:py-8"
      >
        <h2 className="text-3xl lg:text-4xl font-bold">About Me</h2>
        <div className="w-full max-w-7xl mt-[-130]">
          <div className="timeline-container relative overflow-x-auto cursor-grab">
            <div className="relative">
              <div
                className={`flex ${
                  isMobile ? "gap-8" : "gap-16"
                } px-4 lg:px-8 min-w-max py-0 relative`}
              >
                <div
                  className="absolute top-1/2 h-0.5 timeline-line -translate-y-1/2 z-0 pointer-events-none"
                  style={{
                    left: isMobile ? "7rem" : "8rem",
                    right: isMobile ? "7rem" : "8rem",
                  }}
                ></div>

                {/* Timeline cards */}
                <div
                  className={`relative flex flex-col items-center ${
                    isMobile ? "w-56" : "w-64"
                  } flex-shrink-0`}
                >
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                    <div className="timeline-dot"></div>
                  </div>
                  <div className="w-full mt-110 z-10">
                    <div className="card-timeline w-full">
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
                      <p className="text-muted-foreground text-xs text-center mb-2">
                        Information Technology - Computer Science
                      </p>
                      <p
                        className={`text-muted-foreground ${
                          isMobile ? "text-xs" : "text-xs"
                        } text-center mb-3`}
                      >
                        Completed foundation studies in Information Technology
                        in computer science.
                      </p>
                    </div>
                    <div className="mt-4 text-center">
                      <span className="text-muted-foreground text-sm font-medium">
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
                    <div className="card-timeline w-full">
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
                      <p className="text-muted-foreground text-xs text-center mb-2">
                        Bachelor Degree in Software Engineering
                      </p>
                      <p
                        className={`text-muted-foreground ${
                          isMobile ? "text-xs" : "text-xs"
                        } text-center`}
                      >
                        Native, Node.js, and Firebase.
                      </p>
                    </div>
                    <div className="mt-[-2] text-center">
                      <span className="text-muted-foreground text-sm font-medium">
                        2022
                      </span>
                    </div>
                  </div>
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                    <div className="timeline-dot"></div>
                  </div>
                </div>

                <div
                  className={`relative flex flex-col items-center ${
                    isMobile ? "w-56" : "w-64"
                  } flex-shrink-0`}
                >
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                    <div className="timeline-dot"></div>
                  </div>
                  <div className="w-full mt-110 z-10">
                    <div className="card-timeline w-full">
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
                        className={`text-muted-foreground ${
                          isMobile ? "text-xs" : "text-xs"
                        } text-center mb-3`}
                      >
                        Completed internship at MDEC and gained hands-on
                        experience in modern web development.
                      </p>
                    </div>
                    <div className="mt-4 text-center">
                      <span className="text-muted-foreground text-sm font-medium">
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
                    <div className="card-timeline w-full">
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
                      <p className="text-muted-foreground text-xs text-center mb-2">
                        -
                      </p>
                      <p
                        className={`text-muted-foreground ${
                          isMobile ? "text-xs" : "text-xs"
                        } text-center mb-3`}
                      >
                        -
                      </p>
                    </div>
                    <div className="mt-4 text-center">
                      <span className="text-muted-foreground text-sm font-medium">
                        -
                      </span>
                    </div>
                  </div>
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                    <div className="timeline-dot"></div>
                  </div>
                </div>

                <div
                  className={`relative flex flex-col items-center ${
                    isMobile ? "w-56" : "w-64"
                  } flex-shrink-0`}
                >
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                    <div className="timeline-dot"></div>
                  </div>
                  <div className="w-full mt-90 z-100">
                    <div className="card-timeline w-full">
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
                      <p className="text-muted-foreground text-xs text-center mb-2">
                        -
                      </p>
                      <p
                        className={`text-muted-foreground ${
                          isMobile ? "text-xs" : "text-xs"
                        } text-center mb-3`}
                      >
                        planning, designing, and solving system-level problems.
                      </p>
                    </div>
                    <div className="mt-4 text-center">
                      <span className="text-muted-foreground text-sm font-medium">
                        -
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-6 lg:mt-0 gap-4 mb-4 lg:mb-0">
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <span className="hidden sm:inline">
                ← Drag to explore timeline →
              </span>
              <span className="sm:hidden">← Swipe to explore →</span>
            </div>
          </div>
        </div>

        <div className="mt-8 lg:mt-12 text-center max-w-2xl mx-auto">
          <p className="text-muted-foreground leading-relaxed text-sm lg:text-base px-4">
            Currently available for opportunities and excited to work on
            innovative projects.
          </p>
        </div>
      </section>

      {/* Contact Me */}
      <section
        ref={contactRef}
        className="flex flex-col lg:flex-row items-center justify-center min-h-screen text-foreground px-6 py-12 lg:py-8 gap-10"
      >
        <div className="flex-1 text-center lg:text-right space-y-6 max-w-xl">
          <h2 className="text-3xl font-extrabold mb-4">Get in Touch</h2>
          <p className="text-xl text-muted-foreground">
            I&apos;d love to hear from you! Whether it&apos;s a project idea,
            collaboration, or just a friendly hello.
          </p>
          <p className="text-xl text-muted-foreground">
            Feel free to reach out.
          </p>
        </div>

        <div className="flex-1 space-y-4 text-lg">
          <p className="flex items-center justify-center lg:justify-start gap-2">
            <Mail className="w-5 h-5 text-blue-500" />
            <a
              href="mailto:ariefnurazams@gmail.com"
              className="hover:underline"
            >
              ariefnurazams@gmail.com
            </a>
          </p>
          <p className="flex items-center justify-center lg:justify-start gap-2">
            <Linkedin className="w-5 h-5 text-blue-500" />
            <a
              href="https://www.linkedin.com/in/arief-azams/"
              target="_blank"
              className="hover:underline"
            >
              linkedin.com/in/arief-azams
            </a>
          </p>
          <p className="flex items-center justify-center lg:justify-start gap-2">
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
      </section>
    </main>
  );
}
