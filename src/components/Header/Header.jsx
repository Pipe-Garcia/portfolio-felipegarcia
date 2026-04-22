import { LanguageSwitcher } from '../LanguageSwitcher/LanguageSwitcher';
import { ThemeToggle } from '../ThemeToggle/ThemeToggle';

export function Header({
  navigation,
  language,
  onLanguageChange,
  theme,
  onThemeToggle,
  links,
}) {
  return (
    <header className="site-header">
      <div className="shell site-header-inner">
        <a href="#hero" className="brand-mark">
          <span className="brand-mark-kicker">FG</span>
          <span className="brand-mark-text">Backend Technical Portfolio</span>
        </a>

        <nav className="site-nav" aria-label="Primary">
          {navigation.items.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="site-header-actions">
          <LanguageSwitcher currentLanguage={language} onChange={onLanguageChange} />
          <ThemeToggle
            theme={theme}
            onToggle={onThemeToggle}
            label={navigation.themeLabel[theme]}
          />
          <div className="social-links">
            <a href={links.github.href} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href={links.linkedin.href} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
