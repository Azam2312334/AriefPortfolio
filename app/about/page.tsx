export default function About() {
  return (
     <main className="flex flex-col items-center justify-center min-h-screen text-white px-4" 
    style={{background: 'radial-gradient(circle at center, #0a0a0a 0%, #1a1a1a 100%)'}}>
      
      <h1 className="text-4xl font-bold mb-8 text-center">About Me</h1>

      <div className="max-w-3xl mx-auto space-y-6 text-lg text-gray-200">
        <p>
          Hi, I’m <span className="font-semibold">Arief Azam</span> — a web and
          mobile developer passionate about building smooth, interactive, and
          meaningful digital experiences. I enjoy turning ideas into products
          that are both functional and visually engaging.
        </p>

        <p>
          My journey started with frontend development using{" "}
          <span className="font-semibold">React</span> and{" "}
          <span className="font-semibold">Next.js</span>. Over time, I expanded
          into backend systems with tools like{" "}
          <span className="font-semibold">Prisma ORM</span> and{" "}
          <span className="font-semibold">Neon</span>, and I’ve also built
          mobile apps using <span className="font-semibold">React Native</span>.
        </p>

        <p>
          Some of my favorite tools and libraries include{" "}
          <span className="font-semibold">Tailwind CSS</span> for styling,{" "}
          <span className="font-semibold">shadcn/ui</span> for modern UI
          components, and <span className="font-semibold">GSAP</span> for smooth
          animations.
        </p>

        <p>
          Outside of coding, I’m passionate about sports and fitness — which
          inspired me to create <span className="font-semibold">MySukan</span>,
          a mobile app that connects people through sports and healthy
          activities.
        </p>
      </div>
    </main>
  );
}
