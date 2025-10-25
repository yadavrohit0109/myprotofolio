import React, { useState } from "react";
import Navbar from "./Navbar";
import { motion, AnimatePresence } from "framer-motion";

const logo = "/assets/phoenix.png";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-[100] bg-gradient-to-b from-black/90 to-black/70 backdrop-blur-md shadow-lg border-b border-indigo-500/20">
      <div className="relative max-w-screen-2xl mx-auto px-4 md:px-6 py-3 flex items-center justify-between">

        {/* 🔹 Logo (Always Left) */}
        <motion.a
          href="/"
          className="flex items-center space-x-2 z-[105]"
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 6 }}
        >
          <img
            src={logo}
            width={45}
            height={45}
            alt="Yadav Portfolio Logo"
            className="rounded-full"
          />
        </motion.a>

        {/* 🔹 Center text (Mobile/Tablet only) */}
        <div className="absolute left-1/2 -translate-x-1/2 md:hidden z-[105] text-center">
          <span className="text-xl font-bold text-white tracking-wide font-sans drop-shadow-md">
            Yadav <span className="text-indigo-400">Portfolio</span>
          </span>
        </div>

        {/* 🔹 Right side */}
        <div className="relative z-[110] flex items-center gap-3">
          {/* ☰ Hamburger (Mobile/Tablet only) */}
          <button
            className="md:hidden text-white text-3xl focus:outline-none"
            onClick={() => setNavOpen(!navOpen)}
          >
            <span className="material-symbols-rounded">
              {navOpen ? "close" : "menu"}
            </span>
          </button>

          {/* 💻 Desktop Navbar */}
          <div className="hidden md:flex items-center gap-8">
            <Navbar />

            {/* 🟣 Contact button (Desktop only) */}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 
                         text-white font-semibold rounded-full shadow-md hover:shadow-purple-400/40 
                         transition-all duration-300 border border-purple-500/30"
            >
              Contact
            </motion.a>
          </div>
        </div>

        {/* ✅ Mobile Dropdown Menu */}
        <AnimatePresence>
          {navOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="absolute top-14 right-0 w-56 bg-gradient-to-b from-indigo-950 via-purple-900 to-pink-900 
                         border border-indigo-400/30 rounded-2xl shadow-2xl md:hidden z-[120] backdrop-blur-lg overflow-hidden"
            >
              <ul className="flex flex-col gap-3 py-5 text-center">
                {["Home", "About", "Projects", "Reviews", "Contact"].map((item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <a
                      href={`#${item.toLowerCase()}`}
                      onClick={() => setNavOpen(false)}
                      className="group relative inline-block text-white font-semibold text-lg tracking-wide font-mono transition-all"
                    >
                      {item}
                      {/* Animated underline */}
                      <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-indigo-400 to-pink-400 transition-all group-hover:w-full"></span>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* 🌈 Animated Bottom Border */}
      <motion.div
        className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </header>
  );
};

export default Header;
