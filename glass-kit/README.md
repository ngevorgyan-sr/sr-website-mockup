# speedrun Glass Effects

The exact saved button and quote ripple settings from the approved mockup, packaged independently of the website. No framework, animation library, editor, analytics, network service, or runtime dependency is required. The small example includes a poster; choose a local video to test refraction over moving footage.

## Quick Start: Two Files

Copy `dist/glass-effects.js` and `dist/glass-effects.css` into your website. Load them once, then mark the elements you want to enhance:

```html
<link rel="stylesheet" href="/glass/glass-effects.css">

<button type="button" data-glass-button>Explore Capital</button>
<a href="/apply" data-glass-button data-glass-lift="off">Apply now</a>

<section data-glass-quote data-glass-header-offset="64">
  <blockquote>Your quote goes here.</blockquote>
  <p>Your attribution goes here.</p>
</section>

<script type="module">
  import {mountGlass} from '/glass/glass-effects.js';
  const effects = mountGlass();
  // For client-side route changes, call effects.destroy() before removing the page.
</script>
```

Use real `<a>` links and `<button>` controls; your existing navigation and click handlers remain in place. `data-glass-lift="off"` reproduces the fixed top navigation CTA. Other buttons keep the saved 3px lift and 1.027× scale.

## Glass over Video

```html
<div class="your-video-section">
  <video id="hero-film" src="/media/hero.mp4" poster="/media/poster.jpg"
         muted loop playsinline></video>
  <a href="/apply" data-glass-button data-glass-video="#hero-film">Apply now</a>
</div>
```

Place the button visually over the video and use `object-fit: cover` on the video. The effect samples that video directly; you control video playback. Serve media from the same origin, or configure CORS before loading it. A cross-origin file without the required access falls back to ordinary glass. Video buttons use the separate saved tint and dark-only shadow.

## JavaScript / Framework Usage

```js
import {mountGlassButton, mountGlassQuote} from '@speedrun/glass-effects';
import '@speedrun/glass-effects/styles.css';

const button = mountGlassButton(document.querySelector('#apply'), {lift: false});
const quote = mountGlassQuote(document.querySelector('#belief'), {headerOffset: 64});
// Remove every listener, observer and owned visual on unmount:
button.destroy();
quote.destroy();
```

For a bundler project, install the downloaded folder locally with `npm install ./vendor/speedrun-glass-effects`. It is not published to the npm registry. Ready-made React / Next.js client examples are in `examples/`; initialize after mount and return `destroy()` from the effect cleanup. For plain HTML, the prebuilt files work without installing or building anything. A classic-script build is also provided as `dist/glass-effects.global.js`, exposing `window.SpeedrunGlass`.

## Accelerated Quotes in Safari

Version 1.2 adds an optional Safari GPU renderer for the included quote layout. The demo enables it. To use it on your own quote, keep a **flat opaque background**, put quote text in `<blockquote>`, and wrap attribution paragraphs in `.quote-attribution`:

```html
<section data-glass-quote data-glass-quote-gpu
         style="--glass-quote-background:#f3f3f3">
  <blockquote>Your quote goes here.</blockquote>
  <div class="quote-attribution"><p>Your attribution goes here.</p></div>
</section>
```

For direct mounting, pass `{safariGPU: true}` to `mountGlassQuote`. The React example accepts the same `safariGPU` prop. This renderer paints only the documented text and optional `.quote-avatars img` portraits; it is **not** an arbitrary HTML renderer. Quotes with other visible content, decorative backgrounds or unsupported styling should keep the default SVG path by omitting the option/attribute. See the [supported layout contract](INTEGRATION.md#safari-quote-acceleration) before opting in.

The native HTML remains available for selection and accessibility. Chrome keeps its existing SVG rendering, and Safari falls back to SVG while the GPU is unavailable, the text is selected or the source is rebuilding. The locked appearance and timing settings are unchanged.

## Run the Included Example

Unzip the complete download, then double-click **demo/index.html**. It embeds the classic-script runtime, styles, font and poster directly in that file, so no server or installation is needed. Hover/click either button and scroll down to the quote. Choose **Try your own video** to test moving footage; the download starts with a still poster.

You can also serve the folder over HTTP (for example `python3 -m http.server 8090`) and open `http://localhost:8090/demo/`. The production ES-module files in `dist/` are still intended for a website or bundler. See [INTEGRATION.md](INTEGRATION.md) for the API, styling, behavior, and production notes.

## Compare Three Button Designs

Open **[demo/buttons/index.html](demo/buttons/index.html)**, also self-contained, to compare the `BUTTON_Demo` Figma designs. The same “What you get” section is repeated with **01 Current Glass**, **02 Grey Gloss**, and **03 Flat Black**. Hover, click or use keyboard focus to try the same saved ripple, stretch, lift and scale on each. These are demonstration buttons and do not navigate away.

The grey design adds an animated edge reflection and surface gloss during interaction. Its finish and the black fill are CSS layers inside the existing deforming shell. Their static glass material is disabled, so the new bases do not run an unused material shader. Motion and timing retain the locked preset. The black design uses stronger ripple iridescence (0.27) and a slightly brighter moving ring highlight (0.04) for visibility on its dark fill; it stays flat at rest.

Readable finish styles and interaction code are in `demo/buttons/buttons.css` and `buttons.js`. See **Custom button finishes** in the integration guide when adapting them to your own site.

## What to Hand to the Developer

- `dist/`: ready-to-use JavaScript, scoped CSS and TypeScript declarations.
- `preset.json`: the exact locked values and keyframes.
- `src/`: readable adapter, shader and animation source.
- `examples/`: React button and quote components with cleanup.
- `demo/`: standalone button/quote example and the three-design comparison in `demo/buttons/`.
- `manifest.json`: version and preset checksum for comparison with the mockup.

Changing the mockup's saved settings does not update an already downloaded kit. Re-export it with the website's `npm run package:glass` command after an approved tuning change.
