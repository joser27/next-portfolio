import Divider from "@/app/components/Divider";
import Footer from "@/app/components/Footer";
import NavBar from "@/app/components/NavBar";
import Image from "next/image";
import React from "react";

const ProjectTetrisPage = () => {
  return (
    <>
      <NavBar />
      <div className="divider"></div>
      <h1 className="text-2xl font-semiboldW">Tetris</h1>
      <br />
      <div className="flex justify-center">
        <div>
          <Image
            className="rounded-2xl shadow-lg"
            src="/tetris.gif"
            width={500}
            height={500}
            alt="image"
          />
        </div>
      </div>
      <br />
      <Divider color="bg-base-200">
        <div>
          <br />
          <h2 className="text-lg font-black">
            TCSS 305 project developed by Jose Rodriguez, David Hoang, Avinash
            Bavisetty, Yonas Omega during Winter 2023
          </h2>
          <p>
            A 2D game where players experience the classic game Tetris. This
            rendition includes an algorithm that dynamically increases the
            game's difficulty as players progress. It encompasses all the
            essential functions found in the original Tetris game
          </p>
          <br />
          <br />
        </div>
      </Divider>

      <br />
      <Divider color="bg-base-200">
        <div>
          <br />
          <h2 className="text-lg font-black">Experience</h2>
          <p>
            I gained valuable experience in collaborating with peers and
            utilizing effective communication to successfully complete projects.
            Additionally, I gained proficiency in version control systems,
            enhancing my ability to manage and track project changes
            efficiently. Furthermore, I learned about the observer design
            pattern, which provided me with insights into structuring and
            managing event-driven systems effectively.
          </p>
          <br />
          <br />
        </div>
      </Divider>
      <br />
      <Footer />
    </>
  );
};

export default ProjectTetrisPage;
