import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
//Tree_purple_green_grass.png
export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-[rgb(31,31,31)]">
      <NavBar />
      <main className="flex-grow">
        <Home />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
