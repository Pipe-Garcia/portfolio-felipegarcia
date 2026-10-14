const LANGUAGES = ['es', 'en', 'pt'];
const NAMES = { es: 'Español', en: 'English', pt: 'Português' };

export function LanguageSwitcher({ currentLanguage, onChange, label }) {
  return (
    <div className="language-switcher" role="group" aria-label={label}>
      {LANGUAGES.map((language) => (
        <button
          key={language}
          type="button"
          aria-label={NAMES[language]}
          aria-pressed={currentLanguage === language}
          className={currentLanguage === language ? 'is-active' : ''}
          onClick={() => onChange(language)}
        >
          {language.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
