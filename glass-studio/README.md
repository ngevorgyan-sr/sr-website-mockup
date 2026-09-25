# speedrun Glass Studio

Unzip this folder and double-click **index.html**. No installation or local server is required. The page contains the glass renderer, the complete Studio, and an embedded poster and font. Use a current browser with JavaScript enabled.

The online version is at [Glass Studio](https://ngevorgyan-sr.github.io/sr-website-mockup/glass-studio/).

## Play and tune

- Hover or click a button. Scroll into the quote for collection and release; click it for a fresh ripple.
- Choose **Quote** or **Buttons** in the Studio panel. Choose a phase, then play it or scrub the timeline to freeze a frame.
- Drag keyframes and Bézier handles in the graphs. Their playheads are linked to the main timeline.
- For buttons, use **Preview over video** and the **Glass surface** controls to tune refraction, frosting, highlights, tint and shadows. The download starts over an embedded still image. **Try your own video** adds moving footage from your computer; it stays local. The online example uses the mockup footage.
- **Download preset** or **Export JSON** saves all settings. **Import JSON** restores a saved preset. Changes last for this page session; download them before closing or reloading.
- **Reset defaults** loads the original starting defaults. Import the included **preset.json** to restore the locked website settings.
- Minimize the panel with its minus button or Escape; reopen it using **Glass Studio**.

The fixed navigation button has no lift or scale, matching the mockup. Reduced-motion preferences suppress animated effects. If the full shader is unavailable, native glass styling remains readable.

## Apply a preset to a real website

Use the separate [developer effects kit](https://ngevorgyan-sr.github.io/sr-website-mockup/downloads/speedrun-glass-effects.zip). That smaller runtime contains no editor. Load the exported JSON through your website's build system or server and pass each section to its matching component:

```js
import {mountGlassButton, mountGlassQuote} from './glass-effects/dist/glass-effects.js';
import './glass-effects/dist/glass-effects.css';

// `preset` is the parsed JSON downloaded from Studio.
const button = mountGlassButton(document.querySelector('.apply'), {
  video: document.querySelector('video'),
  settings: preset.button,
});
const quote = mountGlassQuote(document.querySelector('.quote'), {
  settings: preset.quote,
});
// Tear down with button.destroy() and quote.destroy() when removing the page.
```

Use `lift: false` for a fixed header button. Omit `video` for ordinary buttons. Consult the kit's integration guide for plain-script usage, React, styling and browser boundaries. Downloaded presets do not modify the public mockup or anyone else's settings.

## Source and rebuilding

`src/` includes readable renderer, editor, graph and preview code. `index.template.html` is the editable page shell; `index.html` is generated. To rebuild after editing the source, install the development dependencies with `npm install` and run `npm run build` (Node.js 22+). The built page remains self-contained.

In the original website project, `npm run package:studio` synchronizes shared source and the exact saved `src/glass/final.json` into this package. `manifest.json` records that preset's SHA-256 checksum. The build script deliberately keeps Studio in its own package, separate from the clean mockup and production effects runtime.

See **NOTICE.md** for asset and implementation notes. The video footage is not included in this download.
