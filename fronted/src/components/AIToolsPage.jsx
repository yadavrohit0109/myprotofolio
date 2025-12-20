import React, { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, XCircle, PlusCircle } from "lucide-react";


const AIToolsPage = () => {
  const [tools, setTools] = useState([
    {
      name: "ChatGPT",
      description: "OpenAI’s conversational AI for text generation and automation.",
      link: "https://chat.openai.com",
      approved: true,
    },
    {
      name: "Midjourney",
      description: "AI image generator that turns text into stunning art.",
      link: "https://www.midjourney.com",
      approved: true,
    },
  ]);


  const [newTool, setNewTool] = useState({
    name: "",
    description: "",
    link: "",
  });


  const handleAddTool = () => {
    if (!newTool.name || !newTool.link) return alert("Please fill all fields!");
    setTools([...tools, { ...newTool, approved: false }]);
    setNewTool({ name: "", description: "", link: "" });
  };


  const approveTool = (index) => {
    const updated = [...tools];
    updated[index].approved = true;
    setTools(updated);
  };


  const removeTool = (index) => {
    const updated = tools.filter((_, i) => i !== index);
    setTools(updated);
  };


  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#0a0f1a] via-[#0d1525] to-[#080c16] text-white relative overflow-hidden">
      {/* Glowing background orbs */}
      <motion.div
        className="absolute top-20 left-1/3 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl"
        animate={{ x: [0, 40, -40, 0], y: [0, 30, -30, 0] }}
        transition={{ repeat: Infinity, duration: 18 }}
      />
      <motion.div
        className="absolute bottom-20 right-1/3 w-96 h-96 bg-cyan-400/15 rounded-full blur-3xl"
        animate={{ x: [0, -40, 40, 0], y: [0, -20, 20, 0] }}
        transition={{ repeat: Infinity, duration: 22 }}
      />


      {/* Header */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 text-transparent bg-clip-text mt-10 mb-6 z-10"
      >
        Daily AI Tools Hub
      </motion.h1>


      {/* Add Tool Form */}
      <div className="z-10 w-11/12 md:w-4/5 lg:w-3/5 bg-black/40 border border-gray-700 rounded-2xl p-6 backdrop-blur-sm shadow-lg mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-purple-300 flex items-center gap-2">
          <PlusCircle size={22} /> Add New Tool
        </h2>
        <div className="grid md:grid-cols-3 gap-4 mb-4">
          <input
            type="text"
            placeholder="Tool Name"
            value={newTool.name}
            onChange={(e) => setNewTool({ ...newTool, name: e.target.value })}
            className="bg-black/50 border border-gray-700 rounded-xl p-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <input
            type="text"
            placeholder="Description"
            value={newTool.description}
            onChange={(e) => setNewTool({ ...newTool, description: e.target.value })}
            className="bg-black/50 border border-gray-700 rounded-xl p-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <input
            type="text"
            placeholder="Tool Link (https://...)"
            value={newTool.link}
            onChange={(e) => setNewTool({ ...newTool, link: e.target.value })}
            className="bg-black/50 border border-gray-700 rounded-xl p-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>
        <button
          onClick={handleAddTool}
          className="px-6 py-2 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl font-semibold hover:scale-105 transition-transform"
        >
          Add Tool
        </button>
      </div>


      {/* Tool List */}
      <div className="z-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-11/12 md:w-4/5 pb-16">
        {tools.map((tool, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`p-5 rounded-2xl border ${
              tool.approved ? "border-cyan-500/30" : "border-yellow-500/30"
            } bg-black/40 backdrop-blur-md shadow-lg hover:shadow-cyan-500/10 transition-shadow`}
          >
            <h3 className="text-xl font-bold text-cyan-300">{tool.name}</h3>
            <p className="text-gray-400 text-sm mt-1">{tool.description}</p>
            <a
              href={tool.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-cyan-400 text-sm underline mt-2 inline-block"
            >
              Visit Tool →
            </a>


            <div className="flex gap-3 mt-4">
              {!tool.approved && (
                <button
                  onClick={() => approveTool(index)}
                  className="flex items-center gap-1 px-3 py-1 bg-green-500/20 border border-green-400/40 rounded-lg hover:bg-green-500/30 transition"
                >
                  <CheckCircle size={16} /> Approve
                </button>
              )}
              <button
                onClick={() => removeTool(index)}
                className="flex items-center gap-1 px-3 py-1 bg-red-500/20 border border-red-400/40 rounded-lg hover:bg-red-500/30 transition"
              >
                <XCircle size={16} /> Remove
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
export default AIToolsPage;