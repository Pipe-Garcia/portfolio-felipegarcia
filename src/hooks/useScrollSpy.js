import { useEffect, useState } from 'react';

// Tracks which section is currently centered in the viewport and returns its
// id, or null when not on the home route. Uses a thin IntersectionObserver band
// (the middle ~10% of the viewport) and holds the last active section between
// gaps, so the indicator stays stable near section boundaries.
//
// `location` is the location the router has actually rendered (which may lag
// one frame behind the real location during a View Transition), so the
// observer is (re)built against the DOM that is currently on screen.
export function useScrollSpy(sectionIds, location) {
  const [active, setActive] = useState(null);
  useEffect(() => {
    if (location.pathname !== '/' || !('IntersectionObserver' in window)) {
      setActive(null);
      return;
    }
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    if (!sections.length) return;
    const ratios = new Map();
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            ratios.set(entry.target.id, entry.intersectionRatio);
          } else {
            ratios.delete(entry.target.id);
          }
        });
        let best = null;
        let bestRatio = 0;
        ratios.forEach((ratio, id) => {
          if (ratio > bestRatio) {
            bestRatio = ratio;
            best = id;
          }
        });
        if (best) setActive(best);
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: [0, 0.2, 0.5, 0.8, 1] },
    );
    sections.forEach((section) => io.observe(section));
    return () => io.disconnect();
  }, [location.pathname]); // eslint-disable-line react-hooks/exhaustive-deps
  return active;
}
