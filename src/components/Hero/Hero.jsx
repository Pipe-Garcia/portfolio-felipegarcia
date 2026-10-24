import { getCvLinkByLanguage } from '../../data/links';
import { Icon } from '../Icon/Icon';
import { ProductVisual } from '../SelectedWork/SelectedWork';
import { projects } from '../../data/projects';

export function Hero({ content, language, links, projectCopy }) {
  const showcase = projects.find((project) => project.slug === 'gymplanner');
  const showcaseCopy = projectCopy?.['gymplanner'];
  return (
    <section id="hero" className="hero">
      <div className="shell hero-inner">
        <div className="hero-text">
          <div className="hero-meta">
            <p className="status">
              <span className="status-dot" aria-hidden="true" />
              {content.status}
            </p>
            <span className="hero-edition" aria-hidden="true">
              PORTFOLIO / 2026
            </span>
          </div>
          <p className="section-eyebrow">{content.eyebrow}</p>
          <h1 tabIndex={-1}>{content.title}</h1>
          <p className="hero-description">{content.description}</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">
              {content.primaryCta}
              <Icon name="arrow" />
            </a>
            <a
              className="action-cv"
              href={getCvLinkByLanguage(language)}
              aria-label={content.cvCta}
              title={content.cvCta}
              download
            >
              <Icon name="download" />
              CV
            </a>
            <a
              className="action-icon"
              href={links.github.href}
              aria-label={content.githubLabel}
              title={content.githubLabel}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="github" />
            </a>
          </div>
        </div>
        {showcase && showcaseCopy && (
          <div className="hero-visual">
            <span className="hero-visual-grid" aria-hidden="true" />
            <ProductVisual project={showcase} copy={showcaseCopy} eager />
          </div>
        )}
      </div>
    </section>
  );
}
