const LANGUAGES = ['es', 'en', 'pt'];

export function LanguageSwitcher({ currentLanguage, onChange }) {
  return (
    <div className="language-switcher" aria-label="Language switcher">
      {LANGUAGES.map((language) => (
        <button
          key={language}
          type="button"
          className={currentLanguage === language ? 'is-active' : ''}
          onClick={() => onChange(language)}
        >
          {language.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
