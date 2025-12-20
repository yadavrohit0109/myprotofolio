import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Book,
  FileText,
  ChevronDown,
  Moon,
  Sun,
  LogIn,
  UserPlus,
} from "lucide-react";
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
      className={`fixed top-0 left-0 w-full z-[100] backdrop-blur-md shadow-lg transition-colors duration-500 ${
        darkMode
          ? "bg-gradient-to-b from-zinc-900/90 to-black/80 border-b border-indigo-500/20"
          : "bg-gradient-to-b from-white/80 to-gray-100/80 border-b border-gray-300/30"
      }`}
    >
      <div className="max-w-screen-2xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* LOGO */}
        <a href="/" className="flex items-center gap-3">
          <motion.img
            src={logo}
            width={48}
            height={48}
            alt="Logo"
            className="rounded-full shadow-lg"
            whileHover={{ scale: 1.1, rotate: 8 }}
          />
          <span
            className={`text-xl font-extrabold ${
              darkMode
                ? "bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent"
                : "bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
            }`}
          >
            Yadav Portfolio
          </span>
        </a>

        {/* RIGHT SECTION */}
        <div className="flex items-center gap-4">

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-6 font-semibold">
            {["Home", "About", "Projects", "Reviews"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`transition ${
                  darkMode
                    ? "text-white hover:text-cyan-400"
                    : "text-gray-800 hover:text-indigo-600"
                }`}
              >
                {item}
              </a>
            ))}
          </nav>

          {/* STUDY MATERIAL */}
          <div className="relative">
            <button
              onClick={() => setStudyOpen(!studyOpen)}
              className="flex items-center gap-1 px-3 py-2 rounded-full font-semibold bg-gradient-to-r from-indigo-500 to-purple-500 text-white"
            >
              <Book size={16} />
              Study
              <ChevronDown size={16} />
            </button>

            <AnimatePresence>
              {studyOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className={`absolute top-12 right-0 w-64 rounded-xl p-3 shadow-xl ${
                    darkMode
                      ? "bg-zinc-900 border border-indigo-400/30"
                      : "bg-white border border-gray-300"
                  }`}
                >
                  {semesters.map((sem) => (
                    <div key={sem} className="flex justify-between py-1">
                      <span className={darkMode ? "text-white" : "text-black"}>
                        {sem}
                      </span>
                      <div className="flex gap-2">
                        <Link
                          to={`/study-material/${sem.toLowerCase()}/notes`}
                          className="text-xs bg-emerald-500 text-white px-2 py-1 rounded"
                        >
                          Notes
                        </Link>
                        <Link
                          to={`/study-material/${sem.toLowerCase()}/paper`}
                          className="text-xs bg-sky-500 text-white px-2 py-1 rounded"
                        >
                          Paper
                        </Link>
                      </div>
                    </div>
                  ))}
                  <Link
                    to="/study-material/syllabus"
                    className="mt-2 flex items-center gap-2 text-sm text-indigo-400"
                  >
                    <FileText size={16} /> Syllabus
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* LOGIN */}
          <a
            href="/Login.html"
            className={`hidden md:flex items-center gap-2 px-4 py-2 rounded-xl border transition ${
              darkMode
                ? "border-indigo-400 text-white hover:bg-indigo-500/20"
                : "border-indigo-500 text-indigo-600 hover:bg-indigo-100"
            }`}
          >
            <LogIn size={16} /> Login
          </a>

          {/* SIGNUP */}
          {/* <a
            href="/Signup.html#signup"
            className="hidden md:flex items-center gap-2 px-5 py-2 rounded-xl font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:scale-105 transition"
          >
            <UserPlus size={16} /> Sign Up
          </a> */}

          {/* DARK MODE */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full border"
          >
            {darkMode ? <Moon size={16} /> : <Sun size={16} />}
          </button>

          {/* MOBILE MENU */}
          <button className="md:hidden" onClick={() => setNavOpen(!navOpen)}>
            ☰
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {navOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className={`md:hidden absolute right-4 top-16 w-56 rounded-xl shadow-xl p-4 ${
              darkMode ? "bg-zinc-900 text-white" : "bg-white text-black"
            }`}
          >
            <a href="/Login.html" className="block py-2">
              Login
            </a>
            <a href="/Signup.html#signup" className="block py-2 font-bold">
              Sign Up
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
