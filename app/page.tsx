import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground px-4">
   

      {/* Name + Title */}
      <h1 className="text-3xl font-bold mb-2">Arief Azam</h1>
      <p className="text-lg text-muted-foreground mb-6">
        Web Developer • UI/UX Enthusiast
      </p>

      {/* About */}
      <p className="max-w-xl text-center leading-relaxed mb-8">
        I’m a passionate developer who loves building modern web applications
        with Next.js, React, and cutting-edge technologies. My goal is to create
        engaging, user-friendly digital experiences.
      </p>

      {/* Links */}
      <div className="flex gap-4">
        <a
          href="/projects"
          className="px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/80 transition"
        >
          View Projects
        </a>
        <a
          href="/contact"
          className="px-4 py-2 rounded-lg border border-input hover:bg-accent hover:text-accent-foreground transition"
        >
          Contact Me
        </a>
      </div>
    </main>
  );
}
