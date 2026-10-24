export function About({ content }) {
  return (
    <section id="about" className="section about-section">
      <div className="shell about-grid">
        <div className="about-aside">
          <p className="section-eyebrow">{content.label}</p>
          <h2>{content.title}</h2>
        </div>
        <div className="about-body">
          <div className="about-copy">
            {content.paragraphs.map((paragraph, index) => (
              <p
                key={paragraph}
                className={index === 1 ? 'about-principle' : undefined}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
