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
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { useToast } from "@/hooks/use-toast";
import { urlFor } from "@/sanity/lib/image";
import { Image as SanityImage } from "@sanity/types";
import { Ripple } from "@/components/ui/Ripple";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Plus, Minus } from "lucide-react";
import { fetchProducts } from "@/app/api/route";

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

const ProductDetails = () => {
  const { toast } = useToast();
  const { addToCart } = useCart();
  const [scents, setScents] = useState<Product[]>([]);
  const [quantity, setQuantity] = useState(1);


  useEffect(() => {
    fetchProducts().then((data) => setScents(data));
  }, []);

  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  const handleAddToCart = () => {
    if (product) {
      addToCart({
        id: product?.id as string,
        image: product?.image?.[0],
        name: product?.name as string,
        price: product?.price as number,
        quantity: quantity,
      });
      setQuantity(1);
      toast({
        image: urlFor(product.image[0]).url(),
        title: `${product.name} added to cart.`,
        description: `${product.price} x ${quantity}`,
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

  const handleIncrement = () => {
    if (quantity < product!.quantity) {
      setQuantity(quantity + 1);
    }
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const params = useParams();
  const productId = params.id;
  const product = scents.find((product) => product.id === productId);

  if (!product)
    return (
      <div className="h-screen bg-[#0a1a32ff] items-center flex flex-col gap-2 justify-center">
        <p className="font-bold text-2xl text-red-500">Product not found</p>
        <Link href="/scents">
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
      <div className="flex lg:flex-row flex-col pt-10 pb-20 px-4 lg:px-10">
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
          <div className="flex items-center w-fit pl-2 mt-6 rounded-full">
            <span className="mr-2">Qty: </span>
            <Button
              className="bg-cyan-100 rounded-l-full text-black hover:bg-cyan-200 active:scale-110 transition-transform transform duration-300"
              onClick={handleDecrement}
            >
              <Minus size={15} />
            </Button>
            <p className="mx-2 text-cyan-300">
              <strong>{quantity}</strong>
            </p>
            <Button
              className="bg-cyan-100 rounded-r-full text-black hover:bg-cyan-200 active:scale-110 transition-transform transform duration-300"
              onClick={handleIncrement}
            >
              <Plus size={15} />
            </Button>
          </div>
          <div className="flex items-center justify-center mt-9 gap-2">
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
      <div className="relative ml-0 md:ml-28">
        <h1 className="py-2 text-3xl lg:text-4xl font-bold px-5">
          You May Also Like
        </h1>
      </div>
      <div className="w-full px-5 pt-10 flex justify-center">
        <Carousel
          className="w-full max-w-[1150px]"
          opts={{
            loop: true,
            align: "start",
            slidesToScroll: 1,
          }}
          plugins={[plugin.current]}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent className="mb-4 mx-[1px]">
            {scents.slice(0, 6).map((scent: Product, index: number) => (
              <CarouselItem
                key={index}
                className="pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
              >
                <Card
                  key={index}
                  className="border-[#0a1a32ff] bg-transparent/40 text-white shadow-cyan-400"
                >
                  <Link href={`/scents/${scent.id}`}>
                    <Ripple>
                      <CardContent className="p-2">
                        <Image
                          alt={scent.name}
                          className="w-full aspect-[3/4] rounded-xl object-cover"
                          src={urlFor(scent.image[0]).url()}
                          width={1000}
                          height={1000}
                        />
                      </CardContent>
                      <CardFooter className="text-small mt-4 justify-between rounded-b-xl">
                        <b>{scent.name}</b>
                        <p className="text-default-500">{scent.price}</p>
                      </CardFooter>
                    </Ripple>
                  </Link>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="absolute md:top-0 botton-0 right-0 flex items-center justify-between -translate-x-28 md:-translate-x-20 md:-translate-y-16 px-5 my-4 md:my-0">
            <CarouselPrevious className="w-10 h-10 text-cyan-300 hover:text-cyan-300 border-cyan-300 bg-transparent/40 hover:bg-transparent/40 rounded-full active:scale-95 transition-transform transform duration-300" />
            <CarouselNext className="w-10 h-10 text-cyan-300 hover:text-cyan-300 border-cyan-300 bg-transparent/40 hover:bg-transparent/40 rounded-full active:scale-95 transition-transform transform duration-300" />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default ProductDetails;


{/* <p>{product.description}</p>
{cart.map((item) => (
  <div className="flex items-center w-fit pl-2 mt-6 rounded-full">
    <span className="mr-2">Qty: </span>
    <Button
      className="bg-cyan-100 rounded-l-full text-black hover:bg-cyan-200 active:scale-110 transition-transform transform duration-300"
      onClick={() => decrementQuantity(item)}
    >
      <Minus size={15} />
    </Button>
    <p className="mx-2 text-cyan-300">
      <strong>{item.quantity}</strong>
    </p>
    <Button
      className="bg-cyan-100 rounded-r-full text-black hover:bg-cyan-200 active:scale-110 transition-transform transform duration-300"
      onClick={() => incrementQuantity(item)}
    >
      <Plus size={15} />
    </Button>
  </div>
))}
<div className="flex items-center justify-center mt-9 gap-2"> */}