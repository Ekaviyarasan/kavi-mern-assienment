import { useEffect, useRef, useState } from 'react';

const skillBars = [
  { label: 'JavaScript', value: 88 },
  { label: 'React.js', value: 90 },
  { label: 'Node.js', value: 85 },
  { label: 'HTML5', value: 88 },
  { label: 'CSS3', value: 86 },
  { label: 'MongoDB', value: 80 },
  { label: 'JWT Authentication', value: 80 },
];

export default function Skills() {
  const sectionRef = useRef(null);
  const [activeBars, setActiveBars] = useState([]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveBars(skillBars.map((item) => item.value));
            observer.disconnect();
          }
        });
      },
      { threshold: 0.35 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="skills-section" ref={sectionRef} id="skills">
      <div className="section-header wide">
        <p className="section-label">Skills & Drive</p>
        <h2 className="section-heading">Motivated By The Desire To Achieve.</h2>
      </div>

      <div className="progress-stack">
        {skillBars.map((item, index) => (
          <div className="progress-row" key={item.label}>
            <div className="progress-meta">
              <span className="progress-label">{item.label}</span>
              <span className="progress-value">{item.value}%</span>
            </div>

            <div className="progress-track" aria-hidden="true">
              <div
                className="progress-fill"
                style={{
                  width: activeBars[index] ? `${activeBars[index]}%` : '0%',
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
