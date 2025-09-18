## Migration Plan: Jekyll to Astro

### Goals
- Recreate the existing site in Astro under `astro/` while preserving design and content.
- Keep original Jekyll site intact during migration.

### Structure in Astro
- `src/pages/`
  - Create pages to match current routes: `/` (home), `/404`, others if needed.
- `src/layouts/`
  - Create a `Default.astro` layout equivalent to Jekyll `_layouts/default.html` and `_layouts/compress.html` (use Astro/Vite minification).
- `src/components/`
  - Port Jekyll partials from `_includes/` to Astro components: `Head.astro`, `Intro.astro`, `Experience.astro`, `Skills.astro`, `FeaturedProjects.astro`, `OtherProjects.astro`, `Footer.astro`, `Switch.astro`, `TopButton.astro`, etc.

### Assets & Styling
- `public/`
  - Move static files: `img/`, `fonts/`, `robots.txt`, `sitemap.xml`.
  - Keep existing paths to minimize content changes.
- Styling
  - Option A: Import existing `css/main.css` directly in layout.
  - Option B: Port `_scss/` to `src/styles/` and compile via PostCSS/Sass.
  - Initial step: import existing built CSS to ship fast; later, migrate SCSS if desired.

### Data Migration
- Move `_data/*.yml` to `src/content/` or `src/data/` and load via `yaml` import.
  - Example: `import experience from '../data/experience.yml'`
  - Convert to JSON if preferred.
  - Alternatively, use Astro Content Collections for typed content when/if needed.

### Pages Mapping
- `index.html` → `src/pages/index.astro` using layout + components fed by YAML data.
- `404.html` → `src/pages/404.astro` with matching styles.

### Scripts
- Port `_scripts/main.js` and `js/main.js` to `src/scripts/` and load in layout via `<script>` or as a module. Prefer no-client JS unless necessary; otherwise, use `client:load` for interactivity.

### Fonts
- Move `fonts/` to `public/fonts/` and update CSS `@font-face` URLs accordingly.

### Theming/Switch
- Convert `_includes/switch.html` logic to a small Astro/vanilla component that toggles a theme class on `<html>` and stores preference in `localStorage`.

### Build/Deploy
- Dev: `cd astro && npm run dev`
- Build: `cd astro && npm run build` outputs to `astro/dist`
- GitHub Pages/Static hosting: serve `astro/dist`.

### Incremental Steps
1) Import existing `css/main.css` into new `Default.astro` layout.
2) Move `img/` and `fonts/` to `public/` and fix asset paths.
3) Create `Head.astro` with meta/og tags based on current `head.html`.
4) Port `intro`, `employment-status`, `experience`, `skills`, `featured-projects`, `other-projects`, `footer` as components.
5) Load YAML data for components and render lists.
6) Move JS for small enhancements (switch, top button).
7) Implement 404 page.

### Notes
- Remove Jekyll-specific tags/filters; replace with plain JS helpers in Astro as needed.
- Avoid client JS unless needed; prefer server-rendered/static HTML.

