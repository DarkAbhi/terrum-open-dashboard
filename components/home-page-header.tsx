"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { ModeToggle } from "./theme-toggle";
import { Separator } from "@/components/ui/separator";


export const LandingHeader = () => {
  const [isScrolled, setIsScrolled] = useState(() =>
    typeof window !== "undefined" ? window.scrollY > 0 : false
  );
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Add scroll event listener
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={`sticky top-0 z-50 ${
        isScrolled ? "backdrop-blur" : "bg-transparent"
      }`}
    >
      {/* Add an additional wrapper for the blurred background */}
      {isScrolled && <div className="backdrop-blur-md absolute inset-0"></div>}
      <div className="relative flex items-center justify-between w-full p-4">
        <Link href="/">
          <div className="flex items-center">
            {/* Replace 'logo.svg' with the path to your logo image */}
            <img
              src="/terrum_circle.svg"
              alt="Logo"
              className="w-10 h-auto lg:ml-8"
            />
            <h1 className={`text-lg font-semibold ml-5`}>Terrum</h1>
          </div>
        </Link>

        {/* Show hamburger menu in mobile view */}
        {/* <div className="lg:hidden">
          <button
            onClick={toggleMobileMenu}
            className="p-2 text-white focus:outline-none"
          >
            <svg
              className={`w-6 h-6 ${isMobileMenuOpen ? "hidden" : "block"}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
            <svg
              className={`w-6 h-6 ${isMobileMenuOpen ? "block" : "hidden"}`}
              fill="none"
              stroke="white"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div> */}

        {/* Regular navigation links */}
        <div className="hidden lg:flex items-center">
          {/* Add items-center to center the Support option */}
          {/* <div className="mr-4">Support</div> */}
          {/* Add the login button */}
          {/* <button
            onClick={() => {}}
            className="px-4 py-2 rounded-md bg-slate-200 text-black mr-5"
          >Login</button> */}
          <ModeToggle />
        </div>
      </div>
      {/* Mobile menu */}
      <div
        className={`lg:hidden w-full bg-black z-40 p-4 absolute top-20 right-0 transform transition-transform duration-300 ${
          isMobileMenuOpen ? "scale-y-100" : "scale-y-0"
        }`}
        style={{ transformOrigin: "top" }}
      >
        <div className="flex flex-col items-end space-y-4">
          {/* Replace with mobile navigation links */}
          <div className="text-white">Support</div>
          <div className="text-white">Login</div>
        </div>
      </div>
      <Separator />
    </header>
  );
};
