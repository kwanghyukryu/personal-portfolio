import React, { useState, useEffect, useRef } from 'react';
import '../App.css';

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true); // Track if navbar is visible
  const lastScrollYRef = useRef(window.scrollY); // Track the last scroll position
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < lastScrollYRef.current) {
        // If scrolling up, show the navbar
        setShowNavbar(true);
      } else {
        // If scrolling down, hide the navbar
        setShowNavbar(false);
      }
      lastScrollYRef.current = window.scrollY; // Update last scroll position

      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollableHeight > 0 ? (window.scrollY / scrollableHeight) * 100 : 0;
      setScrollProgress(Math.min(100, Math.max(0, progress)));
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [])

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className={`directory ${showNavbar ? 'visible' : 'hidden'}`}>
      <div className="scroll-progress">
        <span style={{ width: `${scrollProgress}%` }} />
      </div>
      <nav>
        <button className="scroll-button" onClick={() => scrollToSection('main')}>Kwanghyuk</button>
        <button className="scroll-button" onClick={() => scrollToSection('about')}>About Me</button>
        <button className="scroll-button" onClick={() => scrollToSection('skill')}>Skills</button>
        <button className="scroll-button" onClick={() => scrollToSection('projects')}>Projects</button>
        <button className="scroll-button" onClick={() => scrollToSection('contact')}>Contact</button>
      </nav>
    </section>
  );
}

export default Navbar;
