import React from "react";
import { ButtonPrimary } from "./Button";

const sitemap = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
  { label: "Payment", href: "#payment" },
];

const socials = [
  { label: "GitHub", href: "https://github.com/yadavrohit0109" },
  { label: "LinkedIn", href: "www.linkedin.com/in/rohit-yadav-14b4411b2" },
  { label: "Twitter / X", href: "https://x.com/rohitkumar0789"},
  { label: "Instagram", href: "https://www.instagram.com/_rohit_yadav_0109/" },
];

const Footer = () => {
  // ✅ Smooth scroll for in-page navigation
  const handleSmoothScroll = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80, // adjust offset for navbar height
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="relative py-20 px-6 bg-gradient-to-br from-gray-950 via-blue-950/80 to-purple-950 text-gray-100 overflow-hidden">
      {/* Glowing neural effect background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,_rgba(0,150,255,0.2)_0%,_transparent_70%)] blur-3xl"></div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left: CTA Section */}
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-300 to-pink-400">
            Let’s Build the Future Together 🚀
          </h2>

          <p className="text-gray-300 max-w-md">
            Whether it’s a full-stack web app, an AI-powered system, or creative tech innovation —
            let’s collaborate and create something extraordinary.
          </p>

          <ButtonPrimary
            href="mailto:yadavrr9784@zohomail.in"
            label="Start a Project"
            icon="chevron_right"
            classes="!bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-pink-500 text-white shadow-lg hover:shadow-blue-500/40 transition-all duration-300"
          />
        </div>

        {/* Right: Sitemap + Socials */}
        <div className="grid sm:grid-cols-2 gap-8 text-sm">
          {/* Sitemap */}
          <div>
            <p className="text-blue-300 font-semibold mb-4 tracking-wide uppercase">
              Sitemap
            </p>
            <ul className="space-y-2">
              {sitemap.map(({ label, href }, i) => (
                <li key={i}>
                  <a
                    href={href}
                    onClick={(e) => handleSmoothScroll(e, href)}
                    className="cursor-pointer text-gray-400 hover:text-blue-400 transition-all duration-300 hover:translate-x-1 block"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <p className="text-blue-300 font-semibold mb-4 tracking-wide uppercase">
              Connect
            </p>
            <ul className="space-y-2">
              {socials.map(({ label, href }, i) => (
                <li key={i}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-pink-400 transition-all duration-300 hover:translate-x-1 block"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="my-12 border-t border-blue-400/20"></div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-center">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src="/assets/phoenix.png"
            width={40}
            height={40}
            alt="Rohit Yadav Logo"
            className="drop-shadow-[0_0_10px_rgba(0,200,255,0.6)]"
          />
          <p className="font-semibold text-lg text-blue-300">
           Rohit <span className="text-pink-400">Yadav</span>
          </p>
        </div>

        {/* Copyright */}
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} Rohit Yadav. Crafted with ❤️ using{" "}
          <span className="text-blue-400">React</span> &{" "}
          <span className="text-purple-400">AI Design</span>.
        </p>

        {/* Floating Glow */}
        <div className="hidden md:block animate-pulse text-blue-400 text-xs">
          ⚡ Empowered by AI & Creativity
        </div>
      </div>

      {/* Decorative glowing lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400/30 to-transparent"></div>
    </footer>
  );
};

export default Footer;
