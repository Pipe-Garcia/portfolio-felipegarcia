import { getCvLinkByLanguage } from '../../data/links';
import { Icon } from '../Icon/Icon';

export function Contact({ content, links, language }) {
  return (
    <section id="contact" className="section contact-section">
      <div className="shell contact-closing" data-reveal>
        <p className="section-eyebrow">{content.label}</p>
        <h2 className="contact-statement reveal-mask">{content.title}</h2>
        <p className="contact-description">{content.description}</p>
        <a className="button button-primary contact-cta" href={links.email.href}>
          <Icon name="email" />
          {content.cta}
        </a>
        <div className="contact-utilities">
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
            className="action-cv"
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
    </section>
  );
}
