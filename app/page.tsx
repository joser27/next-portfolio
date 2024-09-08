import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function HomePage() {
  return (
    <div
      className="flex flex-col min-h-screen bg-gray-100 bg-opacity-50"
      style={{ backgroundImage: "url('Tree.png')" }}
    >
      <div className="w-full flex justify-center">
        <div className="w-full max-w-4xl">
          <NavBar />
        </div>
      </div>
      <main className="flex-grow flex justify-center">
        <div className="w-full max-w-4xl bg-white">
          <Home />
          <About />
          <Projects />
          <Contact />
        </div>
      </main>
    </div>
  );
}
