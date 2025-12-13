import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import { ButtonPrimary, ButtonOutline } from "./Button";
import { 
  Brain, 
  Zap, 
  Code, 
  Rocket, 
  Github, 
  Linkedin,
  Download,
  ChevronLeft,
  ChevronRight,
  Activity,
  Terminal
} from "lucide-react";

// 🌌 AI Particle System (CSS-only)
const AIParticles = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {Array.from({ length: 80 }).map((_, i) => (
        <div
          key={i}
          className="particle"
          style={{
            '--i': i,
            '--delay': `${Math.random() * 10}s`,
            '--duration': `${8 + Math.random() * 12}s`,
            '--size': `${0.3 + Math.random() * 0.7}rem`,
            '--x': `${Math.random() * 100}%`,
            '--y': `${Math.random() * 100}%`
          }}
        />
      ))}
    </div>
  );
};

// 🧠 Pulsing AI Core
const AIOrb = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  return (
    <motion.div
      className="absolute -top-32 -right-32 w-64 h-64 bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 rounded-full blur-3xl opacity-60"
      animate={{
        scale: [1, 1.2, 1],
        rotate: [0, 180, 360],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <motion.div
        className="absolute inset-0 bg-white/20 rounded-full"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 3,
          repeat: Infinity
        }}
      />
    </motion.div>
  );
};

