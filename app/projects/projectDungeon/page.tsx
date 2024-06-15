import Divider from "@/app/components/Divider";
import Footer from "@/app/components/Footer";
import Hero from "@/app/components/Hero";
import NavBar from "@/app/components/NavBar";
import Image from "next/image";
import React from "react";

const ProjectDungeonPage = () => {
  return (
    <>
      <NavBar />
      <div className="divider"></div>
      <h1 className="text-2xl font-semiboldW">Dungeon Adventure</h1>
      <br />
      <div className="flex justify-center">
        <div>
          <Image
            className="rounded-2xl shadow-lg"
            src="/dungeonAdventure.gif"
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
            TCSS 360 project developed by Enrique Vargas, Jason Sizemore, and
            Jose Rodriguez.
          </h2>
          <p>
            A 2D Pokemon-style game where players navigate a dungeon maze filled
            with hidden enemies that can appear unexpectedly. The objective is
            to collect the four pillars of object-oriented principles to unlock
            the key and escape the dungeon. The game incorporates essential
            programming principles, prominently Object-Oriented Programming
            (OOP), to structure and manage game elements effectively.
            Additionally, it utilizes the Model-View-Controller (MVC) pattern to
            separate concerns and enhance maintainability.
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
            During this software development, I immersed myself in various
            design patterns and practices that significantly increased my
            skills. I gained proficiency in Test Case Design and Execution,
            Toggle-User Story Management, MVC Design, Mock Object usage,
            Singleton Design Pattern implementation, and utilizing SQLite for
            database management. I also learned about Serialization techniques
            for loading and saving game data, as well as the Memento and Builder
            Patterns for managing state and complex object creation. Exploring
            the Composite pattern enhanced my understanding of structuring
            hierarchical data, while Dependency Injection proved crucial for
            flexible and testable code architecture. Embracing the Full Software
            Development Life Cycle, adhering to Coding Standards, and applying
            Agile Software Development methodologies further solidified my
            approach to delivering robust and maintainable software solutions.
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

export default ProjectDungeonPage;
