import { en } from './en';
import { es } from './es';
import { pt } from './pt';

const translations = {
  es,
  en,
  pt,
};

export function getTranslation(language) {
  return translations[language] || translations.es;
}
