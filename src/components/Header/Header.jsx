import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { LanguageSwitcher } from '../LanguageSwitcher/LanguageSwitcher';
import { ThemeToggle } from '../ThemeToggle/ThemeToggle';
import { MobileNavDrawer } from './MobileNavDrawer';
import { Icon } from '../Icon/Icon';
import { getCvLinkByLanguage } from '../../data/links';

export function Header({
  navigation,
  language,
  onLanguageChange,
  theme,
  onThemeToggle,
  links,
}) {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const query = window.matchMedia('(min-width: 1100px)');
    const closeOnDesktop = () => {
      if (query.matches) setOpen(false);
    };
    query.addEventListener('change', closeOnDesktop);
    return () => query.removeEventListener('change', closeOnDesktop);
  }, []);
  return (
    <header className="site-header">
      <div className="shell site-header-inner">
        <Link to="/#hero" className="brand-mark" aria-label="Felipe Garcia">
          <span className="brand-full">
            Felipe Garcia<span className="brand-dot">.</span>
          </span>
          <span className="brand-short" aria-hidden="true">
            FG<span className="brand-dot">.</span>
          </span>
        </Link>
        <nav className="site-nav" aria-label={navigation.label}>
          {navigation.items.map((item) => (
            <Link key={item.href} to={'/' + item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="site-header-actions">
          <div className="desktop-language">
            <LanguageSwitcher
              currentLanguage={language}
              onChange={onLanguageChange}
              label={navigation.languageLabel}
            />
          </div>
          <ThemeToggle
            theme={theme}
            onToggle={onThemeToggle}
            label={navigation.themeLabel[theme]}
          />
          <a
            className="cv-utility desktop-cv"
            href={getCvLinkByLanguage(language)}
            aria-label={navigation.cv}
            title={navigation.cv}
            download
          >
            <Icon name="download" /> CV
          </a>
          <button
            type="button"
            className="menu-trigger icon-button"
            aria-label={navigation.menu}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen(true)}
          >
            <span className="menu-word">{navigation.menu}</span>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>
        </div>
      </div>
      <MobileNavDrawer
        open={open}
        navigation={navigation}
        language={language}
        onLanguageChange={onLanguageChange}
        links={links}
        onClose={() => setOpen(false)}
      />
    </header>
  );
}
