import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import CenterHero from "./components/CenterHero";

export default function Home() {
  return (
    <div
      className="flex flex-col min-h-screen bg-gray-100 bg-opacity-50 bg-[url('data:image/svg+xml,...')]"
      style={{ backgroundImage: "url('Tree.png')" }}
    >
      <div className="w-full flex justify-center">
        <div className="w-full max-w-4xl">
          <NavBar />
        </div>
      </div>
      <main className="flex-grow flex justify-center">
        <div className="w-full max-w-4xl bg-white">
          <section
            id="home"
            className="min-h-screen flex items-center justify-center"
          >
            "Hello World, Welcome to my Portfolio!"
          </section>
          <section
            id="about"
            className="min-h-screen flex items-center justify-center"
          >
            "ABOUT ME"
          </section>
          <section
            id="projects"
            className="min-h-screen flex items-center justify-center"
          >
            "PROJECTS"
          </section>
          <section
            id="contact"
            className="min-h-screen flex items-center justify-center"
          >
            "CONTACT"
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
