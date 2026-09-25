# Developer Integration

## API

| Entry point | Options | Result |
| --- | --- | --- |
| `mountGlassButton(element, options)` | `video`: video element/selector; `lift`: boolean, default true; `settings`: partial button overrides | Component controller |
| `mountGlassQuote(element, options)` | `content`: existing child wrapper; `headerOffset`: fixed-header height, default64; `scroll`: default true; `settings`: partial quote overrides | Component controller |
| `mountGlass(root)` | Scan a document or container for the data attributes in the quick start | Group with `destroy()` |
| `getGlassPreset()` | None | Fresh copy of the shipped button and quote configuration |

Component controllers expose `play({x,y})`, `reset()`, `update(partialSettings)` and `destroy()`. Origin coordinates are normalized from0 to1. For example `{x:.5,y:0}` is top center. Calling a quote's `play()` always means a fresh click ripple; gathering occurs only from scroll. `reset()` stops the effect and rearms the quote for the next scroll update. Mounting the same element again returns its existing controller; destroy it first to change video/lift/header options.

`settings` uses the same nested properties as `preset.json`. Arrays replace entire keyframe tracks; nested objects merge. The supplied preset is authoritative. Strengths are mostly0–1, durations are milliseconds, stretch is a fractional scale delta, lift/blur/depth use CSS pixels. `specularSharpness:.2` corresponds to20% in the former editor. `bevelMode:'pill'` is the internal identifier for the polished **rounded bevel cross-section**; it does not make the button outline pill-shaped. `cornerRadius:null` respects the CSS outline. `getGlassPreset()` returns a copy so overrides cannot mutate the defaults for other components.

## Layout and Styling

The library only styles its own component classes. It does not ship the homepage, navigation, typography system, fonts, galleries or editor. Set your native control's font and layout normally. Use these variables on the host:

```css
.my-cta {
  --glass-button-padding: 12px 28px;
  --glass-button-height: 48px;
  --glass-button-radius: 4px;
  font: inherit;
}
.my-quote {
  --glass-quote-padding: 96px 8vw;
  --glass-quote-background: #f3f3f3;
}
```

For a centered absolutely positioned button, use `--glass-base-transform: translate(-50%,-50%)` instead of assigning a competing `transform`. Do not put `overflow:hidden` on an ancestor immediately around a button: its shadow and raised shell need room. The quote itself clips its ripple inside its frame. Put quote background and padding on the inner `.sr-quote-content` via the variables above so its owned pixels warp with the text. The outer quote supplies the fixed border and corner mask. Button outlines, light, label, material and shadow deform together; the native hit area cancels the lift/scale so the clickable footprint stays stable.

The default video outline is rectangular with5.378px corners; the kit does not force the homepage's button size or typography. The demo reproduces its15% smaller size with CSS. Header buttons use `lift:false` (or `data-glass-lift="off"`) to preserve their size and position while still rippling.

## Custom Button Finishes

The separate [button comparison](demo/buttons/index.html) uses the Figma `BUTTON_Demo` frame and repeats the existing homepage section. Numbering follows the design brief: 01 current glass, 02 grey gloss, 03 flat black (the two new parent frames in Figma have their names reversed). The main website and locked preset remain unchanged.

For a custom CSS finish, call `mountGlassButton(element, {settings: {surface: {opacity: 0}}})`. This hides and stops the static material renderer; ripple, stretch, lift, scale and their settings are retained. Then place decorative layers **inside `.sr-button-clip`**, beneath the label, with `pointer-events: none` and `aria-hidden="true"`. That wrapper clips the finish before the whole visible button deforms. Override the default `.sr-button-content::before` fill and `.sr-button-clip::after` stroke for your custom design. Use the existing surface shadow variables when preserving the tuned cast shadow.

`demo/buttons/buttons.css` and `buttons.js` provide the complete grey/black examples. The grey design uses its Figma gradient, 4px corners, inset highlights and contact shadow, plus a moving gloss and edge reflection. These accents run on entry, visible keyboard focus and click, stop when hidden/offscreen, and respect reduced motion. They use the locked ripple duration and introduce no continuous animation loop. Production code should attach these custom decorations through its own component lifecycle and remove them along with any custom listeners on unmount; `destroy()` cleans up library-owned elements only.

The black variant also applies two local overrides: `glow = preset.button.glow * 1.25` for iridescence (currently 0.20) and `sheen = preset.button.sheen * (4/3)` for the moving ring highlight (currently 0.04). Spectrum, softness, timing, deformation and hover tracks stay as saved. These overrides are in the demo adapter, leaving `preset.json` and the other designs unchanged.

