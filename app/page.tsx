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
      className="relative"
      style={{
        background:
          "radial-gradient(circle at center, #1a1a1a 0%, #1a1a1a 100%)",
      }}
    >
      {/* Hero Section */}
      <section
        ref={descRef1}
        className="flex flex-col items-center justify-center h-screen text-white px-4"
      >
        <h1 className="text-3xl font-bold mb-2">Arief Azam</h1>
        <p className="text-lg mb-1 text-gray-400">
          Web Developer • UI/UX Enthusiast
        </p>
        <p className="text-left leading-relaxed mb-8 text-gray-200 intro-text">
          <span
            className="intro-line block relative cursor-pointer
             bg-gradient-to-r from-white via-gray-400 to-white
             bg-[length:200%_100%] bg-clip-text text-transparent
             transition-transform duration-300 ease-out
             hover:scale-105 hover:shadow-lg hover:shadow-white/30"
          >
            I am Arief Nur Azam, a Software Engineering student with hands-on
            experience in developing and deploying full-stack applications.
          </span>
          <span
            className="intro-line block relative cursor-pointer
             bg-gradient-to-r from-white via-gray-400 to-white
             bg-[length:200%_100%] bg-clip-text text-transparent
             transition-transform duration-300 ease-out
             hover:scale-105 hover:shadow-lg hover:shadow-white/30"
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
          <span
            className="intro-line block relative cursor-pointer
             bg-gradient-to-r from-white via-gray-400 to-white
             bg-[length:200%_100%] bg-clip-text text-transparent
             transition-transform duration-300 ease-out
             hover:scale-105 hover:shadow-lg hover:shadow-white/30"
          >
            Explore my projects and skills below to see how I apply technology
            to deliver real-world impact.
          </span>
        </p>

        <div className="flex gap-4">
          {/* Glass Button 1 */}
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

          {/* Glass Button 2 */}
          <a
            href="/contact"
            className="px-4 py-2 rounded-lg 
               bg-white/20 backdrop-blur-md 
               border border-white/30 
               text-white 
               hover:bg-white/30 
               transition"
          >
            Contact Me
          </a>
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
