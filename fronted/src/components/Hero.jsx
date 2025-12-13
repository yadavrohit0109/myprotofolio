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

  // Auto-slide
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

      {/* NEW: 3D Card Flip Carousel - 60% width, 80% height */}
      <motion.div
        initial={{ opacity: 0, rotateY: 90 }}
        animate={{ opacity: 1, rotateY: 0 }}
        className="w-full lg:w-1/2 h-[70vh] flex items-center justify-center relative"
      >
        <div className="w-full max-w-4xl h-[80vh] max-h-[600px] flex items-center justify-center p-8">
          
          {/* Main Image Card - 60% width, 80% height */}
          <motion.div
            animate={{ 
              rotateY: currentSlide * 90,
              rotateX: Math.sin(Date.now() * 0.001) * 2
            }}
            transition={{ 
              rotateY: { duration: 0.8, ease: "easeInOut" },
              rotateX: { duration: 4, repeat: Infinity }
            }}
            className="relative w-[60%] h-[80%] max-w-2xl max-h-96 shadow-2xl perspective-1000"
            style={{ perspective: 1000 }}
          >
            {/* Glass Card Background */}
            <div className="absolute inset-0 w-[60%] h-[80%] mx-auto my-auto bg-white/5 backdrop-blur-2xl rounded-3xl border-4 border-white/20 shadow-2xl" />

            {/* Image - EXACT 60% width, 80% height */}
            <AnimatePresence initial={false}>
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, scale: 0.8, rotateY: 180 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                exit={{ opacity: 0, scale: 0.8, rotateY: -180 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0 w-[60%] h-[80%] mx-auto my-auto flex items-center justify-center"
              >
                <img 
                  src={slides[currentSlide]}
                  alt={`Project ${currentSlide + 1}`}
                  className="w-full h-full max-w-full max-h-full object-contain rounded-2xl shadow-2xl border-4 border-white/30"
                  loading="lazy"
                  onError={(e) => { e.target.src = '/assets/pic1.jpeg'; }}
                />
              </motion.div>
            </AnimatePresence>

            {/* Card Shine Effect */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-3xl"
              animate={{ x: ['0%', '100%', '0%'] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </motion.div>

          {/* Side Previews - Smaller cards */}
          <div className="absolute w-full h-full flex items-center justify-between px-8">
            {slides.map((_, i) => (
              i !== currentSlide && (
                <motion.div
                  key={i}
                  className="w-24 h-24 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 shadow-xl flex items-center justify-center cursor-pointer hover:scale-110"
                  animate={{ 
                    scale: i === (currentSlide + 1) % 3 || i === (currentSlide + 2) % 3 ? 1.1 : 1,
                    opacity: i === (currentSlide + 1) % 3 ? 0.8 : 0.4
                  }}
                  onClick={() => goToSlide(i)}
                  whileHover={{ scale: 1.2, z: 10 }}
                >
                  <img 
                    src={slides[i]} 
                    className="w-16 h-16 object-cover rounded-xl" 
                    alt={`Preview ${i}`}
                  />
                </motion.div>
              )
            ))}
          </div>

          {/* Custom Controls */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-4 items-center">
            {/* Progress Ring */}
            <div className="relative w-12 h-12">
              <svg className="w-12 h-12" viewBox="0 0 36 36">
                <path 
                  className="text-gray-700"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  strokeWidth="3"
                  strokeLinecap="round"
                  fill="none"
                  strokeDasharray="100, 100"
                />
                <motion.path 
                  className="text-emerald-400"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  strokeWidth="3"
                  strokeLinecap="round"
                  fill="none"
                  initial={{ strokeDashoffset: 100 }}
                  animate={{ strokeDashoffset: 0 }}
                  transition={{ duration: 5, repeat: Infinity }}
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center text-xs font-mono text-cyan-400">
                {currentSlide + 1}/{slides.length}
              </div>
            </div>

            {/* Navigation */}
            <motion.button
              onClick={prevSlide}
              className="w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-xl rounded-2xl border border-white/20 flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              ‹
            </motion.button>
            <motion.button
              onClick={nextSlide}
              className="w-12 h-12 bg-gradient-to-r from-emerald-400 to-cyan-400 hover:from-emerald-300 hover:to-cyan-300 text-black rounded-2xl shadow-lg flex items-center justify-center font-bold"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              ›
            </motion.button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
