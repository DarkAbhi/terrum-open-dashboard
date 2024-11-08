"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { ModeToggle } from "./theme-toggle";
import { Separator } from "@/components/ui/separator";

export const LandingHeader = () => {
  const [blurAmount, setBlurAmount] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Adjust this factor to control the speed and amount of blur
      const newBlur = Math.min(window.scrollY / 100, 10);
      setBlurAmount(newBlur);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className="sticky top-0 z-50 bg-transparent"
      style={{ backdropFilter: `blur(${blurAmount}px)` }}
    >
      <div className="relative flex items-center justify-between w-full p-4">
        <Link href="/">
          <div className="flex items-center">
            <img
              src="/terrum_circle.svg"
              alt="Logo"
              className="w-10 h-auto lg:ml-8"
            />
            <h1 className="text-lg font-semibold ml-5">Terrum</h1>
          </div>
        </Link>

        <div className="hidden lg:flex items-center">
          <ModeToggle />
        </div>
      </div>

      <div
        className={`lg:hidden w-full bg-black z-40 p-4 absolute top-20 right-0 transform transition-transform duration-300 ${
          isMobileMenuOpen ? "scale-y-100" : "scale-y-0"
        }`}
        style={{ transformOrigin: "top" }}
      >
        <div className="flex flex-col items-end space-y-4">
          <div className="text-white">Support</div>
          <div className="text-white">Login</div>
        </div>
      </div>
      <Separator />
    </header>
  );
};
