import { getCvLinkByLanguage } from '../../data/links';
import { Icon } from '../Icon/Icon';

export function Contact({ content, links, language }) {
  return (
    <section id="contact" className="section contact-section">
      <div className="shell contact-layout">
        <div className="section-heading">
          <p className="section-eyebrow">{content.label}</p>
          <h2>{content.title}</h2>
        </div>
        <div className="contact-copy">
          <p>{content.description}</p>
          <div className="contact-actions">
            <a className="button button-primary" href={links.email.href}>
              <Icon name="email" />
              {content.cta}
            </a>
            <a
              className="action-icon"
              href={links.linkedin.href}
              aria-label={content.linkedinLabel}
              title={content.linkedinLabel}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="linkedin" />
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
            <a
              className="button button-secondary action-cv"
              href={getCvLinkByLanguage(language)}
              aria-label={content.cvCta}
              title={content.cvCta}
              download
            >
              <Icon name="download" />
              CV
            </a>
          </div>
          <a className="contact-email" href={links.email.href}>
            {links.email.value}
          </a>
          <p className="contact-location">{content.location}</p>
        </div>
      </div>
    </section>
  );
}
