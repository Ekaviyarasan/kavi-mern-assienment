import { useState } from 'react';

export default function CTA() {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <section className="cta-section" id="contact">
      <div className="cta-copy">
        <p className="section-label">Let's Connect</p>
        <h2 className="cta-title">Open to internships, fresh roles, and collaborative builds.</h2>
        <p className="cta-subtitle">
          I’m looking for opportunities where I can grow, contribute code, and build practical products with a team.
        </p>
        <p className="cta-helper-text">
          Use this Contact section to view my resume-based details and get in touch.
        </p>
      </div>

      <div className="cta-actions">
        <button
          type="button"
          className="cta-button primary"
          onClick={() => setShowDetails((value) => !value)}
        >
          {showDetails ? 'Hide Details' : 'View Contact Details'}
        </button>
        <a className="cta-button secondary" href="/resume.pdf" download>Download Resume</a>
        <a className="cta-button secondary" href="mailto:kaviyarasan@email.com">Contact Me</a>
      </div>

      {showDetails && (
        <div className="cta-details-panel" aria-live="polite">
          <div className="cta-detail-card">
            <p className="cta-detail-label">Resume Summary</p>
            <h3 className="cta-detail-title">Kaviyarasan</h3>
            <p className="cta-detail-copy">
              Aspiring MERN Stack Developer focused on responsive interfaces, backend logic, authentication, dashboards, and practical product builds.
            </p>
          </div>

          <div className="cta-detail-card">
            <p className="cta-detail-label">Contact</p>
            <p className="cta-detail-copy"><strong>Email:</strong> kaviyarasan@email.com</p>
            <p className="cta-detail-copy"><strong>Phone:</strong> 6385538234</p>
            <p className="cta-detail-copy"><strong>Availability:</strong> Internships, freelance, entry-level full-stack roles</p>
            <p className="cta-detail-copy"><strong>Focus:</strong> Html,Css,JavaScript,React, Node.js, MongoDB, Express, JWT, responsive UI</p>
          </div>

          <div className="cta-detail-card">
            <p className="cta-detail-label">Resume Actions</p>
            <p className="cta-detail-copy">
              Download the resume PDF to review experience, projects, and skills in detail.
            </p>
            <a className="cta-detail-link" href="/resume.pdf" download>Open Resume PDF</a>
          </div>
        </div>
      )}
    </section>
  );
}
