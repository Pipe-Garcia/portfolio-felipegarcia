export function Contact({ content, links }) {
  return (
    <section id={content.id} className="section section-contact">
      <div className="shell">
        <div className="contact-panel contact-panel-strong">
          <div className="contact-intro">
            <div className="section-heading">
              <p className="section-eyebrow">{content.sectionLabel}</p>
              <h2>{content.title}</h2>
              <p className="section-summary">{content.description}</p>
            </div>

            <a className="contact-pill" href={links.email.href}>
              {content.cta}
            </a>
          </div>

          <div className="contact-grid">
            <article className="contact-card">
              <p className="contact-label">Email</p>
              <a href={links.email.href}>{links.email.value}</a>
            </article>

            <article className="contact-card">
              <p className="contact-label">LinkedIn</p>
              <a href={links.linkedin.href} target="_blank" rel="noreferrer">
                {links.linkedin.label}
              </a>
            </article>

            <article className="contact-card">
              <p className="contact-label">GitHub</p>
              <a href={links.github.href} target="_blank" rel="noreferrer">
                {links.github.label}
              </a>
            </article>

            <article className="contact-card contact-card-wide">
              <p className="contact-label">Availability</p>
              <p className="contact-note">{content.availability}</p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}