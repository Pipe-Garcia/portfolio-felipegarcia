# Felipe Garcia | Full-Stack Portfolio V2.1

Portfolio profesional con React, Vite y React Router. Presenta dos sistemas para clientes: GymPlanner, co-desarrollado y actualmente utilizado en producción, y el sistema de gestión comercial y stock de Decomat S.R.L.

La V2 se trabaja localmente. Sitio publicado anterior: [portfolio-felipegarcia.vercel.app](https://portfolio-felipegarcia.vercel.app/).

## Ejecutar

Usar Node 20.19+ o 22.12+ (validado con Node 24.15.0).

```bash
npm install
npm run dev
```

```bash
npm run build
npm run preview
```

Los scripts existentes son `dev`, `build` y `preview`. No hay scripts de lint ni suite de tests en este repositorio.

## Arquitectura

```text
src/
  App.jsx                          Rutas, composición y metadata
  main.jsx                         Entrada y BrowserRouter
  components/
    Header/                        Navbar y MobileNavDrawer
    Dialog/                        Foco, backdrop, Escape y scroll lock
    Hero/                          Hero tipográfico
    ProofStrip/                    Evidencia compacta
    SelectedWork/                  Previews, badges y ProductVisual
    Experience/                    Timeline profesional
    Expertise/                     Capabilities y accordions mobile
    WorkApproach/                  How I Build
    About/
    Contact/
    Footer/
    ProjectCaseStudy/               Plantilla compartida por proyecto
    ScreenshotGallery/             Modal, navegación, zoom y pan
    LanguageSwitcher/
    ThemeToggle/
  data/
    links.js                       Enlaces reales y selección de CV
    projects.js                    Slugs, stacks, badges y media
  hooks/
    useLanguage.js                 ES/EN/PT con persistencia
    useTheme.js                    Tema con persistencia
  i18n/
    es.js / en.js / pt.js           Todo el copy por idioma
    index.js                       Resolución de traducciones
  styles/
    tokens.css                     Fuentes, paletas y variables
    globals.css                    Layouts y responsive
public/
  cv/                              PDF ES y EN
  images/gymplanner/               Nueve WebP proporcionados
  images/decomat-*.webp             Seis capturas existentes
  favicon.svg
vercel.json                        Rewrites de páginas de proyectos
```

## Contenido, links y diseño

- Textos: `src/i18n/es.js`, `en.js`, `pt.js`. Cada proyecto tiene un solo bloque en `projects[slug]`, usado por Home y case study.
- Contacto: `src/data/links.js`. Los enlaces reales se preservan.
- Stacks, orden de proyectos y medios: `src/data/projects.js`.
- Paletas y tipografía: `src/styles/tokens.css`. Se mantienen las familias existentes y sus fallbacks locales, sin nuevas descargas de fuentes.
- Espaciado, layouts y estados responsive: `src/styles/globals.css`.
- Composición de Home, rutas y metadata: `src/App.jsx`.

Idioma y tema usan las claves originales `fg-portfolio-language` y `fg-portfolio-theme`. El tema inicial respeta la preferencia del sistema si no existe una elección guardada. El selector también funciona cuando localStorage está bloqueado.

## CV

Reemplazar los PDF en:

- `public/cv/CV_Felipe_Garcia_ES.pdf`
- `public/cv/CV_Felipe_Garcia_EN.pdf`

ES descarga español. EN y PT descargan inglés. La selección está centralizada en `getCvLinkByLanguage`, en `src/data/links.js`. Los PDF adjuntos se copiaron sin alterar su contenido.

## Screenshots

Cada objeto en `projects.js` incluye `key`, `image`, `width` y `height`. La clave resuelve el título/alt y caption traducidos en `projects[slug].media[key]`.

Para sumar una captura:

1. Colocar el archivo WebP en `public/images/<proyecto>/`.
2. Agregarlo a `screenshots` del proyecto, con sus dimensiones reales.
3. Agregar su título y caption en ES, EN y PT.

Home usa únicamente las dos primeras imágenes de GymPlanner (dashboard desktop y mobile) y la primera de Decomat (ventas). El resto está en las galerías. Las dimensiones reservan espacio; las imágenes bajo el fold usan lazy loading.

Los dashboards pulidos de GymPlanner se identifican como visuales de presentación en su case study. El PNG de referencia y la captura duplicada de historial no se distribuyen.

## Agregar proyectos

1. Agregar un objeto a `projects` en `src/data/projects.js`, con slug, badges, stacks y screenshots.
2. Agregar `projects[slug]` en los tres idiomas: title, lead, description, highlights, caseStudy, outcome y media.
3. La ruta `/projects/<slug>` utiliza automáticamente la plantilla compartida.

Home muestra el array en orden. Si en el futuro se agregan más de los dos casos actuales, decidir explícitamente cuáles destacar y ajustar el enlace al siguiente caso según el recorrido deseado.

## Rutas y hosting

- `/`: Home.
- `/projects/gymplanner`: caso principal.
- `/projects/decomat`: segundo caso.
- Rutas de proyecto desconocidas: estado de proyecto no encontrado y regreso a Home.

Los enlaces del header usan `/#projects`, `/#experience`, `/#stack`, `/#about` y `/#contact`. Funcionan también desde páginas de proyecto.

`vercel.json` reescribe `/projects/:path*` a `index.html` para acceso directo y refresh. Assets, imágenes y PDF mantienen sus rutas. En otro hosting configurar el fallback equivalente para esas páginas.

## Responsive y accesibilidad

- Desde 1100 px: Hero con presencia de portada, proyectos alternados, una timeline continua de experiencia, capabilities en cinco columnas y proceso horizontal.
- 768–1099 px: drawer; entre 768 y 899 px los previews usan composición editorial en dos columnas de texto sobre la imagen, capabilities en dos columnas.
- Bajo 768 px: timeline vertical, capabilities con `details/summary`, proceso vertical y composición de producto apilada.

El proof integra el cierre del Hero. Los fondos se agrupan en tres macrozonas: intro/productos, ingeniería y persona/contacto. Las únicas cifras ordinales están en los seis pasos de How I Build. Los repositorios están centralizados en `projects.js` y aparecen en Home y case studies.

Los diálogos nativos mantienen el fondo inerte, cierran con Escape y click fuera, bloquean scroll y restauran foco. Se refuerza el ciclo de Tab. La galería conserva flechas, zoom, rueda, doble clic, pan con mouse/touch y reset con 0. Se respeta `prefers-reduced-motion`.

## Validación local

El reporte de la iteración actual está en [V2.1-REPORT.md](V2.1-REPORT.md); el historial de implementación V2 se conserva en [V2-REPORT.md](V2-REPORT.md). Las capturas y scripts puntuales de revisión están en `.qa/`, ignorados por Git y fuera del sitio distribuido.

No se realizó commit, push ni deploy durante este refactor.

