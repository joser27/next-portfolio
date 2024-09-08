"use client";
import React from "react";

const NavBar = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-gray-400">
      <div className="flex justify-center w-full">
        <button
          onClick={() => scrollToSection("home")}
          className="btn btn-ghost text-xl"
        >
          Home
        </button>
        <button
          onClick={() => scrollToSection("about")}
          className="btn btn-ghost text-xl"
        >
          About
        </button>
        <button
          onClick={() => scrollToSection("projects")}
          className="btn btn-ghost text-xl"
        >
          Projects
        </button>
        <button
          onClick={() => scrollToSection("contact")}
          className="btn btn-ghost text-xl"
        >
          Contact
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
