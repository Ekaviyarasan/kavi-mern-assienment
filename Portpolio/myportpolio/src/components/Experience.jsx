const milestones = [
  {
    period: '2024 - Present',
    title: 'BCA / Computer Applications',
    company: 'Academic Focus',
    description: 'Building strong foundations in programming, databases, web development, and system design while developing practical projects and problem-solving skills.',
  },
  {
    period: '2025',
    title: 'MERN Stack Practice',
    company: 'Hands-on Development',
    description: 'Designed responsive web apps with React, Node.js, Express.js, and MongoDB, covering authentication, REST APIs, and deployment workflows.',
  },
  {
    period: '2026',
    title: 'Open to Internships & Entry-Level Roles',
    company: 'Career Ready',
    description: 'Ready to contribute to fast-moving product teams, collaborate with developers, and grow through real-world engineering challenges.',
  },
];

export default function Experience() {
  return (
    <section className="experience-section" id="experience">
      <div className="section-header wide">
        <p className="section-label">Experience & Growth</p>
        <h2 className="section-heading">A steady path from learning to building.</h2>
        <p className="section-body">
          I am focused on turning academic knowledge into real product experience, with an emphasis on clean code, responsive interfaces, and full-stack execution.
        </p>
      </div>

      <div className="timeline-grid" aria-label="Experience timeline">
        {milestones.map((item) => (
          <article className="timeline-card" key={item.title}>
            <div className="timeline-dot" aria-hidden="true" />
            <p className="timeline-period">{item.period}</p>
            <h3 className="timeline-title">{item.title}</h3>
            <p className="timeline-company">{item.company}</p>
            <p className="timeline-description">{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
