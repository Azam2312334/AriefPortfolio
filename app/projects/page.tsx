export default function Projects() {
  return (
     <main className="flex flex-col items-center justify-center min-h-screen text-white px-4" 
    style={{background: 'radial-gradient(circle at center, #0a0a0a 0%, #1a1a1a 100%)'}}>

      <h1 className="text-4xl font-bold mb-8 text-center">Projects</h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      
        <div className="p-6 border rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold mb-2">Portfolio Website</h2>
          <p className="text-gray-200 mb-4">
            A personal portfolio built with Next.js, Tailwind CSS, and shadcn/ui.  
            Includes smooth animations powered by GSAP to enhance user experience.  
            This project showcases my skills, experience, and featured works in a
            clean and responsive design.
          </p>
          <a
            href="https://arief-space.vercel.app/"
            target="_blank"
            className="text-blue-500 hover:underline"
          >
            View Project →
          </a>
        </div>

        <div className="p-6 border rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold mb-2">MySukan</h2>
          <p className="text-gray-200 mb-4">
            A mobile sports matchmaking application designed to connect players
            and encourage active lifestyles.  
          </p>
          <a
            href="https://github.com/Azam2312334/MySukanApps"
            target="_blank"
            className="text-blue-500 hover:underline"
          >
            View Project →
          </a>
        </div>

        <div className="p-6 border rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold mb-2">Blog</h2>
          <p className="text-gray-200 mb-4">
            A modern blog platform built with Next.js, Prisma ORM, and Neon
            database.  
            Integrated with Kinde Auth for secure user authentication and access
            control.  
            Users can create, edit, and manage posts in a minimal and responsive
            interface.
          </p>
          <a
            href="https://nextjsrepo-arief.vercel.app"
            target="_blank"
            className="text-blue-500 hover:underline"
          >
            View Project →
          </a>
        </div>
      </div>
    </main>
  );
}
