import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import CenterHero from "./components/CenterHero";
import Avatar from "./components/Avatar";

//rafce
export default function Home() {
  return (
    <>
      <NavBar />
      <CenterHero htext="Hello World, Welcome to my Portfolio!" ptext="" />
      <br />
      <Footer />
    </>
  );
}
