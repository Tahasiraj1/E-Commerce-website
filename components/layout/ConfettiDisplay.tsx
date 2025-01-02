"use client"

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useOrder } from "@/lib/OrderContext";

const DynamicConfetti = dynamic(() => import("react-confetti"), { ssr: false });

type ConfettiProps = {
  width: number;
  height: number;
};

const confettiColors = [
  "#16A085",
  "#1ed9fa",
  "#D946EF",
  "#8E44AD",
  "#D946EF",
  "#f52525",
  "#16A085",
];

export default function ConfettiDisplay() {
  const { orderPlaced, setOrderPlaced } = useOrder();
  const [windowSize, setWindowSize] = useState<ConfettiProps>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (orderPlaced) {
      const timer = setTimeout(() => {
        setOrderPlaced(false);
      }, 5000); // Reset after 5 seconds
      return () => clearTimeout(timer);
    }
  }, [orderPlaced, setOrderPlaced]);

  if (!orderPlaced) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      <DynamicConfetti
        width={windowSize.width}
        height={windowSize.height}
        recycle={false}
        numberOfPieces={800}
        colors={confettiColors}
      />
    </div>
  );
}

