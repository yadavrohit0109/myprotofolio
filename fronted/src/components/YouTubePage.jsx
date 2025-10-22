import React from "react";
import { motion } from "framer-motion";

const YouTubePage = () => {
  // ✅ Your actual YouTube Channel URL
  const channelLink = "https://www.youtube.com/@digital-eduhub/featured";

  // 🎬 Add your other video IDs here (from YouTube URLs)
  const otherVideos = [
    { id: "ODRFhhyhvTQ", title: "AI Vision Future" },
    { id: "PEUdwsESgY0", title: "Notepad Download " },
    { id: "7j0e760LjGE", title: "C Language Explained" },
    { id: "wow39q2VEqY", title: "Vs Code Download in Pc" }, // ✅ Added your new video
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#0a0f1a] via-[#0d1525] to-[#080c16] text-white relative overflow-hidden">
      {/* Background glow */}
      <motion.div
        className="absolute top-24 left-1/3 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl"
        animate={{ x: [0, 40, -40, 0], y: [0, 30, -30, 0] }}
        transition={{ repeat: Infinity, duration: 18 }}
      />
      <motion.div
        className="absolute bottom-24 right-1/3 w-96 h-96 bg-cyan-400/15 rounded-full blur-3xl"
        animate={{ x: [0, -40, 40, 0], y: [0, -20, 20, 0] }}
        transition={{ repeat: Infinity, duration: 22 }}
      />

      {/* Content */}
      <div className="z-10 text-center px-4 w-full flex flex-col items-center">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 text-transparent bg-clip-text mb-8"
        >
          AI Intelligence Vision Hub
        </motion.h1>

        {/* Featured video (80% width) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="w-11/12 md:w-4/5 lg:w-3/5 aspect-video rounded-2xl overflow-hidden border border-gray-700 shadow-[0_0_25px_rgba(100,100,255,0.15)] bg-black/40 backdrop-blur-sm"
        >
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/ODRFhhyhvTQ?si=3FHKsslGrblch5Gj"
            title="AI Vision Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="rounded-2xl"
          ></iframe>
        </motion.div>

        <p className="mt-6 text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
          Discover the transformative power of Artificial Intelligence through this immersive video experience.  
          Step into a future driven by innovation, data, and imagination.
        </p>

        {/* Channel Button */}
        <a
          href={channelLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 px-6 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl font-semibold hover:scale-105 transition-transform"
        >
          🔗 Visit My YouTube Channel
        </a>

        {/* Divider Line */}
        <div className="mt-12 mb-6 w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"></div>

        {/* Other Videos Grid */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl font-semibold text-cyan-400 mb-8"
        >
          More Videos From My Channel
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-11/12 md:w-4/5 pb-20">
          {otherVideos.map((video, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-black/40 border border-gray-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-cyan-400/20 transition-all hover:scale-[1.02] backdrop-blur-md"
            >
              <iframe
                width="100%"
                height="200"
                src={`https://www.youtube.com/embed/${video.id}`}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
              <div className="p-3 text-left">
                <h3 className="text-lg font-semibold text-purple-300 mb-1">
                  {video.title}
                </h3>
                <a
                  href={channelLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-purple-400 text-sm underline"
                >
                  Watch on YouTube →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default YouTubePage;
