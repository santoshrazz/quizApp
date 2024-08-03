"use client";
import { HoverEffect } from "../components/ui/card-hover-effect";
import { projects } from "@/Constants/Constant";
export function About() {
  return (
    <div className=" w-full mx-auto px-8 bg-black">
      <h2 className="text-center text-white text-4xl font-semibold">
        Play Quizes in Different Categories{" "}
      </h2>
      <HoverEffect items={projects} />
    </div>
  );
}
