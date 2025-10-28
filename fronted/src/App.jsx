import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ReactLenis } from "lenis/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// 🧭 Theme Context
import { ThemeProvider } from "./components/ThemeContext";

// Components
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skill from "./components/Skill";
import Work from "./components/Work";
import YouTubePage from "./components/YouTubePage";
import AIToolsPage from "./components/AIToolsPage";
import Review from "./components/Review";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Payment from "./components/Payment";
import ProjectCard from "./components/ProjectCard";
import Papers from "./pages/StudyMaterial/Semester1/Paper/paper";
gsap.registerPlugin(useGSAP, ScrollTrigger);

const App = () => {
  useGSAP(() => {
    const elements = gsap.utils.toArray(".reveal-up");

    elements.forEach((el) => {
      gsap.to(el, {
        scrollTrigger: {
          trigger: el,
          start: "200 bottom",
          end: "bottom 80%",
          scrub: true,
        },
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
      });
    });
  });

  return (
    <ThemeProvider>
      <BrowserRouter>
        <ReactLenis root>
          <Header />

          {/* 🌗 Light/Dark Background Wrapper */}
          <div className="min-h-screen bg-white text-black dark:bg-zinc-900 dark:text-white transition-colors duration-500">
            <Routes>
              <Route
                path="/"
                element={
                  <main>
                    <Hero />
                    <About />
                    <Skill />
                    <Work />
                    <YouTubePage />
                    <AIToolsPage />
                    <Review />
                    <Contact />
                    <Payment />
                    <Footer />
                    {/* <ProjectCard/>  */}
                  </main>
                }
              />
              <Route path="/payment" element={<Payment />} />
            </Routes>
          </div>
        </ReactLenis>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
