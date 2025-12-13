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
            <div className="text-emerald-400 text-sm font-mono">AI Engineer • Available</div>
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
          Crafting intelligent web experiences with React, AI, and immersive animations.
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

      {/* FIXED: Perfect Image Size Carousel */}
      <motion.div
        initial={{ opacity: 0, rotateY: 90 }}
        animate={{ opacity: 1, rotateY: 0 }}
        className="w-full lg:w-1/2 h-[500px] lg:h-[600px] flex items-center justify-center relative"
      >
        <div className="w-full h-full max-w-md max-h-[450px] flex items-center justify-center p-4">
          
          {/* FIXED Container - Perfect bounds */}
          <div className="w-[280px] h-[360px] relative shadow-2xl rounded-3xl overflow-hidden border-4 border-white/20 bg-gradient-to-br from-white/10 to-transparent/50 backdrop-blur-xl">
            
            {/* Image - PERFECTLY SIZED */}
            <AnimatePresence initial={false} mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, scale: 0.9, rotateY: 30 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                exit={{ opacity: 0, scale: 0.9, rotateY: -30 }}
                transition={{ duration: 0.7 }}
                className="absolute inset-0 flex items-center justify-center p-4"
              >
                <img 
                  src={slides[currentSlide]}
                  alt={`Project ${currentSlide + 1}`}
                  className="w-[750px] h-[720px] max-w-[750px] max-h-[720px] object-contain rounded-2xl shadow-xl border-2 border-white/40"
                  loading="lazy"
                  onError={(e) => { e.target.src = '/assets/pic1.jpeg'; }}
                />
              </motion.div>
            </AnimatePresence>

            {/* Glass overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

            {/* Shine effect */}
            <motion.div 
              className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-xl"
              animate={{ x: [0, 200, 0], y: [0, 100, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
          </div>

          {/* Thumbnail Previews */}
          <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 flex gap-3">
            {slides.map((_, i) => (
              <motion.button
                key={i}
                onClick={() => goToSlide(i)}
                className={`w-16 h-12 rounded-2xl overflow-hidden border-2 transition-all ${
                  i === currentSlide
                    ? "border-emerald-400 bg-emerald-400/20 shadow-lg scale-110"
                    : "border-white/30 hover:border-white/50 hover:scale-105 bg-white/10"
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.98 }}
              >
                <img 
                  src={slides[i]} 
                  className="w-full h-full object-cover" 
                  alt={`Thumb ${i}`}
                />
              </motion.button>
            ))}
          </div>

          {/* Controls */}
          <div className="absolute top-1/2 left-2 -translate-y-1/2 flex flex-col gap-3 z-20">
            <motion.button
              onClick={prevSlide}
              className="w-10 h-10 bg-white/20 hover:bg-white/30 backdrop-blur-xl rounded-xl border border-white/40 flex items-center justify-center text-white"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              ‹
            </motion.button>
          </div>

          <div className="absolute top-1/2 right-2 -translate-y-1/2 flex flex-col gap-3 z-20">
            <motion.button
              onClick={nextSlide}
              className="w-10 h-10 bg-gradient-to-r from-emerald-400 to-cyan-400 hover:from-emerald-300 hover:to-cyan-300 text-black rounded-xl shadow-lg flex items-center justify-center font-bold"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              ›
            </motion.button>
          </div>

          {/* Progress */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center">
            <div className="text-sm font-mono text-cyan-400 mb-1">
              {currentSlide + 1} / {slides.length}
            </div>
            <div className="w-20 h-1 bg-white/30 rounded-full overflow-hidden mx-auto">
              <motion.div 
                className="h-full bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 5, repeat: Infinity }}
              />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
