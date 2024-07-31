"use client";
import React, { useState, useEffect } from "react";
import ConfettieComp from "react-confetti";
const Confettie = () => {
  const [windowWidth, setWindowWidth] = useState({
    widht: window.innerWidth,
    height: window.innerHeight,
  });
  const detectSize = () => {
    setWindowWidth({ widht: window.innerWidth, height: window.innerHeight });
  };
  useEffect(() => {
    window.addEventListener("resize", detectSize);
    return () => {
      window.removeEventListener("resize", detectSize);
    };
  });
  console.log(windowWidth.height, windowWidth.widht);

  return (
    <ConfettieComp width={windowWidth.widht - 50} height={windowWidth.height} />
  );
};

export default Confettie;
