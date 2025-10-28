import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, FileText, Download } from "lucide-react";

const papersData = [
  {
    semester: "Semester 1",
    color: "from-indigo-800 to-purple-800",
    files: [
      { title: "Physics Paper 2023", file: "/assets/papers/physics2023.pdf", type: "PDF" },
      { title: "Mathematics Paper 2023", file: "/assets/papers/math2023.pdf", type: "PDF" },
    ],
  },
  {
    semester: "Semester 2",
    color: "from-cyan-800 to-blue-800",
    files: [
      { title: "Data Structures Paper 2024", file: "/assets/papers/ds2024.pdf", type: "PDF" },
      { title: "Digital Logic Paper 2024", file: "/assets/papers/dld2024.pdf", type: "PDF" },
    ],
  },
  {
    semester: "Semester 3",
    color: "from-emerald-800 to-green-800",
    files: [
      { title: "DBMS Mid-Term", file: "/assets/papers/dbms-mid.pdf", type: "PDF" },
      { title: "Operating System Final", file: "/assets/papers/os-final.pdf", type: "PDF" },
    ],
  },
  {
    semester: "Semester 4",
    color: "from-pink-800 to-rose-800",
    files: [
      { title: "Computer Networks Paper", file: "/assets/papers/network.pdf", type: "PDF" },
      { title: "Software Engineering Paper", file: "/assets/papers/se.pdf", type: "PDF" },
    ],
  },
  {
    semester: "Semester 5",
    color: "from-amber-800 to-orange-800",
    files: [
      { title: "Machine Learning Paper", file: "/assets/papers/ml.pdf", type: "PDF" },
      { title: "AI Question Paper", file: "/assets/papers/ai.pdf", type: "PDF" },
    ],
  },
  {
    semester: "Semester 6",
    color: "from-blue-800 to-sky-800",
    files: [
      { title: "Cyber Security Paper", file: "/assets/papers/cyber.pdf", type: "PDF" },
      { title: "Cloud Computing Paper", file: "/assets/papers/cloud.pdf", type: "PDF" },
    ],
  },
];

const Papers = () => {
  const [openSem, setOpenSem] = useState(null);
  const toggleSem = (index) => setOpenSem(openSem === index ? null : index);

  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white py-20 px-6">
      <h1 className="text-5xl font-bold text-center mb-12">📄 Question Papers by Semester</h1>

      <div className="max-w-4xl mx-auto space-y-6">
        {papersData.map((sem, index) => (
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
                          <FileText size={24} className="text-green-400" />
                          <h2 className="text-lg font-semibold">{file.title}</h2>
                        </div>
                        <a
                          href={file.file}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-black px-4 py-2 rounded-md font-medium transition-all"
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

export default Papers;
