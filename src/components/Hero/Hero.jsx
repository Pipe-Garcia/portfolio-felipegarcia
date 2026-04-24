import { getCvLinkByLanguage } from '../../data/links';

export function Hero({ content, language }) {
  const cvHref = getCvLinkByLanguage(language);

  return (
    <section id={content.id} className="hero section">
      <div className="shell hero-grid">
        <div className="hero-copy">
          <p className="section-eyebrow">{content.eyebrow}</p>
          <h1>{content.name}</h1>
          <h2>{content.title}</h2>
          <p className="hero-description">{content.description}</p>

          <div className="hero-actions">
            <a className="button button-primary" href="#case-study">
              {content.primaryCta}
            </a>
            <a className="button button-secondary" href="#contact">
              {content.secondaryCta}
            </a>
            <a
              className="button button-secondary"
              href={cvHref}
              target="_blank"
              rel="noreferrer"
            >
              {content.cvCta}
            </a>
          </div>
        </div>

        <aside className="hero-panel hero-panel-strong">
          <p className="hero-panel-label">{content.panelLabel}</p>

          <div className="hero-metrics">
            {content.highlights.map((item) => (
              <article key={item.title} className="metric-card">
                <p className="metric-kicker">{item.title}</p>
                <h3>{item.value}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}