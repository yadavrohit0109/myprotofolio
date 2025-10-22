



import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

const Navbar = ({ navOpen }) => {
  const lastActiveLink = useRef();
  const activeBox = useRef();

  const initActiveBox = () => {
    if (lastActiveLink.current && activeBox.current) {
      activeBox.current.style.top = lastActiveLink.current.offsetTop + 'px';
      activeBox.current.style.left = lastActiveLink.current.offsetLeft + 'px';
      activeBox.current.style.width = lastActiveLink.current.offsetWidth + 'px';
      activeBox.current.style.height = lastActiveLink.current.offsetHeight + 'px';
    }
  };

  useEffect(() => {
    initActiveBox();
    window.addEventListener('resize', initActiveBox);
    return () => window.removeEventListener('resize', initActiveBox);
  }, []);

  const activeCurrentLink = (event) => {
    lastActiveLink.current?.classList.remove('active');
    event.target.classList.add('active');
    lastActiveLink.current = event.target;

    activeBox.current.style.top = event.target.offsetTop + 'px';
    activeBox.current.style.left = event.target.offsetLeft + 'px';
    activeBox.current.style.width = event.target.offsetWidth + 'px';
    activeBox.current.style.height = event.target.offsetHeight + 'px';
  };

  const navItems = [
    { label: 'Home', link: '#home', withRef: true },
    { label: 'About', link: '#about' },
    { label: 'Work', link: '#work' },
    { label: 'Reviews', link: '#reviews' },
    { label: 'Contact', link: '#contact', className: 'md:hidden' },
    { label: 'Pay', link: '#payment' }, // ✅ Page navigation
    { label: 'YouTube', link: '#YouTubePage' }
  ];

  return (
    <nav
      className={`navbar absolute md:static top-full left-0 w-full md:w-auto bg-zinc-900 md:bg-transparent rounded-xl md:rounded-none shadow-lg md:shadow-none transition-all duration-300 ease-in-out z-40 ${
        navOpen ? 'opacity-100 visible' : 'opacity-0 invisible md:opacity-100 md:visible'
      }`}
    >
      <div className="relative flex flex-col md:flex-row items-center gap-4 px-4 py-3 md:py-0 md:gap-6">
        {navItems.map(({ label, link, className, withRef }, key) => (
          <a
            key={key}
            href={link}
            ref={withRef ? lastActiveLink : null}
            onClick={activeCurrentLink}
            className={`relative text-white text-sm px-4 py-2 rounded-full transition-all duration-300 font-medium hover:text-indigo-400 hover:bg-indigo-500/10 focus:outline-none ${
              className || ''
            } ${withRef ? 'active' : ''}`}
          >
            {label}
          </a>
        ))}

        {/* Active animated box */}
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
