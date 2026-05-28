import { useMemo, useState } from 'react';

const projectData = [
  {
    title: 'SkillMatch - Job Platform',
    category: 'Full-Stack Development',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80',
    description:
      'Built a full-stack job platform connecting 100+ users with secure JWT-based authentication and role-based access control. Improved API response time by 25% through optimized MongoDB queries and indexed database collections.',
  },
  {
    title: 'E-Commerce Web Application',
    category: 'Full-Stack Development',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
    description:
      'Developed a complete e-commerce platform with product browsing, shopping cart, and checkout functionality. Ensured 100% mobile responsiveness and scalable design using Tailwind CSS and responsive design principles.',
  },
];

const filters = ['All', 'Photography', 'Web Design', 'Creative'];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const visibleProjects = useMemo(() => {
    if (activeFilter === 'All') return projectData;
    return projectData.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  return (
    <section className="projects-section" id="projects">
      <div className="section-header spread">
        <div>
          <p className="section-label">Selected Work</p>
          <h2 className="section-heading">Stunning Projects.</h2>
        </div>

        <div className="filter-tabs" aria-label="Project filter">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              className={`filter-tab${filter === activeFilter ? ' active' : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      <div className="project-grid">
        {visibleProjects.map((project) => (
          <article className="project-card" key={project.title}>
            <div
              className="project-image"
              style={{ backgroundImage: `url(${project.image})` }}
              aria-hidden="true"
            >
              <div className="project-overlay">
                <div>
                  <p className="project-category">{project.category}</p>
                  <h3 className="project-title">{project.title}</h3>
                </div>
                <span className="project-arrow">↗</span>
              </div>
            </div>
            <div className="project-description">
              {project.description}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
