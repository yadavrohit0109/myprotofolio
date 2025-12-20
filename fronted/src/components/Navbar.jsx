import React, { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  FileText,
  Book,
  User,
  LogIn,
  UserPlus,
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

  useEffect(() => {
    if (lastActiveLink.current && activeBox.current) {
      const el = lastActiveLink.current;
      activeBox.current.style.top = `${el.offsetTop}px`;
      activeBox.current.style.left = `${el.offsetLeft}px`;
      activeBox.current.style.width = `${el.offsetWidth}px`;
      activeBox.current.style.height = `${el.offsetHeight}px`;
    }
  }, []);

  return (
    <nav className="bg-zinc-900/90 backdrop-blur-xl border border-indigo-500/20 shadow-xl">
      <div className="flex flex-col lg:flex-row items-center px-4 py-3 gap-4">

        {/* NAV LINKS */}
        <div className="flex flex-wrap gap-2 flex-1">
          {navItems.map(({ label, link, isDropdown, isAI }) =>
            isDropdown ? (
              <div key={label} className="relative">
                <button className="flex items-center gap-2 text-white px-4 py-2 rounded-xl">
                  <Book size={18} /> {label} <ChevronDown size={16} />
                </button>
              </div>
            ) : (
              <Link
                key={label}
                to={link}
                className="px-4 py-2 rounded-xl text-white hover:text-indigo-300"
              >
                {isAI && <Bot size={16} className="inline mr-1" />}
                {label}
              </Link>
            )
          )}
        </div>

        {/* AUTH SECTION — FIXED */}
        <div className="flex items-center gap-3">

          {!isAuthenticated && (
            <>
              {/* LOGIN */}
              <a
                href="components/backend/Login.html"
                className="flex items-center gap-2 px-5 py-2 rounded-xl 
                           border border-indigo-400 text-white 
                           hover:bg-indigo-500/20 transition"
              >
                <LogIn size={18} />
                Login
              </a>

              {/* SIGNUP */}
              <a
                href="/Login.html#signup"
                className="flex items-center gap-2 px-6 py-2 rounded-xl 
                           bg-gradient-to-r from-indigo-600 to-purple-600 
                           text-white font-semibold hover:scale-105 transition"
              >
                <UserPlus size={18} />
                Sign Up
              </a>
            </>
          )}

          {isAuthenticated && (
            <>
              <span className="text-white font-medium">
                {user?.name || "User"}
              </span>
              <button
                onClick={() => {
                  localStorage.clear();
                  window.location.href = "/";
                }}
                className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-xl"
              >
                <LogOut size={18} />
                Logout
              </button>
            </>
          )}

        </div>
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
