import { useEffect, useState } from 'react';
import { capabilities } from '../../data/projects';
import { Icon } from '../Icon/Icon';

export function Expertise({ content }) {
  const [compact, setCompact] = useState(
    () => window.matchMedia('(max-width: 767px)').matches,
  );
  useEffect(() => {
    const query = window.matchMedia('(max-width: 767px)');
    const change = () => setCompact(query.matches);
    query.addEventListener('change', change);
    return () => query.removeEventListener('change', change);
  }, []);
  const list = (group) => (
    <ul>
      {group.items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
  return (
    <section id="stack" className="section capabilities-section">
      <div className="shell">
        <div className="section-heading" data-reveal>
          <p className="section-eyebrow">{content.label}</p>
          <h2>{content.title}</h2>
          <p>{content.intro}</p>
        </div>
        <div className="capabilities-grid" data-reveal>
          {capabilities.map((group) =>
            compact ? (
              <details key={group.title} className="capability-accordion">
                <summary>
                  <Icon name={group.title.toLowerCase()} />
                  {group.title}
                  <span className="accordion-mark" aria-hidden="true">
                    +
                  </span>
                </summary>
                {list(group)}
              </details>
            ) : (
              <article className="capability" key={group.title}>
                <div className="capability-heading">
                  <Icon name={group.title.toLowerCase()} />
                  <h3>{group.title}</h3>
                </div>
                {list(group)}
              </article>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
