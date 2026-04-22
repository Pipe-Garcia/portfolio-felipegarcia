export function Expertise({ content }) {
  return (
    <section id={content.id} className="section">
      <div className="shell">
        <div className="section-heading">
          <p className="section-eyebrow">{content.sectionLabel}</p>
          <h2>{content.title}</h2>
        </div>

        <div className="expertise-grid expertise-grid-strong">
          {content.groups.map((group, index) => (
            <article key={group.title} className="expertise-card expertise-card-strong">
              <p className="expertise-index">{String(index + 1).padStart(2, '0')}</p>
              <h3>{group.title}</h3>
              <ul className="bullet-list">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}