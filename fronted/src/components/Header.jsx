import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Book, FileText, ChevronDown, Moon, Sun } from "lucide-react";
import { Link } from "react-router-dom";

const logo = "/assets/phoenix.png";

const Header = () => {
  const [studyOpen, setStudyOpen] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  const semesters = [
    "Semester1",
    "Semester2",
    "Semester3",
    "Semester4",
    "Semester5",
    "Semester6",
  ];

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[100] transition-colors duration-500 ${
        darkMode
          ? "bg-gradient-to-b from-zinc-900/90 via-black/80 to-zinc-900/70 border-b border-indigo-500/20"
          : "bg-gradient-to-b from-white/80 via-gray-100/70 to-white/90 border-b border-gray-300/30"
      } backdrop-blur-md shadow-lg`}
    >
      <div className="relative max-w-screen-2xl mx-auto px-4 md:px-6 py-3 flex items-center justify-between">
        {/* 🔹 Left: Logo + Animated Title */}
        <div className="flex items-center gap-3 z-[110]">
          <motion.a
            href="/"
            className="flex items-center space-x-2"
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 6 }}
          >
            <motion.img
              src={logo}
              width={50}
              height={50}
              alt="Yadav Portfolio Logo"
              className="rounded-full shadow-lg"
              whileHover={{ scale: 1.1, rotate: 10 }}
              transition={{ type: "spring", stiffness: 200 }}
            />
          </motion.a>

          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <motion.span
              className={`text-xl md:text-2xl font-extrabold tracking-wide font-sans drop-shadow-lg ${
                darkMode
                  ? "bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent"
                  : "bg-gradient-to-r from-purple-700 via-pink-600 to-indigo-700 bg-clip-text text-transparent"
              }`}
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              Yadav <span className="text-indigo-400">Portfolio</span>
            </motion.span>
          </motion.div>
        </div>

        {/* 🔹 Right: Navbar Links + Study Material + Dark Mode */}
        <div className="flex items-center gap-4 md:gap-6 relative z-[120]">

          {/* Desktop Links */}
          <nav className="hidden md:flex gap-6 items-center font-semibold tracking-wide">
            {["Home", "About", "Projects", "Reviews"].map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                whileHover={{ scale: 1.1, color: "#00ffff" }}
                transition={{ type: "spring", stiffness: 300 }}
                className={`text-lg transition-colors ${
                  darkMode ? "text-white hover:text-cyan-400" : "text-gray-800 hover:text-indigo-600"
                }`}
              >
                {item}
              </motion.a>
            ))}

            {/* Contact Button - Standout */}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.1, rotate: 3 }}
              transition={{ type: "spring", stiffness: 300 }}
              className={`px-4 py-2 rounded-full text-white font-bold text-lg shadow-lg border-2 transition-all ${
                darkMode
                  ? "bg-gradient-to-r from-pink-500 to-purple-600 border-pink-400 hover:from-purple-500 hover:to-pink-600"
                  : "bg-gradient-to-r from-indigo-500 to-purple-500 border-indigo-400 hover:from-purple-500 hover:to-indigo-600"
              }`}
            >
              Contact
            </motion.a>
          </nav>

          {/* Study Material */}
          <div className="relative">
  <button
    onClick={() => setStudyOpen(!studyOpen)}
    className={`flex items-center gap-1 px-3 py-2 rounded-full font-semibold shadow-md transition-all duration-300 ${
      darkMode
        ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-pink-600 hover:to-indigo-600"
        : "bg-gradient-to-r from-indigo-300 to-purple-300 text-gray-900 hover:from-pink-300 hover:to-indigo-400"
    }`}
  >
    <Book className="w-4 h-4" />
    Study Material
    <ChevronDown className="w-4 h-4 mt-[1px]" />
  </button>
            {/* Dropdown */}
            <AnimatePresence>
    {studyOpen && (
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.2 }}
        className={`absolute top-12 right-0 md:left-0 w-64 backdrop-blur-md rounded-xl p-3 shadow-xl z-50 border ${
          darkMode
            ? "bg-gradient-to-b from-zinc-900/95 via-indigo-900/80 to-purple-900/70 border-indigo-400/30"
            : "bg-gradient-to-b from-white via-indigo-50 to-purple-100 border-gray-300/50"
        }`}
      >
        <div className="flex flex-col gap-2">
          {semesters.map((sem) => (
            <div key={sem} className="p-2 rounded-lg hover:bg-white/10 transition-all">
              <div className="flex justify-between items-center">
                <span className={`font-semibold text-sm ${darkMode ? "text-white" : "text-gray-900"}`}>{sem}</span>
                <div className="flex gap-2">
                  <Link
                    to={`/study-material/${sem.toLowerCase()}/notes`}
                    className={`text-xs px-2 py-1 rounded-md ${
                      darkMode
                        ? "bg-emerald-600/80 hover:bg-emerald-500 text-white"
                        : "bg-emerald-300 hover:bg-emerald-400 text-black"
                    }`}
                  >
                    Notes
                  </Link>
                  <Link
                    to={`/study-material/${sem.toLowerCase()}/paper`}
                    className={`text-xs px-2 py-1 rounded-md ${
                      darkMode
                        ? "bg-sky-600/80 hover:bg-sky-500 text-white"
                        : "bg-sky-300 hover:bg-sky-400 text-black"
                    }`}
                  >
                    Paper
                  </Link>
                </div>
              </div>
            </div>
          ))}
          <hr className="border-t border-white/10 my-2" />
          <Link
            to="/study-material/syllabus"
            className={`flex items-center gap-2 px-3 py-2 rounded-lg transition text-sm ${
              darkMode ? "bg-white/10 hover:bg-white/20 text-white" : "bg-gray-200 hover:bg-gray-300 text-black"
            }`}
          >
            <FileText className="w-4 h-4" />
            <span className="font-semibold">Syllabus</span>
          </Link>
        </div>
      </motion.div>
    )}
  </AnimatePresence>
</div>






          {/* Dark Mode Toggle */}
          <motion.button
            whileHover={{ rotate: 20, scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 rounded-full border transition-all duration-300 shadow-md ${
              darkMode ? "bg-zinc-800 border-indigo-400 text-yellow-300" : "bg-white border-gray-300 text-gray-700"
            }`}
          >
            {darkMode ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
          </motion.button>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-3xl focus:outline-none"
            onClick={() => setNavOpen(!navOpen)}
          >
            <span className="material-symbols-rounded">
              {navOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {navOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className={`absolute top-16 right-0 w-56 border rounded-2xl shadow-2xl md:hidden z-[120] backdrop-blur-lg overflow-hidden ${
              darkMode
                ? "bg-gradient-to-b from-indigo-950 via-purple-900 to-pink-900 border-indigo-400/30"
                : "bg-gradient-to-b from-white via-indigo-50 to-pink-50 border-gray-300/50"
            }`}
          >
            <ul className="flex flex-col gap-3 py-5 text-center">
              {["Home", "About", "Projects", "Reviews"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setNavOpen(false)}
                    className={`font-semibold text-lg transition-all ${
                      darkMode ? "text-white hover:text-indigo-400" : "text-gray-800 hover:text-indigo-600"
                    }`}
                  >
                    {item}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  onClick={() => setNavOpen(false)}
                  className={`px-4 py-2 rounded-full font-bold text-lg shadow-lg border transition-all ${
                    darkMode
                      ? "bg-gradient-to-r from-pink-500 to-purple-600 border-pink-400 hover:from-purple-500 hover:to-pink-600 text-white"
                      : "bg-gradient-to-r from-indigo-500 to-purple-500 border-indigo-400 hover:from-purple-500 hover:to-indigo-600 text-white"
                  }`}
                >
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
