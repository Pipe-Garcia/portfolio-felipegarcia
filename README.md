# Portfolio Felipe Garcia

Portfolio personal profesional construido con React + Vite, con enfoque editorial, soporte multilenguaje y modo claro/oscuro persistente.

## Scripts

```bash
npm install
npm run dev
```

```bash
npm run build
npm run preview
```

## Estructura principal

- `src/App.jsx`: compone la single-page app.
- `src/i18n/`: textos por idioma.
- `src/data/links.js`: links y placeholders de contacto.
- `src/data/projects.js`: screenshots del caso principal y base para crecimiento futuro.
- `src/hooks/`: persistencia de idioma y tema.
- `src/components/`: secciones y componentes reutilizables.
- `src/styles/`: tokens visuales y estilos globales.

## Personalizacion rapida

- Cambia links de GitHub, LinkedIn y email en `src/data/links.js`.
- Edita textos por idioma en `src/i18n/es.js`, `src/i18n/en.js` y `src/i18n/pt.js`.
- Ajusta colores, radios y sombras en `src/styles/tokens.css`.
- Modifica layout y estilos visuales en `src/styles/globals.css`.
- Agrega screenshots en `src/data/projects.js` y coloca las imagenes dentro de `public/images/`.
