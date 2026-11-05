# Shepard Sitework & Clearing LLC — Website

Pure HTML, CSS and JS. No libraries, no build step. Open `index.html` in a browser.

- `index.html` — the whole one-page site, sections in spec order (header, welcome, what we do, previous work, reviews, quote form + contact, footer).
- `css/styles.css` — all styles; sizes in rem/em, mobile first. Colors are the exact logo hex values.
- `js/main.js` — small vanilla JS: gallery lightbox (native `<dialog>`), "Quote this job" links that preselect the service, quote form states (error, sending, success), footer year.
- `fonts/` — self-hosted Saira Condensed (headlines) and Barlow (body), Latin subset, both SIL Open Font License, free for commercial use. No Google Fonts request at runtime.
- `images/` — logos plus `placeholder.svg`. Stock and job photos go here, sized per `IMAGE-SIZES.md`.

## Before launch

- Photos: see `IMAGE-SIZES.md`.
- Reviews: replace the three placeholder quotes, first names and towns.
- Quote form: set the form `action` to the form handler, and add the Cloudflare Turnstile widget at the marked spot. Until `action` is set, submitting shows the success message without sending anything.
- Opening `index.html` by double-click works. Chrome logs one harmless console warning about the font preload on `file://`; it goes away once the site is served over http(s).
