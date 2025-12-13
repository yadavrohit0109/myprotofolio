import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ButtonPrimary, ButtonOutline } from "./Button";
import { ChevronLeft, ChevronRight } from "lucide-react";

// 🔁 Slides (public/assets)
const slides = [
  "/assets/pic1.jpeg",
  "/assets/pic2.png",
  "/assets/pic3.png",
];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef(null);

  // ▶ Auto-play
  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
  }, []);

  const startAutoPlay = () => {
    stopAutoPlay();
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4500);
  };

  const stopAutoPlay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const next = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col lg:flex-row items-center overflow-hidden bg-[#020617] text-white"
    >
      {/* 🌌 Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-slate-900 to-black" />
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-3xl animate-pulse" />

      {/* 👨‍💻 LEFT CONTENT */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full lg:w-[35%] px-8 py-16"
      >
        {/* Status */}
        <div className="flex items-center gap-3 mb-6">
          <img
            src="/assets/pic1.jpeg"
            alt="Profile"
            className="w-11 h-11 rounded-xl object-cover border border-cyan-400"
          />
          <span className="flex items-center gap-2 text-sm text-emerald-400">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-ping" />
            Available for Work
          </span>
        </div>

        <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          Building Digital
          <br />
          Experiences ⚡
        </h1>

        <p className="mt-6 text-gray-300 text-lg leading-relaxed max-w-xl">
          I design and develop futuristic, high‑performance web applications using modern
          technologies, animations, and AI‑driven thinking.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <ButtonPrimary
            href="/Rohit_Yadav_Resume.pdf"
            label="Download Resume"
            icon="Download"
          />
          <ButtonOutline href="#projects" label="View Projects" icon="arrow_downward" />
        </div>
      </motion.div>

      {/* 🖼️ RIGHT SLIDER */}
      <div
        onMouseEnter={stopAutoPlay}
        onMouseLeave={startAutoPlay}
        className="relative w-full lg:w-[65%] h-[60vh] lg:h-[85vh] flex items-center justify-center"
      >
        <div className="relative w-[90%] h-[90%] rounded-3xl overflow-hidden border border-white/10 shadow-2xl backdrop-blur-xl bg-white/5">
          <AnimatePresence mode="wait">
            <motion.img
              key={current}
              src={slides[current]}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0 w-full h-full object-contain"
            />
          </AnimatePresence>
        </div>

        {/* ⬅ ➡ Controls */}
        <button
          onClick={prev}
          className="absolute left-6 p-3 rounded-full bg-black/40 hover:bg-black/70 transition"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={next}
          className="absolute right-6 p-3 rounded-full bg-black/40 hover:bg-black/70 transition"
        >
          <ChevronRight />
        </button>

        {/* ● Dots */}
        <div className="absolute bottom-6 flex gap-3">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-3 h-3 rounded-full transition-all ${
                i === current
                  ? "bg-cyan-400 scale-125 shadow-lg"
                  : "bg-gray-500 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
