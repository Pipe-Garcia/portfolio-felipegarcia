export function About({ content }) {
  return (
    <section id="about" className="section about-section">
      <div className="shell about-layout">
        <div className="section-heading">
          <p className="section-eyebrow">{content.label}</p>
          <h2>{content.title}</h2>
        </div>
        <div className="about-copy">
          {content.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
