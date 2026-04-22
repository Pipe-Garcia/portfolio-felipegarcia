export function About({ content }) {
  return (
    <section id={content.id} className="section">
      <div className="shell about-layout">
        <div className="section-heading">
          <p className="section-eyebrow">{content.sectionLabel}</p>
          <h2>{content.title}</h2>
        </div>

        <div className="about-content">
          <div className="prose-card">
            {content.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <aside className="about-side-card">
            <p className="kicker">{content.sideTitle}</p>
            <ul className="bullet-list">
              {content.sideItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}