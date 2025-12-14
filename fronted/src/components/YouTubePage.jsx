import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Play, 
  Youtube, 
  Zap, 
  Users, 
  Award, 
  Code,
  Brain
} from "lucide-react";

const YouTubePage = () => {
  const [currentVideo, setCurrentVideo] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hoveredVideo, setHoveredVideo] = useState(null);
  const intervalRef = useRef(null);

  // Updated with Java + Tech content
  const channelLink = "https://www.youtube.com/@digital-eduhub/featured";
  
  const videos = [
    { 
      id: "ODRFhhyhvTQ", 
      title: "Spring Boot Microservices Tutorial", 
      views: "12K", 
      duration: "18:45",
      category: "java"
    },
    { 
      id: "PEUdwsESgY0", 
      title: "Java 8 Streams Masterclass", 
      views: "8.5K", 
      duration: "22:10",
      category: "java"
    },
    { 
      id: "7j0e760LjGE", 
      title: "REST API with Spring Boot", 
      views: "15K", 
      duration: "25:30",
      category: "backend"
    },
    { 
      id: "wow39q2VEqY", 
      title: "Hibernate JPA Crash Course", 
      views: "9.2K", 
      duration: "19:20",
      category: "java"
    },
  ];

  // Auto-advance carousel
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentVideo((prev) => (prev + 1) % videos.length);
    }, 8000);

    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <section id="youtube" className="relative min-h-screen py-24 px-6 bg-gradient-to-br from-slate-900 via-orange-900/20 to-emerald-900/20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-slate-900/50 [background-size:80px_80px] animate-pulse" />
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-orange-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-b from-emerald-400/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}} />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <motion.div 
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="inline-flex items-center gap-3 mb-8 px-8 py-4 bg-white/10 backdrop-blur-xl rounded-3xl border border-orange-400/30"
          >
            <div className="w-3 h-3 bg-emerald-400 rounded-full animate-ping" />
            <Youtube className="w-5 h-5 text-red-500" />
            <span className="text-emerald-400 font-mono text-sm">@digital-eduhub</span>
          </motion.div>
          <h2 className="text-5xl lg:text-7xl font-black bg-gradient-to-r from-white via-orange-400 to-emerald-400 bg-clip-text text-transparent mb-6">
            Tech Tutorials
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Learn Java Spring Boot, Microservices, and modern web development through my YouTube tutorials
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Main Video Player + Analytics */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative group"
          >
            {/* Main Video - 80% width, full height */}
            <div className="w-[80%] h-[100%] max-w-[850px] max-h-[550px] mx-auto relative shadow-2xl rounded-3xl overflow-hidden border-4 border-white/20 bg-gradient-to-br from-black/50 backdrop-blur-xl">
              <AnimatePresence mode="wait">
                <motion.iframe
                  key={videos[currentVideo].id}
                  src={`https://www.youtube.com/embed/${videos[currentVideo].id}?autoplay=0&controls=1`}
                  width="100%"
                  height="100%"
                  title={videos[currentVideo].title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="rounded-2xl w-full h-full"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.6 }}
                />
              </AnimatePresence>

              {/* Video Analytics Overlay */}
              <motion.div 
                className="absolute top-6 right-6 bg-black/70 backdrop-blur-xl p-4 rounded-2xl border border-white/20 flex flex-col gap-2 text-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <div className="flex items-center gap-2 text-emerald-400">
                  <Zap className="w-4 h-4" />
                  <span>{videos[currentVideo].views} views</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <Award className="w-4 h-4" />
                  <span>{videos[currentVideo].duration}</span>
                </div>
              </motion.div>

              {/* Play Button Overlay */}
              <motion.button
                onClick={() => setIsPlaying(!isPlaying)}
                className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm hover:bg-black/50 transition-all group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div 
                  animate={{ scale: isPlaying ? 0 : 1 }}
                  className="w-24 h-24 bg-gradient-to-r from-orange-400 to-emerald-400 rounded-full flex items-center justify-center shadow-2xl border-4 border-white/20"
                >
                  <Play className="w-12 h-12 ml-2 text-white font-bold" />
                </motion.div>
              </motion.button>
            </div>

            {/* Video Carousel Dots */}
            <div className="flex gap-3 justify-center mt-8">
              {videos.map((_, i) => (
                <motion.button
                  key={i}
                  onClick={() => setCurrentVideo(i)}
                  className={`w-4 h-4 rounded-full transition-all ${
                    i === currentVideo
                      ? "bg-gradient-to-r from-orange-400 to-emerald-400 scale-150 shadow-lg"
                      : "bg-white/40 hover:bg-white/70 hover:scale-125"
                  }`}
                  whileHover={{ scale: 1.4 }}
                  whileTap={{ scale: 1.2 }}
                />
              ))}
            </div>
          </motion.div>

          {/* Right: Video Grid + Stats */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            {/* Channel Stats */}
            <div className="grid grid-cols-3 gap-4 mb-12">
              {[
                { label: "Subscribers", value: "5.2K", icon: Users, color: "text-emerald-400" },
                { label: "Videos", value: "45", icon: Play, color: "text-orange-400" },
                { label: "Total Views", value: "125K", icon: Youtube, color: "text-purple-400" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="group p-6 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 hover:border-orange-400/30 hover:bg-white/10 transition-all text-center"
                >
                  <stat.icon className={`w-10 h-10 mx-auto mb-3 ${stat.color} group-hover:scale-110`} />
                  <div className="text-2xl font-black text-white mb-1">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Thumbnail Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {videos.map((video, i) => (
                <motion.div
                  key={i}
                  onHoverStart={() => setHoveredVideo(i)}
                  onHoverEnd={() => setHoveredVideo(null)}
                  whileHover={{ y: -8 }}
                  className="group relative bg-white/5 backdrop-blur-xl rounded-2xl overflow-hidden border-2 border-white/10 hover:border-orange-400/40 hover:shadow-2xl transition-all cursor-pointer"
                >
                  <div className="relative pt-[56.25%]">
                    <iframe
                      src={`https://www.youtube.com/embed/${video.id}?controls=0`}
                      className="absolute inset-0 w-full h-full rounded-t-2xl"
                      allowFullScreen
                    />
                    {/* Thumbnail overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-8 bg-gradient-to-r from-orange-400 to-emerald-400 rounded flex items-center justify-center">
                          <Play className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-white text-sm leading-tight">{video.title}</h4>
                          <div className="flex items-center gap-2 text-xs text-gray-400 mt-1">
                            <span>{video.views} •</span>
                            <span>{video.duration}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Watch button */}
                  <div className="p-4">
                    <a
                      href={channelLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full block bg-gradient-to-r from-orange-400 to-emerald-400 hover:from-orange-300 hover:to-emerald-300 text-black font-semibold py-2 px-4 rounded-xl text-center transition-all hover:scale-105"
                    >
                      Watch Now →
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mt-12"
            >
              <a
                href={channelLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-orange-400 via-emerald-400 to-cyan-400 text-black font-bold rounded-3xl shadow-2xl hover:shadow-orange-500/50 hover:scale-105 transition-all text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Youtube className="w-6 h-6" />
                Subscribe to @digital-eduhub
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .bg-grid-slate-900\\\/50 {
          background-image: 
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px);
        }
      `}</style>
    </section>
  );
};

export default YouTubePage;
