"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useCart } from "@/lib/CartContext";
import { ArrowLeft } from "lucide-react";
import { TiStar } from "react-icons/ti";
import { RiShoppingCart2Line } from "react-icons/ri";
import { FaArrowRightLong } from "react-icons/fa6";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { useToast } from "@/hooks/use-toast";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { Image as SanityImage } from "@sanity/types";

interface Product {
  id: string;
  name: string;
  quantity: number;
  price: number;
  image: SanityImage[];
  ratings: string;
  sizes: string[];
  colors: string[];
  tags: string[];
  description: string;
}

const ProductDetails = () => {
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

  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  const { toast } = useToast();
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    if (product) {
      addToCart({
        id: product?.id as string,
        image: product?.image?.[0],
        name: product?.name as string,
        price: product?.price as number,
        quantity: 1,
      });
      toast({
        title: "Success!",
        description: "Item is added to cart.",
        duration: 5000,
      });      
    } else {
      toast({
        title: "Error",
        description: "Please try again.",
        variant: "destructive",
        duration: 5000,
      });
    }
  };

  const params = useParams();
  const productId = params.id;
  const product = scents.find((product) => product.id === productId);

  if (!product)
    return (
      <div className="h-screen items-center flex flex-col gap-2 justify-center">
        <p className="font-bold text-2xl text-red-500">Product not found</p>
        <Link href="/products">
          <Button
            variant="expandIcon"
            iconPlacement="left"
            Icon={ArrowLeft}
            className="border gap-1 text-lg font-semibold border-emerald-600 rounded-none bg-lime-100 hover:bg-emerald-700 text-black hover:text-white"
          >
            Back to Products page
          </Button>
        </Link>
      </div>
    );

  return (
    <div className=" bg-[#0a1a32ff] text-white">
      <div className="flex lg:flex-row flex-col pt-10 pb-20 px-10">
        <ScrollArea className="drop-shadow-lg rounded-2xl">
          <div className="flex space-x-2">
            {product.image.map((image, index: number) => (
              <Image
                key={index}
                src={urlFor(image).url()}
                alt={`Image ${index + 1} of ${product.name}`}
                width={1000}
                height={1000}
                className="w-[500px] h-[500px] object-cover rounded-2xl"
              />
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
        <div className="flex flex-col justify-center lg:pl-20 pr-5 w-full max-w-2xl">
          <h1 className="text-3xl mb-5 mt-5 font-bold">{product.name}</h1>
          <p className="text-lg font-bold mb-5">PKR {product.price}</p>
          <span className="flex mb-5">
            <TiStar fill="orange" className="w-6 h-6 mr-2" /> {product.ratings}
          </span>
          <p>{product.description}</p>
          <div className="flex items-center justify-center mt-10 gap-2">
            {product.quantity > 0 ? (
              <Button
                variant="expandIcon"
                Icon={RiShoppingCart2Line}
                iconPlacement="right"
                className="border text-lg rounded-full font-semibold border-cyan-300 w-full active:scale-95 duration-300 transition-transform transform drop-shadow-xl"
                onClick={handleAddToCart}
              >
                ADD TO CART
              </Button>
            ) : (
              <p className="text-white font-semibold w-full bg-red-500 h-10 rounded-full text-center flex items-center justify-center">
                Out of Stock
              </p>
            )}
          </div>
        </div>
      </div>
      <h1 className="py-2 text-3xl lg:text-4xl font-bold px-5 lg:px-40">
        You May Also{" "}
        <span className="relative">
          Like
        </span>
      </h1>
      <div className="w-full px-5 pt-10 flex justify-center">
        <Carousel
          className="w-full max-w-[1000px] px-5"
          opts={{
            loop: true,
          }}
          plugins={[plugin.current]}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {scents.slice(0, 6).map((product: Product, index: number) => (
              <CarouselItem
                key={index}
                className="flex flex-col md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
              >
                <Image
                  src={urlFor(product.image[0]).url()}
                  alt="product"
                  width={1000}
                  height={1000}
                  className="w-[300px] h-[400px] relative rounded-2xl"
                />
                <div className="flex items-center justify-between">
                  <h2>{product.name}</h2>
                  <p>PKR {product.price}</p>
                </div>
                <div className="flex justify-between items-center mt-4 mb-8">
                  <Link
                    key={product.id}
                    href={`/products/${product.id}`}
                    passHref
                  >
                    <Button
                      variant="expandIcon"
                      Icon={FaArrowRightLong}
                      iconPlacement="right"
                      className="items-center flex justify-center hover:bg-emerald-800 hover:text-white bg-lime-100 border border-emerald-800 drop-shadow-xl rounded-full text-black"
                    >
                      Order Now
                    </Button>
                  </Link>
                  <div className="flex">
                    <TiStar fill="orange" className="w-6 h-6 mr-2" />{" "}
                    {product.ratings}
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute top-44 left-0 rounded-lg active:scale-95 transition-transform transform duration-300" />
          <CarouselNext className="absolute top-44 right-0 rounded-lg active:scale-95 transition-transform transform duration-300" />
        </Carousel>
      </div>
    </div>
  );
};

export default ProductDetails;