## Framework Lifecycle

Use the provided React examples for reactive content. They render stable `.sr-button-visual > .sr-button-clip > .sr-button-content` or `.sr-quote-content` wrappers, so label/content updates remain framework-owned. Run initialization only on the client after mounting. Always call `destroy()` on route changes or unmount; cleanup is idempotent and supports React Strict Mode's setup/cleanup cycle. The module can be imported during server rendering because DOM access begins at mount. Load the CSS through the application's normal global CSS mechanism. Do not let a framework replace the library's canvas or overlay nodes mid-animation.

For Webflow or another script-based CMS, include the CSS and classic-script build, then run `SpeedrunGlass.mountGlass()` after the content is present. For dynamically inserted content, mount that subtree and retain its controller for later cleanup. Load one copy of the library per document to share GPU resources.

## Video, Pixels and Performance

The video option accepts an actual `<video>` element. The material reads its current frame or poster and matches its `object-fit:cover` crop and object position. The library does not start, mute, pause or seek the media; the host application owns playback. Pause decorative footage offscreen and when the tab is hidden. Set `crossorigin="anonymous"` **before** assigning a cross-origin source, and configure the media server's access headers; same-origin video/poster files are simplest.

Video optics include refraction, chromatic aberration, Gaussian frosting, rounded edge distortion, specular and Fresnel light. Ordinary buttons use native backdrop blur plus material lighting: they do **not** sample or refract arbitrary DOM content behind them. The ripple distorts the pixels owned by the component. This deliberate boundary avoids screenshot capture and a page-sized rendering loop.

The renderer shares one WebGL stage, caps tile density at1.5× and roughly380,000 pixels, clips final shading to the visible body, caches blur kernels and unchanged crops, and stops material updates when hidden/offscreen. Live video repaint is capped at about30fps; active hover/ripple animation uses the display clock. Ripple/hover have no idle animation loop. The package includes no sliders, timeline, tuning persistence, or development endpoint.

## Interaction and Accessibility

- Pointer entry chooses the nearest edge; click starts at the pointer; leaving returns lift/scale without another shimmer.
- Quote windup starts at13% visible and releases at54%, from top center. It rearms after leaving the viewport. Clicks skip windup and keep the softened onset.
- Keyboard focus previews the button. Native buttons and links retain their normal semantics, handlers and focus ring. Set button `type` explicitly in forms.
- Disabled controls start no new animation. `aria-disabled` remains the host application's responsibility for preventing navigation/actions.
- The decorative quote is not made a button. Text stays selectable and interactive descendants keep their own click behavior.
- Reduced motion suppresses geometric deformation and shortens light feedback. Forced colors use a readable native-style fallback.

Modern Chromium is verified in the accompanying handoff checks. Safari-specific SVG filter invalidation is included. Test the real integration on physical iPhone/Safari and Firefox before launch; no claim is made that those platforms have been physically verified. Unsupported or unavailable WebGL falls back to native glass while labels and links remain functional.

If a strict Content Security Policy is used, allow the generated `data:` displacement image and the package's inline style updates under your chosen policy. The effect itself does not make network requests. Your video, fonts and other assets follow the host application's normal policies.

## Rebuilding

The source package includes its runtime and frozen preset. Run `npm install`, then `npm run build` in this folder to regenerate `dist`. At the website root, `npm run package:glass` first synchronizes source and the latest saved preset, then produces `artifacts/speedrun-glass-effects.zip`. The included checksum makes it easy to verify which art direction the developer has received.

The same build also generates a self-contained `demo/index.html` from `demo/index.template.html`, the classic-script distribution and the demo's styles/media. This example supports direct opening from Finder; it has no module imports or external visual dependencies. Edit the template, `demo.js` and `demo.css`, then rebuild instead of editing generated HTML. The hosted example optionally adds the mockup's video; the downloadable example uses its embedded poster until a local video is selected. The reusable production JS/CSS remain separate and unchanged by this demo-only embedding.

`build-button-demo.mjs` also builds `demo/buttons/index.html`, embedding the fonts, SVG logos, CSS and classic runtime. At the website root, packaging refreshes its section markup, responsive layout and logo-strip interactions from the actual homepage. The downloadable kit includes those inputs so it rebuilds independently of the website. Edit `demo/buttons/index.template.html`, `buttons.css` and `buttons.js` for the comparison; generated HTML is not the source.
