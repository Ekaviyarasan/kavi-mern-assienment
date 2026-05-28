const posts = [
  {
    category: 'Magazine',
    title: 'Building brand-first websites with rich editorial layers',
    date: 'May 16, 2026',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
  },
  {
    category: 'Culture',
    title: 'Why dark interfaces still win in premium storytelling',
    date: 'May 12, 2026',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80',
  },
  {
    category: 'Strategy',
    title: 'Design systems that guide creative teams with clarity',
    date: 'May 08, 2026',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
  },
];

export default function Blog() {
  return (
    <section className="blog-section" id="blog">
      <div className="section-header">
        <div>
          <p className="section-label">Latest Thoughts</p>
          <h2 className="section-heading">Blogs & News.</h2>
        </div>
      </div>

      <div className="blog-grid">
        {posts.map((post) => (
          <article className="blog-card" key={post.title}>
            <div
              className="blog-image"
              style={{ backgroundImage: `url(${post.image})` }}
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
