"use client";
import React from "react";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

const ProjectsPage = () => {
  return (
    <>
      <NavBar />
      <h1 className="text-2xl font-semiboldW">Projects</h1>
      <br />
      <Hero
        link="/projects/projectJam"
        htext="UWT Game Spring Game Dev"
        image="./UWTGame.jpg"
      >
        Fun personal game I worked on during the two-week phase of the UWT Game
        Spring Jam. I challenged myself by learning JavaScript, a new
        programming language for me at the time. I also practiced time
        management while being a full-time student and managing the development.
      </Hero>
      <div className="divider"></div>
      <Hero
        link="/projects/projectBook"
        htext="UWT Book store"
        image="./bookStore.svg"
      >
        Back-end and front-end development. Used Docker, Postman, and PostgreSQL
        for the back-end. Utilized Next.js and MUI for CSS on the front-end.
        Learned valuable lessons in database practices and preventing SQL
        injection. Practiced test cases for routes using Postman. Followed agile
        development, working in sprints.
      </Hero>
      <div className="divider"></div>
      <Hero
        link="/projects/projectTetris"
        htext="Tetris project"
        image="./tetris.svg"
      >
        Worked in a group with peers. Learned valuable lessons in version
        control and proper communication with group members. Practiced best
        coding principles such as the Observer design pattern and followed
        coding standards.
      </Hero>
      <div className="divider"></div>
      <Hero
        link="/projects/projectDungeon"
        htext="Dungeon Adventure project"
        image="./dungeonAdventure.jpg"
      >
        Developed using Java swing. Learned new software development practices
        and patterns such as Test Case Design and Execution, Toggle-User Story
        Management, MVC Design, Mock Object, Singleton Design Pattern, SQLite
        (Database), Serialization, Memento Pattern, Builder Pattern, Composite,
        Dependency Injection, Full Software Development Life Cycle, Coding
        Standards, and Agile Software Development.
      </Hero>
      <div className="divider"></div>
      <Hero link="/" htext="Portfolio" image="./favicon.ico">
        This website built using next.js! My first time building from scratch
        using next.js from the experience i got from UWT Bookstore. I Learned
        new front-end techniques and frameworks like Tailwind CSS.
      </Hero>
      <br />
      <Footer />
    </>
  );
};

export default ProjectsPage;

/*
const ProjectsPage = () => {
  return (
    <>
      <NavBar />
      <h1 className="text-2xl font-semiboldW">Projects</h1>
      <br />
      <Hero link="/about" htext="UWT Game Spring Game Dev" image="/UWTGame.jpg">
        Fun personal game I worked on during the two-week phase of the UWT Game
        Spring Jam. I challenged myself by learning JavaScript, a new
        programming language for me at the time. I also practiced time
        management while being a full-time student and managing the development.
      </Hero>
      <div className="divider"></div>
      <Hero link="/about" htext="UWT Book store" image="/bookStore.svg">
        Back-end and front-end development. Used Docker, Postman, and PostgreSQL
        for the back-end. Utilized Next.js and MUI for CSS on the front-end.
        Learned valuable lessons in database practices and preventing SQL
        injection. Practiced test cases for routes using Postman. Followed agile
        development, working in sprints.
      </Hero>
      <div className="divider"></div>
      <Hero link="/about" htext="Tetris project" image="/tetris.svg">
        Worked in a group with peers. Learned valuable lessons in version
        control and proper communication with group members. Practiced best
        coding principles such as the Observer design pattern and followed
        coding standards.
      </Hero>
      <div className="divider"></div>
      <Hero
        link="/about"
        htext="Dungeon Adventure project"
        image="/dungeonAdventure.jpg"
      >
        Developed using Java swing. Learned new software development practices
        and patterns such as Test Case Design and Execution, Toggle-User Story
        Management, MVC Design, Mock Object, Singleton Design Pattern, SQLite
        (Database), Serialization, Memento Pattern, Builder Pattern, Composite,
        Dependency Injection, Full Software Development Life Cycle, Coding
        Standards, and Agile Software Development.
      </Hero>
      <br />
      <Footer />
    </>
  );
};
*/
