import { useEffect, useRef, useState } from 'react';
import { flushSync } from 'react-dom';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero';
import { ProofStrip } from './components/ProofStrip/ProofStrip';
import { SelectedWork } from './components/SelectedWork/SelectedWork';
import { Experience } from './components/Experience/Experience';
import { About } from './components/About/About';
import { Expertise } from './components/Expertise/Expertise';
import { WorkApproach } from './components/WorkApproach/WorkApproach';
import { Contact } from './components/Contact/Contact';
import { Footer } from './components/Footer/Footer';
import { ProjectCaseStudy } from './components/ProjectCaseStudy/ProjectCaseStudy';
import { siteLinks } from './data/links';
import { useLanguage } from './hooks/useLanguage';
import { useTheme } from './hooks/useTheme';
import { useReveal } from './hooks/useReveal';
import { useScrollSpy } from './hooks/useScrollSpy';
import { getTranslation } from './i18n';

// Section ids tracked by the desktop scrollspy (mirror of the nav anchors).
const SECTION_IDS = ['projects', 'experience', 'stack', 'about', 'contact'];

export default function App() {
  const { language, setLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const t = getTranslation(language);
  const location = useLocation();
  // Routes render against this, which lags one frame behind `location` when a
  // native View Transition is in flight, so the old/new DOM snapshots bracket
  // the cross-fade. Without View Transition support it tracks `location` 1:1.
  const [renderedLocation, setRenderedLocation] = useState(location);
  const firstRender = useRef(true);
  // Reveal + scrollspy key off the location the router has actually rendered,
  // so they (re)observe the DOM that is on screen — including after a route
  // transition that lags one frame behind the real `location`.
  useReveal(renderedLocation);
  const activeSection = useScrollSpy(SECTION_IDS, renderedLocation);

  useEffect(() => {
    // Runs after the target route mounts, including cross-page anchor navigation.
    if (renderedLocation.hash) {
      document.getElementById(renderedLocation.hash.slice(1))?.scrollIntoView();
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' });
      document.querySelector('main h1')?.focus({ preventScroll: true });
    }
  }, [renderedLocation.pathname, renderedLocation.hash, renderedLocation.key]);

  // Progressive-enhanced route transition: use the native View Transition API
  // when available and motion is allowed, otherwise swap routes immediately.
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;
    if (
      typeof document.startViewTransition !== 'function' ||
      prefersReduced
    ) {
      setRenderedLocation(location);
      return;
    }
    document.startViewTransition(() => {
      flushSync(() => setRenderedLocation(location));
    });
  }, [location]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const title = t.projects[location.pathname.split('/')[2]]?.title;
    document.title = title
      ? title + ' | Felipe Garcia'
      : 'Felipe Garcia | Full-Stack Java & React Developer';
    document.querySelector('meta[name="description"]').content =
      t.projects[location.pathname.split('/')[2]]?.lead || t.meta.description;
    document.querySelector('meta[name="theme-color"]').content =
      theme === 'dark' ? '#07110f' : '#f5f3ed';
  }, [location.pathname, language, theme, t]);

  return (
    <div className="app-shell">
      <a className="skip-link" href="#main">
        {t.navigation.skip}
      </a>
      <Header
        navigation={t.navigation}
        language={language}
        onLanguageChange={setLanguage}
        theme={theme}
        onThemeToggle={toggleTheme}
        links={siteLinks}
        activeSection={activeSection}
      />
      <main id="main" tabIndex={-1}>
        <Routes location={renderedLocation}>
          <Route
            path="/"
            element={
              <>
                <Hero
                  content={t.hero}
                  language={language}
                  links={siteLinks}
                  projectCopy={t.projects}
                />
                <ProofStrip items={t.proof} />
                <SelectedWork
                  content={t.selectedWork}
                  projectCopy={t.projects}
                />
                <Experience content={t.experience} />
                <Expertise content={t.expertise} />
                <WorkApproach content={t.workApproach} />
                <About content={t.about} />
                <Contact
                  content={t.contact}
                  links={siteLinks}
                  language={language}
                />
              </>
            }
          />
          <Route
            path="/projects/:slug"
            element={<ProjectCaseStudy translations={t} />}
          />
          <Route
            path="*"
            element={
              <section className="section shell not-found">
                <h1 tabIndex={-1}>{t.casePage.notFound}</h1>
                <Link className="text-link" to="/#projects">
                  {t.casePage.back}
                  <span className="link-arrow" aria-hidden="true">
                    →
                  </span>
                </Link>
              </section>
            }
          />
        </Routes>
      </main>
      <Footer content={t.footer} links={siteLinks} />
    </div>
  );
}
