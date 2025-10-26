// Navbar.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Book, FileText, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [studyOpen, setStudyOpen] = useState(false);
  const semesters = ["Semester1", "Semester2", "Semester3", "Semester4", "Semester5", "Semester6"];

  return (
    <nav className="flex items-center gap-8 text-white font-medium">
      {["Home", "About", "Projects", "Reviews"].map((item) => (
        <a
          key={item}
          href={`#${item.toLowerCase()}`}
          className="relative group hover:text-pink-300 transition-all"
        >
          {item}
          <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-pink-400 to-purple-400 transition-all group-hover:w-full"></span>
        </a>
      ))}

      {/* 🔹 Study Material Dropdown */}
      <div
        className="relative"
        onMouseEnter={() => setStudyOpen(true)}
        onMouseLeave={() => setStudyOpen(false)}
      >
        <button className="flex items-center gap-1 hover:text-cyan-300 transition">
          <Book className="w-4 h-4" />
          Study Material
          <ChevronDown className="w-4 h-4 mt-[2px]" />
        </button>

        <AnimatePresence>
          {studyOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute top-8 left-0 w-60 bg-gradient-to-b from-indigo-900/80 via-purple-900/70 to-pink-900/80 backdrop-blur-lg rounded-xl shadow-lg p-3 border border-purple-500/30 z-50"
            >
              <div className="space-y-2">
                {semesters.map((sem) => (
                  <div
                    key={sem}
                    className="p-2 rounded-lg hover:bg-white/10 transition-all"
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-semibold">{sem}</span>
                      <div className="flex gap-2">
                        <a
                          href={`#${sem.toLowerCase()}-notes`}
                          className="text-xs bg-emerald-600/80 hover:bg-emerald-500 px-2 py-1 rounded-md"
                        >
                          Notes
                        </a>
                        <a
                          href={`#${sem.toLowerCase()}-paper`}
                          className="text-xs bg-sky-600/80 hover:bg-sky-500 px-2 py-1 rounded-md"
                        >
                          Paper
                        </a>
                      </div>
                    </div>
                  </div>
                ))}

                <hr className="border-t border-white/10 my-2" />

                <a
                  href="#syllabus"
                  className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition"
                >
                  <FileText className="w-4 h-4" />
                  <span className="font-semibold">Syllabus</span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
