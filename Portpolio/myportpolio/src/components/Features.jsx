const featureItems = [
  {
    icon: '✦',
    title: 'Modern Design',
    description: 'Editorial compositions, tactile depth, and high-contrast systems built for premium brands.',
  },
  {
    icon: '◌',
    title: 'User Experience',
    description: 'Thoughtful navigation, responsive structure, and polished interactions that keep people engaged.',
  },
  {
    icon: '↗',
    title: 'Powerful Editor',
    description: 'Flexible front-end execution with clean code and bold creative direction from concept to launch.',
  },
];

export default function Features() {
  return (
    <section className="features-section" id="services">
      <div className="section-header narrow">
        <p className="section-label">Selected Services</p>
        <h2 className="section-heading">Crafting standout storytelling with purpose.</h2>
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
