"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export const FloatingNav = ({
  navItems,
  className = "",
}: {
  navItems: {
    name: string;
    link: string;
  }[];
  className?: string;
}) => {
  return (
    <nav className={`sticky top-0 z-50 ${className}`}>
      <motion.div 
        className="hidden md:flex max-w-fit fixed top-4 inset-x-0 mx-auto border-2 border-[#73ffedff] rounded-full bg-transparent/40 backdrop-blur-sm drop-shadow-2xl z-[5000] px-8 py-2 items-center justify-center space-x-4 overflow-hidden"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {navItems.map((navItem, idx: number) => (
          <div key={`nav-item-${idx}`}>
            <Link
              href={navItem.link}
              className="relative items-center flex space-x-1 text-white hover:text-cyan-100 transition-colors duration-200"
            >
              <span className="hidden sm:block text-lg font-bold">
                {navItem.name}
              </span>
            </Link>
          </div>
        ))}
      </motion.div>
    </nav>
  );
};

