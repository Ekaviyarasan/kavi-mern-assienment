import { useEffect, useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Features from './components/Features.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Blog from './components/Blog.jsx';
import Experience from './components/Experience.jsx';
import CTA from './components/CTA.jsx';
import Footer from './components/Footer.jsx';
import CommandPalette from './components/CommandPalette.jsx';
import './App.css';

const themes = ['obsidian', 'cyberpunk', 'mint', 'ocean'];

export default function App() {
  const [activeTheme, setActiveTheme] = useState('obsidian');
  const [parallaxEnabled, setParallaxEnabled] = useState(true);

  useEffect(() => {
    document.title = 'Kaviyarasan | MERN Stack Developer';
  }, []);

  // Update theme class on HTML element
  useEffect(() => {
    const root = document.documentElement;
    themes.forEach((t) => root.classList.remove(`theme-${t}`));
    root.classList.add(`theme-${activeTheme}`);
  }, [activeTheme]);

  // Handle mouse and touch movement
  useEffect(() => {
    if (!parallaxEnabled) {
      document.documentElement.style.setProperty('--parallax-x', '0');
      document.documentElement.style.setProperty('--parallax-y', '0');
      return undefined;
    }

    const updateCoordinates = (x, y) => {
      document.documentElement.style.setProperty('--mouse-x', `${x}px`);
      document.documentElement.style.setProperty('--mouse-y', `${y}px`);

      // Normalized coordinates (-0.5 to 0.5)
      const normX = (x / window.innerWidth) - 0.5;
      const normY = (y / window.innerHeight) - 0.5;

      document.documentElement.style.setProperty('--parallax-x', `${normX}`);
      document.documentElement.style.setProperty('--parallax-y', `${normY}`);

      // Update card-relative coordinates for cards currently in viewport
      const cards = document.querySelectorAll('.project-card, .feature-card, .timeline-card');
      cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        // Check if card is in or near viewport to optimize performance
        if (rect.bottom >= 0 && rect.top <= window.innerHeight) {
          const cardX = x - rect.left;
          const cardY = y - rect.top;
          card.style.setProperty('--card-x', `${cardX}px`);
          card.style.setProperty('--card-y', `${cardY}px`);
        }
      });
    };

    const handleMouseMove = (e) => {
      updateCoordinates(e.clientX, e.clientY);
    };

    const handleTouchMove = (e) => {
      if (e.touches && e.touches.length > 0) {
        updateCoordinates(e.touches[0].clientX, e.touches[0].clientY);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [parallaxEnabled]);

  const toggleTheme = () => {
    setActiveTheme((prev) => {
      const currentIndex = themes.indexOf(prev);
      const nextIndex = (currentIndex + 1) % themes.length;
      return themes[nextIndex];
    });
  };

  const toggleParallax = () => {
    setParallaxEnabled((prev) => !prev);
  };

  return (
    <div className="portfolio-shell">
      {/* Decorative Interactive Parallax Background Blobs */}
      {parallaxEnabled && (
        <div className="interactive-bg-blobs" aria-hidden="true">
          <div className="blob blob-1" />
          <div className="blob blob-2" />
          <div className="blob blob-3" />
        </div>
      )}

      <Navbar activeTheme={activeTheme} onChangeTheme={setActiveTheme} />

      <main className="page-content">
        <Hero />
        <Features />
        <Skills />
        <Experience />
        <Projects />
        <Blog />
        <CTA />
      </main>

      <Footer />

      {/* Keyboard Shortcuts Command Palette */}
      <CommandPalette 
        activeTheme={activeTheme}
        onToggleTheme={toggleTheme}
        onToggleParallax={toggleParallax}
        parallaxEnabled={parallaxEnabled}
      />
    </div>
  );
}

