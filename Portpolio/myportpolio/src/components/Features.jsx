const featureItems = [
  {
    icon: '⚡',
    title: 'Front-End Development',
    description: 'Building fast, polished React interfaces with responsive layouts, smooth interactions, and modern UI patterns.',
  },
  {
    icon: '🧩',
    title: 'Full-Stack Features',
    description: 'Creating practical application workflows with API integration, authentication, and data handling across the stack.',
  },
  {
    icon: '☁️',
    title: 'Deployment & Optimization',
    description: 'Preparing projects for hosting and improving performance, structure, and maintainability for real users.',
  },
];

export default function Features() {
  return (
    <section className="features-section" id="services">
      <div className="section-header narrow">
        <p className="section-label">Services</p>
        <h2 className="section-heading">A practical toolkit for modern web development.</h2>
      </div>

      <div className="feature-grid">
        {featureItems.map((item) => (
          <article className="feature-card" key={item.title}>
            <div className="feature-icon" aria-hidden="true">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
