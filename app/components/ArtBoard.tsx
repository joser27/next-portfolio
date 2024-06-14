import React from "react";
interface Props {
  text: string;
}
const ArtBoard = ({ text }: Props) => {
  return (
    <div className="artboard artboard-horizontal phone-4 bg-blue-100 text-black text-center text-2xl">
      <p>{text}</p>
    </div>
  );
};

export default ArtBoard;
