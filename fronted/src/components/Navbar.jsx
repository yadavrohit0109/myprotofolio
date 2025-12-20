import React, { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, FileText, Book, User, LogIn, LogOut, UserPlus } from "lucide-react";
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
      className={`absolute md:static top-full left-0 w-full md:w-auto bg-zinc-900/95 md:bg-transparent/80 backdrop-blur-md rounded-xl md:rounded-none shadow-2xl md:shadow-none border border-zinc-700/50 md:border-none transition-all duration-500 ease-out z-50 ${
        navOpen
          ? "opacity-100 visible translate-y-0"
          : "opacity-0 invisible md:opacity-100 md:visible -translate-y-2 md:translate-y-0"
      }`}
    >
      <div className="relative flex flex-col lg:flex-row items-center gap-3 px-4 py-4 md:py-3 lg:gap-6 xl:gap-8">
        {/* Main Navigation */}
        <div className="flex flex-wrap justify-center lg:justify-start gap-2 lg:gap-1 flex-1 min-w-0">
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
                    className="group relative text-white/90 px-4 py-2.5 md:px-5 md:py-2.5 rounded-2xl flex items-center gap-1.5 hover:text-cyan-300 hover:bg-cyan-500/10 backdrop-blur-sm border border-transparent hover:border-cyan-400/30 transition-all duration-300 font-medium text-sm md:text-base shadow-lg hover:shadow-cyan-500/25"
                  >
                    <motion.div
                      className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/0 via-indigo-500/0 to-purple-500/0 group-hover:from-cyan-500/20 group-hover:via-indigo-500/20 group-hover:to-purple-500/20 -z-10 blur"
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                    <Book className="w-4 h-4 md:w-5 md:h-5 group-hover:scale-110 transition-transform" />
                    <span>{label}</span>
                    <ChevronDown className="w-4 h-4 md:w-5 md:h-5 mt-[2px] group-hover:rotate-180 transition-transform duration-300" />
                  </button>

                  <AnimatePresence>
                    {studyOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="absolute top-12 left-1/2 -translate-x-1/2 md:left-0 w-72 md:w-80 bg-zinc-900/95 border border-indigo-500/30 backdrop-blur-xl rounded-3xl p-4 md:p-5 shadow-2xl z-50"
                      >
                        <div className="flex flex-col gap-3">
                          {semesters.map((sem) => (
                            <motion.div
                              key={sem}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.1 }}
                              className="group p-3 rounded-2xl hover:bg-gradient-to-r hover:from-emerald-500/10 hover:to-sky-500/10 hover:border-emerald-400/30 border border-zinc-700/50 backdrop-blur-sm transition-all duration-300 cursor-pointer"
                              whileHover={{ scale: 1.02, y: -2 }}
                            >
                              <div className="flex justify-between items-center">
                                <span className="font-semibold text-sm md:text-base text-white/90 group-hover:text-emerald-300">
                                  {sem}
                                </span>
                                <div className="flex gap-2">
                                  <Link
                                    to={`/study-material/${sem.toLowerCase()}/notes`}
                                    className="text-xs md:text-sm bg-emerald-600/90 hover:bg-emerald-500 text-white px-3 py-1.5 md:px-4 md:py-2 rounded-xl font-medium shadow-md hover:shadow-emerald-500/25 transform hover:scale-105 transition-all duration-200 whitespace-nowrap"
                                  >
                                    Notes
                                  </Link>
                                  <Link
                                    to={`/study-material/${sem.toLowerCase()}/paper`}
                                    className="text-xs md:text-sm bg-sky-600/90 hover:bg-sky-500 text-white px-3 py-1.5 md:px-4 md:py-2 rounded-xl font-medium shadow-md hover:shadow-sky-500/25 transform hover:scale-105 transition-all duration-200 whitespace-nowrap"
                                  >
                                    Paper
                                  </Link>
                                </div>
                              </div>
                            </motion.div>
                          ))}

                          <hr className="border-t border-white/10 my-3" />
                          <Link
                            to="/study-material/syllabus"
                            className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-gradient-to-r from-indigo-500/20 to-purple-500/20 hover:from-indigo-500/30 hover:to-purple-500/30 border border-indigo-400/30 backdrop-blur-sm transition-all duration-300 text-sm font-semibold hover:shadow-xl"
                            whileHover={{ scale: 1.02 }}
                          >
                            <FileText className="w-5 h-5" />
                            <span className="text-white/90 hover:text-white">Full Syllabus</span>
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
                className="relative text-white/90 text-sm md:text-base px-4 md:px-6 py-2.5 md:py-3 rounded-2xl transition-all duration-400 font-medium hover:text-indigo-300 hover:bg-gradient-to-r hover:from-indigo-500/15 hover:to-purple-500/15 hover:shadow-lg hover:shadow-indigo-500/25 backdrop-blur-sm border border-transparent hover:border-indigo-400/30 focus:outline-none group"
              >
                <motion.span
                  className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500/0 via-purple-500/0 to-cyan-500/0 -z-10 blur opacity-0 group-hover:opacity-100"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                />
                {label}
              </Link>
            );
          })}
        </div>

        {/* Auth Section - Always Visible */}
        <div className="flex items-center gap-3 lg:gap-4 ml-auto order-first lg:order-last">
          <AnimatePresence mode="wait">
            {isAuthenticated ? (
              <motion.div
                key="authenticated"
                initial={{ opacity: 0, scale: 0.95, x: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.95, x: -20 }}
                transition={{ duration: 0.25 }}
                className="relative"
              >
                <button className="group flex items-center gap-2.5 text-white px-4 py-2.5 lg:px-5 lg:py-3 rounded-2xl bg-gradient-to-r from-indigo-600/90 via-purple-600/90 to-cyan-600/90 hover:from-indigo-500 hover:via-purple-500 hover:to-cyan-500 shadow-2xl hover:shadow-indigo-500/50 border border-indigo-400/30 backdrop-blur-md transition-all duration-400 font-medium text-sm lg:text-base transform hover:scale-[1.02] hover:-translate-y-0.5">
                  <User className="w-5 h-5 lg:w-6 lg:h-6" />
                  <span className="hidden lg:inline">
                    {user?.name?.split(' ')[0] || "User"}
                  </span>
                  <ChevronDown className="w-4 h-4 lg:w-5 lg:h-5 group-hover:rotate-180 transition-transform duration-300" />
                </button>
                
                {/* User Dropdown */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: -10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: -10 }}
                  className="absolute top-14 right-0 lg:top-16 w-64 lg:w-72 bg-zinc-900/98 border border-zinc-700/60 backdrop-blur-2xl rounded-3xl p-3 lg:p-4 shadow-2xl z-50"
                >
                  <div className="p-4 border-b border-zinc-700/50 rounded-2xl mb-3 bg-gradient-to-r from-indigo-500/10 to-purple-500/10">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg">
                        <User className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-white text-sm lg:text-base">
                          {user?.name || "Welcome Back"}
                        </p>
                        <p className="text-zinc-400 text-xs lg:text-sm">
                          {user?.email || "user@example.com"}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <Link
                    to="/profile"
                    className="flex items-center gap-3 px-4 py-3 rounded-2xl hover:bg-zinc-800/60 hover:text-indigo-300 transition-all duration-300 text-white/90 text-sm font-medium hover:shadow-inner"
                  >
                    <User className="w-5 h-5" />
                    Profile
                  </Link>
                  <Link
                    to="/dashboard"
                    className="flex items-center gap-3 px-4 py-3 rounded-2xl hover:bg-zinc-800/60 hover:text-emerald-300 transition-all duration-300 text-white/90 text-sm font-medium hover:shadow-inner"
                  >
                    <FileText className="w-5 h-5" />
                    Dashboard
                  </Link>
                  <button
                    onClick={() => {
                      localStorage.removeItem('token');
                      localStorage.removeItem('user');
                      window.location.href = '/';
                    }}
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl hover:bg-red-500/20 hover:text-red-300 border border-transparent hover:border-red-400/50 transition-all duration-300 text-white/90 text-sm font-medium mt-1"
                  >
                    <LogOut className="w-5 h-5" />
                    Sign Out
                  </button>
                </motion.div>
              </motion.div>
            ) : (
              <motion.div
                key="unauthenticated"
                initial={{ opacity: 0, scale: 0.95, x: -20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.95, x: 20 }}
                transition={{ duration: 0.25 }}
                className="flex items-center gap-3 lg:gap-4"
              >
                {/* Login Button */}
                <Link
                  to="/login"
                  className="group flex items-center gap-2 text-zinc-300 hover:text-white px-4 py-2.5 lg:px-5 lg:py-3 rounded-2xl border-2 border-zinc-600/40 hover:border-indigo-400/60 hover:bg-indigo-500/10 backdrop-blur-md shadow-lg hover:shadow-indigo-500/25 transition-all duration-400 font-medium text-sm lg:text-base hover:-translate-y-1 hover:scale-[1.02]"
                >
                  <LogIn className="w-5 h-5 lg:w-6 lg:h-6 group-hover:translate-x-1 transition-transform duration-300" />
                  <span>Login</span>
                </Link>
                
                {/* Signup Button - Prominent */}
                <Link
                  to="/signup"
                  className="group flex items-center gap-2.5 bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 hover:from-indigo-500 hover:via-purple-500 hover:to-cyan-500 text-white px-6 lg:px-8 py-3 lg:py-3.5 rounded-2xl font-semibold text-sm lg:text-base shadow-2xl hover:shadow-3xl hover:shadow-indigo-500/50 border border-transparent hover:border-indigo-400/30 backdrop-blur-md transition-all duration-500 transform hover:scale-[1.05] hover:-translate-y-1 active:scale-[0.98]"
                >
                  <UserPlus className="w-5 h-5 lg:w-6 lg:h-6 group-hover:rotate-12 transition-transform duration-500" />
                  <span>Get Started</span>
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <span
          ref={activeBox}
          className="absolute bg-gradient-to-r from-indigo-500/30 to-purple-500/30 rounded-2xl z-[-1] transition-all duration-500 shadow-lg blur-sm"
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
