import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  color: string;
}

const Divider = ({ children, color }: Props) => {
  return (
    <>
      <div className="flex items-center justify-center">
        <div className="flex flex-col w-1/2">
          <div className={`grid card ${color} rounded-box place-items-center`}>
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default Divider;
