import { useEffect, useRef, useState } from 'react';
import { Dialog } from '../Dialog/Dialog';

function ZoomableImage({ shot, alt, labels }) {
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const stageRef = useRef(null);
  const drag = useRef(null);
  const [dragging, setDragging] = useState(false);
  const clamp = (value) => Math.min(4, Math.max(1, value));
  const reset = () => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  useEffect(() => {
    const stage = stageRef.current;
    // Non-passive listener keeps wheel zoom inside the viewer.
    const wheel = (event) => {
      event.preventDefault();
      setScale((current) => clamp(current + (event.deltaY > 0 ? -0.2 : 0.2)));
    };
    const keydown = (event) => {
      if (event.key === '0') reset();
    };
    stage.addEventListener('wheel', wheel, { passive: false });
    window.addEventListener('keydown', keydown);
    return () => {
      stage.removeEventListener('wheel', wheel);
      window.removeEventListener('keydown', keydown);
    };
  }, []);
  useEffect(() => {
    if (scale === 1) setPosition({ x: 0, y: 0 });
  }, [scale]);

  return (
    <>
      <div className="media-toolbar">
        <button
          type="button"
          className="icon-button"
          aria-label={labels.zoomOut}
          disabled={scale === 1}
          onClick={() => setScale((s) => clamp(s - 0.25))}
        >
          −
        </button>
        <output aria-live="polite">{Math.round(scale * 100)}%</output>
        <button
          type="button"
          className="icon-button"
          aria-label={labels.zoomIn}
          disabled={scale === 4}
          onClick={() => setScale((s) => clamp(s + 0.25))}
        >
          +
        </button>
        <button type="button" className="media-reset" onClick={reset}>
          {labels.reset}
        </button>
      </div>
      <div
        ref={stageRef}
        className={'image-stage ' + (scale > 1 ? 'is-zoomed' : '')}
        onDoubleClick={() => (scale > 1 ? reset() : setScale(2))}
        onPointerDown={(event) => {
          if (scale <= 1) return;
          event.currentTarget.setPointerCapture(event.pointerId);
          drag.current = {
            pointerX: event.clientX,
            pointerY: event.clientY,
            ...position,
          };
          setDragging(true);
        }}
        onPointerMove={(event) => {
          if (!drag.current) return;
          setPosition({
            x: drag.current.x + event.clientX - drag.current.pointerX,
            y: drag.current.y + event.clientY - drag.current.pointerY,
          });
        }}
        onPointerUp={() => {
          drag.current = null;
          setDragging(false);
        }}
        onPointerCancel={() => {
          drag.current = null;
          setDragging(false);
        }}
      >
        <img
          src={shot.image}
          alt={alt}
          width={shot.width}
          height={shot.height}
          draggable={false}
          style={{
            transform:
              'translate(' +
              position.x +
              'px,' +
              position.y +
              'px) scale(' +
              scale +
              ')',
            cursor: scale > 1 ? (dragging ? 'grabbing' : 'grab') : 'zoom-in',
          }}
        />
      </div>
    </>
  );
}

export function ScreenshotGallery({ project, copy, labels }) {
  const [active, setActive] = useState(null);
  const shots = project.screenshots;
  const previous = () =>
    setActive((index) => (index - 1 + shots.length) % shots.length);
  const next = () => setActive((index) => (index + 1) % shots.length);

  useEffect(() => {
    if (active === null) return;
    const keydown = (event) => {
      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        previous();
      }
      if (event.key === 'ArrowRight') {
        event.preventDefault();
        next();
      }
    };
    window.addEventListener('keydown', keydown);
    return () => window.removeEventListener('keydown', keydown);
  }, [active, shots.length]);

  const shot = active !== null ? shots[active] : null;
  return (
    <>
      <div className="screenshots-grid">
        {shots.map((item, index) => (
          <figure key={item.key} className="screenshot-card">
            <button
              type="button"
              className={
                'screenshot-open ' +
                (item.height > item.width ? 'portrait-shot' : '')
              }
              onClick={() => setActive(index)}
              aria-label={labels.open + ': ' + copy.media[item.key][0]}
            >
              <img
                src={item.image}
                alt={copy.media[item.key][0]}
                width={item.width}
                height={item.height}
                loading="lazy"
                decoding="async"
              />
              <span className="expand-mark" aria-hidden="true">
                ↗
              </span>
            </button>
            <figcaption>
              <strong>{copy.media[item.key][0]}</strong>
              <span>{copy.media[item.key][1]}</span>
            </figcaption>
          </figure>
        ))}
      </div>
      {shot && (
        <Dialog
          className="media-dialog"
          labelledBy="media-title"
          onClose={() => setActive(null)}
        >
          <div className="media-heading">
            <h2 id="media-title">{copy.media[shot.key][0]}</h2>
            <button
              type="button"
              className="icon-button"
              aria-label={labels.close}
              onClick={() => setActive(null)}
            >
              ×
            </button>
          </div>
          <ZoomableImage
            key={shot.key}
            shot={shot}
            alt={copy.media[shot.key][0]}
            labels={labels}
          />
          <div className="media-navigation">
            <button
              type="button"
              className="icon-button"
              onClick={previous}
              aria-label={labels.previous}
            >
              ←
            </button>
            <p aria-live="polite">
              {active + 1} / {shots.length}
              <span>{copy.media[shot.key][1]}</span>
            </p>
            <button
              type="button"
              className="icon-button"
              onClick={next}
              aria-label={labels.next}
            >
              →
            </button>
          </div>
          <p className="media-hint">{labels.hint}</p>
        </Dialog>
      )}
    </>
  );
}
