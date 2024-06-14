"use client";
import React from "react";
import Link from "next/link";

interface Props {
  text: string;
}

const Button = ({ text }: Props) => {
  return (
    <Link href="/about">
      <button className="btn btn-active">{text}</button>
    </Link>
  );
};

export default Button;
