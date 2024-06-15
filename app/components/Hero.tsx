import React, { ReactElement, ReactNode } from "react";
import Link from "next/link";
interface Props {
  image: string;
  children: ReactNode;
  htext: string;
  link: string;
}
const Hero = ({ image, children, htext, link }: Props) => {
  return (
    <div className="hero max-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <img
          style={{ width: "250px", height: "250px" }}
          src={image}
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">{htext}</h1>
          <br />
          {children}
          <br />
          <br />
          {link && (
            <Link href={link}>
              <button className="btn btn-primary">View more details</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
