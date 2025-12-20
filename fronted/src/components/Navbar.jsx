import React, { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  FileText,
  Book,
  User,
  LogOut,
  Bot,
} from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = ({ navOpen = false, isAuthenticated = false, user }) => {
  const lastActiveLink = useRef(null);
  const activeBox = useRef(null);
  const [studyOpen, setStudyOpen] = useState(false);

  const semesters = [
    "Semester1",
    "Semester2",
    "Semester3",
    "Semester4",
    "Semester5",
    "Semester6",
  ];

  const navItems = [
    { label: "Home", link: "/" },
    { label: "About", link: "#about" },
    { label: "Projects", link: "#ProjectCard" },
    { label: "Reviews", link: "#reviews" },
    { label: "AI Assistant", link: "/ai", isAI: true },
    { label: "Study Material", isDropdown: true },
  ];

  const initActiveBox = () => {
    if (lastActiveLink.current && activeBox.current) {
      const el = lastActiveLink.current;
      activeBox.current.style.top = `${el.offsetTop}px`;
      activeBox.current.style.left = `${el.offsetLeft}px`;
      activeBox.current.style.width = `${el.offsetWidth}px`;
      activeBox.current.style.height = `${el.offsetHeight}px`;
    }
  };

  useEffect(() => {
    initActiveBox();
    window.addEventListener("resize", initActiveBox);
    return () => window.removeEventListener("resize", initActiveBox);
  }, []);

  const handleActiveLink = (e) => {
    lastActiveLink.current?.classList.remove("active");
    e.target.classList.add("active");
    lastActiveLink.current = e.target;
    initActiveBox();
  };

  return (
    <nav
      className={`absolute md:static top-full left-0 w-full md:w-auto 
      bg-zinc-900/90 backdrop-blur-xl border border-indigo-500/20 
      shadow-[0_0_40px_rgba(99,102,241,0.25)]
      rounded-xl transition-all duration-500 z-50 ${
        navOpen
          ? "opacity-100 visible"
          : "opacity-0 invisible md:opacity-100 md:visible"
      }`}
    >
      <div className="relative flex flex-col lg:flex-row items-center gap-4 px-4 py-4">
        {/* NAV LINKS */}
        <div className="flex flex-wrap gap-2 flex-1">
          {navItems.map(({ label, link, isDropdown, isAI }, index) => {
            if (isDropdown) {
              return (
                <div
                  key={label}
                  className="relative"
                  onMouseEnter={() => setStudyOpen(true)}
                  onMouseLeave={() => setStudyOpen(false)}
                >
                  <button className="px-4 py-2 rounded-xl text-white flex items-center gap-2 hover:text-cyan-300">
                    <Book size={18} /> {label}
                    <ChevronDown size={16} />
                  </button>

                  <AnimatePresence>
                    {studyOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute top-12 left-0 w-72 bg-zinc-900 border border-indigo-400/30 rounded-2xl p-4 shadow-xl"
                      >
                        {semesters.map((sem) => (
                          <div
                            key={sem}
                            className="flex justify-between items-center p-2 rounded-lg hover:bg-indigo-500/10"
                          >
                            <span className="text-white">{sem}</span>
                            <div className="flex gap-2">
                              <Link
                                to={`/study-material/${sem.toLowerCase()}/notes`}
                                className="text-xs bg-emerald-600 px-3 py-1 rounded-lg text-white"
                              >
                                Notes
                              </Link>
                              <Link
                                to={`/study-material/${sem.toLowerCase()}/paper`}
                                className="text-xs bg-sky-600 px-3 py-1 rounded-lg text-white"
                              >
                                Paper
                              </Link>
                            </div>
                          </div>
                        ))}
                        <Link
                          to="/study-material/syllabus"
                          className="block mt-3 text-center bg-indigo-600 py-2 rounded-xl text-white"
                        >
                          Full Syllabus
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            return (
              <Link
                key={label}
                to={link}
                ref={index === 0 ? lastActiveLink : null}
                onClick={handleActiveLink}
                className="relative px-4 py-2 rounded-xl text-white hover:text-indigo-300 transition"
              >
                {isAI && (
                  <span className="absolute -top-2 -right-3 text-[10px] bg-cyan-500 text-black px-2 py-0.5 rounded-full">
                    NEW
                  </span>
                )}
                {isAI && <Bot size={16} className="inline mr-1" />}
                {label}
              </Link>
            );
          })}
        </div>

        {/* AUTH SECTION */}
        <div className="flex gap-3">
          {isAuthenticated ? (
            <div className="flex items-center gap-2">
              <span className="text-white">{user?.name || "User"}</span>
              <button
                onClick={() => {
                  localStorage.clear();
                  window.location.href = "/";
                }}
                className="flex items-center gap-1 bg-red-600 px-4 py-2 rounded-xl text-white"
              >
                <LogOut size={16} /> Logout
              </button>
            </div>
          ) : (
            <>
              <a
                href="/Login.html"
                className="px-5 py-2 rounded-xl border border-indigo-400 text-white hover:bg-indigo-500/20"
              >
                Login
              </a>
              <a
                href="/Login.html#signup"
                className="px-6 py-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold hover:scale-105 transition"
              >
                Sign Up
              </a>
            </>
          )}
        </div>

        <span
          ref={activeBox}
          className="absolute bg-indigo-500/20 rounded-xl -z-10 transition-all duration-500"
        />
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  navOpen: PropTypes.bool,
  isAuthenticated: PropTypes.bool,
  user: PropTypes.object,
};

export default Navbar;
