import React, { useState, useEffect } from "react";
import { ButtonPrimary, ButtonOutline } from "./Button";

// 🖼️ Local images
import pic1 from "../assets/pic1.jpeg";
import pic2 from "../assets/pic2.png";
import pic3 from "../assets/pic3.png";

const slides = [pic1, pic2, pic3];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  // Auto slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex flex-col lg:flex-row items-center justify-between overflow-hidden text-gray-100"
    >
      {/* 🌈 Background Gradient Animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#020617] via-[#0a1028] to-[#04091c] opacity-95"></div>
      <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] bg-purple-700/10 rounded-full blur-3xl animate-pulse"></div>

      {/* 🧑‍💻 Left Content - 30% */}
      <div className="relative z-10 w-full lg:w-[30%] px-8 py-16 text-center lg:text-left flex flex-col items-center lg:items-start">
        {/* Status */}
        <div className="flex items-center gap-3 mb-6">
          <figure className="w-10 h-10 rounded-lg overflow-hidden border border-blue-400 shadow-md">
            <img
              src={pic1}
              alt="Rohit Kumar"
              className="object-cover w-full h-full"
            />
          </figure>
          <div className="flex items-center gap-1.5 text-gray-300 text-sm tracking-wide">
            <span className="relative w-2 h-2 rounded-full bg-emerald-400">
              <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
            </span>
            Available for work
          </div>
        </div>

        {/* Headline */}
        <h1 className="text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 leading-tight mb-6">
          Crafting the Future of the Web 🚀
        </h1>

        {/* Paragraph */}
        <p className="text-gray-300 text-lg leading-relaxed mb-10">
          I’m a passionate developer dedicated to building futuristic, responsive,
          and performance-optimized websites — blending AI, design, and code.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center lg:justify-start gap-4">
          <ButtonPrimary href="/res.png" label="Download CV" icon="Download" />
          <ButtonOutline href="#about" label="Scroll Down" icon="arrow_downward" />
        </div>
      </div>

      {/* 🖼️ Right Slideshow - 70% */}
      <div className="relative w-full lg:w-[70%] h-[60vh] lg:h-[80vh] flex justify-center items-center overflow-hidden">
        <figure className="relative w-[90%] h-[90%] rounded-2xl overflow-hidden border border-blue-500/20 shadow-2xl bg-[#050b16]/60 backdrop-blur-md">
          {slides.map((slide, index) => (
            <img
              key={index}
              src={slide}
              alt={`Slide ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-[1200ms] ease-in-out ${
                index === current ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </figure>

        {/* Dots Navigation */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i === current
                  ? "bg-cyan-400 scale-110 shadow-[0_0_10px_rgba(100,200,255,0.6)]"
                  : "bg-gray-500 hover:bg-gray-400"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
