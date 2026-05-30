import { useMemo, useState } from 'react';

const projectData = [
  {
    title: 'Jobzenix - Job Platform',
    category: 'Full-Stack, MERN, JWT, Tailwind CSS',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80',
    description:
      'Built a SaaS job platform for 100+ users with JWT authentication and role-based access control for employers and candidates. Reduced API response times by 25% through optimized MongoDB queries and indexing. Deployed on Vercel and Render.\n\nNote: This project is not available online currently.',
    link: 'https://jobzenix-atqezp7w1-ekaviyarasans-projects.vercel.app/', // No link since the repo is missing
  },
  {
    title: 'E-Commerce Web Application',
    category: 'Full-Stack, React, MongoDB, Tailwind',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
    description:
      'Developed a complete e-commerce platform with product browsing, shopping cart, and checkout functionality. Ensured 100% mobile responsiveness and scalable design using Tailwind CSS. Structured MongoDB collections for products, users, and orders.',
    link: 'https://github.com/Ekaviyarasan/kavi-mern-assienment',
  },
  {
    title: 'SmartPlant - IoT Dashboard',
    category: 'Full-Stack, IoT, MERN',
    image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80',
    description:
      'Created a dashboard for monitoring plant health via sensors. Built React components and responsive charts, integrated with Node.js/Express backend and MongoDB for data management. Authenticated dashboard with JWT and GitHub OAuth.',
    link: 'https://github.com/Ekaviyarasan/kavi-mern-assienment',
  },
];

const filters = ['All', 'Photography', 'Web Design', 'Creative'];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(projectData[0]);

  const visibleProjects = useMemo(() => {
    if (activeFilter === 'All') return projectData;
    return projectData.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  const activeProject = visibleProjects.find((project) => project.title === selectedProject.title) ?? visibleProjects[0];

  return (
    <section className="projects-section" id="projects">
      <div className="section-header spread">
        <div>
          <p className="section-label">Selected Work</p>
          <h2 className="section-heading">Stunning Projects.</h2>
          <p className="projects-guide-text">
            Here are my 3 featured projects for you to explore.
          </p>
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
          <article
            className={`project-card${selectedProject.title === project.title ? ' selected' : ''}`}
            key={project.title}
          >
            <button
              type="button"
              className="project-card-trigger"
              onClick={() => setSelectedProject(project)}
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
            </button>
            <div className="project-card-actions">
              {project.link ? (
                <a
                  className="project-link"
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open Project
                </a>
              ) : (
                <span className="project-link disabled">Not available online</span>
              )}
            </div>
          </article>
        ))}
      </div>

      <aside className="project-detail-panel" aria-live="polite">
        <p className="section-label">Selected Project</p>
        <h3 className="project-detail-title">{activeProject.title}</h3>
        <p className="project-detail-category">{activeProject.category}</p>
        <p className="project-detail-description">{activeProject.description}</p>
        <p className="project-detail-hint">Click any project card above to view its details one by one.</p>
      </aside>
    </section>
  );
}
