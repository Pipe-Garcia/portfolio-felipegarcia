export function ThemeToggle({ theme, onToggle, label }) {
  return (
    <button
      type="button"
      className="theme-toggle icon-button"
      onClick={onToggle}
      aria-label={label}
    >
      <svg viewBox="0 0 24 24" aria-hidden="true">
        {theme === 'dark' ? (
          <>
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.4 1.4m11.2 11.2L19 19M5 19l1.4-1.4M17.6 6.4L19 5" />
          </>
        ) : (
          <path d="M20 15.8A8.8 8.8 0 0 1 8.2 4a8.8 8.8 0 1 0 11.8 11.8Z" />
        )}
      </svg>
    </button>
  );
}
