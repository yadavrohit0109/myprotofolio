import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Play, 
  Youtube, 
  Zap, 
  Users, 
  Award 
} from "lucide-react";

const YouTubePage = () => {
  const [currentVideo, setCurrentVideo] = useState(0);
  const [hoveredVideo, setHoveredVideo] = useState(null);
  const intervalRef = useRef(null);

  const channelLink = "https://www.youtube.com/@digital-eduhub/featured";
  
  const videos = [
    { 
      id: "ODRFhhyhvTQ", 
      title: "Spring Boot Microservices Tutorial", 
      views: "12K", 
      duration: "18:45"
    },
    { 
      id: "PEUdwsESgY0", 
      title: "Java 8 Streams Masterclass", 
      views: "8.5K", 
      duration: "22:10"
    },
    { 
      id: "7j0e760LjGE", 
      title: "REST API with Spring Boot", 
      views: "15K", 
      duration: "25:30"
    },
    { 
      id: "wow39q2VEqY", 
      title: "Hibernate JPA Crash Course", 
      views: "9.2K", 
      duration: "19:20"
    },
  ];

  // Auto-advance carousel - FIXED
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentVideo((prev) => (prev + 1) % videos.length);
    }, 8000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <section id="youtube" className="relative min-h-screen py-24 px-6 bg-gradient-to-br from-slate-900 via-orange-900/20 to-emerald-900/20 overflow-hidden">
      {/* Background - FIXED CSS */}
      <div className="absolute inset-0 opacity-50">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:80px_80px]" />
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-orange-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-b from-emerald-400/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-3 mb-8 px-8 py-4 bg-white/10 backdrop-blur-xl rounded-3xl border border-orange-400/30 shadow-2xl"
          >
            <div className="w-3 h-3 bg-emerald-400 rounded-full animate-ping" />
            <Youtube className="w-5 h-5 text-red-500" />
            <span className="text-emerald-400 font-mono text-sm">@digital-eduhub</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-5xl lg:text-7xl font-black bg-gradient-to-r from-white via-orange-400 to-emerald-400 bg-clip-text text-transparent mb-6"
          >
            Tech Tutorials
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Learn Java Spring Boot, Microservices, and modern web development through my YouTube tutorials
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Main Video */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Video Container - FIXED sizing */}
            <div className="w-[80%] h-[500px] lg:h-[600px] max-w-[850px] max-h-[550px] mx-auto relative shadow-2xl rounded-3xl overflow-hidden border-4 border-white/20 bg-gradient-to-br from-black/50 to-transparent backdrop-blur-xl">
              <AnimatePresence initial={false} mode="wait">
                <motion.iframe
                  key={videos[currentVideo].id}
                  src={`https://www.youtube.com/embed/${videos[currentVideo].id}?autoplay=0&controls=1&rel=0`}
                  width="100%"
                  height="100%"
                  title={videos[currentVideo].title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="w-full h-full rounded-2xl"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.6 }}
                />
              </AnimatePresence>

              {/* Analytics Overlay */}
              <div className="absolute top-6 right-6 bg-black/80 backdrop-blur-xl p-4 rounded-2xl border border-white/30 text-sm flex flex-col gap-2">
                <div className="flex items-center gap-2 text-emerald-400">
                  <Zap className="w-4 h-4 flex-shrink-0" />
                  <span>{videos[currentVideo].views} views</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <Award className="w-4 h-4 flex-shrink-0" />
                  <span>{videos[currentVideo].duration}</span>
                </div>
              </div>
            </div>

            {/* Dots Navigation */}
            <div className="flex gap-3 justify-center mt-8">
              {videos.map((_, i) => (
                <motion.button
                  key={i}
                  type="button"
                  onClick={() => setCurrentVideo(i)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    i === currentVideo
                      ? "bg-gradient-to-r from-orange-400 to-emerald-400 scale-150 shadow-lg shadow-orange-500/50"
                      : "bg-white/40 hover:bg-white/70 hover:scale-125"
                  }`}
                  whileHover={{ scale: 1.4 }}
                  whileTap={{ scale: 1.2 }}
                />
              ))}
            </div>
          </motion.div>

          {/* Right: Stats + Thumbnails */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Channel Stats */}
            <div className="grid grid-cols-3 gap-6 mb-12">
              {[
                { label: "Subscribers", value: "5.2K", icon: Users, color: "text-emerald-400" },
                { label: "Videos", value: "45", icon: Play, color: "text-orange-400" },
                { label: "Total Views", value: "125K", icon: Youtube, color: "text-red-500" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="group p-6 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 hover:border-orange-400/40 hover:bg-white/10 transition-all text-center cursor-pointer"
                >
                  <stat.icon className={`w-12 h-12 mx-auto mb-4 ${stat.color} group-hover:scale-110 transition-transform duration-300`} />
                  <div className="text-3xl lg:text-4xl font-black text-white mb-2">{stat.value}</div>
                  <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Thumbnail Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {videos.map((video, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group relative bg-white/5 backdrop-blur-xl rounded-2xl overflow-hidden border-2 border-white/10 hover:border-orange-400/50 hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-300 cursor-pointer"
                >
                  <div className="aspect-video relative overflow-hidden rounded-t-2xl">
                    <iframe
                      src={`https://www.youtube.com/embed/${video.id}?controls=0&rel=0`}
                      className="absolute inset-0 w-full h-full rounded-t-2xl"
                      allowFullScreen
                      title={video.title}
                    />
                    
                    {/* Thumbnail overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end p-6 transition-opacity duration-300 group-hover:opacity-100 opacity-0">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-10 bg-gradient-to-r from-orange-400 to-emerald-400 rounded-lg flex items-center justify-center shadow-2xl flex-shrink-0">
                          <Play className="w-6 h-6 text-white ml-1" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-bold text-white text-base leading-tight line-clamp-2 mb-1">{video.title}</h4>
                          <div className="flex items-center gap-2 text-xs text-gray-300">
                            <span>{video.views}</span>
                            <span>•</span>
                            <span>{video.duration}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-5">
                    <a
                      href={channelLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full block bg-gradient-to-r from-orange-400 to-emerald-400 hover:from-orange-300 hover:to-emerald-300 text-black font-semibold py-3 px-6 rounded-xl text-center transition-all duration-300 shadow-lg hover:shadow-orange-500/50 hover:scale-[1.02]"
                    >
                      Watch Now →
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-center mt-16"
            >
              <a
                href={channelLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-12 py-6 bg-gradient-to-r from-orange-400 via-emerald-400 to-cyan-400 text-black font-bold rounded-3xl shadow-2xl text-lg hover:shadow-orange-500/50 hover:scale-105 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Youtube className="w-7 h-7" />
                Subscribe to @digital-eduhub
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Global Styles - SAFE */}
      <style jsx global>{`
        @keyframes grid-bg {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 0.7; }
        }
        .animate-pulse {
          animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </section>
  );
};

export default YouTubePage;
