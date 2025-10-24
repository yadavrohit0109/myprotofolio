import React, { useState } from "react";
import Navbar from "./Navbar";

// ✅ Use image path directly from public/assets
const logo = "/assets/phoenix.png";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-b from-black/80 to-transparent backdrop-blur-md shadow-md">
      <div className="max-w-screen-2xl mx-auto px-4 md:px-6 py-3 flex items-center justify-between md:grid md:grid-cols-[1fr,3fr,1fr]">
        
        {/* Logo */}
        <a href="/" className="flex items-center space-x-2">
          <img
            src={logo}
            width={40}
            height={40}
            alt="Yadav AI"
            className="rounded-full"
          />
          <span className="text-xl font-bold text-white tracking-wider hidden sm:inline-block">
            Yadav <span className="text-indigo-400">AI</span>
          </span>
        </a>

        {/* Center Nav */}
        <div className="relative md:justify-self-center">
          <button
            className="md:hidden text-white text-3xl focus:outline-none"
            onClick={() => setNavOpen(!navOpen)}
          >
            <span className="material-symbols-rounded">
              {navOpen ? "close" : "menu"}
            </span>
          </button>

          <Navbar navOpen={navOpen} />
        </div>

        {/* Right side - Actions */}
        <div className="hidden md:flex gap-4 justify-end items-center">
          <a
            href="#contact"
            className="text-sm px-4 py-2 border border-purple-500 text-purple-300 rounded-md hover:bg-purple-600 hover:text-white transition"
          >
            Contact
          </a>
        </div>
      </div>

      {/* Animated underline */}
      <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 animate-pulse" />
    </header>
  );
};

export default Header;


 {/* <a href="/login" className="text-sm px-4 py-2 border border-indigo-400 text-white rounded-md hover:bg-indigo-600">
  Login
</a>
<a href="/signup" className="text-sm px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600">
  Sign Up
</a> */}
