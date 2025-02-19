export default function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center text-center p-8"
    >
      <h1 className="text-4xl font-bold mb-4 text-white">Jose Rodriguez</h1>
      <h2 className="text-2xl mb-6 text-gray-300">
        Computer Science Student at UW Tacoma
      </h2>
      <div className="max-w-2xl mb-8 text-gray-400 space-y-4">
        <p>
          Senior undergraduate student specializing in software development and web technologies.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {["Java", "Python", "JavaScript", "React", "Node.js", "Git"].map((skill) => (
            <span key={skill} className="bg-[rgb(41,41,41)] px-3 py-1 rounded-full text-sm">
              {skill}
            </span>
          ))}
        </div>
      </div>
      <a
        href="#projects"
        className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
      >
        View My Projects
      </a>
    </section>
  );
}
