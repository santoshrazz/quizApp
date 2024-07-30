"use client";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";

const Page = ({ params }: { params: { queId: number } }) => {
  const router = useRouter();
  const [seconds, setSeconds] = useState(3);
  let timer: any;
  useEffect(() => {
    if (seconds > 0) {
      timer = setInterval(() => {
        setSeconds((prevSeconds: any) => prevSeconds - 1);
      }, 1000);
      return () => clearInterval(timer); // Cleanup interval on component unmount
    } else {
      router.push(`/quizs/${params.queId}`);
    }
  }, [seconds]);
  return (
    <div className="h-screen w-full justify-center items-center flex bg-slate-700">
      <p className="text-white text-8xl animate-fadeIn">{seconds}</p>
    </div>
  );
};

export default Page;
