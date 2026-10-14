import { Link } from 'react-router-dom';
import { Icon } from '../Icon/Icon';

export function Experience({ content }) {
  return (
    <section id="experience" className="section experience-section">
      <div className="shell">
        <div className="section-heading">
          <p className="section-eyebrow">{content.label}</p>
          <h2>{content.title}</h2>
        </div>
        <ol className="experience-timeline">
          {content.entries.map((entry) => (
            <li key={entry.project}>
              <p className="experience-period">{entry.period}</p>
              <span className="experience-node" aria-hidden="true" />
              <div className="experience-content">
                <h3>{entry.title}</h3>
                <p className="experience-company">{entry.company}</p>
                <p>{entry.description}</p>
                <Link className="text-link" to={'/projects/' + entry.project}>
                  {entry.cta}
                  <Icon name="arrow" />
                </Link>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
