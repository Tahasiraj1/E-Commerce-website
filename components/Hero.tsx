import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative flex flex-col lg:flex-row text-white bg-[#0a1a32ff] items-center justify-between w-full max-w-[2000px] px-10 py-10 ">

      <div className="flex flex-col text-start w-full max-w-xl space-y-8 px-2 z-10">
        <h2 className="text-6xl font-extrabold">
          Unveil Your
          <br /> Signature Scent<span className="text-emerald-600">.</span>
        </h2>
        <p>
          Discover the art of fragrance with our curated collection of exquisite
          perfumes. Crafted to elevate every moment, our scents blend luxury and
          elegance, leaving a lasting impression wherever you go. Explore your
          perfect match and let your essence speak volumes.
        </p>
        <Button className="bg-emerald-900 text-lg hover:bg-emerald-700 rounded-full w-[160px] h-[50px] ">
          EXPLORE NOW
        </Button>
      </div>
      <Image
        src="/images/fragrance-1991531-removebg-preview.png"
        alt="/martial-art-school"
        width={500}
        height={600}
        className="relative z-10"
      />
    </div>
  );
};

export default Hero;
