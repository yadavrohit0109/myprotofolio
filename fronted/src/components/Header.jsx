import React, { useState } from "react";
import Navbar from "./Navbar";
import { motion, AnimatePresence } from "framer-motion";

const logo = "/assets/phoenix.png";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-[100] bg-gradient-to-b from-black/95 to-black/70 backdrop-blur-md shadow-lg border-b border-indigo-500/20">
      <div className="relative max-w-screen-2xl mx-auto px-4 md:px-6 py-3 flex items-center justify-between">

        {/* 🔹 Animated Logo + Title (Left on Desktop) */}
        <div className="flex items-center space-x-3 z-[105]">
          {/* Logo Animation */}
          <motion.a
            href="/"
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 6 }}
          >
            <img
              src={logo}
              width={50}
              height={50}
              alt="Yadav Portfolio Logo"
              className="rounded-full shadow-lg"
            />
          </motion.a>

          {/* Title - shown next to logo on desktop */}
          <div className="hidden md:block">
            <motion.span
              className="text-2xl font-extrabold tracking-wide bg-gradient-to-r 
                         from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent 
                         font-sans drop-shadow-lg"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              Yadav <span className="text-indigo-400">Portfolio</span>
            </motion.span>
          </div>
        </div>

        {/* 🔹 Center Title (Mobile/Tablet only) */}
        <motion.div
          className="absolute left-1/2 -translate-x-1/2 md:hidden z-[105] text-center"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            className="text-xl font-extrabold tracking-wide bg-gradient-to-r 
                       from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent 
                       font-sans drop-shadow-lg"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            Yadav <span className="text-indigo-400">Portfolio</span>
          </motion.span>
        </motion.div>

        {/* 🔹 Right Side (Hamburger + Desktop Actions) */}
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

          {/* 💻 Desktop Navbar + Contact */}
          <div className="hidden md:flex items-center gap-8">
            <Navbar />

            {/* ✉️ Contact button */}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 
                         text-white font-semibold rounded-full shadow-md hover:shadow-purple-400/50 
                         transition-all duration-300 border border-purple-500/40"
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
                      <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-indigo-400 to-pink-400 transition-all group-hover:w-full"></span>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* 🌈 Animated Gradient Line Bottom */}
      <motion.div
        className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </header>
  );
};

export default Header;
