import { useMemo, useState } from 'react';

const projectData = [
  {
    title: 'Jobzenix - Job Platform',
    category: ' Mern Full-Stack, ',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
    description:'Designed and developed a full-stack Job Search Platform using the MERN stack to connect job seekers and recruiters. Implemented secure user authentication, job posting and application management,  advanced job search functionality. Created separate dashboards for job seekers and recruiters to manage profiles, applications, and job listings efficiently. Integrated RESTful APIs for seamless data communication and MongoDB for scalable data storage. Developed a responsive and user-friendly interface using React.js to ensure an optimal experience across devices'
    ,
    link: 'https://jobzenix-atqezp7w1-ekaviyarasans-projects.vercel.app/', // No link since the repo is missing
    concepts: [
      'Role-based Dashboards (Employers post jobs, Candidates apply)',
      'Optimized MongoDB Indexing (25% faster query responses)',
      'Secure Session Management using JWT & HttpOnly cookies',
      'Job Search with Filters (Location, Salary, Experience, Skills)',
      'Apply for Jobs Online',
      'Save/Favorite Jobs',
    ]
  },
  {
    title: 'E-Commerce Web Application',
    category: 'Full-Stack, React, MongoDB, Tailwind',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80',
    description:
      'Developed a complete e-commerce platform with product browsing, shopping cart, and checkout functionality. Ensured 100% mobile responsiveness and scalable design using Tailwind CSS. Structured MongoDB collections for products, users, and orders.',
    link: 'https://ecommers-git-main-ekaviyarasans-projects.vercel.app/',
    concepts: [
      'Interactive Product Catalog with categories and filters',
      'Dynamic Shopping Cart state management and local persistence',
      'Normalized MongoDB database schemas for Users, Products, and Orders',
      'Wishlist Management',
      'Secure Checkout Process'
    ]
  },
  {
    title: 'SmartScript',
    category: 'Full-Stack,  MERN',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80',
    description:"Developed a full-stack Team Management System to streamline employee and team operations within an organization. The application enables administrators to create teams, assign members, manage projects, track tasks, and monitor team performance through a centralized dashboard.",
    link: 'https://github.com/Ekaviyarasan/kavi-mern-assienment',
    concepts: [
      "User Authentication and Authorization (Admin, Manager, Employee)",
      "Team Creation and Member Assignment",
      "Project and Task Management",
      "Task Status Tracking (Pending, In Progress, Completed)",
      "Employee Performance Monitoring",
      "Dashboard with Team Statistics",
      "Responsive User Interface"
    ]
  },
];



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
        
        {activeProject.concepts && (
          <div className="project-concepts-list" style={{ marginTop: '16px', borderTop: '1px solid rgba(255, 255, 255, 0.1)', paddingTop: '16px' }}>
            <p style={{ fontSize: '0.8rem', fontWeight: 600, color: '#22d3ee', letterSpacing: '0.05em', textTransform: 'uppercase', margin: '0 0 10px 0' }}>Core Concepts & Features</p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {activeProject.concepts.map((concept, index) => (
                <li key={index} style={{ fontSize: '0.875rem', color: '#cbd5e1', display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                  <span style={{ color: '#22d3ee', fontWeight: 'bold' }}>⚡</span>
                  <span>{concept}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
        
        <p className="project-detail-hint" style={{ marginTop: '16px', fontSize: '0.8rem', opacity: 0.7 }}>Click any project card above to view its details one by one.</p>
      </aside>
    </section>
  );
}
