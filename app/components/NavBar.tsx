import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <div className="navbar bg-base-100 flex justify-between">
      <div>
        <Link href="/">
          <button className="btn btn-ghost text-xl">Home</button>
        </Link>
        <Link href="/about">
          <button className="btn btn-ghost text-xl">About</button>
        </Link>
        <Link href="/projects">
          <button className="btn btn-ghost text-xl">Projects</button>
        </Link>
        <Link href="/contactme">
          <button className="btn btn-ghost text-xl">Contact</button>
        </Link>
      </div>
      <div className="flex justify-center" />
      <div></div>
    </div>
  );
};

export default NavBar;
