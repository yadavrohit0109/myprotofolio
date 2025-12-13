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
  ChevronRight 
} from "lucide-react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Float, Text } from "@react-three/drei";
import * as THREE from "three";

// 🎨 AI Neural Network Particles
const NeuralParticles = () => {
  const particlesRef = useRef();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
      particlesRef.current.rotation.x = Math.cos(state.clock.elapsedTime * 0.2) * 0.1;
    }
  });

  return (
    <group ref={particlesRef}>
      {Array.from({ length: 100 }).map((_, i) => (
        <Float key={i}>
          <mesh position={[
            (Math.sin(i * 0.1) + Math.random()) * 4,
            Math.cos(i * 0.15) * 3 + Math.sin(Date.now() * 0.001 + i) * 0.5,
            (Math.cos(i * 0.08) + Math.random()) * 4
          ]}>
            <sphereGeometry args={[0.05 + Math.random() * 0.03]} />
            <meshStandardMaterial 
              color={new THREE.Color().setHSL(1.6 + Math.sin(i * 0.1) * 0.2, 0.8, 0.6)}
              emissive="#00ff88"
              emissiveIntensity={0.3 + Math.sin(Date.now() * 0.002 + i) * 0.2}
              transparent
              opacity={0.8}
            />
          </mesh>
        </Float>
      ))}
    </group>
  );
};

// 🧠 AI Brain Core
const AIBrain = () => {
  const meshRef = useRef();
  const time = useRef(0);

  useFrame(() => {
    time.current += 0.02;
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
      meshRef.current.scale.setScalar(1 + Math.sin(time.current) * 0.1);
    }
  });

  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[1, 1]} />
      <meshStandardMaterial 
        color="#00ff88"
        emissive="#00ff88"
        emissiveIntensity={0.4}
        metalness={0.8}
        roughness={0.2}
        wireframe
      />
    </mesh>
  );
};

