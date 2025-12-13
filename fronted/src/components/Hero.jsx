import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ButtonPrimary, ButtonOutline } from "./Button";
import { 
  Brain, 
  Zap, 
  Code, 
  Rocket, 
  Github, 
  Linkedin,
  Download,
  ChevronRight 
} from "lucide-react";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeTab, setActiveTab] = useState("ai");
  const intervalRef = useRef(null);

  // Auto-slide
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 4500);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const slides = [
    "/assets/pic1.jpeg",
    "/assets/pic2.png",
    "/assets/pic3.png",
  ];

  const tabs = [
    { id: "ai", label: "AI/ML", icon: Brain, color: "bg-gradient-to-r from-emerald-400 to-cyan-400" },
    { id: "web", label: "Web Dev", icon: Code, color: "bg-gradient-to-r from-blue-400 to-indigo-400" },
    { id: "mobile", label: "Mobile", icon: Rocket, color: "bg-gradient-to-r from-purple-400 to-pink-400" },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % 3);
  };

  return (
    <section className="min-h-screen flex flex-col lg:flex-row items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 overflow-hidden relative px-4 py-16">
      
      {/* Background Decorations */}
      <div className="absolute inset-0">
        {/* Grid */}
        <div className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:80px_80px]" />
        
        {/* Floating Orbs */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-blue-500/20 to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-b from-emerald-400/20 to-transparent rounded-full blur-3xl animate-pulse animation-delay-2000" />
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-l from-purple-500/20 to-transparent rounded-full blur-3xl animate-pulse animation-delay-4000" />
      </div>

      {/* Left Content */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full lg:w-1/2 mb-12 lg:mb-0 lg:pr-8 z-10"
      >
        {/* Status Badge */}
        <div className="flex items-center gap-4 mb-8 p-6 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 max-w-sm">
          <div className="relative">
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-cyan-400 rounded-2xl flex items-center justify-center shadow-xl">
              <Zap className="w-7 h-7 text-slate-900 animate-pulse" />
            </div>
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400/30 to-cyan-400/30 rounded-3xl blur animate-ping" />
          </div>
          <div>
            <div className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Live Now
            </div>
            <div className="text-emerald-400 text-sm font-mono">AI Engineer • Available</div>
          </div>
        </div>

        {/* Main Title */}
        <h1 className="text-5xl lg:text-7xl font-black leading-tight mb-6 bg-gradient-to-r from-white via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
          AI‑Powered
          <br />
          <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Digital Worlds
          </span>
        </h1>

        <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-lg">
          Crafting intelligent web experiences with React, Three.js, AI, and immersive animations.
        </p>

        {/* Skill Tabs */}
        <div className="flex flex-wrap gap-3 mb-10">
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-2xl font-semibold border-2 flex items-center gap-2 transition-all ${
                activeTab === tab.id
                  ? `${tab.color} text-black shadow-2xl shadow-emerald-500/25 border-transparent`
                  : "border-white/20 bg-white/5 text-gray-300 hover:border-white/40 hover:bg-white/10 hover:text-white"
              }`}
            >
              <tab.icon className="w-5 h-5" />
              {tab.label}
            </motion.button>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <ButtonPrimary 
            href="/Rohit_Yadav_Resume.pdf" 
            label="Download Resume" 
            icon="Download" 
          />
          <ButtonOutline 
            href="#projects" 
            label="View Projects" 
            icon="arrow_downward" 
          />
        </div>

        {/* Social Links */}
        <div className="flex gap-4 pt-8 border-t border-white/10">
          <motion.a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ y: -4, scale: 1.1 }}
            className="p-3 bg-white/10 hover:bg-white/20 rounded-xl border border-white/20 transition-all"
          >
            <Github className="w-5 h-5 text-gray-300 hover:text-white" />
          </motion.a>
          <motion.a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ y: -4, scale: 1.1 }}
            className="p-3 bg-white/10 hover:bg-white/20 rounded-xl border border-white/20 transition-all"
          >
            <Linkedin className="w-5 h-5 text-gray-300 hover:text-white" />
          </motion.a>
        </div>
      </motion.div>

      {/* Right Slider */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full lg:w-1/2 flex items-center justify-center relative"
        onMouseEnter={() => intervalRef.current && clearInterval(intervalRef.current)}
        onMouseLeave={() => {
          if (!intervalRef.current) {
            intervalRef.current = setInterval(() => {
              setCurrentSlide((prev) => (prev + 1) % 3);
            }, 4500);
          }
        }}
      >
        <div className="w-[90%] lg:w-[70%] h-[60vh] lg:h-[75vh] relative rounded-3xl overflow-hidden border-2 border-white/20 shadow-2xl backdrop-blur-xl bg-white/5">
          
          {/* Slide Image */}
          <AnimatePresence mode="wait">
            <motion.img
              key={currentSlide}
              src={slides[currentSlide]}
              alt="Project showcase"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </AnimatePresence>

          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

          {/* Progress Bar */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-48 h-2 bg-white/20 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-gradient-to-r from-emerald-400 to-cyan-400"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ 
                duration: 4.5, 
                repeat: Infinity,
                repeatType: "loop"
              }}
              style={{ originX: 0 }}
            />
          </div>

          {/* Next Button */}
          <motion.button
            onClick={nextSlide}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 hover:bg-black/70 backdrop-blur-xl border border-white/30 transition-all"
          >
            <ChevronRight className="w-5 h-5" />
          </motion.button>

          {/* Dots */}
          <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-2">
            {slides.map((_, i) => (
              <motion.button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`w-3 h-3 rounded-full transition-all ${
                  i === currentSlide
                    ? "bg-cyan-400 scale-125 shadow-lg"
                    : "bg-white/40 hover:bg-white/60"
                }`}
                whileHover={{ scale: 1.4 }}
                whileTap={{ scale: 1.1 }}
              />
            ))}
          </div>
        </div>
      </motion.div>

      {/* Custom Animation Classes */}
      <style jsx global>{`
        @keyframes animation-delay-2000 {
          animation-delay: 2s;
        }
        @keyframes animation-delay-4000 {
          animation-delay: 4s;
        }
        .animate-spin-slow {
          animation: spin 3s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
