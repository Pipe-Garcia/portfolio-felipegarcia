import { useEffect, useState } from 'react';

const LANGUAGE_STORAGE_KEY = 'fg-portfolio-language';
const DEFAULT_LANGUAGE = 'es';
const SUPPORTED_LANGUAGES = ['es', 'en', 'pt'];

export function useLanguage() {
  const [language, setLanguage] = useState(() => {
    try {
      const saved = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
      return SUPPORTED_LANGUAGES.includes(saved) ? saved : DEFAULT_LANGUAGE;
    } catch {
      return DEFAULT_LANGUAGE;
    }
  });
  useEffect(() => {
    document.documentElement.lang = language;
    // The site remains usable when browser storage is unavailable.
    try {
      window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
    } catch {}
  }, [language]);
  return { language, setLanguage };
}
