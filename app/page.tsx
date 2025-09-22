"use client";  

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { Canvas } from "@react-three/fiber"; // three js
import { OrbitControls, useGLTF } from "@react-three/drei";

gsap.registerPlugin(ScrollTrigger); // register plugin

export default function Home() {

  // variables
  const descRef1 = useRef(null);
  const projectsRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    // Hero Section
    gsap.fromTo(descRef1.current,
      { opacity: 0, y: 50 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 1.5,
        scrollTrigger: {
          trigger: descRef1.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "restart reverse restart reverse" // restart on every scroll
        }
      }
    );

    // Projects Section
    gsap.fromTo(projectsRef.current,
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
    gsap.fromTo(aboutRef.current,
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
    gsap.fromTo(contactRef.current,
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
    <main className="relative" style={{background: 'radial-gradient(circle at center, #0a0a0a 0%, #1a1a1a 100%)'}}>
      {/* Hero Section */}
      <section ref={descRef1} className="flex flex-col items-center justify-center h-screen text-white px-4">
        <h1 className="text-3xl font-bold mb-2">Arief Azam</h1>
        <p className="text-lg text-muted-foreground mb-6 text-gray-200">Web Developer • UI/UX Enthusiast</p>
        <p className="max-w-xl text-center leading-relaxed mb-8 text-gray-200">
          I&apos;m a passionate developer who loves building modern web applications
          with Next.js, React, and cutting-edge technologies. My goal is to create
          engaging, user-friendly digital experiences.
        </p>
        <div className="flex gap-4">
          <a href="/projects" className="px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/80 transition">
            View Projects
          </a>
          <a href="/contact" className="px-4 py-2 rounded-lg border border-input hover:bg-accent hover:text-accent-foreground transition">
            Contact Me
          </a>
        </div>
      </section>

      {/* Projects Section */}
      <section ref={projectsRef} className="flex flex-col items-center justify-center h-screen text-white px-4">
        <h2 className="text-4xl font-bold mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
          {/* Project 1 */}
          <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors">
            <Icon3D />  
            <h3 className="text-xl font-semibold mb-3">Portfolio</h3>
            <p className="text-gray-300 mb-4">A project showcases my skills, experience, and featured works in a clean and responsive design.</p>
          </div>

          {/* Project 2 */}
          <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors">
            <h3 className="text-xl font-semibold mb-3">MySukan</h3>
            <p className="text-gray-300 mb-4">A Real-Time Sport Matchmaking Application.</p>
          </div>

          {/* Project 3 */}
          <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors">
            <h3 className="text-xl font-semibold mb-3">Blog</h3>
            <p className="text-gray-300 mb-4">Users can create, edit, and manage posts in a minimal and responsive interface.</p>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section ref={aboutRef} className="flex flex-col items-center justify-center h-screen text-white px-4">
        <h2 className="text-4xl font-bold mb-12">About</h2>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} className="flex flex-col items-center justify-center h-screen text-white px-4">
        <h2 className="text-4xl font-bold mb-12">Contact</h2>
      </section>
    </main>
  );
}
