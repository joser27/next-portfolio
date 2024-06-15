"use client";
import React, { useState } from "react";

const Tab = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div role="tablist" className="tabs tabs-lifted" onClick={handleClick}>
        <input type="radio" role="tab" className="tab" aria-label="Play Game" />
        {isOpen && (
          <div
            role="tabpanel"
            className="tab-content bg-base-100 border-base-300 rounded-box p-6"
          >
            Tab content 1
          </div>
        )}
      </div>
    </>
  );
};

export default Tab;
