export default function Testimonial() {
  return (
    <section className="testimonial-section">
      <div className="testimonial-card">
        <div className="author-photo-block">
          <img
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80"
            alt="Antonio Morena"
            className="author-photo"
          />
        </div>

        <div className="testimonial-copy">
          <p className="quote-mark">“</p>
          <p className="testimonial-quote">
            Freaky brought a confident editorial energy to our launch. Every interaction felt intentional, premium, and deeply aligned with our brand voice.
          </p>
          <div className="testimonial-meta">
            <div>
              <p className="author-name">Antonio Morena</p>
              <p className="author-role">Creative Director</p>
            </div>

            <div className="testimonial-controls" aria-label="Testimonial navigation">
              <button className="control-dot active" type="button" aria-label="Previous" />
              <button className="control-dot" type="button" aria-label="Next" />
              <button className="control-dot" type="button" aria-label="Next" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
