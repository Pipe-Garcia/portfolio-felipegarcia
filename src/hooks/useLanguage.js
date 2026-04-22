import { useEffect, useState } from 'react';

const LANGUAGE_STORAGE_KEY = 'fg-portfolio-language';
const DEFAULT_LANGUAGE = 'es';

export function useLanguage() {
  const [language, setLanguage] = useState(() => {
    return window.localStorage.getItem(LANGUAGE_STORAGE_KEY) || DEFAULT_LANGUAGE;
  });

  useEffect(() => {
    // Mantiene el selector de idioma persistido y actualiza el atributo lang del documento.
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
    document.documentElement.lang = language;
  }, [language]);

  return { language, setLanguage };
}
