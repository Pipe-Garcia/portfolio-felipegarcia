import { Link } from 'react-router-dom';
import { projects } from '../../data/projects';
import { Icon } from '../Icon/Icon';

export function ProjectBadges({ project }) {
  return (
    <div className="badges">
      {project.badges.map((badge, index) => (
        <span
          className={index === 0 ? 'badge badge-accent' : 'badge'}
          key={badge}
        >
          {badge}
        </span>
      ))}
    </div>
  );
}

export function ProductVisual({ project, copy, eager = false }) {
  const desktop = project.screenshots[0];
  const mobile = project.slug === 'gymplanner' ? project.screenshots[1] : null;
  return (
    <div
      className={
        'product-visual ' + (mobile ? 'product-responsive' : 'product-single')
      }
    >
      <div className="screen-frame desktop-screen">
        <div className="screen-chrome" aria-hidden="true">
          <i />
          <i />
          <i />
          <span>
            {project.slug === 'gymplanner' ? 'GymPlanner' : 'Decomat S.R.L.'}
          </span>
        </div>
        <img
          src={desktop.image}
          alt={copy.media[desktop.key][0]}
          width={desktop.width}
          height={desktop.height}
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
        />
      </div>
      {mobile && (
        <div className="mobile-screen">
          <img
            src={mobile.image}
            alt={copy.media[mobile.key][0]}
            width={mobile.width}
            height={mobile.height}
            loading="lazy"
            decoding="async"
          />
        </div>
      )}
    </div>
  );
}

export function SelectedWork({ content, projectCopy }) {
  return (
    <section id="projects" className="section selected-work">
      <div className="shell">
        <div className="section-heading section-heading-wide" data-reveal>
          <p className="section-eyebrow">{content.label}</p>
          <h2 className="reveal-mask">{content.title}</h2>
          <p>{content.description}</p>
        </div>
        {projects.map((project, index) => {
          const copy = projectCopy[project.slug];
          const textFrom = index === 0 ? 'left' : 'right';
          const visualFrom = index === 0 ? 'clip-right' : 'clip-left';
          return (
            <article
              key={project.slug}
              className={
                'project-preview ' +
                (index === 1
                  ? 'project-reverse project-secondary'
                  : 'project-flagship')
              }
            >
              <div
                className="project-copy"
                data-reveal={textFrom}
                style={{ '--reveal-delay': '0ms' }}
              >
                <div className="project-topline">
                  <ProjectBadges project={project} />
                </div>
                <h3>{copy.title}</h3>
                <p className="project-lead">{copy.lead}</p>
                <p className="project-description">{copy.description}</p>
                <ul className="stack-tags" aria-label="Stack">
                  {project.previewStack.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <ul className="project-highlights">
                  {copy.highlights.map((item) => (
                    <li key={item.title}>
                      <span className="check" aria-hidden="true">
                        ✓
                      </span>
                      <div>
                        <strong>{item.title}</strong>
                        <span>{item.description}</span>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="project-actions">
                  <Link
                    className="button button-primary project-link"
                    to={'/projects/' + project.slug}
                  >
                    {content.cta}
                    <Icon name="arrow" />
                  </Link>
                  {project.repository && (
                    <a
                      className="action-icon repository-link"
                      href={project.repository}
                      aria-label={copy.repositoryLabel}
                      title={copy.repositoryLabel}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon name="github" />
                    </a>
                  )}
                </div>
              </div>
              <Link
                to={'/projects/' + project.slug}
                className="product-link"
                aria-label={content.visualLabel + ': ' + copy.title}
                data-reveal={visualFrom}
                style={{ '--reveal-delay': '90ms' }}
              >
                <ProductVisual project={project} copy={copy} />
              </Link>
            </article>
          );
        })}
      </div>
    </section>
  );
}
