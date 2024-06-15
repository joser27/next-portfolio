import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Divider from "../components/Divider";
import Hero from "../components/Hero";
import Avatar from "../components/Avatar";
import Rating from "../components/Rating";
import Table from "../components/Table";
import TableFrameWork from "../components/TableFrameWork";
import Carousel from "../components/Carousel";

const AboutMePage = () => {
  return (
    <>
      <NavBar />

      <h1 className="text-2xl">About me</h1>
      <br />
      <Divider color="bg-base-200">
        <br />
        Hi my name is Jose Rodriguez. I am a student at the University of
        Washington Tacoma. I enjoy creating new and unique projects. I am
        passionate about learning new things when it comes to improving my
        projects and my overall self.
        <br />
        <br />
      </Divider>
      <br />
      <h1 className="text-2xl">My experience</h1>
      <br />
      <Divider color="bg-base-100">
        <Table />
        <TableFrameWork />
      </Divider>
      <br />
      <div className="divider"></div>
      <h1 className="text-2xl">Hobbies</h1>
      <br />
      <h2 className="text-2xl">1. CARS!</h2>
      <Divider color="bg-base-100">
        <Hero
          link="https://en.wikipedia.org/wiki/Mercedes-Benz_W201"
          htext="Mercedes 190e"
          image="./190e.gif"
        >
          The Mercedes-Benz 190E, produced from 1982 to 1993, excelled in
          motorsport, notably in the Deutsche Tourenwagen Masters (DTM) series.
          Known as the Baby Benz, it displayed engineering excellence similar to
          larger models. In DTM, especially with Evo versions, it showcased
          superior aerodynamics, powerful engines, and exceptional handling,
          establishing its legacy in touring car racing.
        </Hero>
        <br />
        <Carousel />
      </Divider>
      <br />
      <h2 className="text-2xl">2. ART!</h2>
      <Divider color="bg-base-100">
        <Hero
          link="https://www.pixilart.com/gallery"
          htext="Pixel Art"
          image="./stardew.jpg"
        >
          Pixel art is one of my favorite types of art! Its so simple but can do
          extremelty pleasing. One of my favorite games that uses pixel art is
          Stardew Valley!
        </Hero>
      </Divider>
      <br />
      <h2 className="text-2xl">3. PROGRAMMING!</h2>
      <Divider color="bg-base-100">
        <Hero
          link="https://www.javascript.com/"
          htext="Coding"
          image="./favicon.ico"
        >
          Just like art, coding gives the freedom of creating anything
          imaginable. This is the reason i enjoy it so much! I love working on
          new projects, expecially ones which combine all three of my hobbies,
          cars, pixel art, and coding!
        </Hero>
      </Divider>
      <br />
      <Footer />
    </>
  );
};

export default AboutMePage;
