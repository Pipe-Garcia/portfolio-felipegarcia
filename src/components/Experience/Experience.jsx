import { Link } from 'react-router-dom';
import { Icon } from '../Icon/Icon';

// "Present / Actualidad / Atualidade" marks the current engagement, regardless
// of the active language, so the active node stays data-driven.
const CURRENT = /present|actual|atual/i;

export function Experience({ content }) {
  return (
    <section id="experience" className="section experience-section">
      <div className="shell">
        <div className="section-heading" data-reveal>
          <p className="section-eyebrow">{content.label}</p>
          <h2>{content.title}</h2>
        </div>
        <ol className="experience-timeline" data-reveal>
          {/* Chronological reading on the horizontal rail: past (left) → present (right). */}
          {[...content.entries].reverse().map((entry, index) => {
            const isCurrent = CURRENT.test(entry.period);
            return (
              <li
                key={entry.project}
                className={
                  'exp-item ' +
                  (index % 2 === 0 ? 'exp-above' : 'exp-below') +
                  (isCurrent ? ' exp-current' : '')
                }
              >
                <div className="exp-card">
                  <p className="exp-period">{entry.period}</p>
                  <h3>{entry.title}</h3>
                  <p className="exp-company">{entry.company}</p>
                  <p className="exp-desc">{entry.description}</p>
                  <Link className="text-link" to={'/projects/' + entry.project}>
                    {entry.cta}
                    <Icon name="arrow" />
                  </Link>
                </div>
                <span className="exp-stem" aria-hidden="true" />
                <span
                  className={'exp-node' + (isCurrent ? ' is-active' : '')}
                  aria-hidden="true"
                />
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
