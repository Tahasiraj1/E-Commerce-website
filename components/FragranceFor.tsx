import React from "react";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";


const FragranceFor = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-[#0a1a32ff] gap-2 pb-10 px-4"  
    style={{ backgroundImage: `url('/SVG/Element.svg')`, backgroundPosition: '30% 100%', backgroundSize: 'cover' }}
    >
      <div className="flex items-center justify-center w-full gap-2">
        <Card className="relative rounded-none overflow-hidden border-[#0a1a32ff] shadow-cyan-400 group cursor-pointer ">
          <Image
            src="/images/colors-2363970.jpg"
            alt="perfume"
            width={1000}
            height={1000}
            className="w-[400px] h-[400px] object-cover"
          />
          <CardContent className="absolute inset-0 flex flex-col items-start justify-stitems-start text-white bg-black bg-opacity-50 hover:bg-transparent hover:bg-opacity-100 group-hover:translate-y-full transition-all duration-500 ease-in-out">
            <h1 className="text-2xl font-bold mt-4">Fragrance For Mens</h1>
            <p className="text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              voluptates.
            </p>
          </CardContent>
        </Card>
        <Card className="relative rounded-none overflow-hidden border-[#0a1a32ff] shadow-cyan-400 group cursor-pointer ">
          <Image
            src="/images/colors-2363970.jpg"
            alt="perfume"
            width={1000}
            height={1000}
            className="w-[400px] h-[400px] object-cover"
          />
          <CardContent className="absolute inset-0 flex flex-col items-start justify-stitems-start text-white bg-black bg-opacity-50 hover:bg-transparent hover:bg-opacity-100 group-hover:translate-y-full transition-all duration-500 ease-in-out">
            <h1 className="text-2xl font-bold mt-4">Fragrances For Womens</h1>
            <p className="text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              voluptates.
            </p>
          </CardContent>
        </Card>
      </div>
      <Card className="relative rounded-none overflow-hidden border-[#0a1a32ff] shadow-cyan-400 group cursor-pointer ">
          <Image
            src="/images/colors-2363969.jpg"
            alt="perfume"
            width={1000}
            height={1000}
            className="w-[810px] h-[400px] object-cover"
          />
          <CardContent className="absolute inset-0 flex flex-col items-start justify-stitems-start text-white bg-black bg-opacity-50 hover:bg-transparent hover:bg-opacity-100 group-hover:translate-y-full transition-all duration-500 ease-in-out">
            <h1 className="text-2xl font-bold mt-4">Unisex Fragrances</h1>
            <p className="text-lg">
              Lorem ipsum dolor sit amet consectetur<br /> adipisicing elit. Quisquam,
              voluptates.
            </p>
          </CardContent>
        </Card>
    </div>
  );
};

export default FragranceFor;
