"use client"

import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import Bubbles from "./ui/Bubbles";

const Hero = () => {
  return (
    <div className="relative text-white bg-[#0a1a32ff] flex flex-col lg:flex-row items-center justify-between w-full max-w-[2000px] px-4 md:px-10 py-20 ">

      <div className="flex flex-col text-start w-full max-w-xl space-y-8 px-2">
        <h2 className="text-5xl md:text-6xl font-extrabold">
          Unveil Your
          <br /> Signature Scent<span className="text-[#73ffedff]">.</span>
        </h2>
        <p>
          Discover the art of fragrance with our curated collection of exquisite
          perfumes. Crafted to elevate every moment, our scents blend luxury and
          elegance, leaving a lasting impression wherever you go. Explore your
          perfect match and let your essence speak volumes.
        </p>
        <Button className="bg-[#0a1a32ff] hover:bg-[#0a1a32ff] text-white text-lg font-bold border border-cyan-300 rounded-full w-[160px] h-[50px] ">
          EXPLORE NOW
        </Button>
      </div>
      <Image
        src="/images/ash-edmonds-gyzH19KIvIQ-unsplash.jpg"
        alt="/martial-art-school"
        width={600}
        height={600}
        className="rounded-xl mt-6 md:mt-0"
      />
      <Bubbles />
      
    </div>
  );
};

export default Hero;
