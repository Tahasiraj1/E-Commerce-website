"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardFooter } from "./ui/card";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { client } from "@/sanity/lib/client";
import { Image as SanityImage } from "@sanity/types";
import { Ripple } from "./ui/Ripple";
import Link from "next/link";

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
    <div className="bg-[#0a1a32ff] gap-4 grid grid-cols-2 md:grid-cols-4 px-4 md:px-6">
      {scents.map((scent, index) => (
        <Card
          key={index}
          className="border-[#0a1a32ff] bg-transparent/40 text-white shadow-cyan-400"
        >
          <Link href={`/scents/${scent.id}`}>
            <Ripple>
              <CardContent className="p-2">
                <Image
                  alt={scent.name}
                  className="w-full rounded-xl object-cover  "
                  src={urlFor(scent.image[0]).url()}
                  width={600}
                  height={600}
                />
              </CardContent>
              <CardFooter className="text-small mt-4 justify-between rounded-b-xl">
                <b>{scent.name}</b>
                <p className="text-default-500">{scent.price}</p>
              </CardFooter>
            </Ripple>
          </Link>
        </Card>
      ))}
    </div>
  );
}
