export function WorkApproach({ content }) {
  return (
    <section id={content.id} className="section">
      <div className="shell approach-layout">
        <div className="section-heading">
          <p className="section-eyebrow">{content.sectionLabel}</p>
          <h2>{content.title}</h2>
          <p className="section-summary">{content.intro}</p>
        </div>

        <div className="principles-list">
          {content.principles.map((principle, index) => (
            <article key={principle} className="principle-item principle-item-strong">
              <span>{String(index + 1).padStart(2, '0')}</span>
              <p>{principle}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}