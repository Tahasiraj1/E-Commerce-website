"use client"

import { useState, useEffect } from "react";
import { Card, CardContent, CardFooter } from "./ui/card";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { client } from '@/sanity/lib/client';
import { Image as SanityImage } from '@sanity/types';

interface Product {
  id: string;
  name: string;
  quantity: number;
  price: number;
  image: SanityImage[];
  ratings: string;
  tags: string[];
  description: string;
}  

export default function Scents() {
  const [scents, setScents] = useState<Product[]>([]);

  useEffect(() => {
      const fetchProducts = async () => {
          const query = `*[_type == "scents"]{
          id,
          name,
          quantity,
          price,
          image,
          ratings,
          tags,
          description,
          }`;

          const products = await client.fetch(query);
          setScents(products);
      };
      fetchProducts();
  }, []);

  return (
    <div className="bg-[#0a1a32ff] gap-2 grid grid-cols-2 md:grid-cols-4 px-4 md:px-10">
      {scents.map((scent, index) => (
        <Card key={index} className="border-[#0a1a32ff] bg-transparent/40 text-white">
          <CardContent className="overflow-visible p-0">
            <Image
              alt={scent.name}
              className="w-full rounded-t-xl object-cover  "
              src={urlFor(scent.image[0]).url()}
              width={200}
              height={200}
            />
          </CardContent>
          <CardFooter className="text-small mt-4 justify-between rounded-b-xl">
            <b>{scent.name}</b>
            <p className="text-default-500">{scent.price}</p>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
