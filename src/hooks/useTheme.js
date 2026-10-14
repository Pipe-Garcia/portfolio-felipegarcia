import { useEffect, useState } from 'react';

const THEME_STORAGE_KEY = 'fg-portfolio-theme';

function getInitialTheme() {
  try {
    const saved = window.localStorage.getItem(THEME_STORAGE_KEY);
    if (saved === 'light' || saved === 'dark') return saved;
  } catch {}
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
}

export function useTheme() {
  const [theme, setTheme] = useState(getInitialTheme);
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, theme);
    } catch {}
  }, [theme]);
  const toggleTheme = () =>
    setTheme((current) => (current === 'dark' ? 'light' : 'dark'));
  return { theme, toggleTheme };
}
