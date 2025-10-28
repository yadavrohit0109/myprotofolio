import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, FileText, Download } from "lucide-react";

const notesData = [
  {
    semester: "Semester 1",
    color: "from-purple-700 to-indigo-700",
    files: [
      { title: "Mathematics I", file: "/assets/notes/math1.pdf", type: "PDF" },
      { title: "Physics Fundamentals", file: "/assets/notes/physics1.pdf", type: "PDF" },
      { title: "Introduction to Programming (C)", file: "/assets/notes/cprogramming.pdf", type: "DOCX" },
    ],
  },
  {
    semester: "Semester 2",
    color: "from-blue-700 to-cyan-700",
    files: [
      { title: "Data Structures", file: "/assets/notes/datastructures.pdf", type: "PDF" },
      { title: "Digital Logic Design", file: "/assets/notes/dld.pdf", type: "PDF" },
    ],
  },
  {
    semester: "Semester 3",
    color: "from-green-700 to-emerald-700",
    files: [
      { title: "Database Management System", file: "/assets/notes/dbms.pdf", type: "PDF" },
      { title: "Operating System", file: "/assets/notes/os.pdf", type: "DOCX" },
    ],
  },
  {
    semester: "Semester 4",
    color: "from-pink-700 to-rose-700",
    files: [
      { title: "Computer Networks", file: "/assets/notes/network.pdf", type: "PDF" },
      { title: "Software Engineering", file: "/assets/notes/se.pdf", type: "PDF" },
    ],
  },
  {
    semester: "Semester 5",
    color: "from-orange-700 to-amber-700",
    files: [
      { title: "Machine Learning", file: "/assets/notes/ml.pdf", type: "PDF" },
      { title: "Artificial Intelligence", file: "/assets/notes/ai.pdf", type: "PDF" },
    ],
  },
  {
    semester: "Semester 6",
    color: "from-sky-700 to-blue-800",
    files: [
      { title: "Cloud Computing", file: "/assets/notes/cloud.pdf", type: "PDF" },
      { title: "Cyber Security", file: "/assets/notes/cyber.pdf", type: "PDF" },
    ],
  },
];

const Notes = () => {
  const [openSem, setOpenSem] = useState(null);

  const toggleSem = (index) => {
    setOpenSem(openSem === index ? null : index);
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white py-20 px-6">
      <h1 className="text-5xl font-bold text-center mb-12">📘 Notes by Semester</h1>

      <div className="max-w-4xl mx-auto space-y-6">
        {notesData.map((sem, index) => (
          <motion.div
            key={index}
            className={`rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-r ${sem.color} shadow-lg`}
          >
            <button
              onClick={() => toggleSem(index)}
              className="w-full flex justify-between items-center p-5 text-lg font-semibold bg-black/40 hover:bg-black/60 transition-all"
            >
              <span>{sem.semester}</span>
              <ChevronDown
                className={`transition-transform ${openSem === index ? "rotate-180" : ""}`}
              />
            </button>

            <AnimatePresence>
              {openSem === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="bg-black/30 backdrop-blur-md"
                >
                  <div className="p-6 grid gap-4 sm:grid-cols-2">
                    {sem.files.map((file, i) => (
                      <motion.div
                        key={i}
                        whileHover={{ scale: 1.05 }}
                        className="p-4 bg-white/10 rounded-xl border border-white/20 shadow-md flex flex-col justify-between"
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <FileText size={24} className="text-yellow-400" />
                          <h2 className="text-lg font-semibold">{file.title}</h2>
                        </div>
                        <a
                          href={file.file}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded-md font-medium transition-all"
                        >
                          <Download size={18} /> View / Download ({file.type})
                        </a>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Notes;
