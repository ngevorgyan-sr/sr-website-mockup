// Restore the original continuous buyer/talent strips independently of the cube.
const blocks = [...document.querySelectorAll('.benefit-partners .partner-block')];
const visible = new Set();
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

for (const [index, block] of blocks.entries()) {
  const viewport = block.querySelector('.partner-logos');
  const logos = [...viewport.children];
  const group = document.createElement('div');
  group.className = 'logo-group';
  group.append(...logos);

  // One complete copy makes the end of each loop identical to its start.
  const duplicate = group.cloneNode(true);
  duplicate.setAttribute('aria-hidden', 'true');
  duplicate.inert = true;
  const track = document.createElement('div');
  track.className = 'logo-track';
  track.append(group, duplicate);
  viewport.append(track);
  viewport.classList.add('marquee-ready');

  const pause = block.querySelector('.logo-pause');
  pause.hidden = false;
  pause.addEventListener('click', () => {
    const paused = block.dataset.paused !== 'true';
    block.dataset.paused = String(paused);
    pause.setAttribute('aria-pressed', String(paused));
    pause.setAttribute('aria-label', `${paused ? 'Resume' : 'Pause'} ${index % 2 ? 'talent' : 'buyer'} logos`);
    pause.firstElementChild.textContent = paused ? '▶' : 'Ⅱ';
  });

  // Fill wide screens with complete repetitions, never stretched spacing.
  // Both halves stay identical, including the 12px gap at the loop seam.
  let repetitions = 1;
  function fitLogos() {
    const gap = parseFloat(getComputedStyle(group).columnGap) || 0;
    const cycleWidth = logos.reduce((width, logo) => width + logo.getBoundingClientRect().width + gap, 0);
    if (!cycleWidth) return;
    const needed = reducedMotion.matches ? 1 : Math.max(1, Math.ceil(viewport.clientWidth / cycleWidth));
    if (needed !== repetitions) {
      group.replaceChildren(...logos);
      for (let copy = 1; copy < needed; copy++) {
        group.append(...logos.map(logo => {
          const clone = logo.cloneNode(true);
          clone.setAttribute('aria-hidden', 'true');
          clone.inert = true;
          return clone;
        }));
      }
      duplicate.replaceChildren(...[...group.children].map(logo => logo.cloneNode(true)));
      repetitions = needed;
    }
    // Match the earlier 26px/second pace regardless of the number of logos.
    track.style.setProperty('--logo-duration', `${group.getBoundingClientRect().width / 26}s`);
  }
  const resizeObserver = new ResizeObserver(fitLogos);
  resizeObserver.observe(viewport);
  resizeObserver.observe(group);
  reducedMotion.addEventListener('change', fitLogos);
  fitLogos();
}

function syncVisibility() {
  for (const block of blocks) {
    block.dataset.visible = String(visible.has(block) && !document.hidden);
  }
}
const observer = new IntersectionObserver(entries => {
  for (const { target, isIntersecting } of entries) {
    isIntersecting ? visible.add(target) : visible.delete(target);
  }
  syncVisibility();
}, { rootMargin: '80px' });
blocks.forEach(block => observer.observe(block));
document.addEventListener('visibilitychange', syncVisibility);
