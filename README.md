# Svelide

> Svelte + Slide = Svelide

Make your slide with Svelte(HTML+CSS+JS).

## Features

- Make slide
  - Preview
  - List view (optimized for PDF export)
    1. Run `npm run dev`
    2. Open `http://localhost:5173/list`
    3. Print to PDF
  - Dynamically slide
    - Use JavaScript(TypeScript)
    - Use CSS (SCSS)
  - Build for SPA
- Publish
  - Build and Deploy
    - Configured GitHub Actions for GitHub Pages
    - Other platforms
- Fully customizable
  - This is just a template. NOT a framework.

## Usage

### Setup

```sh
npx degit ssssota/svelide slide-directory-name
cd slide-directory-name
```

### Install dependencies

```sh
npm install
# yarn
# pnpm install
```

### Preview

```sh
npm run dev
# yarn dev
# pnpm dev
```

### Build

```sh
npm run build
# yarn build
# pnpm build
```

### Custom

- `public/`
  - Static files
  - `global.css`
  - `favicon.png`
- `src/`
  - `slides/`
    - Insert your slides!
- `index.html`
  - title
  - OGP settings
  - meta tags

## Examples

- [Svelteを説く。](https://ssssota.github.io/svelte-intro-lt/)
- [Svelteでライブラリを作る](https://ssssota.github.io/make-library-with-svelte/)
