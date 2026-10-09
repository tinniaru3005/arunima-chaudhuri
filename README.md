# arunima-chaudhuri

My personal site, built with React, TypeScript and Vite.

## Run it

```bash
npm install
npm run dev      # local dev server
npm run build    # production build in dist/
npm run preview  # serve the build locally
```

## How it's organized

```
src/
  data/                 all text and links, one file per section
  components/
    sections/           one component (+ its CSS) per page section
    ui/                 shared pieces: Section, Tile, Chips, CopyEmail, RichText
    icons/              SVG icons
  styles/
    tokens.css          colors, fonts, light/dark theme
    global.css          base styles and grid helpers
  types.ts              shared content types
  App.tsx               puts the sections in order
```

To update content (a new job, talk, post or award), edit the matching file in `src/data/`.
You don't need to touch any components.

## Deploy

`npm run build` outputs a static site in `dist/` with relative asset paths,
so it works on GitHub Pages, Netlify or Vercel as is.
