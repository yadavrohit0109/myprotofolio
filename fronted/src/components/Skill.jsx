import React from "react";
import SkillCard from "./SkillCard";

// 🧠 Skills & Tools Data with official links
const skillItem = [
  { imgSrc: "/assets/figma.svg", label: "Figma", desc: "Design Tool", link: "https://www.figma.com" },
  { imgSrc: "/assets/css-3.svg", label: "CSS", desc: "User Interface", link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  { imgSrc: "/assets/javascript.svg", label: "JavaScript", desc: "Interaction", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { imgSrc: "/assets/cpp.svg", label: "C++", desc: "Command Line", link: "https://isocpp.org/" },
  { imgSrc: "/assets/node.svg", label: "NodeJS", desc: "Web Server", link: "https://nodejs.org/" },
  { imgSrc: "/assets/amazon.svg", label: "AWS", desc: "Cloud Computing", link: "https://aws.amazon.com/" },
  { imgSrc: "/assets/angular.svg", label: "Angular", desc: "Frontend Framework", link: "https://angular.io/" },
  { imgSrc: "/assets/react.svg", label: "React", desc: "Frontend Framework", link: "https://react.dev/" },
  { imgSrc: "assets/Tailwind.svg", label: "TailwindCSS", desc: "UI Framework", link: "https://tailwindcss.com/" },
  { imgSrc: "/assets/spring-boot.svg", label: "Spring Boot", desc: "Java Framework", link: "https://spring.io/projects/spring-boot" },
  { imgSrc: "/assets/linux.svg", label: "Linux", desc: "System Environment", link: "https://www.linux.org/" },
  { imgSrc: "/assets/kubernetes.svg", label: "Kubernetes", desc: "Container Orchestration", link: "https://kubernetes.io/" },
  { imgSrc: "/assets/laravel.svg", label: "Laravel", desc: "PHP Framework", link: "https://laravel.com/" },
  { imgSrc: "/assets/python.svg", label: "Python", desc: "Programming Language", link: "https://www.python.org/" },
  { imgSrc: "/assets/rust.svg", label: "Rust", desc: "Programming Language", link: "https://www.rust-lang.org/" },
  { imgSrc: "/assets/NumPy.svg", label: "NumPy", desc: "Data Science", link: "https://numpy.org/" },
  { imgSrc: "/assets/maven.svg", label: "Maven", desc: "Build Automation", link: "https://maven.apache.org/" },
  { imgSrc: "/assets/bash.svg", label: "Bash", desc: "Scripting", link: "https://www.gnu.org/software/bash/" },
  { imgSrc: "/assets/git.svg", label: "Git", desc: "Version Control", link: "https://git-scm.com/" },
  { imgSrc: "/assets/html-5.svg", label: "HTML5", desc: "Markup Language", link: "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5" },
  { imgSrc: "/assets/docker.svg", label: "Docker", desc: "Containerization", link: "https://www.docker.com/" },
  { imgSrc: "/assets/mysql-original-wordmark.svg", label: "MySQL", desc: "Database", link: "https://www.mysql.com/" },
  { imgSrc: "/assets/postgresql.svg", label: "PostgreSQL", desc: "Database", link: "https://www.postgresql.org/" },
  { imgSrc: "/assets/MongoDB.svg", label: "MongoDB", desc: "Database", link: "https://www.mongodb.com/" },
];

const Skill = () => {
  return (
    <section
      id="skills"
      className="relative py-24 px-6 bg-gradient-to-br from-gray-950 via-blue-950/60 to-purple-950 overflow-hidden text-gray-100"
    >
      {/* Glowing AI background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,_rgba(0,122,255,0.25)_0%,_transparent_70%)] blur-3xl"></div>

      <div className="max-w-7xl mx-auto text-center">
        {/* Section Header */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-300 to-pink-400 mb-6">
          Essential Tools & Technologies
        </h2>

        <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-16 leading-relaxed">
          I build high-performance, AI-powered, and scalable solutions using
          the most advanced technologies and frameworks.  
          Explore my tech stack below 👇
        </p>

        {/* Skills Grid */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {skillItem.map(({ imgSrc, label, desc, link }, key) => (
            <a
              key={key}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-6 bg-gray-900/40 border border-blue-400/20 rounded-2xl shadow-lg backdrop-blur-md transition-all hover:scale-105 hover:border-blue-400/40 hover:shadow-blue-500/20"
            >
              <div className="flex justify-center mb-4">
                <img
                  src={imgSrc}
                  alt={label}
                  className="w-12 h-12 group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-lg font-semibold text-blue-300 group-hover:text-white transition">
                {label}
              </h3>
              <p className="text-gray-400 text-sm mt-2">{desc}</p>

              {/* Neon glow animation */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-blue-500/10 to-purple-400/10 opacity-0 group-hover:opacity-100 blur-xl transition duration-700"></div>
            </a>
          ))}
        </div>
      </div>

      {/* Decorative glowing lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400/30 to-transparent"></div>
    </section>
  );
};

export default Skill;
