import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
//Tree_purple_green_grass.png
export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-[rgb(31,31,31)]">
      <NavBar />
      <div className="flex flex-row w-full">
        {/* Left Sidebar */}
        <div className="w-2/6 min-h-screen bg-blue-500/20 p-4">
          <div className="fixed">
            Left Section
          </div>
        </div>

        {/* Main Content (Middle) */}
        <main className="w-2/6 min-h-screen bg-green-500/20 p-4">
          <Home />
          <Projects />
          <Contact />
        </main>

        {/* Right Sidebar */}
        <div className="w-2/6 min-h-screen bg-red-500/20 p-4">
          <div className="fixed">
            Right Section
          </div>
        </div>
      </div>
    </div>
  );
}
