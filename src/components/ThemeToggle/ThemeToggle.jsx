export function ThemeToggle({ theme, onToggle, label }) {
  return (
    <button type="button" className="theme-toggle" onClick={onToggle} aria-label={label}>
      <span>{theme === 'dark' ? 'Dark' : 'Light'}</span>
      <span className="theme-toggle-track" aria-hidden="true">
        <span className="theme-toggle-thumb" />
      </span>
    </button>
  );
}
