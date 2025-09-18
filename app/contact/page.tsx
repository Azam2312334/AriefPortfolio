export default function Contact() {
  return (
    <main className="min-h-screen px-8 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Get in Touch</h1>

      <div className="max-w-2xl mx-auto text-center space-y-6 text-lg text-gray-700">
        <p>
          I’d love to hear from you! Whether it’s a project idea, collaboration,
          or just a friendly hello — feel free to reach out.
        </p>

        <div className="space-y-4">
          <p>
            📧 Email:{" "}
            <a
              href="mailto:arief@example.com"
              className="text-blue-500 hover:underline"
            >
              ariefnurazams@gmail.com
            </a>
          </p>
          <p>
            💼 LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/arief-azams/"
              target="_blank"
              className="text-blue-500 hover:underline"
            >
              https://www.linkedin.com/in/arief-azams/
            </a>
          </p>
          <p>
            🐙 GitHub:{" "}
            <a
              href="https://github.com/Azam2312334"
              target="_blank"
              className="text-blue-500 hover:underline"
            >
              github.com/Azam2312334
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
