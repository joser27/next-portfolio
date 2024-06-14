import React from "react";
import Button from "../components/Button";
interface Props {
  htext: string;
  ptext: string;
}
const CenterHero = ({ htext, ptext }: Props) => {
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center mb-20">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">{htext}</h1>
            <p className="py-6">{ptext}</p>
            <Button text="About me!" />
          </div>
        </div>
      </div>
    </>
  );
};

export default CenterHero;
