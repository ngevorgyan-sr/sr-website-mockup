(() => {
const {mountGlass}=window.SpeedrunGlass;
const effects=mountGlass();
const video=document.querySelector('#film'),input=document.querySelector('#video-file'),toggle=document.querySelector('#video-toggle');
let localURL;
input.addEventListener('change',()=>{
  const file=input.files[0];if(!file)return;
  if(localURL)URL.revokeObjectURL(localURL);
  localURL=URL.createObjectURL(file);video.src=localURL;video.play().catch(()=>{});toggle.disabled=false;
});
toggle.addEventListener('click',()=>video.paused?video.play().catch(()=>{}):video.pause());
video.addEventListener('play',()=>{toggle.textContent='Pause video';toggle.disabled=false;});
video.addEventListener('pause',()=>{toggle.textContent='Play video';});
video.addEventListener('loadeddata',()=>{toggle.disabled=false;});
// The hosted example may supply the mockup footage; the small download uses its poster.
if(video.dataset.src){video.src=video.dataset.src;if(!matchMedia('(prefers-reduced-motion: reduce)').matches)video.play().catch(()=>{});}
let resume=false;
const visibility=new IntersectionObserver(entries=>{if(!entries[0].isIntersecting){resume=!video.paused;video.pause();}else if(resume&&!document.hidden){resume=false;video.play().catch(()=>{});}});visibility.observe(video);
document.addEventListener('visibilitychange',()=>{if(document.hidden)video.pause();});
window.addEventListener('pagehide',()=>{effects.destroy();visibility.disconnect();video.pause();if(localURL)URL.revokeObjectURL(localURL);},{once:true});
})();
