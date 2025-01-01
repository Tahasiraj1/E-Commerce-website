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

const navItems = [
  { name: "HOME", link: "/" },
  { name: "SCENTS", link: "/scents" },
  { name: "ABOUT", link: "/about" },
  { name: "CONTACT", link: "/contact" },
];

const Header = () => {
  return (
    <header className="bg-[#0a1a32ff] font-extrabold w-full">
      <div className="h-20 flex items-center justify-between drop-shadow-2xl px-4 md:px-8">
        <h1 className="font-bold mt-2 text-2xl text-white animate-in slide-in-from-left-full transition-transform transform duration-1000">
          FRAGRANCE<span className="text-[#73ffedff]">WISPHERER</span>
        </h1>
        <div className="flex items-center justify-center animate-in slide-in-from-right-full transition-transform transform duration-1000">
          <FaOpencart className="w-6 h-6 text-[#73ffedff]" />
          <Sheet>
            <SheetTrigger asChild>
              <Button
                size="icon"
                className="md:hidden text-[#73ffedff] rounded-full bg-transparent/40 hover:bg-transparent"
              >
                <RiMenu3Line className="w-6 h-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="pt-20 border-r-0 border-t-0 border-b-0 border-l-2 border-emerald-600"
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
      <FloatingNav navItems={navItems} className="hidden md:block" />
    </header>
  );
};

export default Header;

