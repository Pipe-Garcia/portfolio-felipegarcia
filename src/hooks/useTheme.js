import { useEffect, useState } from 'react';

const THEME_STORAGE_KEY = 'fg-portfolio-theme';

function getInitialTheme() {
  const persistedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);

  if (persistedTheme) {
    return persistedTheme;
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export function useTheme() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    // El tema se resuelve vía data-attribute para que toda la hoja de estilos responda a tokens.
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'));
  };

  return { theme, toggleTheme };
}
