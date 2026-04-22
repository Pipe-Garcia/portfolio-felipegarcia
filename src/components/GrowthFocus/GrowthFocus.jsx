export function GrowthFocus({ content }) {
  return (
    <section id={content.id} className="section">
      <div className="shell growth-layout growth-layout-strong">
        <div className="section-heading">
          <p className="section-eyebrow">{content.sectionLabel}</p>
          <h2>{content.title}</h2>
          <p className="section-summary">{content.intro}</p>
        </div>

        <div className="growth-list">
          {content.items.map((item) => (
            <article key={item.title} className="growth-item growth-item-strong">
              <p className="kicker">{item.title}</p>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}