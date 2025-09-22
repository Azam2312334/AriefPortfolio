"use client";  

import Image from "next/image";
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger); //register plugin

export default function Home() {

  // variables
  const titleRef = useRef(null);
  const descRef = useRef(null);

  useEffect(() => {

  // title
  gsap.fromTo(titleRef.current, 
    { opacity: 0 }, 
    { opacity: 1, duration: 2 }
  );

  // ScrollTrigger 
  gsap.fromTo(descRef.current,
    { opacity: 0, y: 50 },
    { 
      opacity: 1, 
      y: 0, 
      duration: 1.5,
      scrollTrigger: {
        trigger: descRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    }
  );
},
[]);


  return (  
    <main className="relative">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center h-screen text-white px-4" 
        style={{background: 'radial-gradient(circle at center, #0a0a0a 0%, #1a1a1a 100%)'}}>
        
        <h1 ref={titleRef} className="text-3xl font-bold mb-2">Arief Azam</h1>
        
        <p className="text-lg text-muted-foreground mb-6">
          Web Developer • UI/UX Enthusiast
        </p>

        <p ref={descRef} className="max-w-xl text-center leading-relaxed mb-8 text-gray-200">
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
<section className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white px-4">
  <h2 className="text-4xl font-bold mb-12">My Projects</h2>
  
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
    {/* Project 1 */}
    <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors">
      <h3 className="text-xl font-semibold mb-3">Portfolio </h3>
      <p className="text-gray-300 mb-4">A project showcases my skills, experience, and featured works in a clean and responsive design.</p>
      <div className="flex gap-2">
      </div>
    </div>

    {/* Project 2 */}
    <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors">
      <h3 className="text-xl font-semibold mb-3">MySukan</h3>
      <p className="text-gray-300 mb-4">A Real-Time Sport Matchmaking Application.</p>
    </div>
  

   {/* Project 2 */}
    <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors">
      <h3 className="text-xl font-semibold mb-3">Blog</h3>
      <p className="text-gray-300 mb-4">Users can create, edit, and manage posts in a minimal and responsive interface.</p>
    </div>
  </div>
</section>
      
    </main>
  );
}
