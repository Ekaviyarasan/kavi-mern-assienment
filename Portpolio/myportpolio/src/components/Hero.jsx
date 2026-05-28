export default function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-background" aria-hidden="true" />
      <div className="hero-overlay" aria-hidden="true" />

      <div className="hero-triangle" aria-hidden="true" />

      <div className="hero-content">
        <p className="eyebrow-text">Hello !!!</p>
        <h1 className="hero-title">I'm Kaviyarasan</h1>
        <p className="hero-subtitle">
          I'm a <span>MERN Stack Developer</span>
        </p>

        <img
          src="/src/assets/profile.jpg"
          alt="Kaviyarasan's professional photo"
          className="hero-profile-photo"
        />

        <div className="hero-actions">
          <a className="hero-cta primary" href="#contact">Hire Me</a>
          <a className="hero-cta secondary" href="#projects">View Work</a>
        </div>

        <div className="scroll-indicator" aria-label="Scroll down">
          <div className="scroll-circle">
            <span className="scroll-arrow">↓</span>
          </div>
          <div className="scroll-arrows" aria-hidden="true">
            <span className="scroll-arrow-line">↘</span>
            <span className="scroll-arrow-line">↘</span>
          </div>
        </div>
      </div>
    </section>
  );
}
