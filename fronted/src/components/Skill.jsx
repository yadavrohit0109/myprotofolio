import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Code, 
  Zap, 
  Database, 
  Cloud, 
  GitBranch,
  Server,
  Award
} from "lucide-react";
import SkillCard from "./SkillCard";

const skillItem = [
  // YOUR ORIGINAL SKILLS + JAVA FOCUS
  { imgSrc: "/assets/spring-boot.svg", label: "Spring Boot", desc: "Microservices", link: "https://spring.io/projects/spring-boot", level: 95, category: "backend" },
  { imgSrc: "/assets/maven.svg", label: "Maven", desc: "Build Automation", link: "https://maven.apache.org/", level: 92, category: "devops" },
  { imgSrc: "/assets/mysql-original-wordmark.svg", label: "MySQL", desc: "Relational DB", link: "https://www.mysql.com/", level: 90, category: "database" },
  { imgSrc: "/assets/postgresql.svg", label: "PostgreSQL", desc: "Advanced SQL", link: "https://www.postgresql.org/", level: 88, category: "database" },
  { imgSrc: "/assets/react.svg", label: "React", desc: "Frontend Framework", link: "https://react.dev/", level: 92, category: "frontend" },
  { imgSrc: "/assets/git.svg", label: "Git", desc: "Version Control", link: "https://git-scm.com/", level: 95, category: "devops" },
  { imgSrc: "/assets/docker.svg", label: "Docker", desc: "Containerization", link: "https://www.docker.com/", level: 85, category: "devops" },
  { imgSrc: "/assets/html-5.svg", label: "HTML5", desc: "Semantic Markup", link: "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5", level: 98, category: "frontend" },
  { imgSrc: "/assets/css-3.svg", label: "CSS3", desc: "Modern Styling", link: "https://developer.mozilla.org/en-US/docs/Web/CSS", level: 95, category: "frontend" },
  { imgSrc: "/assets/javascript.svg", label: "JavaScript ES6+", desc: "Modern JS", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", level: 93, category: "frontend" },
];

const Skill = () => {
  const [activeCategory, setActiveCategory] = useState("backend");
  const [currentFeatured, setCurrentFeatured] = useState(0);
  const [hoveredSkill, setHoveredSkill] = useState(null);

  // Auto-rotate featured skill
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeatured((prev) => (prev + 1) % skillItem.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const categories = [
    { id: "backend", label: "Backend", icon: Server, color: "from-emerald-400 to-green-400" },
    { id: "frontend", label: "Frontend", icon: Code, color: "from-blue-400 to-cyan-400" },
    { id: "database", label: "Database", icon: Database, color: "from-purple-400 to-pink-400" },
    { id: "devops", label: "DevOps", icon: Cloud, color: "from-orange-400 to-red-400" },
  ];

  return (
    <section id="skills" className="relative min-h-screen py-24 px-6 bg-gradient-to-br from-slate-900 via-orange-900/20 to-emerald-900/20 overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-slate-900/50 [background-size:80px_80px] animate-pulse" />
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-orange-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-b from-emerald-400/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}} />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <motion.div 
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="inline-flex items-center gap-3 mb-8 px-8 py-4 bg-white/10 backdrop-blur-xl rounded-3xl border border-orange-400/30"
          >
            <div className="w-3 h-3 bg-emerald-400 rounded-full animate-ping" />
            <span className="text-emerald-400 font-mono text-sm">Full-Stack Java Tech Stack</span>
          </motion.div>
          <h2 className="text-5xl lg:text-7xl font-black bg-gradient-to-r from-white via-orange-400 to-emerald-400 bg-clip-text text-transparent mb-6">
            Technology Mastery
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Enterprise-grade skills in Java Spring Boot, modern frontend frameworks, and DevOps tools
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: 3D Featured Skill Carousel */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative"
          >
            {/* Featured Skill Carousel */}
            <div className="relative w-full max-w-2xl mx-auto h-[500px] mb-12">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentFeatured}
                  initial={{ opacity: 0, rotateY: 90, scale: 0.8 }}
                  animate={{ opacity: 1, rotateY: 0, scale: 1 }}
                  exit={{ opacity: 0, rotateY: -90, scale: 0.8 }}
                  transition={{ duration: 0.8 }}
                  className="absolute inset-0 flex flex-col items-center justify-center bg-white/5 backdrop-blur-2xl rounded-3xl border-4 border-white/20 shadow-2xl p-12"
                >
                  <div className="w-32 h-32 mb-8 flex items-center justify-center bg-gradient-to-br from-orange-400 to-emerald-400 rounded-3xl shadow-2xl">
                    <img 
                      src={skillItem[currentFeatured].imgSrc} 
                      alt={skillItem[currentFeatured].label}
                      className="w-20 h-20 object-contain filter brightness-0 invert"
                    />
                  </div>
                  <h3 className="text-4xl font-black text-white mb-4 text-center">{skillItem[currentFeatured].label}</h3>
                  <p className="text-gray-300 text-lg mb-8 text-center max-w-md">{skillItem[currentFeatured].desc}</p>
                  
                  {/* Proficiency Meter */}
                  <div className="w-full max-w-md">
                    <div className="flex justify-between text-sm mb-2">
                      <span>Proficiency</span>
                      <span className="font-mono text-emerald-400">{skillItem[currentFeatured].level}%</span>
                    </div>
                    <div className="h-4 bg-white/10 rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-gradient-to-r from-orange-400 to-emerald-400 rounded-full shadow-lg"
                        initial={{ width: 0 }}
                        animate={{ width: `${skillItem[currentFeatured].level}%` }}
                        transition={{ duration: 1.5 }}
                      />
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Carousel Controls */}
              <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex gap-3">
                {skillItem.map((_, i) => (
                  <motion.button
                    key={i}
                    onClick={() => setCurrentFeatured(i)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      i === currentFeatured
                        ? "bg-gradient-to-r from-orange-400 to-emerald-400 scale-150 shadow-lg"
                        : "bg-white/40 hover:bg-white/70"
                    }`}
                    whileHover={{ scale: 1.5 }}
                  />
                ))}
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-3 justify-center mb-12 max-w-md mx-auto">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-3 rounded-2xl font-semibold border-2 flex items-center gap-2 transition-all ${
                    activeCategory === category.id
                      ? `bg-gradient-to-r ${category.color} text-black shadow-xl shadow-orange-500/25 border-transparent`
                      : "border-white/20 bg-white/5 text-gray-300 hover:border-orange-400 hover:bg-white/10"
                  }`}
                  whileHover={{ scale: 1.05 }}
                >
                  <category.icon className="w-5 h-5" />
                  {category.label}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Right: Interactive Tech Matrix */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            {/* Filtered Skills Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {skillItem
                .filter(skill => skill.category === activeCategory)
                .map((skill, i) => (
                  <motion.div
                    key={i}
                    onHoverStart={() => setHoveredSkill(skill.label)}
                    onHoverEnd={() => setHoveredSkill(null)}
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="group relative p-6 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 hover:border-orange-400/40 hover:bg-white/10 hover:shadow-2xl transition-all cursor-pointer"
                  >
                    <a 
                      href={skill.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-orange-400/20 to-emerald-400/20 rounded-2xl group-hover:bg-white/20 transition-all">
                        <img 
                          src={skill.imgSrc} 
                          alt={skill.label}
                          className="w-10 h-10 object-contain filter brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all"
                        />
                      </div>
                      <h4 className="text-lg font-semibold text-white text-center mb-2 group-hover:text-orange-400 transition">{skill.label}</h4>
                      <p className="text-gray-400 text-sm text-center mb-4">{skill.desc}</p>
                      
                      {/* Mini Proficiency */}
                      <div className="h-1.5 bg-white/20 rounded-full overflow-hidden mx-auto w-20">
                        <motion.div 
                          className="h-full bg-gradient-to-r from-orange-400 to-emerald-400 rounded-full"
                          initial={{ width: 0 }}
                          whileHover={{ width: `${skill.level}%` }}
                          transition={{ duration: 0.5 }}
                        />
                      </div>
                    </a>
                  </motion.div>
                ))}
            </div>

            {/* Hover Preview */}
            <AnimatePresence>
              {hoveredSkill && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl p-8 max-w-sm z-50 border border-orange-400/30"
                >
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{hoveredSkill}</h3>
                  <p className="text-gray-600 mb-6">Mastery level: <span className="font-bold text-emerald-600">Expert</span></p>
                  <a href="#" className="inline-flex items-center gap-2 text-orange-500 font-semibold hover:underline">
                    Learn More →
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Tech Matrix Legend */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-20 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-6">Mastery Levels</h3>
          <div className="flex items-center justify-center gap-8 text-sm">
            <div className="flex items-center gap-2 text-emerald-400">
              <div className="w-24 h-2 bg-gradient-to-r from-emerald-400 to-green-400 rounded-full" />
              <span>95%+ Expert</span>
            </div>
            <div className="flex items-center gap-2 text-orange-400">
              <div className="w-20 h-2 bg-gradient-to-r from-orange-400 to-red-400 rounded-full" />
              <span>85-94% Advanced</span>
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .bg-grid-slate-900\/50 {
          background-image: 
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px);
        }
      `}</style>
    </section>
  );
};

export default Skill;
