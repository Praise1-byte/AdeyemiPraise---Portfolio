# Personal Website (Portfolio)

> A simple, responsive personal portfolio website built with plain HTML, CSS and JavaScript.

This repository contains a multi-section portfolio template (home, about, services, portfolio, blog, contact) with a small style switcher, a lightbox for portfolio images and a preloader.

## Features

- Responsive layout (desktop and mobile)
- Preloader animation
- iTyped animated typing effect (used for intro)
- Portfolio filter and lightbox viewer
- Style switcher with a dark mode toggle and color skins
- Simple, dependency-free frontend (no build step)

## Tech / Files used

- HTML: `index.html`
- CSS: `css/style.css`, `css/styleSwitcher.css`, `css/skins/pink.css`
- JavaScript: `js/script.js`, `js/styleSwitcher.js`, `js/ityped.min.js`
- Images: `images/` (used for about, blog, portfolio and project previews)

## Project structure (important files)

```
personal-website/
  index.html                # Main entry
  css/
    style.css               # Main styles
    styleSwitcher.css       # Styles for style-switcher (dark mode, toggler)
    skins/
      pink.css              # Example color skin
  images/                   # Image assets (about, blog, portfolio...)
  js/
    ityped.min.js           # Typed text plugin
    script.js               # Main site JS (preloader, nav, lightbox, filters)
    styleSwitcher.js        # Dark mode / style switcher behavior
```

## Run locally (Windows - cmd.exe)

No build tools are required. You can open `index.html` directly in a browser, or run a quick static server for proper routing and console output.

Using Python 3 (if installed):

```cmd
cd path\to\personal-website
python -m http.server 8000
```

Then open http://localhost:8000 in your browser.

Using Node (npx http-server):

```cmd
cd path\to\personal-website
npx http-server -p 8080
```

Or, simply double-click `index.html` to open it in your default browser.

## Customization

- Change the main accent color by editing or adding a CSS file in `css/skins/` and updating the `<link class="alternate-style" ...>` element in `index.html`.
- Toggle dark mode: the script `js/styleSwitcher.js` adds/removes the `dark` class on `<body>` when an input with class `body-skin` changes. You can add a radio input for the dark skin (value="dark") in `index.html` or directly toggle `document.body.classList` from the console.
- Edit content sections in `index.html` (each section has a `.section` and id: `home`, `about`, `services`, `portfolio`, `blog`, `contact`).

## Developer notes

- The project is vanilla HTML/CSS/JS and intentionally has no build process.
- `js/script.js` controls the preloader, iTyped initialization, portfolio filtering, lightbox, and aside navigation. It is written to be readable and easy to extend.
- `js/ityped.min.js` is a small third-party script used for the typing effect. Keep it in `js/` if you want the same animation.

## Deploying

You can publish this site to GitHub Pages by creating a repository and pushing this folder to the `master` or `main` branch, then enabling Pages in the repo settings (choose the root `/` as the source). Alternatively, static hosts like Netlify or Vercel will also work.

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-change`
3. Make changes and commit: `git commit -am "Add some feature"`
4. Push and open a pull request

Keep changes small and focused. For layout or behavior adjustments, prefer editing `css/style.css` and `js/script.js` respectively.

## License

This README recommends using the MIT license for simple permissive reuse. Add a `LICENSE` file if you want to apply it.

---

If you want, I can also add a simple `LICENSE` file (MIT), add a dark-mode radio in `index.html`, or create a small GitHub Actions workflow to deploy to GitHub Pages—tell me which and I'll implement it

!!
