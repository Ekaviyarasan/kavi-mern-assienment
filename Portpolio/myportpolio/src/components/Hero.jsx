import profilePhoto from '../assets/arasan.jpg';

export default function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-background" aria-hidden="true" />
      <div className="hero-overlay" aria-hidden="true" />

      <div className="hero-content hero-panel">
        <div className="hero-copy-block">
          <p className="eyebrow-text">FRESHER PORTFOLIO</p>
          <h1 className="hero-title">Kaviyarasan.E</h1>
          <p className="hero-subtitle">
            Aspiring <span>MERN Stack Developer</span> focused on responsive design, backend logic, and polished product builds.
          </p>
          <p className="hero-description">
            I’m an enthusiastic developer with foundational MERN skills, a strong learning curve, and a practical mindset for turning ideas into working web applications.
          </p>

          <div className="hero-stats" aria-label="Portfolio highlights">
            <div className="stat-pill"><strong>10+</strong><span>Practice Projects</span></div>
            <div className="stat-pill"><strong>React</strong><span>Frontend</span></div>
            <div className="stat-pill"><strong>Node</strong><span>Backend</span></div>
          </div>

          <div className="hero-actions">
            <a className="hero-cta primary" href="/resume.pdf" download>Download Resume</a>
            <a className="hero-cta secondary" href="#projects">View my 3 projects</a>
          </div>

          <p className="hero-guide-text">
            Check the Contact section to view my details, then explore my three featured projects below.
          </p>
        </div>

        <div className="hero-visual-block">
          <div className="hero-photo-ring">
            <img
              src={profilePhoto}
              alt="Professional portrait of Kaviyarasan"
              className="hero-profile-photo"
              style={{ background: '#e6f7fa', objectFit: 'cover' }}
            />
          </div>

          <div className="hero-summary-card">
            <p className="summary-label">Available for</p>
            <h2>Entry-level web development roles</h2>
            <p>Open to internships, freelance builds, and beginner full-stack opportunities.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
