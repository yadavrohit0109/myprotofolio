import React, { useState } from "react";
import { motion } from "framer-motion";

const works = [
  {
    imgSrc: "https://cdn.dribbble.com/userupload/14987419/file/original-23e5a9d2baf6.png",
    logoSrc: "https://cdn-icons-png.flaticon.com/512/4151/4151083.png",
    title: "Voice-to-Voice AI Translator",
    tags: ["React", "Whisper API", "Speech Synthesis"],
    projectLink: "https://github.com/rohityadav1/AI-Voice-Translator",
  },
  {
    imgSrc: "https://cdn.dribbble.com/userupload/14125443/file/original-1e344d1d9f63.png",
    logoSrc: "https://cdn-icons-png.flaticon.com/512/4712/4712027.png",
    title: "AI Video Generator",
    tags: ["Next.js", "Stable Diffusion", "OpenAI"],
    projectLink: "https://github.com/rohityadav1/AI-Video-Generator",
  },
  {
    imgSrc: "https://cdn.dribbble.com/userupload/13974894/file/original-bbd7e6ce3278.png",
    logoSrc: "https://cdn-icons-png.flaticon.com/512/1077/1077012.png",
    title: "AI Image Generator",
    tags: ["Python", "FastAPI", "TailwindCSS"],
    projectLink: "https://github.com/rohityadav1/AI-Image-Generator",
  },
  {
    imgSrc: "https://cdn.dribbble.com/userupload/14719449/file/original-ef1b58dc5f12.png",
    logoSrc: "https://cdn-icons-png.flaticon.com/512/620/620851.png",
    title: "AI Resume Builder (2025)",
    tags: ["Next.js", "OpenAI", "PDFKit"],
    projectLink: "https://github.com/rohityadav1/AI-Resume-Builder-2025",
  },
  {
    imgSrc: "https://cdn.dribbble.com/userupload/13891327/file/original-22a3d4dc7158.png",
    logoSrc: "https://cdn-icons-png.flaticon.com/512/1048/1048953.png",
    title: "AI Code Assistant",
    tags: ["React", "OpenAI GPT", "Syntax Parsing"],
    projectLink: "https://github.com/rohityadav1/AI-Code-Assistant",
  },
  {
    imgSrc: "https://cdn.dribbble.com/userupload/14494351/file/original-3c6c4df8b6dc.png",
    logoSrc: "https://cdn-icons-png.flaticon.com/512/6336/6336055.png",
    title: "AI News Summarizer",
    tags: ["Python", "Flask", "NLP"],
    projectLink: "https://github.com/rohityadav1/AI-News-Summarizer",
  },
];

const Work = () => {
  const [showProjects, setShowProjects] = useState(false);

  return (
    <section
      id="work"
      className="relative py-24 px-6 bg-gradient-to-br from-[#050a1f] via-[#0b1033] to-[#090f22] text-gray-100 overflow-hidden"
    >
      {/* Glowing AI background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,_rgba(0,122,255,0.15)_0%,_transparent_80%)] blur-3xl"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://cdn.pixabay.com/photo/2023/02/24/16/58/artificial-intelligence-7809274_1280.jpg')] bg-cover bg-center opacity-5"></div>

      {/* Floating animated lights */}
      <motion.div
        className="absolute top-20 left-1/4 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl"
        animate={{ x: [0, 30, -30, 0], y: [0, 20, -20, 0] }}
        transition={{ repeat: Infinity, duration: 20 }}
      />
      <motion.div
        className="absolute bottom-20 right-1/4 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl"
        animate={{ x: [0, -30, 30, 0], y: [0, -25, 25, 0] }}
        transition={{ repeat: Infinity, duration: 22 }}
      />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center relative z-10"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 mb-6">
          Featured AI Creations 🤖
        </h2>

        <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Explore the most innovative and trending AI projects created across the internet — designed to inspire the future of intelligence.
        </p>
      </motion.div>

      {/* Mobile Menu Button */}
      <div className="flex justify-center mb-8 relative z-10">
        <button
          onClick={() => setShowProjects(!showProjects)}
          className="px-6 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
        >
          {showProjects ? "🔽 Hide Projects" : "🔍 Show Projects"}
        </button>
      </div>

      {/* Projects Grid */}
      {showProjects && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {works.slice(0, 6).map(({ imgSrc, logoSrc, title, tags, projectLink }, key) => (
            <motion.a
              key={key}
              href={projectLink}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: key * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-gray-900/40 border border-blue-400/20 rounded-3xl p-5 overflow-hidden shadow-lg backdrop-blur-md hover:scale-[1.03] hover:border-blue-400/40 hover:shadow-blue-500/30 transition-all duration-500"
            >
              <div className="relative overflow-hidden rounded-2xl mb-5">
                <img
                  src={imgSrc}
                  alt={title}
                  className="w-full h-48 object-cover rounded-2xl group-hover:scale-110 transition-transform duration-700"
                />
                <img
                  src={logoSrc}
                  alt={`${title} logo`}
                  className="absolute top-3 left-3 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md p-2 border border-white/20 shadow-lg group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              <h3 className="text-xl font-bold text-blue-300 group-hover:text-white transition flex items-center justify-center gap-2">
                {title}
              </h3>

              <div className="flex flex-wrap gap-2 mt-3 justify-center">
                {tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full border border-blue-400/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-5 text-sm text-gray-400 underline group-hover:text-purple-300 transition">
                View Project →
              </div>

              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-700"></div>
            </motion.a>
          ))}
        </motion.div>
      )}
    </section>
  );
};

export default Work;
