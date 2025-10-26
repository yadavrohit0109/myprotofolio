import React, { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { ChevronDown, FileText, Book } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = ({ navOpen }) => {
  const lastActiveLink = useRef();
  const activeBox = useRef();
  const [studyOpen, setStudyOpen] = useState(false);

  const initActiveBox = () => {
    if (lastActiveLink.current && activeBox.current) {
      activeBox.current.style.top = lastActiveLink.current.offsetTop + "px";
      activeBox.current.style.left = lastActiveLink.current.offsetLeft + "px";
      activeBox.current.style.width = lastActiveLink.current.offsetWidth + "px";
      activeBox.current.style.height = lastActiveLink.current.offsetHeight + "px";
    }
  };

  useEffect(() => {
    initActiveBox();
    window.addEventListener("resize", initActiveBox);
    return () => window.removeEventListener("resize", initActiveBox);
  }, []);

  const activeCurrentLink = (event) => {
    lastActiveLink.current?.classList.remove("active");
    event.target.classList.add("active");
    lastActiveLink.current = event.target;

    activeBox.current.style.top = event.target.offsetTop + "px";
    activeBox.current.style.left = event.target.offsetLeft + "px";
    activeBox.current.style.width = event.target.offsetWidth + "px";
    activeBox.current.style.height = event.target.offsetHeight + "px";
  };

  const navItems = [
    { label: "Home", link: "/", withRef: true },
    { label: "About", link: "#about" },
    { label: "Work", link: "#work" },
    { label: "Reviews", link: "#reviews" },
    { label: "Study Material", link: "/study-material", isDropdown: true },
    { label: "Contact", link: "#contact", className: "md:hidden" },
  ];

  const semesters = ["Semester1", "Semester2", "Semester3", "Semester4", "Semester5", "Semester6"];

  return (
    <nav
      className={`navbar absolute md:static top-full left-0 w-full md:w-auto bg-zinc-900 md:bg-transparent rounded-xl md:rounded-none shadow-lg md:shadow-none transition-all duration-300 ease-in-out z-40 ${
        navOpen ? "opacity-100 visible" : "opacity-0 invisible md:opacity-100 md:visible"
      }`}
    >
      <div className="relative flex flex-col md:flex-row items-center gap-4 px-4 py-3 md:py-0 md:gap-6">
        {navItems.map(({ label, link, className, withRef, isDropdown }, key) => {
          if (isDropdown) {
            return (
              <div
                key={key}
                className="relative"
                onMouseEnter={() => setStudyOpen(true)}
                onMouseLeave={() => setStudyOpen(false)}
              >
                <button
                  className="relative text-white text-sm px-4 py-2 rounded-full transition-all duration-300 font-medium 
                             hover:text-cyan-300 hover:bg-indigo-500/10 flex items-center gap-1 focus:outline-none"
                >
                  <Book className="w-4 h-4" />
                  {label}
                  <ChevronDown className="w-4 h-4 mt-[2px]" />
                </button>

                {studyOpen && (
                  <div className="absolute top-10 left-0 w-64 bg-gradient-to-b from-zinc-900/95 via-indigo-900/80 to-purple-900/70 border border-indigo-400/30 backdrop-blur-md rounded-xl p-3 shadow-xl transition-all z-50">
                    <div className="flex flex-col gap-2">
                      {semesters.map((sem) => (
                        <div key={sem} className="p-2 rounded-lg hover:bg-white/10 transition-all">
                          <div className="flex justify-between items-center">
                            <span className="font-semibold text-sm">{sem}</span>
                            <div className="flex gap-2">
                              <Link
                                to={`/study-material/${sem.toLowerCase()}/notes`}
                                className="text-xs bg-emerald-600/80 hover:bg-emerald-500 px-2 py-1 rounded-md"
                              >
                                Notes
                              </Link>
                              <Link
                                to={`/study-material/${sem.toLowerCase()}/paper`}
                                className="text-xs bg-sky-600/80 hover:bg-sky-500 px-2 py-1 rounded-md"
                              >
                                Paper
                              </Link>
                            </div>
                          </div>
                        </div>
                      ))}

                      <hr className="border-t border-white/10 my-2" />
                      <Link
                        to="/study-material/syllabus"
                        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition text-sm"
                      >
                        <FileText className="w-4 h-4" />
                        <span className="font-semibold">Syllabus</span>
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            );
          }

          return (
            <Link
              key={key}
              to={link}
              ref={withRef ? lastActiveLink : null}
              onClick={activeCurrentLink}
              className={`relative text-white text-sm px-4 py-2 rounded-full transition-all duration-300 font-medium hover:text-indigo-400 hover:bg-indigo-500/10 focus:outline-none ${
                className || ""
              } ${withRef ? "active" : ""}`}
            >
              {label}
            </Link>
          );
        })}

        <span
          ref={activeBox}
          className="absolute bg-indigo-500/20 rounded-full z-[-1] transition-all duration-300"
        ></span>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  navOpen: PropTypes.bool.isRequired,
};

export default Navbar;
