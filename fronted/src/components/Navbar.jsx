import React, { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, FileText, Book, User, LogIn, LogOut } from "lucide-react";
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

        {/* Auth Section */}
        <div className="flex items-center gap-2 ml-auto md:ml-0">
          <AnimatePresence mode="wait">
            {isAuthenticated ? (
              <>
                {/* User Profile Dropdown */}
                <div className="relative">
                  <button className="flex items-center gap-2 text-white px-3 py-2 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 hover:from-indigo-400/30 hover:to-purple-400/30 transition-all duration-300">
                    <User className="w-5 h-5" />
                    <span className="hidden md:inline text-sm font-medium">
                      {user?.name || "User"}
                    </span>
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  
                  {/* User Dropdown */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: -10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: -10 }}
                    className="absolute top-12 right-0 w-56 bg-zinc-900/95 border border-zinc-700/50 backdrop-blur-md rounded-2xl p-2 shadow-2xl z-50"
                    style={{ originY: 0 }}
                  >
                    <div className="p-3 border-b border-zinc-700/50">
                      <p className="text-sm font-medium text-white">
                        {user?.email || "user@example.com"}
                      </p>
                    </div>
                    <Link
                      to="/profile"
                      className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-zinc-800/50 transition-all text-white text-sm"
                    >
                      <User className="w-5 h-5" />
                      Profile
                    </Link>
                    <Link
                      to="/dashboard"
                      className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-zinc-800/50 transition-all text-white text-sm"
                    >
                      <FileText className="w-5 h-5" />
                      Dashboard
                    </Link>
                    <button
                      onClick={() => {
                        // Handle logout
                        localStorage.removeItem('token');
                        window.location.href = '/';
                      }}
                      className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-red-500/20 transition-all text-red-300 text-sm font-medium"
                    >
                      <LogOut className="w-5 h-5" />
                      Logout
                    </button>
                  </motion.div>
                </div>
              </>
            ) : (
              /* Auth Buttons */
              <>
                <Link
                  to="/login"
                  className="hidden md:flex items-center gap-2 text-white/80 px-4 py-2 rounded-full border border-zinc-600/50 hover:border-indigo-400/50 hover:text-indigo-300 transition-all duration-300 backdrop-blur-sm"
                >
                  <LogIn className="w-4 h-4" />
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="flex items-center gap-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 text-white px-6 py-2.5 rounded-full font-semibold text-sm shadow-lg hover:shadow-xl hover:from-indigo-600 hover:via-purple-600 hover:to-cyan-600 transform hover:scale-[1.02] transition-all duration-300"
                >
                  Get Started
                </Link>
              </>
            )}
          </AnimatePresence>
        </div>

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
  isAuthenticated: PropTypes.bool,
  user: PropTypes.object,
};

Navbar.defaultProps = {
  isAuthenticated: false,
  user: null,
};

export default Navbar;
