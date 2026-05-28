export default function CTA() {
  return (
    <section className="cta-section" id="contact">
      <div className="cta-copy">
        <p className="section-label">Let's Connect</p>
        <h2 className="cta-title">Open to internships, fresh roles, and collaborative builds.</h2>
        <p className="cta-subtitle">
          I’m looking for opportunities where I can grow, contribute code, and build practical products with a team.
        </p>
      </div>

      <div className="cta-actions">
        <a className="cta-button primary" href="/resume.pdf" download>Download Resume</a>
        <a className="cta-button secondary" href="mailto:kaviyarasan@email.com">Contact Me</a>
      </div>
    </section>
  );
}
