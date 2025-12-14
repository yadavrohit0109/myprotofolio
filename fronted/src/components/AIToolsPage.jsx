import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle,
  XCircle,
  PlusCircle,
  Star,
  Search,
  Flame,
} from "lucide-react";

const initialTools = [
  {
    name: "ChatGPT",
    description: "Conversational AI for text, code, and automation.",
    link: "https://chat.openai.com",
    approved: true,
    category: "Text AI",
    rating: 5,
    trending: true,
  },
  {
    name: "Midjourney",
    description: "AI image generator that turns text into stunning art.",
    link: "https://www.midjourney.com",
    approved: true,
    category: "Image AI",
    rating: 4,
    trending: false,
  },
  {
    name: "Runway ML",
    description: "AI video generation and editing platform.",
    link: "https://runwayml.com",
    approved: true,
    category: "Video AI",
    rating: 4,
    trending: true,
  },
];

const AIToolsPage = () => {
  const [tools, setTools] = useState(initialTools);
  const [search, setSearch] = useState("");

  const [newTool, setNewTool] = useState({
    name: "",
    description: "",
    link: "",
    category: "",
  });

  const handleAddTool = () => {
    if (!newTool.name || !newTool.link || !newTool.category) {
      return alert("Please fill all fields");
    }
    setTools([
      ...tools,
      { ...newTool, approved: false, rating: 0, trending: false },
    ]);
    setNewTool({ name: "", description: "", link: "", category: "" });
  };

  const approveTool = (index) => {
    const updated = [...tools];
    updated[index].approved = true;
    setTools(updated);
  };

  const removeTool = (index) => {
    setTools(tools.filter((_, i) => i !== index));
  };

  const filteredTools = tools.filter((tool) =>
    tool.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0f1a] via-[#0d1525] to-[#080c16] text-white px-6">
      {/* Header */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center text-4xl md:text-5xl font-extrabold mt-10 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
      >
        AI Tools & Technologies Hub 🚀
      </motion.h1>

      <p className="text-center text-gray-400 mt-3">
        Explore trending AI tools & request new technologies
      </p>

      {/* Search */}
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

      {/* Add Tool */}
      <div className="max-w-4xl mx-auto mt-10 bg-black/40 border border-gray-700 rounded-2xl p-6 backdrop-blur">
        <h2 className="text-2xl font-semibold text-purple-300 flex items-center gap-2 mb-4">
          <PlusCircle /> Request New AI Tool
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <input
            placeholder="Tool Name"
            value={newTool.name}
            onChange={(e) => setNewTool({ ...newTool, name: e.target.value })}
            className="input"
          />
          <input
            placeholder="Category (Text, Image, Video, Code, Audio)"
            value={newTool.category}
            onChange={(e) => setNewTool({ ...newTool, category: e.target.value })}
            className="input"
          />
          <input
            placeholder="Tool Website"
            value={newTool.link}
            onChange={(e) => setNewTool({ ...newTool, link: e.target.value })}
            className="input"
          />
          <input
            placeholder="Short Description"
            value={newTool.description}
            onChange={(e) => setNewTool({ ...newTool, description: e.target.value })}
            className="input"
          />
        </div>
        <button
          onClick={handleAddTool}
          className="mt-4 px-6 py-2 rounded-xl bg-gradient-to-r from-purple-500 to-cyan-500 font-semibold hover:scale-105 transition"
        >
          Send Request
        </button>
      </div>

      {/* Tools Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mt-12 pb-20">
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
                {tool.trending && <Flame className="text-orange-400" />}
              </div>

              <p className="text-gray-400 text-sm mt-1">{tool.description}</p>
              <p className="text-xs text-purple-400 mt-2">Category: {tool.category}</p>

              {/* Rating */}
              <div className="flex gap-1 mt-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={i < tool.rating ? "text-yellow-400" : "text-gray-600"}
                  />
                ))}
              </div>

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
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AIToolsPage;

/* Tailwind helper
.input {
  @apply bg-black/50 border border-gray-700 rounded-xl p-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-400;
}
*/
