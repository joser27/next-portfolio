"use client";

import React, { useState } from "react";

const Collapse = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{ textDecoration: "underline" }}
      >
        {isOpen ? "Hide Game" : "Play Game"}
      </button>
      {isOpen && (
        <div>
          <iframe
            src="https://joser27.github.io/UWT-Spring24-GAME/"
            height="600"
            width="1200"
            title="UWT Game"
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default Collapse;
