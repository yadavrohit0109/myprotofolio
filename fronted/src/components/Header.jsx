import React, { useState } from "react";
import Navbar from "./Navbar";
import { motion, AnimatePresence } from "framer-motion";

const logo = "/assets/phoenix.png";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-[100] bg-gradient-to-b from-black/80 to-transparent backdrop-blur-md shadow-md">
      <div className="relative max-w-screen-2xl mx-auto px-4 md:px-6 py-3 flex items-center justify-between md:grid md:grid-cols-[1fr,3fr,1fr]">
        
        {/* 🔥 Logo */}
        <a href="/" className="flex items-center space-x-2 z-[105]">
          <img
            src={logo}
            width={40}
            height={40}
            alt="Yadav AI"
            className="rounded-full"
          />
          <span className="text-xl font-bold text-white tracking-wider hidden sm:inline-block">
            Yadav <span className="text-indigo-400">Portfolio</span>
          </span>
        </a>

        {/* 🔥 Center Nav */}
        <div className="relative md:justify-self-center z-[110]">
          {/* Hamburger button (mobile only) */}
          <button
            className="md:hidden text-white text-3xl focus:outline-none"
            onClick={() => setNavOpen(!navOpen)}
          >
            <span className="material-symbols-rounded">
              {navOpen ? "close" : "menu"}
            </span>
          </button>

          {/* ✅ Mobile Dropdown Menu */}
          <AnimatePresence>
            {navOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="absolute top-12 right-0 w-48 bg-[#0b0f1c] border border-indigo-400/30 rounded-xl shadow-xl md:hidden z-[120]"
              >
                <ul className="flex flex-col gap-3 text-gray-300 py-4 text-center">
                  <li>
                    <a href="#home" onClick={() => setNavOpen(false)} className="hover:text-indigo-400">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#about" onClick={() => setNavOpen(false)} className="hover:text-indigo-400">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#projects" onClick={() => setNavOpen(false)} className="hover:text-indigo-400">
                      Projects
                    </a>
                  </li>
                  <li>
                    <a href="#reviews" onClick={() => setNavOpen(false)} className="hover:text-indigo-400">
                      Reviews
                    </a>
                  </li>
                  <li>
                    <a href="#contact" onClick={() => setNavOpen(false)} className="hover:text-indigo-400">
                      Contact
                    </a>
                  </li>
                </ul>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Desktop Nav */}
          <div className="hidden md:block">
            <Navbar navOpen={navOpen} />
          </div>
        </div>

        {/* 🔥 Right Actions */}
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
