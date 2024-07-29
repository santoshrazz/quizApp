import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex bg-gray-800 text-white top-0 py-3 flex-wrap justify-around bg-silver">
      <h1 className="text-lg font-semibold">Quiz App</h1>
      <ul className="flex gap-[40px] text-m">
        <Link href={"/"}>
          <li>Home</li>
        </Link>
        <Link href={"/quizs"}>
          <li>All Quiz</li>
        </Link>
        <Link href={"/"}>
          <li>Contact</li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
