"use client"

import { Card, CardContent, CardFooter } from "./ui/card";
import Image from "next/image";

export default function Scents() {

  const list = [
    {
      title: "Orange",
      img: "/images/black-1984277.jpg",
      price: "$5.50",
    },
    {
      title: "Tangerine",
      img: "/images/black-1984277.jpg",
      price: "$3.00",
    },
    {
      title: "Raspberry",
      img: "/images/black-1984277.jpg",
      price: "$10.00",
    },
    {
      title: "Lemon",
      img: "/images/black-1984277.jpg",
      price: "$5.30",
    },
    {
      title: "Avocado",
      img: "/images/black-1984277.jpg",
      price: "$15.70",
    },
    {
      title: "Lemon 2",
      img: "/images/black-1984277.jpg",
      price: "$8.00",
    },
    {
      title: "Banana",
      img: "/images/black-1984277.jpg",
      price: "$7.50",
    },
    {
      title: "Watermelon",
      img: "/images/black-1984277.jpg",
      price: "$12.20",
    },
  ];

  return (
    <div className="gap-2 grid grid-cols-2 md:grid-cols-4 px-10">
      {list.map((item, index) => (
        <Card key={index}>
          <CardContent className="overflow-visible p-0">
            <Image
              alt={item.title}
              className="w-full rounded-xl object-cover  "
              src={item.img}
              width={200}
              height={200}
            />
          </CardContent>
          <CardFooter className="text-small justify-between bg-transparent">
            <b>{item.title}</b>
            <p className="text-default-500">{item.price}</p>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
