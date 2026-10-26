import { Link, useParams } from 'react-router-dom';
import { projects } from '../../data/projects';
import { ProductVisual, ProjectBadges } from '../SelectedWork/SelectedWork';
import { ScreenshotGallery } from '../ScreenshotGallery/ScreenshotGallery';
import { Icon } from '../Icon/Icon';

export function ProjectCaseStudy({ translations: t }) {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);
  if (!project)
    return (
      <section className="section shell not-found">
        <h1 tabIndex={-1}>{t.casePage.notFound}</h1>
        <Link className="text-link" to="/#projects">
          {t.casePage.back} →
        </Link>
      </section>
    );
  const copy = t.projects[slug];
  const other = projects.find((item) => item.slug !== slug);

  return (
    <article className="case-page">
      <section className="case-hero shell">
        <Link className="text-link case-back link-back" to="/#projects">
          <span className="link-arrow" aria-hidden="true">
            ←
          </span>
          {t.casePage.back}
        </Link>
        <p className="section-eyebrow">{t.casePage.label}</p>
        <ProjectBadges project={project} />
        <h1 tabIndex={-1}>{copy.title}</h1>
        <p className="case-lead">{copy.lead}</p>
        <p className="case-description">{copy.description}</p>
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
        <ProductVisual project={project} copy={copy} eager />
      </section>
      <section className="section case-content" data-reveal>
        <div className="shell case-layout">
          <div className="case-narrative">
            {copy.caseStudy.map((section) => (
              <section key={section.title} className="case-chapter">
                <div>
                  <h2>{section.title}</h2>
                  {section.body && <p>{section.body}</p>}
                  {section.items && (
                    <ul className="bullet-list">
                      {section.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </section>
            ))}
          </div>
          <aside className="case-stack">
            <p className="section-eyebrow">{t.casePage.stack}</p>
            <ul>
              {project.stack.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </aside>
        </div>
      </section>
      <section className="section case-gallery" data-reveal>
        <div className="shell">
          <div className="section-heading">
            <p className="section-eyebrow">PRODUCT</p>
            <h2>{t.casePage.gallery}</h2>
          </div>
          <ScreenshotGallery
            key={slug}
            project={project}
            copy={copy}
            labels={t.gallery}
          />
          {copy.mediaNote && <p className="media-note">{copy.mediaNote}</p>}
        </div>
      </section>
      <section className="section case-outcome" data-reveal>
        <div className="shell about-layout">
          <div className="section-heading">
            <p className="section-eyebrow">OUTCOME</p>
            <h2>{t.casePage.outcome}</h2>
          </div>
          <div>
            <p>{copy.outcome}</p>
          </div>
        </div>
      </section>
      <section className="case-bottom" aria-label="Case navigation">
        <div className="shell case-bottom-inner">
          <Link className="text-link link-back" to="/#projects">
            <span className="link-arrow" aria-hidden="true">
              ←
            </span>
            {t.casePage.back}
          </Link>
          <Link className="text-link" to={'/projects/' + other.slug}>
            {t.casePage.other}: {t.projects[other.slug].title}
            <span className="link-arrow" aria-hidden="true">
              →
            </span>
          </Link>
        </div>
      </section>
    </article>
  );
}
