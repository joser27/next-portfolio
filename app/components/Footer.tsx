import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
      <nav className="grid grid-flow-col gap-4">
        <Link href="/" className="link link-hover">
          Home
        </Link>
        <Link href="/about" className="link link-hover">
          About
        </Link>
        <Link href="/projects" className="link link-hover">
          Projects
        </Link>
        <Link href="/contactme" className="link link-hover">
          Contact
        </Link>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a
            href="https://github.com/joser27"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M12 0c-6.627 0-12 5.373-12 12 0 5.302 3.438 9.8 8.205 11.387.6.111.82-.261.82-.577 0-.285-.011-1.04-.017-2.041-3.338.724-4.042-1.609-4.042-1.609-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.835 2.809 1.305 3.494.998.108-.775.418-1.305.762-1.605-2.665-.303-5.466-1.332-5.466-5.931 0-1.31.469-2.381 1.235-3.221-.123-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.956-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.003.404 2.292-1.552 3.298-1.23 3.298-1.23.653 1.653.242 2.873.119 3.176.769.84 1.234 1.911 1.234 3.221 0 4.611-2.803 5.624-5.475 5.921.43.371.814 1.103.814 2.222 0 1.606-.015 2.899-.015 3.293 0 .319.219.693.824.576 4.765-1.59 8.199-6.086 8.199-11.384 0-6.627-5.373-12-12-12z"></path>
            </svg>
          </a>
        </div>
      </nav>
      <aside>
        <p>© 2024 - Designed and Built by Jose Rodriguez</p>
      </aside>
    </footer>
  );
};

export default Footer;
