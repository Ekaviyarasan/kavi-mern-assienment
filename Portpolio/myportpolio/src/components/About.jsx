import profilePhoto from '../assets/arasan.jpg';

export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-grid">
        <div className="about-image-frame">
          <img
            src={profilePhoto}
            alt="Kaviyarasan's professional portrait"
            className="about-profile-photo"
            style={{ background: '#e6f7fa', objectFit: 'cover' }}
          />
        </div>

        <div className="about-copy">
          <p className="section-label">About Me</p>
          <h2 className="section-heading">Professional, curious, and ready to build.</h2>
          <p className="section-body">
            I’m an aspiring full-stack developer with hands-on exposure to React, Node.js, Express, MongoDB, and responsive UI development. I enjoy turning ideas into working applications, improving usability, and learning new tools quickly.
          </p>
          <p className="section-body">
            My strengths include problem-solving, collaboration, polished front-end work, and building practical features like authentication, dashboards, and API-driven pages. I’m motivated by real-world projects and continuous improvement.
          </p>

          <ul className="about-highlights">
            <li>Strong foundation in MERN stack fundamentals</li>
            <li>Focus on responsive, accessible, clean interfaces</li>
            <li>Passionate about writing maintainable code and learning fast</li>
          </ul>

          <a className="inline-link" href="#experience">→ See my development journey</a>
        </div>
      </div>
    </section>
  );
}
