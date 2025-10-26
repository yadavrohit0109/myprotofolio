import React, { useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { Sun, FileText, Book, Plus, X, Menu as MenuIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// HeaderStudyMaterial.jsx
// Responsive, attractive header / navbar to represent the folder structure:
// - Study material (dropdown -> Semester1..Semester6 -> Notes / Paper actions)
// - Syllabus (link)
// Includes modals for adding Notes / Paper which call placeholder API endpoints.

export default function HeaderStudyMaterial() {
  const semesters = [
    "Semester1",
    "Semester2",
    "Semester3",
    "Semester4",
    "Semester5",
    "Semester6",
  ];

  const [mobileOpen, setMobileOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState("notes"); // "notes" or "paper"
  const [selectedSemester, setSelectedSemester] = useState(semesters[0]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  const openAddModal = (semester, type) => {
    setSelectedSemester(semester);
    setModalType(type);
    setTitle("");
    setContent("");
    setMessage(null);
    setModalOpen(true);
  };

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    const endpoint = modalType === "notes" ? "/api/notes" : "/api/papers";
    const payload = {
      semester: selectedSemester,
      title,
      content,
    };

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error(`Server returned ${res.status}`);
      await res.json();
      setMessage({ type: "success", text: "Uploaded & awaiting approval" });
    } catch (err) {
      setMessage({ type: "error", text: `Upload failed: ${err.message}` });
    } finally {
      setLoading(false);
    }
  };

  return (
    <header className="w-full fixed top-0 left-0 z-50">
      <nav className="backdrop-blur-md bg-gradient-to-r from-indigo-900/60 via-purple-900/50 to-pink-900/40 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <a href="#" className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center ring-1 ring-white/10">
                  <Sun className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-lg font-semibold tracking-wide">Study Material</div>
                  <div className="text-xs text-white/70">Semesters & Syllabus</div>
                </div>
              </a>
            </div>

            {/* Desktop menu */}
            <div className="hidden md:flex md:items-center md:space-x-6">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <Menu>
                    {({ open }) => (
                      <>
                        <Menu.Button className="px-4 py-2 rounded-full bg-white/8 hover:bg-white/12 transition flex items-center gap-2">
                          <Book className="w-4 h-4" />
                          <span className="font-medium">Semesters</span>
                        </Menu.Button>

                        <Transition
                          show={open}
                          enter="transition duration-150"
                          enterFrom="opacity-0 translate-y-1"
                          enterTo="opacity-100 translate-y-0"
                          leave="transition duration-100"
                          leaveFrom="opacity-100 translate-y-0"
                          leaveTo="opacity-0 translate-y-1"
                        >
                          <Menu.Items className="absolute right-0 mt-3 w-72 bg-white/5 rounded-2xl p-3 backdrop-blur-md ring-1 ring-white/10">
                            <div className="grid grid-cols-2 gap-2">
                              {semesters.map((s) => (
                                <div key={s} className="p-2 rounded-lg hover:bg-white/6">
                                  <div className="flex items-center justify-between">
                                    <div className="text-sm font-semibold">{s}</div>
                                    <div className="flex gap-2">
                                      <button
                                        onClick={() => openAddModal(s, "notes")}
                                        className="px-2 py-1 text-xs rounded-md bg-emerald-600/90 hover:bg-emerald-600/100"
                                      >
                                        <Plus className="w-3 h-3 inline-block mr-1" /> Notes
                                      </button>
                                      <button
                                        onClick={() => openAddModal(s, "paper")}
                                        className="px-2 py-1 text-xs rounded-md bg-sky-600/90 hover:bg-sky-600/100"
                                      >
                                        <FileText className="w-3 h-3 inline-block mr-1" /> Paper
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </Menu.Items>
                        </Transition>
                      </>
                    )}
                  </Menu>
                </div>

                <a href="/syllabus" className="px-4 py-2 rounded-full bg-white/8 hover:bg-white/12 transition flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  <span className="font-medium">Syllabus</span>
                </a>

                <a href="/view" className="px-4 py-2 rounded-full bg-gradient-to-r from-yellow-400/20 to-red-400/20 ring-1 ring-white/10 hover:scale-105 transform transition">
                  <span className="font-medium">View Page</span>
                </a>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setMobileOpen((v) => !v)} aria-label="Toggle menu" className="p-2 rounded-md bg-white/6">
                {mobileOpen ? <X className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden px-4 pb-4"
            >
              <div className="space-y-3 mt-3">
                <div className="grid grid-cols-2 gap-2">
                  {semesters.map((s) => (
                    <div key={s} className="p-3 rounded-xl bg-white/4">
                      <div className="flex items-center justify-between">
                        <div className="font-semibold">{s}</div>
                        <div className="flex gap-2">
                          <button onClick={() => openAddModal(s, "notes")} className="px-2 py-1 text-xs rounded bg-emerald-600/90">Notes</button>
                          <button onClick={() => openAddModal(s, "paper")} className="px-2 py-1 text-xs rounded bg-sky-600/90">Paper</button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <a href="/syllabus" className="block w-full text-center py-2 rounded-lg bg-white/6">Syllabus</a>
                <a href="/view" className="block w-full text-center py-2 rounded-lg bg-gradient-to-r from-yellow-400/30 to-red-400/30">View Page</a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <AnimatePresence>
        {modalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-60 flex items-center justify-center p-4"
          >
            <div className="absolute inset-0 bg-black/60" onClick={() => setModalOpen(false)} />

            <motion.div
              initial={{ y: 20, scale: 0.98 }}
              animate={{ y: 0, scale: 1 }}
              exit={{ y: 20, scale: 0.98 }}
              className="relative w-full max-w-2xl bg-gradient-to-b from-white/6 to-white/3 rounded-2xl p-6 ring-1 ring-white/10 backdrop-blur-md"
            >
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="text-lg font-semibold">Add {modalType === "notes" ? "Notes" : "Paper"}</div>
                  <div className="text-sm text-white/70">Target: {selectedSemester}</div>
                </div>
                <button onClick={() => setModalOpen(false)} className="p-2 rounded-md bg-white/6">
                  <X className="w-4 h-4" />
                </button>
              </div>

              <form onSubmit={submit} className="space-y-4">
                <div>
                  <label className="text-sm block mb-1">Title</label>
                  <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                    className="w-full px-3 py-2 rounded-lg bg-white/5 placeholder:text-white/50"
                    placeholder={`Title for ${modalType}`}
                  />
                </div>

                <div>
                  <label className="text-sm block mb-1">Content / Link</label>
                  <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    required
                    className="w-full px-3 py-2 rounded-lg bg-white/5 placeholder:text-white/50 h-28"
                    placeholder="Add a short description or a link to the file"
                  />
                </div>

                <div className="flex items-center gap-3">
                  <button type="submit" disabled={loading} className="px-4 py-2 rounded-lg bg-emerald-600/95 hover:scale-105 transform transition">
                    {loading ? "Uploading..." : "Submit & Request Approval"}
                  </button>
                  <button type="button" onClick={() => setModalOpen(false)} className="px-4 py-2 rounded-lg bg-white/6">
                    Cancel
                  </button>
                </div>

                {message && (
                  <div className={`text-sm p-2 rounded ${message.type === "success" ? "bg-emerald-900/40" : "bg-rose-900/40"}`}>
                    {message.text}
                  </div>
                )}
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
