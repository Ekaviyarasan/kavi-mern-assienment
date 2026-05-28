import { useMemo, useState } from 'react';

const projectData = [
  {
    title: 'SkillMatch - Job Platform',
    category: 'Full-Stack, MERN, JWT, Tailwind CSS',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80',
    description:
      'Built a SaaS job platform for 100+ users with JWT authentication and role-based access control for employers and candidates. Reduced API response times by 25% through optimized MongoDB queries and indexing. Deployed on Vercel and Render.',
    link: 'https://github.com/kaviyarasan7778/SkillMatch',
  },
  {
    title: 'E-Commerce Web Application',
    category: 'Full-Stack, React, MongoDB, Tailwind',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
    description:
      'Developed a complete e-commerce platform with product browsing, shopping cart, and checkout functionality. Ensured 100% mobile responsiveness and scalable design using Tailwind CSS. Structured MongoDB collections for products, users, and orders.',
    link: 'https://github.com/kaviyarasan7778/ECommerceApp',
  },
  {
    title: 'SmartPlant - IoT Dashboard',
    category: 'Full-Stack, IoT, MERN',
    image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80',
    description:
      'Created a dashboard for monitoring plant health via sensors. Built React components and responsive charts, integrated with Node.js/Express backend and MongoDB for data management. Authenticated dashboard with JWT and GitHub OAuth.',
    link: 'https://github.com/kaviyarasan7778/SmartPlant',
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
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
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
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
