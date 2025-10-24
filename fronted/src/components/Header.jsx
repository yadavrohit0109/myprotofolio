import React, { useState } from "react";
import Navbar from "./Navbar";
import { motion, AnimatePresence } from "framer-motion";

const logo = "/assets/phoenix.png";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-[100] bg-gradient-to-b from-black/90 to-black/70 backdrop-blur-md shadow-md">
      <div className="relative max-w-screen-2xl mx-auto px-4 md:px-6 py-3 flex items-center justify-between">
        
        {/* Logo - always left */}
        <a href="/" className="flex items-center space-x-2 z-[105]">
          <img
            src={logo}
            width={40}
            height={40}
            alt="Yadav AI"
            className="rounded-full"
          />
        </a>

        {/* Center text only on mobile/tablet */}
        <div className="absolute left-1/2 -translate-x-1/2 md:hidden z-[105] text-center">
          <span className="text-xl font-bold text-white tracking-wide font-sans">
            Yadav <span className="text-indigo-400">Portfolio</span>
          </span>
        </div>

        {/* Right side - hamburger / desktop menu */}
        <div className="relative z-[110] flex items-center">
          {/* Hamburger button - only on mobile/tablet */}
          <button
            className="md:hidden text-white text-3xl focus:outline-none"
            onClick={() => setNavOpen(!navOpen)}
          >
            <span className="material-symbols-rounded">
              {navOpen ? "close" : "menu"}
            </span>
          </button>

          {/* Mobile Dropdown Menu */}
          <AnimatePresence>
            {navOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="absolute top-12 right-0 w-52 bg-gradient-to-b from-indigo-900 via-purple-900 to-pink-900 border border-indigo-400/30 rounded-xl shadow-xl md:hidden z-[120] backdrop-blur-lg"
              >
                <ul className="flex flex-col gap-3 py-4 text-center">
                  {["Home", "About", "Projects", "Reviews", "Contact"].map((item) => (
                    <li key={item}>
                      <a
                        href={`#${item.toLowerCase()}`}
                        onClick={() => setNavOpen(false)}
                        className="text-white font-semibold text-lg hover:text-cyan-400 transition font-mono"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Desktop Nav */}
          <div className="hidden md:block">
            <Navbar navOpen={navOpen} />
          </div>
        </div>

        {/* Desktop centered text (optional, can hide) */}
        <div className="hidden md:block absolute left-1/2 -translate-x-1/2 z-[105]">
          <span className="text-xl font-bold text-white tracking-wide font-sans">
            Yadav <span className="text-indigo-400">Portfolio</span>
          </span>
        </div>
      </div>

      {/* Animated underline */}
      <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 animate-pulse" />
    </header>
  );
};

export default Header;
