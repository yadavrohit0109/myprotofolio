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
  Download,
  ChevronRight,
  ChevronLeft
} from "lucide-react";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeTab, setActiveTab] = useState("ai");
  const intervalRef = useRef(null);

  const slides = [
    "/assets/pic1.jpeg",
    "/assets/pic2.png",
    "/assets/pic3.png",
  ];

  // Auto-slide
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4500);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="min-h-screen flex flex-col lg:flex-row items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 overflow-hidden relative px-4 py-16">
      
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:80px_80px]" />
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-blue-500/20 to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-b from-emerald-400/20 to-transparent rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}} />
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-l from-purple-500/20 to-transparent rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}} />
      </div>

      {/* Left Content */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full lg:w-1/2 mb-12 lg:mb-0 lg:pr-8 z-10 text-center lg:text-left"
      >
        <div className="flex items-center gap-4 mb-8 p-6 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 max-w-sm mx-auto lg:mx-0">
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
            { id: "ai", label: "AI/ML", icon: Brain, color: "from-emerald-400 to-cyan-400" },
            { id: "web", label: "Web Dev", icon: Code, color: "from-blue-400 to-indigo-400" },
            { id: "mobile", label: "Mobile", icon: Rocket, color: "from-purple-400 to-pink-400" },
          ].map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-2xl font-semibold border-2 flex items-center gap-2 transition-all ${
                activeTab === tab.id
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

        <div className="flex gap-4 pt-8 border-t border-white/10 justify-center lg:justify-start">
          <motion.a href="https://github.com" target="_blank" rel="noopener noreferrer" whileHover={{ y: -4, scale: 1.1 }} className="p-3 bg-white/10 hover:bg-white/20 rounded-xl border border-white/20 transition-all">
            <Github className="w-5 h-5 text-gray-300 hover:text-white" />
          </motion.a>
          <motion.a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" whileHover={{ y: -4, scale: 1.1 }} className="p-3 bg-white/10 hover:bg-white/20 rounded-xl border border-white/20 transition-all">
            <Linkedin className="w-5 h-5 text-gray-300 hover:text-white" />
          </motion.a>
        </div>
      </motion.div>

      {/* Right - FIXED Image Slider */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full lg:w-1/2 h-[60vh] lg:h-[75vh] flex items-center justify-center relative"
        onMouseEnter={() => {
          if (intervalRef.current) clearInterval(intervalRef.current);
        }}
        onMouseLeave={() => {
          if (!intervalRef.current) {
            intervalRef.current = setInterval(() => {
              setCurrentSlide((prev) => (prev + 1) % slides.length);
            }, 4500);
          }
        }}
      >
        {/* Slider Container - FIXED SIZING */}
        <div className="w-full max-w-2xl h-full max-h-[500px] relative rounded-3xl overflow-hidden border-4 border-white/20 shadow-2xl backdrop-blur-xl bg-gradient-to-br from-white/10 to-transparent/50">
          
          {/* Image Slides - FULL VISIBILITY */}
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, scale: 1.05, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.95, x: -20 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full flex items-center justify-center bg-black/10"
            >
              <img 
                src={slides[currentSlide]}
                alt={`Slide ${currentSlide + 1}`}
                className="w-full h-full max-w-full max-h-full object-contain object-center !important"
                loading="lazy"
                onError={(e) => {
                  e.target.src = '/assets/pic1.jpeg'; // Fallback image
                }}
              />
            </motion.div>
          </AnimatePresence>

          {/* Dark overlay for better contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none" />

          {/* Progress Bar */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-64 h-2 bg-white/20 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 rounded-full"
              initial={{ scaleX: 0, originX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ 
                duration: 4.5, 
                repeat: Infinity,
                repeatType: "loop"
              }}
            />
          </div>

          {/* Navigation Arrows */}
          <motion.button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 hover:bg-black/80 backdrop-blur-xl border-2 border-white/40 transition-all z-20"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </motion.button>

          <motion.button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 hover:bg-black/80 backdrop-blur-xl border-2 border-white/40 transition-all z-20"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </motion.button>

          {/* Slide Dots */}
          <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex gap-3">
            {slides.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-gradient-to-r from-emerald-400 to-cyan-400 scale-150 shadow-lg shadow-emerald-500/50"
                    : "bg-white/40 hover:bg-white/70 hover:scale-125"
                }`}
                whileHover={{ scale: 1.5 }}
                whileTap={{ scale: 1.2 }}
              />
            ))}
          </div>

          {/* Slide Counter */}
          <div className="absolute top-6 right-6 bg-black/70 backdrop-blur-xl px-3 py-1 rounded-full text-sm font-mono text-cyan-400 border border-cyan-400/50">
            {currentSlide + 1} / {slides.length}
          </div>
        </div>
      </motion.div>

      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
