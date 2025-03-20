import Image from 'next/image';

export default function Projects() {
  const projects = [
    {
      title: "Dungeon Adventure",
      description:
        "A 2D Pokemon-style roguelike game with procedurally generated levels. Players navigate a dungeon maze, collecting the four pillars of object-oriented principles to escape. Developed using Java Swing and incorporating various software design patterns and practices.",
      gifUrl: "dungeonAdventure.gif",
      tags: [
        "Java",
        "OOP",
        "MVC",
        "Singleton Pattern",
        "SQLite",
        "Test-Driven Development",
        "Agile Methodology",
      ],
    },
    {
      title: "Tetris Clone",
      description:
        "A modern take on the classic puzzle game with added features, including dynamic difficulty scaling. Developed as a group project for TCSS 305, Winter 2023.",
      gifUrl: "tetris.gif",
      tags: [
        "Java",
        "Observer Design Pattern",
        "MVC",
        "Version Control",
        "Team Collaboration",
        "Game Development",
      ],
    },
    {
      title: "The Experiment",
      description:
        "A 2D horror survival game inspired by Ao Oni, developed as a side project during TCSS 491. Players control one of four teenagers trapped in a mysterious mansion, searching for items to escape while being hunted by a creature. The story unfolds around Mr. Harrison's disturbing experiments and sudden disappearance. Built using a custom JavaScript game engine.",
      gifUrl: "TheExperiment.png",
      tags: [
        "JavaScript",
        "HTML5 Canvas",
        "Game Development",
        "Custom Game Engine",
        "Sprite Animation",
        "Collision Detection",
        "Path Finding",
        "Story Design"
      ],
      playLink: "https://joser27.github.io/TCSS491-MiniGameOpen/",
    },
    {
      title: "UWT Bookstore",
      description:
        "A full-stack educational project developed for TCSS 460: Client/Server Programming For Internet Applications. Features include CRUD operations for book management, secure API endpoints, and a responsive user interface. Built with modern web technologies and containerized using Docker.",
      gifUrl: "bookStore.svg",
      tags: [
        "Next.js",
        "Material-UI",
        "PostgreSQL",
        "Docker",
        "Postman",
        "Node.js",
        "API Development",
      ],
    },
    {
      title: "Just Pong",
      description: "A modern take on the classic Pong game, featuring a high-score leaderboard powered by a PostgreSQL database. Built using JavaScript and HTML5 Canvas for smooth gameplay, with a containerized backend API using Docker and hosted on Railway for real-time score tracking.",
      gifUrl: "pong.png",
      tags: [
        "JavaScript",
        "HTML5 Canvas",
        "Game Development",
        "REST API",
        "PostgreSQL",
        "Docker",
        "Node.js",
        "Express",
        "Vercel",
        "Railway",
      ],
      playLink: "https://just-pong.vercel.app/",
    },
    {
      title: "Stickman The Savior, A Beat 'Em Up Adventure",
      description:
        "A 2D side-scrolling beat 'em up game developed as part of TCSS 491: Game And Simulation Design. Created with a team of 3 using a custom JavaScript game engine, featuring combat mechanics, character animations, and level progression. Built using HTML5 Canvas and JavaScript.",
      gifUrl: "stickman_the_savior.png",
      tags: [
        "JavaScript",
        "HTML5 Canvas",
        "Game Development",
        "Custom Game Engine",
        "Team Project",
        "Sprite Animation",
        "Collision Detection",
      ],
      playLink: "https://joser27.github.io/TCSS491-GameProject/",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen py-16 px-4 bg-[rgb(31,31,31)]"
    >
      <h1 className="text-5xl font-bold text-center mb-16 text-white">
        My Projects
      </h1>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[rgb(41,41,41)] rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <div className="relative h-56 bg-gray-700">
              <Image
                src={project.gifUrl}
                alt={project.title}
                fill
                className="object-cover object-center"
              />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-3 text-white">
                {project.title}
              </h2>
              <p className="text-gray-300 mb-4">{project.description}</p>
              {project.playLink && ( // Add this block
                <a
                  href={project.playLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-500 text-white px-4 py-2 rounded-md mb-4 hover:bg-blue-600 transition-colors"
                >
                  Play Game
                </a>
              )}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="bg-[rgb(51,51,51)] text-gray-300 px-2 py-1 rounded-full text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
