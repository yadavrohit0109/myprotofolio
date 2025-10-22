import React from "react";

const socialLinks = [
  {
    href: "https://github.com/yadavrohit0109",
    label: "GitHub",
    icon: "💻",
  },
  {
    href: "www.linkedin.com/in/rohit-yadav-14b4411b2",
    label: "LinkedIn",
    icon: "🔗",
  },
  {
    href: "https://x.com/rohitkumar0789",
    label: "Twitter / X",
    icon: "🐦",
  },
  {
    href: "https://www.instagram.com/_rohit_yadav_0109/",
    label: "Instagram",
    icon: "📸",
  },
];

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative py-24 px-6 bg-gradient-to-br from-gray-950 via-blue-950/80 to-purple-950 text-gray-100 overflow-hidden"
    >
      {/* Glowing neural background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,_rgba(0,150,255,0.25)_0%,_transparent_70%)] blur-3xl"></div>

      <div className="max-w-6xl mx-auto grid gap-12 lg:grid-cols-2 items-center">
        {/* LEFT SIDE – Text + Socials */}
        <div className="space-y-6 text-center lg:text-left">
          <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-300 to-pink-400">
            Let’s Collaborate 🤝
          </h2>

          <p className="text-gray-300 max-w-md mx-auto lg:mx-0 leading-relaxed">
            Whether you have an idea, a startup, or a full project in mind —
            let’s connect and create something extraordinary powered by modern
            technology and AI.
          </p>

          <div className="flex justify-center lg:justify-start gap-4 pt-4">
            {socialLinks.map(({ href, label, icon }, index) => (
              <a
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-center w-12 h-12 rounded-xl border border-blue-400/30 bg-blue-900/20 text-xl transition-all duration-300 hover:scale-110 hover:shadow-[0_0_15px_rgba(0,200,255,0.6)] hover:text-blue-400"
                aria-label={label}
              >
                <span className="text-2xl">{icon}</span>
                <span className="absolute opacity-0 group-hover:opacity-100 text-xs text-blue-300 -bottom-6 transition-all duration-300">
                  {label}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE – Contact Form */}
        <div className="relative bg-gray-900/40 backdrop-blur-xl border border-blue-400/20 rounded-3xl shadow-xl p-8 md:p-10 transition-all hover:shadow-blue-500/30">
          <form
            action="https://getform.io/f/agdjorob"
            method="POST"
            className="space-y-6"
          >
            {/* Name + Email */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <label
                  htmlFor="name"
                  className="text-sm font-semibold text-blue-300 mb-2"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="John Doe"
                  className="bg-gray-950/40 border border-blue-400/20 rounded-xl px-4 py-3 text-gray-200 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-500/40 transition-all"
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="email"
                  className="text-sm font-semibold text-blue-300 mb-2"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="bg-gray-950/40 border border-blue-400/20 rounded-xl px-4 py-3 text-gray-200 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-500/40 transition-all"
                />
              </div>
            </div>

            {/* Message */}
            <div className="flex flex-col">
              <label
                htmlFor="message"
                className="text-sm font-semibold text-blue-300 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                placeholder="Let’s build something amazing together..."
                className="bg-gray-950/40 border border-blue-400/20 rounded-xl px-4 py-3 text-gray-200 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-500/40 transition-all resize-none"
              ></textarea>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-pink-500 text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-blue-500/40 transition-all duration-300"
            >
              Send Message 🚀
            </button>
          </form>
        </div>
      </div>

      {/* Decorative glowing lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400/30 to-transparent"></div>
    </section>
  );
};

export default Contact;
