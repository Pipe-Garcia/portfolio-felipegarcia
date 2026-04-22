import { useEffect, useMemo, useRef, useState } from 'react';

function BulletList({ items }) {
  return (
    <ul className="bullet-list">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

function QuickFacts({ facts }) {
  return (
    <div className="quick-facts-grid">
      {facts.map((fact) => (
        <article key={fact.label} className="quick-fact-card">
          <p className="kicker">{fact.label}</p>
          <h3>{fact.value}</h3>
        </article>
      ))}
    </div>
  );
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function ScreenshotModal({ screenshots, activeIndex, onClose, onPrev, onNext }) {
  const activeShot = screenshots[activeIndex];

  const [scale, setScale] = useState(1);
  const [translate, setTranslate] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);

  const dragStartRef = useRef({ x: 0, y: 0 });
  const dragOriginRef = useRef({ x: 0, y: 0 });

  const canPan = scale > 1;

  const imageStyle = useMemo(
    () => ({
      transform: `translate(${translate.x}px, ${translate.y}px) scale(${scale})`,
      cursor: canPan ? (isDragging ? 'grabbing' : 'grab') : 'zoom-in',
      transition: isDragging ? 'none' : 'transform 160ms ease',
    }),
    [translate, scale, canPan, isDragging]
  );

  function resetZoom() {
    setScale(1);
    setTranslate({ x: 0, y: 0 });
    setIsDragging(false);
  }

  useEffect(() => {
    resetZoom();
  }, [activeIndex]);

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === 'Escape') onClose();
      if (event.key === 'ArrowLeft') onPrev();
      if (event.key === 'ArrowRight') onNext();
      if (event.key === '0') resetZoom();
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onPrev, onNext]);

  function handleWheel(event) {
    event.preventDefault();

    const delta = event.deltaY > 0 ? -0.18 : 0.18;
    const nextScale = clamp(Number((scale + delta).toFixed(2)), 1, 4);

    if (nextScale === 1) {
      setTranslate({ x: 0, y: 0 });
    }

    setScale(nextScale);
  }

  function handleMouseDown(event) {
    if (!canPan) return;

    setIsDragging(true);
    dragStartRef.current = { x: event.clientX, y: event.clientY };
    dragOriginRef.current = { ...translate };
  }

  function handleMouseMove(event) {
    if (!isDragging || !canPan) return;

    const dx = event.clientX - dragStartRef.current.x;
    const dy = event.clientY - dragStartRef.current.y;

    setTranslate({
      x: dragOriginRef.current.x + dx,
      y: dragOriginRef.current.y + dy,
    });
  }

  function handleMouseUp() {
    setIsDragging(false);
  }

  function handleDoubleClick() {
    if (scale === 1) {
      setScale(2);
    } else {
      resetZoom();
    }
  }

  if (!activeShot) return null;

  return (
    <div className="media-modal-overlay" onClick={onClose}>
      <div
        className="media-modal"
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={activeShot.title}
      >
        <button className="media-modal-close" onClick={onClose} aria-label="Cerrar imagen">
          ×
        </button>

        <div className="media-modal-toolbar">
          <button type="button" className="media-tool-button" onClick={() => setScale((s) => clamp(Number((s - 0.2).toFixed(2)), 1, 4))}>
            −
          </button>
          <span className="media-zoom-indicator">{Math.round(scale * 100)}%</span>
          <button type="button" className="media-tool-button" onClick={() => setScale((s) => clamp(Number((s + 0.2).toFixed(2)), 1, 4))}>
            +
          </button>
          <button type="button" className="media-tool-button" onClick={resetZoom}>
            Reset
          </button>
        </div>

        <div
          className="media-modal-image-wrap"
          onWheel={handleWheel}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          <button className="media-modal-nav media-modal-nav-left" onClick={onPrev} aria-label="Imagen anterior">
            ‹
          </button>

          <div className="media-modal-image-stage">
            <img
              src={activeShot.image}
              alt={activeShot.title}
              className="media-modal-image media-modal-image-zoomable"
              style={imageStyle}
              onMouseDown={handleMouseDown}
              onDoubleClick={handleDoubleClick}
              draggable="false"
            />
          </div>

          <button className="media-modal-nav media-modal-nav-right" onClick={onNext} aria-label="Imagen siguiente">
            ›
          </button>
        </div>

        <div className="media-modal-caption">
          <strong>{activeShot.title}</strong>
          <p>{activeShot.caption}</p>
        </div>
      </div>
    </div>
  );
}

export function FeaturedCaseStudy({ content, media }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const hasScreenshots = media.screenshots.length > 0;

  function openModal(index) {
    setActiveIndex(index);
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    setActiveIndex(null);
    document.body.style.overflow = '';
  }

  function showPrev() {
    setActiveIndex((prev) =>
      prev === 0 ? media.screenshots.length - 1 : prev - 1
    );
  }

  function showNext() {
    setActiveIndex((prev) =>
      prev === media.screenshots.length - 1 ? 0 : prev + 1
    );
  }

  return (
    <section id={content.id} className="section">
      <div className="shell">
        <div className="section-heading">
          <p className="section-eyebrow">{content.sectionLabel}</p>
          <h2>{content.title}</h2>
          <p className="section-summary">{content.summary}</p>

          {content.repo ? (
            <div className="case-study-actions">
              <a
                className="button button-secondary"
                href={content.repo.href}
                target="_blank"
                rel="noreferrer"
              >
                {content.repo.label}
              </a>
            </div>
          ) : null}
        </div>

        <div className="case-study-frame">
          <QuickFacts facts={content.quickFacts} />

          <div className="case-study-intro">
            <article className="case-study-lead">
              <div>
                <p className="kicker">{content.context.title}</p>
                <p>{content.context.body}</p>
              </div>
              <div>
                <p className="kicker">{content.challenge.title}</p>
                <p>{content.challenge.body}</p>
              </div>
              <div>
                <p className="kicker">{content.solution.title}</p>
                <p>{content.solution.body}</p>
              </div>
            </article>

            <aside className="stack-panel">
              <p className="kicker">{content.stackTitle}</p>
              <BulletList items={content.stack} />
            </aside>
          </div>

          <div className="case-study-details">
            <article className="detail-card">
              <h3>{content.architectureTitle}</h3>
              <BulletList items={content.architecturePoints} />
            </article>

            <article className="detail-card">
              <h3>{content.featureTitle}</h3>
              <BulletList items={content.features} />
            </article>

            <article className="detail-card">
              <h3>{content.highlightsTitle}</h3>
              <BulletList items={content.highlights} />
            </article>
          </div>

          <article className="impact-panel">
            <p className="kicker">{content.impactTitle}</p>
            <p>{content.impact}</p>
          </article>

          {hasScreenshots ? (
            <div className="screenshots-grid">
              {media.screenshots.map((shot, index) => (
                <figure
                  key={shot.title}
                  className="screenshot-card screenshot-card-clickable"
                  onClick={() => openModal(index)}
                >
                  <img src={shot.image} alt={shot.title} />
                  <figcaption>
                    <strong>{shot.title}</strong>
                    <span>{shot.caption}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          ) : null}
        </div>
      </div>

      {activeIndex !== null ? (
        <ScreenshotModal
          screenshots={media.screenshots}
          activeIndex={activeIndex}
          onClose={closeModal}
          onPrev={showPrev}
          onNext={showNext}
        />
      ) : null}
    </section>
  );
}