// 🔥 Main Hero Component (No 3D Dependencies)
const Hero = () => {
  const [activeTab, setActiveTab] = useState("ai");
  const [currentSlide, setCurrentSlide] = useState(0);
  const containerRef = useRef();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const slideInterval = useRef(null);

  // Mouse parallax
  const handleMouseMove = useCallback((e) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
      setMousePos({
        x: (e.clientX - rect.left) / rect.width - 0.5,
        y: (e.clientY - rect.top) / rect.height - 0.5,
      });
    }
  }, []);

  // Auto-slide
  useEffect(() => {
    slideInterval.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 5000);

    return () => clearInterval(slideInterval.current);
  }, []);

  const tabs = [
    { id: "ai", label: "AI/ML", icon: Brain, color: "from-emerald-400 to-cyan-400" },
    { id: "web", label: "Web3", icon: Code, color: "from-blue-400 to-indigo-400" },
    { id: "mobile", label: "Mobile", icon: Rocket, color: "from-purple-400 to-pink-400" },
  ];

  const slides = [
    "/assets/pic1.jpeg",
    "/assets/pic2.png", 
    "/assets/pic3.png",
  ];

  const projects = [
    { title: "AI Chatbot v2", desc: "Neural-powered conversational AI", img: "/assets/pic1.jpeg" },
    { title: "3D Portfolio", desc: "Immersive React showcase", img: "/assets/pic2.png" },
    { title: "NFT Marketplace", desc: "Web3 decentralized platform", img: "/assets/pic3.png" },
  ];

  return (
    <>
      {/* ✨ Global Styles */}
      <style jsx>{`
        .particle {
          position: absolute;
          width: var(--size);
          height: var(--size);
          background: linear-gradient(45deg, #00ff88, #00b0ff);
          border-radius: 50%;
          top: var(--y);
          left: var(--x);
          animation: float var(--duration) var(--delay) infinite ease-in-out;
          box-shadow: 0 0 20px rgba(0, 255, 136, 0.5);
        }
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg);
            opacity: 0.3;
          }
          50% { 
            transform: translateY(-20px) rotate(180deg);
            opacity: 1;
          }
        }
        .bg-grid {
          background-image: 
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px);
          background-size: 80px 80px;
        }
      `}</style>

      <section
        ref={containerRef}
        id="home"
        className="relative min-h-screen flex flex-col lg:flex-row items-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 bg-grid"
        onMouseMove={handleMouseMove}
      >
        {/* 🌌 AI Particles */}
        <AIParticles />

        {/* 🎨 Dynamic Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-30" />
          <motion.div 
            className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-blue-500/20 rounded-full blur-3xl"
            animate={{ 
              x: mousePos.x * 50, 
              y: mousePos.y * 50,
              scale: 1 + Math.abs(mousePos.x + mousePos.y) * 0.3 
            }}
            transition={{ type: "spring", stiffness: 100 }}
          />
          <motion.div 
            className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-b from-emerald-400/20 rounded-full blur-3xl"
            animate={{ 
              x: -mousePos.x * 30, 
              y: -mousePos.y * 30 
            }}
            transition={{ type: "spring", stiffness: 100 }}
          />
        </div>

        {/* 🧠 LEFT: Content */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          className="relative z-20 w-full lg:w-1/2 px-6 lg:px-12 py-20 order-2 lg:order-1"
        >
          {/* 🔴 Live Status */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-4 mb-8 p-6 bg-white/5 backdrop-blur-xl rounded-3xl border border-emerald-400/30 shadow-2xl"
          >
            <div className="relative">
              <div className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-cyan-500 rounded-2xl shadow-2xl flex items-center justify-center">
                <Brain className="w-10 h-10 text-black animate-spin-slow" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/40 rounded-2xl blur animate-ping" />
            </div>
            <div>
              <div className="text-2xl font-black text-white tracking-tight">AI Engineer</div>
              <div className="text-emerald-400 text-lg font-mono flex items-center gap-2">
                <div className="w-3 h-3 bg-emerald-400 rounded-full animate-ping" />
                Live • Available
              </div>
            </div>
          </motion.div>

          {/* 🎯 Hero Title */}
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl lg:text-7xl font-black leading-[0.9] mb-8 bg-gradient-to-r from-white via-cyan-400/80 to-emerald-400/80 bg-clip-text text-transparent drop-shadow-2xl"
          >
            Crafting 
            <span className="block">
              <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                AI Realms
              </span>
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-gray-300 mb-12 leading-relaxed max-w-lg"
          >
            Building intelligent web experiences with React, AI, and immersive animations.
          </motion.p>

          {/* 🧩 Skill Tabs */}
          <div className="flex flex-wrap gap-4 mb-12">
            {tabs.map((tab, i) => (
              <motion.button
                key={tab.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.1 }}
                onClick={() => setActiveTab(tab.id)}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.98 }}
                className={`group relative flex items-center gap-3 px-6 py-4 rounded-2xl font-semibold transition-all overflow-hidden ${
                  activeTab === tab.id
                    ? `bg-gradient-to-r ${tab.color} text-black shadow-2xl shadow-emerald-500/50`
                    : "bg-white/5 border border-white/20 hover:border-white/40 text-gray-300 hover:text-white hover:bg-white/10"
                }`}
              >
                <tab.icon className="w-6 h-6" />
                {tab.label}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                />
              </motion.button>
            ))}
          </div>

          {/* 🚀 CTAs */}
          <div className="flex flex-col sm:flex-row gap-6 mb-12">
            <ButtonPrimary href="/resume.pdf" label="Download Resume" icon={Download} />
            <ButtonOutline href="#projects" label="View Projects" icon={Rocket} />
          </div>

          {/* 🔗 Socials */}
          <div className="flex gap-4 pt-8 border-t border-white/10">
            {[
              { icon: Github, href: "#" },
              { icon: Linkedin, href: "#" },
            ].map(({ icon: Icon, href }, i) => (
              <motion.a
                key={i}
                href={href}
                target="_blank"
                whileHover={{ y: -8, scale: 1.1, rotate: i === 0 ? -5 : 5 }}
                whileTap={{ scale: 0.95 }}
                className="p-4 bg-white/10 hover:bg-white/20 rounded-2xl backdrop-blur-xl border border-white/20 group"
              >
                <Icon className="w-6 h-6 text-gray-300 group-hover:text-white transition-colors" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* 🖼️ RIGHT: Image Slider */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative w-full lg:w-1/2 h-[70vh] lg:h-[85vh] flex items-center justify-center order-1 lg:order-2 px-4"
        >
          <div className="relative w-full max-w-2xl h-[70%] rounded-3xl overflow-hidden border-4 border-white/10 shadow-2xl backdrop-blur-2xl bg-gradient-to-b from-white/10 to-transparent">
            
            {/* Slides */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, scale: 1.1, rotateY: 15 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                exit={{ opacity: 0, scale: 0.9, rotateY: -15 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0 w-full h-full"
                style={{
                  transformPerspective: 1000,
                }}
              >
                <img 
                  src={slides[currentSlide]} 
                  alt={`Project ${currentSlide + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </motion.div>
            </AnimatePresence>

            {/* Progress Bar */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-64 bg-white/10 rounded-full h-2 overflow-hidden">
              <motion.div 
                className="h-full bg-gradient-to-r from-emerald-400 to-cyan-400"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 5, repeat: Infinity }}
              />
            </div>

            {/* Controls */}
            <motion.button
              onClick={() => {
                clearInterval(slideInterval.current);
                setCurrentSlide((prev) => (prev + 1) % 3);
                slideInterval.current = setInterval(() => {
                  setCurrentSlide((prev) => (prev + 1) % 3);
                }, 5000);
              }}
              className="absolute right-6 top-1/2 -translate-y-1/2 p-4 rounded-full bg-black/50 hover:bg-black/70 backdrop-blur-xl border border-white/30 transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>

            {/* Dots */}
            <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex gap-3">
              {slides.map((_, i) => (
                <motion.button
                  key={i}
                  onClick={() => {
                    clearInterval(slideInterval.current);
                    setCurrentSlide(i);
                  }}
                  className={`w-3 h-3 rounded-full transition-all ${
                    i === currentSlide
                      ? "bg-emerald-400 scale-150 shadow-lg shadow-emerald-500/50"
                      : "bg-white/30 hover:bg-white/50"
                  }`}
                  whileHover={{ scale: 1.4 }}
                  whileTap={{ scale: 1.2 }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Hero;
