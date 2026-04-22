# Felipe García — Backend Technical Portfolio

Portfolio profesional desarrollado con **React + Vite**, diseñado para presentar experiencia real de desarrollo full-stack con foco en **backend Java/Spring**, arquitectura mantenible, seguridad y software aplicado a operaciones de negocio.

El sitio fue pensado como una pieza de presentación profesional: incluye soporte multilenguaje, modo claro/oscuro, caso destacado con evidencia visual y una narrativa centrada en experiencia real construyendo software para **Decomat S.R.L.**

---

## Live portfolio

Desplegado en Vercel.

> https://portfolio-felipegarcia-ep6u5v029-pipe-garcias-projects.vercel.app/

---

## Main purpose

Este portfolio fue construido para:

- presentar perfil profesional backend-first
- mostrar experiencia real aplicada a una empresa
- documentar un caso destacado de desarrollo full-stack
- ofrecer una base visual profesional, clara y mantenible
- servir como soporte para LinkedIn, CV y entrevistas

---

## Featured case

El eje principal del portfolio es un sistema de **gestión comercial, stock y entregas** desarrollado para **Decomat S.R.L.**

### Stack del caso principal
- Java 17
- Spring Boot
- Spring Security + JWT
- JPA / Hibernate
- MySQL
- Flyway
- Maven
- Docker Compose
- HTML, CSS y JavaScript

### Alcance funcional
- ventas
- presupuestos
- materiales
- stock
- entregas
- clientes
- proveedores
- seguridad por roles
- auditoría de movimientos

---

## Tech stack of this portfolio

- React
- Vite
- JavaScript
- CSS
- Vercel

---

## Project structure

```text
src/
  components/
    About/
    Contact/
    Expertise/
    FeaturedCaseStudy/
    GrowthFocus/
    Header/
    Hero/
    LanguageSwitcher/
    ThemeToggle/
    WorkApproach/
  data/
    links.js
    projects.js
  hooks/
    useLanguage.js
    useTheme.js
  i18n/
    es.js
    en.js
    pt.js
  styles/
    globals.css
    tokens.css
  App.jsx
  main.jsx
```

---

## Available scripts

### Install dependencies
```bash
npm install
```

### Run in development mode
```bash
npm run dev
```

### Generate production build
```bash
npm run build
```

### Preview production build locally
```bash
npm run preview
```

---

## Customization guide

### Update personal/contact links
Edit:

```text
src/data/links.js
```

### Update texts by language
Edit:

```text
src/i18n/es.js
src/i18n/en.js
src/i18n/pt.js
```

### Update screenshots and featured project media
Edit:

```text
src/data/projects.js
```

Store image files in:

```text
public/images/
```

### Update colors, radii, shadows, and spacing
Edit:

```text
src/styles/tokens.css
```

### Update layouts, section styling, modal behavior, and responsive rules
Edit:

```text
src/styles/globals.css
```

---

## Design decisions

Este portfolio prioriza:

- jerarquía visual clara
- lectura profesional y compacta
- identidad sobria y editorial
- contenido orientado a empleabilidad
- experiencia real por encima de “showcase” superficial
- mantenibilidad y escalabilidad del código

---

## Deployment

El proyecto está preparado para desplegarse fácilmente en **Vercel**.

Flujo usado:
1. desarrollo local con `npm run dev`
2. validación con `npm run build`
3. push a GitHub
4. despliegue automático desde Vercel conectado al repositorio

---

## Notes

- `node_modules/` y `dist/` no deben versionarse
- el proyecto usa persistencia local para idioma y tema
- la galería del caso destacado incluye modal con navegación y zoom
- la versión final puede ampliarse con nuevos proyectos o dominio propio

---

## Author

**Felipe García**  
Backend Java Developer  
GitHub: `Pipe-Garcia`  
LinkedIn: `felipe-garcía-dev`
