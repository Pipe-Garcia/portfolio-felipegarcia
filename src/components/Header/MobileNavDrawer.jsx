import { Link } from 'react-router-dom';
import { Dialog } from '../Dialog/Dialog';
import { Icon } from '../Icon/Icon';
import { LanguageSwitcher } from '../LanguageSwitcher/LanguageSwitcher';
import { getCvLinkByLanguage } from '../../data/links';

export function MobileNavDrawer({
  open,
  navigation,
  language,
  onLanguageChange,
  links,
  onClose,
}) {
  return (
    <Dialog
      open={open}
      id="mobile-navigation"
      className="nav-drawer"
      labelledBy="drawer-title"
      onClose={onClose}
    >
      <div className="drawer-heading">
        <h2 id="drawer-title">{navigation.menu}</h2>
        <button
          type="button"
          className="icon-button"
          onClick={onClose}
          aria-label={navigation.close}
        >
          ×
        </button>
      </div>
      <nav aria-label={navigation.label} className="drawer-nav">
        {navigation.items.map((item) => (
          <Link key={item.href} to={'/' + item.href} onClick={onClose}>
            {item.label}
            <Icon name="arrow" />
          </Link>
        ))}
      </nav>
      <div className="drawer-bottom">
        <LanguageSwitcher
          currentLanguage={language}
          onChange={onLanguageChange}
          label={navigation.languageLabel}
        />
        <a
          className="button button-primary"
          href={getCvLinkByLanguage(language)}
          download
        >
          <Icon name="download" />
          {navigation.cv}
        </a>
        <a
          className="text-link"
          href={links.github.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon name="github" />
          GitHub
          <Icon name="external" />
        </a>
        <a
          className="text-link"
          href={links.linkedin.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon name="linkedin" />
          LinkedIn
          <Icon name="external" />
        </a>
      </div>
    </Dialog>
  );
}
