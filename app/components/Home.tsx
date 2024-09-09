export default function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center text-center p-4"
    >
      <h1 className="text-4xl font-bold mb-4 text-white">Jose Rodriguez</h1>
      <h2 className="text-2xl mb-6 text-gray-300">
        Computer Science Student | Aspiring Software Developer
      </h2>
      <p className="max-w-2xl mb-8 text-gray-400">
        Passionate about technology and creating user-friendly applications.
        Eager to apply my academic knowledge to real-world projects and make a
        positive impact.
      </p>
      <div className="flex space-x-4">
        <a
          href="#projects"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="border border-blue-400 text-blue-400 px-4 py-2 rounded hover:bg-blue-900"
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
}
