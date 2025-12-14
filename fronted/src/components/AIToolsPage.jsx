import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle,
  XCircle,
  PlusCircle,
  Clock,
  ShieldCheck,
  Search,
} from "lucide-react";

// 🔰 Default tools
const initialTools = [
  {
    name: "ChatGPT",
    description: "Conversational AI for text, code, and automation.",
    link: "https://chat.openai.com",
    category: "Text AI",
    approved: true,
    requestedBy: "Admin",
  },
  {
    name: "Midjourney",
    description: "AI image generation from text prompts.",
    link: "https://www.midjourney.com",
    category: "Image AI",
    approved: true,
    requestedBy: "Admin",
  },
  {
    name: "Runway ML",
    description: "AI-powered video creation and editing.",
    link: "https://runwayml.com",
    category: "Video AI",
    approved: true,
    requestedBy: "Admin",
  },
];

const AIToolsPage = () => {
  const [tools, setTools] = useState(initialTools);
  const [search, setSearch] = useState("");

  // 🔔 Tool request (user side)
  const [request, setRequest] = useState({
    name: "",
    description: "",
    link: "",
    category: "",
    requestedBy: "User",
  });

  // ➕ Submit tool request
  const submitRequest = () => {
    if (!request.name || !request.link || !request.category) {
      return alert("Please complete all fields");
    }
    setTools([...tools, { ...request, approved: false }]);
    setRequest({ name: "", description: "", link: "", category: "", requestedBy: "User" });
  };

  // ✅ Approve (Admin simulation)
  const approveTool = (index) => {
    const updated = [...tools];
    updated[index].approved = true;
    updated[index].requestedBy = "Admin Approved";
    setTools(updated);
  };

  // ❌ Remove
  const removeTool = (index) => {
    setTools(tools.filter((_, i) => i !== index));
  };

  // 🔍 Filter
  const filteredTools = tools.filter((tool) =>
    tool.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#070b16] via-[#0b1224] to-black text-white px-6 pb-20">
      {/* Header */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center text-4xl md:text-5xl font-extrabold mt-10 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
      >
        AI Technology Hub 🚀
      </motion.h1>

      <p className="text-center text-gray-400 mt-3">
        Discover, request & explore the latest AI tools
      </p>

      {/* 🔍 Search */}
      <div className="flex justify-center mt-8">
        <div className="flex items-center gap-2 bg-black/40 border border-gray-700 rounded-xl px-4 py-2 w-full max-w-md">
          <Search size={18} className="text-gray-400" />
          <input
            placeholder="Search AI tools..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-transparent outline-none text-white w-full"
          />
        </div>
      </div>

      {/* 📨 Tool Request */}
      <div className="max-w-4xl mx-auto mt-10 bg-black/40 border border-gray-700 rounded-2xl p-6 backdrop-blur">
        <h2 className="text-2xl font-semibold text-purple-300 flex items-center gap-2 mb-4">
          <PlusCircle /> Request New AI Tool
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <input
            placeholder="Tool Name"
            value={request.name}
            onChange={(e) => setRequest({ ...request, name: e.target.value })}
            className="input"
          />
          <input
            placeholder="Category (Text, Image, Video, Code, Audio)"
            value={request.category}
            onChange={(e) => setRequest({ ...request, category: e.target.value })}
            className="input"
          />
          <input
            placeholder="Tool Website"
            value={request.link}
            onChange={(e) => setRequest({ ...request, link: e.target.value })}
            className="input"
          />
          <input
            placeholder="Short Description"
            value={request.description}
            onChange={(e) => setRequest({ ...request, description: e.target.value })}
            className="input"
          />
        </div>
        <button
          onClick={submitRequest}
          className="mt-4 px-6 py-2 rounded-xl bg-gradient-to-r from-purple-500 to-cyan-500 font-semibold hover:scale-105 transition"
        >
          Send Request
        </button>
      </div>

      {/* 🧠 Tools Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mt-12">
        <AnimatePresence>
          {filteredTools.map((tool, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className={`rounded-2xl p-5 bg-black/40 backdrop-blur border ${
                tool.approved ? "border-cyan-500/30" : "border-yellow-500/40"
              } shadow-lg`}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold text-cyan-300">{tool.name}</h3>
                {tool.approved ? (
                  <ShieldCheck className="text-emerald-400" />
                ) : (
                  <Clock className="text-yellow-400" />
                )}
              </div>

              <p className="text-gray-400 text-sm mt-1">{tool.description}</p>
              <p className="text-xs text-purple-400 mt-2">Category: {tool.category}</p>

              <a
                href={tool.link}
                target="_blank"
                rel="noreferrer"
                className="text-cyan-400 text-sm underline mt-2 inline-block"
              >
                Visit Tool →
              </a>

              <div className="flex gap-2 mt-4">
                {!tool.approved && (
                  <button
                    onClick={() => approveTool(index)}
                    className="flex items-center gap-1 px-3 py-1 bg-green-500/20 border border-green-400/40 rounded-lg"
                  >
                    <CheckCircle size={16} /> Approve
                  </button>
                )}
                <button
                  onClick={() => removeTool(index)}
                  className="flex items-center gap-1 px-3 py-1 bg-red-500/20 border border-red-400/40 rounded-lg"
                >
                  <XCircle size={16} /> Remove
                </button>
              </div>

              <p className="text-xs text-gray-500 mt-3">
                Requested by: {tool.requestedBy}
              </p>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AIToolsPage;

/* Tailwind helper (optional)
.input {
  @apply bg-black/50 border border-gray-700 rounded-xl p-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-400;
}
*/
