const paths = {
  github: (
    <>
      <path d="M9 19c-4 1-4-2-6-2m12 5v-4a3.5 3.5 0 0 0-1-3c3.3-.4 7-1.6 7-7a5.5 5.5 0 0 0-1.5-3.8A5 5 0 0 0 19.3 1s-1.3-.4-4.3 1.5a15 15 0 0 0-8 0C4 1 2.7 1 2.7 1a5 5 0 0 0-.2 3.2A5.5 5.5 0 0 0 1 8c0 5.4 3.7 6.6 7 7a3.5 3.5 0 0 0-1 3v4" />
    </>
  ),
  linkedin: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M7 10v7m4 0v-7m0 3c0-4 6-4 6 0v4" />
      <circle cx="7" cy="7" r=".65" />
    </>
  ),
  download: (
    <>
      <path d="M12 3v12m-4-4 4 4 4-4M4 16v4h16v-4" />
    </>
  ),
  email: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 6 9 7 9-7" />
    </>
  ),
  external: (
    <>
      <path d="M14 3h7v7m0-7L10 14M10 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5" />
    </>
  ),
  arrow: <path d="M4 12h16m-6-6 6 6-6 6" />,
  clients: (
    <>
      <rect x="4" y="5" width="16" height="16" rx="2" />
      <path d="M9 5V3h6v2m-7 8 3 3 5-6" />
    </>
  ),
  cloud: <path d="M7 18h11a4 4 0 0 0 .5-8 6 6 0 0 0-11.4-2A5 5 0 0 0 7 18Z" />,
  layers: (
    <>
      <path d="m12 3 10 5-10 5L2 8l10-5Zm-9 9 9 5 9-5m-18 5 9 5 9-5" />
    </>
  ),
  backend: (
    <>
      <rect x="3" y="3" width="18" height="7" rx="2" />
      <rect x="3" y="14" width="18" height="7" rx="2" />
      <path d="M7 6.5h.01M7 17.5h.01m9-11h2m-2 11h2" />
    </>
  ),
  frontend: (
    <>
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M8 21h8m-4-4v4m-3-11 2-2-2-2m6 0-2 2 2 2" />
    </>
  ),
  data: (
    <>
      <ellipse cx="12" cy="5" rx="8" ry="3" />
      <path d="M4 5v14c0 4 16 4 16 0V5M4 12c0 4 16 4 16 0" />
    </>
  ),
  testing: (
    <>
      <path d="M9 3h6m-5 0v6l-6 10a2 2 0 0 0 2 3h12a2 2 0 0 0 2-3L14 9V3M7 16h10" />
    </>
  ),
  delivery: (
    <>
      <path d="M3 16v5h18v-5M12 3v13m-5-5 5 5 5-5" />
    </>
  ),
};

// Shared stroke-based SVGs keep actions and technical categories consistent.
export function Icon({ name, className = '' }) {
  return (
    <svg
      className={'icon ' + className}
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      {paths[name] || paths.external}
    </svg>
  );
}