// 🔥 Main Hero Component
const Hero = () => {
  const [activeTab, setActiveTab] = useState("ai");
  const [hoveredSlide, setHoveredSlide] = useState(null);
  const containerRef = useRef();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Mouse tracking for parallax
  const handleMouseMove = useCallback((e) => {
    const rect = containerRef.current?.getBoundingClientRect();
    setMousePos({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    });
  }, []);

  const tabs = [
    { id: "ai", label: "AI/ML", icon: Brain, color: "from-emerald-400 to-cyan-400" },
    { id: "web", label: "Web Dev", icon: Code, color: "from-blue-400 to-indigo-400" },
    { id: "mobile", label: "Mobile", icon: Rocket, color: "from-purple-400 to-pink-400" },
  ];

  const projects = [
    { title: "AI Chatbot", desc: "Neural-powered conversational AI", img: "/assets/pic1.jpeg" },
    { title: "3D Portfolio", desc: "React Three Fiber showcase", img: "/assets/pic2.png" },
    { title: "NFT Marketplace", desc: "Web3 decentralized platform", img: "/assets/pic3.png" },
  ];

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-screen flex flex-col lg:flex-row items-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900"
      onMouseMove={handleMouseMove}
    >
      {/* 🌌 Dynamic Background Grid */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-slate-900/50 [background-size:100px_100px] animate-pulse" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-gradient-to-r from-blue-500/30 to-transparent rounded-full blur-3xl animate-pulse" style={{animationDelay: '0s'}} />
          <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-gradient-to-b from-emerald-400/20 to-transparent rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}} />
          <div className="absolute bottom-0 left-1/2 w-80 h-80 bg-gradient-to-t from-purple-500/20 to-transparent rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}} />
        </div>
      </div>

      {/* 🎮 3D Canvas */}
      <div className="absolute inset-0 pointer-events-none">
        <Canvas camera={{ position: [0, 0, 8] }}>
          <ambientLight intensity={0.3} />
          <pointLight position={[10, 10, 10]} color="#00ff88" intensity={1} />
          <NeuralParticles />
          <AIBrain />
        </Canvas>
      </div>

      {/* 📱 LEFT: Interactive Content */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        className="relative z-20 w-full lg:w-1/2 px-6 lg:px-12 py-20 order-2 lg:order-1"
      >
        {/* 🟢 Live Status */}
        <div className="flex items-center gap-4 mb-8 p-4 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10">
          <div className="relative">
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-cyan-400 rounded-2xl shadow-xl flex items-center justify-center">
              <Zap className="w-8 h-8 text-black animate-pulse" />
            </div>
            <div className="absolute -inset-2 bg-gradient-to-r from-emerald-400/30 to-cyan-400/30 rounded-3xl blur animate-ping" />
          </div>
          <div>
            <div className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Live Now
            </div>
            <div className="text-emerald-400 text-sm font-mono">AI Engineer • Available</div>
          </div>
        </div>

        {/* 🚀 Hero Title */}
        <motion.h1 
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="text-5xl lg:text-7xl font-black leading-[0.9] mb-6 bg-gradient-to-r from-white via-cyan-400 to-purple-400 bg-clip-text text-transparent drop-shadow-2xl"
        >
          AI‑Powered 
          <span className="block bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Digital Realms
          </span>
        </motion.h1>

        <p className="text-xl text-gray-300 mb-12 leading-relaxed max-w-lg backdrop-blur-sm">
          Crafting intelligent web experiences with React, Three.js, and Neural Networks. 
          Transforming ideas into immersive, AI‑driven realities.
        </p>

        {/* 🧠 Skill Tabs */}
        <div className="flex flex-wrap gap-3 mb-12">
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all border-2 ${
                activeTab === tab.id
                  ? `bg-gradient-to-r ${tab.color} text-black shadow-xl shadow-emerald-500/25`
                  : "border-white/20 hover:border-white/40 text-gray-300 hover:text-white"
              }`}
            >
              <tab.icon className="w-5 h-5" />
              {tab.label}
            </motion.button>
          ))}
        </div>

        {/* ⚡ CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <ButtonPrimary href="/resume.pdf" label="View Resume" icon={Download} />
          <ButtonOutline href="#projects" label="Latest Projects" icon={Rocket} />
        </div>

        {/* 🌐 Social Links */}
        <div className="flex gap-6 mt-12 pt-12 border-t border-white/10">
          {[
            { icon: Github, href: "https://github.com" },
            { icon: Linkedin, href: "https://linkedin.com" },
          ].map(({ icon: Icon, href }, i) => (
            <motion.a
              key={i}
              href={href}
              target="_blank"
              whileHover={{ y: -8, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 bg-white/10 hover:bg-white/20 rounded-xl backdrop-blur-xl border border-white/20 transition-all"
            >
              <Icon className="w-6 h-6 text-gray-300 hover:text-white" />
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* 🖼️ RIGHT: 3D Project Cube */}
      <motion.div
        initial={{ opacity: 0, rotateY: 90 }}
        animate={{ opacity: 1, rotateY: 0 }}
        className="relative w-full lg:w-1/2 h-[70vh] lg:h-[90vh] flex items-center justify-center order-1 lg:order-2"
      >
        <div className="relative w-4/5 h-4/5 group">
          {/* Project Cards in 3D Space */}
          <div className="absolute inset-0 grid grid-cols-2 gap-6 p-8">
            {projects.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                whileHover={{ 
                  y: -20, 
                  rotateX: -10, 
                  rotateY: (mousePos.x - 0.5) * 20,
                  scale: 1.05 
                }}
                className="group-hover:opacity-50 transition-opacity cursor-pointer bg-white/5 backdrop-blur-xl rounded-3xl border border-white/15 shadow-2xl hover:shadow-cyan-500/25 hover:border-cyan-400/50 overflow-hidden hover:opacity-100"
                onHoverStart={() => setHoveredSlide(i)}
                onHoverEnd={() => setHoveredSlide(null)}
              >
                <img 
                  src={project.img} 
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-2xl"
                />
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-2 text-white">{project.title}</h3>
                  <p className="text-gray-400 text-sm">{project.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* ✨ Hover Glow */}
          <motion.div 
            animate={hoveredSlide !== null ? { opacity: 1, scale: 1.2 } : { opacity: 0 }}
            className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-3xl blur-3xl -z-10"
            transition={{ duration: 0.3 }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
