
import profilePhoto from "../assets/arasan.jpg";


export default function Testimonial() {
  return (
    <section className="testimonial-section">
      <div className="testimonial-card">
        <div className="author-photo-block">
          <img
            src={profilePhoto}
            alt="Portrait of Kaviyarasan"
            className="author-photo"
            
          />
        </div>

        <div className="testimonial-copy">
          <p className="quote-mark">"</p>
          <p className="testimonial-quote">
            Kaviyarasan shows strong curiosity, fast learning, and a genuine
            enthusiasm for full-stack development. His project mindset and
            consistency make him a dependable fresher to grow with.
          </p>
          <div className="testimonial-meta">
            <div>
              <p className="author-name">Self-driven developer</p>
              <p className="author-role">Mentor & Project Growth Perspective</p>
            </div>
            <div className="testimonial-controls" aria-label="Testimonial navigation">
              <button className="control-dot active" type="button" aria-label="Growth focus" />
              <button className="control-dot" type="button" aria-label="Collaboration" />
              <button className="control-dot" type="button" aria-label="Execution" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}