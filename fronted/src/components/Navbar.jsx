import React, { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, FileText, Book } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = ({ navOpen = false }) => {
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
    { label: "Projects", link: "#projects" },
    { label: "Reviews", link: "#reviews" },
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

  const handleActiveLink = (event) => {
    if (!event.target) return;
    lastActiveLink.current?.classList.remove("active");
    event.target.classList.add("active");
    lastActiveLink.current = event.target;
    initActiveBox();
  };

  return (
    <nav
      className={`absolute md:static top-full left-0 w-full md:w-auto bg-zinc-900 md:bg-transparent rounded-xl md:rounded-none shadow-lg md:shadow-none transition-all duration-300 ease-in-out z-40 ${
        navOpen
          ? "opacity-100 visible"
          : "opacity-0 invisible md:opacity-100 md:visible"
      }`}
    >
      <div className="relative flex flex-col md:flex-row items-center gap-4 px-4 py-3 md:py-0 md:gap-6">
        {navItems.map(({ label, link, isDropdown }, index) => {
          if (isDropdown) {
            return (
              <div
                key={index}
                className="relative"
                onMouseEnter={() => setStudyOpen(true)}
                onMouseLeave={() => setStudyOpen(false)}
              >
                <button
                  type="button"
                  onClick={() => setStudyOpen(!studyOpen)}
                  className="relative text-white px-4 py-2 rounded-full flex items-center gap-1 hover:text-cyan-300 transition"
                >
                  <Book className="w-4 h-4" />
                  {label}
                  <ChevronDown className="w-4 h-4 mt-[2px]" />
                </button>

                <AnimatePresence>
                  {studyOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.25 }}
                      className="absolute top-10 left-0 w-64 bg-gradient-to-b from-zinc-900/95 via-indigo-900/80 to-purple-900/70 border border-indigo-400/30 backdrop-blur-md rounded-xl p-3 shadow-xl z-50"
                    >
                      <div className="flex flex-col gap-2">
                        {semesters.map((sem) => (
                          <div
                            key={sem}
                            className="p-2 rounded-lg hover:bg-white/10 transition-all"
                          >
                            <div className="flex justify-between items-center">
                              <span className="font-semibold text-sm">
                                {sem}
                              </span>
                              <div className="flex gap-2">
                                <Link
                                  to={`/study-material/${sem.toLowerCase()}/notes`}
                                  className="text-xs bg-emerald-600/80 hover:bg-emerald-500 px-2 py-1 rounded-md"
                                >
                                  Notes
                                </Link>
                                <Link
                                  to={`/study-material/${sem.toLowerCase()}/paper`}
                                  className="text-xs bg-sky-600/80 hover:bg-sky-500 px-2 py-1 rounded-md"
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
                          className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition text-sm"
                        >
                          <FileText className="w-4 h-4" />
                          <span className="font-semibold">Syllabus</span>
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          }

          return (
            <Link
              key={index}
              to={link}
              ref={index === 0 ? lastActiveLink : null}
              onClick={handleActiveLink}
              className="relative text-white text-sm px-4 py-2 rounded-full transition-all duration-300 font-medium hover:text-indigo-400 hover:bg-indigo-500/10 focus:outline-none"
            >
              {label}
            </Link>
          );
        })}

        <span
          ref={activeBox}
          className="absolute bg-indigo-500/20 rounded-full z-[-1] transition-all duration-300"
        />
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  navOpen: PropTypes.bool,
};

export default Navbar;
