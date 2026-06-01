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

          <div className="hero-strengths" style={{ marginTop: '24px', padding: '16px', background: 'rgba(255, 255, 255, 0.03)', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
            <p className="summary-label" style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#22d3ee', margin: '0 0 10px 0' }}>Professional Highlights</p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li style={{ fontSize: '0.875rem', color: '#e2e8f0', display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                <span style={{ color: '#22d3ee', fontWeight: 'bold' }}>✓</span>
                <span><strong>MERN Stack:</strong> Strong foundation in React, Node.js, Express, and MongoDB.</span>
              </li>
              <li style={{ fontSize: '0.875rem', color: '#e2e8f0', display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                <span style={{ color: '#22d3ee', fontWeight: 'bold' }}>✓</span>
                <span><strong>Web Development:</strong> Dedicated to building responsive, clean, and accessible websites</span>
              </li>
              <li style={{ fontSize: '0.875rem', color: '#e2e8f0', display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                <span style={{ color: '#22d3ee', fontWeight: 'bold' }}>✓</span>
                <span><strong>Productive Mindset:</strong> Eager to learn, collaborate, and build practical real-world features.</span>
              </li>
              <li style={{ fontSize: '0.875rem', color: '#e2e8f0', display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                <span style={{ color: '#22d3ee', fontWeight: 'bold' }}>✓</span>
                <span><strong>Featured Projects:</strong> Created <a href="#projects" style={{ color: '#22d3ee', textDecoration: 'none' }}>Jobzenix - Job Platform</a>, <a href="#projects" style={{ color: '#22d3ee', textDecoration: 'none' }}>E-Commerce Web Application</a>, and <a href="#projects" style={{ color: '#22d3ee', textDecoration: 'none' }}>SmartPilot</a>.</span>
              </li>
            </ul>
          </div>

          <div className="hero-actions" style={{ marginTop: '24px' }}>
            <a className="hero-cta primary" href="/resume.pdf" download>Download Resume</a>
          </div>
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
