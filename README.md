# COXBA — coxsbazar.com

Premium, cinematic 3D homepage and landing site for the **COXBA** brand
(Cox's Bazar, Bangladesh): an e-commerce marketplace + a digital products & SaaS division.

## Stack

- **Vite + React 18** (JavaScript) · **React Router** (`/`, `/shop`, `/digital-products`)
- **Three.js** — custom lightweight ocean shader (no R3F, no texture files — all noise/sand/hills are generated procedurally on canvases at runtime)
- **Web Audio API** — ocean sound synthesized in the browser (no audio files)
- Hand-written CSS design system (no framework), lazy-loaded routes and ocean chunk

## Run

```bash
npm install
npm run dev       # dev server (http://localhost:5173)
npm run build     # production build → dist/
npm run preview   # serve the production build locally
```

## Structure

```
index.html            SEO meta (title, description, og, canonical → https://coxsbazar.com)
public/favicon.svg    COXBA wave mark
public/audio/README.md  how to drop in a real licensed ocean loop (optional)
src/components/OceanScene.jsx      3D sea: Gerstner-style waves, sun glint, foam, pointer ripples
src/components/Navbar.jsx          logo, nav, Sound ON/OFF + volume slider, mobile hamburger
src/hooks/useOceanSound.jsx        synthesized looping sea sound (starts on user gesture)
src/hooks/usePrefersReducedMotion.js / useLowPower.js   accessibility & perf fallbacks
src/pages/Home.jsx Shop.jsx DigitalProducts.jsx
```

## How to replace assets

- **Ocean sound** — it is synthesized; to use a real recording instead, see `public/audio/README.md`
  (drop `ocean.mp3` there and swap the marked section in `src/hooks/useOceanSound.jsx`).
  Do not use unlicensed/YouTube audio.
- **Sky / sun / hills** — all procedural gradients + canvas textures in `OceanScene.jsx`; tune colors there.
- **Product images** — product cards in `Shop.jsx` use emoji + gradient art as placeholders;
  swap `.product-art` for `<img loading="lazy">` when real photos exist.
- **Favicon / logo** — `public/favicon.svg` and the inline SVG in `Navbar.jsx` / `Footer.jsx`.

## Fallbacks & performance

- `prefers-reduced-motion: reduce` → single calm frame, no animation loop, instant CSS animations off.
- Low-power / data-saver devices → simplified rendering path; WebGL failure → static SVG/CSS beach scene.
- Pixel ratio capped (≤1.75), fish-eye-free small plane, render loop pauses when the tab is hidden,
  Three.js chunk lazy-loaded after first paint, routes lazy-loaded.

## Deployment

Static SPA. Unknown paths must rewrite to `index.html`:
`public/_redirects` (Netlify) and `vercel.json` (Vercel) are included. Any static host with a
SPA fallback (nginx `try_files ... /index.html`) works the same.

## Not built yet (by design)

Cart, checkout, payments, inventory, user accounts, real SaaS products. Product catalogue,
prices and "coming soon" items are curated placeholders.
