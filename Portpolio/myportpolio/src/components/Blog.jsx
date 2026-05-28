const posts = [
  {
    category: 'Project Notes',
    title: 'How I structure responsive React interfaces for real users',
    date: 'May 16, 2026',
    image: 'linear-gradient(160deg, rgba(14, 20, 27, 0.95), rgba(44, 90, 130, 0.88))',
  },
  {
    category: 'Learning',
    title: 'Practical MERN patterns for authentication, routing, and API handling',
    date: 'May 12, 2026',
    image: 'linear-gradient(160deg, rgba(16, 14, 22, 0.95), rgba(92, 52, 76, 0.88))',
  },
  {
    category: 'Career',
    title: 'Building confidence as a fresher through small project launches',
    date: 'May 08, 2026',
    image: 'linear-gradient(160deg, rgba(11, 18, 19, 0.95), rgba(54, 112, 106, 0.88))',
  },
];

export default function Blog() {
  return (
    <section className="blog-section" id="blog">
      <div className="section-header">
        <div>
          <p className="section-label">Learning & Notes</p>
          <h2 className="section-heading">Insights from building and growing.</h2>
        </div>
      </div>

      <div className="blog-grid">
        {posts.map((post) => (
          <article className="blog-card" key={post.title}>
            <div
              className="blog-image"
              style={{ backgroundImage: post.image }}
              aria-hidden="true"
            />
            <div className="blog-copy">
              <p className="blog-category">{post.category}</p>
              <h3>{post.title}</h3>
              <p className="blog-date">{post.date}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
