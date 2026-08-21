# Athif Shaffy, Portfolio

A fast, self-contained single-page portfolio (plain HTML/CSS/JS, no build step).
Inspired by the structure of the original Start Bootstrap portfolio, rebuilt with a
modern dark theme.

## Run locally
Just open `index.html` in a browser, or serve it:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploy to GitHub Pages
1. Create a repo named `<username>.github.io` (or any repo with Pages enabled).
2. Push these files to the default branch.
3. In **Settings → Pages**, set source to the branch root. Done.

## Customize
- Text/sections: `index.html`
- Colors, spacing, fonts: CSS variables at the top of `css/style.css` (`:root`)
- Behavior (nav, scroll reveal, project filter): `js/main.js`

## Adding a project
Copy an `<article class="project">` block in the `#projectGrid` section and set
`data-cat` to one or more of: `health`, `ai`, `drones`, `industrial`, `apps`.
The filter buttons in `#projectFilters` match against those tokens.
