import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Code, 
  Zap, 
  Award, 
  Users, 
  Folder, 
  Brain, 
  Rocket, 
  Database,
  Cloud,
  GitBranch,
  Server
} from "lucide-react";

const About = () => {
  const [activeTab, setActiveTab] = useState("journey");
  const [currentSkill, setCurrentSkill] = useState(0);
  const containerRef = useRef(null);

  const stats = [
    { label: "Projects", value: 25, icon: Folder, color: "text-emerald-400" },
    { label: "Experience", value: 3, icon: Zap, color: "text-cyan-400" },
    { label: "Clients", value: 10, icon: Users, color: "text-purple-400" },
    { label: "Awards", value: 4, icon: Award, color: "text-orange-400" },
  ];

  // YOUR EXACT JAVA TECH STACK
  const skills = [
    { name: "Spring Boot", level: 95, color: "from-emerald-400 to-green-400", icon: Server },
    { name: "Java 8/Core Java", level: 98, color: "from-orange-400 to-red-400", icon: Code },
    { name: "Microservices", level: 92, color: "from-purple-400 to-pink-400", icon: Cloud },
    { name: "Hibernate/JPA", level: 90, color: "from-blue-400 to-cyan-400", icon: Database },
    { name: "REST API", level: 94, color: "from-indigo-400 to-blue-400", icon: Zap },
    { name: "Spring MVC", level: 88, color: "from-teal-400 to-emerald-400", icon: Rocket },
  ];

  const technologies = [
    "Java EE", "JSP", "Maven", "GIT", "Postman", 
    "HTML/CSS", "GitHub", "MySQL", "Oracle", "PostgreSQL"
  ];

  const timeline = [
    { year: "2022", title: "Java Foundation", desc: "Mastered Core Java 8 & Java EE", color: "from-orange-400" },
    { year: "2023", title: "Spring Expert", desc: "Spring Boot + Microservices", color: "from-emerald-400" },
    { year: "2024", title: "Database Mastery", desc: "Hibernate, JPA, MySQL/Oracle", color: "from-blue-400" },
    { year: "2025", title: "Full-Stack Java", desc: "REST APIs + DevOps", color: "from-purple-400" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkill((prev) => (prev + 1) % skills.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="relative min-h-screen py-24 px-6 bg-gradient-to-br from-slate-900 via-orange-900/20 to-purple-900/30 overflow-hidden">
      {/* Java-Themed Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-slate-900/50 [background-size:100px_100px] animate-pulse" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-orange-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '0s'}} />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-b from-emerald-400/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}} />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Hero Header */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <motion.div 
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="inline-flex items-center gap-3 mb-6 px-8 py-4 bg-white/10 backdrop-blur-xl rounded-3xl border border-orange-400/30"
          >
            <div className="w-3 h-3 bg-emerald-400 rounded-full animate-ping" />
            <span className="text-emerald-400 font-mono text-sm">Java Spring Developer</span>
          </motion.div>
          <h2 className="text-5xl lg:text-7xl font-black bg-gradient-to-r from-white via-orange-400 to-emerald-400 bg-clip-text text-transparent mb-6">
            Rohit Kumar
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Java Spring Boot Developer specializing in Microservices, REST APIs, and scalable enterprise applications
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Left Column - Stats + Timeline */}
          <div className="lg:col-span-1 space-y-12">
            {/* Stats Cards */}
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="group p-6 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 hover:border-orange-400/30 hover:bg-white/10 transition-all"
                >
                  <stat.icon className={`w-12 h-12 ${stat.color} mb-4 group-hover:scale-110 transition-transform`} />
                  <div className="text-3xl font-black text-white mb-2">{stat.value}<span className="text-xl">+</span></div>
                  <div className="text-gray-400 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* Java Timeline */}
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-emerald-400 bg-clip-text text-transparent mb-6">
                Java Journey
              </h3>
              <div className="relative">
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-400 to-emerald-400" />
                {timeline.map((event, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className="relative flex items-start gap-4 mb-8"
                  >
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-xl ${event.color} bg-gradient-to-r text-white font-bold text-sm`}>
                      {event.year}
                    </div>
                    <div className="flex-1 bg-white/5 backdrop-blur-xl p-4 rounded-2xl border border-white/10">
                      <h4 className="font-bold text-white mb-1">{event.title}</h4>
                      <p className="text-gray-400 text-sm">{event.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Center - Java Skills Radar */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="lg:col-span-1 flex flex-col items-center text-center"
          >
            {/* Interactive Java Skills Radar */}
            <div className="relative w-96 h-96 mb-12">
              <svg viewBox="0 0 400 400" className="w-full h-full">
                {[20, 40, 60, 80].map((level, i) => (
                  <circle
                    key={i}
                    cx="200" cy="200" r={level * 4} 
                    fill="none"
                    stroke="url(#javaGradient)"
                    strokeWidth="1"
                    opacity={0.3}
                    className="animate-spin-slow"
                  />
                ))}
                <defs>
                  <radialGradient id="javaGradient" cx="50%" cy="50%">
                    <stop offset="0%" stopColor="rgba(251, 146, 60, 0.4)" />
                    <stop offset="100%" stopColor="rgba(34, 197, 94, 0.1)" />
                  </radialGradient>
                </defs>
              </svg>

              {skills.map((skill, i) => {
                const angle = (i / skills.length) * 360;
                const x = 200 + Math.cos(angle * Math.PI / 180) * 140;
                const y = 200 + Math.sin(angle * Math.PI / 180) * 140;
                return (
                  <motion.div
                    key={i}
                    className="absolute text-xs font-mono bg-white/90 text-slate-900 px-2 py-1 rounded-lg shadow-lg border border-white/50"
                    style={{ left: `${x - 40}px`, top: `${y - 15}px` }}
                    animate={{ 
                      scale: i === currentSkill ? 1.3 : 1,
                      backgroundColor: i === currentSkill ? '#fbbf24' : '#f8fafc'
                    }}
                  >
                    {skill.name}
                  </motion.div>
                );
              })}

              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div 
                  className="w-24 h-24 bg-gradient-to-r from-orange-400 to-emerald-400 rounded-full shadow-2xl"
                  animate={{ scale: [1, 1.1, 1], rotate: 360 }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
              </div>
            </div>

            {/* Java Skills Progress */}
            <div className="space-y-4 w-full max-w-md">
              {skills.map((skill, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + i * 0.1 }}
                  className="space-y-2"
                >
                  <div className="flex justify-between text-sm">
                    <span className="font-medium text-white">{skill.name}</span>
                    <span className="text-emerald-400 font-mono">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <motion.div 
                      className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.5, delay: 1.2 + i * 0.1 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Java Tabs */}
          <div className="lg:col-span-1 space-y-8">
            <div className="flex bg-white/5 backdrop-blur-xl rounded-3xl p-1">
              {[
                { id: "journey", label: "Java Journey", icon: Rocket },
                { id: "skills", label: "Core Skills", icon: Brain },
                { id: "stack", label: "Full Stack", icon: Code },
              ].map((tab) => (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 py-4 px-6 rounded-2xl font-semibold transition-all flex items-center justify-center gap-2 ${
                    activeTab === tab.id
                      ? "bg-gradient-to-r from-orange-400 to-emerald-400 text-black shadow-xl"
                      : "text-gray-400 hover:text-white hover:bg-white/10"
                  }`}
                  whileHover={{ scale: 1.02 }}
                >
                  <tab.icon className="w-5 h-5" />
                  {tab.label}
                </motion.button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 min-h-[400px] flex flex-col"
              >
                {activeTab === "journey" && (
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-6">Java Development Journey</h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      Enterprise Java Developer specializing in Spring Boot Microservices and scalable REST APIs.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 p-3 bg-white/10 rounded-xl">
                        <div className="w-2 h-2 bg-orange-400 rounded-full" />
                        <span className="text-sm text-gray-300">Spring Boot Microservices</span>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-white/10 rounded-xl">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full" />
                        <span className="text-sm text-gray-300">Hibernate/JPA Expert</span>
                      </div>
                    </div>
                  </div>
                )}
                
                {activeTab === "skills" && (
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-6">Java Core Skills</h3>
                    <ul className="space-y-3 text-gray-300">
                      <li>• Java 8, Core Java, Java EE</li>
                      <li>• Spring Boot, Spring MVC, REST API</li>
                      <li>• Hibernate, JPA, Maven</li>
                      <li>• GIT, Postman, GitHub</li>
                    </ul>
                  </div>
                )}
                
                {activeTab === "stack" && (
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-6">Complete Tech Stack</h3>
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div className="flex items-center gap-2 p-2 bg-white/10 rounded-lg">
                        <Database className="w-4 h-4 text-orange-400" />
                        <span>MySQL • Oracle • PostgreSQL</span>
                      </div>
                      <div className="flex items-center gap-2 p-2 bg-white/10 rounded-lg">
                        <GitBranch className="w-4 h-4 text-emerald-400" />
                        <span>HTML/CSS • JSP</span>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default About;
