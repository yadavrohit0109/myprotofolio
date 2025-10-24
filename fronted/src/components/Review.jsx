import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaInstagram } from "react-icons/fa";

const reviews = [
  {
    content:
      "Exceptional web development! Delivered a seamless, responsive site with clean code and great UX.",
    name: "Rahul Yadav",
    href: "https://www.linkedin.com/in/rahul-yadav-42b260341/",
    imgSrc: "src/assets/rahul.jpeg",
    company: "PixelForge",
  },
  {
    content:
      "Impressive work! Fast loading times, intuitive design, and flawless backend integration. Highly recommend.",
    name: "Narendra Yadav",
    href: "https://www.linkedin.com/in/narendra-yadav-0ba95b341/",
    imgSrc: "src/assets/narendra.jpeg",
    company: "NexaWave",
  },
  {
    content:
      "Outstanding developer! Built a robust site with perfect functionality. Efficient and detail-oriented.",
    name: "Lalit Kumawat",
    href: "https://www.linkedin.com/in/lalit-98b79a324/",
    imgSrc: "src/assets/lalit.jpeg",
    company: "CodeCraft",
  },
  {
    content:
      "Creative and skilled! Produced a modern, user-friendly site that exceeded expectations. Great communication.",
    name: "Rohit Yadav",
    href: "https://www.linkedin.com/in/rohit-yadav-14b4411b2/",
    imgSrc: "src/assets/rohit.jpeg",
    company: "BrightWeb",
  },
  {
    content:
      "Professional work! Delivered on time, with a polished design and smooth user experience. Top-notch developer.",
    name: "Mukesh Lilawat",
    href: "https://www.linkedin.com/in/mukeshlilawat1/",
    imgSrc: "src/assets/mukesh.jpeg",
    company: "TechMosaic",
  },
  {
    content:
      "Excellent project execution! High-quality code, responsive design, and exceptional problem-solving skills.",
    name: "Dileep Yadav",
    href: "https://www.instagram.com/dileep_yadav7362/",
    imgSrc: "src/assets/dilip.png",
    company: "Skyline Digital",
    isInstagram: true,
  },
];

const Review = () => {
  return (
    <section
      id="reviews"
      className="relative py-24 px-6 bg-gradient-to-br from-[#020617] via-[#0a1028] to-[#04091c] text-gray-100 overflow-hidden"
    >
      {/* Glowing Background */}
      <motion.div
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,_rgba(100,0,255,0.15)_0%,_transparent_70%)] blur-3xl"
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ repeat: Infinity, duration: 8 }}
      />

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 text-transparent bg-clip-text mb-6"
        >
          What People Say About My Work 💬
        </motion.h2>

        <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-12 leading-relaxed">
          Real voices from professionals and collaborators who experienced my
          AI-powered, modern, and full-stack development approach.
        </p>

        {/* Review Cards */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map(({ content, name, company, imgSrc, href, isInstagram }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="relative bg-[#0a0f1a]/60 border border-blue-400/20 rounded-3xl p-8 shadow-lg hover:shadow-[0_0_30px_rgba(120,120,255,0.25)] backdrop-blur-md transition-all duration-500 hover:-translate-y-1 group overflow-hidden"
            >
              {/* Avatar + Name */}
              <div className="flex items-center gap-4 mb-6">
                <a href={href} target="_blank" rel="noopener noreferrer">
                  <motion.img
                    src={imgSrc}
                    alt={name}
                    whileHover={{ scale: 1.1, rotate: 2 }}
                    transition={{ duration: 0.4 }}
                    className="w-16 h-16 rounded-full border-2 border-cyan-400 object-cover shadow-md cursor-pointer"
                  />
                </a>
                <div>
                  <h3 className="font-semibold text-lg text-white">{name}</h3>
                  <p className="text-sm text-cyan-400">{company}</p>
                </div>
              </div>

              {/* Review Text */}
              <p className="text-gray-300 italic mb-8 leading-relaxed">
                “{content}”
              </p>

              {/* Social Button (Now Real Button Style) */}
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 hover:from-purple-600 hover:to-pink-500 transition-all duration-300 shadow-lg hover:shadow-cyan-500/30"
              >
                {isInstagram ? (
                  <FaInstagram className="text-pink-400 text-lg" />
                ) : (
                  <FaLinkedin className="text-cyan-300 text-lg" />
                )}
                <span>
                  {isInstagram ? "Connect on Instagram" : "Connect on LinkedIn"}
                </span>
              </a>

              {/* Glow Overlay */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-cyan-500/10 to-purple-600/10 opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-700"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Review;
