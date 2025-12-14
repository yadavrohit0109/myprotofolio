import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ButtonPrimary, ButtonOutline } from "./Button";
import { 
  Brain, 
  Zap, 
  Code, 
  Rocket, 
  Github, 
  Linkedin,
  Download
} from "lucide-react";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const intervalRef = useRef(null);

  const slides = [
    "/assets/pic1.jpeg",
    "/assets/pic2.png",
    "/assets/pic3.png",
  ];

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  const goToSlide = (index) => setCurrentSlide(index);

  return (
    <section className="min-h-screen flex flex-col lg:flex-row items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 overflow-hidden relative px-4 py-16">
      
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:80px_80px]" />
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-blue-500/20 to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-b from-emerald-400/20 to-transparent rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}} />
      </div>

      {/* Left Content */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        className="w-full lg:w-1/2 mb-12 lg:mb-0 lg:pr-8 z-10 text-center lg:text-left"
      >
        <div className="flex items-center justify-center lg:justify-start gap-4 mb-8 p-6 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 max-w-sm mx-auto lg:mx-0">
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
            <div className="text-emerald-400 text-sm font-mono">AI and java Developer Engineer • Available</div>
          </div>
        </div>

        <h1 className="text-5xl lg:text-7xl font-black leading-tight mb-6 bg-gradient-to-r from-white via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
          AI‑Powered
          <br />
          <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Digital Worlds
          </span>
        </h1>

        <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-lg mx-auto lg:mx-0">
          I’m a passionate developer dedicated to building futuristic, responsive, and performance-optimized websites — blending AI, design, and code.
        </p>

        <div className="flex flex-wrap gap-3 mb-10 justify-center lg:justify-start">
          {[
            { label: "AI/ML", icon: Brain, color: "from-emerald-400 to-cyan-400" },
            { label: "Web Dev", icon: Code, color: "from-blue-400 to-indigo-400" },
            { label: "Mobile", icon: Rocket, color: "from-purple-400 to-pink-400" },
          ].map((tab, i) => (
            <motion.button
              key={i}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-2xl font-semibold border-2 flex items-center gap-2 transition-all ${
                i === 0
                  ? `bg-gradient-to-r ${tab.color} text-black shadow-2xl shadow-emerald-500/25 border-transparent`
                  : "border-white/20 bg-white/5 text-gray-300 hover:border-white/40 hover:bg-white/10 hover:text-white"
              }`}
            >
              <tab.icon className="w-5 h-5" />
              {tab.label}
            </motion.button>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-center lg:justify-start">
          <ButtonPrimary href="/Rohit_Yadav_Resume.pdf" label="Download Resume" icon="Download" />
          <ButtonOutline href="#projects" label="View Projects" icon="arrow_downward" />
        </div>
      </motion.div>

      {/* PERFECT 60% WIDTH / 80% HEIGHT SLIDESHOW */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full lg:w-1/2 h-[90vh] lg:h-[100vh] flex items-center justify-center relative p-8"
>
  {/* MAIN CONTAINER - YOUR EXACT SPECS */}
  <div className="w-[80%] h-[100%] max-w-[850px] max-h-[950px] relative shadow-2xl rounded-3xl overflow-hidden border-4 border-white/20 bg-gradient-to-br from-white/10 via-transparent to-black/20 backdrop-blur-xl">

          {/* IMAGE - FITS PERFECTLY IN CONTAINER */}
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, scale: 1.05, rotateY: 20 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              exit={{ opacity: 0, scale: 0.95, rotateY: -20 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0 flex items-center justify-center p-6"
            >
              <img 
                src={slides[currentSlide]}
                alt={`Project ${currentSlide + 1}`}
                className="w-full h-full max-w-full max-h-full object-contain rounded-2xl shadow-2xl border border-white/30"
                loading="lazy"
                onError={(e) => { e.target.src = '/assets/pic1.jpeg'; }}
              />
            </motion.div>
          </AnimatePresence>

          {/* Glass overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent pointer-events-none" />

          {/* Shine animation */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-3xl"
            animate={{ x: ['-100%', '100%', '-100%'] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </div>

        {/* Thumbnail Strip */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 bg-white/10 backdrop-blur-xl px-4 py-2 rounded-2xl border border-white/20">
          {slides.map((_, i) => (
            <motion.button
              key={i}
              onClick={() => goToSlide(i)}
              className={`w-12 h-8 rounded-xl overflow-hidden border-2 transition-all group ${
                i === currentSlide
                  ? "border-emerald-400 bg-emerald-400/30 shadow-lg scale-110"
                  : "border-white/30 hover:border-white/50 hover:scale-105 bg-white/20"
              }`}
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.98 }}
            >
              <img 
                src={slides[i]} 
                className="w-full h-full object-cover group-hover:brightness-110" 
                alt={`Thumb ${i}`}
              />
            </motion.button>
          ))}
        </div>

        {/* Navigation Arrows */}
        <motion.button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-xl rounded-2xl border-2 border-white/40 flex items-center justify-center text-white text-xl font-bold shadow-lg"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          ‹
        </motion.button>

        <motion.button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-gradient-to-r from-emerald-400 to-cyan-400 hover:from-emerald-300 hover:to-cyan-300 text-black rounded-2xl shadow-xl border-2 border-white/20 flex items-center justify-center font-bold"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          ›
        </motion.button>

        {/* Progress Indicator */}
        <div className="absolute top-6 right-6 bg-black/70 backdrop-blur-xl px-3 py-1 rounded-full text-xs font-mono text-cyan-400 border border-cyan-400/50">
          {currentSlide + 1}/{slides.length}
        </div>

        {/* Progress Bar */}
        <div className="absolute bottom-28 left-1/2 -translate-x-1/2 w-24 h-1.5 bg-white/30 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 5, repeat: Infinity }}
            style={{ originX: 0 }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
