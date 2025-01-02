"use client";

import React, { useEffect, useState } from "react";
import { RiMenu3Line } from "react-icons/ri";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { FloatingNav } from "./Navbar";
import { FaOpencart } from "react-icons/fa6";
import { Badge } from "../ui/badge";
import { useCart } from "@/lib/CartContext";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { X } from "lucide-react";
import { client } from "@/sanity/lib/client";
import { Image as SanityImage } from "@sanity/types";
import { CartItem } from "@/lib/CartContext";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";

const navItems = [
  { name: "HOME", link: "/" },
  { name: "SCENTS", link: "/scents" },
  { name: "ABOUT", link: "/about" },
  { name: "CONTACT", link: "/contact" },
];

interface Product {
  id: string;
  name: string;
  quantity: number;
  price: number;
  image: SanityImage;
  ratings: string;
  tags: string[];
  description: string;
}

const Header = () => {
  const { cart, removeFromCart, clearCart } = useCart();
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

  const handleRemoveFromCart = (item: CartItem) => {
    const itemToRemove = scents.find((scent) => scent.id === item.id);
    if (itemToRemove) {
      removeFromCart(itemToRemove);
    }
  };

  const handleClearCart = () => {
    clearCart();
  };

  const cartItems = cart.length;

  return (
    <header className="bg-[#0a1a32ff] font-extrabold w-full">
      <div className="h-20 flex items-center justify-between drop-shadow-2xl px-2 md:px-8">
        <h1 className="font-bold mt-2 text-md text-white animate-in slide-in-from-left-full transition-transform transform duration-1000">
          FRAGRANCE<span className="text-[#73ffedff]">WISPHERER</span>
        </h1>
        <FloatingNav navItems={navItems} className="hidden lg:block" />
        <div className="flex items-center justify-center animate-in slide-in-from-right-full transition-transform transform duration-1000">
          <Sheet>
            <SheetTrigger asChild className="relative mr-4 lg:mr-0">
              <button>
                <FaOpencart className="relative w-6 h-6 text-[#73ffedff]" />
                <Badge className="absolute -top-3 -right-2 w-4 h-4 items-center justify-center rounded-full bg-[#73ffedff] hover:bg-[#73ffedff] animate-pulse text-black">
                  {cartItems}
                </Badge>
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="pt-16 border-r-0 border-t-0 border-b-0 border-l-2 border-cyan-400 bg-[#0a1a32ff]"
            >
              <SheetHeader>
                <SheetTitle className="sr-only">Shopping Cart</SheetTitle>
              </SheetHeader>
              {cartItems === 0 ? (
                <p className="text-center text-lg text-cyan-300">Your cart is empty</p>
              ) : (
                <ul className="flex flex-col">
                  <ScrollArea className="h-[calc(100vh-80px)] pr-4 w-full">
                    {cart.map((item, index) => (
                      <li className="mb-4" key={index}>
                        <div className="relative flex items-center gap-4 bg-[#0d2346] p-2 rounded-xl">
                          <button
                            className="absolute top-0 right-0 group"
                            onClick={() => handleRemoveFromCart(item)}
                          >
                            <X className="w-6 h-6 text-[#73ffedff] group-active:rotate-180 duration-300 transition-transform transform " />
                          </button>
                          <Image
                            src={urlFor(item.image).url()}
                            alt={item.name}
                            width={100}
                            height={100}
                            className="rounded-xl"
                          />
                          <div className="flex flex-col text-white">
                            <span className="text-lg">{item.name}</span>
                            <span className="text-lg">{item.price}</span>
                          </div>
                        </div>
                      </li>
                    ))}
                    <Button
                      variant="expandIcon"
                      className="border text-lg rounded-full font-semibold border-cyan-300 text-white w-full active:scale-95 duration-300 transition-transform transform drop-shadow-xl"
                      onClick={handleClearCart}
                    >
                      CLEAR CART
                    </Button>
                    <ScrollBar orientation="vertical" />
                  </ScrollArea>
                </ul>
              )}
            </SheetContent>
          </Sheet>
          <Sheet>
            <SheetTrigger asChild>
              <Button
                size="icon"
                className="lg:hidden text-[#73ffedff] rounded-full bg-transparent/40 hover:bg-transparent"
              >
                <RiMenu3Line className="w-6 h-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="pt-20 border-r-0 border-t-0 border-b-0 border-l-2 border-cyan-400 bg-[#0a1a32ff]"
            >
              <SheetHeader>
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              </SheetHeader>
              <nav>
                <ul className="flex flex-col gap-4">
                  {navItems.map((item, index) => (
                    <li key={index}>
                      <Button
                        variant="linkHover2"
                        asChild
                        className="w-full justify-start"
                      >
                        <Link href={item.link}>{item.name}</Link>
                      </Button>
                    </li>
                  ))}
                </ul>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
