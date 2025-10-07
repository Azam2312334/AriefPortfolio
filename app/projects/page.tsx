"use client";

import { useState, useEffect } from "react";
import { ExternalLink } from "lucide-react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

export default function Projects() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  function Model() {
    const { scene } = useGLTF("/models/scene.gltf");
    return <primitive object={scene} scale={isMobile ? 0.5 : 0.7} />;
  }

  function Icon3D() {
    return (
      <div className={`${isMobile ? "w-24 h-24" : "w-32 h-32"} mx-auto`}>
        <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[2, 2, 2]} />
          <Model />
          <OrbitControls enableZoom={false} enablePan={false} />
        </Canvas>
      </div>
    );
  }

  const projects = [
    {
      title: "Portfolio Website",
      description:
        "A personal portfolio built with Next.js, Tailwind CSS, and shadcn/ui. Includes smooth animations powered by GSAP to enhance user experience. This project showcases my skills, experience, and featured works in a clean and responsive design.",
      link: "https://arief-space.vercel.app/",
      image: null,
      useIcon3D: true,
      gradient: "from-blue-500/20 to-purple-500/20",
    },
    {
      title: "MySukan",
      description:
        "A mobile sports matchmaking application designed to connect players and encourage active lifestyles.",
      link: "https://github.com/Azam2312334/MySukanApps",
      image: "/images/projects/MysukanLogo1.png",
      gradient: "from-green-500/20 to-teal-500/20",
    },
    {
      title: "Catering Booking Website",
      description:
        "A web-based booking system that allows users to create, manage, and track reservations efficiently. It is designed with a responsive interface and integrates essential features for user authentication, booking management, and real-time availability updates.",
      link: "https://github.com/mdaminz/catering-booking-web",
      image: "/images/projects/catering.jpg",
      gradient: "from-amber-500/20 to-rose-500/20",
    },
    {
      title: "Blog",
      description:
        "A modern blog platform built with Next.js, Prisma ORM, and Neon database. Integrated with Kinde Auth for secure user authentication and access control. Users can create, edit, and manage posts in a minimal and responsive interface.",
      link: "https://nextjsrepo-arief.vercel.app",
      image: null,
      gradient: "from-orange-500/20 to-pink-500/20",
      customContent: (
        <div className="text-3xl sm:text-4xl font-bold">
          Blog<span className="text-blue-500">Azam</span>
        </div>
      ),
    },
  ];

  return (
    <main className="relative min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 md:px-8 text-foreground py-12 sm:py-16 page-bg">
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

      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-8 sm:mb-10 md:mb-12 text-center relative z-10">
        Projects
      </h1>

      <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto relative z-10 w-full">
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-card group relative p-6 sm:p-8 overflow-hidden"
          >
            {/* Gradient overlay on hover */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}
            ></div>

            {/* 3D Image/Icon */}
            <div className="relative z-10 mb-4 sm:mb-6 flex justify-center">
              <div
                className={`${
                  project.useIcon3D ? "" : "w-24 h-24 sm:w-32 sm:h-32"
                } transform group-hover:scale-110 ${
                  !project.useIcon3D && "group-hover:rotate-3"
                } transition-all duration-500 flex items-center justify-center`}
              >
                {project.useIcon3D ? (
                  <Icon3D />
                ) : project.customContent ? (
                  project.customContent
                ) : (
                  <div className="w-full h-full rounded-2xl overflow-hidden shadow-2xl project-img-border transition-all duration-500">
                    <img
                      src={project.image ?? ""}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Content */}
            <div className="relative z-10">
              <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 group-hover:text-foreground transition-colors duration-300 text-center">
                {project.title}
              </h2>
              <p className="text-muted-foreground mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base text-center">
                {project.description}
              </p>
              <div className="flex justify-center">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link inline-flex items-center gap-2 font-semibold group-hover:gap-3 transition-all duration-300"
                >
                  View Project
                  <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </a>
              </div>
            </div>

            {/* Decorative corner */}
            <div className="project-corner absolute top-0 right-0 w-20 h-20 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        ))}
      </div>
    </main>
  );
}
