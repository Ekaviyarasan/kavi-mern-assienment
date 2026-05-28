export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-grid">
        <div className="about-image-frame">
          <img
            src="/src/assets/profile.jpg"
            alt="Kaviyarasan's professional photo"
            className="about-profile-photo"
          />
        </div>

        <div className="about-copy">
          <p className="section-label">About Me.</p>
          <h2 className="section-heading">Results-driven MERN Stack Developer</h2>
          <p className="section-body">
            I have hands-on experience designing and building scalable full-stack web applications. Proficient in React.js, Node.js, Express.js, and MongoDB. I have demonstrated the ability to optimize API performance and database queries, achieving up to 30% improvement in application speed. I have strong focus on responsive UI design, JWT-based security, and cloud deployment using Vercel and Render.
          </p>
          <a className="inline-link" href="#projects">→ Read More</a>
        </div>
      </div>
    </section>
  );
}
