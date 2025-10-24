import React, { useState, useEffect } from "react";
const aboutItems = [
  { label: "Projects Completed", number: 25 },
  { label: "Years of Experience", number: 3 },
  { label: "Happy Clients", number: 10 },
  { label: "Awards & Certifications", number: 4 },
];

const technologies = [
  "React",
  "Next.js",
  "Node.js",
  "Tailwind CSS",
  "TypeScript",
  "MongoDB",
  "Spring Boot",
  "MySQL",
  "Docker",
  "AWS",
  "Git & GitHub",
  "PostgreSQL",
];

const About = () => {
  const [currentTech, setCurrentTech] = useState(0);

  // Optional subtle animation — rotate tech list every few seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTech((prev) => (prev + 1) % technologies.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="about"
      className="relative overflow-hidden py-24 px-6 bg-gradient-to-br from-gray-950 via-blue-900/70 to-purple-900 text-gray-100"
    >
      {/* Glowing background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-800/30 via-transparent to-transparent blur-3xl"></div>

      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-300 to-pink-400 mb-10">
          About Me
        </h2>

        {/* Description */}
        <p className="text-gray-300 text-center text-lg max-w-3xl mx-auto mb-14 leading-relaxed">
          Hello 👋 I&apos;m{" "}
          <span className="text-blue-400 font-semibold">Rohit Kumar</span>, a{" "}
          <span className="text-purple-300 font-semibold">
            Java Developer
          </span>{" "}
          who blends creativity with technology to build scalable, high-quality
          web applications. I specialize in delivering elegant user interfaces,
          smooth animations, and robust backend systems.
        </p>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mb-16">
          {aboutItems.map(({ label, number }, key) => (
            <div
              key={key}
              className="bg-gray-800/40 backdrop-blur-md p-6 rounded-2xl border border-blue-400/20 hover:border-blue-400 hover:scale-105 transform transition-all duration-300 shadow-lg"
            >
              <h3 className="text-4xl font-bold text-white mb-2">
                {number}
                <span className="text-blue-400">+</span>
              </h3>
              <p className="text-gray-300">{label}</p>
            </div>
          ))}
        </div>

        {/* Modern Tech Section */}
        <div className="bg-gray-900/50 border border-purple-500/20 rounded-3xl p-10 text-center backdrop-blur-md shadow-inner">
          <h3 className="text-2xl font-semibold text-blue-400 mb-6">
            Modern Technologies I Use ⚡
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className={`p-3 rounded-xl border ${
                  index === currentTech
                    ? "bg-blue-600/40 border-blue-400 shadow-md scale-105"
                    : "bg-gray-800/40 border-gray-700"
                } transition-all duration-500 hover:scale-105 hover:border-blue-400`}
              >
                <p className="font-medium text-gray-200">{tech}</p>
              </div>
            ))}
          </div>

          {/* Optional rotating tech label */}
          <div className="mt-8 text-gray-300">
            Currently exploring:{" "}
            <span className="text-purple-300 font-semibold">
              {technologies[currentTech]}
            </span>
          </div>
        </div>

        {/* Optional Logo */}
        <img
          src={phoenix.png}
          alt="Logo"
          width={60}
          height={60}
          className="mx-auto mt-12 opacity-80 hover:opacity-100 transition duration-300"
        />
      </div>
    </section>
  );
};

export default About;
