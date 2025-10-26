import React from "react";
import { Routes, Route, Link } from "react-router-dom";

const StudyMaterial = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-950 via-indigo-950 to-purple-950 text-white p-6">
      <h1 className="text-4xl font-bold mb-6 text-center bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
        📚 Study Material
      </h1>

      <Routes>
        <Route path="/" element={<StudyHome />} />
        <Route path=":semester/notes" element={<NotesPage />} />
        <Route path=":semester/paper" element={<PaperPage />} />
        <Route path="syllabus" element={<SyllabusPage />} />
      </Routes>
    </div>
  );
};

const StudyHome = () => (
  <div className="text-center">
    <p className="text-lg">Select a semester from the navigation above 👆</p>
  </div>
);

const NotesPage = () => (
  <div>
    <h2 className="text-2xl font-bold mb-3">📘 Notes Section</h2>
    <p className="text-gray-300">Here you can upload or view all notes for this semester.</p>
  </div>
);

const PaperPage = () => (
  <div>
    <h2 className="text-2xl font-bold mb-3">📄 Paper Section</h2>
    <p className="text-gray-300">View or upload past papers for this semester.</p>
  </div>
);

const SyllabusPage = () => (
  <div>
    <h2 className="text-2xl font-bold mb-3">📖 Syllabus</h2>
    <p className="text-gray-300">Full syllabus details for all semesters.</p>
  </div>
);

export default StudyMaterial;
