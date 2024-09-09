import Image from "next/image";
import Card from "./Card";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center p-8 bg-[rgb(31,31,31)] text-gray-200"
    >
      <Card
        imageSrc="/profilepic.png"
        altText="Jose Rodriguez"
        title="About Me"
        content="I'm a passionate web developer and student at the University of Washington Tacoma. I love creating user-friendly and efficient web applications that solve real-world problems."
        skills={["React", "Next.js", "TypeScript", "Tailwind CSS"]}
      />
      <div className="mt-12 max-w-2xl text-center">
        <p className="mb-6 text-lg leading-relaxed">
          I enjoy creating new and unique projects, always eager to learn and
          improve both my skills and myself. My passion for technology drives me
          to explore various programming languages and tools.
        </p>
        <h3 className="text-2xl font-bold mb-4 text-blue-400">Experience:</h3>
        <ul className="space-y-3 mb-6">
          <li className="flex items-start">
            <span className="mr-2 text-yellow-400">▹</span>
            <span>
              <strong className="text-green-400">Programming Languages:</strong>{" "}
              Java, Python, JavaScript, TypeScript, C
            </span>
          </li>
          <li className="flex items-start">
            <span className="mr-2 text-yellow-400">▹</span>
            <span>
              <strong className="text-green-400">Frameworks/Libraries:</strong>{" "}
              React, Node.js, Express.js, Spring Boot, Phaser
            </span>
          </li>
          <li className="flex items-start">
            <span className="mr-2 text-yellow-400">▹</span>
            <span>
              <strong className="text-green-400">Tools and Platforms:</strong>{" "}
              Git, Docker, AWS, VS Code, REST APIs
            </span>
          </li>
          <li className="flex items-start">
            <span className="mr-2 text-yellow-400">▹</span>
            <span>
              <strong className="text-green-400">Software Development:</strong>
              Test Case Design, MVC Design, Agile Methodology, Full SDLC
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
}
