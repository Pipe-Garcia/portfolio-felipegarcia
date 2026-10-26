import { useEffect } from 'react';

// One shared IntersectionObserver reveals every `[data-reveal]` element a
// single time when it scrolls into view, by adding the `is-revealed` class.
//
// `location` is the location the router has actually rendered (which may lag
// one frame behind the real location during a View Transition), so the observer
// is (re)built against the DOM that is currently on screen.
//
// Progressive enhancement: the hidden state itself is gated on the `.js` class
// (added in main.jsx), so if JS never runs the content stays visible. If the
// browser lacks IntersectionObserver, everything is revealed immediately.
export function useReveal(location) {
  useEffect(() => {
    const els = Array.from(
      document.querySelectorAll('[data-reveal]:not(.is-revealed)'),
    );
    if (!els.length) return;
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('is-revealed'));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [location.pathname]);
}
