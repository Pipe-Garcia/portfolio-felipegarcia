function BulletList({ items }) {
  return (
    <ul className="bullet-list">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

function QuickFacts({ facts }) {
  return (
    <div className="quick-facts-grid">
      {facts.map((fact) => (
        <article key={fact.label} className="quick-fact-card">
          <p className="kicker">{fact.label}</p>
          <h3>{fact.value}</h3>
        </article>
      ))}
    </div>
  );
}

export function FeaturedCaseStudy({ content, media }) {
  return (
    <section id={content.id} className="section">
      <div className="shell">
        <div className="section-heading">
          <p className="section-eyebrow">{content.sectionLabel}</p>
          <h2>{content.title}</h2>
          <p className="section-summary">{content.summary}</p>
        </div>

        <div className="case-study-frame">
          <QuickFacts facts={content.quickFacts} />

          <div className="case-study-intro">
            <article className="case-study-lead">
              <div>
                <p className="kicker">{content.context.title}</p>
                <p>{content.context.body}</p>
              </div>
              <div>
                <p className="kicker">{content.challenge.title}</p>
                <p>{content.challenge.body}</p>
              </div>
              <div>
                <p className="kicker">{content.solution.title}</p>
                <p>{content.solution.body}</p>
              </div>
            </article>

            <aside className="stack-panel">
              <p className="kicker">{content.stackTitle}</p>
              <BulletList items={content.stack} />
            </aside>
          </div>

          <div className="case-study-details">
            <article className="detail-card">
              <h3>{content.architectureTitle}</h3>
              <BulletList items={content.architecturePoints} />
            </article>

            <article className="detail-card">
              <h3>{content.featureTitle}</h3>
              <BulletList items={content.features} />
            </article>

            <article className="detail-card">
              <h3>{content.highlightsTitle}</h3>
              <BulletList items={content.highlights} />
            </article>
          </div>

          <article className="impact-panel">
            <p className="kicker">{content.impactTitle}</p>
            <p>{content.impact}</p>
          </article>

          {media.screenshots.length > 0 ? (
            <div className="screenshots-grid">
              {media.screenshots.map((shot) => (
                <figure key={shot.title} className="screenshot-card">
                  <img src={shot.image} alt={shot.title} />
                  <figcaption>
                    <strong>{shot.title}</strong>
                    <span>{shot.caption}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}