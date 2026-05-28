import { useEffect } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Features from './components/Features.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Blog from './components/Blog.jsx';
import Testimonial from './components/Testimonial.jsx';
import Experience from './components/Experience.jsx';
import CTA from './components/CTA.jsx';
import Footer from './components/Footer.jsx';
import './App.css';

export default function App() {
  useEffect(() => {
    document.title = 'Kaviyarasan | MERN Stack Developer';
  }, []);

  return (
    <div className="portfolio-shell">
      <Navbar />

      <main className="page-content">
        <Hero />
        <About />
        <Features />
        <Skills />
        <Experience />
        <Projects />
        <Blog />
        <Testimonial />
        <CTA />
      </main>

      <Footer />
    </div>
  );
}
